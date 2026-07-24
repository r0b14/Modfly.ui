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

export default function CaseStudyPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            CaseStudy<i>.</i>
          </h1>
          <p className="doc-lead">
            Cartão de estudo de caso com faixa de topo ilustrada (ícone + título) e um corpo com
            fundo próprio para o conteúdo — pensado para blocos de leitura mais longos e
            autocontidos.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
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
              O <code>CaseStudy</code> não embute nenhum asset próprio — quem usa decide as
              imagens de fundo do topo e da base via <code>topBgImg</code>/<code>bottomBgImg</code>{" "}
              (URLs) e o ícone via <code>iconImg</code>. Isso deixa o componente livre para se
              adaptar a qualquer tema visual de curso.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para apresentar um caso, exemplo real ou cenário mais extenso, com uma faixa
                de identificação no topo e um corpo de leitura abaixo.
              </p>
            </Callout>
            <Callout variant="tip" label="Renomeado nesta migração">
              <p>
                Em <code>curso-template</code> este componente se chamava <code>EstudyCase</code> —
                corrigido para <code>CaseStudy</code> (nome em inglês correto) na primeira
                publicação em <code>@modfly/ui</code>.
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
                  Preview · CaseStudy / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white">
                <CaseStudyPreview />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;CaseStudy /&gt;</span> — props: topBgImg, iconImg, title, bottomBgImg
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>topBgImg</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>URL da imagem de fundo da faixa de topo</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>iconImg</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>URL do ícone exibido ao lado do título</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>title</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Título exibido sobre a faixa de topo</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>bottomBgImg</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>URL da imagem de fundo do corpo do card</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>bottomBgWidth / bottomBgHeight</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string | number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Dimensões explícitas do corpo, quando necessário</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>children</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Conteúdo do corpo, sobre um overlay branco semitransparente</td>
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
              raw={`import { CaseStudy } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <CaseStudy\n      title="Estudo de Caso 1"\n      topBgImg="/img/topo.png"\n      iconImg="/img/icone.png"\n      bottomBgImg="/img/fundo.png"\n    >\n      <p>Este é um exemplo de estudo de caso com conteúdo rico dentro.</p>\n    </CaseStudy>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">CaseStudy</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">CaseStudy</span>{"\n"}
                {"      "}<span className="tok-attr">title</span>=<span className="tok-str">&quot;Estudo de Caso 1&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">topBgImg</span>=<span className="tok-str">&quot;/img/topo.png&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">iconImg</span>=<span className="tok-str">&quot;/img/icone.png&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">bottomBgImg</span>=<span className="tok-str">&quot;/img/fundo.png&quot;</span>{"\n"}
                {"    "}&gt;{"\n"}
                {"      "}&lt;p&gt;Este é um exemplo de estudo de caso...&lt;/p&gt;{"\n"}
                {"    "}&lt;/<span className="tok-tag">CaseStudy</span>&gt;{"\n"}
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
              Sem variantes fixas — a aparência muda inteiramente pelas imagens passadas em{" "}
              <code>topBgImg</code>/<code>iconImg</code>/<code>bottomBgImg</code>, então cada curso
              pode ter sua própria identidade visual sem alterar o componente.
            </p>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O <code>iconImg</code> usa um <code>alt=&quot;Ícone&quot;</code> fixo — se o ícone
                carregar significado próprio por caso, considere permitir um <code>alt</code>{" "}
                customizável numa revisão futura.
              </li>
              <li className="prose-li">
                As imagens de fundo (topo/base) são puramente decorativas, aplicadas via CSS.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/imagelist", label: "Anterior", title: "ImageList" }}
            next={{ href: "/docs/components/questionreflect", label: "Próximo", title: "QuestionReflect" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/caseStudy" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function CaseStudyPreview() {
  return (
    <div className="w-full rounded-lg overflow-hidden" style={{ maxWidth: 520 }}>
      <div
        className="relative h-[80px] flex items-center"
        style={{ background: "linear-gradient(120deg, #3374C0, #285C93)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://via.placeholder.com/56" alt="" aria-hidden="true" className="h-10 w-10 ml-6 rounded" />
        <h5 className="ml-4 text-white text-lg font-bold" style={{ margin: 0 }}>Estudo de Caso 1</h5>
      </div>
      <div className="relative p-6" style={{ background: "#E1EFFF" }}>
        <div className="relative z-10 text-base" style={{ color: "#2B2B2B" }}>
          <p style={{ margin: 0 }}>Este é um exemplo de estudo de caso com conteúdo rico dentro.</p>
          <ul className="list-disc pl-5 mt-3" style={{ margin: 0 }}>
            <li>Fato 1 do caso</li>
            <li>Fato 2 do caso</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
