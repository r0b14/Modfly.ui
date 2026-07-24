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

export default function LearningBlockPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Organismos · Referência</div>
          <h1 className="doc-title">
            LearningBlock<i>.</i>
          </h1>
          <p className="doc-lead">
            Bloco de destaque com 10 variantes visuais diferentes — de faixas decorativas com SVG
            no topo/base a bordas ilustradas — para reflexões, dicas e sínteses ao longo do curso.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>organismo</b></div>
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
              A prop <code>variant</code> (1 a 10) seleciona um conjunto de assets e cores
              inteiramente diferente — algumas variantes usam SVGs decorativos no topo e na base
              (1-7), outras usam apenas uma borda ilustrada com <code>border-image</code> (8, 9,
              10), cada uma com um propósito editorial fixo (ex.: variante 5 é &quot;Para
              refletir&quot;, variante 8 é &quot;Fica a dica&quot;).
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Escolha a variante pelo propósito editorial do bloco, não só pela cor. Consulte o
                Storybook para ver as 10 variantes lado a lado antes de decidir.
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
                  Preview · LearningBlock / variant 1
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  organismo
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <LearningBlockPreview bg="#BDDEA1">
                  Bloco de destaque com fundo verde e faixas decorativas no topo e na base.
                </LearningBlockPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;LearningBlock /&gt;</span> — props: variant, children
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
                    <td>Conteúdo do bloco</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>variant</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>1 a 10</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>1</span></td>
                    <td>Seleciona o conjunto de assets/cores e o propósito editorial do bloco</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>maxWidth</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string | number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Largura máxima do bloco (só aplicada nas variantes 1-7)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>borderColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#4A90E2&quot;</span></td>
                    <td>Não utilizada na implementação atual (prop reservada)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="warn" label="Variante inválida retorna null">
              <p>
                Se <code>variant</code> não corresponder a nenhum dos 10 casos tratados, o
                componente retorna <code>null</code> silenciosamente — confira sempre o valor
                antes de publicar.
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
              raw={`import { LearningBlock } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <LearningBlock variant={5}>\n      Como você aplicaria esse conceito no seu dia a dia?\n    </LearningBlock>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">LearningBlock</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">LearningBlock</span>{" "}
                <span className="tok-attr">variant</span>={"{"}<span className="tok-num">5</span>{"}"}&gt;{"\n"}
                {"      "}Como você aplicaria esse conceito no seu dia a dia?{"\n"}
                {"    "}&lt;/<span className="tok-tag">LearningBlock</span>&gt;{"\n"}
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
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">variant 1</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <LearningBlockPreview bg="#BDDEA1" small>Bloco de destaque padrão.</LearningBlockPreview>
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">variant 5 · reflexão</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <LearningBlockPreview bg="#FFF5D4" small>Pergunta de reflexão.</LearningBlockPreview>
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">variant 8 · dica</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <div style={{ border: "3px solid #2A6B13", borderRadius: 8, padding: 12, fontSize: 12, color: "#333", maxWidth: 160 }}>
                    <strong style={{ color: "#2A6B13" }}>Fica a dica:</strong> conteúdo sem faixas decorativas.
                  </div>
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                Os SVGs de topo/base têm <code>preserveAspectRatio=&quot;none&quot;</code> e são
                puramente decorativos.
              </li>
              <li className="prose-li">
                Garanta contraste do texto sobre o <code>bgColor</code> de cada variante,
                especialmente nas mais claras (5, 6, 7).
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/historytopics", label: "Anterior", title: "HistoryTopics" }}
            next={{ href: "/docs/components/questionoptionheader", label: "Próximo", title: "QuestionOptionHeader" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/organisms/learningBlock" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function LearningBlockPreview({
  bg,
  children,
  small = false,
}: {
  bg: string;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <div style={{ width: small ? 200 : 320 }}>
      <div style={{ height: 14, background: "linear-gradient(180deg, rgba(0,0,0,0.15), transparent)", borderRadius: "12px 12px 0 0" }} />
      <div style={{ background: bg, padding: "16px 18px" }}>
        <p style={{ margin: 0, fontSize: 13, color: "#333", lineHeight: 1.55 }}>{children}</p>
      </div>
      <div style={{ height: 14, background: "linear-gradient(0deg, rgba(0,0,0,0.15), transparent)", borderRadius: "0 0 12px 12px" }} />
    </div>
  );
}
