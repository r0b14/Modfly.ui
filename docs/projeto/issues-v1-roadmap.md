# Issues Planejadas para Modfly UI v1

Este documento contém a lista de issues estruturadas para o lançamento da versão 1.0.0, focando em Infraestrutura, Migração e Documentação.

---

## 🏗️ Milestone 1: Infraestrutura & Deploy

*Foco em automação, hospedagem e fluxo de publicação npm.*

### Issue 1: Configuração do CI/CD com GitHub Actions ✅

- **Descrição:** Criar workflow do GitHub Actions (`.github/workflows/ci.yml`) para rodar em toda PR e push na `main`. Deve incluir steps para build (`tsup` e `next`), lint (`eslint`) e (futuramente) testes.
- **Status:** Concluída (Workflow criado).
- **Labels:** `infrastructure`, `ci`

### Issue 2: Deploy Contínuo (Vercel & Chromatic)

- **Descrição:**
  1. Conectar o repositório à Vercel para deploy automático do projeto `apps/docs`.
  2. Integrar o `apps/storybook` com o Chromatic para testes visuais em cada PR.
  3. Configurar domínio definitivo (`modfly.design` ou provisório) apontando para a Vercel.
- **Labels:** `infrastructure`, `deploy`

### Issue 3: Setup de Versionamento e Publicação NPM (Changesets)

- **Descrição:** Configurar o [Changesets](https://github.com/changesets/changesets) no monorepo para gerenciar versões semânticas. Criar a organização `@modfly` no npm e realizar o primeiro publish manual ou via action do sub-pacote `@modfly/ui`.
- **Labels:** `npm`, `infrastructure`

---

## 🧩 Milestone 2: Migração de Componentes UI

*Migração sistemática do `apps/curso-template` para `packages/ui`.*

### Issue 4: Migração dos Átomos para `packages/ui` ✅

- **Descrição:** Mover os átomos existentes (`ButtonLink`, `ButtonPdfDownload`, `Tooltip`, `Postit`, `Check`). Os componentes devem ter suas dependências de assets resolvidas (ver [`guia-assets-png-svg.md`](../front/guia-assets-png-svg.md)) e exportados via `src/index.ts`.
- **Status:** Concluída (5 átomos migrados e exportados, mais `ImageFallback` — 6 no total em `packages/ui/src/components/atoms`).
- **Labels:** `components`, `atoms`, `migration`

> **Pendência identificada (16 Jul 2026):** `packages/@legado/components/atoms` e `apps/curso-template/src/components/atoms` ainda têm 5 átomos que nunca migraram para `packages/ui`: `buttonReference`, `exclamation`, `range` (`rangeBlue`/`rangeGreen`), `sendActivityButton` e `PageRenderError` (este último só existe em `@legado`). Precisam ser avaliados e portados seguindo o mesmo padrão dos 6 já migrados (ver [`guia-arquitetura-react-e-bibliotecas.md`](../infra/guia-arquitetura-react-e-bibliotecas.md) para o diagnóstico da duplicação entre `@legado`/`curso-template`).

### Issue 5: Migração de Moléculas (Parte 1 - Básicas) ✅

- **Descrição:** Mover `Cards`, `CardFlip`, `QuoteText`, e `Figure`. Certificar de tratar adequadamente imagens PNG e conversões necessárias para SVG.
- **Status:** Concluída (4 moléculas e o átomo de dependência ImageFallback migrados).
- **Labels:** `components`, `molecules`, `migration`

### Issue 6: Migração de Moléculas (Parte 2 - Avançadas) ✅

- **Descrição:** Mover `IndentCitation` (suas 4 variantes), `ListModule`, `MiniCards`, `Embed`, e `ImageList`.
- **Status:** Concluída (Todas as moléculas migradas e exportadas).
- **Labels:** `components`, `molecules`, `migration`

### Issue 7: Migração dos Organismos ✅

- **Descrição:** Mover `Accordion` (atentar-se às 22 variantes), `StarList`, `TimelineWithCards`, `HistoryTopics`, e `LearningBlock` (usando SVGR quando aplicável).
- **Status:** Concluída (Todos os organismos migrados com seus respectivos assets e plugins).
- **Labels:** `components`, `organisms`, `migration`

### Issue 8: Migração de Templates & Utilitários ✅

- **Descrição:** Mover componentes complexos e estruturais: `Carousel`, `Slider`, `Pagination` (remover acoplamento com `react-router-dom`), `UnityBanner`, e `Glossary`.
- **Status:** Concluída (Todos os templates migrados e refatorados para maior independência).
- **Labels:** `components`, `templates`, `migration`

---

## 📚 Milestone 3: Documentação Oficial

*Finalização do portal Next.js de acordo com o padrão [`padrao-documentacao-componentes.md`](../front/padrao-documentacao-componentes.md).*

### Issue 9: Concluir seção "Getting Started" ✅

- **Descrição:** Criar conteúdo para as rotas placeholder: `/docs/getting-started/introduction`, `/docs/getting-started/tailwind-setup` e `/docs/getting-started/theming`.
- **Status:** Concluída (Todas as páginas de guia inicial preenchidas com conteúdo real).
- **Labels:** `documentation`, `core`

### Issue 10: Páginas de Documentação (Átomos e Moléculas)

- **Descrição:** Criar as páginas interativas para todos os átomos e moléculas recém-migrados (Ex: QuoteText, Figure, IndentCitation, etc). Deve seguir o padrão de 5 seções (Visão Geral, Demo, API, Exemplos, Variantes).
- **Labels:** `documentation`, `components`

### Issue 11: Páginas de Documentação (Organismos e Templates)

- **Descrição:** Criar as rotas estáticas de doc para os componentes mais complexos (Accordion, LearningBlock, Carousel, etc). Incluir as dependências do `tailwind.config` no consumidor quando necessário.
- **Labels:** `documentation`, `components`
