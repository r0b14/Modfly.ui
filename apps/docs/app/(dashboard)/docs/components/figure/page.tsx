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

export default function FigurePage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            Figure<i>.</i>
          </h1>
          <p className="doc-lead">
            Wrapper editorial para imagens com numeração, legenda e referência, incluindo
            fallback e uma versão específica para mobile.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
            <div className="doc-meta-item">Props <b>9</b></div>
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
              O <code>Figure</code> envolve o componente <code>ImageFallback</code> com o
              aparato editorial de uma figura acadêmica: número + tipo (&quot;Figura 1&quot;),
              legenda e referência abaixo. Em telas menores que 600px, mostra um aviso pedindo
              para girar o celular quando <code>smallFont</code> está ativo, e pode trocar a
              imagem por uma versão vertical via <code>imgSrcMobile</code>.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use sempre que uma imagem precisar de legenda numerada e fonte/referência. Para
                imagem solta sem esse aparato, use <code>ImageFallback</code> diretamente.
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
                  Preview · Figure / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <FigurePreview />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Figure /&gt;</span> — props: imgSrc, type, number, caption, reference
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>imgSrc</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;&quot;</span></td>
                    <td>URL da imagem principal</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>imgSrcMobile</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;&quot;</span></td>
                    <td>Substitui <code>imgSrc</code> em telas &lt; 600px, se informado</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>imgFb</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;&quot;</span></td>
                    <td>Imagem de fallback, repassada ao <code>ImageFallback</code> interno</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>type</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Rótulo antes do número, ex.: &quot;Figura&quot;, &quot;Gráfico&quot;</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>number</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string | number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Número da figura; se ausente, a legenda aparece sem numeração</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>caption</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Texto da legenda, acima da imagem</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>reference</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Fonte/referência, abaixo da imagem em itálico</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>maxWidth</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;100%&quot;</span></td>
                    <td>Largura máxima repassada ao <code>ImageFallback</code></td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>smallFont</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>false</span></td>
                    <td>Ativa o aviso &quot;vire o celular&quot; em telas &lt; 600px</td>
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
              raw={`import { Figure } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Figure\n      imgSrc="/img/grafico.png"\n      type="Figura"\n      number={1}\n      caption="Evolução da JR no Brasil"\n      reference="Fonte: CNJ, 2024."\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Figure</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Figure</span>{"\n"}
                {"      "}<span className="tok-attr">imgSrc</span>=<span className="tok-str">&quot;/img/grafico.png&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">type</span>=<span className="tok-str">&quot;Figura&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">number</span>={"{"}<span className="tok-num">1</span>{"}"}{"\n"}
                {"      "}<span className="tok-attr">caption</span>=<span className="tok-str">&quot;Evolução da JR no Brasil&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">reference</span>=<span className="tok-str">&quot;Fonte: CNJ, 2024.&quot;</span>{"\n"}
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
            <p className="doc-p">Sem número/tipo, a legenda aparece sozinha:</p>
            <div className="my-7 flex justify-center">
              <FigurePreview noNumber />
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O alt text da imagem é responsabilidade do <code>ImageFallback</code> interno —
                confirme que ele recebe uma descrição adequada ao usar <code>Figure</code>.
              </li>
              <li className="prose-li">
                Number + type + caption formam o equivalente a um <code>&lt;figcaption&gt;</code>;
                considere migrar para as tags semânticas <code>&lt;figure&gt;</code>/
                <code>&lt;figcaption&gt;</code> numa revisão futura.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/quotetext", label: "Anterior", title: "QuoteText" }}
            next={{ href: "/docs/components/citation", label: "Próximo", title: "Citation" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/figure" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function FigurePreview({ noNumber = false }: { noNumber?: boolean }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 420 }}>
      <p style={{ fontSize: 13, color: "#333", margin: "0 0 8px" }}>
        {!noNumber && <strong>Figura 1: </strong>}
        Evolução da Justiça Restaurativa no Brasil
      </p>
      <div style={{ background: "#E1EFFF", borderRadius: 8, height: 180 }} />
      <p style={{ fontSize: 11.5, color: "#333", opacity: 0.8, fontStyle: "italic", marginTop: 8 }}>
        Fonte: CNJ, 2024.
      </p>
    </div>
  );
}
