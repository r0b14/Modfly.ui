# Padrão de Documentação de Componentes — Modfly UI

Este documento define o padrão obrigatório para criar páginas de documentação de componentes no `apps/docs`. Toda nova página de componente deve seguir esta estrutura.

---

## 1. Estrutura de arquivos

### Rota estática (obrigatório)

Cada componente recebe uma **rota estática própria**, não usa o `[slug]` dinâmico:

```
apps/docs/app/(dashboard)/docs/components/<slug>/page.tsx
```

Exemplos:

```
apps/docs/app/(dashboard)/docs/components/citation/page.tsx     ✓
apps/docs/app/(dashboard)/docs/components/accordion/page.tsx    ✓
apps/docs/app/(dashboard)/docs/components/cards/page.tsx        ✓
```

> **Por quê?** A rota estática é pré-renderizada (`○ Static` no build do Next.js), tem melhor performance e isola o conteúdo de cada componente sem lógica de switch/case.

O `[slug]/page.tsx` dinâmico continua funcionando como fallback para componentes que ainda não têm página dedicada.

---

## 2. Imports obrigatórios

```tsx
import { DocCodeBlock }        from "@/components/docs/DocCodeBlock";
import { Callout }             from "@/components/docs/Callout";
import { Pager }               from "@/components/docs/Pager";
import { RightToc }            from "@/components/docs/RightToc";
```

Todos os shared components de documentação ficam em `apps/docs/components/docs/`.

---

## 3. Entradas do TOC

Defina as entradas antes do componente de página. Use IDs em português com hífens:

```tsx
const TOC_ENTRIES = [
  { id: "visao-geral",   label: "Visão geral"    },
  { id: "preview",       label: "Visualização"   },
  { id: "props",         label: "Propriedades"   },
  { id: "uso",           label: "Como usar"      },
  { id: "variantes",     label: "Variantes"      },
  { id: "acessibilidade", label: "Acessibilidade", level: 3 as const },
];
```

A entrada `level: 3` aparece recuada no TOC (sub-item visual).

---

## 4. Layout da página

O wrapper externo é sempre um grid de duas colunas: conteúdo principal + TOC lateral.

```tsx
export default function NomeComponentePage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">...</header>
        <article className="doc-prose">...</article>
      </div>

      <RightToc
        entries={TOC_ENTRIES}
        readTime="~4 min"
        editHref="https://github.com/r0b14/Modfly.ui"
      />
    </div>
  );
}
```

---

## 5. Cabeçalho (`doc-head`)

```tsx
<header className="doc-head">
  <div className="doc-cat">Moléculas · Referência</div>

  <h1 className="doc-title">
    NomeComponente<i>.</i>       {/* o ponto final em itálico é o estilo padrão */}
  </h1>

  <p className="doc-lead">
    Descrição curta do componente — o que faz, onde encaixa, propósito.
  </p>

  <div className="doc-meta">
    <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
    <div className="doc-meta-item">Categoria <b>molécula</b></div>  {/* átomo / molécula / organismo / template */}
    <div className="doc-meta-item">Props <b>N</b></div>
    <div className="doc-meta-item">Status <b style={{ color: "var(--green)" }}>estável</b></div>
  </div>
</header>
```

**Valores válidos para `doc-cat`:**

| Categoria  | Valor                         |
| :--------- | :---------------------------- |
| Átomos     | `Átomos · Referência`         |
| Moléculas  | `Moléculas · Referência`      |
| Organismos | `Organismos · Referência`     |
| Templates  | `Templates · Referência`      |

---

## 6. Seções do artigo

### Estrutura de cada seção

```tsx
<section id="nome-da-secao">
  <h2 className="doc-h2">
    <a className="doc-anchor" href="#nome-da-secao" aria-hidden="true">#</a>
    <span className="doc-h2-num">01 · Contexto</span>
    Título da Seção
  </h2>

  <p className="doc-p">Texto do parágrafo.</p>
  {/* ... conteúdo da seção ... */}
</section>
```

### Numeração obrigatória

