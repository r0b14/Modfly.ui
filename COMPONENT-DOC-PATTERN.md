# Padrão de página de documentação de componente

Este documento formaliza a estrutura já usada nas páginas de componente de `apps/docs`
(referência viva: `apps/docs/app/(dashboard)/docs/components/buttonlink/page.tsx`). Toda
página nova deve seguir exatamente este padrão — não é um guia opcional.

Contexto de arquitetura: `docs/projeto/fluxo-saudavel-componentes.md`. `apps/docs` documenta
a API pública exportada por `packages/ui/src/index.ts`; nunca documente uma prop que não
existe no componente real.

## Onde entra cada página

Rota estática obrigatória (tem prioridade sobre a rota dinâmica de fallback):

```
apps/docs/app/(dashboard)/docs/components/<slug>/page.tsx
```

`<slug>` é o nome do componente em minúsculas, sem separador (ex.: `buttonlink`, `cardflip`,
`imagelist`). A rota dinâmica `[slug]/page.tsx` só existe como fallback genérico para
componentes ainda sem página própria — criar a página estática não exige tocar nela nem na
allowlist `VALID_COMPONENTS`.

## Componentes compartilhados (`apps/docs/components/docs/`)

| Componente | Props | Uso |
|---|---|---|
| `RightToc` | `entries: {id, label, level?: 2\|3}[]`, `readTime?` (padrão `"~5 min"`), `editHref?` | TOC lateral com scroll-spy e barra de progresso. Renderizado fora de `<article>`, como segunda coluna do grid. |
| `Pager` | `prev?: {href, label, title}`, `next?: {href, label, title}` | Navegação anterior/próximo, rodapé do artigo. |
| `DocCodeBlock` | `filename?`, `raw: string` (usado no botão copiar), `children` (JSX tokenizado à mão) | Bloco de código com header "traffic lights" e botão copiar. |
| `Callout` | `variant?: "info"\|"warn"\|"tip"\|"danger"` (padrão `"info"`), `label?` (padrão por variante: Note/Warning/Tip/Danger), `children` | Caixa de destaque dentro do prosa. |

Não existe um componente `DocTable` dedicado — a tabela de props é `<table className="doc-table">`
cru, escrita diretamente em cada `page.tsx`, dentro de `<div className="table-wrap">`.

## Estrutura obrigatória do arquivo

```tsx
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

export default function <Nome>Page() {
  return (
    <div className="grid grid-cols-[1fr_260px] min-h-screen">
      <div className="min-w-0 px-10">
        <header className="doc-head">
          <div className="doc-cat">{/* ex.: "Átomos · Referência" */}</div>
          <h1 className="doc-title"><Nome><i>.</i></h1>
          <p className="doc-lead">{/* 1-2 frases: o que é e quando usar */}</p>
          <div className="doc-meta">
            <div className="doc-meta-item">Pacote <b>@modfly/ui</b></div>
            <div className="doc-meta-item">Categoria <b>{/* átomo | molécula | organismo | template */}</b></div>
            <div className="doc-meta-item">Props <b>{/* contagem real */}</b></div>
            <div className="doc-meta-item">Status <b style={{ color: "var(--green)" }}>estável</b></div>
          </div>
        </header>

        <article className="doc-prose">
          {/* 01 — Visão geral (id="visao-geral") */}
          {/* 02 — Preview (id="preview") */}
          {/* 03 — Props (id="props") */}
          {/* 04 — Como usar (id="uso") */}
          {/* 05 — Variantes (id="variantes"), com <h3 id="acessibilidade"> dentro */}

          <hr className="doc-hr" />
          <Pager prev={{ ... }} next={{ ... }} />

          <footer className="pg-foot">
            <span>Atualizado em <b style={{ color: "var(--ink-2)" }}>DD Mmm AAAA</b></span>
            <a href="https://github.com/r0b14/Modfly.ui/tree/main/packages/ui/src/components/<layer>/<name>" target="_blank" rel="noopener noreferrer">Ver fonte ↗</a>
            <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">Reportar problema</a>
            <span className="right">© Modfly UI · MIT</span>
          </footer>
        </article>
      </div>

      <RightToc entries={TOC_ENTRIES} readTime="~3 min" editHref="https://github.com/r0b14/Modfly.ui" />
    </div>
  );
}
```

## As 5 seções (cada `<h2>` segue este padrão de anchor + número)

```tsx
<section id="<id>">
  <h2 className="doc-h2">
    <a className="doc-anchor" href="#<id>" aria-hidden="true">#</a>
    <span className="doc-h2-num">0N · <rótulo curto></span>
    <Título da seção>
  </h2>
  {/* conteúdo */}
</section>
```

