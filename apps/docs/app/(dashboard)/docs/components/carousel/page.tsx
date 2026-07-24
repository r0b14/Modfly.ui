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

export default function CarouselPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Templates · Referência</div>
          <h1 className="doc-title">
            Carousel<i>.</i>
          </h1>
          <p className="doc-lead">
            Carrossel de slides com setas de navegação e bolinhas indicadoras, com fundo opcional
            que pode trocar de imagem a cada slide.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>template</b></div>
            <div className="doc-meta-item">Props <b>5</b></div>
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
              O <code>Carousel</code> recebe <code>items</code> (um array de <code>ReactNode</code>)
              e navega entre eles via scroll suave, setas e bolinhas. Opcionalmente, cada slide
              pode ter sua própria imagem de fundo (<code>bgImages</code>) e posição
              (<code>bgPosition</code>), com transição suave entre elas.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para navegação sequencial de conteúdo livre (não necessariamente cartões). Para
                slides com bordas coloridas por variante temática, veja <code>Slider</code>.
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
                  Preview · Carousel / 3 slides
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  template
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <CarouselPreview />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Carousel /&gt;</span> — props: items, numberOfItems, bgColor
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
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Conteúdo de cada slide</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>numberOfItems</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Total de slides, usado para desabilitar as setas nas pontas</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>bgColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;transparent&quot;</span></td>
                    <td>Cor de fundo do carrossel inteiro</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>bgImages</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string[]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Imagem de fundo por slide (índice correspondente)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>bgPosition</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string[]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>[]</span></td>
                    <td><code>background-position</code> por slide (índice correspondente)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="warn" label="numberOfItems deve bater com items.length">
              <p>
                <code>numberOfItems</code> é uma prop separada de <code>items</code>, usada só para
                controlar o estado dos botões de navegação — se os dois valores divergirem, as
                setas podem ficar habilitadas/desabilitadas incorretamente.
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
              raw={`import { Carousel } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Carousel\n      items={[<div key="1">Slide 1</div>, <div key="2">Slide 2</div>]}\n      numberOfItems={2}\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Carousel</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Carousel</span>{"\n"}
                {"      "}<span className="tok-attr">items</span>={"{["}&lt;div&gt;Slide 1&lt;/div&gt;, &lt;div&gt;Slide 2&lt;/div&gt;{"]}"}{"\n"}
                {"      "}<span className="tok-attr">numberOfItems</span>={"{"}<span className="tok-num">2</span>{"}"}{"\n"}
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
              A variação principal é via <code>bgColor</code>/<code>bgImages</code> — sem elas, o
              carrossel fica transparente sobre o fundo da página.
            </p>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                Os botões de seta têm <code>disabled</code> nas extremidades e ícones com{" "}
                <code>alt</code> descritivo (&quot;Anterior&quot;/&quot;Próximo&quot;).
              </li>
              <li className="prose-li">
                As bolinhas têm <code>aria-label</code> dinâmico (&quot;Ir para slide N&quot;).
              </li>
              <li className="prose-li">
                A navegação por scroll horizontal nativo continua disponível via teclado/toque,
                além dos botões.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/learningblock", label: "Anterior", title: "LearningBlock" }}
            next={{ href: "/docs/components/slider", label: "Próximo", title: "Slider" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/templates/carousel" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function CarouselPreview() {
  return (
    <div style={{ width: 340, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
        <span style={{ fontSize: 18, opacity: 0.3 }}>‹</span>
        <div style={{ flex: 1, height: 90, background: "#eee", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#555" }}>
          Slide 1
        </div>
        <span style={{ fontSize: 18 }}>›</span>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === 0 ? "#285C93" : "#ccc" }} />
        ))}
      </div>
    </div>
  );
}
