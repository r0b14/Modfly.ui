import ts from 'typescript';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
const root = process.cwd();
const out = path.join(root, 'apps/docs/generated');
await mkdir(path.join(out, 'stories'), { recursive: true });
const sourceRoot = path.join(root, 'packages/ui/src');
const config = ts.readConfigFile(path.join(root, 'packages/ui/tsconfig.json'), ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, path.join(root, 'packages/ui'));
const program = ts.createProgram(parsed.fileNames, parsed.options);
const checker = program.getTypeChecker();
const index = program.getSourceFile(path.join(sourceRoot, 'index.ts'));
const exports = checker.getExportsOfModule(checker.getSymbolAtLocation(index));
const catalog = [];
let registry = "'use client';\n";
const mappings = [];
const categories = { atoms: 'Átomos', molecules: 'Moléculas', organisms: 'Organismos', templates: 'Templates' };
for (const [category, label] of Object.entries(categories)) {
  for (const dir of (await readdir(path.join(sourceRoot, 'components', category))).sort()) {
    const folder = path.join(sourceRoot, 'components', category, dir);
    const stories = (await readdir(folder)).filter(f => f.endsWith('.stories.tsx')).sort();
    if (!stories.length) continue;
    const slug = dir.toLowerCase();
    const page = path.join(root, 'apps/docs/app/(dashboard)/docs/components', slug, 'page.tsx');
    let old = ''; try { old = await readFile(page, 'utf8'); } catch { /* nova página */ }
    const previous = old.match(/className="doc-lead">([\s\S]*?)<\/p>/)?.[1];
    const previousData = await readFile(path.join(out, 'catalog.json'), 'utf8').then(JSON.parse).catch(() => []);
    const description = previous?.replace(/<[^>]+>/g, '').replace(/\{[^}]*\}/g, ' ').replace(/\s+/g, ' ').trim() || previousData.find(c => c.slug === slug)?.description || `Componente ${dir} para compor experiências de aprendizagem.`;
    const components = [];
    for (const file of stories) {
      const original = await readFile(path.join(folder, file), 'utf8');
      const componentName = original.match(/component:\s*(\w+)/)?.[1];
      if (!componentName) throw new Error(`Story sem componente: ${file}`);
      const safe = componentName;
      const transformed = original.replace(/from ["']\.\/[^"']+["']/g, 'from "@modfly/ui"');
      const code = ts.transpileModule(transformed, { compilerOptions: { jsx: ts.JsxEmit.Preserve, target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext } }).outputText;
      await writeFile(path.join(out, 'stories', safe + '.jsx'), `'use client';\n// Gerado por pnpm docs:generate a partir da story original.\n${code}`);
      registry += `import * as ${safe} from './stories/${safe}';\n`;
      mappings.push(`${JSON.stringify(componentName)}: ${safe}`);
      const sym = exports.find(s => s.name === componentName);
      const type = sym && checker.getTypeOfSymbolAtLocation(sym, index);
      const signature = type?.getCallSignatures()[0];
      const param = signature?.getParameters()[0];
      const propType = param && checker.getTypeOfSymbolAtLocation(param, index);
      const props = propType?.getProperties().map(p => ({ name: p.name, required: !(p.flags & ts.SymbolFlags.Optional), type: checker.typeToString(checker.getTypeOfSymbolAtLocation(p, index), undefined, ts.TypeFormatFlags.NoTruncation), description: ts.displayPartsToString(p.getDocumentationComment(checker)) })) ?? [];
      const sf = ts.createSourceFile(file, original, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
      const firstStory = sf.statements.filter(ts.isVariableStatement).find(s => s.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword));
      const obj = firstStory?.declarationList.declarations[0]?.initializer;
      const args = obj && ts.isObjectLiteralExpression(obj) ? obj.properties.find(p => p.name?.getText(sf) === 'args')?.initializer?.getText(sf) : '{}';
      const helpers = sf.statements.filter(ts.isVariableStatement).filter(s => !s.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword) && !s.declarationList.declarations.some(d => d.name.getText(sf) === 'meta')).map(s => s.getText(sf)).join('\n');
      components.push({ name: componentName, initialVariant: firstStory?.declarationList.declarations[0]?.name.getText(sf), props, example: `'use client';\nimport { ${componentName} } from '@modfly/ui';\nimport type { ComponentProps } from 'react';\n\n${helpers ? helpers + '\n\n' : ''}const props: ComponentProps<typeof ${componentName}> = ${args || '{}'};\n\nexport default function Exemplo() {\n  return <${componentName} {...props} />;\n}` });
    }
    catalog.push({ slug, name: dir[0].toUpperCase() + dir.slice(1), category: label, description, source: `packages/ui/src/components/${category}/${dir}`, components });
    await mkdir(path.dirname(page), { recursive: true });
    await writeFile(page, `import { ComponentDoc } from '@/components/docs/ComponentDoc';\nexport default function Page() { return <ComponentDoc slug=${JSON.stringify(slug)} />; }\n`);
  }
}
await writeFile(path.join(out, 'catalog.json'), JSON.stringify(catalog, null, 2) + '\n');
await writeFile(path.join(out, 'stories.jsx'), registry + `\nexport const stories = {${mappings.join(',\n')}};\n`);
console.log(`Catálogo: ${catalog.length} páginas, ${mappings.length} componentes exportados.`);

const readmePath = path.join(root, 'README.md');
const readme = await readFile(readmePath, 'utf8');
const rows = ['| Camada | Componentes |', '| --- | --- |'];
for (const label of Object.values(categories)) rows.push(`| ${label} | ${catalog.filter(c => c.category === label).map(c => `[${c.name}](https://modfly.design/docs/components/${c.slug})`).join(' · ')} |`);
await writeFile(readmePath, readme.replace(/<!-- component-inventory:start -->[\s\S]*?<!-- component-inventory:end -->/, '<!-- component-inventory:start -->\n' + rows.join('\n') + '\n<!-- component-inventory:end -->'));