1. **`01 · Contexto` — Visão geral** (`id="visao-geral"`): parágrafo explicando o que o
   componente renderiza e como as props principais se combinam, seguido de um `Callout
   variant="info"` com "quando usar" (e, se fizer sentido, qual componente irmão usar em vez
   deste).
2. **`02 · Demo` — Visualização** (`id="preview"`): preview inline dentro de um cartão
   `bg-[var(--paper)] border border-rule rounded-xl` com um header estilo Storybook (nome do
   preview + chip de categoria) e um rodapé listando as props usadas. Ver seção "Preview" abaixo.
3. **`03 · API` — Propriedades** (`id="props"`): `<table className="doc-table">` dentro de
   `<div className="table-wrap">`, colunas `Prop | Tipo | Padrão | Descrição`, nome da prop em
   `<span className="mono" style={{ fontSize: "12.5px", color: "var(--orange)" }}>`. A lista de
   props e tipos vem do `<Name>Props` real exportado em `packages/ui/src/index.ts` — nunca
   inventar ou omitir. Pode terminar com um `Callout variant="warn"` para ressalvas de
   implementação (ex.: fundo é SVG, não CSS).
4. **`04 · Exemplos` — Como usar** (`id="uso"`): um `DocCodeBlock` com `filename` e `raw` (string
   crua do exemplo, usada pelo botão copiar) **e** o mesmo código tokenizado manualmente como
   `children` (spans `tok-key`, `tok-tag`, `tok-str`, `tok-attr`, `tok-num`, `tok-fn` — não há
   highlighter automático). As duas versões devem ficar idênticas.
5. **`05 · Variações` — Variantes** (`id="variantes"`): grid (`grid grid-cols-3 gap-5`, ajustar
   colunas ao nº de variantes) com um cartão por variação relevante, cada um com header
   (indicador de cor + rótulo) e o preview em tamanho reduzido. Termina com
   `<h3 id="acessibilidade" className="doc-h3" style={{ scrollMarginTop: "88px" }}>Acessibilidade</h3>`
   e uma `<ul className="prose-ul">` de notas de acessibilidade reais do componente (não genéricas).

## Preview: import real vs. recriado

Regra do doc de arquitetura: o preview deve representar fielmente `packages/ui`, e — quando
recriado manualmente — deve ser conferido contra a story aprovada no Storybook.

- **Padrão atual (usado em todos os 8 componentes existentes) — obrigatório por enquanto:** o
  preview é uma função local no próprio `page.tsx` (ex. `ButtonLinkPreview`) que recria o
  componente em JSX, reaproveitando os **mesmos arquivos SVG do componente real**, copiados para
  `apps/docs/public/<slug>/*.svg` — nunca redesenhados à mão. Isso evita divergência visual sem
  depender de importar o pacote.
- **Import direto de `@modfly/ui` foi testado e não funciona hoje.** Causa raiz confirmada: o
  build do pacote (`tsup`) empacota todos os componentes num único `dist/index.mjs`, sem
  code-splitting por componente e sem diretivas `"use client"` nos componentes que usam hooks
  (`useState` etc.). O App Router do Next.js (`apps/docs`, Server Components por padrão) não
  consegue isolar, dentro desse arquivo único, quais exports precisam de client boundary — ele
  rejeita a importação de qualquer símbolo do módulo com o erro *"You're importing a component
  that needs `useState`... mark the file with the `use client` directive"*, mesmo importando um
  componente sem estado (ex.: `Check`). Resolver isso exigiria mudar o build de `packages/ui`
  para gerar saída por componente com `"use client"` nos que precisam — fora do escopo deste
  fluxo de docs. Até isso ser feito, siga o padrão de recriação com assets copiados.
- Em qualquer um dos dois casos: depois de criar/atualizar a página, abra a story equivalente
  no Storybook (`apps/storybook`) e confira lado a lado antes de considerar a página pronta.

## Checklist antes de dar como pronta

- [ ] Rota estática criada em `apps/docs/app/(dashboard)/docs/components/<slug>/page.tsx`.
- [ ] Todas as props documentadas existem de fato em `<Name>Props` (`packages/ui`).
- [ ] Preview conferido visualmente contra a story do Storybook.
- [ ] Nomes de componente/props revisados (fazem sentido em termos de frontend? Se algo parecer
      estranho, não renomear silenciosamente — reportar como nota separada).
- [ ] `Pager` `prev`/`next` apontando para os componentes vizinhos corretos.
- [ ] `TOC_ENTRIES` bate com os `id` reais das seções/subsseções do artigo.
