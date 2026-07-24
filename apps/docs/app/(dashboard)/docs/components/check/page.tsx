import { DocCodeBlock } from "@/components/docs/DocCodeBlock";
import { Callout } from "@/components/docs/Callout";
import { Pager } from "@/components/docs/Pager";
import { RightToc } from "@/components/docs/RightToc";

const TOC_ENTRIES = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "preview", label: "Visualização" },
  { id: "props", label: "Propriedades" },
  { id: "uso", label: "Como usar" },
  { id: "variantes", label: "Variantes" },
  { id: "acessibilidade", label: "Acessibilidade", level: 3 as const },
];

export default function CheckPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Átomos · Referência</div>
          <h1 className="doc-title">
            Check<i>.</i>
          </h1>
          <p className="doc-lead">
            Lista de itens de aprendizagem com moldura decorativa de topo e rodapé —
            ideal para resumir objetivos ou pontos-chave de uma unidade.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>átomo</b></div>
            <div className="doc-meta-item">Props <b>3</b></div>
            <div className="doc-meta-item">Status <b style={{ color: "var(--green)" }}>estável</b></div>
          </div>
        </header>

        <article className="doc-prose">
          <section id="visao-geral">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#visao-geral" aria-hidden="true">#</a>
              <span className="doc-h2-num">01 · Contexto</span>
              Visão geral
            </h2>
            <p className="doc-p">
              O <code>Check</code> exibe uma lista de itens (<code>ReactNode[]</code>), cada um com um
              ícone de check dentro de uma caixa azul. Duas faixas decorativas — uma no topo, outra no
              rodapé — emolduram o conteúdo, com cor controlada pela prop <code>variant</code>.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use <code>Check</code> para "o que você vai aprender" ou "principais pontos" no início
                ou fim de uma unidade. Para listas simples sem moldura, use <code>ListModule</code>.
              </p>
            </Callout>
          </section>

          <section id="preview">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#preview" aria-hidden="true">#</a>
              <span className="doc-h2-num">02 · Demo</span>
              Visualização
            </h2>
            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · Check / verde
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="p-10 bg-white">
                <CheckPreview
                  variant={1}
                  items={[
                    "Reconhecer os princípios da Justiça Restaurativa",
                    "Diferenciar mediação de conflitos e círculos de paz",
                    "Aplicar a escuta ativa em situações de conflito escolar",
                  ]}
                />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Check /&gt;</span> — props: items, numberOfItems, variant
              </div>
            </div>
          </section>

          <section id="props">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#props" aria-hidden="true">#</a>
              <span className="doc-h2-num">03 · API</span>
              Propriedades
            </h2>
            <div className="table-wrap">
              <table className="doc-table">
                <thead>
                  <tr><th>Prop</th><th>Tipo</th><th>Padrão</th><th>Descrição</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode[]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>[Exemplo de item]</span></td>
                    <td>Lista de itens exibidos, cada um com o ícone de check</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>numberOfItems</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>1</span></td>
                    <td>Quantos itens de <code>items</code> exibir (limitado ao tamanho do array)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>variant</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>1 | 2</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>1</span></td>
                    <td>1 = verde (fundo <code>#F2EFD2</code>), 2 = azul (fundo <code>#E3F6FD</code>)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="tip" label="Tipografia responsiva">
              <p>
                Com mais de 7 itens o tamanho da fonte e o espaçamento entre linhas diminuem
                automaticamente para manter a lista legível sem estourar a altura da seção.
              </p>
            </Callout>
          </section>

          <section id="uso">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#uso" aria-hidden="true">#</a>
              <span className="doc-h2-num">04 · Exemplos</span>
              Como usar
            </h2>
            <DocCodeBlock
              filename="Unidade01.tsx"
              raw={`import { Check } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Check\n      variant={1}\n      numberOfItems={3}\n      items={[\n        'Reconhecer os princípios da Justiça Restaurativa',\n        'Diferenciar mediação de conflitos e círculos de paz',\n        'Aplicar a escuta ativa em situações de conflito escolar',\n      ]}\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Check</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Check</span>{"\n"}
                {"      "}<span className="tok-attr">variant</span>={"{"}<span className="tok-num">1</span>{"}"}{"\n"}
                {"      "}<span className="tok-attr">numberOfItems</span>={"{"}<span className="tok-num">3</span>{"}"}{"\n"}
                {"      "}<span className="tok-attr">items</span>={"{"}[...]{"}"}{"\n"}
                {"    "}/&gt;{"\n"}
                {"  "}){"\n"}
                {"}"}
              </pre>
            </DocCodeBlock>
          </section>

          <section id="variantes">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#variantes" aria-hidden="true">#</a>
              <span className="doc-h2-num">05 · Variações</span>
              Variantes
            </h2>
            <div className="grid grid-cols-2 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--green)]" />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">Verde · variant 1</span>
                </div>
                <div className="p-6 bg-white">
                  <CheckPreview variant={1} items={["Primeiro item", "Segundo item"]} />
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#30D3D5" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">Azul · variant 2</span>
                </div>
                <div className="p-6 bg-white">
                  <CheckPreview variant={2} items={["Primeiro item", "Segundo item"]} />
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O ícone de check é decorativo (<code>aria-hidden</code>) — o texto de cada item já
                comunica o conteúdo por si só.
              </li>
              <li className="prose-li">
                As faixas de topo/rodapé são puramente visuais e ficam atrás do conteúdo (<code>-z-10</code>),
                sem interferir na leitura por teclado ou leitor de tela.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/postit", label: "Anterior", title: "Postit" }}
            next={{ href: "/docs/components/imagefallback", label: "Próximo", title: "ImageFallback" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>16 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/atoms/check" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

/* ── Recriação visual do componente Check ── */
function CheckPreview({ items, variant }: { items: string[]; variant: 1 | 2 }) {
  const bgColor = variant === 1 ? "#F2EFD2" : "#E3F6FD";
  const bandColor = variant === 1 ? "#68C35E" : "#30D3D5";
  const bandColor2 = variant === 1 ? "#A5CE86" : "#A0C8E1";

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg" style={{ maxWidth: 640 }}>
      <div className="absolute inset-0 -z-20" style={{ backgroundColor: bgColor }} />
      <div className="absolute left-0 top-0 w-full h-3" style={{ background: `linear-gradient(90deg, ${bandColor} 0%, ${bandColor2} 100%)` }} />
      <div className="relative px-8 py-8">
        <ul className="flex flex-col m-0 p-0 list-none gap-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <div
                className="flex items-center justify-center rounded-lg mr-4 flex-shrink-0"
                style={{ width: 28, height: 26, backgroundColor: "#295A8F" }}
                aria-hidden="true"
              >
                <CheckIconSvg />
              </div>
              <p className="m-0" style={{ fontSize: 15, color: "#222" }}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-3" style={{ background: `linear-gradient(90deg, ${bandColor2} 0%, ${bandColor} 100%)` }} />
    </div>
  );
}

function CheckIconSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
