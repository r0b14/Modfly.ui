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

export default function QuoteTextPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            QuoteText<i>.</i>
          </h1>
          <p className="doc-lead">
            Bloco de citação simples com ícone de aspas e sombra suave — sem atribuição de autor
            nem ícone de livro, para trechos de destaque dentro do texto corrido.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
            <div className="doc-meta-item">Props <b>4</b></div>
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
              O <code>QuoteText</code> é o mais simples dos blocos de citação da lib: um cartão
              branco com sombra, um ícone de aspas à esquerda (ou acima, em mobile) e o texto
              recebido via <code>children</code>. Não tem variantes de cor.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para destacar uma frase sem precisar atribuir autoria. Para citações com
                autor, use <code>Citation</code>. Para blocos indentados com fundo colorido, use{" "}
                <code>IndentCitation</code>.
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
                  Preview · QuoteText / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white">
                <QuoteTextPreview>
                  A educação é o processo de viver e não uma preparação para a vida futura.
                </QuoteTextPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;QuoteText /&gt;</span> — props: children, specText, quoteAlign, fullScreen
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
                    <td>Texto da citação (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>specText</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Vira o <code>id</code> do texto, útil para navegação por âncora</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>quoteAlign</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;center&quot;</span></td>
                    <td>Vira o sufixo da classe Tailwind <code>items-*</code> do container flex</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>fullScreen</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>false</span></td>
                    <td>Quando true, o bloco ocupa 100% da largura em vez de 80%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="warn" label="quoteAlign não é uma união tipada">
              <p>
                <code>quoteAlign</code> é tipado como <code>string</code> livre, mas só faz
                sentido receber valores de alinhamento Tailwind (<code>&quot;center&quot;</code>,{" "}
                <code>&quot;start&quot;</code>, <code>&quot;end&quot;</code>). Vale considerar
                trocar para um union type numa próxima revisão.
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
              raw={`import { QuoteText } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <QuoteText specText="quote-1">\n      A educação é o processo de viver e não uma preparação para a vida futura.\n    </QuoteText>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">QuoteText</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">QuoteText</span>{" "}
                <span className="tok-attr">specText</span>=<span className="tok-str">&quot;quote-1&quot;</span>&gt;{"\n"}
                {"      "}A educação é o processo de viver...{"\n"}
                {"    "}&lt;/<span className="tok-tag">QuoteText</span>&gt;{"\n"}
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
              Com <code>fullScreen</code>, o bloco ocupa toda a largura disponível em vez de 80%:
            </p>
            <div className="my-7">
              <QuoteTextPreview fullScreen>
                Com fullScreen ativo, o cartão se estica para preencher o container inteiro.
              </QuoteTextPreview>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">O ícone de aspas é puramente decorativo.</li>
              <li className="prose-li">
                O texto vive dentro de uma <code>&lt;div&gt;</code> com <code>id</code> opcional —
                para semântica de citação, considere envolver o conteúdo em{" "}
                <code>&lt;blockquote&gt;</code> ao usar o componente.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/cardflip", label: "Anterior", title: "CardFlip" }}
            next={{ href: "/docs/components/figure", label: "Próximo", title: "Figure" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/quoteText" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function QuoteTextPreview({
  children,
  fullScreen = false,
}: {
  children: React.ReactNode;
  fullScreen?: boolean;
}) {
  return (
    <div
      style={{
        padding: "32px 28px",
        background: "#FFFFFF",
        boxShadow: "0px 0px 8px rgba(103, 141, 88, 0.5)",
        borderRadius: 4,
        maxWidth: fullScreen ? "100%" : "80%",
        margin: "0 auto",
        display: "flex",
        gap: 18,
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 34, opacity: 0.4, lineHeight: 1 }}>&ldquo;</span>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#333" }}>{children}</p>
    </div>
  );
}
