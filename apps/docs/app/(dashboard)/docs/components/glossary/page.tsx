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

export default function GlossaryPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Templates · Referência</div>
          <h1 className="doc-title">
            Glossary<i>.</i>
          </h1>
          <p className="doc-lead">
            Palavra com sublinhado pontilhado que revela uma definição em um popover ao passar o
            mouse, tocar ou clicar — posicionado automaticamente acima ou abaixo conforme o
            espaço disponível.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>template</b></div>
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
              O <code>Glossary</code> é pensado para uso inline, no meio de um parágrafo: envolve
              a palavra (<code>word</code>) e mostra a <code>definition</code> num popover ao
              interagir. A posição do popover (acima ou abaixo) é calculada a partir da posição
              do clique/toque na tela.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para termos técnicos que merecem uma explicação rápida sem interromper a
                leitura do texto corrido.
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
                  Preview · Glossary / inline
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  template
                </span>
              </div>
              <div className="p-10 bg-white">
                <p style={{ fontSize: 14, color: "#333", lineHeight: 1.7 }}>
                  A abordagem trabalha o conceito de{" "}
                  <GlossaryPreview word="Justiça Restaurativa" definition="Abordagem de resolução de conflitos focada em reparar o dano causado às pessoas e relacionamentos." />{" "}
                  como alternativa ao modelo puramente punitivo.
                </p>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Glossary /&gt;</span> — props: word, definition, hasBoldTitle
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>word</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Termo exibido inline, com sublinhado pontilhado</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>definition</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Conteúdo do popover</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>hasBoldTitle</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>false</span></td>
                    <td>Repete <code>word</code> em negrito/maiúsculo no topo do popover</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>className</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;&quot;</span></td>
                    <td>Classes extras no <code>&lt;span&gt;</code> raiz</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="warn" label="Fecha ao clicar em qualquer lugar">
              <p>
                O popover fecha com um listener global de <code>click</code> na window — se você
                colocar um <code>Glossary</code> dentro de um modal ou overlay próprio, confirme
                que o comportamento de fechar continua correto.
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
              raw={`import { Glossary } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <p>\n      O conceito de{' '}\n      <Glossary\n        word="Justiça Restaurativa"\n        definition="Abordagem focada em reparar o dano causado."\n      />{' '}\n      é central neste módulo.\n    </p>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Glossary</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;p&gt;{"\n"}
                {"      "}O conceito de{"\n"}
                {"      "}&lt;<span className="tok-tag">Glossary</span>{"\n"}
                {"        "}<span className="tok-attr">word</span>=<span className="tok-str">&quot;Justiça Restaurativa&quot;</span>{"\n"}
                {"        "}<span className="tok-attr">definition</span>=<span className="tok-str">&quot;Abordagem focada em reparar o dano causado.&quot;</span>{"\n"}
                {"      "}/&gt;{"\n"}
                {"      "}é central neste módulo.{"\n"}
                {"    "}&lt;/p&gt;{"\n"}
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
            <p className="doc-p">Com <code>hasBoldTitle</code>, o termo é repetido em destaque:</p>
            <div className="my-7">
              <p style={{ fontSize: 14, color: "#333" }}>
                Veja também{" "}
                <GlossaryPreview word="Mediação" definition="Facilitação de diálogo entre partes em conflito, por um terceiro neutro." boldTitle />.
              </p>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O popover usa <code>pointerEvents: &apos;none&apos;</code> e não é focável por
                teclado — hoje só é acionado por mouse/toque. Vale reportar suporte a teclado
                (foco + Enter) como melhoria futura.
              </li>
              <li className="prose-li">
                Ative em telas pequenas com toque; confirme se o texto do popover permanece
                legível dentro da largura de 64/80 (mobile/desktop).
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/unitybanner", label: "Anterior", title: "UnityBanner" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/templates/glossary" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function GlossaryPreview({
  word,
  definition,
  boldTitle = false,
}: {
  word: string;
  definition: string;
  boldTitle?: boolean;
}) {
  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ borderBottom: "3px dotted #285C93", fontWeight: 500, cursor: "pointer" }}>{word}</span>
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "100%",
          transform: "translateX(-50%)",
          marginTop: 10,
          background: "#F2F2F2",
          color: "#333",
          padding: "12px 16px",
          borderRadius: 10,
          width: 220,
          fontSize: 12.5,
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          zIndex: 1,
          display: "block",
        }}
      >
        {boldTitle && (
          <span style={{ display: "block", fontWeight: 700, textTransform: "uppercase", marginBottom: 6, borderBottom: "1px solid #ccc", paddingBottom: 4, fontSize: 11 }}>
            {word}
          </span>
        )}
        {definition}
      </span>
    </span>
  );
}
