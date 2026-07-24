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

export default function CardFlipPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            CardFlip<i>.</i>
          </h1>
          <p className="doc-lead">
            Cartão com efeito de virar em 3D: a frente mostra imagem e título, o verso revela um
            texto expandido em HTML ao clicar no botão.
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
              Assim como <code>Cards</code>, recebe uma única prop <code>cardFlipData</code> com
              tuplas <code>[nome, texto, imagemURL, tipo, textoExpandido]</code>. A diferença é a
              interação: em vez de expandir abaixo da grade, o cartão inteiro gira em 3D
              (<code>rotateY</code>) revelando o texto no verso.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use quando o conteúdo expandido for curto o suficiente para caber no verso do
                cartão sem rolagem. Para textos longos, prefira <code>Cards</code>, que expande em
                um bloco à parte.
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
                  Preview · CardFlip / frente e verso
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white flex flex-wrap gap-8 justify-center">
                <CardFlipPreview nome="Justiça Restaurativa" tipo={1} side="front" />
                <CardFlipPreview nome="" texto="Processo colaborativo entre todas as partes afetadas por uma ofensa." tipo={1} side="back" />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;CardFlip /&gt;</span> — clique no verso vira de volta
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>cardFlipData</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>[string, string, string, number, string][]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Nome, texto (não usado na frente atual), URL da imagem, tipo (1=azul, 2=verde), texto expandido em HTML no verso</td>
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
              raw={`import { CardFlip } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <CardFlip\n      cardFlipData={[\n        ['Justiça Restaurativa', '', '/img/jr.png', 1, '<p>Processo colaborativo...</p>'],\n      ]}\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">CardFlip</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">CardFlip</span>{"\n"}
                {"      "}<span className="tok-attr">cardFlipData</span>={"{["}{"\n"}
                {"        "}[<span className="tok-str">&apos;Justiça Restaurativa&apos;</span>, <span className="tok-str">&apos;&apos;</span>, <span className="tok-str">&apos;/img/jr.png&apos;</span>, <span className="tok-num">1</span>, <span className="tok-str">&apos;&lt;p&gt;...&lt;/p&gt;&apos;</span>],{"\n"}
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
            <div className="grid grid-cols-2 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#E1EFFF" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">tipo 1 · azul</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CardFlipPreview nome="Card azul" tipo={1} side="front" small />
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#DFF1D8" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">tipo 2 · verde</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CardFlipPreview nome="Card verde" tipo={2} side="front" small />
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O clique para virar é feito num <code>&lt;div&gt;</code> com <code>onClick</code>,
                sem role/tabIndex de botão — usuários de teclado não conseguem acionar o flip
                hoje. Vale reportar como melhoria futura.
              </li>
              <li className="prose-li">
                O texto do verso é injetado via <code>dangerouslySetInnerHTML</code>: garanta HTML
                de origem confiável.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/cards", label: "Anterior", title: "Cards" }}
            next={{ href: "/docs/components/quotetext", label: "Próximo", title: "QuoteText" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/cardFlip" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function CardFlipPreview({
  nome,
  texto,
  tipo,
  side,
  small = false,
}: {
  nome: string;
  texto?: string;
  tipo: 1 | 2;
  side: "front" | "back";
  small?: boolean;
}) {
  const width = small ? 160 : 200;
  const height = small ? 210 : 260;
  const frontBg = tipo === 1 ? "#E1EFFF" : "#DFF1D8";

  if (side === "back") {
    return (
      <div
        style={{
          width,
          height,
          background: "#FAEBC2",
          borderRadius: 20,
          padding: 16,
          fontSize: 12.5,
          color: "#333",
          lineHeight: 1.5,
          boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        }}
      >
        {texto}
      </div>
    );
  }

  return (
    <div
      style={{
        width,
        height,
        background: frontBg,
        borderRadius: 20,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
      }}
    >
      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#000", textAlign: "center", margin: "0 0 12px" }}>
        {nome}
      </h3>
      <div style={{ flex: 1, background: "rgba(255,255,255,0.6)", borderRadius: 10 }} />
      <div style={{ textAlign: "center", marginTop: 12, fontSize: 20 }}>↻</div>
    </div>
  );
}
