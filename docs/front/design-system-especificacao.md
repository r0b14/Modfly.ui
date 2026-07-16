# Design System — Modfy UI

> Biblioteca de componentes React para cursos e-learning.  
> Stack: React 18 + TypeScript + Tailwind CSS · Monorepo pnpm + Turborepo · Bundler tsup  
> Pacote: `@modfy/ui` · Slogan: *"Components built for learning."*

---

## 1. Visão Geral do Projeto

O **Modfy UI** é uma biblioteca de componentes React open source voltada para produção de cursos e-learning, com suporte à plataforma AVAMEC (governo brasileiro). O repositório é um monorepo com a seguinte divisão:

| Workspace | Caminho | Função |
|---|---|---|
| `packages/ui` | Biblioteca principal (`@modfy/ui`) | Componentes genéricos exportados via npm |
| `packages/@legado` | Código legado | Fonte de migração — componentes originais com assets |
| `packages/tsconfig` | Config TypeScript compartilhada | Garante consistência no monorepo |
| `apps/curso-template` | App React (Create React App) | Template de curso que consome os componentes |
| `apps/docs` | Next.js 15 (a criar) | Site de documentação pública |
| `apps/storybook` | Storybook v8 | Dev e testes visuais isolados |

### Filosofia central

*"A biblioteca cresce com o curso."* — Todo componente novo criado para um curso deve ser avaliado para migrar para `@modfy/ui`. Componentes AVAMEC vivem em um sub-pacote separado (`@modfy/ui-avamec`) para não contaminar a lib genérica com dependências de plataforma.

---

## 2. Estrutura de Pastas Canônica

```
modfy-ui/
├── apps/
│   ├── curso-template/         ← React app (CRA) do template de curso
│   ├── docs/                   ← Next.js 15 — site de documentação (a criar)
│   └── storybook/              ← Storybook v8
├── packages/
│   ├── ui/                     ← 📦 @modfy/ui — A BIBLIOTECA
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── atoms/      ← ButtonLink, Tooltip, Postit, Check
│   │   │   │   ├── molecules/  ← Cards, CardFlip, QuoteText, Figure, Citation
│   │   │   │   ├── organisms/  ← Accordion, StarList, TimelineWithCards, LearningBlock
│   │   │   │   └── templates/  ← Carousel, Slider, Pagination, UnityBanner, Glossary
│   │   │   ├── assets/         ← Assets agrupados por componente
│   │   │   ├── hooks/          ← useMediaQuery, useModfy (sem react-router)
│   │   │   └── index.ts        ← Ponto de entrada único
│   │   ├── package.json
│   │   └── tsup.config.ts
│   ├── ui-avamec/              ← @modfy/ui-avamec — Questões AVAMEC (a criar)
│   │   └── src/components/
│   │       ├── QuestionOption/
│   │       ├── QuestionMultipleAnswer/
│   │       ├── QuestionTrueOrFalse/
│   │       ├── QuestionGrid/
│   │       ├── QuestionCorrelation/
│   │       ├── QuestionDragDrop/
│   │       ├── QuestionWritten/
│   │       └── SendActivityButton/
│   ├── @legado/                ← Código legado (referência, não modificar)
│   └── tsconfig/               ← tsconfig base compartilhado
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## 3. Stack Técnica

| Camada | Tecnologia | Observações |
|---|---|---|
| Linguagem | TypeScript 5 | Strict mode |
| Framework | React 18 | peerDependency na lib |
| Estilo | Tailwind CSS (principal) | Consumidor deve incluir `node_modules/@modfy/ui/dist/**/*.js` no `content` |
| Estilo (exceções) | CSS Modules | Apenas quando Tailwind não é suficiente (ex: animações complexas) |
| Bundler da lib | tsup | Gera ESM + CJS + `.d.ts` |
| Monorepo | pnpm workspaces + Turborepo | Cache de builds, scripts paralelos |
| Testes | Vitest + React Testing Library | |
| Storybook | v8 | Stories no formato CSF3 |
| CI/CD | GitHub Actions | Build + test + lint + release |
| Deploy docs | Vercel | Free tier, integra com GitHub |
| Publicação | npm scoped `@modfy/ui` | |

### Configuração do `package.json` da lib

```json
{
  "name": "@modfy/ui",
  "version": "0.1.0",
  "description": "Components built for learning.",
  "keywords": ["react", "ui", "components", "e-learning", "tailwind"],
  "license": "MIT",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"],
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18"
  }
}
```

---

## 4. Convenções de Código

### Nomenclatura

- Componentes: **PascalCase** (`ButtonLink`, `CardFlip`, `QuestionOption`)
- Props interfaces: `<ComponentName>Props` (`ButtonLinkProps`, `CardFlipProps`)
- Hooks: **camelCase** com prefixo `use` (`useModfy`, `useMediaQuery`)
- Assets: **camelCase** descritivo (`arrowDownYellow`, `bgPurple`, `topBlue`)
- CSS Modules: `ComponentName.module.css`
- Stories: `ComponentName.stories.tsx`

### Padrão de exportação em `packages/ui/src/index.ts`

```ts
// Atoms
export { ButtonLink } from './components/atoms/buttonLink'
export type { ButtonLinkProps } from './components/atoms/buttonLink'