| Seção             | ID                | `doc-h2-num`           |
| :---------------- | :---------------- | :--------------------- |
| Visão geral       | `visao-geral`     | `01 · Contexto`        |
| Visualização      | `preview`         | `02 · Demo`            |
| Propriedades      | `props`           | `03 · API`             |
| Como usar         | `uso`             | `04 · Exemplos`        |
| Variantes         | `variantes`       | `05 · Variações`       |

Sub-seções usam `<h3 className="doc-h3">` com `id` e `style={{ scrollMarginTop: "88px" }}`.

---

## 7. Preview inline do componente

**Nunca importe o componente real diretamente** — ele depende de assets (PNG/SVG) e CSS que não funcionam no Next.js App Router sem configuração adicional.

Recrie o componente visualmente com JSX + estilos inline:

```tsx
{/* Caixa de preview */}
<div className="my-7 bg-[var(--paper)] border border-rule rounded-xl overflow-hidden">

  {/* Barra superior tipo Storybook */}
  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-rule bg-[var(--bg)]">
    <span className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mono">
      Preview · NomeComponente / Default
    </span>
    <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[2px] px-[7px] rounded-full border border-rule mono">
      molécula
    </span>
  </div>

  {/* Área branca com o componente recriado */}
  <div className="p-10 bg-white">
    <ComponentePreview prop1="valor" prop2="valor" />
  </div>

  {/* Legenda */}
  <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
    ↑ <span className="text-[var(--ink-2)]">&lt;NomeComponente /&gt;</span> — props usadas
  </div>
</div>
```

### SVGs embutidos

Se o componente usa um SVG de asset, copie o conteúdo do SVG e crie um componente React inline — **não use `<img src="...">`**:

```tsx
function BookGreenIcon() {
  return (
    <svg width="100" height="82" viewBox="0 0 110 90" fill="none" xmlns="...">
      {/* paths do SVG original */}
    </svg>
  );
}
```

O SVG original fica em `apps/curso-template/src/assets/`. Leia o arquivo e copie os paths.

---

## 8. Tabela de propriedades

```tsx
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
        <td>
          <span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>
            nomeProp
          </span>
        </td>
        <td>
          <span className="mono" style={{ fontSize: "12.5px" }}>string</span>
        </td>
        <td>
          <span className="mono text-[var(--muted)]" style={{ fontSize: "12.5px" }}>—</span>
        </td>
        <td>Descrição da prop em português.</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Convenção de cores na coluna Prop:**

- Props **ativas/usadas**: `color: "var(--orange)"`
- Props **reservadas/depreciadas**: `color: "var(--muted)"`

---

## 9. Blocos de código (`DocCodeBlock`)

```tsx
<DocCodeBlock
  filename="Unidade01.tsx"          {/* opcional — mostra barra com macOS dots */}
  raw={`código puro para o botão COPIAR`}
>
  {/* JSX com tokens de sintaxe */}
  <pre style={{ margin: 0 }}>
    <span className="tok-key">import</span>{" "}{"{ "}
    <span className="tok-tag">NomeComponente</span>
    {" }"}{" "}
    <span className="tok-key">from</span>{" "}
    <span className="tok-str">&apos;@modfly/ui&apos;</span>
  </pre>
</DocCodeBlock>
```

**Classes de token disponíveis:**

| Classe       | Cor      | Uso                              |
| :----------- | :------- | :------------------------------- |
| `tok-key`    | laranja  | `import`, `export`, `return`     |
| `tok-str`    | verde    | strings entre aspas              |
| `tok-tag`    | azul     | nomes de componentes JSX         |
| `tok-attr`   | lilás    | nomes de props                   |
| `tok-fn`     | amarelo  | nomes de funções                 |
| `tok-num`    | rosa     | números                          |
| `tok-com`    | cinza    | comentários (itálico)            |
| `tok-op`     | lilás    | operadores                       |
| `code-prompt`| laranja-soft | prompt `$` do terminal (non-selectable) |

---

## 10. Callouts

```tsx
<Callout variant="info"   label="Quando usar">...</Callout>
<Callout variant="tip"    label="Pro tip · texto">...</Callout>
<Callout variant="warn"   label="Atenção · texto">...</Callout>
<Callout variant="danger" label="Não está funcionando?">...</Callout>
```

**Quando usar cada variante:**

| Variante  | Ícone | Cor    | Contexto de uso                                          |
| :-------- | :---- | :----- | :------------------------------------------------------- |
| `info`    | `i`   | azul   | Contexto neutro, "quando usar", comparações              |
| `tip`     | `✓`   | verde  | Boas práticas, atalhos, pro tips                        |
| `warn`    | `!`   | laranja| Erros comuns, passos não-óbvios, configuração crítica    |
| `danger`  | `×`   | rosa   | Erros de runtime, problemas de debug                    |

---

## 11. Listas em prosa

```tsx
{/* Lista não-ordenada */}
<ul className="prose-ul">
  <li className="prose-li">Item com bullet laranja.</li>
