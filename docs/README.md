# Documentação — Modfly UI

Índice central de toda a documentação interna do monorepo. Cada subpasta agrupa documentos por tema; os nomes de arquivo são descritivos para facilitar a busca.

> Isto é documentação **interna** do repositório (decisões técnicas, padrões, planos). O site público de docs dos componentes é o app `apps/docs` (Next.js, deployado em modfly.design) — não confunda os dois.

---

## `infra/` — Arquitetura e infraestrutura do monorepo

| Documento | Conteúdo |
|---|---|
| [`arquitetura-monorepo.md`](infra/arquitetura-monorepo.md) | Estrutura de pastas do monorepo (`apps/`, `packages/`, `.agents/`), comandos principais, stack (pnpm/Turborepo/Vite/tsup) e o fluxo de integração entre `packages/ui` e `apps/docs`. |
| [`guia-arquitetura-react-e-bibliotecas.md`](infra/guia-arquitetura-react-e-bibliotecas.md) | Diagnóstico de `packages/` vs `apps/` (inclui a duplicação `curso-template` ↔ `@legado`, um erro de projeto confirmado) + guia de estudo sobre organização de projetos React e construção de bibliotecas de componentes. |

## `front/` — Padrões de frontend, design system e assets

| Documento | Conteúdo |
|---|---|
| [`design-system-especificacao.md`](front/design-system-especificacao.md) | Especificação completa do design system: inventário de componentes, tokens de cor, convenções de código e exportação. |
| [`padrao-documentacao-componentes.md`](front/padrao-documentacao-componentes.md) | Padrão obrigatório para criar páginas de documentação de componentes em `apps/docs` (estrutura, seções, classes CSS). |
| [`guia-assets-png-svg.md`](front/guia-assets-png-svg.md) | Guia de decisão para tratar assets (PNG, SVG, SVGR) na migração de componentes para `packages/ui`. |
| [`assets-multi-curso.md`](front/assets-multi-curso.md) | Padrão de "Asset Maps" para organizar assets visuais por curso (evita componentes monolíticos), incluindo protocolo de exportação do Figma. |

## `projeto/` — Planejamento, roadmap e FAQ

| Documento | Conteúdo |
|---|---|
| [`plano-acao-biblioteca.md`](projeto/plano-acao-biblioteca.md) | Plano de ação geral do projeto: nome, identidade, fases, custos e roadmap de publicação. |
| [`issues-v1-roadmap.md`](projeto/issues-v1-roadmap.md) | Issues estruturadas para o lançamento da v1.0.0 (infraestrutura, migração, documentação). |
| [`faq-duvidas-basicas.md`](projeto/faq-duvidas-basicas.md) | Perguntas frequentes sobre o funcionamento da lib e do processo de migração. |

## `integracoes/` — Integração com a API AVAMEC

| Documento | Conteúdo |
|---|---|
| [`avamec-padrao-payload-api-questoes.md`](integracoes/avamec-padrao-payload-api-questoes.md) | Padrão de payload JSON para submissão de respostas de atividades à API AVAMEC. |
| [`avamec-diagnostico-persistencia-questoes.md`](integracoes/avamec-diagnostico-persistencia-questoes.md) | Diretrizes técnicas para diagnosticar problemas de persistência de estado das questões (seleção, feedback, botão de envio). |
| [`avamec-persistence-service-recomendacao.md`](integracoes/avamec-persistence-service-recomendacao.md) | Proposta de um `PersistenceService` unificado para reconciliar `BridgeRestApi` e `localStorage`. |

## `copyright/` — Licenciamento

| Documento | Conteúdo |
|---|---|
| [`licenca-mit.md`](copyright/licenca-mit.md) | Explicação da licença MIT aplicada ao projeto e orientação sobre atribuição. Texto legal completo em [`LICENSE`](../LICENSE) na raiz. |
