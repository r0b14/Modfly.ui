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

export default function QuotesPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            Quotes<i>.</i>
          </h1>
          <p className="doc-lead">
            Citação com ícone de aspas colorido, alinhada à direita, em quatro esquemas de cor.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
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
              O <code>Quotes</code> mostra um ícone de aspas ao lado do texto de{" "}
              <code>children</code>, com a cor do ícone controlada por <code>colorScheme</code>. A
              largura do bloco pode ser limitada via <code>width</code> (percentual).
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para uma citação com ênfase visual em cor. Para citação com atribuição de autor
                e ícone de livro, veja <code>Citation</code>; para um cartão neutro com sombra, veja{" "}
                <code>QuoteText</code>.
              </p>
            </Callout>
            <Callout variant="tip" label="Prop renomeada nesta migração">
              <p>
                Em <code>curso-template</code> a prop se chamava <code>type</code>. Renomeada para{" "}
                <code>colorScheme</code> — o mesmo padrão já usado em <code>ButtonLink</code> e{" "}
                <code>Citation</code> para props que só trocam cor, reservando <code>variant</code>{" "}
                para mudanças estruturais.
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
                  Preview · Quotes / blue
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <QuotesPreview colorScheme="blue">
                  A educação não transforma o mundo. Educação muda as pessoas. Pessoas mudam o mundo.
                </QuotesPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Quotes /&gt;</span> — props: colorScheme, width, children
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
                    <td>Texto da citação</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>colorScheme</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>&quot;blue&quot; | &quot;green&quot; | &quot;orange&quot; | &quot;pink&quot;</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;blue&quot;</span></td>
                    <td>Cor do ícone de aspas</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>width</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>100</span></td>
                    <td>Largura do bloco em porcentagem</td>
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
              raw={`import { Quotes } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Quotes colorScheme="green">\n      Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.\n    </Quotes>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Quotes</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Quotes</span>{" "}
                <span className="tok-attr">colorScheme</span>=<span className="tok-str">&quot;green&quot;</span>&gt;{"\n"}
                {"      "}Se a educação sozinha não transforma a sociedade...{"\n"}
                {"    "}&lt;/<span className="tok-tag">Quotes</span>&gt;{"\n"}
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
            <div className="grid grid-cols-3 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#4E9236" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">green</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <QuotesPreview colorScheme="green" small>
                    Ensinar não é transmitir, é construir.
                  </QuotesPreview>
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#EC803D" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">orange</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <QuotesPreview colorScheme="orange" small>
                    Não há saber mais ou saber menos.
                  </QuotesPreview>
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#C6469C" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">pink</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <QuotesPreview colorScheme="pink" small>
                    Há saberes diferentes.
                  </QuotesPreview>
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">O ícone de aspas é decorativo (<code>aria-hidden</code>).</li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/questionreflect", label: "Anterior", title: "QuestionReflect" }}
            next={{ href: "/docs/components/referencemodal", label: "Próximo", title: "ReferenceModal" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/quotes" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~2 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function QuotesPreview({
  children,
  colorScheme,
  small = false,
}: {
  children: React.ReactNode;
  colorScheme: "blue" | "green" | "orange" | "pink";
  small?: boolean;
}) {
  const iconSrc = `/quotes/quotes${colorScheme[0].toUpperCase()}${colorScheme.slice(1)}.svg`;
  return (
    <div className="flex items-start gap-4" style={{ maxWidth: small ? 260 : 480 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconSrc} alt="" aria-hidden="true" style={{ width: small ? 44 : 60 }} />
      <div style={{ fontSize: small ? 14 : 18, textAlign: "left" }}>{children}</div>
    </div>
  );
}