export { Tooltip } from './components/atoms/tooltip'
export type { TooltipProps } from './components/atoms/tooltip'

// Molecules
export { Cards } from './components/molecules/cards'
export type { CardsProps } from './components/molecules/cards'

// Organisms
export { Accordion } from './components/organisms/accordion'
export type { AccordionProps } from './components/organisms/accordion'

// Templates
export { Pagination } from './components/templates/pagination'
export type { PaginationProps } from './components/templates/pagination'

// Hooks
export { useModfy } from './hooks/useModfy'
```

### Estrutura de cada componente

```
components/atoms/buttonLink/
  ├── ButtonLink.tsx       ← Componente principal
  ├── ButtonLink.test.tsx  ← Testes com Vitest + RTL
  ├── index.ts             ← Re-export limpo
  └── (assets aqui se forem exclusivos do componente)
```

---

## 5. Design Tokens (Paleta de Cores dos Componentes)

Os componentes do legado usam uma paleta consistente com 3 esquemas de cor base. Ao migrar, esses valores devem ser mapeados como variantes via props, não hardcoded.

### Esquemas de Cor por Componente

| Esquema | Cor Principal | Uso |
|---|---|---|
| **blue** | `#7DB0EC` / `#298BCA` | Cards, ButtonLink azul, Accordion azul |
| **green** | `#8FCD79` / `#649753` | Cards, Accordion verde |
| **orange** | `#FFB861` / `#C66A4A` | Cards, Accordion laranja |
| **yellow** | Imagem PNG (botão) | ButtonLink amarelo |
| **pink** | Imagem PNG / `#ED1B69` | ButtonLink rosa, Accordion rosa |
| **purple** | `#bgPurple.png` | Accordion roxo |

### Cores dos Textos

- Texto principal: `text-black` / `#000000`
- Texto em fundos escuros: `text-white` / `#FFFFFF`
- Títulos dos Accordions com `titleColor` e `titleColor2` (props customizáveis)

---

## 6. Inventário Completo de Componentes

### 6.1 Atoms

#### `ButtonLink`

Botão/link com background de imagem (PNG ou SVG), suporta hover com troca de imagem, 3 variantes de ícone e 3 variantes de cor.

**Props:**

```ts
interface ButtonLinkProps {
  variant: 1 | 2 | 3            // 1: link/clique, 2: documento, 3: vídeo
  variantmodel?: 1 | 2 | 3     // 1: azul, 2: amarelo, 3: rosa
  text?: string                  // Suporta HTML via dangerouslySetInnerHTML
  textColor?: string
  textClassName?: string
  href?: string
  onClick?: () => void
  target?: '_blank' | '_self' | '_parent' | '_top'
  className?: string
  width?: string | number        // Controla qual PNG amarelo usar
  height?: string | number
}
```

**Comportamento:** Renderiza como `<a>` se `href` presente, senão `<button>`. Hover troca o PNG de background. A variante amarela (`variantmodel=2`) seleciona o PNG baseado no `width` (233px, 253px, 377px, 405px, largo).

**Assets necessários:** `buttomlink/` — 10 PNGs amarelos (estados normal/hover por largura), 2 PNGs azuis, 2 PNGs rosa, 5 SVGs de ícone.

---

#### `ButtonPdfDownload`

Botão específico para download de PDF, imagem de background `pdfDownload.png`.

---

#### `Tooltip`

Tooltip simples que exibe conteúdo ao hover.

