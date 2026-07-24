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

export default function ButtonReferencePage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Átomos · Referência</div>
          <h1 className="doc-title">
            ButtonReference<i>.</i>
          </h1>
          <p className="doc-lead">
            Botão de alternância (&quot;Ver mais&quot; / &quot;Ver menos&quot;) com ícone de mais/menos —
            usado para expandir ou recolher uma lista de referências bibliográficas.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>átomo</b></div>
            <div className="doc-meta-item">Props <b>2</b></div>
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
              O <code>ButtonReference</code> é um componente controlado: o estado de aberto/fechado
              vive no componente pai (<code>isOpen</code>), e o clique dispara <code>onToggle</code>{" "}
              para o pai decidir a próxima transição. O rótulo e o ícone (+ / −) trocam automaticamente
              conforme <code>isOpen</code>.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para expandir/recolher uma lista de referências bibliográficas ou qualquer bloco de
                conteúdo secundário no fim de uma seção.
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
                  Preview · ButtonReference / estados
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="p-10 bg-white flex flex-wrap items-center gap-8 justify-center">
                <ButtonReferencePreview isOpen={false} />
                <ButtonReferencePreview isOpen={true} />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;ButtonReference /&gt;</span> — props: isOpen, onToggle
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>isOpen</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Estado atual: mostra &quot;Ver menos&quot; + ícone de menos quando <code>true</code></td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>onToggle</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>{"() => void"}</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Chamado ao clicar — o pai decide a próxima transição de <code>isOpen</code></td>
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
              filename="Referencias.tsx"
              raw={`import { ButtonReference } from '@modfly/ui'\nimport { useState } from 'react'\n\nexport function Referencias() {\n  const [isOpen, setIsOpen] = useState(false)\n  return (\n    <ButtonReference isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">ButtonReference</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n"}
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">useState</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;react&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Referencias</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">const</span> [isOpen, setIsOpen] = <span className="tok-fn">useState</span>(<span className="tok-key">false</span>){"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">ButtonReference</span>{" "}
                <span className="tok-attr">isOpen</span>={"{"}isOpen{"}"}{" "}
                <span className="tok-attr">onToggle</span>={"{"}() =&gt; setIsOpen(!isOpen){"}"} /&gt;{"\n"}
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
              O componente não tem variantes de cor — só os dois estados (aberto/fechado) já
              mostrados no preview acima.
            </p>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O ícone de +/− é decorativo (<code>aria-hidden</code>) — o rótulo textual
                (&quot;Ver mais&quot;/&quot;Ver menos&quot;) já comunica a ação.
              </li>
              <li className="prose-li">
                O componente renderiza um <code>&lt;button&gt;</code> nativo, navegável por teclado
                sem configuração extra.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/imagefallback", label: "Anterior", title: "ImageFallback" }}
            next={{ href: "/docs/components/exclamation", label: "Próximo", title: "Exclamation" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/atoms/buttonReference" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~2 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function ButtonReferencePreview({ isOpen }: { isOpen: boolean }) {
  return (
    <button
      className="flex items-center justify-center cursor-pointer shadow-md text-[16px] text-[#111] bg-[#FFAB00] py-2.5 px-6 rounded-[20px]"
      type="button"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={isOpen ? "/buttonreference/minus.png" : "/buttonreference/plus.png"}
        alt=""
        aria-hidden="true"
        className="mr-2 ml-[-4px] w-5"
      />
      {isOpen ? "Ver menos" : "Ver mais"}
    </button>
  );
}
