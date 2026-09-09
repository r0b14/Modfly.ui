import { DocCodeBlock } from "@/components/docs/DocCodeBlock";
import { Callout } from "@/components/docs/Callout";
import { Pager } from "@/components/docs/Pager";
import { RightToc } from "@/components/docs/RightToc";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cards",
  description:
    "Grade de cartões em duas gerações: o novo design EDC (card colorido com faixa abstrata e painel expansível) e a versão legada clara com expansão em largura total.",
  alternates: { canonical: "/docs/components/cards" },
};

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
            Grade de cartões com conteúdo expansível, em duas gerações: <strong>Cards</strong>, o
            novo design com card colorido, faixa abstrata e painel que expande logo abaixo (o
            &quot;puxadinho&quot;), e <strong>CardsLegacy</strong>, a versão anterior clara com
            expansão em largura total.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
            <div className="doc-meta-item">Exports <b>2</b></div>
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
              O novo <code>Cards</code> recebe <code>items</code> — objetos com{" "}
              <code>title</code>, <code>imageUrl</code>, <code>colorScheme</code>{" "}
              (<code>green</code> ou <code>blue</code>) e <code>content</code>. Clicar no botão{" "}
              <code>+</code> revela o painel de texto abaixo do próprio card e o botão vira{" "}
              <code>−</code>. O <code>CardsLegacy</code> mantém a API antiga de tuplas{" "}
              <code>cardsData</code> (com o terceiro esquema laranja) e a expansão em um bloco de
              largura total no desktop.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Prefira o novo <code>Cards</code> em módulos novos. Use <code>CardsLegacy</code>{" "}
                para consistência com módulos já publicados. Para virar o cartão em 3D, veja{" "}
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
            <p className="doc-p">
              O novo design nos dois estados — fechado (<code>+</code>) e aberto (<code>−</code>,
              com o painel revelado):
            </p>

            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · Cards / novo design
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white flex flex-wrap items-start gap-8 justify-center">
                <CardsNewPreview title="Infraestrutura das escolas" colorScheme="green" />
                <CardsNewPreview
                  title="Currículo"
                  colorScheme="blue"
                  open
                  content="Ter a educação ambiental climática presente nos currículos nacionais de 90% dos países do mundo;"
                />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Cards /&gt;</span> — props: items (title, imageUrl, colorScheme, content)
              </div>
            </div>

            <p className="doc-p">A versão legada, nos três esquemas de cor:</p>
            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · CardsLegacy / cores
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 pb-14 bg-white flex flex-wrap gap-8 justify-center">
                <CardsLegacyPreview nome="Princípio 1" texto="Foco na reparação do dano." tipo={1} />
                <CardsLegacyPreview nome="Princípio 2" texto="Participação voluntária." tipo={2} />
                <CardsLegacyPreview nome="Princípio 3" texto="Inclusão de todos." tipo={3} />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;CardsLegacy /&gt;</span> — props: cardsData
              </div>
            </div>
          </section>

          <section id="props">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#props" aria-hidden="true">#</a>
              <span className="doc-h2-num">03 · API</span>
              Propriedades
            </h2>

            <h3 className="doc-h3">Cards (novo design)</h3>
            <div className="table-wrap">
              <table className="doc-table">
                <thead>
                  <tr><th>Prop</th><th>Tipo</th><th>Padrão</th><th>Descrição</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>CardsItem[]</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Lista de cards (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items[].title</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Título branco no topo do card</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items[].imageUrl</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Ilustração central do card</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items[].colorScheme</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>&quot;green&quot; | &quot;blue&quot;</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;green&quot;</span></td>
                    <td>Cor do card, da faixa abstrata, dos botões e do painel</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>items[].content</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode | string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Conteúdo do painel expansível. Strings são renderizadas como HTML</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="doc-h3">CardsLegacy</h3>
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
                    <td>Tuplas <code>[nome, texto, imagemURL, tipo, textoExpandido]</code>; tipo 1 = azul, 2 = verde, 3 = laranja</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout variant="warn" label="Conteúdo HTML">
              <p>
                Nas duas versões, o conteúdo expandido em string é renderizado via{" "}
                <code>dangerouslySetInnerHTML</code> — sanitize entradas que não sejam de
                confiança. No novo <code>Cards</code>, prefira passar <code>ReactNode</code>.
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
              raw={`import { Cards } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Cards\n      items={[\n        {\n          title: 'Infraestrutura das escolas',\n          imageUrl: '/img/escola.png',\n          colorScheme: 'green',\n          content: 'Ter metade das escolas com infraestrutura sustentável e resiliente;',\n        },\n        {\n          title: 'Currículo',\n          imageUrl: '/img/curriculo.png',\n          colorScheme: 'blue',\n          content: 'Ter a educação ambiental climática nos currículos de 90% dos países;',\n        },\n      ]}\n    />\n  )\n}`}
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
                {"      "}<span className="tok-attr">items</span>={"{"}[{"\n"}
                {"        "}{"{"}{"\n"}
                {"          "}<span className="tok-attr">title</span>: <span className="tok-str">&apos;Infraestrutura das escolas&apos;</span>,{"\n"}
                {"          "}<span className="tok-attr">imageUrl</span>: <span className="tok-str">&apos;/img/escola.png&apos;</span>,{"\n"}
                {"          "}<span className="tok-attr">colorScheme</span>: <span className="tok-str">&apos;green&apos;</span>,{"\n"}
                {"          "}<span className="tok-attr">content</span>: <span className="tok-str">&apos;Ter metade das escolas com infraestrutura sustentável;&apos;</span>,{"\n"}
                {"        "}{"}"},{"\n"}
                {"      "}]{"}"}{"\n"}
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
            <p className="doc-p">Os dois esquemas de cor do novo design:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#2A6B13" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">green</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CardsNewPreview title="Comunidades" colorScheme="green" small />
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#3374C0" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">blue</span>
                </div>
                <div className="p-6 bg-white flex justify-center">
                  <CardsNewPreview title="Currículo" colorScheme="blue" small />
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O botão <code>+</code>/<code>−</code> é um <code>&lt;button&gt;</code> real com{" "}
                <code>aria-expanded</code>; os ícones e a faixa abstrata são decorativos{" "}
                (<code>aria-hidden</code>).
              </li>
              <li className="prose-li">
                A ilustração usa o <code>title</code> do card como <code>alt</code>.
              </li>
              <li className="prose-li">
                Contraste: título branco sobre <code>#2A6B13</code>/<code>#3374C0</code> e texto
                preto sobre os painéis claros atendem WCAG AA.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/rangegreen", label: "Anterior", title: "RangeGreen" }}
            next={{ href: "/docs/components/cardflip", label: "Próximo", title: "CardFlip" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>25 Jul 2026</b></span>
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

// Recriação visual estática do novo Cards usando os mesmos SVGs do componente
// real (copiados para /public/cards) — sem a lógica de abrir/fechar.
function CardsNewPreview({
  title,
  colorScheme,
  open = false,
  content,
  small = false,
}: {
  title: string;
  colorScheme: "green" | "blue";
  open?: boolean;
  content?: string;
  small?: boolean;
}) {
  const isGreen = colorScheme === "green";
  const cardBg = isGreen ? "#2A6B13" : "#3374C0";
  const panelBg = isGreen ? "#BBD3B3" : "#ACCFD5";
  const band = isGreen ? "/cards/abstratoGreen.svg" : "/cards/abstratoBlue.svg";
  const button = open
    ? isGreen ? "/cards/minusGreen.svg" : "/cards/minusBlue.svg"
    : isGreen ? "/cards/plusGreen.svg" : "/cards/plusBlue.svg";
  const width = small ? 220 : 280;

  return (
    <div className="flex flex-col" style={{ width }}>
      <div className="relative z-10 rounded-lg shadow-md overflow-hidden" style={{ background: cardBg }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={band} alt="" aria-hidden="true" className="absolute top-0 left-0 w-full h-auto pointer-events-none" />
        <h4
          className="relative text-center font-bold text-white m-0"
          style={{ fontSize: small ? 15 : 18, padding: `${small ? 16 : 22}px 16px 8px` }}
        >
          {title}
        </h4>
        <div
          className="relative flex items-center justify-center text-white/60 font-jetbrains mono"
          style={{ height: small ? 90 : 130, fontSize: 10 }}
        >
          [ ilustração ]
        </div>
        <div className="relative flex justify-center" style={{ paddingBottom: small ? 12 : 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={button} alt="" aria-hidden="true" style={{ width: small ? 40 : 48, height: small ? 40 : 48 }} />
        </div>
      </div>
      {open && content && (
        <div className="-mt-5 rounded-lg text-black text-center" style={{ background: panelBg, padding: "32px 20px 12px", fontSize: 13, lineHeight: 1.5 }}>
          {content}
        </div>
      )}
    </div>
  );
}

function CardsLegacyPreview({
  nome,
  texto,
  tipo,
}: {
  nome: string;
  texto: string;
  tipo: 1 | 2 | 3;
}) {
  const colors = {
    1: { bg: "#7DB0EC", button: "#298BCA" },
    2: { bg: "#8FCD79", button: "#649753" },
    3: { bg: "#FFB861", button: "#C66A4A" },
  }[tipo];

  return (
    <div style={{ width: 180, position: "relative" }}>
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
