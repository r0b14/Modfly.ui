import { mkdtemp, writeFile, readFile, mkdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { chromium } from '@playwright/test';
const require = createRequire(import.meta.url);
const esbuild = createRequire(require.resolve('../packages/ui/node_modules/tsup'))('esbuild');
const root = process.cwd();
const artifacts = path.join(root, 'artifacts'); await mkdir(artifacts, { recursive: true });
for (const pkg of ['ui','ui-avamec','cli']) execFileSync('pnpm',['pack','--pack-destination',artifacts],{cwd:path.join(root,'packages',pkg),stdio:'inherit'});
for (const version of ['18.3.1','19.2.6']) {
  const project = await mkdtemp(path.join(tmpdir(),`modfly-react-${version}-`));
  try {
    await writeFile(path.join(project,'package.json'),JSON.stringify({name:'modfly-consumer',version:'1.0.0',private:true,type:'module'}));
    execFileSync('npm',['install','--ignore-scripts','--no-package-lock',`react@${version}`,`react-dom@${version}`,`@types/react@${version.startsWith('18')?'18':'19'}`,`@types/react-dom@${version.startsWith('18')?'18':'19'}`,path.join(artifacts,'modfly-ui-1.1.0.tgz'),path.join(artifacts,'modfly-ui-avamec-1.1.0.tgz')],{cwd:project,stdio:'inherit'});
    await writeFile(path.join(project,'smoke.mjs'),`import React from 'react'; import {renderToString} from 'react-dom/server'; import * as ui from '@modfly/ui'; import * as avamec from '@modfly/ui-avamec'; import {createRequire} from 'node:module'; const require=createRequire(import.meta.url); for (const pkg of ['@modfly/ui','@modfly/ui-avamec']) { if (!require(pkg)) throw new Error('CJS ausente'); require.resolve(pkg+'/styles.css'); } const html=renderToString(React.createElement(ui.Citation,{title:'Aula',text:'Teste de distribuição'})); if(!html.includes('Teste de distribuição')||!avamec.ActivityQuestions) throw new Error('ESM inválido'); console.log('React ${version}: ESM, CJS, CSS e SSR OK');`);
    execFileSync(process.execPath,['smoke.mjs'],{cwd:project,stdio:'inherit'});
    await writeFile(path.join(project,'example.tsx'),`import { Citation, Accordion, Pagination } from '@modfly/ui'; import { ActivityQuestions, QuestionsProvider, createMemoryAdapter } from '@modfly/ui-avamec'; export const Example=()=> <><Citation text="Aula"/><Accordion title="Mais" bgColor={1}>Conteúdo</Accordion><Pagination numberOfPages={2} currentPage={1} onPageChange={()=>{}}/><QuestionsProvider adapter={createMemoryAdapter()} activity={{module:1,slide:1,questions:[{id:'1',type:'written',prompt:'A',correctAnswer:['a']}]}}><ActivityQuestions/></QuestionsProvider></>;`);
    await writeFile(path.join(project,'tsconfig.json'),JSON.stringify({compilerOptions:{jsx:'react-jsx',target:'ES2020',module:'ESNext',moduleResolution:'bundler',strict:true,noEmit:true,skipLibCheck:true},include:['example.tsx']}));
    execFileSync(process.execPath,[path.join(root,'node_modules/typescript/bin/tsc'),'--project',path.join(project,'tsconfig.json')],{cwd:project,stdio:'inherit'});
    await writeFile(path.join(project,'browser.tsx'), `import React from 'react'; import {createRoot} from 'react-dom/client'; import {Citation,Accordion} from '@modfly/ui'; import '@modfly/ui/styles.css'; createRoot(document.getElementById('root')!).render(<main><Citation text="Consumidor independente"/><Accordion title="Abrir conteúdo" bgColor={1}><p>Distribuição funcionando</p></Accordion></main>);`);
    await esbuild.build({entryPoints:[path.join(project,'browser.tsx')],outfile:path.join(project,'browser.js'),bundle:true,format:'esm',jsx:'automatic'});
    const html='<!doctype html><html lang="pt-BR"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Consumidor Modfly</title><link rel="stylesheet" href="/browser.css"><body><div id="root"></div><script type="module" src="/browser.js"></script></body></html>';
    const server=createServer(async(req,res)=> { const asset=req.url==='/browser.js'?'browser.js':req.url==='/browser.css'?'browser.css':null; res.setHeader('Content-Type',asset?.endsWith('.js')?'text/javascript':asset?'text/css':'text/html'); res.end(asset?await readFile(path.join(project,asset)):html); });
    await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
    let browser;
    try {
      browser=await chromium.launch(); const page=await browser.newPage(); const errors=[]; page.on('pageerror',error=>errors.push(error.message));
      await page.goto('http://127.0.0.1:'+server.address().port);
      const trigger=page.getByRole('button',{name:/Abrir conteúdo/}); await trigger.click(); await page.getByText('Distribuição funcionando').waitFor();
      if(await trigger.getAttribute('aria-expanded')!=='true'||errors.length) throw new Error('Interação do pacote falhou: '+errors.join(', '));
      for(const width of [375,1440]) { await page.setViewportSize({width,height:1000}); if(await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+2)) throw new Error('Overflow no consumidor sem Tailwind: '+width); }
      console.log('Navegador: CSS e interação no consumidor sem Tailwind OK');
    } finally { await browser?.close(); await new Promise(resolve=>server.close(resolve)); }

  } finally { await rm(project,{recursive:true,force:true}); }
}
console.log('Distribuição verificada em consumidores externos React 18 e 19.');
