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

export default function RangeGreenPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Átomos · Referência</div>
          <h1 className="doc-title">
            RangeGreen<i>.</i>
          </h1>
          <p className="doc-lead">
            Faixa horizontal verde com três sub-variantes visuais (bordas retas, arredondadas e
            finas) — mesmo conceito do RangeBlue, com outra paleta e mais opções de estilo.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>átomo</b></div>
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
              O <code>RangeGreen</code> tem três variantes (<code>variant: 1 | 2 | 3</code>), cada
              uma com sua própria borda decorativa, cor de fundo e raio de canto — variante 1 é a
              mais larga e reta (100% da largura, sem raio), variantes 2 e 3 são mais estreitas
              (1065px) e arredondadas.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para o mesmo propósito do <code>RangeBlue</code>, mas quando a paleta verde
                combinar melhor com o restante do módulo.
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
                  Preview · RangeGreen / variant 1
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="bg-white flex justify-center py-6">
                <RangeGreenPreview variant={1}>
                  <p style={{ margin: 0 }}>Conteúdo dentro da faixa verde, variante 1.</p>
                </RangeGreenPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;RangeGreen /&gt;</span> — props: children, variant
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>children</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Conteúdo principal (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>variant</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>1 | 2 | 3</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>1</span></td>
                    <td>Sub-estilo: borda, cor de fundo e largura mudam por variante</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="tip" label="Sem bgColor">
              <p>
                Ao contrário do <code>RangeBlue</code>, o <code>RangeGreen</code> não tem uma prop{" "}
                <code>bgColor</code> — a cor de fundo é sempre determinada pela <code>variant</code>{" "}
                escolhida.
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
              raw={`import { RangeGreen } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <RangeGreen variant={2}>\n      <p>Conteúdo principal.</p>\n    </RangeGreen>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">RangeGreen</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">RangeGreen</span>{" "}
                <span className="tok-attr">variant</span>={"{"}<span className="tok-num">2</span>{"}"}&gt;{"\n"}
                {"      "}&lt;p&gt;Conteúdo principal.&lt;/p&gt;{"\n"}
                {"    "}&lt;/<span className="tok-tag">RangeGreen</span>&gt;{"\n"}
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
            <div className="grid grid-cols-1 gap-6 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-white flex justify-center py-6">
                <RangeGreenPreview variant={2}>
                  <p style={{ margin: 0 }}>Variante 2 — mais estreita, cantos arredondados.</p>
                </RangeGreenPreview>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-white flex justify-center py-6">
                <RangeGreenPreview variant={3}>
                  <p style={{ margin: 0 }}>Variante 3 — borda mais fina.</p>
                </RangeGreenPreview>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">As faixas decorativas de topo/base são puramente visuais.</li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/rangeblue", label: "Anterior", title: "RangeBlue" }}
            next={{ href: "/docs/components/cards", label: "Próximo", title: "Cards" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/atoms/rangeGreen" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~2 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function RangeGreenPreview({ children, variant }: { children: React.ReactNode; variant: 1 | 2 | 3 }) {
  const background = variant === 1 ? "#F2EFD2" : "#F8FFE4";
  const radius = variant === 1 ? 0 : 20;
  const width = variant === 1 ? "100%" : 420;
  const height = variant === 1 ? 30 : 16;
  const topSrc =
    variant === 1
      ? "/rangegreen/FaixaVerde.png"
      : variant === 2
      ? "/rangegreen/faixaVerdeBaixo2.png"
      : "/rangegreen/faixaVerdetb.svg";
  const bottomSrc = variant === 1 ? "/rangegreen/FaixaVerdeBaixo.svg" : topSrc;

  return (
    <div className="overflow-hidden" style={{ background, borderRadius: radius, width, maxWidth: "100%" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={topSrc} alt="" aria-hidden="true" style={{ height, width: "100%", display: "block", objectFit: "cover" }} />
      <div className="flex justify-center items-center py-8 px-8">{children}</div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={bottomSrc} alt="" aria-hidden="true" style={{ height, width: "100%", display: "block", objectFit: "cover" }} />
    </div>
  );
}
