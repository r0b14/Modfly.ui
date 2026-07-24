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

export default function TimelineWithCardsPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Organismos · Referência</div>
          <h1 className="doc-title">
            TimelineWithCards<i>.</i>
          </h1>
          <p className="doc-lead">
            Linha do tempo vertical com cartões alternando à esquerda e à direita, conectados por
            uma linha central e pontos coloridos — para eventos históricos ou marcos de um curso.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>organismo</b></div>
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
              Recebe <code>content</code>, um array de <code>{"{ title, content }"}</code>. Em
              telas largas os cartões alternam entre esquerda e direita ao redor de uma linha
              vertical central; em mobile, todos ficam alinhados à esquerda com os pontos na
              linha.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para uma cronologia com poucos marcos (3 a 6) e conteúdo relativamente curto
                por cartão — o layout alternado fica confuso com muitos itens.
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
                  Preview · TimelineWithCards / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  organismo
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <TimelinePreview
                  content={[
                    { title: "1970", content: "Primeiras experiências de mediação vítima-ofensor." },
                    { title: "1989", content: "Nova Zelândia formaliza práticas restaurativas." },
                  ]}
                />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;TimelineWithCards /&gt;</span> — props: content, lineColor, dotColor
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>content</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>{"{ title: string; content: string }[]"}</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Marcos da linha do tempo. <code>content</code> aceita HTML</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>lineColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;bg-orange-400&quot;</span></td>
                    <td>Classe Tailwind de cor da linha e conectores</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>dotColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#F9AE63&quot;</span></td>
                    <td>Cor hex dos pontos que marcam cada marco</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="warn" label="lineColor é classe, dotColor é hex">
              <p>
                Repare que <code>lineColor</code> espera uma classe Tailwind (ex.:{" "}
                <code>&quot;bg-blue-400&quot;</code>) enquanto <code>dotColor</code> espera um hex
                aplicado via <code>style</code>. É uma inconsistência de API entre as duas props de
                cor — vale unificar numa revisão futura.
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
              raw={`import { TimelineWithCards } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <TimelineWithCards\n      content={[\n        { title: '1970', content: 'Primeiras experiências de mediação.' },\n        { title: '1989', content: 'Nova Zelândia formaliza a prática.' },\n      ]}\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">TimelineWithCards</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">TimelineWithCards</span>{"\n"}
                {"      "}<span className="tok-attr">content</span>={"{["}{" { "}...{" } ]}"}{"\n"}
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
            <p className="doc-p">
              A variação principal acontece via <code>lineColor</code>/<code>dotColor</code>; o
              layout alternado (esquerda/direita) muda automaticamente conforme o índice de cada
              item.
            </p>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O conteúdo de cada marco é injetado via <code>dangerouslySetInnerHTML</code> —
                garanta HTML de origem confiável.
              </li>
              <li className="prose-li">
                A linha e os pontos são decorativos; a ordem de leitura correta já é garantida
                pela ordem do array <code>content</code> no DOM.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/starlist", label: "Anterior", title: "StarList" }}
            next={{ href: "/docs/components/historytopics", label: "Próximo", title: "HistoryTopics" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/organisms/timelineWithCards" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function TimelinePreview({ content }: { content: { title: string; content: string }[] }) {
  return (
    <div style={{ maxWidth: 460 }}>
      {content.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F9AE63", flexShrink: 0 }} />
          <div style={{ background: "#fff", border: "2px solid #fb923c", borderRadius: 12, padding: 12, flex: 1, boxShadow: "0 2px 6px rgba(0,0,0,0.08)" }}>
            <h4 style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 700, color: "#3A584E" }}>{item.title}</h4>
            <p style={{ margin: 0, fontSize: 12, color: "#555" }}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
