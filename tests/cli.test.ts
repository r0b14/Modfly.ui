// @vitest-environment node
import { afterEach, expect, it } from 'vitest';
import { mkdtemp, readFile, writeFile, mkdir, rm, readdir, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
const cli = path.resolve('packages/cli/src/cli.mjs');
const temporary: string[] = [];
async function project() { const cwd = await mkdtemp(path.join(tmpdir(),'modfly-cli-')); temporary.push(cwd); await writeFile(path.join(cwd,'package.json'), JSON.stringify({private:true,dependencies:{react:'^19.0.0'}})); await mkdir(path.join(cwd,'src')); return cwd; }
function run(cwd:string,...args:string[]) { return execFileSync(process.execPath,[cli,...args,'--cwd',cwd],{encoding:'utf8'}); }
afterEach(async () => { await Promise.all(temporary.splice(0).map(p => rm(p,{recursive:true,force:true}))); });
it('copia dependências transitivas e arquivos portáveis, preservando edições', async () => {
  const cwd = await project(); run(cwd,'init'); run(cwd,'add','figure','--no-install');
  const component = path.join(cwd,'src/components/modfly/ui/components/molecules/figure/index.tsx');
  expect(await readFile(component,'utf8')).toContain('ImageFallback');
  expect(await readFile(path.join(cwd,'src/components/modfly/ui/components/atoms/imageFallback/index.tsx'),'utf8')).toContain('export');
  await writeFile(component,'// edição local');
  expect(() => run(cwd,'add','figure','--no-install')).toThrow(); expect(await readFile(component,'utf8')).toBe('// edição local');
  run(cwd,'add','figure','--force','--no-install'); expect(await readFile(component,'utf8')).toContain('ImageFallback');
});
it('dry-run e componentes desconhecidos não alteram o projeto', async () => {
  const cwd = await project(); run(cwd,'init'); run(cwd,'add','accordion','--dry-run'); expect(await readdir(path.join(cwd,'src'))).toEqual([]);
  expect(() => run(cwd,'add','citation','inexistente','--no-install')).toThrow(); expect(await readdir(path.join(cwd,'src'))).toEqual([]);
});
it('rejeita escape de diretório e destinos com links simbólicos', async () => {
  const cwd = await project(); await writeFile(path.join(cwd,'modfly.json'),JSON.stringify({version:'1.1.0',directory:'../outside'}));
  expect(() => run(cwd,'add','citation','--no-install')).toThrow();
  await writeFile(path.join(cwd,'modfly.json'),JSON.stringify({version:'1.1.0',directory:'src/components'})); await symlink(tmpdir(),path.join(cwd,'src/components'));
  expect(() => run(cwd,'add','citation','--no-install')).toThrow();
});
it('inclui componentes AVAMEC com provider e rejeita versões de catálogo diferentes', async () => {
  const cwd = await project(); run(cwd,'init'); run(cwd,'add','question-option','--no-install');
  expect(await readFile(path.join(cwd,'src/components/modfly/ui-avamec/components.tsx'),'utf8')).toContain('QuestionsProvider');
  await writeFile(path.join(cwd,'modfly.json'),JSON.stringify({version:'0.1.0',directory:'src/components'})); expect(() => run(cwd,'add','citation','--no-install')).toThrow();
});
it('emite código copiável que compila com todos os componentes', async () => {
  const cwd = await project(); run(cwd,'init');
  const registry = JSON.parse(await readFile('packages/cli/registry/index.json','utf8'));
  run(cwd,'add',...registry.entries.map((e:{name:string}) => e.name),'--no-install');
  await symlink(path.resolve('node_modules'),path.join(cwd,'node_modules'),'dir');
  await writeFile(path.join(cwd,'tsconfig.json'),JSON.stringify({compilerOptions:{jsx:'react-jsx',target:'ES2020',module:'ESNext',moduleResolution:'bundler',strict:true,esModuleInterop:true,skipLibCheck:true,noEmit:true},include:['src']}));
  // Emotion é dependência declarada pelo catálogo; disponibiliza o pacote já instalado sem rede.
  const result = spawnSync(process.execPath,[path.resolve('node_modules/typescript/bin/tsc'),'--project',path.join(cwd,'tsconfig.json')],{encoding:'utf8'});
  expect(result.stdout + result.stderr).toBe(''); expect(result.status).toBe(0);
});
it('todos os exemplos da documentação compilam contra a API pública', async () => {
  const cwd = await project(); await symlink(path.resolve('node_modules'),path.join(cwd,'node_modules'),'dir');
  const catalog = JSON.parse(await readFile('apps/docs/generated/catalog.json','utf8'));
  for (const item of catalog) for (const component of item.components) await writeFile(path.join(cwd,'src',component.name+'.tsx'),component.example);
  await writeFile(path.join(cwd,'tsconfig.json'),JSON.stringify({compilerOptions:{jsx:'react-jsx',target:'ES2020',module:'ESNext',moduleResolution:'bundler',strict:true,esModuleInterop:true,skipLibCheck:true,noEmit:true,baseUrl:cwd,paths:{'@modfly/ui':[path.resolve('packages/ui/dist/index.d.ts')]}},include:['src']}));
  const result=spawnSync(process.execPath,[path.resolve('node_modules/typescript/bin/tsc'),'--project',path.join(cwd,'tsconfig.json')],{encoding:'utf8'});
  expect(result.stdout+result.stderr).toBe(''); expect(result.status).toBe(0);
});
it('exemplos dos guias em português e inglês compilam contra os pacotes', async () => {
  const { guides } = await import('../apps/docs/content/guides');
  const cwd = await project(); await symlink(path.resolve('node_modules'),path.join(cwd,'node_modules'),'dir');
  for (const [slug,translations] of Object.entries(guides)) for (const [lang,guide] of Object.entries(translations)) for (const section of guide.sections) {
    if (section.code?.includes('import ')) await writeFile(path.join(cwd,'src',`${slug}-${lang}-${section.id}.tsx`),section.code);
  }
  await writeFile(path.join(cwd,'tsconfig.json'),JSON.stringify({compilerOptions:{jsx:'react-jsx',target:'ES2020',module:'ESNext',moduleResolution:'bundler',strict:true,esModuleInterop:true,skipLibCheck:true,noEmit:true,baseUrl:cwd,paths:{'@modfly/ui':[path.resolve('packages/ui/dist/index.d.ts')],'@modfly/ui-avamec':[path.resolve('packages/ui-avamec/dist/index.d.ts')]}},include:['src']}));
  const result=spawnSync(process.execPath,[path.resolve('node_modules/typescript/bin/tsc'),'--project',path.join(cwd,'tsconfig.json')],{encoding:'utf8'});
  expect(result.stdout+result.stderr).toBe(''); expect(result.status).toBe(0);
});
