# 📐 Plano de Ação — Modfy UI
### Biblioteca de componentes para cursos e-learning

> **Inspiração:** [Pittaya UI](https://ui.pittaya.org/) — open source, React + TypeScript + Tailwind, CLI de instalação, site de documentação próprio.
> **Princípio:** Uma lib que cresce junto com cada curso produzido.

---

## 1. Nome e Identidade

**Nome escolhido: `Modfy UI`**

> O nome já existe no codebase (`"name": "modfyjs"`, pasta `src/@modfy/`), é curto, técnico e já é a marca estabelecida do projeto. Não faz sentido criar uma marca paralela.

| Item | Valor |
|---|---|
| Nome da lib | `Modfy UI` |
| Pacote npm | `@modfy/ui` |
| CLI | `npx modfy@latest add accordion` |
| Site de docs | `ui.modfy.dev` *(ou `modfy.design`)* |
| Org GitHub | `github.com/modfy-ui` |
| Slogan sugerido | *"Components built for learning."* |

---

## 2. Estrutura do Repositório (Monorepo)

Usar **monorepo com pnpm workspaces + Turborepo** — o mesmo padrão de libs profissionais como Shadcn, Radix e Pittaya.

```
modfy-ui/                          ← raiz do monorepo
├── apps/
│   ├── docs/                      ← site de documentação (Next.js 15)
│   └── storybook/                 ← Storybook para dev interno
├── packages/
│   ├── ui/                        ← 📦 A BIBLIOTECA EM SI
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── atoms/
│   │   │   │   ├── molecules/
│   │   │   │   ├── organisms/
│   │   │   │   └── templates/
│   │   │   ├── assets/            ← assets agrupados por componente
│   │   │   ├── hooks/             ← hooks reutilizáveis (ex: useMediaQuery)
│   │   │   └── index.ts           ← ponto de entrada único
│   │   ├── package.json
│   │   └── tsup.config.ts
│   └── tsconfig/                  ← tsconfig compartilhado
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## 3. Stack Técnica Definitiva

| Camada | Tecnologia | Motivo |
|---|---|---|
| Framework da lib | React 18 + TypeScript | já existe no template |
| Bundler | **tsup** | zero-config, gera ESM + CJS + .d.ts |
| Estilo | **Tailwind CSS** *(principal)* + CSS Modules *(exceções)* | padronizar, reduzir Emotion |
| Documentação | **Next.js 15** (App Router) | mesmo padrão do Pittaya UI |
| Storybook | v8 | desenvolvimento e testes visuais |
| Monorepo | **Turborepo** + **pnpm** | cache de builds, scripts paralelos |
| Testes | Vitest + React Testing Library | mais rápido que Jest no monorepo |
| CI/CD | **GitHub Actions** | free, integrado ao repo |
| Deploy docs | **Vercel** | gratuito para open source, integra com GitHub |
| Publicação | **npm** (scoped `@modfy/ui`) | padrão de mercado |

---

## 4. Inventário de Componentes para Migrar

### ✅ Fase 1 — Core (do CURSO-TEMPLATE atual)

| Componente | Origem | Complexidade | Prioridade |
|---|---|---|---|
| `Accordion` | organisms/ | 🔴 Alta (22 variantes + ~50 assets) | Alta |
| `ButtonLink` | atoms/ | 🟢 Baixa | Alta |
| `ButtonPdfDownload` | atoms/ | 🟢 Baixa | Alta |
| `Cards` | molecules/ | 🟡 Média | Alta |
| `CardFlip` | molecules/ | 🟡 Média | Alta |
| `Carousel` | templates/ | 🟡 Média | Alta |
| `Slider` | templates/ | 🟡 Média | Alta |
| `Pagination` | templates/ | 🟡 Média | Alta |
| `QuoteText` | molecules/ | 🟢 Baixa | Média |
| `Figure` | molecules/ | 🟢 Baixa | Média |
| `Citation` | molecules/ | 🟢 Baixa | Média |
| `IndentCitation` | molecules/ | 🟢 Baixa | Média |
| `Tooltip` | atoms/ | 🟢 Baixa | Média |
| `Postit` | atoms/ | 🟢 Baixa | Média |
| `UnityBanner` | templates/ | 🟡 Média | Alta |
| `Glossary` | templates/ | 🟡 Média | Média |
| `ListModule` | molecules/ | 🟢 Baixa | Média |
| `MiniCards` | molecules/ | 🟢 Baixa | Média |
| `StarList` | organisms/ | 🟡 Média | Média |
| `TimelineWithCards` | organisms/ | 🟡 Média | Média |
| `HistoryTopics` | organisms/ | 🟡 Média | Média |
| `LearningBlock` | organisms/ | 🟡 Média | Alta |
| `ImageList` | molecules/ | 🟢 Baixa | Baixa |
| `Embed` | molecules/ | 🟡 Média | Baixa |

### ✅ Fase 1 — Questões (AVAMEC-ready)

| Componente | Obs |
|---|---|
| `QuestionOption` | múltipla escolha, 1 resposta |
| `QuestionMultipleAnswer` | múltiplas respostas |
| `QuestionTrueOrFalse` | verdadeiro/falso |
| `QuestionGrid` | grade de questões |
| `QuestionCorrelation` | correlação de itens |
| `QuestionDragDrop` | arrasta e solta |
| `QuestionWritten` | resposta dissertativa |
| `SendActivityButton` | botão de envio (AVAMEC) |

> **Nota:** Os componentes de questão têm dependência da `BridgeRestApi` (AVAMEC). Eles devem ser exportados em um sub-pacote separado `@modfy/ui-avamec` para não poluir a lib genérica com dependências específicas de plataforma.

### 🔄 Fase 2 — Novos cursos (adicionar conforme produção)

A cada novo curso produzido, o fluxo deve ser:
1. Desenvolver o componente no template do curso
2. Identificar se é genérico ou específico do curso
3. Abstrair props, remover conteúdo hardcoded
4. Abrir PR no monorepo `modfy-ui`
5. Escrever story no Storybook e página de docs

---

## 5. Decisões de Migração Críticas

### 5.1 Assets (imagens/SVGs)

O `Accordion` importa ~50 arquivos de imagem. Solução:

```
packages/ui/src/assets/accordion/
  ├── background1.svg   ← converter PNG → SVG quando possível
  ├── arrowDown.svg
  └── ...
```

- SVGs simples: converter em componentes React (`<ArrowDownIcon />`)
- PNGs complexos (backgrounds texturizados): manter como arquivo e bundlar com `tsup` usando o plugin de assets

### 5.2 Tailwind no consumidor

O consumidor da lib precisa adicionar os arquivos da lib ao `content` do Tailwind:

```js
// tailwind.config.js do projeto consumidor
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@modfy/ui/dist/**/*.js",  // ← adicionar isso
]
```

Documentar isso claramente no Getting Started.

### 5.3 Remover dependência de `react-router-dom` do core

O hook `useModfy` usa `useNavigate`. Na lib, isso deve ser opcional — expor uma interface de navegação injetável:

```ts
// ao invés de acoplar ao react-router
<Pagination onPageChange={(page) => navigate(page)} />
```

### 5.4 Padrão de exportação

```ts
// packages/ui/src/index.ts
export { Accordion } from './components/organisms/accordion'
export { ButtonLink } from './components/atoms/buttonLink'
export { Cards } from './components/molecules/cards'
// ...
export type { AccordionProps } from './components/organisms/accordion'
```

---

## 6. Site de Documentação (Next.js)

### Estrutura das páginas

```
apps/docs/
├── app/
│   ├── page.tsx                    ← landing page (hero + features)
│   ├── docs/
│   │   ├── getting-started/        ← instalação, configuração
│   │   ├── components/
│   │   │   ├── accordion/          ← página do componente
│   │   │   ├── button-link/
│   │   │   └── ...
│   │   └── avamec/                 ← docs dos componentes AVAMEC
│   └── layout.tsx
```

### Cada página de componente deve ter

- Preview interativo do componente (live)
- Tabs: **Preview** | **Code**
- Tabela de props com tipos
- Exemplos de variantes
- Botão de copiar código

### Tecnologias do site de docs

| Ferramenta | Função |
|---|---|
| Next.js 15 (App Router) | framework do site |
| `next-mdx-remote` ou Contentlayer | conteúdo MDX das páginas |
| Shiki ou Prism | syntax highlighting |
| Tailwind CSS | estilo do site |
| Vercel | deploy automático |

---

## 7. Publicação no npm

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

### Fluxo de release

1. Usar **Changesets** para controle de versão semântica
2. PR merged → GitHub Action roda testes
3. Release manual: `pnpm changeset` → `pnpm version-packages` → `pnpm release`
4. Tag no GitHub + publicação automática no npm via Action

---

## 8. CLI (como o Pittaya tem `npx pittaya@latest add button`)

Fase 2 — mas planejar desde já a estrutura.

```bash
npx modfy@latest add accordion
# → baixa apenas o arquivo do componente para src/components/
# → instala dependências necessárias
# → não instala a lib inteira como node_module
```

Esse modelo (copiador de código, não pacote instalado) é o padrão do Shadcn UI e Pittaya.
Implementar com um script Node.js simples que lê um registry JSON e copia arquivos.

---

## 9. Domínio e Infraestrutura

### 9.1 Compra de domínio

| Opção | Preço estimado | Recomendação |
|---|---|---|
| `modfy.design` | ~$35/ano | ✅ Melhor opção — curto, técnico, .design comunica o propósito |
| `modfy-ui.com` | ~$15/ano | Boa alternativa |
| `ui.modfy.dev` | subdomínio do .dev (~$12/ano) | Alternativa econômica |

**Onde comprar:**
- **Porkbun** ([porkbun.com](https://porkbun.com)) — melhor preço, boa interface ✅
- **Namecheap** — confiável, muito usado
- Evitar: GoDaddy (renovação cara), registro.br não tem `.design`

**Configuração DNS após compra:**
- Apontar para Vercel via `A record` ou `CNAME`
- Vercel provisiona SSL automaticamente (HTTPS grátis)

### 9.2 Hosting do site de docs

**Vercel** (gratuito para projetos open source)

1. Conectar o repositório GitHub à Vercel
2. Configurar: root directory = `apps/docs`
3. Preview automático a cada PR
4. Deploy em produção a cada merge na `main`
5. Adicionar domínio customizado no painel da Vercel

### 9.3 npm Organization

1. Criar conta em [npmjs.com](https://www.npmjs.com)
2. Criar organização `@modfy` (gratuito para pacotes públicos)
3. Publicar como `@modfy/ui`

### 9.4 GitHub Organization

1. Criar organização `modfy-ui` no GitHub
2. Criar repositório `modfy-ui/ui` (monorepo principal)
3. Configurar branch protection na `main`
4. Adicionar `CONTRIBUTING.md` e templates de PR/Issue

---

## 10. CI/CD com GitHub Actions

### Pipeline principal (`.github/workflows/ci.yml`)

```yaml
# Roda a cada PR e push na main
jobs:
  build:    ← tsc + tsup (verifica se builda sem erro)
  test:     ← vitest
  lint:     ← eslint + prettier

