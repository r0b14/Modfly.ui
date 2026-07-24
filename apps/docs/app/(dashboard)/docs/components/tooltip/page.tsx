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
            Termo com sublinhado pontilhado que revela uma explicação ao passar o mouse —
            ideal para glossário inline sem sair da leitura.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>átomo</b></div>
            <div className="doc-meta-item">Props <b>7</b></div>
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
              O <code>Tooltip</code> marca um termo (<code>text</code>) com um sublinhado pontilhado.
              Ao passar o mouse, exibe um balão com <code>content</code> — a explicação do termo —
              posicionado automaticamente para nunca sair da viewport.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para explicar um termo técnico sem interromper o fluxo de leitura do aluno,
                em vez de um link para um glossário externo.
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
                  Preview · Tooltip / hover
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <p className="m-0" style={{ fontSize: 16, color: "#222" }}>
                  O conceito de <TooltipPreview text="Justiça Restaurativa" content="Modelo de justiça focado em reparar o dano causado, não apenas punir." /> mudou a forma como a escola lida com conflitos.
                </p>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ passe o mouse sobre o termo sublinhado — <span className="text-[var(--ink-2)]">&lt;Tooltip /&gt;</span>
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
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>#FFDB70</span></td>
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
              raw={`import { Tooltip } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <p>\n      O conceito de{' '}\n      <Tooltip\n        text="Justiça Restaurativa"\n        content="Modelo de justiça focado em reparar o dano causado."\n      />\n      {' '}mudou a forma como a escola lida com conflitos.\n    </p>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Tooltip</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Tooltip</span>{"\n"}
                {"      "}<span className="tok-attr">text</span>=<span className="tok-str">&quot;Justiça Restaurativa&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">content</span>=<span className="tok-str">&quot;Modelo de justiça focado em reparar o dano causado.&quot;</span>{"\n"}
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
            <p className="doc-p">Com <code>reference</code>, o balão ganha uma citação bibliográfica no rodapé:</p>
            <div className="my-7 border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
              <div className="p-8 bg-white flex justify-center">
                <p className="m-0" style={{ fontSize: 16, color: "#222" }}>
                  A <TooltipPreview
                    text="Zona de Desenvolvimento Proximal"
                    content="Distância entre o que o aluno já sabe fazer sozinho e o que consegue fazer com ajuda."
                    reference="VYGOTSKY, L. S. 1978."
                  /> orienta o planejamento de atividades.
                </p>
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
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>16 Jul 2026</b></span>
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

/* ── Recriação visual simplificada do componente Tooltip (estático, sem lógica de posicionamento) ── */
function TooltipPreview({
  text,
  content,
  reference,
}: {
  text: string;
  content: string;
  reference?: string;
}) {
  return (
    <span className="relative inline-block group" style={{ cursor: "pointer" }}>
      <span style={{ position: "relative" }}>
        {text}
        <svg style={{ position: "absolute", left: 0, bottom: -4, width: "100%", height: 3, overflow: "visible" }}>
          <pattern id="dotted-underline-doc" x="0" y="0" width="8" height="3" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#285C93" />
          </pattern>
          <rect x="0" y="0" width="100%" height="3" fill="url(#dotted-underline-doc)" />
        </svg>
      </span>
      <span
        className="absolute hidden group-hover:block"
        style={{
          top: "calc(100% + 14px)",
          left: "50%",
          transform: "translateX(-50%)",
          width: 280,
          background: "#FFDB70",
          borderRadius: 12,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          padding: 16,
          zIndex: 20,
        }}
      >
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
