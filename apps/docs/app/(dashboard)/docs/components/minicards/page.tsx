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

export default function MiniCardsPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            MiniCards<i>.</i>
          </h1>
          <p className="doc-lead">
            Versão compacta de <code>Cards</code>, em grade de duas colunas, com apenas duas
            cores (azul e verde) e texto expandido simples (sem HTML).
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
            <div className="doc-meta-item">Props <b>1</b></div>
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
              O <code>MiniCards</code> recebe <code>cardsData</code> como tuplas{" "}
              <code>[nome, texto, imagemURL, tipo]</code> — sem o quinto campo de texto expandido
              em HTML: o próprio <code>texto</code> é exibido ao clicar no botão.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Prefira <code>MiniCards</code> quando tiver só duas cores e o texto expandido for
                simples (sem marcação HTML). Para três cores e HTML rico, use <code>Cards</code>.
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
                  Preview · MiniCards / dois tipos
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white flex flex-wrap gap-6 justify-center">
                <MiniCardPreview nome="Passo A" tipo={1} />
                <MiniCardPreview nome="Passo B" tipo={2} />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;MiniCards /&gt;</span> — prop: cardsData
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>cardsData</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>[string, string, string, number][]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Nome, texto, URL da imagem, tipo (1=azul, 2=verde)</td>
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
              raw={`import { MiniCards } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <MiniCards\n      cardsData={[\n        ['Passo A', 'Descrição do Passo A.', '/img/a.png', 1],\n        ['Passo B', 'Descrição do Passo B.', '/img/b.png', 2],\n      ]}\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">MiniCards</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">MiniCards</span>{"\n"}
                {"      "}<span className="tok-attr">cardsData</span>={"{["}{"\n"}
                {"        "}[<span className="tok-str">&apos;Passo A&apos;</span>, <span className="tok-str">&apos;Descrição do Passo A.&apos;</span>, <span className="tok-str">&apos;/img/a.png&apos;</span>, <span className="tok-num">1</span>],{"\n"}
                {"      "}{"]}"}{"\n"}
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
            <p className="doc-p">Os dois tipos de cor disponíveis:</p>
            <div className="grid grid-cols-2 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#3374C0" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">tipo 1 · azul</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <MiniCardPreview nome="Azul" tipo={1} small />
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#2A6B13" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">tipo 2 · verde</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <MiniCardPreview nome="Verde" tipo={2} small />
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O botão de expandir usa <code>aria-expanded</code>, coerente com o padrão adotado
                em <code>Cards</code>.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/listmodule", label: "Anterior", title: "ListModule" }}
            next={{ href: "/docs/components/embed", label: "Próximo", title: "Embed" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/miniCards" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function MiniCardPreview({ nome, tipo, small = false }: { nome: string; tipo: 1 | 2; small?: boolean }) {
  const bg = tipo === 1 ? "#3374C0" : "#2A6B13";
  const width = small ? 140 : 180;
  return (
    <div style={{ width, background: bg, borderRadius: 16, padding: "16px 12px 24px", textAlign: "center", position: "relative" }}>
      <div style={{ background: "rgba(255,255,255,0.5)", borderRadius: 8, height: 50, marginBottom: 10 }} />
      <h3 style={{ fontSize: 14, fontWeight: 700, color: "#F9F5C1", margin: 0 }}>{nome}</h3>
      <div
        style={{
          width: 30, height: 30, borderRadius: "50%", background: "#fff",
          position: "absolute", left: "50%", bottom: -15, transform: "translateX(-50%)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: bg,
          boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
        }}
      >
        +
      </div>
    </div>
  );
}
