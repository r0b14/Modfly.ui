import { DocCodeBlock } from "@/components/docs/DocCodeBlock";
import { Callout } from "@/components/docs/Callout";
import { Pager } from "@/components/docs/Pager";
import { RightToc } from "@/components/docs/RightToc";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quotes",
  description:
    "Citação com ícone de aspas colorido em duas gerações: o novo design GFD em cinco cores e a versão legada em quatro esquemas de cor.",
  alternates: { canonical: "/docs/components/quotes" },
};

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
            Citação com ícone de aspas colorido, em duas gerações: <strong>Quotes</strong>, com as
            aspas do novo design em cinco cores, e <strong>QuotesLegacy</strong>, a versão anterior
            em quatro esquemas de cor.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
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
              Ambos mostram um ícone de aspas ao lado do texto de <code>children</code>, com a cor
              controlada por <code>colorScheme</code> e a largura do bloco limitável via{" "}
              <code>width</code> (percentual). O novo <code>Quotes</code> usa as aspas do redesign
              (<code>purple</code>, <code>blue</code>, <code>yellow</code>, <code>orange</code>,{" "}
              <code>beige</code>); o <code>QuotesLegacy</code> mantém o desenho e as cores
              anteriores (<code>blue</code>, <code>green</code>, <code>orange</code>, <code>pink</code>).
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Prefira o novo <code>Quotes</code> em módulos novos; use <code>QuotesLegacy</code>{" "}
                para consistência com módulos já publicados. Para citação com atribuição de autor
                e ícone de livro, veja <code>Citation</code>; para um cartão neutro com sombra, veja{" "}
                <code>QuoteText</code>.
              </p>
            </Callout>
            <Callout variant="tip" label="Prop renomeada na migração">
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
            <p className="doc-p">O novo design:</p>
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
                <QuotesNewPreview colorScheme="blue">
                  A educação não transforma o mundo. Educação muda as pessoas. Pessoas mudam o mundo.
                </QuotesNewPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Quotes /&gt;</span> — props: colorScheme, width, children
              </div>
            </div>

            <p className="doc-p">A versão legada:</p>
            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · QuotesLegacy / blue
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <QuotesLegacyPreview colorScheme="blue">
                  A educação não transforma o mundo. Educação muda as pessoas. Pessoas mudam o mundo.
                </QuotesLegacyPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;QuotesLegacy /&gt;</span> — props: colorScheme, width, children
              </div>
            </div>
          </section>

          <section id="props">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#props" aria-hidden="true">#</a>
              <span className="doc-h2-num">03 · API</span>
              Propriedades
            </h2>
            <p className="doc-p">
              As duas versões compartilham a mesma API — muda apenas o conjunto de cores aceito
              em <code>colorScheme</code>:
            </p>
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
                    <td>
                      <span className="mono" style={{ fontSize: "12.5px" }}>
                        Quotes: &quot;purple&quot; | &quot;blue&quot; | &quot;yellow&quot; | &quot;orange&quot; | &quot;beige&quot;
                        <br />
                        QuotesLegacy: &quot;blue&quot; | &quot;green&quot; | &quot;orange&quot; | &quot;pink&quot;
                      </span>
                    </td>
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
              raw={`import { Quotes, QuotesLegacy } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <>\n      <Quotes colorScheme="purple">\n        Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.\n      </Quotes>\n\n      <QuotesLegacy colorScheme="green">\n        Ensinar não é transmitir conhecimento.\n      </QuotesLegacy>\n    </>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Quotes</span>,{" "}
                <span className="tok-tag">QuotesLegacy</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;&gt;{"\n"}
                {"      "}&lt;<span className="tok-tag">Quotes</span>{" "}
                <span className="tok-attr">colorScheme</span>=<span className="tok-str">&quot;purple&quot;</span>&gt;{"\n"}
                {"        "}Se a educação sozinha não transforma a sociedade...{"\n"}
                {"      "}&lt;/<span className="tok-tag">Quotes</span>&gt;{"\n\n"}
                {"      "}&lt;<span className="tok-tag">QuotesLegacy</span>{" "}
                <span className="tok-attr">colorScheme</span>=<span className="tok-str">&quot;green&quot;</span>&gt;{"\n"}
                {"        "}Ensinar não é transmitir conhecimento.{"\n"}
                {"      "}&lt;/<span className="tok-tag">QuotesLegacy</span>&gt;{"\n"}
                {"    "}&lt;/&gt;{"\n"}
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
            <p className="doc-p">As cinco cores do novo design:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-7">
              <QuoteVariantCard label="purple" dot="#6D2B63">
                <QuotesNewPreview colorScheme="purple" small>Educação muda as pessoas.</QuotesNewPreview>
              </QuoteVariantCard>
              <QuoteVariantCard label="blue" dot="#307490">
                <QuotesNewPreview colorScheme="blue" small>Pessoas mudam o mundo.</QuotesNewPreview>
              </QuoteVariantCard>
              <QuoteVariantCard label="yellow" dot="#FEC54F">
                <QuotesNewPreview colorScheme="yellow" small>Ensinar é construir.</QuotesNewPreview>
              </QuoteVariantCard>
              <QuoteVariantCard label="orange" dot="#E16C55">
                <QuotesNewPreview colorScheme="orange" small>Não há saber mais ou menos.</QuotesNewPreview>
              </QuoteVariantCard>
              <QuoteVariantCard label="beige" dot="#E0AF42">
                <QuotesNewPreview colorScheme="beige" small>Há saberes diferentes.</QuotesNewPreview>
              </QuoteVariantCard>
            </div>

            <p className="doc-p">E as cores da versão legada:</p>
            <div className="grid grid-cols-3 gap-5 my-7">
              <QuoteVariantCard label="green" dot="#4E9236">
                <QuotesLegacyPreview colorScheme="green" small>
                  Ensinar não é transmitir, é construir.
                </QuotesLegacyPreview>
              </QuoteVariantCard>
              <QuoteVariantCard label="orange" dot="#EC803D">
                <QuotesLegacyPreview colorScheme="orange" small>
                  Não há saber mais ou saber menos.
                </QuotesLegacyPreview>
              </QuoteVariantCard>
              <QuoteVariantCard label="pink" dot="#C6469C">
                <QuotesLegacyPreview colorScheme="pink" small>
                  Há saberes diferentes.
                </QuotesLegacyPreview>
              </QuoteVariantCard>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">O ícone de aspas é decorativo (<code>aria-hidden</code>) nas duas versões.</li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/questionreflect", label: "Anterior", title: "QuestionReflect" }}
            next={{ href: "/docs/components/referencemodal", label: "Próximo", title: "ReferenceModal" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>25 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/quotes" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

// Os previews usam os mesmos arquivos SVG dos componentes reais (copiados
// para /public/quotes) em vez de redesenhar o visual à mão — evita a prévia
// da doc dessincronizar do visual oficial do pacote.

function QuoteVariantCard({
  label,
  dot,
  children,
}: {
  label: string;
  dot: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
      <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full" style={{ background: dot }} />
        <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">{label}</span>
      </div>
      <div className="p-6 bg-white flex justify-center">{children}</div>
    </div>
  );
}

function QuotesNewPreview({
  children,
  colorScheme,
  small = false,
}: {
  children: React.ReactNode;
  colorScheme: "purple" | "blue" | "yellow" | "orange" | "beige";
  small?: boolean;
}) {
  const iconSrc = `/quotes/quote${colorScheme[0].toUpperCase()}${colorScheme.slice(1)}.svg`;
  return (
    <div className="flex items-start gap-4" style={{ maxWidth: small ? 260 : 480 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconSrc} alt="" aria-hidden="true" style={{ width: small ? 44 : 60 }} />
      <div style={{ fontSize: small ? 14 : 18, textAlign: "left" }}>{children}</div>
    </div>
  );
}

function QuotesLegacyPreview({
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
