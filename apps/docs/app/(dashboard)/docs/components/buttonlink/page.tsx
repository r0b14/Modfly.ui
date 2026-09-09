import { DocCodeBlock } from "@/components/docs/DocCodeBlock";
import { Callout } from "@/components/docs/Callout";
import { Pager } from "@/components/docs/Pager";
import { RightToc } from "@/components/docs/RightToc";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ButtonLink",
  description:
    "Botão de chamada de ação em duas gerações: o novo design GFD (pill salmão com selo ilustrado) e as versões legadas com fundo ilustrado em três esquemas de cor.",
  alternates: { canonical: "/docs/components/buttonlink" },
};

const TOC_ENTRIES = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "preview", label: "Visualização" },
  { id: "props", label: "Propriedades" },
  { id: "uso", label: "Como usar" },
  { id: "variantes", label: "Variantes" },
  { id: "acessibilidade", label: "Acessibilidade", level: 3 as const },
];

export default function ButtonLinkPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Átomos · Referência</div>
          <h1 className="doc-title">
            ButtonLink<i>.</i>
          </h1>
          <p className="doc-lead">
            Botão de chamada de ação em duas gerações: <strong>ButtonLink</strong>, o novo design
            (pill salmão com selo ilustrado e estado de hover), e <strong>ButtonLinkLegacy</strong>,
            as versões anteriores com fundo ilustrado — clique, documento ou vídeo — em três esquemas de cor.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>átomo</b></div>
            <div className="doc-meta-item">Exports <b>2</b></div>
            <div className="doc-meta-item">Status <b style={{ color: "var(--green)" }}>estável</b></div>
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
              Ambos renderizam como <code>&lt;a&gt;</code> (quando recebem <code>href</code>)
              ou <code>&lt;button&gt;</code>. O novo <code>ButtonLink</code> tem um único visual — pill
              salmão com textura, selo com seta e troca de estado no hover — e recebe o rótulo
              via <code>children</code>. O <code>ButtonLinkLegacy</code> mantém a API anterior: fundo SVG
              que muda com <code>colorScheme</code> e ícone à direita definido por <code>variant</code>{" "}
              (link, documento ou vídeo).
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Prefira o novo <code>ButtonLink</code> em módulos novos. Use <code>ButtonLinkLegacy</code>{" "}
                para manter consistência com módulos já publicados no visual antigo. Para download direto
                de um PDF com rótulo fixo, prefira <code>ButtonPdfDownload</code>.
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
              O novo design (passe o mouse para ver o estado de hover):
            </p>

            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · ButtonLink / novo design
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="p-10 bg-white flex flex-wrap items-center gap-6 justify-center">
                <ButtonLinkNewPreview text="Acessar agora" />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;ButtonLink /&gt;</span> — props: children, href, showIcon
              </div>
            </div>

            <p className="doc-p">
              As versões legadas, nos três esquemas de cor com o ícone padrão (<code>variant=1</code>, clique):
            </p>

            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · ButtonLinkLegacy / cores
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="p-10 bg-white flex flex-wrap items-center gap-6 justify-center">
                <ButtonLinkLegacyPreview text="Acessar material" color="blue" icon="click" />
                <ButtonLinkLegacyPreview text="Baixar documento" color="yellow" icon="click" />
                <ButtonLinkLegacyPreview text="Assistir vídeo" color="pink" icon="click" />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;ButtonLinkLegacy /&gt;</span> — props: colorScheme, variant, text, href
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

            <h3 className="doc-h3">ButtonLink (novo design)</h3>
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
                    <td>Rótulo do botão (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>href</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Se presente, renderiza <code>&lt;a&gt;</code>; senão, <code>&lt;button&gt;</code></td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>showIcon</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>true</span></td>
                    <td>Exibe o selo com a seta à esquerda do rótulo</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>icon / hoverIcon</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Substituem o selo padrão nos estados normal e hover</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>onClick</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>{"() => void"}</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Handler de clique, funciona nos dois modos (link ou botão)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>target</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>_blank | _self | _parent | _top</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>_blank</span></td>
                    <td>Aplicado apenas quando <code>href</code> está presente</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>className</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;&quot;</span></td>
                    <td>Classes Tailwind extras aplicadas ao <code>&lt;a&gt;</code>/<code>&lt;button&gt;</code> raiz</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="doc-h3">ButtonLinkLegacy</h3>
            <div className="table-wrap">
              <table className="doc-table">
                <thead>
                  <tr><th>Prop</th><th>Tipo</th><th>Padrão</th><th>Descrição</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>variant</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>1 | 2 | 3</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Tipo de ação: 1 = link/clique, 2 = documento, 3 = vídeo (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>colorScheme</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>1 | 2 | 3</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>1</span></td>
                    <td>Esquema de cor: 1 = azul, 2 = amarelo, 3 = rosa</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>text</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Rótulo do botão. Aceita HTML via <code>dangerouslySetInnerHTML</code></td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>href</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Se presente, renderiza <code>&lt;a&gt;</code>; senão, <code>&lt;button&gt;</code></td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>onClick</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>{"() => void"}</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Handler de clique, funciona nos dois modos (link ou botão)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>width / height</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string | number</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>269 / 60</span></td>
                    <td>Dimensões do botão em px (ou string CSS)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>textColor / textClassName</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Cor e classes Tailwind do rótulo</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>target</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>_blank | _self | _parent | _top</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>_blank</span></td>
                    <td>Aplicado apenas quando <code>href</code> está presente</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>className</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;&quot;</span></td>
                    <td>Classes Tailwind extras aplicadas ao <code>&lt;a&gt;</code>/<code>&lt;button&gt;</code> raiz</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout variant="warn" label="Fundo é SVG, não CSS">
              <p>
                Nas duas versões o fundo/textura é um componente SVG (via SVGR), renderizado como{" "}
                <code>&lt;svg&gt;</code> absolutamente posicionado atrás do conteúdo — não uma imagem
                CSS <code>background</code>.
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
            <DocCodeBlock
              filename="Unidade01.tsx"
              raw={`import { ButtonLink, ButtonLinkLegacy } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <>\n      <ButtonLink href="https://example.com">\n        Acessar agora\n      </ButtonLink>\n\n      <ButtonLinkLegacy\n        variant={1}\n        colorScheme={1}\n        text="Acessar material"\n        href="https://example.com"\n      />\n    </>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">ButtonLink</span>,{" "}
                <span className="tok-tag">ButtonLinkLegacy</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;&gt;{"\n"}
                {"      "}&lt;<span className="tok-tag">ButtonLink</span>{" "}
                <span className="tok-attr">href</span>=<span className="tok-str">&quot;https://example.com&quot;</span>&gt;{"\n"}
                {"        "}Acessar agora{"\n"}
                {"      "}&lt;/<span className="tok-tag">ButtonLink</span>&gt;{"\n\n"}
                {"      "}&lt;<span className="tok-tag">ButtonLinkLegacy</span>{"\n"}
                {"        "}<span className="tok-attr">variant</span>={"{"}<span className="tok-num">1</span>{"}"}{"\n"}
                {"        "}<span className="tok-attr">colorScheme</span>={"{"}<span className="tok-num">1</span>{"}"}{"\n"}
                {"        "}<span className="tok-attr">text</span>=<span className="tok-str">&quot;Acessar material&quot;</span>{"\n"}
                {"        "}<span className="tok-attr">href</span>=<span className="tok-str">&quot;https://example.com&quot;</span>{"\n"}
                {"      "}/&gt;{"\n"}
                {"    "}&lt;/&gt;{"\n"}
                {"  "}){"\n"}
                {"}"}
              </pre>
            </DocCodeBlock>
          </section>

          {/* 05 — Variantes */}
          <section id="variantes">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#variantes" aria-hidden="true">#</a>
              <span className="doc-h2-num">05 · Variações</span>
              Variantes
            </h2>
            <p className="doc-p">
              Os dois estados do novo design (o hover é automático via CSS):
            </p>
            <div className="grid grid-cols-2 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#FFB89F" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">Novo · padrão</span>
                </div>
                <div className="p-6 bg-white flex items-center justify-center">
                  <ButtonLinkNewPreview text="Acessar agora" small />
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#F59978" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">Novo · hover</span>
                </div>
                <div className="p-6 bg-white flex items-center justify-center">
                  <ButtonLinkNewPreview text="Acessar agora" small forceHover />
                </div>
              </div>
            </div>

            <p className="doc-p">
              E as três cores legadas (<code>colorScheme</code>) combinadas com os três tipos de
              ícone (<code>variant</code>):
            </p>
            <div className="grid grid-cols-3 gap-5 my-7">
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#298BCA" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">Azul · clique</span>
                </div>
                <div className="p-6 bg-white flex items-center justify-center">
                  <ButtonLinkLegacyPreview text="Clique aqui" color="blue" icon="click" small />
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#C6A200" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">Amarelo · documento</span>
                </div>
                <div className="p-6 bg-white flex items-center justify-center">
                  <ButtonLinkLegacyPreview text="Ver PDF" color="yellow" icon="doc" small />
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#C66A4A" }} />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">Rosa · vídeo</span>
                </div>
                <div className="p-6 bg-white flex items-center justify-center">
                  <ButtonLinkLegacyPreview text="Assistir" color="pink" icon="video" small />
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                Os ícones são decorativos (<code>aria-hidden</code>) — a semântica vem do texto do rótulo, sempre visível.
              </li>
              <li className="prose-li">
                Quando <code>href</code> é usado com <code>target=&quot;_blank&quot;</code>, os componentes já adicionam{" "}
                <code>rel=&quot;noopener noreferrer&quot;</code> automaticamente.
              </li>
              <li className="prose-li">
                O novo <code>ButtonLink</code> tem anel de foco visível para navegação por teclado{" "}
                (<code>focus-visible</code>). No legado, garanta contraste entre <code>textColor</code>{" "}
                e o fundo escolhido.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/getting-started/installation", label: "Anterior", title: "Installation" }}
            next={{ href: "/docs/components/buttonpdfdownload", label: "Próximo", title: "ButtonPdfDownload" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>25 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/atoms/buttonLink" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~4 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

// Ambos os previews usam os mesmos arquivos SVG dos componentes reais (copiados
// para /public/buttonlink) em vez de redesenhar o visual à mão — evita a prévia
// da doc dessincronizar do visual oficial do pacote.

function ButtonLinkNewPreview({
  text,
  small = false,
  forceHover = false,
}: {
  text: string;
  small?: boolean;
  forceHover?: boolean;
}) {
  const height = small ? 54 : 64;
  return (
    <span
      className={`group relative inline-flex items-center gap-4 rounded-full overflow-hidden px-7 transition-all duration-300 ${
        forceHover
          ? "bg-[#F59978] shadow-[0_0_6.8px_rgba(0,0,0,0.25)]"
          : "bg-[#FFB89F] shadow-[0_0_6.8px_rgba(0,0,0,0.35)] hover:bg-[#F59978] hover:shadow-[0_0_6.8px_rgba(0,0,0,0.25)]"
      }`}
      style={{ height }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/buttonlink/textureOverlay.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <span className="relative z-10 shrink-0" style={{ width: small ? 42 : 51, height: small ? 41 : 50 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/buttonlink/arrowBadgeDefault.svg"
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
            forceHover ? "opacity-0" : "group-hover:opacity-0"
          }`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/buttonlink/arrowBadgeHover.svg"
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
            forceHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </span>
      <span
        className={`relative z-10 whitespace-nowrap font-medium text-[#881438] ${small ? "text-lg" : "text-[22px]"}`}
      >
        {text}
      </span>
    </span>
  );
}

function ButtonLinkLegacyPreview({
  text,
  color,
  icon,
  small = false,
}: {
  text: string;
  color: "blue" | "yellow" | "pink";
  icon: "click" | "doc" | "video";
  small?: boolean;
}) {
  const bgFile = color === "blue" ? "ButtomBlue" : color === "yellow" ? "ButtomYellow" : "ButtomPink";
  const iconFile =
    icon === "click" ? "clickYellow"
    : icon === "video" ? "videoYellow"
    : color === "blue" ? "docBlue"
    : color === "yellow" ? "docYellow"
    : "docPink";
  const textColor = color === "blue" ? "#164165" : color === "yellow" ? "#7f5e05" : "#9c355a";
  const width = small ? 220 : 269;
  const height = small ? 52 : 60;

  return (
    <span className="relative inline-flex items-center justify-center" style={{ width, height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/buttonlink/${bgFile}.svg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <span className="relative z-10 flex items-center gap-2 px-4">
        <p className="m-0 font-bold text-sm" style={{ color: textColor }}>{text}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/buttonlink/${iconFile}.svg`} alt="" aria-hidden="true" className="w-7 h-7" />
      </span>
    </span>
  );
}
