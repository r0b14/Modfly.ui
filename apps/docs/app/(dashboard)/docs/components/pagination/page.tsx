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

export default function PaginationPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Templates · Referência</div>
          <h1 className="doc-title">
            Pagination<i>.</i>
          </h1>
          <p className="doc-lead">
            Barra de navegação entre páginas de um módulo, com botões Voltar/Próximo e números de
            página clicáveis.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>template</b></div>
            <div className="doc-meta-item">Props <b>8</b></div>
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
              O <code>Pagination</code> é totalmente controlado: você fornece{" "}
              <code>currentPage</code> e recebe <code>onPageChange</code> quando o usuário clica
              num número ou nos botões Voltar/Próximo (que podem ter handlers próprios via{" "}
              <code>onPrev</code>/<code>onNext</code>, por exemplo para navegar entre páginas de
              rotas diferentes).
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use no rodapé de um módulo para navegação sequencial entre suas páginas/telas.
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
                  Preview · Pagination / 5 páginas
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  template
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <PaginationPreview />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Pagination /&gt;</span> — props: numberOfPages, currentPage, onPageChange
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>numberOfPages</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Total de páginas</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>currentPage</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Página ativa (1-indexed)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>onPageChange</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>{"(page: number) => void"}</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Chamado ao clicar num número, ou em Voltar/Próximo sem handler próprio</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>onNext / onPrev</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>{"() => void"}</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Sobrescrevem o comportamento padrão dos botões Voltar/Próximo</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>title</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;Progresso do Módulo&quot;</span></td>
                    <td>Título acima dos controles</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>showNumbers</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>true</span></td>
                    <td>Mostra ou oculta os números de página</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>className</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;&quot;</span></td>
                    <td>Classes extras no container</td>
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
              raw={`import { Pagination } from '@modfly/ui'\nimport { useState } from 'react'\n\nexport function Aula01() {\n  const [page, setPage] = useState(1)\n  return (\n    <Pagination\n      numberOfPages={5}\n      currentPage={page}\n      onPageChange={setPage}\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Pagination</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n"}
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">useState</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;react&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">const</span> [page, setPage] = <span className="tok-fn">useState</span>(<span className="tok-num">1</span>){"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Pagination</span>{"\n"}
                {"      "}<span className="tok-attr">numberOfPages</span>={"{"}<span className="tok-num">5</span>{"}"}{"\n"}
                {"      "}<span className="tok-attr">currentPage</span>={"{"}page{"}"}{"\n"}
                {"      "}<span className="tok-attr">onPageChange</span>={"{"}setPage{"}"}{"\n"}
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
            <p className="doc-p">Com <code>showNumbers=false</code>, só os botões aparecem:</p>
            <div className="my-7 flex justify-center">
              <PaginationPreview showNumbers={false} title="Avance no módulo" />
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O botão Voltar fica <code>disabled</code> na primeira página (a menos que{" "}
                <code>onPrev</code> seja informado); o botão Próximo, na última.
              </li>
              <li className="prose-li">
                Os números de página são <code>&lt;button&gt;</code> nativos, navegáveis por
                teclado.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/slider", label: "Anterior", title: "Slider" }}
            next={{ href: "/docs/components/unitybanner", label: "Próximo", title: "UnityBanner" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/templates/pagination" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function PaginationPreview({ showNumbers = true, title = "Progresso do Módulo" }: { showNumbers?: boolean; title?: string }) {
  return (
    <div style={{ background: "#FAEBC2", borderRadius: 8, padding: "20px 24px", textAlign: "center", width: 340 }}>
      <p style={{ margin: "0 0 14px", fontSize: 14, fontWeight: 500, color: "#000" }}>{title}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
        <button style={{ background: "#fff", borderRadius: 20, padding: "8px 14px", fontSize: 12, fontWeight: 700, color: "#285C93", border: "none" }}>
          ← VOLTAR
        </button>
        {showNumbers && (
          <div style={{ display: "flex", gap: 6 }}>
            {[1, 2, 3, 4, 5].map((p) => (
              <div
                key={p}
                style={{
                  width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700,
                  background: p === 2 ? "#FFB861" : "#285C93",
                  color: p === 2 ? "#285C93" : "#fff",
                  border: p === 2 ? "2px solid #285C93" : "none",
                }}
              >
                {p}
              </div>
            ))}
          </div>
        )}
        <button style={{ background: "#fff", borderRadius: 20, padding: "8px 14px", fontSize: 12, fontWeight: 700, color: "#285C93", border: "none" }}>
          PRÓXIMO →
        </button>
      </div>
    </div>
  );
}
