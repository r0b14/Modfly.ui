import { DocCodeBlock } from "@/components/docs/DocCodeBlock";
import { Callout } from "@/components/docs/Callout";
import { Pager } from "@/components/docs/Pager";
import { RightToc } from "@/components/docs/RightToc";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CardFlip",
  description:
    "Cartão com efeito de virar em 3D, em duas gerações: o novo design EDC (frente clara com botão chevron, verso creme com faixa ondulada) e a versão legada.",
  alternates: { canonical: "/docs/components/cardflip" },
};

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
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            CardFlip<i>.</i>
          </h1>
          <p className="doc-lead">
            Cartão com efeito de virar em 3D, em duas gerações: <strong>CardFlip</strong>, o novo
            design com frente clara, botão chevron e verso creme com faixa ondulada, e{" "}
            <strong>CardFlipLegacy</strong>, a versão anterior com a paleta antiga.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
            <div className="doc-meta-item">Exports <b>2</b></div>
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
              O novo <code>CardFlip</code> recebe <code>items</code> — objetos com{" "}
              <code>title</code>, <code>imageUrl</code>, <code>colorScheme</code>{" "}
              (<code>blue</code> ou <code>green</code>) e <code>content</code>. Clicar no botão
              chevron gira o cartão em 3D (<code>rotateY</code>) revelando o verso creme com o
              conteúdo e uma faixa ondulada na cor do esquema. O <code>CardFlipLegacy</code>{" "}
              mantém a API antiga de tuplas <code>cardFlipData</code> e os assets da paleta
              anterior.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use quando o conteúdo expandido for curto o suficiente para caber no verso do
                cartão sem rolagem. Para textos longos, prefira <code>Cards</code>, que expande em
                um painel abaixo do card.
              </p>
            </Callout>
          </section>

          <section id="preview">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#preview" aria-hidden="true">#</a>
              <span className="doc-h2-num">02 · Demo</span>
              Visualização
            </h2>
            <p className="doc-p">Frente e verso do novo design:</p>
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
                <CardFlipNewPreview
                  side="front"
                  title="Jornada Pedagógica Pluvipet + App"
                  colorScheme="blue"
                />
                <CardFlipNewPreview
                  side="back"
                  colorScheme="blue"
                  content="Esta Jornada Pedagógica é uma resposta prática e inovadora aos desafios impostos pelas mudanças do clima."
                />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;CardFlip /&gt;</span> — clique no chevron vira o cartão; clique no verso vira de volta
              </div>
            </div>
          </section>

          <section id="props">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#props" aria-hidden="true">#</a>
              <span className="doc-h2-num">03 · API</span>
              Propriedades
            </h2>

            <h3 className="doc-h3">CardFlip (novo design)</h3>
            <div className="table-wrap">
              <table className="doc-table">
                <thead>
                  <tr><th>Prop</th><th>Tipo</th><th>Padrão</th><th>Descrição</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>CardFlipItem[]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Lista de cartões (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items[].title</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Título na frente do cartão</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items[].imageUrl</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Ilustração central da frente</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items[].colorScheme</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>&quot;blue&quot; | &quot;green&quot;</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;blue&quot;</span></td>
                    <td>Cor da frente (<code>#E1EFFF</code>/<code>#DFF1D8</code>) e da faixa ondulada do verso</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items[].content</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode | string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Conteúdo do verso. Strings são renderizadas como HTML</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="doc-h3">CardFlipLegacy</h3>
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
                    <td>Tuplas <code>[nome, texto, imagemURL, tipo, textoExpandido]</code>; tipo 1 = azul, 2 = verde</td>
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
              raw={`import { CardFlip } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <CardFlip\n      items={[\n        {\n          title: 'Jornada Pedagógica Pluvipet + App',\n          imageUrl: '/img/pluvipet.png',\n          colorScheme: 'blue',\n          content: '<p>Esta Jornada Pedagógica é uma resposta prática...</p>',\n        },\n      ]}\n    />\n  )\n}`}
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
                {"      "}<span className="tok-attr">items</span>={"{"}[{"\n"}
                {"        "}{"{"}{"\n"}
                {"          "}<span className="tok-attr">title</span>: <span className="tok-str">&apos;Jornada Pedagógica Pluvipet + App&apos;</span>,{"\n"}
                {"          "}<span className="tok-attr">imageUrl</span>: <span className="tok-str">&apos;/img/pluvipet.png&apos;</span>,{"\n"}
                {"          "}<span className="tok-attr">colorScheme</span>: <span className="tok-str">&apos;blue&apos;</span>,{"\n"}
                {"          "}<span className="tok-attr">content</span>: <span className="tok-str">&apos;&lt;p&gt;Esta Jornada Pedagógica...&lt;/p&gt;&apos;</span>,{"\n"}
                {"        "}{"}"},{"\n"}
                {"      "}]{"}"}{"\n"}
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
            <p className="doc-p">Os dois esquemas de cor do novo design:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#E1EFFF", border: "1px solid #4A90E2" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">blue</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CardFlipNewPreview side="front" title="Monitoramento de chuvas" colorScheme="blue" small />
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#DFF1D8", border: "1px solid #2A6B13" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">green</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CardFlipNewPreview side="front" title="Bacia hidrográfica" colorScheme="green" small />
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O chevron é um <code>&lt;button&gt;</code> real com <code>aria-expanded</code>; o
                ícone e as faixas são decorativos (<code>aria-hidden</code>).
              </li>
              <li className="prose-li">
                A ilustração usa o <code>title</code> do cartão como <code>alt</code>.
              </li>
              <li className="prose-li">
                O conteúdo do verso em string é injetado via{" "}
                <code>dangerouslySetInnerHTML</code> — garanta que o HTML de origem seja confiável.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/cards", label: "Anterior", title: "Cards" }}
            next={{ href: "/docs/components/quotetext", label: "Próximo", title: "QuoteText" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>25 Jul 2026</b></span>
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

// Recriação visual estática do novo CardFlip usando os mesmos SVGs do componente
// real (copiados para /public/cardflip) — sem a lógica de girar.
function CardFlipNewPreview({
  side,
  title,
  colorScheme,
  content,
  small = false,
}: {
  side: "front" | "back";
  title?: string;
  colorScheme: "blue" | "green";
  content?: string;
  small?: boolean;
}) {
  const isBlue = colorScheme === "blue";
  const frontBg = isBlue ? "#E1EFFF" : "#DFF1D8";
  const wave = isBlue ? "/cardflip/waveBlue.svg" : "/cardflip/waveGreen.svg";
  const width = small ? 190 : 230;
  const height = small ? 260 : 316;
  const radius = small ? 22 : 26;

  if (side === "front") {
    return (
      <div
        className="flex flex-col shadow-md overflow-hidden"
        style={{ width, height, background: frontBg, borderRadius: radius }}
      >
        <h4 className="text-center font-bold text-black m-0" style={{ fontSize: small ? 13 : 14, padding: "16px 14px 8px" }}>
          {title}
        </h4>
        <div className="flex-1 flex items-center justify-center text-black/40 font-jetbrains mono" style={{ fontSize: 10 }}>
          [ ilustração ]
        </div>
        <div className="flex justify-center" style={{ paddingBottom: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/cardflip/chevronButton.svg" alt="" aria-hidden="true" style={{ width: 40, height: 40 }} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative shadow-md overflow-hidden"
      style={{ width, height, background: "#FAEBC2", borderRadius: radius }}
    >
      <p className="text-black m-0" style={{ fontSize: 12, lineHeight: 1.55, padding: "18px 16px 60px" }}>
        {content}
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={wave} alt="" aria-hidden="true" className="absolute bottom-0 left-0 w-full h-auto" />
    </div>
  );
}
