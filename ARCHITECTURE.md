# 🏛️ Arquitetura Modfy UI (Monorepo)

Este projeto utiliza uma estrutura de **Monorepo** gerenciada por **pnpm workspaces** e **Turborepo**. Essa arquitetura permite que a biblioteca de componentes, a documentação e os templates de cursos coexistam no mesmo repositório de forma organizada e eficiente.

---

## 📁 Estrutura de Pastas

### 🚀 `apps/` (Aplicações)
Contém os projetos que são executados ou publicados.
- **`curso-template/`**: O projeto original do curso. É aqui que você edita as páginas e a lógica de conteúdo.
- **`docs/`**: Futuro site de documentação da Modfy UI (Next.js).
- **`storybook/`**: Ambiente de desenvolvimento isolado para testar e visualizar os componentes da biblioteca.

### 📦 `packages/` (Pacotes Compartilhados)
Contém o código que é compartilhado entre as aplicações.
- **`ui/`**: A nova biblioteca de componentes limpos, utilizando Tailwind CSS e TypeScript. **Este é o foco da Fase 1.**
- **`@legado/`**: Repositório de componentes e assets originais. Serve como fonte para a migração e backup do código anterior.
- **`tsconfig/`**: Configurações de TypeScript compartilhadas para garantir consistência em todo o monorepo.

### 🤖 `.agents/` (Inteligência Artificial)
Instruções específicas para que as IAs entendam o contexto do projeto.
- **`gemini/`**: Regras e contextos para o Gemini CLI.
- **`claude/`**: Prompts e diretrizes para uso com Claude (Anthropic).
- **`copilot/`**: Arquivos `.github/copilot-instructions.md` e configurações de contexto.

---

## 🛠️ Comandos Principais

Executados na raiz do projeto:

- `pnpm install`: Instala todas as dependências de todos os pacotes.
- `pnpm turbo build`: Compila todos os pacotes e apps em paralelo.
- `pnpm dev`: Inicia o ambiente de desenvolvimento de todos os pacotes (via Turbo).
- `pnpm storybook`: Inicia o Storybook para desenvolvimento de componentes.

---

## 🏗️ Por que essa Stack? (pnpm, Vite, Turbo)

Para gerenciar um projeto que cresce (Monorepo), escolhemos ferramentas que trabalham em harmonia, resolvendo problemas diferentes:

| Ferramenta | O que ela faz aqui? | Por que não outras? |
| :--- | :--- | :--- |
| **pnpm** | Nosso **Almoxarifado**. Gerencia as pastas e instala bibliotecas. | Mais rápido e eficiente que o **Yarn**. Economiza espaço em disco e evita "dependências fantasmas" em monorepos. |
| **Turborepo** | Nosso **Maestro**. Orquestra os comandos (build, lint) de forma inteligente. | Ele sabe o que mudou. Se você alterar a UI, ele não reconstrói o curso inteiro, economizando seu tempo. |
| **Vite** | Nossa **Máquina de Montagem**. Transforma o código em algo que o navegador entende. | Base do **Storybook**. É instantâneo no desenvolvimento comparado ao Webpack antigo. |
| **tsup** | Nosso **Empacotador Profissional**. Gera a biblioteca final (`packages/ui`). | Zero-configuração e gera múltiplos formatos (ESM/CJS) com tipagem automática de forma extremamente rápida. |

---

## 🧭 Fluxo de Desenvolvimento

1. **Localize o Código Antigo**: Se precisar de um componente que já existia, ele está em `packages/@legado/components`.
2. **Migre para a UI**: Abstraia o componente, remova lógica hardcoded e mova-o para `packages/ui/src/components`.
3. **Use no Curso**: No `apps/curso-template`, você poderá importar os componentes da biblioteca oficial futuramente.

---

## 📜 Filosofia
"A biblioteca cresce com o curso." - Cada componente novo criado para um curso deve ser avaliado para se tornar parte da `@modfy/ui`.
