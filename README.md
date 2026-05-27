<div align="center">
  <img src="https://raw.githubusercontent.com/modfy-ui/ui/main/apps/docs/public/logo.png" alt="Modfly UI Logo" width="120" />
  <h1>🦋 Modfly UI</h1>
  <p><strong>Components built for learning.</strong></p>
  <p>Uma biblioteca de componentes React disruptiva, modular e de alta performance, desenhada especificamente para o ecossistema de e-learning.</p>

  <p align="center">
    <a href="https://vlab-1.gitbook.io/modfyjs-1.0.0-alpha/"><b>Documentação</b></a> •
    <a href="https://vlab.ufpe.br"><b>Vlab UFPE</b></a>
  </p>

  <div>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Turborepo-2.0-FF0080?style=for-the-badge&logo=turborepo&logoColor=white" alt="Turborepo" />
  </div>
</div>

---

## ⚡ Por que Modfly UI?

O Modfly UI não é apenas mais uma biblioteca de botões. É a espinha dorsal de cursos escaláveis. Enquanto o mercado foca em Dashboards, nós focamos na **Experiência do Estudante**.

- 🧩 **Arquitetura Atômica:** Componentes granulares e reutilizáveis.
- 🚀 **Performance Extrema:** Monorepo orquestrado por Turborepo e pnpm.
- 🎨 **Design System-First:** Estilização baseada em Tailwind CSS para customização rápida.
- 🧪 **Laboratório Visual:** Storybook 8 integrado para testes em tempo real.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Papel |
| :--- | :--- | :--- |
| **Workspace** | `pnpm` + `Turborepo` | Orquestração de Monorepo |
| **Framework** | `React 18` + `TS` | UI Reativa e Tipada |
| **Estilos** | `Tailwind CSS` | Design System Utilitário |
| **Bundler** | `tsup` | Geração de Lib (ESM/CJS) |
| **Docs** | `Storybook 8` | Vitrine de Componentes |

---

## 🏗️ Estrutura do Ecossistema

O repositório opera em um modelo de **Monorepo**, garantindo que a biblioteca e os cursos estejam sempre sincronizados.

```text
Modfly.ui/
├── 🚀 apps/
│   ├── curso-template/   # Aplicação de consumo (O Curso)
│   ├── storybook/        # Laboratório de componentes
│   └── docs/             # Site oficial de documentação
├── 📦 packages/
│   ├── ui/               # O Core da Biblioteca (Nova)
│   ├── @legado/          # Baú de componentes para migração
│   └── tsconfig/         # Regras de TypeScript compartilhadas
└── 🤖 .agents/           # Instruções para IAs (Gemini, Claude, Copilot)
```

---

## 🚦 Começo Rápido

Para rodar o ambiente completo de desenvolvimento:

```bash
# Instale as ferramentas (se não tiver)
npm install -g pnpm

# Instale as dependências
pnpm install

# Inicie o modo desenvolvimento (Turbo + Storybook)
pnpm dev
```

---

## ✍️ Autores & Contribuidores

Este projeto nasceu de pesquisas e desenvolvimentos incubados inicialmente no **[Vlab UFPE](https://vlab.ufpe.br)**, e hoje é mantido com paixão por uma comunidade de desenvolvedores autônomos. Conecte-se conosco:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/r0b14">
        <img src="https://github.com/r0b14.png" width="100px;" alt="Robson Thiago"/><br />
        <sub><b>Robson Thiago</b></a></sub><br />
        <a href="https://twitter.com/_r0b14" title="Twitter">🌐</a> 
        <a href="https://linkedin.com/in/robson-thiago" title="LinkedIn">🔗</a>
      </a>
    </td>
    <!-- Adicione mais autores aqui seguindo o mesmo padrão -->
  </tr>
</table>

---

## 📝 Padrão de Commits

Seguimos estritamente o **[Conventional Commits](https://www.conventionalcommits.org/pt-br)**. 

- `feat`: Novo recurso
- `fix`: Correção de bug
- `docs`: Mudança em documentação
- `style`: Formatação/Visual
- `refactor`: Refatoração de código
- `perf`: Melhoria de performance

---

<div align="center">
  <p>Desenvolvido com ❤️ por <strong>Desenvolvedores Autônomos</strong></p>
  <p><i>Inspirado pelas inovações em e-learning iniciadas no Vlab UFPE</i></p>
</div>
