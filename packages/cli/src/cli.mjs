#!/usr/bin/env node
import { readFile, writeFile, mkdir, lstat, realpath } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const help = `Modfly UI — componentes feitos para aprender\n\nmodfly init [--cwd pasta]\nmodfly list\nmodfly add <componente...> [--dry-run] [--force] [--no-install] [--cwd pasta]\n\ninit usa src/components/modfly quando src existe, ou components/modfly.\nImporte o styles.css indicado após init. add preserva arquivos editados; --force permite substituição.`;
async function exists(file) { try { await lstat(file); return true; } catch (error) { if (error.code === 'ENOENT') return false; throw error; } }
async function safeTarget(cwd, relative) {
  if (path.isAbsolute(relative) || relative.split(/[\\/]/).includes('..')) throw new Error(`Destino inválido: ${relative}`);
  const target = path.resolve(cwd, relative);
  if (!target.startsWith(cwd + path.sep)) throw new Error('O destino precisa ficar dentro do projeto.');
  let current = target;
  while (current !== cwd) { if (await exists(current) && (await lstat(current)).isSymbolicLink()) throw new Error(`Destino contém link simbólico: ${current}`); current = path.dirname(current); }
  return target;
}
export async function run(args = process.argv.slice(2)) {
  const cwdIndex = args.indexOf('--cwd');
  const cwd = await realpath(cwdIndex >= 0 ? args[cwdIndex + 1] ?? '' : process.cwd());
  if (cwdIndex >= 0) args = args.filter((_, index) => index !== cwdIndex && index !== cwdIndex + 1);
  const [command, ...rest] = args;
  if (!command || command === '--help' || command === '-h') { console.log(help); return; }
  const registry = JSON.parse(await readFile(new URL('../registry/index.json', import.meta.url), 'utf8'));
  if (command === '--version') { console.log(registry.version); return; }
  if (command === 'list') { console.log(registry.entries.map(e => `${e.name.padEnd(24)} ${e.category}`).join('\n')); return; }
  const pkgPath = path.join(cwd, 'package.json');
  if (!await exists(pkgPath)) throw new Error('Execute dentro de um projeto com package.json.');
  const pkg = JSON.parse(await readFile(pkgPath, 'utf8'));
  if (!pkg.dependencies?.react && !pkg.devDependencies?.react) throw new Error('Instale React antes de configurar Modfly.');
  const configFile = await safeTarget(cwd, 'modfly.json');
  if (command === 'init') {
    if (await exists(configFile)) throw new Error('modfly.json já existe; edite a configuração existente.');
    const directory = (await exists(path.join(cwd, 'src')) ? 'src/' : '') + 'components/modfly';
    await writeFile(configFile, JSON.stringify({ version: registry.version, directory }, null, 2) + '\n', { flag: 'wx' });
    console.log(`Configuração criada. Use modfly add citation. Depois importe "./${directory}/styles.css" no CSS/entrypoint global (ajuste o caminho relativo).`);
    return;
  }
  if (command !== 'add') throw new Error(`Comando desconhecido: ${command}`);
  const flags = rest.filter(a => a.startsWith('--'));
  if (flags.some(a => !['--force', '--dry-run', '--no-install'].includes(a))) throw new Error('Opção desconhecida. Use --help.');
  const names = rest.filter(a => !a.startsWith('--'));
  if (!names.length) throw new Error('Informe ao menos um componente. Use modfly list.');
  const config = JSON.parse(await readFile(configFile, 'utf8'));
  if (config.version !== registry.version) throw new Error(`Catálogo incompatível: projeto ${config.version}, CLI ${registry.version}. Use a mesma versão.`);
  if (typeof config.directory !== 'string') throw new Error('directory inválido em modfly.json.');
  await safeTarget(cwd, config.directory);
  const selected = names.map(name => { const entry = registry.entries.find(e => e.name === name.toLowerCase().replaceAll('-', '')); if (!entry) throw new Error(`Componente desconhecido: ${name}`); return entry; });
  const pending = [];
  for (const file of new Set(selected.flatMap(e => e.files))) {
    const target = await safeTarget(cwd, path.join(config.directory, file));
    const contents = registry.files[file];
    if (await exists(target)) {
      if (await readFile(target, 'utf8') === contents) continue;
      if (!flags.includes('--force')) throw new Error(`Arquivo modificado: ${path.relative(cwd, target)}. Nenhum arquivo copiado. Use --force para substituir.`);
    }
    pending.push({ target, contents });
  }
  const dependencies = Object.entries(Object.assign({}, ...selected.map(e => e.dependencies))).filter(([name]) => !pkg.dependencies?.[name] && !pkg.devDependencies?.[name]);
  console.log(`${pending.length} arquivo(s); dependências novas: ${dependencies.map(([n,v]) => `${n}@${v}`).join(', ') || 'nenhuma'}.`);
  if (flags.includes('--dry-run')) return;
  for (const { target, contents } of pending) { await mkdir(path.dirname(target), { recursive: true }); await writeFile(target, contents); }
  if (dependencies.length && !flags.includes('--no-install')) {
    const manager = pkg.packageManager?.split('@')[0] || (await exists(path.join(cwd, 'pnpm-lock.yaml')) ? 'pnpm' : await exists(path.join(cwd, 'yarn.lock')) ? 'yarn' : await exists(path.join(cwd, 'bun.lock')) ? 'bun' : 'npm');
    if (!['pnpm','npm','yarn','bun'].includes(manager)) throw new Error('Gerenciador não suportado. Instale as dependências listadas manualmente.');
    const result = spawnSync(manager, [manager === 'npm' ? 'install' : 'add', ...dependencies.map(([n,v]) => `${n}@${v}`)], { cwd, stdio: 'inherit', shell: false });
    if (result.error || result.status !== 0) throw new Error('Arquivos copiados, mas a instalação falhou. Instale as dependências listadas e execute novamente.');
  }
  for (const entry of selected) console.log(`${entry.name}: ${config.directory}/${entry.entry.replace(/\.(tsx|ts)$/, '')}`);
  console.log(`Importe ${config.directory}/styles.css uma vez. O código copiado pertence ao seu projeto. Preserve a licença MIT.`);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) run().catch(error => { console.error(`Modfly: ${error.message}`); process.exitCode = 1; });
