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

export default function RangeBluePage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Átomos · Referência</div>
          <h1 className="doc-title">
            RangeBlue<i>.</i>
          </h1>
          <p className="doc-lead">
            Faixa horizontal de fundo azul com bordas decorativas onduladas no topo e na base —
            envolve conteúdo em destaque com um texto de apoio opcional ao lado.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>átomo</b></div>
            <div className="doc-meta-item">Props <b>4</b></div>
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
              O <code>RangeBlue</code> envolve <code>children</code> numa faixa de fundo azul
              claro, com duas ondas decorativas (SVG) no topo e na base. Por padrão, mostra{" "}
              <code>children</code> ao lado de um bloco de <code>text</code> opcional; com{" "}
              <code>isCustomContent</code>, renderiza só <code>children</code>, sem a divisão
              automática do layout.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para destacar um bloco de conteúdo (ex.: um resumo ou uma citação) dentro do
                fluxo do módulo. Para a variante verde com 3 sub-estilos, veja{" "}
                <code>RangeGreen</code>.
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
                  Preview · RangeBlue / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="bg-white">
                <RangeBluePreview text="Texto de apoio ao lado do conteúdo principal.">
                  <p style={{ margin: 0 }}>Conteúdo principal dentro da faixa.</p>
                </RangeBluePreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;RangeBlue /&gt;</span> — props: children, text, bgColor, isCustomContent
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
                    <td>Conteúdo principal (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>text</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Texto de apoio ao lado do conteúdo (ignorado se <code>isCustomContent</code>)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>bgColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;#E3F4FF&quot;</span></td>
                    <td>Cor de fundo da faixa</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>isCustomContent</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>false</span></td>
                    <td>Quando true, ignora <code>text</code> e renderiza só <code>children</code>, com layout livre</td>
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
              raw={`import { RangeBlue } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <RangeBlue text="Texto de apoio.">\n      <p>Conteúdo principal.</p>\n    </RangeBlue>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">RangeBlue</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">RangeBlue</span>{" "}
                <span className="tok-attr">text</span>=<span className="tok-str">&quot;Texto de apoio.&quot;</span>&gt;{"\n"}
                {"      "}&lt;p&gt;Conteúdo principal.&lt;/p&gt;{"\n"}
                {"    "}&lt;/<span className="tok-tag">RangeBlue</span>&gt;{"\n"}
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
            <p className="doc-p">Com <code>isCustomContent</code>, o layout fica livre:</p>
            <div className="my-7 bg-white border border-rule rounded-xl overflow-hidden">
              <RangeBluePreview isCustomContent>
                <p style={{ margin: 0 }}>Layout livre, sem a divisão automática de texto.</p>
              </RangeBluePreview>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">As ondas decorativas de topo/base são puramente visuais.</li>
              <li className="prose-li">
                Verifique contraste do texto sobre <code>bgColor</code> quando customizado.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/exclamation", label: "Anterior", title: "Exclamation" }}
            next={{ href: "/docs/components/rangegreen", label: "Próximo", title: "RangeGreen" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/atoms/rangeBlue" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~2 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function RangeBluePreview({
  children,
  text,
  isCustomContent = false,
}: {
  children: React.ReactNode;
  text?: string;
  isCustomContent?: boolean;
}) {
  return (
    <div style={{ background: "#E3F4FF", width: "100%" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/rangeblue/FaixaAzul-Top.svg" alt="" aria-hidden="true" style={{ height: 32, width: "100%", display: "block", objectFit: "cover" }} />
      <div className="flex max-md:flex-col justify-center items-center py-10 px-6 gap-10" style={{ background: "#E3F4FF" }}>
        {isCustomContent ? (
          children
        ) : (
          <>
            {children}
            {text && <div style={{ maxWidth: "50%" }}><p style={{ margin: 0, fontSize: 14 }}>{text}</p></div>}
          </>
        )}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/rangeblue/FaixaAzul-Bottom.svg" alt="" aria-hidden="true" style={{ height: 32, width: "100%", display: "block", objectFit: "cover" }} />
    </div>
  );
}
