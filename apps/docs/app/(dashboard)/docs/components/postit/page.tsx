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

export default function PostitPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Átomos · Referência</div>
          <h1 className="doc-title">
            Postit<i>.</i>
          </h1>
          <p className="doc-lead">
            Bloco de destaque estilizado como um post-it — corpo azul com dobra decorativa no
            topo e no rodapé — para observações e avisos que precisam se destacar do texto corrido.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>átomo</b></div>
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
              O <code>Postit</code> recebe qualquer conteúdo via <code>children</code> e o envolve num
              cartão azul com dimensões fixas (383×397px), decorado por duas imagens de dobra de papel
              — uma no topo, outra sobreposta no rodapé.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para uma observação, dica ou aviso que precisa chamar atenção visualmente.
                Para blocos de aprendizagem mais estruturados, use <code>LearningBlock</code>.
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
                  Preview · Postit / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <PostitPreview>
                  Não esqueça de revisar o conteúdo da aula anterior antes de continuar!
                </PostitPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Postit /&gt;</span> — props: children, style, className
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
                    <td>Conteúdo exibido dentro do corpo azul (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>style</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>CSSProperties</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Estilos inline mesclados ao wrapper externo</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>className</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Classes Tailwind extras aplicadas ao wrapper externo</td>
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
              raw={`import { Postit } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Postit>\n      Não esqueça de revisar o conteúdo da aula anterior!\n    </Postit>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Postit</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Postit</span>&gt;{"\n"}
                {"      "}Não esqueça de revisar o conteúdo da aula anterior!{"\n"}
                {"    "}&lt;/<span className="tok-tag">Postit</span>&gt;{"\n"}
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
              O <code>Postit</code> tem uma única aparência visual — a variação vem do conteúdo
              passado via <code>children</code>, que pode incluir listas, negrito ou links:
            </p>
            <div className="my-7 border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
              <div className="p-8 bg-white flex justify-center">
                <PostitPreview>
                  <strong>Dica:</strong> revise os três primeiros módulos antes da avaliação final.
                </PostitPreview>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                As imagens de dobra (topo/rodapé) têm <code>alt</code> descritivo, mas são puramente
                decorativas — considere que leitores de tela vão anunciá-las.
              </li>
              <li className="prose-li">
                O texto branco sobre fundo azul (<code>#285C93</code>) já tem contraste adequado
                (WCAG AA) para a maioria dos tamanhos de fonte usados.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/tooltip", label: "Anterior", title: "Tooltip" }}
            next={{ href: "/docs/components/check", label: "Próximo", title: "Check" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>16 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/atoms/postit" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~2 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

/* ── Recriação visual do componente Postit (usa os PNGs reais copiados para /public) ── */
function PostitPreview({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col items-stretch mx-auto" style={{ width: 280, minHeight: 290 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/postit-top.png" alt="" className="w-full block" />
      <div className="w-full relative box-border flex-1 flex flex-col" style={{ background: "#285C93", minHeight: 248, fontSize: 15 }}>
        <div className="w-full text-left pt-6 px-6 pb-7 flex-1 text-white">
          {children}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/postit-bottom.png" alt="" className="absolute right-0 z-[3]" style={{ bottom: -1, width: 90 }} />
      </div>
    </div>
  );
}