</ul>

{/* Lista ordenada */}
<ol className="prose-ol">
  <li className="prose-li">Item numerado com contador CSS.</li>
</ol>
```

---

## 12. Divisor e paginação

```tsx
{/* Divisor com estrela */}
<hr className="doc-hr" />

{/* Navegação prev/next */}
<Pager
  prev={{ href: "/docs/components/figure",        label: "Anterior", title: "Figure" }}
  next={{ href: "/docs/components/indentcitation", label: "Próximo",  title: "IndentCitation" }}
/>
```

---

## 13. Rodapé da página

```tsx
<footer className="pg-foot">
  <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>27 Mai 2026</b></span>
  <a href="https://github.com/r0b14/Modfly.ui/tree/main/apps/curso-template/src/components/molecules/nome"
     target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
  <a href="https://github.com/r0b14/Modfly.ui/issues"
     target="_blank" rel="noopener noreferrer">Reportar problema</a>
  <span className="right">© Modfly UI · MIT</span>
</footer>
```

---

## 14. Classes CSS de referência rápida

Todas as classes abaixo estão definidas em `apps/docs/app/globals.css`:

```
Layout e estrutura
  doc-head          cabeçalho do doc (max-width 760px, mx-auto, border-bottom)
  doc-prose         área do artigo (max-width 760px, mx-auto, padding vertical)
  doc-cat           eyebrow laranja com linha antes (::before)
  doc-title         h1 display em Instrument Serif
  doc-lead          parágrafo de abertura em 19px
  doc-meta          linha de metadados em JetBrains Mono
  doc-meta-item     item individual com dot ::before

Tipografia interna
  doc-h2            h2 com serif 42px + ancla hover
  doc-h2-num        span de numeração acima do h2 (laranja, mono, uppercase)
  doc-h3            h3 geist 21px semi-bold
  doc-p             parágrafo 15.5px com max-width 640px
  doc-anchor        link # que aparece no hover do h2

Tabelas
  table-wrap        container com border-radius e overflow-hidden
  doc-table         tabela com estilo editorial
  doc-status        badge com dot colorido (variantes: .ok .partial .no)

Código
  code-block        container dark com border-radius
  code              área de código #16140f com efeito spotlight
  code-block-head   barra com macOS dots e nome do arquivo
  code-copy         botão COPIAR (variante .copied para feedback verde)

Callout
  callout           container com border-left (variantes: .warn .tip .danger)
  callout-label     label uppercase em monospace

Listas
  prose-ul / prose-ol  listas sem estilo nativo
  prose-li             item com padding-left e bullet laranja

Steps
  steps             container com counter-reset
  step              item com counter-increment e número ::before
  step-title        título do step em serif 26px
  step-desc         descrição 14.5px cinza

Navegação
  pager             grid 2 colunas prev/next
  pager-card        card com hover translateY
  pager-label       legenda ANTERIOR/PRÓXIMO mono uppercase
  pager-title       título em serif 26px

TOC lateral
  toc               container sticky height 100vh
  toc-label         label de seção com linha ::after
  toc-list li       item com border-left ativo
  toc-progress      barra de progresso com percentage

Rodapé
  pg-foot           footer com border-top, flex, max-width 760px
  reading-bar       barra laranja de progresso de leitura (fixed, top:0)
