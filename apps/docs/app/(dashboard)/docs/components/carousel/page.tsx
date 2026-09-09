import { DocCodeBlock } from "@/components/docs/DocCodeBlock";
import { Callout } from "@/components/docs/Callout";
import { Pager } from "@/components/docs/Pager";
import { RightToc } from "@/components/docs/RightToc";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carousel",
  description:
    "Carrossel de slides em duas gerações: o novo design EDC com cards coloridos e fundo decorativo por tema, e a versão legada com wrapper genérico sem estilo próprio.",
  alternates: { canonical: "/docs/components/carousel" },
};

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
            Carrossel de slides em duas gerações: <strong>Carousel</strong>, o novo design com
            cards coloridos e fundo decorativo por tema, e <strong>CarouselLegacy</strong>, o
            wrapper genérico anterior sem estilo visual próprio.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>template</b></div>
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
              O novo <code>Carousel</code> recebe <code>items</code> — objetos com{" "}
              <code>content</code> (o conteúdo livre do slide) e <code>colorScheme</code>{" "}
              (<code>blue</code>, <code>orange</code> ou <code>green</code>). Cada slide vira um
              card com fundo decorativo ilustrado no tema escolhido, setas de navegação
              sobrepostas nas bordas na cor do tema, e bolinhas de paginação abaixo. O{" "}
              <code>CarouselLegacy</code> mantém a API antiga de <code>items</code> como array de{" "}
              <code>ReactNode</code> com <code>numberOfItems</code>/<code>bgImages</code>/
              <code>bgColor</code>/<code>bgPosition</code>, sem estilo visual próprio.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Prefira o novo <code>Carousel</code> em módulos novos. Use{" "}
                <code>CarouselLegacy</code> para consistência com módulos já publicados ou quando
                precisar de imagem de fundo customizada por slide. Para slides com bordas
                coloridas por variante temática, veja <code>Slider</code>.
              </p>
            </Callout>
          </section>

          <section id="preview">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#preview" aria-hidden="true">#</a>
              <span className="doc-h2-num">02 · Demo</span>
              Visualização
            </h2>
            <p className="doc-p">O novo design, nos três temas de cor:</p>
            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · Carousel / blue
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  template
                </span>
              </div>
              <div className="p-10 bg-white flex flex-col items-center gap-6">
                <CarouselCardPreview colorScheme="blue">
                  &quot;Se você não tem uma religião, você não tem um Deus&quot;
                </CarouselCardPreview>
                <CarouselDotsPreview active={0} />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Carousel /&gt;</span> — props: items (content, colorScheme)
              </div>
            </div>
          </section>

          <section id="props">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#props" aria-hidden="true">#</a>
              <span className="doc-h2-num">03 · API</span>
              Propriedades
            </h2>

            <h3 className="doc-h3">Carousel (novo design)</h3>
            <div className="table-wrap">
              <table className="doc-table">
                <thead>
                  <tr><th>Prop</th><th>Tipo</th><th>Padrão</th><th>Descrição</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>CarouselItem[]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Lista de slides (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items[].content</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Conteúdo livre do slide</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items[].colorScheme</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>&quot;blue&quot; | &quot;orange&quot; | &quot;green&quot;</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;blue&quot;</span></td>
                    <td>Tema do card: fundo decorativo e cor das setas</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="doc-h3">CarouselLegacy</h3>
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
          </section>

          <section id="uso">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#uso" aria-hidden="true">#</a>
              <span className="doc-h2-num">04 · Exemplos</span>
              Como usar
            </h2>
            <DocCodeBlock
              filename="Unidade01.tsx"
              raw={`import { Carousel } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Carousel\n      items={[\n        { colorScheme: 'blue', content: <p>Slide 1</p> },\n        { colorScheme: 'orange', content: <p>Slide 2</p> },\n        { colorScheme: 'green', content: <p>Slide 3</p> },\n      ]}\n    />\n  )\n}`}
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
                {"      "}<span className="tok-attr">items</span>={"{"}[{"\n"}
                {"        "}{"{"} <span className="tok-attr">colorScheme</span>: <span className="tok-str">&apos;blue&apos;</span>, <span className="tok-attr">content</span>: &lt;p&gt;Slide 1&lt;/p&gt; {"}"},{"\n"}
                {"        "}{"{"} <span className="tok-attr">colorScheme</span>: <span className="tok-str">&apos;orange&apos;</span>, <span className="tok-attr">content</span>: &lt;p&gt;Slide 2&lt;/p&gt; {"}"},{"\n"}
                {"        "}{"{"} <span className="tok-attr">colorScheme</span>: <span className="tok-str">&apos;green&apos;</span>, <span className="tok-attr">content</span>: &lt;p&gt;Slide 3&lt;/p&gt; {"}"},{"\n"}
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
            <p className="doc-p">Os três temas de cor do novo design:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#285C93" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">blue</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CarouselCardPreview colorScheme="blue" small>Deus.</CarouselCardPreview>
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#DD6F2F" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">orange</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CarouselCardPreview colorScheme="orange" small>Alma.</CarouselCardPreview>
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#2D9522" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">green</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CarouselCardPreview colorScheme="green" small>Animal.</CarouselCardPreview>
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                Os botões de seta são <code>&lt;button&gt;</code> reais com <code>disabled</code>{" "}
                nas extremidades e <code>aria-label</code> (&quot;Slide anterior&quot;/&quot;Próximo
                slide&quot;).
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
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>25 Jul 2026</b></span>
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

// Os previews usam os mesmos SVGs do componente real (copiados para
// /public/carousel) em vez de redesenhar o visual à mão.
const ARROW_COLOR: Record<"blue" | "orange" | "green", string> = {
  blue: "#285C93",
  orange: "#DD6F2F",
  green: "#2D9522",
};

const CARD_BG: Record<"blue" | "orange" | "green", string> = {
  blue: "/carousel/cardBlue.svg",
  orange: "/carousel/cardOrange.svg",
  green: "/carousel/cardGreen.svg",
};

function CarouselCardPreview({
  colorScheme,
  small = false,
  children,
}: {
  colorScheme: "blue" | "orange" | "green";
  small?: boolean;
  children: React.ReactNode;
}) {
  const width = small ? 260 : 560;
  const height = small ? 120 : 160;
  return (
    <div className="relative rounded-xl overflow-hidden flex items-center" style={{ width, height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={CARD_BG[colorScheme]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <span className="relative z-10" style={{ width: small ? 16 : 20, color: ARROW_COLOR[colorScheme] }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/carousel/arrow.svg" alt="" aria-hidden="true" style={{ transform: "rotate(180deg)" }} />
      </span>
      <p
        className="relative z-10 flex-1 text-center px-3"
        style={{ fontSize: small ? 13 : 17, color: "#000", margin: 0 }}
      >
        {children}
      </p>
      <span className="relative z-10" style={{ width: small ? 16 : 20, color: ARROW_COLOR[colorScheme] }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/carousel/arrow.svg" alt="" aria-hidden="true" />
      </span>
    </div>
  );
}

function CarouselDotsPreview({ active }: { active: number }) {
  return (
    <div className="flex gap-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block w-3 h-3 rounded-full"
          style={{ background: "#3A584E", opacity: i === active ? 1 : 0.5 }}
        />
      ))}
    </div>
  );
}
