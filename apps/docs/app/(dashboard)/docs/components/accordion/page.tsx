import { DocCodeBlock } from "@/components/docs/DocCodeBlock";
import { Callout } from "@/components/docs/Callout";
import { Pager } from "@/components/docs/Pager";
import { RightToc } from "@/components/docs/RightToc";
import { AccordionPCEPreview } from "./AccordionPreview";

const TOC_ENTRIES = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "preview", label: "Visualização" },
  { id: "props", label: "Propriedades" },
  { id: "uso", label: "Como usar" },
  { id: "variantes", label: "Variantes" },
  { id: "acessibilidade", label: "Acessibilidade", level: 3 as const },
];

export default function AccordionPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        {/* Cabeçalho */}
        <header className="doc-head">
          <div className="doc-cat">Organismos · Referência</div>
          <h1 className="doc-title">
            Accordion<i>.</i>
          </h1>
          <p className="doc-lead">
            Componente de revelação progressiva com cabeçalho visual rico.
            Usado em módulos de e-learning para organizar seções de conteúdo
            como "Para saber mais", "Sugestão de resposta" e "Dica de
            aprofundamento" sem sobrecarregar visualmente a página.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">
              Pacote <b>@modfly/ui</b>
            </div>
            <div className="doc-meta-item">
              Categoria <b>organismo</b>
            </div>
            <div className="doc-meta-item">
              Props <b>13</b>
            </div>
            <div className="doc-meta-item">
              Status <b style={{ color: "var(--green)" }}>estável</b>
            </div>
          </div>
        </header>

        <article className="doc-prose">
          {/* 01 — Visão geral */}
          <section id="visao-geral">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#visao-geral" aria-hidden="true">#</a>
              <span className="doc-h2-num">01 · Contexto</span>
              Visão geral
            </h2>
            <p className="doc-p">
              O <code>Accordion</code> foi projetado para o contexto de cursos
              online, onde o conteúdo precisa ser hierarquizado sem perder a
              identidade visual de cada produto. Cada variante tem um cabeçalho
              com imagem de fundo própria, definida pela prop <code>bgColor</code>.
            </p>
            <p className="doc-p">
              A partir da prop <code>course</code>, o componente passa a usar um
              sistema de asset maps por curso — o conjunto correto de imagens é
              selecionado automaticamente sem crescer a lógica interna do componente.
            </p>

            <Callout variant="info" label="Quando usar">
              <p>
                Use <code>Accordion</code> para seções opcionais ou complementares
                dentro de um módulo: gabaritos, aprofundamentos, dicas. Para listas
                de itens numerados independentes, prefira <code>StarList</code>.
              </p>
            </Callout>
          </section>

          {/* 02 — Preview */}
          <section id="preview">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#preview" aria-hidden="true">#</a>
              <span className="doc-h2-num">02 · Demo</span>
              Visualização
            </h2>
            <p className="doc-p">
              Clique no cabeçalho para alternar entre aberto e fechado:
            </p>

            {/* Preview PCE — fechado */}
            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · Accordion / course="pce"
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  organismo
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <AccordionPCEPreview title="Para saber mais" />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Accordion course="pce" /&gt;</span> — clique para abrir/fechar
              </div>
            </div>

            {/* Preview PCE — segundo exemplo com título diferente */}
            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · Accordion / course="pce" — variação de título
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <AccordionPCEPreview title="Sugestão de resposta" />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Accordion course="pce" title="Sugestão de resposta" /&gt;</span>
              </div>
            </div>
          </section>

          {/* 03 — Props */}
          <section id="props">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#props" aria-hidden="true">#</a>
              <span className="doc-h2-num">03 · API</span>
              Propriedades
            </h2>

            <div className="table-wrap">
              <table className="doc-table">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Tipo</th>
                    <th>Padrão</th>
                    <th>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>title</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Texto ou JSX exibido no cabeçalho do acordeão</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>bgColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>BgVariant (1–22)</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Seleciona o conjunto de assets de fundo do cabeçalho. Cada número corresponde a uma identidade visual diferente</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>course</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>"pce"</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Quando informado, usa os assets do curso correspondente via asset map e ignora <code>bgColor</code></td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>children</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Conteúdo revelado quando o acordeão está aberto</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>variant</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>"static" | "dynamic" | "borderful"</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>"static"</span></td>
                    <td>Controla a largura máxima: <code>static</code> usa largura de coluna, <code>dynamic</code> expande até 950px</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>titleColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Cor do título quando o acordeão está fechado</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>titleColor2</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Cor do título quando o acordeão está aberto</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>bgInsideColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>"transparent"</span></td>
                    <td>Cor de fundo da área de conteúdo quando aberta</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>upArrowColorVariant</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ArrowVariant (1–12)</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>3</span></td>
                    <td>Asset da seta exibida no estado fechado</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>downArrowColorVariant</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ArrowVariant (1–12)</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>3</span></td>
                    <td>Asset da seta exibida no estado aberto</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>headerHeight</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>"100px"</span></td>
                    <td>Altura do cabeçalho em CSS (ex: "120px")</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>iconBackColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Cor de fundo circular por trás do ícone de seta</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout variant="tip" label="bgColor vs course">
              <p>
                Use <code>bgColor</code> (1–22) para os estilos legados baseados em
                assets de fundo fixos. Use <code>course</code> para novos cursos —
                ele carrega automaticamente o conjunto correto de SVGs da pasta{" "}
                <code>assets/{"<curso>"}/</code> e torna o componente mais fácil
                de manter.
              </p>
            </Callout>
          </section>

          {/* 04 — Uso */}
          <section id="uso">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#uso" aria-hidden="true">#</a>
              <span className="doc-h2-num">04 · Exemplos</span>
              Como usar
            </h2>

            <h3 className="doc-h3">Uso básico</h3>
            <DocCodeBlock
              filename="Unidade01.tsx"
              raw={`import { Accordion } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Accordion\n      title="Para saber mais"\n      bgColor={1}\n      bgInsideColor="#FFEDB8"\n      titleColor="#FFFFFF"\n      titleColor2="#FFFFFF"\n      variant="static"\n    >\n      <p>Conteúdo complementar do módulo.</p>\n    </Accordion>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Accordion</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Accordion</span>{"\n"}
                {"      "}<span className="tok-attr">title</span>=<span className="tok-str">&quot;Para saber mais&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">bgColor</span>={"{"}<span className="tok-num">1</span>{"}"}{"\n"}
                {"      "}<span className="tok-attr">titleColor</span>=<span className="tok-str">&quot;#FFFFFF&quot;</span>{"\n"}
                {"    "}&gt;{"\n"}
                {"      "}&lt;<span className="tok-tag">p</span>&gt;Conteúdo complementar.&lt;/<span className="tok-tag">p</span>&gt;{"\n"}
                {"    "}&lt;/<span className="tok-tag">Accordion</span>&gt;{"\n"}
                {"  "}){"\n"}
                {"}"}
              </pre>
            </DocCodeBlock>

            <h3 className="doc-h3">Com a prop course (novo sistema)</h3>
            <p className="doc-p">
              Quando o curso tem seus próprios assets organizados em{" "}
              <code>assets/pce/</code>, use a prop <code>course</code>. O{" "}
              <code>bgColor</code> ainda precisa ser informado por enquanto, mas é
              ignorado quando <code>course</code> está presente.
            </p>
            <DocCodeBlock
              filename="Unidade01.tsx"
              raw={`<Accordion\n  title="Dica de aprofundamento"\n  bgColor={1}\n  course="pce"\n  titleColor="#FFFFFF"\n>\n  <p>Conteúdo do curso PCE.</p>\n</Accordion>`}
            >
              <pre style={{ margin: 0 }}>
                &lt;<span className="tok-tag">Accordion</span>{"\n"}
                {"  "}<span className="tok-attr">title</span>=<span className="tok-str">&quot;Dica de aprofundamento&quot;</span>{"\n"}
                {"  "}<span className="tok-attr">bgColor</span>={"{"}<span className="tok-num">1</span>{"}"}{"\n"}
                {"  "}<span className="tok-attr">course</span>=<span className="tok-str">&quot;pce&quot;</span>{"\n"}
                {"  "}<span className="tok-attr">titleColor</span>=<span className="tok-str">&quot;#FFFFFF&quot;</span>{"\n"}
                &gt;{"\n"}
                {"  "}&lt;<span className="tok-tag">p</span>&gt;Conteúdo do curso PCE.&lt;/<span className="tok-tag">p</span>&gt;{"\n"}
                &lt;/<span className="tok-tag">Accordion</span>&gt;
              </pre>
            </DocCodeBlock>

            <Callout variant="warn" label="CSS global obrigatório">
              <p>
                O componente usa <code>@emotion/css</code> para os estilos de
                container. Certifique-se que a dependência está instalada no projeto
                consumidor: <code>pnpm add @emotion/css</code>.
              </p>
            </Callout>
          </section>

          {/* 05 — Variantes */}
          <section id="variantes">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#variantes" aria-hidden="true">#</a>
              <span className="doc-h2-num">05 · Variações</span>
              Variantes
            </h2>
            <p className="doc-p">
              As 22 variantes de <code>bgColor</code> cobrem as identidades visuais
              dos cursos legados. As variantes 1–8 usam assets de fundo de largura
              total; as variantes 9–12 usam cabeçalhos menores com cores sólidas;
              as variantes 13–22 adicionam numeração incremental ao cabeçalho.
            </p>

            <div className="grid grid-cols-1 gap-5 my-7">
              {/* PCE — fechado */}
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#670098]" />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                    PCE · course="pce" — estado fechado
                  </span>
                </div>
                <div className="p-8 bg-white flex justify-center">
                  {/* Replica exata do bgClosed.svg: rect rx=20 fill=#670098 */}
                  <div style={{
                    width: "100%", maxWidth: 860, height: 89,
                    background: "#670098", borderRadius: 20,
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", padding: "0 32px",
                  }}>
                    <span style={{ fontSize: 20, fontWeight: 600, color: "#F3EBBE" }}>
                      Para saber mais
                    </span>
                    <svg width="32" height="19" viewBox="0 0 50 29" fill="none">
                      <path d="M25 28.3406C22.9809 28.3406 20.9619 27.4506 19.4332 25.7035L0.627345 4.21114C-0.209115 3.25519 -0.209115 1.67292 0.627345 0.716966C1.4638 -0.238989 2.84829 -0.238989 3.68475 0.716966L22.4906 22.2093C23.8751 23.7916 26.1249 23.7916 27.5093 22.2093L46.3153 0.716966C47.1517 -0.238989 48.5362 -0.238989 49.3727 0.716966C50.2091 1.67292 50.2091 3.25519 49.3727 4.21114L30.5667 25.7035C29.038 27.4506 27.019 28.3406 25 28.3406Z" fill="#F3EBBE"/>
                    </svg>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                  ↑ estado fechado — replica <span className="text-[var(--ink-2)]">bgClosed.svg</span>: rect rx=20 fill=#670098
                </div>
              </div>

              {/* PCE — aberto */}
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#670098]" />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                    PCE · course="pce" — estado aberto
                  </span>
                </div>
                <div className="p-8 bg-white flex justify-center">
                  {/* Replica exata do bgOpen.svg: roxo externo + rect interno #F6ECBD com sombra */}
                  <div style={{
                    width: "100%", maxWidth: 860,
                    background: "#670098", borderRadius: 20, overflow: "hidden",
                  }}>
                    {/* Header */}
                    <div style={{
                      display: "flex", alignItems: "center",
                      justifyContent: "space-between", padding: "0 32px", height: 89,
                    }}>
                      <span style={{ fontSize: 20, fontWeight: 600, color: "#F3EBBE" }}>
                        Para saber mais
                      </span>
                      <svg width="32" height="19" viewBox="0 0 50 29" fill="none"
                        style={{ transform: "rotate(180deg)" }}>
                        <path d="M25 28.3406C22.9809 28.3406 20.9619 27.4506 19.4332 25.7035L0.627345 4.21114C-0.209115 3.25519 -0.209115 1.67292 0.627345 0.716966C1.4638 -0.238989 2.84829 -0.238989 3.68475 0.716966L22.4906 22.2093C23.8751 23.7916 26.1249 23.7916 27.5093 22.2093L46.3153 0.716966C47.1517 -0.238989 48.5362 -0.238989 49.3727 0.716966C50.2091 1.67292 50.2091 3.25519 49.3727 4.21114L30.5667 25.7035C29.038 27.4506 27.019 28.3406 25 28.3406Z" fill="#F3EBBE"/>
                      </svg>
                    </div>
                    {/* Área interna creme — replica rect x=20 y=23 fill=#F6ECBD com sombra */}
                    <div style={{
                      margin: "0 20px 20px 20px", borderRadius: 20,
                      background: "#F6ECBD", boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
                      padding: "28px 32px", color: "#333", fontSize: 15, lineHeight: 1.7,
                    }}>
                      Aqui ficam textos complementares, links de referência ou materiais
                      de aprofundamento do módulo.
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                  ↑ estado aberto — replica <span className="text-[var(--ink-2)]">bgOpen.svg</span>: outer roxo + inner #F6ECBD com drop-shadow
                </div>
              </div>

              {/* Preview interativo */}
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#670098]" />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                    PCE · interativo — clique para alternar
                  </span>
                </div>
                <div className="p-8 bg-white flex justify-center">
                  <AccordionPCEPreview title="Dica de aprofundamento" />
                </div>
              </div>
            </div>

            {/* Acessibilidade */}
            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <p className="doc-p">
              O cabeçalho clicável deve ser um elemento focável. Na implementação
              atual, o clique está no <code>div</code> — em uma próxima versão ele
              será migrado para <code>button</code> com <code>aria-expanded</code>.
            </p>
            <ul className="prose-ul">
              <li className="prose-li">
                A seta de toggle deve ter <code>alt=""</code> por ser decorativa —
                o estado aberto/fechado é comunicado pelo <code>aria-expanded</code>.
              </li>
              <li className="prose-li">
                O conteúdo oculto deve ter <code>aria-hidden="true"</code> quando
                fechado para não ser lido por leitores de tela.
              </li>
              <li className="prose-li">
                A animação usa <code>max-height</code> para compatibilidade máxima.
                Usuários com <code>prefers-reduced-motion</code> devem receber a
                transição desativada via CSS.
              </li>
            </ul>

            <Callout variant="tip" label="Versão com course">
              <p>
                A prop <code>course</code> usa o mesmo cabeçalho com{" "}
                <code>background-image</code> do sistema legado, mas lê os SVGs de
                uma pasta organizada por curso (<code>assets/pce/bgClosed.svg</code>
                ). Para adicionar um novo curso, basta criar a pasta com os três
                arquivos padrão e registrar no <code>assets.ts</code>.
              </p>
            </Callout>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{
              href: "/docs/components/referencemodal",
              label: "Anterior",
              title: "ReferenceModal",
            }}
            next={{
              href: "/docs/components/starlist",
              label: "Próximo",
              title: "StarList",
            }}
          />

          <footer className="pg-foot">
            <span>
              Atualizado em <b style={{ color: "var(--ink-2)" }}>08 Jun 2026</b>
            </span>
            <a
              href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/organisms/accordion"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver fonte ↗
            </a>
            <a
              href="https://github.com/r0b14/Modfly.ui/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reportar problema
            </a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc
        entries={TOC_ENTRIES}
        readTime="~5 min"
        editHref="https://github.com/r0b14/Modfly.ui"
      />
    </div>
  );
}
