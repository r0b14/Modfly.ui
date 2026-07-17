# Plano de Ação — Modfly UI

### Biblioteca de componentes para cursos e-learning

> **Inspiração:** [Pittaya UI](https://ui.pittaya.org/) — open source, React + TypeScript + Tailwind, CLI de instalação, site de documentação próprio.
> **Princípio:** Uma lib que cresce junto com cada curso produzido.

---

## Status geral

| Fase | Descrição | Status |
|---|---|---|
| 0 | Estrutura do monorepo e site de docs | ✅ Concluída |
| 1 | Migração dos componentes para `packages/ui` | 🔄 Pendente |
| 2 | Deploy (Vercel) + domínio + npm | 🔄 Próximo passo |
| 3 | Questões AVAMEC (`@modfly/ui-avamec`) | ⏳ Planejado |
| 4 | CLI + polimento | ⏳ Planejado |

---

## 1. Nome e Identidade

**Nome: `Modfly UI`**

| Item | Valor |
|---|---|
| Nome da lib | `Modfly UI` |
| Pacote npm | `@modfly/ui` |
| CLI | `npx modfly@latest add accordion` |
| Site de docs | `modfly.design` *(ou `ui.modfly.dev`)* |
| Org GitHub | `github.com/modfly-ui` |
| Slogan | *"Components built for learning."* |

---

## 2. Estrutura do Repositório (Monorepo)

```
modfly-ui/                         ← raiz do monorepo
├── apps/
│   ├── docs/                      ← ✅ site de documentação (Next.js 15)
│   ├── storybook/                 ← ✅ Storybook v8
│   └── curso-template/            ← ✅ template original (fonte dos componentes)
├── packages/
│   ├── ui/                        ← 🔄 biblioteca (estrutura criada, componentes pendentes)
│   └── tsconfig/                  ← ✅ tsconfig compartilhado
├── docs/                          ← ✅ documentação interna (infra, front, projeto, integrações, copyright)
├── LICENSE                        ← ✅
├── turbo.json                     ← ✅
└── pnpm-workspace.yaml            ← ✅
```

---

## 3. Stack Técnica

| Camada | Tecnologia | Status |
|---|---|---|
| Framework da lib | React 18 + TypeScript | ✅ |
| Bundler | tsup (ESM + CJS + .d.ts) | ✅ configurado |
| Estilo | Tailwind CSS | ✅ |
| Documentação | Next.js 15 (App Router) | ✅ rodando |
| Storybook | v8 com `@storybook/react-vite` | ✅ rodando |
| Monorepo | Turborepo + pnpm | ✅ |
| Testes | Vitest + React Testing Library | ⏳ pendente |
| CI/CD | GitHub Actions | ⏳ pendente |
| Deploy docs | Vercel | 🔄 próximo passo |
| Publicação npm | `@modfly/ui` | 🔄 próximo passo |

---

## 4. Site de Documentação — O que foi feito

### Infraestrutura visual

- ✅ Layout 3 colunas: sidebar (280px) | conteúdo | TOC lateral (260px)
- ✅ Sidebar com navegação por seções e estado ativo
- ✅ Topbar com breadcrumb dinâmico via `usePathname`
- ✅ Barra de leitura (ReadingBar) com progresso de scroll
- ✅ Animações de entrada: sidebar (slide da esquerda) + topbar (fade-down)
- ✅ Design system completo em `globals.css` (tokens, classes doc-*, tabelas, code blocks)

### Shared components criados (`apps/docs/components/docs/`)

| Componente | Função |
|---|---|
| `ReadingBar` | barra laranja de progresso de leitura (fixa no topo) |
| `Callout` | callouts info / warn / tip / danger |
| `DocCodeBlock` | bloco de código dark com botão COPIAR e efeito spotlight |
| `PackageManagerTabs` | tabs pnpm / npm / yarn / bun |
| `RightToc` | TOC lateral com scroll-spy e barra de progresso |
| `Pager` | navegação prev / next entre páginas |

### Páginas implementadas

| Rota | Status | Observação |
|---|---|---|
| `/` | ✅ | landing page completa em PT-BR |
| `/docs/getting-started/installation` | ✅ | página completa (5 seções, tabela de requisitos, steps, preview UnityBanner) |
| `/docs/getting-started/introduction` | ⏳ | placeholder |
| `/docs/getting-started/tailwind-setup` | ⏳ | placeholder |
| `/docs/getting-started/theming` | ⏳ | placeholder |
| `/docs/components/citation` | ✅ | página completa (5 seções, preview inline, SVG embutido) |
| `/docs/components/[slug]` | 🔄 | fallback genérico para os demais |

### Padrão de documentação de componentes

Definido em [`padrao-documentacao-componentes.md`](../front/padrao-documentacao-componentes.md). Toda página de componente segue:

1. **Rota estática** `apps/docs/app/(dashboard)/docs/components/<slug>/page.tsx`
2. **Layout** `grid grid-cols-[1fr_260px]` + `<RightToc />`
3. **5 seções numeradas** em PT-BR: Visão geral · Demo · API · Exemplos · Variantes
4. **Preview inline** — componente recriado visualmente sem importar do curso-template
5. **SVGs embutidos** como componentes React (não `<img src>`)

---

## 5. Inventário de Componentes

### Moléculas

| Componente | Doc page | Migrado para `packages/ui` | Story |
|---|---|---|---|
| `Citation` | ✅ | ❌ | ✅ |
| `Cards` | ❌ | ❌ | ✅ |
| `CardFlip` | ❌ | ❌ | ✅ |
| `QuoteText` | ❌ | ❌ | ✅ |
| `Figure` | ❌ | ❌ | ✅ |
| `IndentCitation` | ❌ | ❌ | ✅ |
| `ListModule` | ❌ | ❌ | ✅ |
| `MiniCards` | ❌ | ❌ | ✅ |
| `Embed` | ❌ | ❌ | ✅ |
| `ImageList` | ❌ | ❌ | ✅ |

### Átomos

| Componente | Doc page | Migrado para `packages/ui` | Story |
|---|---|---|---|
| `ButtonLink` | ❌ | ❌ | ✅ |
| `ButtonPdfDownload` | ❌ | ❌ | — |
| `Tooltip` | ❌ | ❌ | — |
| `Postit` | ❌ | ❌ | — |
| `Check` | ❌ | ❌ | — |

### Organismos

| Componente | Doc page | Migrado para `packages/ui` | Story |
|---|---|---|---|
| `Accordion` | ❌ | ❌ | ✅ |
| `StarList` | ❌ | ❌ | — |
| `TimelineWithCards` | ❌ | ❌ | — |
| `HistoryTopics` | ❌ | ❌ | — |
| `LearningBlock` | ❌ | ❌ | ✅ |

### Templates

| Componente | Doc page | Migrado para `packages/ui` | Story |
|---|---|---|---|
| `Carousel` | ❌ | ❌ | ✅ |
| `Slider` | ❌ | ❌ | ✅ |
| `Pagination` | ❌ | ❌ | ✅ |
| `UnityBanner` | ❌ | ❌ | — |
| `Glossary` | ❌ | ❌ | — |

### @modfly/ui-avamec (sub-pacote)

| Componente | Status |
|---|---|
| `QuestionOption` | ⏳ pendente |
| `QuestionMultipleAnswer` | ⏳ pendente |
| `QuestionTrueOrFalse` | ⏳ pendente |
| `QuestionGrid` | ⏳ pendente |
| `QuestionCorrelation` | ⏳ pendente |
| `QuestionDragDrop` | ⏳ pendente |
| `QuestionWritten` | ⏳ pendente |
| `SendActivityButton` | ⏳ pendente |

---

## 6. Próximos passos — Deploy e publicação

### 6.1 Vercel (docs)

Dois projetos separados no painel da Vercel:

| Projeto | Root directory | URL |
|---|---|---|
| `modfly-docs` | `apps/docs` | modfly.design (ou subdomínio provisório) |
| `modfly-storybook` | `apps/storybook` | storybook.modfly.design |

**Configuração do projeto `modfly-docs` na Vercel:**

```
Framework preset : Next.js
Root directory   : apps/docs
Build command    : (deixar padrão — Vercel detecta automaticamente)
Output directory : (deixar padrão)
```

O Vercel tem suporte nativo a Turborepo — basta conectar o repositório GitHub.

**Para o Storybook**, alternativa gratuita e melhor integrada: **Chromatic** (chromatic.com) — hospedagem oficial do Storybook com review visual por PR.

### 6.2 Domínio

| Opção | Preço | Recomendação |
|---|---|---|
| `modfly.design` | ~$35/ano | ✅ primeira escolha |
| `modfly-ui.com` | ~$15/ano | alternativa |
| `ui.modfly.dev` | ~$12/ano | econômica |

Comprar em **Porkbun** (porkbun.com) e apontar o DNS para Vercel via CNAME.

### 6.3 npm

```bash
# 1. Criar conta em npmjs.com
# 2. Criar organização @modfly (gratuito para pacotes públicos)
# 3. Primeiro publish manual

cd packages/ui
pnpm build
npm publish --access public
```

### 6.4 GitHub Organization

1. Criar organização `modfly-ui` no GitHub
2. Transferir (ou fazer fork) do repo atual
3. Configurar branch protection na `main`

---

## 7. Decisões técnicas de migração

### 7.1 Assets — ver [`guia-assets-png-svg.md`](../front/guia-assets-png-svg.md) para detalhes completos

| Asset | Ação |
|---|---|
| SVG simples (ícones, setas) | copiar para `packages/ui/src/components/[Nome]/assets/` |
| PNG simples (banners vetorizados) | converter para SVG antes de migrar |
| PNG complexo / foto | manter PNG, copiar junto |
| Imagem de conteúdo do curso | virar prop `src: string` |
| Logos de terceiros (MEC, UFPE) | permanecem em `apps/curso-template` |

### 7.2 Tailwind no consumidor

O consumidor precisa adicionar ao `content` do tailwind.config:

```js
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@modfly/ui/dist/**/*.js",
]
```

### 7.3 Padrão de exportação

```ts
// packages/ui/src/index.ts
export { Accordion }    from './components/organisms/accordion'
export { ButtonLink }   from './components/atoms/buttonLink'
export { Cards }        from './components/molecules/cards'
export { Citation }     from './components/molecules/citation'
// ...
export type { AccordionProps } from './components/organisms/accordion'
```

### 7.4 Remover react-router-dom do core

```ts
// Expor interface injetável em vez de acoplar ao react-router
<Pagination onPageChange={(page) => navigate(page)} />
```

---

## 8. Roadmap de páginas de documentação

Prioridade sugerida para criar as próximas páginas seguindo [`padrao-documentacao-componentes.md`](../front/padrao-documentacao-componentes.md):

### Getting Started (completa a seção)

1. Introduction
2. Tailwind setup
3. Theming

### Moléculas — do mais simples ao mais complexo

1. QuoteText — sem assets, props simples
2. Figure — sem assets
3. ListModule — sem assets
4. Cards — assets PNG a converter
5. CardFlip — assets PNG a verificar
6. IndentCitation (4 variantes)
7. MiniCards

### Átomos — páginas de doc

1. ButtonLink
2. Tooltip / Postit

### Organismos — páginas de doc

1. Accordion (22 variantes — o mais complexo)
2. LearningBlock (SVGR)

---

## 9. CI/CD (após deploy)

```yaml
# .github/workflows/ci.yml
jobs:
  build:   # tsc + tsup
  lint:    # eslint
  # release: # publica no npm via Changesets
```

Usar **Changesets** para versionamento semântico:

```bash
pnpm changeset        # descreve a mudança
pnpm version-packages # atualiza versions
pnpm release          # publica no npm
```

---

## 10. Custos estimados

| Item | Custo | Frequência |
|---|---|---|
| Domínio `modfly.design` | ~$35 | Anual |
| Vercel (docs + storybook) | $0 | Free tier |
| Chromatic (Storybook hosting) | $0 | Free tier (5k snapshots/mês) |
| GitHub | $0 | Free tier |
| npm `@modfly` org pública | $0 | Gratuito |
| GitHub Actions | $0 | Free para repos públicos |
| **Total** | **~$35/ano** | |

---

## 11. Fluxo após a lib estar no ar

A cada novo curso produzido:

```
1. Desenvolver componente em apps/curso-template
         ↓
2. Avaliar: é genérico?
   → SIM → migrar para packages/ui
   → NÃO → manter só no curso
         ↓
3. Abrir PR no monorepo
   - Componente + assets em packages/ui
   - Story no Storybook
   - Página de docs seguindo docs/front/padrao-documentacao-componentes.md
   - Changeset (patch/minor/major)
         ↓
4. Review + merge → CI roda → npm publica → Vercel deploya
         ↓
5. No próximo curso: instalar @modfly/ui e importar
```

---

## 12. Fluxo saudável antes da publicação pública

O fluxo correto separa fonte, validação e documentação:

```text
apps/curso-template ou novo componente isolado
         ↓
apps/storybook valida visualmente
         ↓
packages/ui vira a fonte consumível da biblioteca
         ↓
apps/docs documenta a API pública
```

Decisão: **Storybook e Docs são consumidores/renderizadores; `packages/ui` é a fonte da biblioteca.**

O Storybook pode e deve renderizar o componente antes da página pública, porque ele é o ambiente de validação visual. Ele não deve ser tratado como fornecedor da renderização pública nem como gerador do pacote. A documentação pública pode ter previews próprios enquanto houver limitações de assets/CSS no Next.js, mas esses previews precisam ser conferidos contra as stories aprovadas.

Plano detalhado registrado em [`fluxo-saudavel-componentes.md`](fluxo-saudavel-componentes.md).

---

## 13. Referências

- [Pittaya UI](https://ui.pittaya.org/) — inspiração direta
- [Shadcn UI](https://ui.shadcn.com/) — modelo CLI "copiar código"
- [Radix UI](https://www.radix-ui.com/) — acessibilidade como base
- [Turborepo Docs](https://turbo.build/repo) — setup do monorepo
- [tsup](https://tsup.egoist.dev/) — bundler da lib
- [Changesets](https://github.com/changesets/changesets) — versionamento semântico
- [Porkbun](https://porkbun.com) — compra de domínio
- [Chromatic](https://www.chromatic.com/) — hospedagem do Storybook

