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

export default function ListModulePage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            ListModule<i>.</i>
          </h1>
          <p className="doc-lead">
            Lista com borda esquerda colorida e título/subtítulo opcionais — usada para resumir o
            conteúdo de um módulo antes de começar.
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
              O <code>ListModule</code> renderiza um título opcional (com subtítulo separado por
              &quot;|&quot;) seguido de uma lista com marcadores circulares e borda esquerda
              colorida, útil como sumário de tópicos de um módulo.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use no início de um módulo para listar os tópicos que serão abordados. Não é
                interativo — para navegação real entre seções, use âncoras/links próprios.
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
                  Preview · ListModule / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white">
                <ListModulePreview
                  title="Módulo 1"
                  subtitle="Introdução aos Conceitos"
                  textList={[
                    "O que é Justiça Restaurativa?",
                    "Histórico e origens.",
                    "Diferença entre Justiça Retributiva e Restaurativa.",
                  ]}
                />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;ListModule /&gt;</span> — props: title, subtitle, textList, borderColor
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>borderColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#0D4490&quot;</span></td>
                    <td>Cor da borda esquerda</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>title</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Título em destaque na cor de <code>borderColor</code></td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>subtitle</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Aparece ao lado do título, separado por &quot;|&quot;</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>textList</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string[]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Itens da lista com marcador circular</td>
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
              raw={`import { ListModule } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <ListModule\n      title="Módulo 1"\n      subtitle="Introdução aos Conceitos"\n      textList={['Tópico A', 'Tópico B']}\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">ListModule</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">ListModule</span>{"\n"}
                {"      "}<span className="tok-attr">title</span>=<span className="tok-str">&quot;Módulo 1&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">subtitle</span>=<span className="tok-str">&quot;Introdução aos Conceitos&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">textList</span>={"{["}<span className="tok-str">&apos;Tópico A&apos;</span>, <span className="tok-str">&apos;Tópico B&apos;</span>{"]}"}{"\n"}
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
            <p className="doc-p">Sem subtítulo, e com outra cor de borda:</p>
            <div className="my-7">
              <ListModulePreview borderColor="#742B0B" title="Módulo 2" textList={["Item único de leitura complementar."]} />
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                A lista usa <code>&lt;ul&gt;</code>/<code>&lt;li&gt;</code> nativos, garantindo
                leitura correta por tecnologia assistiva.
              </li>
              <li className="prose-li">
                Verifique contraste entre <code>borderColor</code> e o fundo do módulo — a borda é
                fina (3.5px) e pode ficar difícil de perceber em cores claras.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/indentcitation", label: "Anterior", title: "IndentCitation" }}
            next={{ href: "/docs/components/minicards", label: "Próximo", title: "MiniCards" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/listModule" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function ListModulePreview({
  borderColor = "#0D4490",
  title,
  subtitle,
  textList,
}: {
  borderColor?: string;
  title?: string;
  subtitle?: string;
  textList: string[];
}) {
  return (
    <div style={{ borderLeft: `3.5px solid ${borderColor}`, paddingLeft: "0.9rem" }}>
      {title && (
        <div style={{ marginBottom: 8 }}>
          <span style={{ fontWeight: 700, color: "#333" }}>
            <span style={{ color: borderColor }}>{title}</span>
            {subtitle && <span> | {subtitle}</span>}
          </span>
        </div>
      )}
      <ul style={{ paddingLeft: 20, color: "#444", margin: 0 }}>
        {textList.map((t, i) => (
          <li key={i} style={{ marginBottom: 6 }}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