```

---

## 15. Template mínimo

Copie e adapte para iniciar uma nova página:

```tsx
// apps/docs/app/(dashboard)/docs/components/<slug>/page.tsx

import { DocCodeBlock } from "@/components/docs/DocCodeBlock";
import { Callout }      from "@/components/docs/Callout";
import { Pager }        from "@/components/docs/Pager";
import { RightToc }     from "@/components/docs/RightToc";

const TOC_ENTRIES = [
  { id: "visao-geral", label: "Visão geral"  },
  { id: "preview",     label: "Visualização" },
  { id: "props",       label: "Propriedades" },
  { id: "uso",         label: "Como usar"    },
  { id: "variantes",   label: "Variantes"    },
];

export default function NomeComponentePage() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">

        <header className="doc-head">
          <div className="doc-cat">Moléculas · Referência</div>
          <h1 className="doc-title">NomeComponente<i>.</i></h1>
          <p className="doc-lead">Descrição curta do componente.</p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>molécula</b></div>
            <div className="doc-meta-item">Props <b>N</b></div>
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
            <p className="doc-p">Descreva o componente, origem e propósito.</p>
            <Callout variant="info" label="Quando usar">
              <p>Orientação de uso vs outros componentes similares.</p>
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
                  Preview · NomeComponente / Default
                </span>
              </div>
              <div className="p-10 bg-white">
                {/* Recriação visual inline do componente */}
              </div>
              <div className="px-4 py-2 border-t border-rule bg-[var(--bg)] font-jetbrains text-[10px] text-[var(--muted)] mono">
                ↑ <span className="text-[var(--ink-2)]">&lt;NomeComponente /&gt;</span>
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
                  {/* linhas da tabela */}
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
            <DocCodeBlock filename="Unidade01.tsx" raw="// código para copiar">
              <pre style={{ margin: 0 }}>
                {/* tokens JSX */}
              </pre>
            </DocCodeBlock>
          </section>

          <section id="variantes">
            <h2 className="doc-h2">
              <a className="doc-anchor" href="#variantes" aria-hidden="true">#</a>
              <span className="doc-h2-num">05 · Variações</span>
              Variantes
            </h2>
            {/* grid de variantes */}
          </section>

          <hr className="doc-hr" />

          <Pager
            prev={{ href: "/docs/components/anterior", label: "Anterior", title: "Anterior" }}
            next={{ href: "/docs/components/proximo",  label: "Próximo",  title: "Próximo"  }}
          />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>Mai 2026</b></span>
            <a href="https://github.com/r0b14/Modfly.ui" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>

        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~4 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}
```

---

## 16. Checklist antes de publicar

```
[ ] Rota estática criada em /docs/components/<slug>/page.tsx
[ ] Todos os textos em PT-BR (sem mistura com EN)
[ ] doc-cat com a categoria correta (átomo/molécula/organismo/template)
[ ] 5 seções numeradas com IDs corretos para scroll-spy
[ ] TOC_ENTRIES corresponde exatamente aos IDs das seções
[ ] Preview recria o componente inline (sem import do curso-template)
[ ] SVGs embutidos como componentes React (não <img src>)
[ ] Tabela de props cobre todas as props da interface TypeScript
[ ] DocCodeBlock tem prop `raw` com o código limpo para COPIAR
[ ] Pager aponta para os vizinhos corretos na ordem do sidebar
[ ] Build limpo: npx turbo run build --filter=docs sem erros
```

---

## Referências

- Implementação de referência: [`apps/docs/app/(dashboard)/docs/components/citation/page.tsx`](apps/docs/app/(dashboard)/docs/components/citation/page.tsx)
- Shared components: [`apps/docs/components/docs/`](apps/docs/components/docs/)
- CSS das classes: [`apps/docs/app/globals.css`](apps/docs/app/globals.css)
- Padrão das páginas Getting Started: [`apps/docs/app/(dashboard)/docs/getting-started/[slug]/page.tsx`](apps/docs/app/(dashboard)/docs/getting-started/%5Bslug%5D/page.tsx)
