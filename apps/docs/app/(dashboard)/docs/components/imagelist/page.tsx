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

export default function ImageListPage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">
            ImageList<i>.</i>
          </h1>
          <p className="doc-lead">
            Sequência vertical de imagens conectadas por uma barra colorida, cada uma com fonte e
            um botão para expandir uma descrição.
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
              O <code>ImageList</code> recebe <code>items</code>, um array de objetos com imagem
              (e fallback via <code>ImageFallback</code>), fonte, descrição e cores de barra/botão.
              Cada item mostra uma barra vertical colorida ligando os itens, e o último recebe uma
              bolinha (<code>isLast</code>) marcando o fim da sequência.
            </p>
            <Callout variant="info" label="Quando usar">
              <p>
                Use para uma sequência de imagens relacionadas (linha do tempo visual, galeria
                narrativa) onde cada uma precisa de fonte e descrição opcional expansível.
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
                  Preview · ImageList / 2 itens
                </span>
                <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
                  molécula
                </span>
              </div>
              <div className="p-10 bg-white flex justify-center">
                <ImageListPreview />
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;ImageList /&gt;</span> — prop: items
              </div>
            </div>
          </section>

          <section id="props">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#props" aria-hidden="true">#</a>
              <span className="doc-h2-num">03 · API</span>
              Propriedades
            </h2>
            <p className="doc-p">
              <code>items: ImageListItem[]</code>, onde cada item tem:
            </p>
            <div className="table-wrap">
              <table className="doc-table">
                <thead>
                  <tr><th>Campo</th><th>Tipo</th><th>Descrição</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>imgSrc</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td>URL da imagem principal (obrigatório)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>imgFallback</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td>Fallback repassado ao <code>ImageFallback</code> interno (obrigatório)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>fonte</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td>Legenda de fonte abaixo da imagem (obrigatório)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>descricao</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td>Texto expandido ao clicar no botão (obrigatório)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>barColor / buttonColor / descriptionBoxColor</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td>Cores da barra vertical, botão e caixa de descrição (obrigatórios)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>buttonColorActive</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>string</span></td>
                    <td>Cor do botão quando expandido (opcional)</td>
                  </tr>
                  <tr>
                    <td><span className="mono" style={{ fontSize: "12.5px", color: "var(--muted)" }}>isLast</span></td>
                    <td><span className="mono" style={{ fontSize: "12.5px" }}>boolean</span></td>
                    <td>Marca o fim da sequência com uma bolinha (opcional)</td>
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
              raw={`import { ImageList } from '@modfly/ui'\n\nexport function Aula01() {\n  return (\n    <ImageList\n      items={[\n        {\n          imgSrc: '/img/1.png',\n          imgFallback: '/img/1.png',\n          fonte: 'Fonte: elaboração própria.',\n          descricao: 'Descrição detalhada do primeiro item.',\n          barColor: '#298BCA',\n          buttonColor: '#298BCA',\n          descriptionBoxColor: '#E1EFFF',\n          isLast: true,\n        },\n      ]}\n    />\n  )\n}`}
            >
              <pre style={{ margin: 0 }}>
                <span className="tok-key">import</span>{" "}{"{ "}
                <span className="tok-tag">ImageList</span>
                {" }"}{" "}
                <span className="tok-key">from</span>{" "}
                <span className="tok-str">&apos;@modfly/ui&apos;</span>
                {"\n\n"}
                <span className="tok-key">export function</span>{" "}
                <span className="tok-fn">Aula01</span>() {"{"}
                {"\n"}
                {"  "}<span className="tok-key">return</span> ({"\n"}
                {"    "}&lt;<span className="tok-tag">ImageList</span>{"\n"}
                {"      "}<span className="tok-attr">items</span>={"{["}{" { "}...{" } ]}"}{"\n"}
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
              Como o componente só recebe uma prop (<code>items</code>), a variação acontece
              inteiramente através das cores e da quantidade de itens passados — veja o preview
              acima para um exemplo com duas cores.
            </p>

            <h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>
              Acessibilidade
            </h3>
            <ul className="prose-ul">
              <li className="prose-li">
                O botão de expandir usa <code>aria-label</code> dinâmico
                (&quot;Expandir descrição&quot;/&quot;Recolher descrição&quot;), mais descritivo
                que o <code>aria-expanded</code> isolado usado em <code>Cards</code>.
              </li>
            </ul>
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/embed", label: "Anterior", title: "Embed" }}
            next={{ href: "/docs/components/accordion", label: "Próximo", title: "Accordion" }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>23 Jul 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/molecules/imageList" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}

function ImageListPreview() {
  const items = [
    { fonte: "Fonte: elaboração própria.", barColor: "#298BCA" },
    { fonte: "Fonte: elaboração própria.", barColor: "#649753" },
  ];
  return (
    <div style={{ width: 320 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex" }}>
          <div style={{ width: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: 6, flex: 1, background: item.barColor }} />
          </div>
          <div style={{ flex: 1, paddingBottom: 20 }}>
            <div style={{ position: "relative", marginBottom: 8 }}>
              <div style={{ background: "#E1EFFF", borderRadius: 6, height: 90 }} />
            </div>
            <p style={{ fontSize: 11, color: "#333", opacity: 0.7, fontStyle: "italic", marginLeft: 12 }}>
              {item.fonte}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
