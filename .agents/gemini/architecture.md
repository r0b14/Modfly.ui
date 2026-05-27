---
trigger: always_on
glob:
description: 'Documentação da arquitetura geral do projeto'
---

# Arquitetura do Projeto

Este documento descreve a arquitetura geral da aplicação para guiar o desenvolvimento e a manutenção do código.

## 1. Visão Geral

O projeto é uma Single Page Application (SPA) desenvolvida em **React 18** com **TypeScript**, inicializada através do Create React App (`react-scripts`). A aplicação utiliza uma arquitetura modularizada por funcionalidades (feature-based).

## 2. Tecnologias Principais

- **Framework/Library:** React (v18)
- **Linguagem:** TypeScript
- **Roteamento:** React Router DOM (v7)
- **Estilização:** Tailwind CSS (v3) e Emotion (`@emotion/styled`, `@emotion/css`)
- **Documentação de UI:** Storybook (v7)
- **Testes:** Jest e React Testing Library
- **Outras Bibliotecas Relevantes:** `@dnd-kit` (drag and drop), `react-hot-toast` (notificações), `react-slick` (carrosséis).

## 3. Estrutura de Diretórios (`src/`)

A organização do código segue uma abordagem modular para promover escalabilidade e reuso:

- **`@modfy/`**: Ponto de entrada ou biblioteca interna contendo exportações centrais ou integrações específicas do projeto.
- **`assets/`**: Arquivos estáticos globais, como imagens, ícones e fontes.
- **`components/`**: Componentes genéricos de UI, reutilizáveis e agnósticos ao domínio da aplicação (ex: botões, inputs, modais).
- **`contexts/`**: Contextos do React utilizados para o gerenciamento de estado global da aplicação (ex: `QuestionsContext.tsx`).
- **`modules/`**: Módulos divididos por funcionalidades da aplicação (ex: `module-1`, `module-2`). Cada módulo deve conter suas próprias páginas, componentes específicos e lógicas de negócio, mantendo o encapsulamento.

## 4. Gerenciamento de Estado

- **Estado Global:** Utiliza-se a **Context API** do React (localizada em `src/contexts`) para dados e funções que precisam ser acessados por múltiplos módulos e componentes simultaneamente.
- **Estado Local:** Gerenciado através de Hooks nativos do React (como `useState` e `useReducer`) dentro de páginas e componentes individuais.

## 5. Padrões de Estilização

A aplicação emprega uma abordagem híbrida:

1. **Tailwind CSS:** Utilizado como primeira opção para estilização rápida via classes utilitárias (utility-first), garantindo consistência no web design e responsividade (configurado em `tailwind.config.js`).
2. **Emotion:** Utilizado quando há a necessidade de lógicas complexas de CSS-in-JS ou para a criação de componentes isoladamente estilizados onde o Tailwind pode se tornar difícil de ler.

## 6. Padrões de Desenvolvimento

- Manter forte tipagem estática utilizando as interfaces (interfaces) e tipos (types) do TypeScript.
- Respeitar a divisão modular: lógicas exclusivas de uma funcionalidade não devem estar acopladas a componentes genéricos em `src/components`.
- Os testes são facilitados pelo Jest e React Testing Library, garantindo a solidez dos componentes React e das regras de negócio.
