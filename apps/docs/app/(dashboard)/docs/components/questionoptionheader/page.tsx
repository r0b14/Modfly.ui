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

export default function QuestionOptionHeaderPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Organismos · Referência</div>
          <h1 className="doc-title">
            QuestionOptionHeader<i>.</i>
          </h1>
          <p className="doc-lead">
            Cabeçalho estático de uma questão de múltipla escolha: número opcional, enunciado em
            parágrafos e a grade de alternativas em destaque.
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
              O <code>QuestionOptionHeader</code> renderiza a parte visual e estática de uma
              questão de múltipla escolha: um número opcional (<code>questionNumber</code>), o
              enunciado (<code>text</code>) em um ou mais parágrafos, e as alternativas
              (<code>answersContent</code>) exibidas como cartões em uma grade responsiva.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para exibir o cabeçalho de uma questão dentro de um fluxo editorial estático
                (ex.: material de apoio, revisão, impressão). O componente não trata seleção de
                resposta, avaliação ou envio — é puramente apresentacional.
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
                  Preview · QuestionOptionHeader / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  organismo
                </span>
              </div>
              <div className="p-10 bg-white">
                <QuestionOptionHeaderPreview
                  questionNumber={1}
                  text={["Qual das alternativas abaixo representa corretamente o conceito discutido na aula?"]}
                  answersContent={["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"]}
                  groupIndex={1}
                />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;QuestionOptionHeader /&gt;</span> — props: questionNumber, text, answersContent, groupIndex
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>questionNumber</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Número exibido como &quot;Questão N&quot;. Omitido, o título não é renderizado</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>text</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string[]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Enunciado da questão, um parágrafo por item</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>answersContent</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string[]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Texto de cada alternativa, exibida como cartão na grade</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>groupIndex</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Identificador do grupo, usado para gerar chaves únicas entre múltiplas questões na mesma página</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="warn" label="Sem interatividade">
              <p>
                As alternativas são exibidas como cartões estáticos — o componente não controla
                seleção, destaque de resposta correta/incorreta nem envio. Esse comportamento
                pertence à camada de aplicação, não à biblioteca.
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
              raw={`import { QuestionOptionHeader } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <QuestionOptionHeader\n      questionNumber={1}\n      text={['Qual das alternativas está correta?']}\n      answersContent={['Alternativa A', 'Alternativa B']}\n      groupIndex={1}\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">QuestionOptionHeader</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">QuestionOptionHeader</span>{"\n"}
                {"      "}<span className="tok-attr">questionNumber</span>={"{1}"}{"\n"}
                {"      "}<span className="tok-attr">text</span>={"{["}<span className="tok-str">&apos;Qual das alternativas está correta?&apos;</span>{"]}"}{"\n"}
                {"      "}<span className="tok-attr">answersContent</span>={"{["}<span className="tok-str">&apos;Alternativa A&apos;</span>, <span className="tok-str">&apos;Alternativa B&apos;</span>{"]}"}{"\n"}
                {"      "}<span className="tok-attr">groupIndex</span>={"{1}"}{"\n"}
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
            <p className="doc-p">Sem <code>questionNumber</code> (título omitido):</p>
            <div className="my-7">
              <QuestionOptionHeaderPreview
                text={["Enunciado sem numeração visível, usado quando o número já aparece em outro lugar da página."]}
                answersContent={["Verdadeiro", "Falso"]}
                groupIndex={2}
              />
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">O título &quot;Questão N&quot; usa <code>h2</code>, mantendo a hierarquia de cabeçalhos do documento.</li>
              <li className="prose-li">Cada alternativa é um elemento de texto simples — se a aplicação adicionar seleção, deve também adicionar semântica de <code>role=&quot;radio&quot;</code>/<code>aria-checked</code> por conta própria.</li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/learningblock", label: "Anterior", title: "LearningBlock" }}
            next={{ href: "/docs/components/carousel", label: "Próximo", title: "Carousel" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/organisms/questionOptionHeader" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function QuestionOptionHeaderPreview({
  questionNumber,
  text,
  answersContent,
  groupIndex,
}: {
  questionNumber?: number;
  text: string[];
  answersContent: string[];
  groupIndex: number;
}) {
  return (
    <div style={{ maxWidth: 560 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 20 }}>
        {questionNumber !== undefined && (
          <h2 style={{ margin: 0, color: "#513a56", fontSize: 22, fontWeight: 600 }}>
            Questão {questionNumber}
          </h2>
        )}
        <div>
          {text.map((paragraph, i) => (
            <p key={i} style={{ margin: 0, color: "#000" }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 16,
          marginTop: 20,
        }}
      >
        {answersContent.map((answer, i) => (
          <p
            key={`option${groupIndex}${i + 1}`}
            style={{
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "20px 12px",
              background: "#fff",
              border: "1px solid #6F310E",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            {answer}
          </p>
        ))}
      </div>
    </div>
  );
}
