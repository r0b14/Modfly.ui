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

export default function UnityBannerPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Templates · Referência</div>
          <h1 className="doc-title">
            UnityBanner<i>.</i>
          </h1>
          <p className="doc-lead">
            Banner de abertura de módulo, com fundo ilustrado próprio por número de módulo (1 a 4)
            e duas variantes de proporção: principal e secundária.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>template</b></div>
            <div className="doc-meta-item">Props <b>3</b></div>
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
              O <code>UnityBanner</code> escolhe automaticamente uma imagem de fundo com base em{" "}
              <code>type</code> (&quot;main&quot; ou &quot;secondary&quot;) e <code>module</code>{" "}
              (1 a 4) — cada combinação tem seu próprio asset e proporção de aspecto.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use no topo de cada módulo do curso, com <code>type=&quot;main&quot;</code> na
                abertura e <code>type=&quot;secondary&quot;</code> em subdivisões internas.
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
                  Preview · UnityBanner / main
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  template
                </span>
              </div>
              <div className="p-10 bg-white">
                <UnityBannerPreview type="main" subtitle="Conhecimentos Fundamentais" />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;UnityBanner /&gt;</span> — props: type, module, subtitle
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>type</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>&quot;main&quot; | &quot;secondary&quot;</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Define proporção de aspecto e o conjunto de fundos usado</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>module</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>1</span></td>
                    <td>Número do módulo (1 a 4) — escolhe o fundo ilustrado correspondente</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>subtitle</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Texto sobre o fundo, alinhado à base</td>
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
              raw={`import { UnityBanner } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <UnityBanner type="main" module={1} subtitle="Conhecimentos Fundamentais" />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">UnityBanner</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">UnityBanner</span>{" "}
                <span className="tok-attr">type</span>=<span className="tok-str">&quot;main&quot;</span>{" "}
                <span className="tok-attr">module</span>={"{"}<span className="tok-num">1</span>{"}"}{" "}
                <span className="tok-attr">subtitle</span>=<span className="tok-str">&quot;Conhecimentos Fundamentais&quot;</span> /&gt;{"\n"}
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
            <div className="my-7">
              <UnityBannerPreview type="secondary" subtitle="Módulo Secundário" />
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O fundo é aplicado via <code>backgroundImage</code> CSS — não carrega texto
                alternativo. O <code>subtitle</code> é o único conteúdo textual real do banner.
              </li>
              <li className="prose-li">
                Garanta contraste do <code>subtitle</code> contra a ilustração de fundo, que muda
                por módulo.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/pagination", label: "Anterior", title: "Pagination" }}
            next={{ href: "/docs/components/glossary", label: "Próximo", title: "Glossary" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/templates/unityBanner" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function UnityBannerPreview({ type, subtitle }: { type: "main" | "secondary"; subtitle: string }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: type === "main" ? "1400 / 328" : "1400 / 256",
        background: "linear-gradient(120deg, #4A90E2, #285C93)",
        borderRadius: 8,
        display: "flex",
        alignItems: "flex-end",
        padding: "20px 28px",
      }}
    >
      <p style={{ color: "#fff", fontWeight: 500, fontSize: 16, margin: 0 }}>{subtitle}</p>
    </div>
  );
}
