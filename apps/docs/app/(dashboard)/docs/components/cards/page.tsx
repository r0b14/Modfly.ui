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

export default function CardsPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            Cards<i>.</i>
          </h1>
          <p className="doc-lead">
            Grade de cartões com imagem, título e texto curto, cada um com um botão circular que
            expande um texto complementar em HTML. Ideal para apresentar princípios, passos ou
            conceitos lado a lado.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
            <div className="doc-meta-item">Props <b>1</b></div>
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
              O <code>Cards</code> recebe uma única prop, <code>cardsData</code>, no formato de
              array de tuplas <code>[nome, texto, imagemURL, tipo, textoExpandido]</code>. O{" "}
              <code>tipo</code> (1, 2 ou 3) define a cor do cartão — azul, verde ou laranja — e o
              respectivo topo ilustrado. Ao clicar no botão circular, o texto expandido (HTML)
              aparece abaixo da grade em telas largas, ou dentro do próprio cartão em mobile.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use <code>Cards</code> para 2 a 4 itens com bastante conteúdo expandido. Para uma
                versão mais compacta, com só duas cores e sem expansão em HTML complexo, veja{" "}
                <code>MiniCards</code>. Para cartões com efeito de virar (flip 3D), use{" "}
                <code>CardFlip</code>.
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
                  Preview · Cards / três tipos
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white flex flex-wrap gap-6 justify-center">
                <CardPreview nome="Princípio 1" texto="Foco na reparação do dano." tipo={1} />
                <CardPreview nome="Princípio 2" texto="Participação voluntária." tipo={2} />
                <CardPreview nome="Princípio 3" texto="Inclusão de todos os envolvidos." tipo={3} />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Cards /&gt;</span> — prop: cardsData
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>cardsData</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>[string, string, string, number, string][]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Array de tuplas: nome, texto, URL da imagem, tipo (1=azul, 2=verde, 3=laranja), texto expandido em HTML</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Callout variant="warn" label="API posicional">
              <p>
                A prop usa tuplas posicionais em vez de um array de objetos nomeados — cuidado
                com a ordem dos campos ao montar <code>cardsData</code>. Esse formato é legado do
                curso de origem; uma futura revisão pode trocar para objetos com chaves nomeadas.
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
              raw={`import { Cards } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Cards\n      cardsData={[\n        ['Princípio 1', 'Foco na reparação do dano.', '/img/p1.png', 1, '<p>Detalhe...</p>'],\n      ]}\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Cards</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Cards</span>{"\n"}
                {"      "}<span className="tok-attr">cardsData</span>={"{["}{"\n"}
                {"        "}[<span className="tok-str">&apos;Princípio 1&apos;</span>, <span className="tok-str">&apos;Foco na reparação do dano.&apos;</span>, <span className="tok-str">&apos;/img/p1.png&apos;</span>, <span className="tok-num">1</span>, <span className="tok-str">&apos;&lt;p&gt;Detalhe...&lt;/p&gt;&apos;</span>],{"\n"}
                {"      "}{"]}"}{"\n"}
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
            <p className="doc-p">Os três tipos de cor disponíveis:</p>
            <div className="grid grid-cols-3 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#298BCA" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">tipo 1 · azul</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CardPreview nome="Azul" texto="Card tipo 1." tipo={1} small />
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#649753" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">tipo 2 · verde</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CardPreview nome="Verde" texto="Card tipo 2." tipo={2} small />
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#C66A4A" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">tipo 3 · laranja</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CardPreview nome="Laranja" texto="Card tipo 3." tipo={3} small />
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O botão de expandir usa <code>aria-expanded</code>, refletindo o estado atual para
                leitores de tela.
              </li>
              <li className="prose-li">
                O texto expandido é injetado via <code>dangerouslySetInnerHTML</code> — garanta que
                o HTML de origem seja confiável e semanticamente correto.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/rangegreen", label: "Anterior", title: "RangeGreen" }}
            next={{ href: "/docs/components/cardflip", label: "Próximo", title: "CardFlip" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/cards" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function CardPreview({
  nome,
  texto,
  tipo,
  small = false,
}: {
  nome: string;
  texto: string;
  tipo: 1 | 2 | 3;
  small?: boolean;
}) {
  const colors = {
    1: { bg: "#7DB0EC", button: "#298BCA" },
    2: { bg: "#8FCD79", button: "#649753" },
    3: { bg: "#FFB861", button: "#C66A4A" },
  }[tipo];
  const width = small ? 160 : 220;

  return (
    <div style={{ width, position: "relative" }}>
      <div
        style={{
          background: colors.bg,
          borderRadius: 10,
          padding: "16px 14px 28px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#000", margin: "0 0 10px" }}>{nome}</h3>
        <div style={{ background: "rgba(255,255,255,0.55)", borderRadius: 8, height: 70, marginBottom: 10 }} />
        <p style={{ fontSize: 12.5, color: "#000", margin: 0, lineHeight: 1.5 }}>{texto}</p>
      </div>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: colors.button,
          position: "absolute",
          left: "50%",
          bottom: -17,
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 16,
          boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
        }}
      >
        +
      </div>
    </div>
  );
}
