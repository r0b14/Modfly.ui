import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { transform } from '@svgr/core';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const version = JSON.parse(await readFile(path.join(root, 'packages/cli/package.json'), 'utf8')).version;
const files = {};
const entries = [];
async function collect(absolute, namespace, sourceRoot) {
  const relative = path.relative(sourceRoot, absolute).split(path.sep).join('/');
  const key = `${namespace}/${relative}`;
  if (files[key]) return key;
  let text = await readFile(absolute, 'utf8');
  files[key] = '';
  const matches = [...text.matchAll(/(?:from\s*|import\s*)['"](\.[^'"]+)['"]/g)];
  for (const match of matches) {
    const spec = match[1];
    const target = path.resolve(path.dirname(absolute), spec.replace(/\?url$/, ''));
    if (!target.startsWith(sourceRoot + path.sep)) throw new Error(`Import fora do pacote: ${spec}`);
    if (/\.(svg|png|jpe?g|webp)(\?url)?$/.test(spec)) {
      const suffix = spec.endsWith('.svg') ? '.tsx' : '.ts';
      const assetKey = `${namespace}/${path.relative(sourceRoot, target).split(path.sep).join('/')}${spec.endsWith("?url") ? ".url" : ""}.asset${suffix}`;
      if (!files[assetKey]) {
        const bytes = await readFile(target);
        if (spec.endsWith('.svg')) files[assetKey] = await transform(bytes.toString(), { plugins: ['@svgr/plugin-jsx'], typescript: true, jsxRuntime: 'automatic', expandProps: 'end' }, { componentName: 'Asset' });
        else { const mime = target.endsWith('.svg') ? 'image/svg+xml' : target.endsWith('.png') ? 'image/png' : target.endsWith('.webp') ? 'image/webp' : 'image/jpeg'; files[assetKey] = `export default ${JSON.stringify(`data:${mime};base64,${bytes.toString('base64')}`)};\n`; }
      }
      const converted = spec.replace(/\?url$/, '.url') + '.asset';
      text = text.replaceAll('"' + spec + '"', '"' + converted + '"').replaceAll("'" + spec + "'", "'" + converted + "'");
    } else {
      let found;
      for (const candidate of [target, target + '.ts', target + '.tsx', path.join(target, 'index.ts'), path.join(target, 'index.tsx')]) {
        try { await readFile(candidate); found = candidate; break; } catch { /* próxima extensão */ }
      }
      if (!found) throw new Error(`Import não resolvido: ${absolute} → ${spec}`);
      await collect(found, namespace, sourceRoot);
    }
  }
  files[key] = absolute.endsWith('.tsx') && !text.startsWith("'use client'") && !text.startsWith('"use client"') ? `'use client';\n${text}` : text;
  return key;
}
const uiRoot = path.join(root, 'packages/ui/src');
for (const category of ['atoms', 'molecules', 'organisms', 'templates']) {
  for (const dir of (await readdir(path.join(uiRoot, 'components', category))).sort()) {
    const start = path.join(uiRoot, 'components', category, dir, 'index.tsx');
    try { await readFile(start); } catch { continue; }
    const entry = await collect(start, 'ui', uiRoot);
    entries.push({ name: dir.toLowerCase(), category, entry, dependencies: { '@emotion/css': '^11.13.5' } });
  }
}
// Variantes exportadas também podem ser instaladas pelo nome público.
const publicIndex = await readFile(path.join(uiRoot, 'index.ts'), 'utf8');
for (const match of publicIndex.matchAll(/export\s*\{([^}]+)\}\s*from\s*["'](\.\/components\/[^"']+)["']/g)) {
  const directory = match[2].split('/').at(-1).toLowerCase();
  const parent = entries.find(e => e.name === directory);
  if (!parent) continue;
  for (const name of match[1].split(',').map(n => n.trim().toLowerCase()).filter(Boolean)) {
    if (!entries.some(e => e.name === name)) entries.push({ ...parent, name });
  }
}
const avRoot = path.join(root, 'packages/ui-avamec/src');
const avEntry = await collect(path.join(avRoot, 'index.ts'), 'ui-avamec', avRoot);
for (const name of ['questionoption', 'questionmultipleanswer', 'questiontrueorfalse', 'questiongrid', 'questioncorrelation', 'questiondragdrop', 'questionwritten', 'sendactivitybutton', 'activityquestions']) entries.push({ name, category: 'avamec', entry: avEntry, dependencies: {} });
files['ui/styles.css'] = await readFile(path.join(root, 'packages/ui/dist/styles.css'), 'utf8');
files['ui-avamec/styles.css'] = await readFile(path.join(avRoot, 'styles.css'), 'utf8');
files['LICENSE'] = await readFile(path.join(root, 'LICENSE'), 'utf8');
files['styles.css'] = '@import "./ui/styles.css";\n@import "./ui-avamec/styles.css";\n';
// Cada entrada inclui apenas a árvore transitiva de código e os estilos comuns.
function closure(key, result = new Set()) {
  if (result.has(key)) return result;
  result.add(key);
  for (const match of files[key].matchAll(/(?:from\s*|import\s*)['"](\.[^'"]+)['"]/g)) {
    const base = path.posix.normalize(path.posix.join(path.posix.dirname(key), match[1]));
    const found = [base, base + '.ts', base + '.tsx', base + '/index.ts', base + '/index.tsx'].find(p => p in files);
    if (found) closure(found, result);
  }
  return result;
}
for (const entry of entries) {
  entry.files = [...closure(entry.entry), 'ui/styles.css', 'ui-avamec/styles.css', 'styles.css', 'LICENSE'];
  entry.dependencies = entry.files.some(file => files[file].includes('@emotion/css')) ? { '@emotion/css': '^11.13.5' } : {};
}
await mkdir(path.join(root, 'packages/cli/registry'), { recursive: true });
await writeFile(path.join(root, 'packages/cli/registry/index.json'), JSON.stringify({ version, entries, files }));
console.log(`Catálogo ${version}: ${entries.length} entradas, ${Object.keys(files).length} arquivos.`);
