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

export default function ImageFallbackPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Átomos · Referência</div>
          <h1 className="doc-title">
            ImageFallback<i>.</i>
          </h1>
          <p className="doc-lead">
            Imagem com fallback automático — tenta carregar um WEBP e recua para PNG/JPG
            se o navegador não suportar o formato moderno.
          </p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>átomo</b></div>
            <div className="doc-meta-item">Props <b>6</b></div>
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
              O <code>ImageFallback</code> usa a tag nativa <code>&lt;picture&gt;</code>: o navegador
              tenta a fonte <code>src</code> (WEBP) primeiro, e se não conseguir decodificar, recua
              automaticamente para <code>fallback</code> (PNG ou JPG) — sem nenhum JavaScript de detecção.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use sempre que precisar de imagens de conteúdo do curso otimizadas em WEBP,
                mantendo compatibilidade com navegadores/exportadores que não geram esse formato.
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
                  Preview · ImageFallback / Default
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  átomo
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <picture style={{ maxWidth: 320 }}>
                  <img src="https://placehold.co/320x200.png" alt="Imagem de exemplo" className="w-full h-auto rounded-lg" />
                </picture>
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;ImageFallback /&gt;</span> — props: src, fallback, alt
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
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>src</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>URL da imagem WEBP, tentada primeiro (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>fallback</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>URL da imagem PNG/JPG de reserva (obrigatória)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>alt</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>&quot;&quot;</span></td>
                    <td>Texto alternativo da imagem</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>imgCenter</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>false</span></td>
                    <td>Centraliza a imagem como bloco (<code>margin: 0 auto</code>)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>maxWidth</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>100%</span></td>
                    <td>Largura máxima da imagem</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>className</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td><span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span></td>
                    <td>Classes Tailwind extras aplicadas ao <code>&lt;picture&gt;</code></td>
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
              raw={`import { ImageFallback } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <ImageFallback\n      src="/imagens/diagrama.webp"\n      fallback="/imagens/diagrama.png"\n      alt="Diagrama do processo"\n      imgCenter\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">ImageFallback</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">ImageFallback</span>{"\n"}
                {"      "}<span className="tok-attr">src</span>=<span className="tok-str">&quot;/imagens/diagrama.webp&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">fallback</span>=<span className="tok-str">&quot;/imagens/diagrama.png&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">alt</span>=<span className="tok-str">&quot;Diagrama do processo&quot;</span>{"\n"}
                {"      "}<span className="tok-attr">imgCenter</span>{"\n"}
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
            <p className="doc-p">
              Sem variantes visuais — o comportamento muda apenas com <code>imgCenter</code> e{" "}
              <code>maxWidth</code>, controlando alinhamento e largura.
            </p>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                Sempre preencha <code>alt</code> com uma descrição do conteúdo da imagem — o padrão
                é uma string vazia, adequada apenas para imagens puramente decorativas.
              </li>
              <li className="prose-li">
                O fallback via <code>&lt;picture&gt;</code>/<code>&lt;source&gt;</code> é nativo do HTML,
                então funciona mesmo com JavaScript desabilitado.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/check", label: "Anterior", title: "Check" }}
            next={{ href: "/docs/components/citation", label: "Próximo", title: "Citation" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>16 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/atoms/imageFallback" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~2 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}
