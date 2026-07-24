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

export default function QuestionReflectPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            QuestionReflect<i>.</i>
          </h1>
          <p className="doc-lead">
            Bloco de pergunta reflexiva com um ícone decorativo grande no canto e duas paletas de
            tema (padrão e &quot;nuvem&quot;).
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
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
              O <code>QuestionReflect</code> tem duas variantes visuais completas — ícone, cor do
              cabeçalho e cor do corpo mudam juntas conforme <code>variant</code>. A variante
              padrão usa um ícone de cabeça com setas (tema laranja); <code>&quot;cloud&quot;</code>{" "}
              usa um ícone de nuvem (tema azul/teal), pensado para dúvidas comuns.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para propor uma pergunta de reflexão ao aluno em destaque, fora do fluxo normal
                do texto.
              </p>
            </Callout>
            <Callout variant="tip" label="Prop renomeada nesta migração">
              <p>
                Em <code>curso-template</code> a variante era controlada por <code>model?: string</code>{" "}
                (comparado com <code>=== &quot;cloud&quot;</code>). Renomeada para{" "}
                <code>variant?: &quot;default&quot; | &quot;cloud&quot;</code> — união tipada, mais
                idiomática, na primeira publicação em <code>@modfly/ui</code>.
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
                  Preview · QuestionReflect / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white">
                <QuestionReflectPreview
                  variant="default"
                  title="Para Refletir"
                >
                  O que você pensa sobre a aplicação de círculos restaurativos em turmas do ensino fundamental?
                </QuestionReflectPreview>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;QuestionReflect /&gt;</span> — props: title, variant, children
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
                    <td>Título no cabeçalho colorido (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>variant</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>&quot;default&quot; | &quot;cloud&quot;</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;default&quot;</span></td>
                    <td>Troca ícone + paleta de cor do cabeçalho/corpo juntos</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>children</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Texto da pergunta/reflexão</td>
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
              raw={`import { QuestionReflect } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <QuestionReflect title="Para Refletir">\n      O que você pensa sobre a aplicação de círculos restaurativos?\n    </QuestionReflect>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">QuestionReflect</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">QuestionReflect</span>{" "}
                <span className="tok-attr">title</span>=<span className="tok-str">&quot;Para Refletir&quot;</span>&gt;{"\n"}
                {"      "}O que você pensa sobre a aplicação de círculos restaurativos?{"\n"}
                {"    "}&lt;/<span className="tok-tag">QuestionReflect</span>&gt;{"\n"}
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
            <p className="doc-p">Com <code>variant=&quot;cloud&quot;</code>:</p>
            <div className="my-7">
              <QuestionReflectPreview variant="cloud" title="Dúvida Comum">
                Será que a Justiça Restaurativa funciona em qualquer ambiente escolar ou existem pré-requisitos?
              </QuestionReflectPreview>
            </div>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O ícone grande no canto é decorativo (<code>aria-hidden</code>) — o conteúdo textual
                já comunica a variante.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/casestudy", label: "Anterior", title: "CaseStudy" }}
            next={{ href: "/docs/components/quotes", label: "Próximo", title: "Quotes" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>24 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/questionReflect" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~2 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function QuestionReflectPreview({
  title,
  variant,
  children,
}: {
  title: string;
  variant: "default" | "cloud";
  children: React.ReactNode;
}) {
  const isCloud = variant === "cloud";
  const titleBg = isCloud ? "#54C8CA" : "#FCD49C";
  const contentBg = isCloud ? "#E4FEFF" : "#FFEDB8";
  const icon = isCloud ? "/questionreflect/cloud.svg" : "/questionreflect/cabeca-setas.svg";

  return (
    <div className="relative rounded-3xl overflow-hidden" style={{ maxWidth: 480 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{ maxWidth: 100, right: -6, top: 4 }}
      />
      <div style={{ background: titleBg, height: 56, display: "flex", alignItems: "center", padding: "0 32px" }}>
        <h5 style={{ margin: 0, fontSize: 18 }}>{title}</h5>
      </div>
      <div style={{ background: contentBg, padding: "20px 32px", paddingRight: 100 }}>{children}</div>
    </div>
  );
}
