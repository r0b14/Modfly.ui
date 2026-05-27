import { notFound } from "next/navigation";
import { PackageManagerTabs } from "@/components/docs/PackageManagerTabs";
import { DocCodeBlock } from "@/components/docs/DocCodeBlock";
import { Callout } from "@/components/docs/Callout";
import { Pager } from "@/components/docs/Pager";
import { RightToc } from "@/components/docs/RightToc";

interface GettingStartedPageProps {
  params: Promise<{ slug: string }>;
}

const VALID_STEPS = ["introduction", "installation", "tailwind-setup", "theming"];

const TOC_ENTRIES = [
  { id: "requirements", label: "Before you install" },
  { id: "install", label: "Install the package" },
  { id: "setup", label: "Configure your project" },
  { id: "verify", label: "You should see this" },
  { id: "next", label: "Where to go from here" },
];

export default async function GettingStartedPage({ params }: GettingStartedPageProps) {
  const { slug } = await params;

  if (!VALID_STEPS.includes(slug)) {
    notFound();
  }

  if (slug !== "installation") {
    return (
      <div className="px-10">
        <header className="doc-head">
          <div className="doc-cat">Getting Started</div>
          <h1 className="doc-title capitalize">{slug.replace(/-/g, " ")}</h1>
          <p className="doc-lead">
            Esta seção fornece as diretrizes fundamentais para começar a utilizar a{" "}
            <strong>Modfly UI</strong> no seu projeto.
          </p>
        </header>
        <article className="doc-prose">
          <div className="p-10 bg-[var(--paper)] border border-rule rounded-xl italic text-[var(--muted)]">
            Conteúdo em desenvolvimento para: <strong>{slug}</strong>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Getting Started · 02 of 04</div>
          <h1 className="doc-title">
            Up and running in <i>under a minute.</i>
          </h1>
          <p className="doc-lead">
            O Modfly UI é distribuído como um pacote npm tree-shakeable. Esta página cobre
            instalação, configuração mínima do Tailwind e o primeiro{" "}
            <code className="font-jetbrains text-[13.5px]">&lt;UnityBanner /&gt;</code>{" "}
            renderizando na tela.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">
              Version <b>0.1.0</b>
            </div>
            <div className="doc-meta-item">
              Updated <b>27 May 2026</b>
            </div>
            <div className="doc-meta-item">
              Read time <b>~6 min</b>
            </div>
            <div className="doc-meta-item">
              Status <b style={{ color: "var(--green)" }}>stable</b>
            </div>
          </div>
        </header>

        <article className="doc-prose">
          {/* 01 — Requirements */}
          <section id="requirements">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#requirements" aria-hidden="true">
                #
              </a>
              <span className="doc-h2-num">01 · Pré-requisitos</span>
              Before you install
            </h2>
            <p className="doc-p">
              Modfly UI roda em qualquer aplicação React 18+ com Tailwind. Não há
              dependências escondidas — a lib é <em>peer-dependency-only</em> em{" "}
              <code>react</code>, <code>react-dom</code> e <code>tailwindcss</code>.
            </p>

            <div className="table-wrap">
              <table className="doc-table">
                <thead>
                  <tr>
                    <th>Dependência</th>
                    <th>Versão mínima</th>
                    <th>Status</th>
                    <th>Notas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="mono" style={{ fontSize: "12.5px" }}>
                        node
                      </span>
                    </td>
                    <td>
                      <span className="mono" style={{ fontSize: "12.5px" }}>
                        18.18+
                      </span>
                    </td>
                    <td>
                      <span className="doc-status ok">supported</span>
                    </td>
                    <td>20.x recomendado</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono" style={{ fontSize: "12.5px" }}>
                        react
                      </span>
                    </td>
                    <td>
                      <span className="mono" style={{ fontSize: "12.5px" }}>
                        ^18.2.0
                      </span>
                    </td>
                    <td>
                      <span className="doc-status ok">supported</span>
                    </td>
                    <td>peer dep</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono" style={{ fontSize: "12.5px" }}>
                        tailwindcss
                      </span>
                    </td>
                    <td>
                      <span className="mono" style={{ fontSize: "12.5px" }}>
                        ^3.4.0
                      </span>
                    </td>
                    <td>
                      <span className="doc-status ok">supported</span>
                    </td>
                    <td>v4 em alpha</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono" style={{ fontSize: "12.5px" }}>
                        typescript
                      </span>
                    </td>
                    <td>
                      <span className="mono" style={{ fontSize: "12.5px" }}>
                        ^5.0
                      </span>
                    </td>
                    <td>
                      <span className="doc-status partial">optional</span>
                    </td>
                    <td>tipos incluídos</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="mono" style={{ fontSize: "12.5px" }}>
                        react-router
                      </span>
                    </td>
                    <td>—</td>
                    <td>
                      <span className="doc-status no">not required</span>
                    </td>
                    <td>componentes recebem callbacks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout variant="tip" label="Tip · pnpm é o gerenciador oficial">
              <p>
                O monorepo do Modfly usa <code>pnpm</code> + Turborepo. Os exemplos
                assumem pnpm, mas npm e yarn funcionam igual — só troque o comando.
              </p>
            </Callout>
          </section>

          {/* 02 — Install */}
          <section id="install">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#install" aria-hidden="true">
                #
              </a>
              <span className="doc-h2-num">02 · Instalação</span>
              Install the package
            </h2>
            <p className="doc-p">
              Escolha seu package manager. O pacote é menor que 80 kb gzipped e
              suporta ESM e CJS — sem configuração extra de bundler.
            </p>

            <PackageManagerTabs package="@modfly/ui" />

            <h3 className="doc-h3">Optional: instalar o pacote AVAMEC</h3>
            <p className="doc-p">
              Se você está escrevendo cursos para a plataforma AVAMEC do MEC,
              instale também o sub-pacote dedicado. Ele expõe{" "}
              <code>QuestionOption</code>, <code>QuestionMultipleAnswer</code>, etc.,
              já integrados com a <code>BridgeRestApi</code>.
            </p>
            <DocCodeBlock filename="terminal" raw="pnpm add @modfly/ui-avamec">
              <span className="code-prompt">$ </span>
              <span>pnpm add </span>
              <span className="tok-str">@modfly/ui-avamec</span>
            </DocCodeBlock>
          </section>

          {/* 03 — Setup */}
          <section id="setup">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#setup" aria-hidden="true">
                #
              </a>
              <span className="doc-h2-num">03 · Setup</span>
              Configure your project
            </h2>
            <p className="doc-p">
              Três passos. Apenas o <strong>2</strong> é não-óbvio — sem ele, as
              classes Tailwind da lib não aparecem no bundle final do seu projeto.
            </p>

            <div className="steps">
              <div className="step">
                <h4 className="step-title">Import the global styles</h4>
                <p className="step-desc">
                  No seu arquivo de entrada (<code>main.tsx</code>,{" "}
                  <code>_app.tsx</code> ou equivalente), importe os estilos base.
                  Eles incluem reset, fontes e tokens de design.
                </p>
                <DocCodeBlock
                  filename="src / main.tsx"
                  raw={`import '@modfly/ui/styles.css'\nimport React from 'react'\nimport { createRoot } from 'react-dom/client'\nimport App from './App'\n\ncreateRoot(document.getElementById('root')!).render(<App />)`}
                >
                  <pre style={{ margin: 0 }}>
                    <span className="tok-key">import</span>{" "}
                    <span className="tok-str">&apos;@modfly/ui/styles.css&apos;</span>
                    {"\n"}
                    <span className="tok-key">import</span>{" "}
                    <span className="tok-tag">React</span>{" "}
                    <span className="tok-key">from</span>{" "}
                    <span className="tok-str">&apos;react&apos;</span>
                    {"\n"}
                    <span className="tok-key">import</span>{" "}{"{ "}
                    <span className="tok-fn">createRoot</span>
                    {" }"}{" "}
                    <span className="tok-key">from</span>{" "}
                    <span className="tok-str">&apos;react-dom/client&apos;</span>
                    {"\n"}
                    <span className="tok-key">import</span>{" "}
                    <span className="tok-fn">App</span>{" "}
                    <span className="tok-key">from</span>{" "}
                    <span className="tok-str">&apos;./App&apos;</span>
                    {"\n\n"}
                    <span className="tok-fn">createRoot</span>(
                    <span className="tok-fn">document.getElementById</span>(
                    <span className="tok-str">&apos;root&apos;</span>)!).
                    <span className="tok-fn">render</span>(&lt;
                    <span className="tok-tag">App</span> /&gt;)
                  </pre>
                </DocCodeBlock>
              </div>

              <div className="step">
                <h4 className="step-title">Update your Tailwind config</h4>
                <p className="step-desc">
                  Adicione o caminho dos componentes ao array <code>content</code>{" "}
                  para que o JIT do Tailwind veja as classes usadas dentro do{" "}
                  <code>@modfly/ui</code>.
                </p>
                <DocCodeBlock
                  filename="tailwind.config.ts"
                  raw={`import type { Config } from 'tailwindcss'\n\nexport default {\n  content: [\n    './src/**/*.{ts,tsx}',\n    './node_modules/@modfly/ui/dist/**/*.js',\n  ],\n  theme: { extend: {} },\n  plugins: [],\n} satisfies Config`}
                >
                  <pre style={{ margin: 0 }}>
                    <span className="tok-key">import</span>{" "}
                    <span className="tok-key">type</span>{" "}{"{ "}
                    <span className="tok-tag">Config</span>
                    {" }"}{" "}
                    <span className="tok-key">from</span>{" "}
                    <span className="tok-str">&apos;tailwindcss&apos;</span>
                    {"\n\n"}
                    <span className="tok-key">export default</span> {"{"}
                    {"\n"}
                    {"  "}
                    <span className="tok-attr">content</span>: [{"\n"}
                    {"    "}
                    <span className="tok-str">
                      &apos;./src/**/*.{"{"}ts,tsx{"}"}&apos;
                    </span>
                    ,{"\n"}
                    {"    "}
                    <span className="tok-com">
                      {"// 👇 obrigatório para classes da lib"}
                    </span>
                    {"\n"}
                    {"    "}
                    <span className="tok-str">
                      &apos;./node_modules/@modfly/ui/dist/**/*.js&apos;
                    </span>
                    ,{"\n"}
                    {"  "},]{"\n"}
                    {"  "}
                    <span className="tok-attr">theme</span>: {"{ "}
                    <span className="tok-attr">extend</span>: {} {"}"},
                    {"\n"}
                    {"  "}
                    <span className="tok-attr">plugins</span>: [],{"\n"}
                    {"}"} <span className="tok-key">satisfies</span>{" "}
                    <span className="tok-tag">Config</span>
                  </pre>
                </DocCodeBlock>
                <Callout
                  variant="warn"
                  label="Atenção · esquecer este passo é o erro #1"
                >
                  <p>
                    Se os componentes aparecerem sem estilos, 100% das vezes é o{" "}
                    <code>content</code> do Tailwind faltando. Verifique o caminho
                    em <code>node_modules/@modfly/ui/dist</code>.
                  </p>
                </Callout>
              </div>

              <div className="step">
                <h4 className="step-title">Render your first component</h4>
                <p className="step-desc">
                  Cole o trecho abaixo numa página qualquer. Você deve ver o banner
                  roxo da unidade renderizando na tela.
                </p>
                <DocCodeBlock
                  filename="src / pages / HelloModfly.tsx"
                  raw={`import { UnityBanner } from '@modfly/ui'\n\nexport default function HelloModfly() {\n  return (\n    <UnityBanner\n      number={1}\n      title="Hello, Modfly"\n      subtitle="Componentes prontos para construir cursos."\n    />\n  )\n}`}
                >
                  <pre style={{ margin: 0 }}>
                    <span className="tok-key">import</span>{" "}{"{ "}
                    <span className="tok-tag">UnityBanner</span>
                    {" }"}{" "}
                    <span className="tok-key">from</span>{" "}
                    <span className="tok-str">&apos;@modfly/ui&apos;</span>
                    {"\n\n"}
                    <span className="tok-key">export default function</span>{" "}
                    <span className="tok-fn">HelloModfly</span>() {"{"}
                    {"\n"}
                    {"  "}
                    <span className="tok-key">return</span> ({"\n"}
                    {"    "}&lt;<span className="tok-tag">UnityBanner</span>
                    {"\n"}
                    {"      "}
                    <span className="tok-attr">number</span>={"{"}<span className="tok-num">1</span>
                    {"}"}
                    {"\n"}
                    {"      "}
                    <span className="tok-attr">title</span>=
                    <span className="tok-str">&quot;Hello, Modfly&quot;</span>
                    {"\n"}
                    {"      "}
                    <span className="tok-attr">subtitle</span>=
                    <span className="tok-str">
                      &quot;Componentes prontos para construir cursos.&quot;
                    </span>
                    {"\n"}
                    {"    "}/&gt;{"\n"}
                    {"  "}){"\n"}
                    {"}"}
                  </pre>
                </DocCodeBlock>
              </div>
            </div>

            <Callout variant="tip" label="Pro tip · imports tree-shakeable">
              <p>
                Todos os componentes são exportados individualmente. Use{" "}
                <code>{"import { UnityBanner } from '@modfly/ui'"}</code> — o bundler
                descarta o resto. Sem barrel files quebrando o tree-shake.
              </p>
            </Callout>
          </section>

          {/* 04 — Verify */}
          <section id="verify">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#verify" aria-hidden="true">
                #
              </a>
              <span className="doc-h2-num">04 · Verificação</span>
              You should see this
            </h2>
            <p className="doc-p">
              Rode o seu dev server. Se tudo estiver no lugar, o banner abaixo
              renderiza com o gradiente roxo característico:
            </p>

            <div className="my-7 max-w-[720px] p-8 bg-[var(--paper)] border border-rule rounded-xl">
              <div
                style={{
                  background:
                    "linear-gradient(110deg, var(--purple) 0%, #4a2d8e 100%)",
                  color: "white",
                  padding: "32px 28px",
                  borderRadius: "14px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: -40,
                    bottom: -40,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: "var(--purple-soft)",
                    opacity: 0.3,
                  }}
                />
                <div className="font-jetbrains text-[10px] tracking-[0.18em] uppercase opacity-70 mb-2 relative mono">
                  UNIDADE
                </div>
                <div className="font-instrument italic text-[64px] leading-none mb-2 relative serif">
                  01<span className="text-2xl text-[var(--orange-soft)]">.</span>
                </div>
                <div className="font-instrument text-[28px] leading-[1.05] max-w-[320px] relative serif">
                  Hello, Modfly
                </div>
                <div className="mt-3.5 font-jetbrains text-[11px] opacity-75 relative mono">
                  COMPONENTES PRONTOS PARA CONSTRUIR CURSOS.
                </div>
              </div>
              <div className="mt-3.5 font-jetbrains text-[11px] text-[var(--muted)] tracking-[0.06em] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;UnityBanner /&gt;</span>{" "}
                renderizado
              </div>
            </div>

            <Callout variant="danger" label="Não está vendo nada?">
              <p>
                Se o componente aparece como texto cru ou sem estilo, abra o DevTools
                e procure pelas classes do Tailwind no HTML. Se estão lá mas sem
                efeito → <code>content</code> errado. Se nem estão → o import do CSS
                global está faltando.
              </p>
              <p>
                Ainda travado? Abra uma issue no{" "}
                <a
                  href="https://github.com/r0b14/Modfly.ui/issues"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  GitHub
                </a>{" "}
                com seu <code>package.json</code> e <code>tailwind.config</code>.
              </p>
            </Callout>
          </section>

          {/* 05 — Next */}
          <section id="next">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#next" aria-hidden="true">
                #
              </a>
              <span className="doc-h2-num">05 · O que vem a seguir</span>
              Where to go from here
            </h2>
            <p className="doc-p">
              Você tem o ambiente pronto. Algumas direções recomendadas:
            </p>
            <ul className="prose-ul">
              <li className="prose-li">
                <a
                  href="/docs/getting-started/tailwind-setup"
                  className="text-[var(--ink)] underline decoration-[var(--orange)] underline-offset-[3px]"
                >
                  Tailwind setup
                </a>{" "}
                — customização avançada do{" "}
                <code className="font-jetbrains text-[13px] bg-[var(--bg-2)] px-[6px] py-[1px] rounded-[3px] border border-rule">
                  tailwind.config
                </code>
                , extensão da paleta e fontes customizadas.
              </li>
              <li className="prose-li">
                <a
                  href="/docs/getting-started/theming"
                  className="text-[var(--ink)] underline decoration-[var(--orange)] underline-offset-[3px]"
                >
                  Theming
                </a>{" "}
                — como sobrescrever as 6 cores base da lib via CSS variables sem
                ejetar componentes.
              </li>
              <li className="prose-li">
                <a
                  href="/docs/components/cards"
                  className="text-[var(--ink)] underline decoration-[var(--orange)] underline-offset-[3px]"
                >
                  Components
                </a>{" "}
                — catálogo completo dos 38+ componentes organizados por Atoms /
                Molecules / Organisms / Templates.
              </li>
            </ul>

            <hr className="doc-hr" />

            <Pager
              prev={{
                href: "/docs/getting-started/introduction",
                label: "Anterior",
                title: "Introduction",
              }}
              next={{
                href: "/docs/getting-started/tailwind-setup",
                label: "Próximo",
                title: "Tailwind setup",
              }}
            />
          </section>

          <footer className="pg-foot">
            <span>
              Last updated <b style={{ color: "var(--ink-2)" }}>May 27, 2026</b>
            </span>
            <a
              href="https://github.com/r0b14/Modfly.ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit this page ↗
            </a>
            <a
              href="https://github.com/r0b14/Modfly.ui/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report an issue
            </a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc
        entries={TOC_ENTRIES}
        readTime="~6 min"
        editHref="https://github.com/r0b14/Modfly.ui"
      />
    </div>
  );
}