# Roda apenas na main
  release:  ← publica no npm (se houver changeset de release)
  deploy:   ← Vercel faz automaticamente via integração
```

---

## 11. Roadmap por Fases

### 🏗️ Fase 0 — Setup (1–2 semanas)
- [ ] Criar organização GitHub `modfy-ui`
- [ ] Inicializar monorepo com pnpm + Turborepo
- [ ] Configurar `packages/ui` com tsup
- [ ] Configurar `apps/storybook`
- [ ] Criar `packages/ui/src/index.ts` com primeiros exports
- [ ] Comprar domínio (`modfy.design`)
- [ ] Criar conta npm + organização `@modfy`

### 🧱 Fase 1 — Migração dos componentes (2–4 semanas)
- [ ] Migrar e abstrair os componentes `atoms` (ButtonLink, Tooltip, Postit, Check)
- [ ] Migrar e abstrair os componentes `molecules` (Cards, CardFlip, QuoteText, Figure, Citation)
- [ ] Migrar `Accordion` com tratamento de assets
- [ ] Migrar templates (Carousel, Slider, Pagination, UnityBanner)
- [ ] Escrever stories para cada componente
- [ ] Publicar versão `0.1.0-alpha` no npm

### 🌐 Fase 2 — Site de documentação (2–3 semanas)
- [ ] Criar `apps/docs` com Next.js 15
- [ ] Landing page (hero, features, preview)
- [ ] Página de Getting Started (instalação, configuração do Tailwind)
- [ ] Página por componente com preview + código + props
- [ ] Conectar Vercel + domínio
- [ ] Publicar versão `0.1.0`

### 🎓 Fase 3 — Questões AVAMEC (paralelo ou após Fase 2)
- [ ] Criar `packages/ui-avamec` para componentes de questão
- [ ] Documentar a integração com `BridgeRestApi`
- [ ] Guia de uso com AVAMEC no site de docs

### ⚡ Fase 4 — CLI e polimento
- [ ] Implementar `npx modfy@latest add <component>`
- [ ] Adicionar mais componentes de novos cursos
- [ ] SEO do site de docs
- [ ] Analytics (Vercel Analytics — gratuito)

---

## 12. Fluxo de Trabalho após a Lib estar no ar

A cada novo curso produzido:

```
1. Desenvolver componente no template do curso (CURSO-TEMPLATE)
         ↓
