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

export default function CitationPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-4 sm:px-6 lg:px-10">
        {/* Cabeçalho */}
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            Citation<i>.</i>
          </h1>
          <p className="doc-lead">
            Bloco de citação editorial com ícone de livro e atribuição de autor.
            Ideal para referenciar frases de impacto, pensadores e referências
            bibliográficas dentro do fluxo de um módulo de aprendizagem.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">
              Pacote <b>@modfly/ui</b>
            </div>
            <div className="doc-meta-item">
              Categoria <b>molécula</b>
            </div>
            <div className="doc-meta-item">
              Props <b>4</b>
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
              O <code>Citation</code> nasceu para dar voz a referências dentro de um
              módulo de e-learning. A iconografia do livro comunica imediatamente
              "isso é uma fonte" sem quebrar o ritmo visual da página.
            </p>
            <p className="doc-p">
              O componente usa <code>bookGreen.svg</code> como asset padrão —
              um par de livros abertos desenhado em verde-escuro. Para a variante
              amarela (<code>bookYellow.png</code>), o asset ainda está em migração
              para SVG; até lá, o padrão verde cobre a maioria dos contextos.
            </p>

            <Callout variant="info" label="Quando usar">
              <p>
                Use <code>Citation</code> para frases de um único autor com atribuição
                clara. Para blocos de indentação com fundo colorido, use{" "}
                <code>IndentCitation</code>. Para citações sem ícone, use{" "}
                <code>QuoteText</code>.
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
              Abaixo o componente renderizado com os valores padrão da story{" "}
              <code>Default</code>:
            </p>

            {/* Preview box */}
            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              {/* Barra do preview */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · Citation / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>

              {/* Componente renderizado inline */}
              <div className="p-10 bg-white">
                <CitationPreview
                  title="Citação Importante"
                  text="A educação é o processo de viver e não uma preparação para a vida futura."
                  author="John Dewey (1897)"
                />
              </div>

              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;Citation /&gt;</span> — props: title, text, children
              </div>
            </div>

            {/* Segundo exemplo sem title */}
            <div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
                  Preview · Citation / sem título
                </span>
              </div>
              <div className="p-10 bg-white">
                <CitationPreview
                  text="Ninguém educa ninguém, ninguém educa a si mesmo, os homens se educam entre si, mediatizados pelo mundo."
                  author="Paulo Freire — Pedagogia do Oprimido"
                />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ sem a prop <span className="text-[var(--ink-2)]">title</span> — somente text + children
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
            <p className="doc-p">
              O componente aceita quatro props. Todas são opcionais para máxima
              flexibilidade de composição.
            </p>

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
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Título opcional acima da citação (renderizado como <code className="font-jetbrains text-[12px] bg-[var(--bg-2)] px-1 rounded border border-rule">h3</code>)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>text</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Corpo da citação. Aceita JSX para formatar trechos em negrito ou itálico</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>children</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>ReactNode</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Atribuição do autor, alinhada à direita abaixo da citação</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>backgroundColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Reservado para variantes futuras. Ainda não utilizado na implementação atual</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout variant="tip" label="children como atribuição">
              <p>
                Passe o autor dentro do componente:{" "}
                <code>{"<Citation>Paulo Freire (1968)</Citation>"}</code>. Isso
                mantém a marcação semântica e facilita estilização independente.
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
            <p className="doc-p">
              Importe o componente e passe as props diretamente. Não há dependência
              de Context ou Provider externo.
            </p>

            <h3 className="doc-h3">Uso básico</h3>
            <DocCodeBlock
              filename="Unidade01.tsx"
              raw={`import { Citation } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <Citation\n      title="Citação Importante"\n      text="A educação é o processo de viver e não uma preparação para a vida futura."\n    >\n      John Dewey (1897)\n    </Citation>\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">Citation</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">Citation</span>{"\n"}
                {"      "}<span className="tok-attr">title</span>=
                <span className="tok-str">&quot;Citação Importante&quot;</span>
                {"\n"}
                {"      "}<span className="tok-attr">text</span>=
                <span className="tok-str">
                  &quot;A educação é o processo de viver...&quot;
                </span>
                {"\n"}
                {"    "}&gt;{"\n"}
                {"      "}John Dewey (1897){"\n"}
                {"    "}&lt;/<span className="tok-tag">Citation</span>&gt;{"\n"}
                {"  "}){"\n"}
                {"}"}
              </pre>
            </DocCodeBlock>

            <h3 className="doc-h3">Com text em JSX</h3>
            <p className="doc-p">
              A prop <code>text</code> aceita <code>ReactNode</code>, então você pode
              marcar trechos importantes diretamente:
            </p>
            <DocCodeBlock
              filename="Unidade01.tsx"
              raw={`<Citation\n  text={\n    <>\n      A educação é <strong>o processo de viver</strong>{" "}\n      e não uma preparação para a vida futura.\n    </>\n  }\n>\n  John Dewey (1897)\n</Citation>`}
            >
              <pre style={{ margin: 0 }}>
                &lt;<span className="tok-tag">Citation</span>{"\n"}
                {"  "}<span className="tok-attr">text</span>={"{"}{"\n"}
                {"    "}&lt;&gt;{"\n"}
                {"      "}A educação é{" "}
                &lt;<span className="tok-tag">strong</span>&gt;
                o processo de viver
                &lt;/<span className="tok-tag">strong</span>&gt;{" "}
                e não uma preparação para a vida futura.{"\n"}
                {"    "}&lt;/&gt;{"\n"}
                {"  "}{"}"}{"\n"}
                &gt;{"\n"}
                {"  "}John Dewey (1897){"\n"}
                &lt;/<span className="tok-tag">Citation</span>&gt;
              </pre>
            </DocCodeBlock>

            <Callout variant="warn" label="CSS global obrigatório">
              <p>
                O componente usa classes do Tailwind geradas pela lib. Sem o{" "}
                <code>./node_modules/@modfly/ui/dist/**/*.js</code> no{" "}
                <code>content</code> do seu tailwind.config, as classes não chegarão
                ao bundle e o layout quebrará.
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
              O Citation existe atualmente em uma variante visual (ícone verde). A
              variante amarela (<code>bookYellow</code>) está prevista para a próxima
              migração de assets.
            </p>

            <div className="grid grid-cols-2 gap-5 my-7">
              {/* Verde */}
              <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--green)]" />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">Verde · padrão</span>
                </div>
                <div className="p-6 bg-white">
                  <CitationPreview
                    text="A aprendizagem é mais eficaz quando o aluno encontra sentido no que aprende."
                    author="Lev Vygotsky"
                    color="green"
                  />
                </div>
              </div>

              {/* Amarelo (planejado) */}
              <div className="border border-rule border-dashed rounded-xl overflow-hidden bg-[var(--paper)]">
                <div className="px-4 py-2.5 border-b border-rule bg-[var(--bg)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--yellow)]" />
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">Amarelo · em migração</span>
                  <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                    em breve
                  </span>
                </div>
                <div className="p-6 bg-white opacity-60">
                  <CitationPreview
                    text="A aprendizagem é mais eficaz quando o aluno encontra sentido no que aprende."
                    author="Lev Vygotsky"
                    color="yellow"
                  />
                </div>
              </div>
            </div>

            {/* Acessibilidade */}
            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <p className="doc-p">
              O ícone de livro é decorativo — não carrega semântica. O texto da
              citação é marcado como parágrafo (<code>&lt;p&gt;</code>) e o título
              como <code>&lt;h3&gt;</code>, respeitando a hierarquia do documento.
            </p>
            <ul className="prose-ul">
              <li className="prose-li">
                A imagem do livro deve ter <code>alt=""</code> para ser ignorada
                por leitores de tela (ou o texto do título, como está atualmente).
              </li>
              <li className="prose-li">
                A atribuição do autor (<code>children</code>) deve ter contraste
                suficiente — verifique com a cor de fundo do módulo.
              </li>
              <li className="prose-li">
                Se a citação for longa, considere envolvê-la em{" "}
                <code>&lt;blockquote&gt;</code> para semântica correta.
              </li>
            </ul>

            <Callout variant="tip" label="Dica de semântica">
              <p>
                Em versões futuras o componente vai usar{" "}
                <code>&lt;figure&gt;</code> + <code>&lt;figcaption&gt;</code> para a
                atribuição do autor, alinhando com a especificação HTML5 para
                citações com fonte identificada.
              </p>
            </Callout>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{
              href: "/docs/components/figure",
              label: "Anterior",
              title: "Figure",
            }}
            next={{
              href: "/docs/components/indentcitation",
              label: "Próximo",
              title: "IndentCitation",
            }}
          />

          <footer className="pg-foot">
            <span>
              Atualizado em <b style={{ color: "var(--ink-2)" }}>27 Mai 2026</b>
            </span>
            <a
              href="https://github.com/r0b14/Modfly.ui/tree/main/apps/curso-template/src/components/molecules/citation"
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
        readTime="~4 min"
        editHref="https://github.com/r0b14/Modfly.ui"
      />
    </div>
  );
}

/* ── Recriação visual do componente Citation ── */
function CitationPreview({
  title,
  text,
  author,
  color = "green",
}: {
  title?: string;
  text: string;
  author?: string;
  color?: "green" | "yellow";
}) {
  return (
    <div style={{ maxWidth: 720, marginLeft: "auto" }}>
      {title && (
        <p style={{ color: "#333333", marginBottom: 0 }}>
          <strong style={{ fontSize: 17 }}>{title}</strong>
        </p>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 20,
          marginTop: 24,
        }}
      >
        {color === "green" ? <BookGreenIcon /> : <BookYellowIcon />}
        <p
          style={{
            margin: 0,
            fontSize: 15,
            lineHeight: 1.65,
            color: "#333",
          }}
        >
          {text}
        </p>
      </div>
      {author && (
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              marginTop: 16,
              fontSize: 13.5,
              color: "#6b645a",
              fontStyle: "italic",
            }}
          >
            {author}
          </p>
        </div>
      )}
    </div>
  );
}

function BookGreenIcon() {
  return (
    <svg
      width="100"
      height="82"
      viewBox="0 0 110 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <g clipPath="url(#clip0_citation_green)">
        <path d="M43.9019 75.7437L48.3944 49.1924L0.5 89.5203H27.7518C35.3593 89.5203 42.6193 83.3252 43.9019 75.7437Z" fill="#225C1C" />
        <path d="M7.324 49.1918L0.5 89.5198L48.3944 49.1855H7.324V49.1918Z" fill="#487E42" />
        <path d="M49.4688 13.5771C29.7487 13.5771 10.8815 29.5218 7.32422 49.191H26.5831C28.4723 38.7482 38.4935 30.278 48.9633 30.278H51.8129L54.8332 13.5771H49.4688Z" fill="#225C1C" />
        <path d="M98.4019 62.1655L102.894 35.6143L55 75.9485H82.2518C89.8593 75.9485 97.1193 69.7534 98.4019 62.1718V62.1655Z" fill="#225C1C" />
        <path d="M61.824 35.6143L55 75.9485L102.894 35.6143H61.824Z" fill="#487E42" />
        <path d="M103.969 0C84.2487 0 65.3815 15.9446 61.8242 35.6139H81.0831C82.9723 25.1711 92.9935 16.7009 103.463 16.7009H106.313L109.333 0H103.969Z" fill="#225C1C" />
      </g>
      <defs>
        <clipPath id="clip0_citation_green">
          <rect width="109" height="90" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BookYellowIcon() {
  return (
    <svg
      width="100"
      height="82"
      viewBox="0 0 110 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <g clipPath="url(#clip0_citation_yellow)">
        <path d="M43.9019 75.7437L48.3944 49.1924L0.5 89.5203H27.7518C35.3593 89.5203 42.6193 83.3252 43.9019 75.7437Z" fill="#a37a00" />
        <path d="M7.324 49.1918L0.5 89.5198L48.3944 49.1855H7.324V49.1918Z" fill="#f5c542" />
        <path d="M49.4688 13.5771C29.7487 13.5771 10.8815 29.5218 7.32422 49.191H26.5831C28.4723 38.7482 38.4935 30.278 48.9633 30.278H51.8129L54.8332 13.5771H49.4688Z" fill="#a37a00" />
        <path d="M98.4019 62.1655L102.894 35.6143L55 75.9485H82.2518C89.8593 75.9485 97.1193 69.7534 98.4019 62.1718V62.1655Z" fill="#a37a00" />
        <path d="M61.824 35.6143L55 75.9485L102.894 35.6143H61.824Z" fill="#f5c542" />
        <path d="M103.969 0C84.2487 0 65.3815 15.9446 61.8242 35.6139H81.0831C82.9723 25.1711 92.9935 16.7009 103.463 16.7009H106.313L109.333 0H103.969Z" fill="#a37a00" />
      </g>
      <defs>
        <clipPath id="clip0_citation_yellow">
          <rect width="109" height="90" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