---

#### `Postit`

Componente visual de post-it, estilizado como nota adesiva. Usa CSS Modules (`Postit.module.css`).

---

#### `Check`

Componente de checkbox ou ícone de verificação.

---

#### `SendActivityButton` *(→ `@modfy/ui-avamec`)*

Botão de envio de atividade integrado à `BridgeRestApi` AVAMEC.

---

### 6.2 Molecules

#### `Cards`

Cards expansíveis com imagem, texto e área expandida. Accordion por clique no botão circular inferior.

**Props:**

```ts
interface CardsProps {
  cardsData: Array<[
    nome: string,           // Título do card
    texto: string,          // Texto resumido
    imagemURL: string,      // URL da imagem central
    tipo: 1 | 2 | 3,       // 1: blue, 2: green, 3: orange
    textoExpandido: string  // HTML da área expandida
  ]>
}
```

**Comportamento:** Um card aberto por vez. No mobile, o conteúdo expandido aparece logo abaixo do card. No desktop, aparece em um painel abaixo de todos os cards. Responsivo com breakpoint `md` (768px). Dimensões fixas do card: 353×599px.

**Assets necessários:** `cards/` — 3 PNGs de topo (topBlue, topGreen, topOrange), 6 SVGs de botão (open/closed × blue/green/orange).

---

#### `CardFlip`

Card com animação de virar (flip 3D). Frente e verso com conteúdo diferente.

**Assets necessários:** `cardFlip/` — 2 PNGs de fundo (bottomBlue, bottomGreen), 2 PNGs de botão.

---

#### `QuoteText`

Citação estilizada com aspas decorativas e texto do autor.

**Assets necessários:** `QuoteText/assets/quote.png`

---

#### `Figure`

Componente de figura com imagem, legenda e créditos. Tem story no Storybook (`Figure.stories.ts`).

---

#### `Citation`

Citação bibliográfica formatada (ABNT ou livre).

---

#### `IndentCitation`

Citação com recuo de parágrafo (citação longa, estilo ABNT). Variantes: `IndentCitationBg` (com fundo), `IndentCitationImg` (com imagem), `IndentCitationTitle` (com título).

---

#### `ListModule`

Lista temática com estilo visual próprio (não é um `<ul>` simples).

---

#### `MiniCards`

Cards menores, usados em grupos para apresentar itens de uma lista visualmente.

---

#### `Embed`

Embed de conteúdo externo (iframe, vídeo, etc). Possui `HowToUse.tsx` de exemplo.

---

#### `ImageList`

Lista de imagens com layout grid ou flex.

---

### 6.3 Organisms

#### `Accordion`

O componente mais complexo da biblioteca. 22+ variantes visuais, cada uma com seu conjunto de assets (SVG/PNG para fundo fechado, fundo aberto, seta).

**Props:**

```ts
interface AccordionProps {
  title: string
  bgColor: number            // Número da variante visual (1–22+)
  bgInsideColor?: string     // Cor do interior quando aberto
  titleColor?: string        // Cor do título (ex: '#FFFFFF')
  titleColor2?: string       // Cor secundária do título
  variant?: 'static' | 'dynamic'  // static: sempre aberto, dynamic: toggle
  children: React.ReactNode
}
```

**Variantes documentadas (do Storybook):**

- `Type1`: bgColor=1, bgInsideColor="#FFEDB8", titleColor="#FFFFFF", variant="static"
- `Type2`: bgColor=1, bgInsideColor="#DAF8F8", titleColor="#FFFFFF", titleColor2="#2A5C93", variant="dynamic"
- E muitas outras conforme `Accordion.styles.ts`

**Assets necessários:** `accordion/assets/` — ~50 arquivos (arrowOne.svg–arrowTen.svg, background1–11.png/svg, versões open/closed, mobile, detalhes decorativos, ícones de + e −).

**Regra de migração:** SVGs simples → componentes React (`<ArrowDownIcon />`). PNGs complexos (backgrounds texturizados) → manter como arquivo, bundlar via tsup.

---

#### `StarList`

Lista com marcadores estilizados em forma de estrela ou ícone temático.

---

#### `TimelineWithCards`

Timeline horizontal ou vertical com cards em cada ponto.

---

#### `HistoryTopics`

Componente de tópicos históricos/cronológicos com navegação entre itens.

---

