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

export default function IndentCitationPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            IndentCitation<i>.</i>
          </h1>
          <p className="doc-lead">
            Família de blocos de citação indentados com borda colorida à esquerda. O módulo
            exporta quatro componentes: <code>IndentCitation</code>, <code>IndentCitationBg</code>,{" "}
            <code>IndentCitationImg</code> e <code>IndentCitationTitle</code>.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
            <div className="doc-meta-item">Props <b>3 + variações</b></div>
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
              O componente base <code>IndentCitation</code> é um bloco de texto com borda
              esquerda colorida, deslocado para a direita (indentado). O mesmo arquivo também
              exporta três variações prontas: <code>IndentCitationBg</code> (com imagem de fundo
              e imagem principal ao lado do texto), <code>IndentCitationImg</code> (com uma
              imagem configurável e alinhamento) e <code>IndentCitationTitle</code> (com um
              título em destaque acima do texto).
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use <code>IndentCitation</code> para o caso simples. Use as variações{" "}
                <code>Bg</code>/<code>Img</code>/<code>Title</code> quando precisar de imagem ou
                título junto do bloco, em vez de compor manualmente.
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
                  Preview · IndentCitation / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white">
                <IndentCitationPreview borderColor="#0D4490">
                  A citação indentada é ideal para destacar trechos de livros, artigos ou falas
                  importantes que merecem atenção especial do aluno.
                </IndentCitationPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;IndentCitation /&gt;</span> — props: children, borderColor, backgroundColor
              </div>
            </div>
          </section>

          <section id="props">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#props" aria-hidden="true">#</a>
              <span className="doc-h2-num">03 · API</span>
              Propriedades
            </h2>
            <p className="doc-p"><code>IndentCitation</code>:</p>
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
                    <td>Texto da citação</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>borderColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#0D4490&quot;</span></td>
                    <td>Cor da borda esquerda</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>backgroundColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Preenche todo o bloco, não só a borda</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="tip" label="Variações">
              <p>
                <code>IndentCitationBg</code> soma <code>title</code>, <code>text</code> e{" "}
                <code>option: &quot;yellow&quot; | &quot;pink&quot;</code>. <code>IndentCitationImg</code> soma{" "}
                <code>title</code>, <code>imageSrc</code>, <code>align</code> e <code>borderColor</code>.{" "}
                <code>IndentCitationTitle</code> soma <code>title</code> ao mesmo shape do componente base.
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
              raw={`import { IndentCitation } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <IndentCitation borderColor="#742B0B">\n      A educação é o processo de viver e não uma preparação para a vida futura.\n    </IndentCitation>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">IndentCitation</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">IndentCitation</span>{" "}
                <span className="tok-attr">borderColor</span>=<span className="tok-str">&quot;#742B0B&quot;</span>&gt;{"\n"}
                {"      "}A educação é o processo de viver...{"\n"}
                {"    "}&lt;/<span className="tok-tag">IndentCitation</span>&gt;{"\n"}
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
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">Com backgroundColor</span>
                </div>
                <div className="p-6 bg-white">
                  <IndentCitationPreview borderColor="#742B0B" backgroundColor="#F6ECBD">
                    Quando backgroundColor é definido, preenche o bloco inteiro.
                  </IndentCitationPreview>
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">IndentCitationTitle</span>
                </div>
                <div className="p-6 bg-white">
                  <IndentCitationPreview borderColor="#0D4490" title="Resumo do capítulo">
                    Igual ao base, mas com título em destaque acima do texto.
                  </IndentCitationPreview>
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                A borda colorida é puramente visual — garanta que o texto tenha contraste
                suficiente sobre <code>backgroundColor</code> quando definido.
              </li>
              <li className="prose-li">
                Nenhuma das variações usa <code>&lt;blockquote&gt;</code>; para citações longas,
                envolva o conteúdo você mesmo se a semântica for importante.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/citation", label: "Anterior", title: "Citation" }}
            next={{ href: "/docs/components/listmodule", label: "Próximo", title: "ListModule" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/indentCitation" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function IndentCitationPreview({
  children,
  borderColor,
  backgroundColor,
  title,
}: {
  children: React.ReactNode;
  borderColor: string;
  backgroundColor?: string;
  title?: string;
}) {
  return (
    <div className="py-4 pl-12 w-full" style={backgroundColor ? { backgroundColor } : {}}>
      <div
        className="ml-auto px-6"
        style={{ borderLeft: `5px solid ${borderColor}`, maxWidth: "85%", ...(backgroundColor ? { backgroundColor } : {}) }}
      >
        {title && <p style={{ fontWeight: 700, color: "#0D4490", marginBottom: 8 }}>{title}</p>}
        <div style={{ color: "#333333", lineHeight: 1.6, fontSize: 14 }}>{children}</div>
      </div>
    </div>
  );
}
