import type { ReactNode } from "react";
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

export default function MinibannerPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Templates · Referência</div>
          <h1 className="doc-title">
            Minibanner<i>.</i>
          </h1>
          <p className="doc-lead">
            Faixa curta com ilustração de fundo por variante, usada para rotular seções como
            leitura, fixação, tarefa ou avaliação dentro de uma aula.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>template</b></div>
            <div className="doc-meta-item">Props <b>7</b></div>
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
              O <code>Minibanner</code> renderiza uma faixa com uma ilustração de fundo escolhida
              por <code>variant</code> (mais de 30 opções — leitura, tarefa, fixação, avaliação,
              referências, entre outras) e um rótulo curto em <code>children</code>. A altura se
              ajusta automaticamente por variante e por breakpoint (mobile/tablet), mas pode ser
              sobrescrita via <code>height</code>/<code>mobileHeight</code>/<code>tabletHeight</code>.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para sinalizar o início de uma seção recorrente da aula (leitura, atividade,
                fixação). Para um bloco de destaque maior com texto livre, veja{" "}
                <code>LearningBlock</code>.
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
                  Preview · Minibanner / leitura
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  template
                </span>
              </div>
              <div className="p-10 bg-white">
                <MinibannerPreview gradient="linear-gradient(120deg, #F4B183, #E67E22)">
                  Leitura complementar
                </MinibannerPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Minibanner /&gt;</span> — props: variant, children
              </div>
            </div>
            <Callout variant="warn" label="Preview aproximado">
              <p>
                O fundo real vem de um asset SVG/PNG específico por <code>variant</code>
                (mais de 30 ilustrações). O preview acima usa um gradiente de cor equivalente
                para representar a faixa sem carregar os 38 assets originais — confira o visual
                exato de cada variante no Storybook.
              </p>
            </Callout>
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
                    <td>Rótulo curto exibido sobre a ilustração</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>variant</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string (35 opções)</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;ii&quot;</span></td>
                    <td>Escolhe a ilustração de fundo — ex.: <code>leitura</code>, <code>tarefa</code>, <code>fixacaoVerde</code>, <code>referencias</code>, <code>autoavaliacao</code></td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>fontColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#FFFFFF&quot;</span></td>
                    <td>Cor do texto do rótulo</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>width</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;fit-content&quot;</span></td>
                    <td>Largura da faixa</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>height</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>por variante</span></td>
                    <td>Sobrescreve a altura calculada automaticamente</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>mobileWidth / mobileHeight</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Sobrescreve largura/altura abaixo de 660px</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>tabletHeight</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Sobrescreve altura entre 661px e 1024px</td>
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
              filename="Aula01.tsx"
              raw={`import { Minibanner } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Minibanner variant='leitura'>\n      Leitura complementar\n    </Minibanner>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Minibanner</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Minibanner</span>{" "}
                <span className="tok-attr">variant</span>={"{"}<span className="tok-str">&apos;leitura&apos;</span>{"}"}&gt;{"\n"}
                {"      "}Leitura complementar{"\n"}
                {"    "}&lt;/<span className="tok-tag">Minibanner</span>{"&gt;"}{"\n"}
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
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">fixacaoLaranja2</span>
                </div>
                <div className="p-6 bg-white">
                  <MinibannerPreview gradient="linear-gradient(120deg, #F5A85B, #E67E22)">Fixação</MinibannerPreview>
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">referencias</span>
                </div>
                <div className="p-6 bg-white">
                  <MinibannerPreview gradient="linear-gradient(120deg, #6CA3E8, #285C93)">Referências</MinibannerPreview>
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">A ilustração de fundo é decorativa (<code>aria-hidden</code>) — o rótulo em <code>children</code> é o único conteúdo textual real.</li>
              <li className="prose-li">Ao customizar <code>fontColor</code>, garanta contraste contra a ilustração escolhida, que muda de cor por variante.</li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/textwithimagebox", label: "Anterior", title: "TextWithImageBox" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/templates/minibanner" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function MinibannerPreview({ gradient, children }: { gradient: string; children: ReactNode }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 70,
        padding: "0 28px 0 40px",
        borderRadius: "0 12px 12px 0",
        background: gradient,
      }}
    >
      <h5 style={{ margin: 0, color: "#fff", fontWeight: 600 }}>{children}</h5>
    </div>
  );
}