#### `LearningBlock`

Bloco de aprendizagem — destaca um conceito, objetivo ou resultado de aprendizagem. Usa `LearningBlock.css`.

---

#### `QuestionOption` *(→ `@modfy/ui-avamec`)*

Questão de múltipla escolha com uma resposta correta. Integrado à `BridgeRestApi`.

---

#### `QuestionMultipleAnswer` *(→ `@modfy/ui-avamec`)*

Questão com múltiplas respostas corretas.

---

#### `QuestionTrueOrFalse` *(→ `@modfy/ui-avamec`)*

Questão Verdadeiro ou Falso.

---

#### `QuestionGrid` *(→ `@modfy/ui-avamec`)*

Grade de questões.

---

#### `QuestionCorrelation` *(→ `@modfy/ui-avamec`)*

Correlação de itens (coluna A ↔ coluna B).

---

#### `QuestionDragDrop` *(→ `@modfy/ui-avamec`)*

Arrasta e solta.

---

#### `QuestionWritten` *(→ `@modfy/ui-avamec`)*

Questão dissertativa (textarea com envio).

---

### 6.4 Templates

#### `Carousel`

Carrossel de conteúdo com navegação por setas e/ou dots.

---

#### `Slider`

Slider de conteúdo (pode ser similar ao Carousel ou um slider de range/valor).

---

#### `Pagination`

Navegação entre páginas do curso. **Crítico:** não deve depender de `react-router-dom`. Expor interface injetável:

```ts
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void  // Sem acoplamento ao router
  onNextPage?: () => void
  onPreviousPage?: () => void
}
```

---

#### `UnityBanner`

Banner de apresentação de unidade/módulo do curso.

---

#### `Glossary`

Componente de glossário com busca e listagem alfabética de termos.

---

## 7. Hook `useModfy`

O hook central de navegação do curso. Na lib, deve ser **desacoplado do `react-router-dom`** e exportar apenas a lógica:

```ts
// packages/ui/src/hooks/useModfy.ts
// Versão da lib — sem react-router, recebe callbacks externos
interface UseModfyOptions {
  currentModule: number
  currentPage: number
  onNavigate: (params: { module: number; page: number }) => void
}

export const useModfy = ({ currentModule, currentPage, onNavigate }: UseModfyOptions) => {
  function nextPage() {
    window.scrollTo(0, 0)
    onNavigate({ module: currentModule, page: currentPage + 1 })
  }

  function previousPage() {
    window.scrollTo(0, 0)
    onNavigate({ module: currentModule, page: currentPage - 1 })
  }

  function navigateToPage(params: { module: number; page: number }) {
    window.scrollTo(0, 0)
    onNavigate(params)
  }

  return { nextPage, previousPage, navigateToPage }
}
```

O `apps/curso-template` pode ter seu próprio wrapper que usa `useNavigate` do react-router e passa o callback.

---

## 8. Tratamento de Assets

### Regra de decisão

| Tipo de asset | Abordagem |
|---|---|
| SVG simples (seta, ícone) | Converter em componente React `<ArrowDownIcon />` |
| SVG complexo (background decorativo) | Manter como arquivo, importar via `import bg from './bg.svg'` |
| PNG simples | Avaliar conversão para SVG |
| PNG texturizado/fotografado | Manter como PNG, bundlar com tsup |

### Organização em `packages/ui/src/assets/`

```
assets/
  accordion/
    arrowDown.svg        ← SVG como componente React
    background1.png      ← PNG texturizado mantido como arquivo
    background2_open.png
    ...
  buttonLink/
    buttomBlue.png
    buttomBlue2.png
    ...
  cards/
    topBlue.png
    openBlue.svg
    ...
  cardFlip/
    bottomBlue.png
    ...
```

### Configuração do `tsup.config.ts` para assets

```ts
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  loader: {
    '.png': 'file',
    '.svg': 'file',
  },
  publicDir: 'src/assets',
})
```

---

## 9. Configuração do Consumidor (Getting Started)

### Instalação

```bash
npm install @modfy/ui
# ou
pnpm add @modfy/ui
```

### Tailwind CSS — configuração obrigatória

O consumidor deve adicionar os arquivos da lib ao `content` do Tailwind para que as classes CSS sejam geradas:

