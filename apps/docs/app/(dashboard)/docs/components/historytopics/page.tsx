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

export default function HistoryTopicsPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Organismos · Referência</div>
          <h1 className="doc-title">
            HistoryTopics<i>.</i>
          </h1>
          <p className="doc-lead">
            Estrutura fixa de três &quot;gerações&quot; conectadas por uma linha vertical, cada
            uma com um resumo curto e um detalhe complementar em destaque.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>organismo</b></div>
            <div className="doc-meta-item">Props <b>8</b></div>
            <div className="doc-meta-item">Status <b style={{ color: "var(--yellow)" }}>revisar naming</b></div>
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
              Diferente de <code>TimelineWithCards</code> (que aceita um array arbitrário de
              marcos), <code>HistoryTopics</code> tem uma estrutura fixa de três gerações + uma
              conclusão, cada trecho recebido como uma prop de texto separada.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use apenas para o caso específico de &quot;três gerações + conclusão&quot; que o
                componente foi desenhado para atender. Para uma cronologia genérica com qualquer
                número de marcos, use <code>TimelineWithCards</code>.
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
                  Preview · HistoryTopics / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  organismo
                </span>
              </div>
              <div className="p-10 bg-white">
                <HistoryTopicsPreview />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;HistoryTopics /&gt;</span> — props: text1, text11, text2, text22, text3, text33, text333
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>text1</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Continuação de &quot;A primeira geração,&quot; (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>text11</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Detalhe complementar da primeira geração (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>text2 / text22</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Mesmo padrão, para a segunda geração (obrigatórias)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>text3 / text33</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Mesmo padrão, para a terceira geração (obrigatórias)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>text333</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Bloco de conclusão, fora da linha vertical (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>lineColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#6CA3E8&quot;</span></td>
                    <td>Cor da linha vertical e das linhas horizontais tracejadas</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="warn" label="Nomes de prop pouco descritivos">
              <p>
                <code>text1</code>/<code>text11</code>, <code>text2</code>/<code>text22</code>,{" "}
                <code>text3</code>/<code>text33</code>/<code>text333</code> não comunicam o que
                cada uma representa — só a posição no componente explica. Nomes como{" "}
                <code>gen1Summary</code>/<code>gen1Detail</code> comunicariam melhor a mesma
                estrutura. Fica como nota para uma revisão futura de naming, sem alterar a API
                agora (mudança quebraria todo uso existente).
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
              raw={`import { HistoryTopics } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <HistoryTopics\n      text1="surgiu após a Segunda Guerra Mundial."\n      text11="Trouxe os direitos civis e políticos."\n      text2="ampliou o debate para direitos sociais."\n      text22="Incluiu educação, saúde e trabalho."\n      text3="trouxe os direitos difusos e coletivos."\n      text33="Meio ambiente e consumidor, por exemplo."\n      text333="As três gerações convivem hoje."\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">HistoryTopics</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">HistoryTopics</span>{"\n"}
                {"      "}<span className="tok-attr">text1</span>=<span className="tok-str">&quot;...&quot;</span>{" "}
                <span className="tok-attr">text11</span>=<span className="tok-str">&quot;...&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">text2</span>=<span className="tok-str">&quot;...&quot;</span>{" "}
                <span className="tok-attr">text22</span>=<span className="tok-str">&quot;...&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">text3</span>=<span className="tok-str">&quot;...&quot;</span>{" "}
                <span className="tok-attr">text33</span>=<span className="tok-str">&quot;...&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">text333</span>=<span className="tok-str">&quot;...&quot;</span>{"\n"}
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
            <p className="doc-p">
              O componente não tem variantes visuais além de <code>lineColor</code> — sua
              estrutura é fixa por design.
            </p>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">Os ícones de geração são decorativos.</li>
              <li className="prose-li">
                Todo o conteúdo é texto simples renderizado diretamente — sem HTML injetado,
                diferente de outros organismos da lib.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/timelinewithcards", label: "Anterior", title: "TimelineWithCards" }}
            next={{ href: "/docs/components/learningblock", label: "Próximo", title: "LearningBlock" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/organisms/historyTopics" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function HistoryTopicsPreview() {
  const gens = [
    { label: "A primeira geração,", text: "surgiu após a Segunda Guerra Mundial." },
    { label: "A segunda geração,", text: "ampliou o debate para direitos sociais." },
    { label: "A terceira geração,", text: "trouxe os direitos difusos e coletivos." },
  ];
  return (
    <div style={{ maxWidth: 480, borderLeft: "3px dashed #6CA3E8", paddingLeft: 16 }}>
      {gens.map((g, i) => (
        <p key={i} style={{ fontSize: 13, color: "#333", marginBottom: 12 }}>
          <strong style={{ color: "#285C93" }}>{g.label}</strong> {g.text}
        </p>
      ))}
      <p style={{ fontSize: 13, color: "#444", fontStyle: "italic" }}>
        Hoje, as três gerações convivem e se complementam.
      </p>
    </div>
  );
}
