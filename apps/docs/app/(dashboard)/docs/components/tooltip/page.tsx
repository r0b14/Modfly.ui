import { DocCodeBlock } from "@/components/docs/DocCodeBlock";
import { Callout } from "@/components/docs/Callout";
import { Pager } from "@/components/docs/Pager";
import { RightToc } from "@/components/docs/RightToc";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tooltip",
  description:
    "Termo com sublinhado pontilhado que revela uma explicação ao passar o mouse, em duas gerações: o novo balão azul com rabinho arredondado e a versão legada amarela.",
  alternates: { canonical: "/docs/components/tooltip" },
};

const TOC_ENTRIES = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "preview", label: "Visualização" },
  { id: "props", label: "Propriedades" },
  { id: "uso", label: "Como usar" },
  { id: "variantes", label: "Variantes" },
  { id: "acessibilidade", label: "Acessibilidade", level: 3 as const },
];

export default function TooltipPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Átomos · Referência</div>
          <h1 className="doc-title">
            Tooltip<i>.</i>
          </h1>
          <p className="doc-lead">
            Termo com sublinhado pontilhado que revela uma explicação ao passar o mouse, em duas
            gerações: <strong>Tooltip</strong>, o novo balão azul-claro com rabinho arredondado, e{" "}
            <strong>TooltipLegacy</strong>, a versão anterior amarela com seta triangular.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>átomo</b></div>
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
              Ambos marcam um termo (<code>text</code>) com um sublinhado pontilhado e, ao passar o
              mouse, exibem um balão com <code>content</code> posicionado automaticamente para nunca
              sair da viewport. O novo <code>Tooltip</code> usa o balão azul-claro (<code>#D1F1FF</code>)
              com cantos arredondados e rabinho arredondado — que pode ser omitido com{" "}
              <code>showArrow=false</code>; o <code>TooltipLegacy</code> mantém o balão amarelo com
              seta triangular.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para explicar um termo técnico sem interromper o fluxo de leitura do aluno,
                em vez de um link para um glossário externo. Prefira o novo <code>Tooltip</code>{" "}
                em módulos novos.
              </p>
            </Callout>
          </section>

          <section id="preview">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#preview" aria-hidden="true">#</a>
              <span className="doc-h2-num">02 · Demo</span>
              Visualização
            </h2>
            <p className="doc-p">O novo design:</p>
            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · Tooltip / hover
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="p-10 pb-32 bg-white flex justify-center">
                <p className="m-0" style={{ fontSize: 16, color: "#222" }}>
                  Segundo a <TooltipPreview design="new" text="BNCC, 2018, p. 30" content="Competência é a mobilização de conhecimentos, habilidades, atitudes e valores para resolver demandas da vida cotidiana." />, competência mobiliza conhecimentos e atitudes.
                </p>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ passe o mouse sobre o termo sublinhado — <span className="text-[var(--ink-2)]">&lt;Tooltip /&gt;</span>
              </div>
            </div>

            <p className="doc-p">A versão legada:</p>
            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · TooltipLegacy / hover
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="p-10 pb-32 bg-white flex justify-center">
                <p className="m-0" style={{ fontSize: 16, color: "#222" }}>
                  O conceito de <TooltipPreview design="legacy" text="Justiça Restaurativa" content="Modelo de justiça focado em reparar o dano causado, não apenas punir." /> mudou a forma como a escola lida com conflitos.
                </p>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ passe o mouse sobre o termo sublinhado — <span className="text-[var(--ink-2)]">&lt;TooltipLegacy /&gt;</span>
              </div>
            </div>
          </section>

          <section id="props">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#props" aria-hidden="true">#</a>
              <span className="doc-h2-num">03 · API</span>
              Propriedades
            </h2>
            <p className="doc-p">
              As duas versões compartilham a mesma API; <code>showArrow</code> existe apenas no novo{" "}
              <code>Tooltip</code> e o padrão de <code>bgColor</code> muda entre elas:
            </p>
            <div className="table-wrap">
              <table className="doc-table">
                <thead>
                  <tr><th>Prop</th><th>Tipo</th><th>Padrão</th><th>Descrição</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>text</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Termo sublinhado, sempre visível (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>content</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string | ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Explicação exibida no balão ao passar o mouse (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>position</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>left | center | right</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>center</span></td>
                    <td>Alinhamento preferencial do balão em telas desktop</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>showArrow</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>true</span></td>
                    <td>Exibe o rabinho do balão (apenas no novo <code>Tooltip</code>)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>reference</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string | ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Referência bibliográfica exibida no rodapé do balão</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>width / widthMobile / height</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Dimensões do balão em px, com fallback responsivo automático</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>bgColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>#D1F1FF · legado: #FFDB70</span></td>
                    <td>Cor de fundo do balão</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="warn" label="Reposicionamento automático">
              <p>
                O balão recalcula a posição em <code>resize</code> e <code>scroll</code>, garantindo que
                nunca fique cortado nas bordas da tela — inclusive em mobile, onde sempre centraliza.
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
              raw={`import { Tooltip, TooltipLegacy } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <p>\n      Segundo a{' '}\n      <Tooltip\n        text="BNCC, 2018, p. 30"\n        content="Competência é a mobilização de conhecimentos e atitudes."\n      />\n      {' '}e o conceito de{' '}\n      <TooltipLegacy\n        text="Justiça Restaurativa"\n        content="Modelo de justiça focado em reparar o dano causado."\n      />\n      .\n    </p>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Tooltip</span>,{" "}
                <span className="tok-tag">TooltipLegacy</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Tooltip</span>{"\n"}
                {"      "}<span className="tok-attr">text</span>=<span className="tok-str">&quot;BNCC, 2018, p. 30&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">content</span>=<span className="tok-str">&quot;Competência é a mobilização de conhecimentos e atitudes.&quot;</span>{"\n"}
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
              Com <code>showArrow=false</code> o novo balão vira um container sem rabinho; com{" "}
              <code>reference</code>, ganha uma citação bibliográfica no rodapé:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#D1F1FF" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">novo · sem rabinho</span>
                </div>
                <div className="p-8 pb-28 bg-white flex justify-center">
                  <p className="m-0" style={{ fontSize: 15, color: "#222" }}>
                    Um <TooltipPreview design="new" showArrow={false} text="tooltip container" content="Balão sem rabinho, útil como caixa de destaque ancorada." /> simples.
                  </p>
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#D1F1FF" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">novo · com referência</span>
                </div>
                <div className="p-8 pb-28 bg-white flex justify-center">
                  <p className="m-0" style={{ fontSize: 15, color: "#222" }}>
                    A <TooltipPreview
                      design="new"
                      text="Zona de Desenvolvimento Proximal"
                      content="Distância entre o que o aluno já sabe fazer sozinho e o que consegue fazer com ajuda."
                      reference="VYGOTSKY, L. S. 1978."
                    /> orienta o planejamento.
                  </p>
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O trigger é ativado por <code>onMouseEnter</code>/<code>onMouseLeave</code> — em telas
                touch, considere também um handler de toque para o mesmo termo.
              </li>
              <li className="prose-li">
                O contraste entre o texto do balão (preto) e <code>bgColor</code> deve permanecer alto
                se a cor padrão for customizada.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/buttonpdfdownload", label: "Anterior", title: "ButtonPdfDownload" }}
            next={{ href: "/docs/components/postit", label: "Próximo", title: "Postit" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>25 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/atoms/tooltip" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

/* ── Recriação visual simplificada dos componentes Tooltip (estática, sem lógica
   de posicionamento). O rabinho usa o mesmo SVG exportado do Figma que está em
   /public/tooltip/tooltipTail.svg. ── */
function TooltipPreview({
  design,
  text,
  content,
  reference,
  showArrow = true,
}: {
  design: "new" | "legacy";
  text: string;
  content: string;
  reference?: string;
  showArrow?: boolean;
}) {
  const isNew = design === "new";
  const bg = isNew ? "#D1F1FF" : "#FFDB70";
  return (
    <span className="relative inline-block group" style={{ cursor: "pointer" }}>
      <span style={{ position: "relative" }}>
        {text}
        <svg style={{ position: "absolute", left: 0, bottom: -4, width: "100%", height: 3, overflow: "visible" }}>
          <pattern id={`dotted-underline-doc-${design}-${showArrow}`} x="0" y="0" width="8" height="3" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#285C93" />
          </pattern>
          <rect x="0" y="0" width="100%" height="3" fill={`url(#dotted-underline-doc-${design}-${showArrow})`} />
        </svg>
      </span>
      <span
        className="absolute hidden group-hover:block"
        style={{
          top: "calc(100% + 18px)",
          left: "50%",
          transform: "translateX(-50%)",
          width: 280,
          background: bg,
          borderRadius: isNew ? 8 : 12,
          border: isNew ? `8px solid ${bg}` : undefined,
          filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.18))",
          padding: isNew ? 12 : 16,
          zIndex: 20,
        }}
      >
        {isNew && showArrow && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/tooltip/tooltipTail.svg"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -26,
              left: "50%",
              transform: "translateX(-50%) rotate(180deg)",
              width: 32,
              height: 31,
            }}
          />
        )}
        <span style={{ display: "block", fontSize: 13.5, lineHeight: 1.6, color: "black" }}>{content}</span>
        {reference && (
          <span style={{ display: "block", marginTop: 12, textAlign: "right", fontSize: 11.5, opacity: 0.9, color: "black" }}>
            {reference}
          </span>
        )}
      </span>
    </span>
  );
}