```js
// tailwind.config.js do projeto consumidor
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@modfy/ui/dist/**/*.js",  // ← OBRIGATÓRIO
  ],
  theme: { extend: {} },
  plugins: [],
}
```

### Uso básico

```tsx
import { ButtonLink, Cards, Accordion } from '@modfy/ui'

// ButtonLink
<ButtonLink
  variant={2}
  variantmodel={1}
  text="Acessar material"
  href="https://example.com"
  width={377}
/>

// Cards
<Cards
  cardsData={[
    ['Título', 'Texto resumido', '/img.png', 1, '<p>Conteúdo expandido</p>'],
  ]}
/>

// Accordion
<Accordion
  title="Para saber mais"
  bgColor={1}
  bgInsideColor="#DAF8F8"
  titleColor="#FFFFFF"
  variant="dynamic"
>
  <p>Conteúdo do accordion</p>
</Accordion>
```

---

## 10. Componentes AVAMEC (`@modfy/ui-avamec`)

### Dependência: `BridgeRestApi`

Os componentes de questão dependem da `BridgeRestApi` — API JavaScript injetada pelo player AVAMEC no `window`. O tipo está em `src/@types/BridgeRestApi/index.d.ts`.

```ts
// Estrutura básica da BridgeRestApi
interface BridgeRestApi {
  sendActivity(data: ActivityData): Promise<void>
  getActivity(id: string): Promise<ActivityData>
  // ... outros métodos AVAMEC
}

declare global {
  interface Window {
    BridgeRestApi: BridgeRestApi
  }
}
```

### Separação em sub-pacote

```json
// packages/ui-avamec/package.json
{
  "name": "@modfy/ui-avamec",
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18",
    "@modfy/ui": ">=0.1.0"
  }
}
```

---

## 11. Site de Documentação (`apps/docs`)

### Stack

- Next.js 15 (App Router)
- Tailwind CSS
- `next-mdx-remote` para conteúdo MDX
- Shiki para syntax highlighting
- Vercel para deploy

### Estrutura de rotas

```
app/
  page.tsx                          ← Landing page (hero, features, preview)
  docs/
    getting-started/
      page.mdx                      ← Instalação, configuração Tailwind
    components/
      accordion/page.mdx
      button-link/page.mdx
      cards/page.mdx
      card-flip/page.mdx
      carousel/page.mdx
      citation/page.mdx
      embed/page.mdx
      figure/page.mdx
      glossary/page.mdx
      history-topics/page.mdx
      image-list/page.mdx
      indent-citation/page.mdx
      learning-block/page.mdx
      list-module/page.mdx
      mini-cards/page.mdx
      pagination/page.mdx
      postit/page.mdx
      quote-text/page.mdx
      slider/page.mdx
      star-list/page.mdx
      timeline-with-cards/page.mdx
      tooltip/page.mdx
      unity-banner/page.mdx
    avamec/
      page.mdx                      ← Guia de integração AVAMEC
      question-option/page.mdx
      question-multiple/page.mdx
      ...
```

### Cada página de componente deve ter

1. **Preview interativo** — componente renderizado ao vivo
2. **Tabs Preview | Code** — alternância entre visualização e código
3. **Tabela de props** com nome, tipo, padrão, descrição
4. **Exemplos de variantes** — uma seção por variante/combinação relevante
5. **Botão de copiar código**

---

## 12. Storybook (`apps/storybook`)

### Padrão CSF3 (Component Story Format)

```tsx
// packages/@legado/components/organisms/accordion/Accordion.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Organisms/Accordion',
  component: Accordion,
  argTypes: {
    bgColor: { control: { type: 'number', min: 1, max: 22 } },
    variant: { control: 'select', options: ['static', 'dynamic'] },
  },
}
export default meta

type Story = StoryObj<typeof Accordion>

export const Static: Story = {
  args: {
    title: 'Apresentação',
    bgColor: 1,
    bgInsideColor: '#FFEDB8',
    titleColor: '#FFFFFF',
    variant: 'static',
  },
}

export const Dynamic: Story = {
  args: {
    title: 'Para saber mais',
    bgColor: 1,
    bgInsideColor: '#DAF8F8',
    titleColor: '#FFFFFF',
    titleColor2: '#2A5C93',
    variant: 'dynamic',
  },
}
```

---

## 13. Fluxo de Migração de Componente (Passo a Passo)

