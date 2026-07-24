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

export default function SliderPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Templates · Referência</div>
          <h1 className="doc-title">
            Slider<i>.</i>
          </h1>
          <p className="doc-lead">
            Carrossel simples que recebe os slides diretamente como <code>children</code>, com
            quatro esquemas de cor de seta prontos.
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
              Ao contrário do <code>Carousel</code> (que recebe <code>items</code> como prop), o{" "}
              <code>Slider</code> recebe os slides como <code>children</code> diretamente,
              simplificando a composição quando não é preciso passar fundo por slide.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use quando não precisar de fundo por slide nem controle externo do índice. Para
                fundo dinâmico por slide, use <code>Carousel</code>.
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
                  Preview · Slider / variant blue
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  template
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <SliderPreview color="#285C93" />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Slider /&gt;</span> — props: children, variant, bulletColor, bulletActiveColor
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
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode[]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Um filho por slide</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>variant</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>&quot;blue&quot; | &quot;orange&quot; | &quot;green&quot; | &quot;brown&quot;</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;blue&quot;</span></td>
                    <td>Cor das setas de navegação</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>bulletColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#ccc&quot;</span></td>
                    <td>Cor das bolinhas inativas</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>bulletActiveColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#285C93&quot;</span></td>
                    <td>Cor da bolinha do slide atual</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>onSlideChange</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>{"(current: number) => void"}</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Chamado a cada troca de slide, com o novo índice</td>
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
              raw={`import { Slider } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Slider variant="green">\n      <div>Slide 1</div>\n      <div>Slide 2</div>\n    </Slider>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Slider</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Slider</span>{" "}
                <span className="tok-attr">variant</span>=<span className="tok-str">&quot;green&quot;</span>&gt;{"\n"}
                {"      "}&lt;div&gt;Slide 1&lt;/div&gt;{"\n"}
                {"      "}&lt;div&gt;Slide 2&lt;/div&gt;{"\n"}
                {"    "}&lt;/<span className="tok-tag">Slider</span>&gt;{"\n"}
                {"  "}){"\n"}
                {"}"}
              </pre>
            </DocCodeBlock>
            <Callout variant="tip" label="Sem Wrapper separado">
              <p>
                Diferente de versões anteriores usadas em cursos (que tinham{" "}
                <code>Slider.Wrapper</code> + <code>Slider.Carousel</code> como componentes
                compostos), a versão atual em <code>@modfly/ui</code> é um único componente —
                mais simples de usar, sem precisar de dois níveis de wrapper.
              </p>
            </Callout>
          </section>

          <section id="variantes">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#variantes" aria-hidden="true">#</a>
              <span className="doc-h2-num">05 · Variações</span>
              Variantes
            </h2>
            <div className="grid grid-cols-4 gap-4 my-7">
              <SliderSwatch label="blue" color="#4A90E2" />
              <SliderSwatch label="orange" color="#EC803D" />
              <SliderSwatch label="green" color="#4E9236" />
              <SliderSwatch label="brown" color="#8B5E3C" />
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                As setas têm <code>disabled</code> nas extremidades, com <code>alt</code> descritivo.
              </li>
              <li className="prose-li">
                As bolinhas de navegação não têm rótulo textual atualmente — considere adicionar{" "}
                <code>aria-label</code> por bolinha numa revisão futura.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/carousel", label: "Anterior", title: "Carousel" }}
            next={{ href: "/docs/components/pagination", label: "Próximo", title: "Pagination" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/templates/slider" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function SliderPreview({ color }: { color: string }) {
  return (
    <div style={{ width: 300, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%" }}>
        <span style={{ fontSize: 20, color }}>‹</span>
        <div style={{ flex: 1, height: 80, background: "#f4f4f4", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#555" }}>
          Slide 1
        </div>
        <span style={{ fontSize: 20, color }}>›</span>
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === 0 ? color : "#ccc" }} />
        ))}
      </div>
    </div>
  );
}

function SliderSwatch({ label, color }: { label: string; color: string }) {
  return (
    <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
      <div className="px-3 py-2 border-b border-rule bg-[var(--bg)]">
        <span className="font-jetbrains text-[10px] text-[var(--muted)] mono">{label}</span>
      </div>
      <div className="p-4 bg-white flex justify-center">
        <span style={{ fontSize: 22, color }}>‹ ›</span>
      </div>
    </div>
  );
}
