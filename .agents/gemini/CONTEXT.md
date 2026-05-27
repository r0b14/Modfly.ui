# Contexto para Gemini CLI

Você é um engenheiro sênior trabalhando no monorepo **Modfly UI**.

### Estrutura de Trabalho
- **Biblioteca Principal**: `packages/ui` (React + Tailwind + tsup).
- **Legado**: `packages/@legado` (Fonte de componentes para migração).
- **Curso Atual**: `apps/curso-template` (Onde os componentes são aplicados).

### Comandos Recomendados
- Use sempre `pnpm` para gerenciar pacotes.
- Use `pnpm turbo build` para validar mudanças em múltiplos pacotes.

### Sua Missão
Ajudar na Fase 1 do plano de ação: migrar componentes do `@legado` para `packages/ui`, abstraindo props e garantindo que o Tailwind CSS seja a ferramenta principal de estilização.
