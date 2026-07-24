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

export default function TextWithImageBoxPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Templates · Referência</div>
          <h1 className="doc-title">
            TextWithImageBox<i>.</i>
          </h1>
          <p className="doc-lead">
            Bloco de texto ao lado de uma ou duas imagens, com cor de fundo, borda e orientação
            configuráveis.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>template</b></div>
            <div className="doc-meta-item">Props <b>11</b></div>
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
              O <code>TextWithImageBox</code> combina uma imagem (<code>imgSrc</code>) com um
              bloco de texto (<code>children</code>) dentro de um cartão colorido. Informe
              <code> imgSrc2</code> para exibir uma imagem de cada lado do texto, ou use
              <code> isReverse</code> para inverter o lado da imagem única.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para destacar um trecho de texto ao lado de uma ilustração de apoio, como
                introdução de um tópico ou box de contextualização.
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
                  Preview · TextWithImageBox / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  template
                </span>
              </div>
              <div className="p-10 bg-white">
                <TextWithImageBoxPreview
                  hasTitle
                  title="Justiça Restaurativa"
                  imgSrc="https://placehold.co/180x140/F592C0/ffffff?text=Imagem"
                >
                  A justiça restaurativa propõe um novo olhar sobre o conflito, priorizando a
                  reparação do dano em vez da punição.
                </TextWithImageBoxPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;TextWithImageBox /&gt;</span> — props: hasTitle, title, imgSrc, children
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>imgSrc</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>URL da imagem principal</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>children</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Texto do bloco</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>title</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Título exibido quando <code>hasTitle</code> é <code>true</code></td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>hasTitle</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>false</span></td>
                    <td>Exibe o <code>title</code> como cabeçalho</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>titleColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#111&quot;</span></td>
                    <td>Cor do título</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>backgroundColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#F3E0E9&quot;</span></td>
                    <td>Cor de fundo do cartão. &quot;none&quot;/&quot;transparent&quot; remove o fundo</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>borderColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#F592C0&quot;</span></td>
                    <td>Cor da borda de 3px. &quot;none&quot;/&quot;transparent&quot; remove a borda</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>imgSrc2</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Segunda imagem — quando informada, o texto fica entre as duas imagens</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>imgMaxWidth</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>number | string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;100%&quot;</span></td>
                    <td>Largura máxima das imagens</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>isReverse</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>false</span></td>
                    <td>Inverte o lado da imagem única (ignorado se <code>imgSrc2</code> estiver definido)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>justifyText</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>false</span></td>
                    <td>Justifica o texto em vez de alinhar à esquerda</td>
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
              raw={`import { TextWithImageBox } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <TextWithImageBox\n      hasTitle\n      title='Justiça Restaurativa'\n      imgSrc='/imagens/justica.png'\n    >\n      A justiça restaurativa propõe um novo olhar sobre o conflito.\n    </TextWithImageBox>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">TextWithImageBox</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">TextWithImageBox</span>{"\n"}
                {"      "}<span className="tok-attr">hasTitle</span>{"\n"}
                {"      "}<span className="tok-attr">title</span>={"{"}<span className="tok-str">&apos;Justiça Restaurativa&apos;</span>{"}"}{"\n"}
                {"      "}<span className="tok-attr">imgSrc</span>={"{"}<span className="tok-str">&apos;/imagens/justica.png&apos;</span>{"}"}{"\n"}
                {"    "}&gt;{"\n"}
                {"      "}A justiça restaurativa propõe um novo olhar sobre o conflito.{"\n"}
                {"    "}&lt;/<span className="tok-tag">TextWithImageBox</span>{"&gt;"}{"\n"}
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
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">isReverse</span>
                </div>
                <div className="p-6 bg-white">
                  <TextWithImageBoxPreview isReverse imgSrc="https://placehold.co/140x110/F592C0/ffffff?text=Img">
                    Com isReverse, a imagem passa para o lado direito do bloco.
                  </TextWithImageBoxPreview>
                </div>
              </div>
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">imgSrc2</span>
                </div>
                <div className="p-6 bg-white">
                  <TextWithImageBoxPreview
                    imgSrc="https://placehold.co/110x90/F592C0/ffffff?text=A"
                    imgSrc2="https://placehold.co/110x90/F592C0/ffffff?text=B"
                  >
                    Com imgSrc2, uma imagem aparece de cada lado do texto.
                  </TextWithImageBoxPreview>
                </div>
              </div>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">As imagens são decorativas (<code>alt=&quot;&quot;</code>) — o conteúdo real fica em <code>children</code>/<code>title</code>.</li>
              <li className="prose-li">Garanta contraste do texto contra <code>backgroundColor</code> ao customizar as cores.</li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/container", label: "Anterior", title: "Container" }}
            next={{ href: "/docs/components/minibanner", label: "Próximo", title: "Minibanner" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/templates/textWithImageBox" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function TextWithImageBoxPreview({
  title,
  titleColor = "#111",
  hasTitle = false,
  children,
  backgroundColor = "#F3E0E9",
  borderColor = "#F592C0",
  imgSrc,
  imgSrc2,
  isReverse = false,
}: {
  title?: string;
  titleColor?: string;
  hasTitle?: boolean;
  children: ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  imgSrc: string;
  imgSrc2?: string;
  isReverse?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: imgSrc2 ? "row" : isReverse ? "row-reverse" : "row",
        alignItems: "center",
        gap: 16,
        padding: 20,
        borderRadius: 7,
        backgroundColor,
        border: `3px solid ${borderColor}`,
      }}
    >
      {imgSrc2 && <img src={imgSrc2} alt="" style={{ maxWidth: 140 }} />}
      {!imgSrc2 && <img src={imgSrc} alt="" style={{ maxWidth: 140 }} />}
      <div style={{ flex: 1 }}>
        {hasTitle && (
          <h4 style={{ margin: 0, fontWeight: 600, color: titleColor }}>{title}</h4>
        )}
        <p style={{ margin: "6px 0 0", fontSize: 13.5 }}>{children}</p>
      </div>
      {imgSrc2 && <img src={imgSrc} alt="" style={{ maxWidth: 140 }} />}
    </div>
  );
}