2. Avaliar: é genérico? → SIM → migrar para @modfy/ui
                        → NÃO → manter só no curso
         ↓
3. Abrir PR no repo modfy-ui/ui
   - Componente + assets
   - Story no Storybook
   - Página de docs em MDX
   - Changeset (patch/minor/major)
         ↓
4. Review + merge → CI roda → npm publica → Vercel deploya docs
         ↓
5. No próximo curso: instalar @modfy/ui e importar o componente
```

---

## 13. Custos Estimados

| Item | Custo | Frequência |
|---|---|---|
| Domínio `modfy.design` | ~$35 | Anual |
| Vercel (docs) | $0 | Free tier |
| GitHub | $0 | Free tier |
| npm (`@modfy` org pública) | $0 | Free |
| GitHub Actions | $0 | Free para repositórios públicos |
| **Total** | **~$35/ano** | |

> 💡 Se no futuro quiser versão premium com autenticação ou analytics avançado, a única adição seria um servidor (Railway ~$5/mês ou Supabase free tier para backend simples).

---

## 14. Referências

- [Pittaya UI](https://ui.pittaya.org/) — inspiração direta
- [Shadcn UI](https://ui.shadcn.com/) — modelo de CLI "copiar código"
- [Radix UI](https://www.radix-ui.com/) — acessibilidade como base
- [Turborepo Docs](https://turbo.build/repo) — setup do monorepo
- [tsup](https://tsup.egoist.dev/) — bundler da lib
- [Changesets](https://github.com/changesets/changesets) — versionamento semântico
- [Porkbun](https://porkbun.com) — compra de domínio