```
1. Localizar o componente em packages/@legado/components/
         ↓
2. Analisar props, assets e dependências
         ↓
3. Criar pasta em packages/ui/src/components/<camada>/<nome>/
         ↓
4. Reescrever o componente:
   - Remover imports de assets com caminhos relativos quebrando o monorepo
   - Centralizar assets em packages/ui/src/assets/<nome>/
   - Converter SVGs simples em componentes React
   - Substituir classes Emotion/CSS puro por Tailwind
   - Remover conteúdo hardcoded, transformar em props
   - Remover dependência de react-router-dom
         ↓
5. Criar index.ts com re-export limpo
         ↓
6. Adicionar export em packages/ui/src/index.ts
         ↓
7. Escrever ComponentName.stories.tsx
         ↓
8. Escrever ComponentName.test.tsx (Vitest + RTL)
         ↓
9. Criar página de docs em apps/docs/app/docs/components/<nome>/page.mdx
         ↓
10. Abrir changeset: pnpm changeset → patch/minor/major
```

---

## 14. CI/CD — GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo build

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo test

  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install --frozen-lockfile
      - run: pnpm turbo lint

  release:
    needs: [build, test, lint]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - run: pnpm install --frozen-lockfile
      - name: Publish to npm (if changeset present)
        run: pnpm release
        env:
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## 15. Roadmap de Implementação

### Fase 0 — Setup (semanas 1–2)

- [ ] Criar organização GitHub `modfy-ui`
- [ ] Configurar `packages/ui` com tsup (ESM + CJS + `.d.ts`)
- [ ] Configurar `apps/storybook` apontando para `packages/ui`
- [ ] Criar `packages/ui/src/index.ts` vazio
- [ ] Comprar domínio `modfy.design` (Porkbun ~$35/ano)
- [ ] Criar conta npm + organização `@modfy`

### Fase 1 — Migração Core (semanas 3–6)

Prioridade alta:

- [ ] `Accordion` (22+ variantes, ~50 assets)
- [ ] `ButtonLink` + `ButtonPdfDownload`
- [ ] `Cards` + `CardFlip`
- [ ] `Carousel` + `Slider` + `Pagination`
- [ ] `UnityBanner`
- [ ] `LearningBlock`

Prioridade média:

- [ ] `QuoteText` + `Figure` + `Citation` + `IndentCitation`
- [ ] `Tooltip` + `Postit`
- [ ] `Glossary` + `ListModule` + `MiniCards`
- [ ] `StarList` + `TimelineWithCards` + `HistoryTopics`

Publicação: **`0.1.0-alpha`** no npm ao final desta fase.

### Fase 2 — Site de Docs (semanas 7–9)

- [ ] `apps/docs` — Next.js 15 + MDX
- [ ] Landing page + Getting Started
- [ ] Página por componente (preview + código + props)
- [ ] Vercel + domínio `modfy.design`

Publicação: **`0.1.0`** no npm.

### Fase 3 — AVAMEC (paralelo ou após Fase 2)

- [ ] `packages/ui-avamec` com todos os componentes de questão
- [ ] Documentação da integração `BridgeRestApi`

### Fase 4 — CLI e Polimento

- [ ] `npx modfy@latest add <component>` (modelo Shadcn/Pittaya)
- [ ] SEO + Analytics (Vercel Analytics)
- [ ] Novos componentes de cursos futuros

---

## 16. Custos e Infraestrutura

| Item | Custo | Frequência |
|---|---|---|
| Domínio `modfy.design` (Porkbun) | ~$35 | Anual |
| Vercel (docs) | $0 | Free tier |
| GitHub | $0 | Free tier |
| npm `@modfy` org pública | $0 | Free |
| GitHub Actions | $0 | Free (repos públicos) |
| **Total** | **~$35/ano** | |

---

## 17. Referências

- [Pittaya UI](https://ui.pittaya.org/) — inspiração direta (React + TS + Tailwind + CLI)
- [Shadcn UI](https://ui.shadcn.com/) — modelo de CLI "copiar código"
- [Radix UI](https://www.radix-ui.com/) — acessibilidade como base
- [Turborepo Docs](https://turbo.build/repo) — setup do monorepo
- [tsup](https://tsup.egoist.dev/) — bundler da lib
- [Changesets](https://github.com/changesets/changesets) — versionamento semântico
- [Porkbun](https://porkbun.com) — compra de domínio
