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

export default function ButtonPdfDownloadPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Átomos · Referência</div>
          <h1 className="doc-title">
            ButtonPdfDownload<i>.</i>
          </h1>
          <p className="doc-lead">
            Botão dedicado ao download de um PDF — slides da aula ou roteiro de vídeo —
            com rótulo fixo e ícone de download.
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
              O <code>ButtonPdfDownload</code> força o download de um arquivo (em vez de abri-lo em nova aba),
              extraindo automaticamente o nome do arquivo a partir da URL passada em <code>pdfile</code>.
              O texto do rótulo muda conforme <code>variation</code>.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para oferecer os slides de uma aula ou o roteiro de um vídeo em PDF. Para links
                genéricos (não necessariamente PDF), use <code>ButtonLink</code> com <code>variant=2</code>.
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
                  Preview · ButtonPdfDownload / Aula
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <ButtonPdfDownloadPreview variation="class" />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;ButtonPdfDownload /&gt;</span> — props: pdfile, variation
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>pdfile</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>URL do PDF a ser baixado ao clicar</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>variation</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>&apos;class&apos; | &apos;video&apos;</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Muda o texto: &quot;slides da aula&quot; ou &quot;roteiro do vídeo&quot;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="tip" label="Nome do arquivo baixado">
              <p>
                O componente extrai o nome legível do arquivo a partir do <code>pdfile</code>, removendo
                hash de cache e parâmetros de URL — o download aparece com um nome limpo, não um hash.
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
              raw={`import { ButtonPdfDownload } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <ButtonPdfDownload\n      pdfile="/materiais/unidade-01-slides.pdf"\n      variation="class"\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">ButtonPdfDownload</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">ButtonPdfDownload</span>{"\n"}
                {"      "}<span className="tok-attr">pdfile</span>=<span className="tok-str">&quot;/materiais/unidade-01-slides.pdf&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">variation</span>=<span className="tok-str">&quot;class&quot;</span>{"\n"}
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
            <div className="grid grid-cols-2 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">variation=&quot;class&quot;</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <ButtonPdfDownloadPreview variation="class" />
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">variation=&quot;video&quot;</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <ButtonPdfDownloadPreview variation="video" />
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O rótulo textual sempre descreve a ação (&quot;Download dos slides...&quot;) — o ícone é
                puramente decorativo (<code>aria-hidden</code>).
              </li>
              <li className="prose-li">
                O download é disparado via clique de um elemento <code>&lt;a download&gt;</code> criado
                dinamicamente — funciona com teclado (Enter/Espaço) por ser um <code>&lt;button&gt;</code>.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/buttonlink", label: "Anterior", title: "ButtonLink" }}
            next={{ href: "/docs/components/tooltip", label: "Próximo", title: "Tooltip" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>16 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/atoms/buttonPdfDownload" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~2 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

/* ── Recriação visual do componente ButtonPdfDownload ── */
function ButtonPdfDownloadPreview({ variation }: { variation: "class" | "video" }) {
  return (
    <div
      className="flex mx-5 gap-5 justify-center items-center py-3 px-6 rounded-3xl shadow-md"
      style={{ background: "#FFAB00" }}
    >
      <div className="text-left">
        <strong className="text-black block leading-tight" style={{ fontSize: 14 }}>
          {variation === "video"
            ? "Download do roteiro do vídeo em PDF"
            : "Download dos slides da aula em PDF"}
        </strong>
      </div>
      <DownloadIcon />
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#7A4E00" fillOpacity="0.15" />
      <path d="M16 8v11.5M16 19.5l-4.5-4.5M16 19.5l4.5-4.5" stroke="#7A4E00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 23h14" stroke="#7A4E00" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
