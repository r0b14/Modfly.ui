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

export default function ExclamationPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        <header className="doc-head">
          <div className="doc-cat">Átomos · Referência</div>
          <h1 className="doc-title">
            Exclamation<i>.</i>
          </h1>
          <p className="doc-lead">
            Bloco de aviso com ícone de exclamação, título opcional e um link de ação (ex.: download
            de material complementar).
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
              O <code>Exclamation</code> combina um título (<code>&lt;h3&gt;</code>), um ícone de
              exclamação e um parágrafo com <code>children</code> seguido de um link de ação. O texto
              do link é customizável via <code>linkLabel</code> (padrão &quot;Baixe aqui&quot;).
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para chamar atenção para um aviso importante com uma ação associada — por exemplo,
                baixar um material de apoio antes de continuar.
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
                  Preview · Exclamation / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="p-10 bg-white">
                <ExclamationPreview
                  title="Atenção"
                  linkLabel="Baixe aqui"
                >
                  O material complementar desta unidade está disponível para download.
                </ExclamationPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Exclamation /&gt;</span> — props: title, children, link, linkLabel
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>title</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Título em destaque acima do ícone</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>children</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Corpo do aviso, ao lado do ícone</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>link</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>URL do link de ação, aberto em nova aba</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>linkLabel</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;Baixe aqui&quot;</span></td>
                    <td>Texto do link — customizável em vez de fixo</td>
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
              raw={`import { Exclamation } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Exclamation\n      title="Atenção"\n      link="https://example.com/material.pdf"\n    >\n      O material complementar desta unidade está disponível para download.\n    </Exclamation>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Exclamation</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Exclamation</span>{"\n"}
                {"      "}<span className="tok-attr">title</span>=<span className="tok-str">&quot;Atenção&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">link</span>=<span className="tok-str">&quot;https://example.com/material.pdf&quot;</span>{"\n"}
                {"    "}&gt;{"\n"}
                {"      "}O material complementar desta unidade está disponível para download.{"\n"}
                {"    "}&lt;/<span className="tok-tag">Exclamation</span>&gt;{"\n"}
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
            <p className="doc-p">Sem <code>link</code>, o texto de ação não aparece:</p>
            <div className="my-7">
              <ExclamationPreview title="Atenção">
                Revise o conteúdo anterior antes de prosseguir para o próximo módulo.
              </ExclamationPreview>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">O ícone de exclamação é decorativo (<code>aria-hidden</code>).</li>
              <li className="prose-li">
                O link abre em nova aba (<code>target=&quot;_blank&quot;</code>) com{" "}
                <code>rel=&quot;noreferrer&quot;</code>.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/buttonreference", label: "Anterior", title: "ButtonReference" }}
            next={{ href: "/docs/components/rangeblue", label: "Próximo", title: "RangeBlue" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/atoms/exclamation" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~2 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function ExclamationPreview({
  title,
  children,
  linkLabel,
}: {
  title?: string;
  children: React.ReactNode;
  linkLabel?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="w-full text-lg font-semibold m-0">{title}</h3>
      <div className="w-full flex items-center justify-start gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/exclamation/icon.svg" alt="" aria-hidden="true" className="w-8 h-8 flex-shrink-0" />
        <p style={{ margin: 0, fontSize: 14 }}>
          {children}
          {linkLabel && (
            <>
              {" "}
              <a href="#top" style={{ color: "var(--orange)" }}>
                {linkLabel}
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
