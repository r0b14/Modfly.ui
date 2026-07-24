import { DocCodeBlock } from "@/components/docs/DocCodeBlock";
import { Callout } from "@/components/docs/Callout";
import { Pager } from "@/components/docs/Pager";
import { RightToc } from "@/components/docs/RightToc";
import { ReferenceModalPreview } from "./ReferenceModalPreview";

const TOC_ENTRIES = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "preview", label: "Visualização" },
  { id: "props", label: "Propriedades" },
  { id: "uso", label: "Como usar" },
  { id: "variantes", label: "Variantes" },
  { id: "acessibilidade", label: "Acessibilidade", level: 3 as const },
];

export default function ReferenceModalPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            ReferenceModal<i>.</i>
          </h1>
          <p className="doc-lead">
            Texto clicável que abre um modal simples com a referência bibliográfica completa —
            para citações rápidas sem sair do fluxo de leitura.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
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
              O <code>ReferenceModal</code> renderiza <code>children</code> como um texto sublinhado
              clicável; ao clicar, abre um modal centralizado mostrando <code>reference</code>. O
              estado de aberto/fechado é interno ao componente (não controlado por props).
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para referências bibliográficas pontuais dentro do texto, quando não vale a pena
                interromper a leitura com uma citação completa em bloco.
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
                  Preview · ReferenceModal / clique para abrir
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white relative" style={{ minHeight: 160 }}>
                <div style={{ fontSize: 14, color: "#333" }}>
                  Segundo a pedagogia crítica,{" "}
                  <ReferenceModalPreview
                    reference={
                      <span>
                        <strong>FREIRE, Paulo.</strong> Pedagogia da Autonomia: saberes necessários à
                        prática educativa. São Paulo: Paz e Terra, 1996.
                      </span>
                    }
                  >
                    clique aqui para ver a referência
                  </ReferenceModalPreview>{" "}
                  completa.
                </div>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;ReferenceModal /&gt;</span> — props: children, reference
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
                    <td>Texto clicável (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>reference</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Conteúdo mostrado dentro do modal (obrigatória)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="tip" label="Tipos ajustados nesta migração">
              <p>
                Em <code>curso-template</code>, <code>children</code> e <code>reference</code> eram
                tipados como <code>any</code>. Ajustados para <code>React.ReactNode</code> na
                primeira publicação em <code>@modfly/ui</code>.
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
              raw={`import { ReferenceModal } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <p>\n      Segundo a pedagogia crítica,{' '}\n      <ReferenceModal\n        reference={\n          <span>FREIRE, Paulo. Pedagogia da Autonomia. São Paulo: Paz e Terra, 1996.</span>\n        }\n      >\n        clique aqui para ver a referência\n      </ReferenceModal>.\n    </p>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">ReferenceModal</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;p&gt;{"\n"}
                {"      "}Segundo a pedagogia crítica,{"\n"}
                {"      "}&lt;<span className="tok-tag">ReferenceModal</span>{"\n"}
                {"        "}<span className="tok-attr">reference</span>={"{"}...{"}"}{"\n"}
                {"      "}&gt;{"\n"}
                {"        "}clique aqui para ver a referência{"\n"}
                {"      "}&lt;/<span className="tok-tag">ReferenceModal</span>&gt;.{"\n"}
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
            <p className="doc-p">
              Sem variantes de cor/tamanho — a aparência do gatilho e do modal é fixa; o conteúdo é
              que muda via <code>children</code>/<code>reference</code>.
            </p>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O gatilho é um <code>&lt;span&gt;</code> com <code>onClick</code>, sem role/tabIndex
                de botão — usuários de teclado não conseguem abrir o modal hoje. Vale reportar como
                melhoria futura, no mesmo espírito do que já foi observado em <code>CardFlip</code>.
              </li>
              <li className="prose-li">
                O modal usa <code>position: fixed</code> sem portal (<code>createPortal</code>) —
                funciona isolado, mas pode colidir com o z-index de outro elemento quando usado numa
                página real com outros overlays.
              </li>
              <li className="prose-li">
                Fechar o modal só é possível pelo botão de fechar — não há suporte a tecla Esc nem a
                clique fora do modal.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/quotes", label: "Anterior", title: "Quotes" }}
            next={{ href: "/docs/components/accordion", label: "Próximo", title: "Accordion" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/referenceModal" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~2 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}
