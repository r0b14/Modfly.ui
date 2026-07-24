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

export default function StarListPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Organismos · Referência</div>
          <h1 className="doc-title">
            StarList<i>.</i>
          </h1>
          <p className="doc-lead">
            Lista vertical conectada por uma linha tracejada, com um ícone de estrela e um trecho
            em destaque antes do texto de cada item.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>organismo</b></div>
            <div className="doc-meta-item">Props <b>2</b></div>
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
              O <code>StarList</code> desenha uma linha tracejada horizontal conectando cada item
              a um ícone de estrela, com larguras variadas para dar um efeito orgânico. Cada item
              tem um trecho em <code>textBold</code> seguido do restante em <code>text</code>.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para listar pontos-chave ou conquistas em sequência narrativa. Para uma linha
                do tempo com marcos numerados por geração, veja <code>HistoryTopics</code>.
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
                  Preview · StarList / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  organismo
                </span>
              </div>
              <div className="p-10 bg-white">
                <StarListPreview
                  items={[
                    { textBold: "Primeiro pilar:", text: "reparação do dano causado à vítima." },
                    { textBold: "Segundo pilar:", text: "responsabilização ativa do ofensor." },
                  ]}
                />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;StarList /&gt;</span> — props: items, lineColor
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
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>{"{ textBold: string; text: string }[]"}</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Lista de itens, cada um com trecho em destaque + texto</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>lineColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#6CA3E8&quot;</span></td>
                    <td>Cor da linha tracejada</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="uso">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#uso" aria-hidden="true">#</a>
              <span className="doc-h2-num">04 · Exemplos</span>
              Como usar
            </h2>
            <DocCodeBlock
              filename="Unidade01.tsx"
              raw={`import { StarList } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <StarList\n      items={[\n        { textBold: 'Primeiro pilar:', text: 'reparação do dano.' },\n        { textBold: 'Segundo pilar:', text: 'responsabilização ativa.' },\n      ]}\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">StarList</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">StarList</span>{"\n"}
                {"      "}<span className="tok-attr">items</span>={"{["}{" { "}...{" } ]}"}{"\n"}
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
            <p className="doc-p">Com <code>lineColor</code> customizado:</p>
            <div className="my-7">
              <StarListPreview
                lineColor="#C66A4A"
                items={[{ textBold: "Terceiro pilar:", text: "reintegração de todos à comunidade." }]}
              />
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">O ícone de estrela é decorativo, sem alt text descritivo.</li>
              <li className="prose-li">
                A linha tracejada é puramente visual — a ordem de leitura já é garantida pela
                ordem do DOM.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/accordion", label: "Anterior", title: "Accordion" }}
            next={{ href: "/docs/components/timelinewithcards", label: "Próximo", title: "TimelineWithCards" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/organisms/starList" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function StarListPreview({
  items,
  lineColor = "#6CA3E8",
}: {
  items: { textBold: string; text: string }[];
  lineColor?: string;
}) {
  return (
    <div style={{ maxWidth: 480 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ width: 40, height: 2, background: lineColor, backgroundImage: `repeating-linear-gradient(90deg, ${lineColor} 0 6px, transparent 6px 10px)`, flexShrink: 0 }} />
          <span style={{ fontSize: 18 }}>⭐</span>
          <p style={{ margin: 0, fontSize: 13.5, color: "#333", lineHeight: 1.5 }}>
            <strong style={{ color: "#285C93" }}>{item.textBold}</strong> {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
