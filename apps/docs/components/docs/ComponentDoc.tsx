import Link from 'next/link';
import catalog from '@/generated/catalog.json';
import { RightToc } from './RightToc';
import { LiveExample } from './LiveExample';
import { Pager } from './Pager';
const entries = [{ id: 'visao-geral', label: 'Visão geral' }, { id: 'preview', label: 'Demonstração' }, { id: 'props', label: 'API e tipos' }, { id: 'uso', label: 'Como usar' }, { id: 'variantes', label: 'Variantes e composição' }];
export function ComponentDoc({ slug }: { slug: string }) {
  const index = catalog.findIndex(c => c.slug === slug);
  const item = catalog[index];
  if (!item) throw new Error(`Componente ausente do catálogo: ${slug}`);
  const pagerItem = (i: number, label: string) => catalog[i] ? { href: `/docs/components/${catalog[i].slug}`, label, title: catalog[i].name } : undefined;
  return <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen"><div className="min-w-0 px-4 sm:px-6 lg:px-10">
    <header className="doc-head"><div className="doc-cat">{item.category} · Referência</div><h1 className="doc-title">{item.name}<i>.</i></h1><p className="doc-lead">{item.description}</p><p className="doc-p">@modfly/ui · 1.1.0 · React + TypeScript</p></header>
    <article className="doc-prose">
      <section id="visao-geral"><h2 className="doc-h2">01 · Visão geral</h2><p className="doc-p">{item.description} Esta página executa a implementação distribuída pela biblioteca. As demonstrações e variantes partem das mesmas stories utilizadas no laboratório visual.</p></section>
      <section id="preview"><h2 className="doc-h2">02 · Demonstração</h2>{item.components.map(component => <div key={component.name}><h3 className="doc-h3">{component.name}</h3><LiveExample name={component.name} example={component.example} initialVariant={component.initialVariant} /></div>)}</section>
      <section id="props"><h2 className="doc-h2">03 · API e tipos</h2><p className="doc-p">Tabela extraída dos tipos públicos. Propriedades opcionais podem ser omitidas; os exemplos demonstram uma configuração inicial.</p>{item.components.map(component => <div key={component.name}><h3 className="doc-h3">{component.name}</h3><div className="table-wrap overflow-x-auto"><table className="doc-table"><thead><tr><th>Propriedade</th><th>Tipo</th><th>Obrigatória</th><th>Descrição</th></tr></thead><tbody>{component.props.map(prop => <tr key={prop.name}><td><code>{prop.name}</code></td><td className="break-words"><code>{prop.type}</code></td><td>{prop.required ? 'Sim' : 'Não'}</td><td>{prop.description || 'Veja o exemplo e o tipo acima.'}</td></tr>)}</tbody></table></div></div>)}</section>
      <section id="uso"><h2 className="doc-h2">04 · Como usar</h2><ol className="prose-ol"><li className="prose-li">Instale <code>@modfly/ui</code> e importe <code>@modfly/ui/styles.css</code> uma vez no entrypoint global.</li><li className="prose-li">Copie o exemplo da demonstração e substitua o conteúdo pelo material da sua aula.</li><li className="prose-li">No Next.js, use uma fronteira <code>&apos;use client&apos;</code> para exemplos interativos com callbacks.</li></ol><p className="doc-p">Para personalizar o código, use <code>npx modfly@1.1.0 add {slug}</code> após configurar a CLI. <Link href="/docs/getting-started/cli">Veja o guia da CLI.</Link></p><p className="doc-p">Props que recebem HTML devem receber conteúdo confiável e sanitizado pela aplicação. Prefira ReactNode quando a API oferecer essa opção.</p></section>
      <section id="variantes"><h2 className="doc-h2">05 · Variantes e composição</h2><p className="doc-p">Selecione as variantes na demonstração para comparar conteúdo e apresentação. Os tipos acima delimitam as opções aceitas; mantenha textos legíveis, descrições de imagens e navegação por teclado ao adaptar o componente.</p><p className="doc-p"><a href={`https://github.com/r0b14/Modfly.ui/tree/main/${item.source}`}>Consultar implementação e stories ↗</a></p></section>
      <hr className="doc-hr" /><Pager prev={pagerItem(index - 1, 'Anterior')} next={pagerItem(index + 1, 'Próximo')} />
    </article></div><RightToc entries={entries} readTime="~5 min" editHref={`https://github.com/r0b14/Modfly.ui/tree/main/${item.source}`} /></div>;
}
