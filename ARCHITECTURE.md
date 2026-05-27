# Arquitetura Modfy UI (Monorepo)

Este projeto utiliza uma estrutura de **Monorepo** gerenciada por **pnpm workspaces** e **Turborepo**. Essa arquitetura permite que a biblioteca de componentes, a documentação e os templates de cursos coexistam no mesmo repositório de forma organizada e eficiente.

---

## Estrutura de Pastas

### `apps/` (Aplicações)

Contém os projetos que são executados ou publicados.

- **`curso-template/`**: O projeto original do curso. Fonte dos componentes legado que estão sendo migrados para `packages/ui`.
- **`docs/`**: Site de documentação oficial da Modfly UI (Next.js 15). É aqui que cada componente terá sua página pública com preview interativo, tabela de props e exemplos de código.
- **`storybook/`**: Ambiente de desenvolvimento isolado. Usado durante a migração dos componentes — não é o destino final da documentação pública.

### `packages/` (Pacotes Compartilhados)

Contém o código que é compartilhado entre as aplicações.

- **`ui/`**: A biblioteca de componentes limpos (`@modfy/ui`), em TypeScript + Tailwind. Este é o pacote publicado no npm e importado pelo `apps/docs` para renderizar os previews.
- **`@legado/`**: Componentes e assets originais. Serve como fonte para a migração e backup do código anterior.
- **`tsconfig/`**: Configurações de TypeScript compartilhadas para consistência em todo o monorepo.

### `.agents/` (Inteligência Artificial)

Instruções específicas para que as IAs entendam o contexto do projeto.

- **`gemini/`**: Regras e contextos para o Gemini CLI.
- **`claude/`**: Prompts e diretrizes para uso com Claude (Anthropic).
- **`copilot/`**: Arquivos `.github/copilot-instructions.md` e configurações de contexto.

---

## Comandos Principais

Executados na raiz do projeto:

- `pnpm install`: Instala todas as dependências de todos os pacotes.
- `pnpm turbo build`: Compila todos os pacotes e apps em paralelo.
- `pnpm dev`: Inicia o ambiente de desenvolvimento de todos os pacotes (via Turbo).
- `pnpm storybook`: Inicia o Storybook para desenvolvimento de componentes.

---

## Por que essa Stack? (pnpm, Vite, Turbo)

| Ferramenta | O que ela faz aqui? | Por que não outras? |
| :--- | :--- | :--- |
| **pnpm** | Nosso **Almoxarifado**. Gerencia as pastas e instala bibliotecas. | Mais rápido e eficiente que o Yarn. Economiza espaço em disco e evita "dependências fantasmas" em monorepos. |
| **Turborepo** | Nosso **Maestro**. Orquestra os comandos (build, lint) de forma inteligente. | Ele sabe o que mudou. Se você alterar a UI, ele não reconstrói o curso inteiro. |
| **Vite** | Nossa **Máquina de Montagem**. Transforma o código em algo que o navegador entende. | Base do Storybook. Instantâneo no desenvolvimento comparado ao Webpack antigo. |
| **tsup** | Nosso **Empacotador Profissional**. Gera a biblioteca final (`packages/ui`). | Zero-configuração e gera ESM + CJS com tipagem automática de forma extremamente rápida. |

---

## Fluxo de Desenvolvimento

1. **Localize o Código Antigo**: Se precisar de um componente que já existia, ele está em `packages/@legado/components`.
2. **Migre para a UI**: Abstraia o componente, remova lógica hardcoded e mova-o para `packages/ui/src/components`.
3. **Use no Curso**: No `apps/curso-template`, importe os componentes da biblioteca oficial via `@modfy/ui`.

---

## Integração Docs ↔ Componentes

Esta seção descreve como um componente chega ao site de documentação com preview interativo, tabela de props e código copiável. A integração acontece em **duas fases** sequenciais.

### Estado atual (por que ainda não funciona)

- `packages/ui/src/index.ts` está vazio — nenhum componente migrado
- `apps/docs/package.json` não lista `@modfy/ui` como dependência
- Os componentes existem em `apps/curso-template/src/components/` e usam assets com caminhos relativos (`.png`, `.svg`)
- As páginas `/docs/components/[slug]` são stubs que exibem "Em breve"

---

### Fase A — Ponte: exibir componentes sem migrar

A Fase Ponte permite exibir componentes do `curso-template` no docs **agora**, sem migrar para `packages/ui`. O Next.js resolve os imports relativos de assets (PNG/SVG) corretamente via webpack alias.

#### Fluxo da Fase Ponte

```text
apps/curso-template/src/components/molecules/cards/Cards.tsx
        ↓  webpack alias  @curso/*
apps/docs/lib/registry.ts  →  import Cards from '@curso/components/molecules/cards/Cards'
        ↓
apps/docs/app/(dashboard)/docs/components/[slug]/page.tsx
        ↓
<ComponentPreview>  <PropsTable>  <CodeBlock>
```

#### 1. Configurar o alias no Next.js

```ts
// apps/docs/next.config.ts
import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias['@curso'] = path.resolve(__dirname, '../curso-template/src');
    return config;
  },
};

export default nextConfig;
```

#### 2. Adicionar o alias no TypeScript

```json
// apps/docs/tsconfig.json  →  dentro de "paths"
"@curso/*": ["../curso-template/src/*"]
```

#### 3. Criar o tipo `ComponentDoc`

```ts
// apps/docs/types/docs.ts
export interface PropDef {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface ExampleDef {
  label: string;
  code: string;
  props: Record<string, unknown>;
}

export interface ComponentDoc {
  slug: string;
  title: string;
  category: 'Atoms' | 'Molecules' | 'Organisms' | 'Templates';
  description: string;
  import: string;
  examples: ExampleDef[];
  props: PropDef[];
}
```

#### 4. Criar o metadata de cada componente

```ts
// apps/docs/content/components/cards.ts
import type { ComponentDoc } from '@/types/docs';

export const cardsDoc: ComponentDoc = {
  slug: 'cards',
  title: 'Cards',
  category: 'Molecules',
  description: 'Cards expansíveis com variantes de cor (azul, verde, laranja) e texto expandido em HTML.',
  import: `import { Cards } from '@modfy/ui'`,
  examples: [
    {
      label: 'Default',
      code: `<Cards cardsData={[
  ['Conceito A', 'Descrição.', '/img.jpg', 1, '<p>Expandido.</p>'],
]} />`,
      props: {
        cardsData: [
          ['Justiça Restaurativa', 'Breve descrição.', 'https://via.placeholder.com/286x274', 1, '<p>Texto expandido.</p>'],
          ['Círculos de Paz', 'Outra descrição.', 'https://via.placeholder.com/286x274', 2, '<p>Texto expandido.</p>'],
        ],
      },
    },
  ],
  props: [
    {
      name: 'cardsData',
      type: '[string, string, string, number, string][]',
      default: '—',
      description: 'Array de tuplas: [Nome, Texto, ImagemURL, Tipo (1=azul, 2=verde, 3=laranja), TextoExpandidoHTML]',
    },
  ],
};
```

#### 5. Registry central

```ts
// apps/docs/lib/registry.ts
import type { ComponentDoc } from '@/types/docs';

// Fase Ponte: importa direto de curso-template via alias @curso
// Fase B: trocar por import de '@modfy/ui'
import Cards from '@curso/components/molecules/cards/Cards';
import { cardsDoc } from '@/content/components/cards';

import Citation from '@curso/components/molecules/citation/Citation';
import { citationDoc } from '@/content/components/citation';

export const componentRegistry: Record<string, {
  Component: React.ComponentType<any>;
  doc: ComponentDoc;
}> = {
  cards:    { Component: Cards,    doc: cardsDoc    },
  citation: { Component: Citation, doc: citationDoc },
  // adicionar aqui conforme cada componente for integrado
};
```

O `page.tsx` faz apenas `componentRegistry[slug]` — sem `eval`, sem `import()` dinâmico não tipado.

#### 6. Componentes de suporte do docs

Estes três arquivos precisam ser criados em `apps/docs/components/docs/`:

**`ComponentPreview.tsx`** — renderiza o componente ao vivo com os props do metadata:

```tsx
// apps/docs/components/docs/ComponentPreview.tsx
'use client';
import React from 'react';

export function ComponentPreview({
  Component,
  props,
}: {
  Component: React.ComponentType<any>;
  props: Record<string, unknown>;
}) {
  return (
    <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
      <div className="p-4 border-b border-rule bg-[var(--bg-2)] font-jetbrains text-[11px] uppercase tracking-wider mono">
        Preview
      </div>
      <div className="p-10 flex items-center justify-center min-h-[300px] overflow-auto">
        <Component {...props} />
      </div>
    </div>
  );
}
```

**`PropsTable.tsx`** — tabela de props gerada a partir do array do metadata:

```tsx
// apps/docs/components/docs/PropsTable.tsx
import type { PropDef } from '@/types/docs';

export function PropsTable({ props }: { props: PropDef[] }) {
  return (
    <div className="border border-rule rounded-xl overflow-hidden">
      <div className="p-4 border-b border-rule bg-[var(--bg-2)] font-jetbrains text-[11px] uppercase tracking-wider mono">
        Props
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-rule">
            <th className="text-left p-3 font-jetbrains text-[11px] mono">Name</th>
            <th className="text-left p-3 font-jetbrains text-[11px] mono">Type</th>
            <th className="text-left p-3 font-jetbrains text-[11px] mono">Default</th>
            <th className="text-left p-3 font-jetbrains text-[11px] mono">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-rule last:border-none">
              <td className="p-3 font-jetbrains text-xs mono text-[var(--ink)]">{prop.name}</td>
              <td className="p-3 font-jetbrains text-xs mono text-[var(--blue)]">{prop.type}</td>
              <td className="p-3 font-jetbrains text-xs mono text-[var(--muted)]">{prop.default}</td>
              <td className="p-3 text-[var(--ink-2)] text-[13px]">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

**`CodeBlock.tsx`** — bloco de código com syntax highlighting via Shiki e botão de cópia:

```tsx
// apps/docs/components/docs/CodeBlock.tsx
// Shiki roda no servidor (Server Component) — zero JS no cliente
import { codeToHtml } from 'shiki';

export async function CodeBlock({ code, lang = 'tsx' }: { code: string; lang?: string }) {
  const html = await codeToHtml(code, {
    lang,
    theme: 'github-dark',
  });
  return (
    <div className="border border-rule rounded-xl overflow-hidden">
      <div className="p-4 border-b border-rule bg-[var(--bg-2)] font-jetbrains text-[11px] uppercase tracking-wider mono">
        Code
      </div>
      <div
        className="p-6 text-sm overflow-x-auto [&>pre]:m-0 [&>pre]:bg-transparent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
```

Instalar Shiki: `pnpm add shiki --filter docs`

#### 7. Reescrever a página de componente

```tsx
// apps/docs/app/(dashboard)/docs/components/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { componentRegistry } from '@/lib/registry';
import { ComponentPreview } from '@/components/docs/ComponentPreview';
import { PropsTable } from '@/components/docs/PropsTable';
import { CodeBlock } from '@/components/docs/CodeBlock';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ComponentPage({ params }: Props) {
  const { slug } = await params;
  const entry = componentRegistry[slug];

  if (!entry) notFound();

  const { Component, doc } = entry;
  const example = doc.examples[0];

  return (
    <div className="p-14">
      <div className="max-w-[900px] flex flex-col gap-10">
        <div>
          <div className="font-jetbrains text-[11px] tracking-[0.16em] uppercase text-[var(--muted)] mb-4 mono">
            {doc.category}
          </div>
          <h1 className="font-instrument text-[84px] leading-[0.92] tracking-[-0.035em] m-0 mb-5 serif">
            {doc.title}
          </h1>
          <p className="text-[19px] leading-[1.45] text-[var(--ink-2)]">
            {doc.description}
          </p>
        </div>

        <ComponentPreview Component={Component} props={example.props} />
        <CodeBlock code={example.code} />
        <PropsTable props={doc.props} />
      </div>
    </div>
  );
}
```

#### Limitação da Fase Ponte: CSS externo

Componentes que importam arquivos `.css` (`Carousel.tsx`, `Slider.tsx`) não funcionam em Next.js fora de CSS Modules. Para esses, duas opções:

1. Converter o CSS para Tailwind durante a migração para `packages/ui` (recomendado)
2. Renomear o `.css` para `.module.css` e ajustar os classNames (solução rápida)

Componentes prontos para a Fase Ponte (só Tailwind):

`Cards`, `Citation`, `IndentCitation`, `ListModule`, `MiniCards`, `QuoteText`, `Figure`, `Embed`, `CardFlip`

---

### Fase B — Migração: componente vai para `packages/ui`

Quando um componente já tem sua página funcionando via Fase Ponte, o próximo passo é a migração definitiva.

#### O que muda na migração

```text
ANTES (Fase Ponte)
  @curso/components/molecules/cards/Cards.tsx  ← asset paths relativos, CSS externo possível

DEPOIS (Fase B)
  packages/ui/src/components/Cards/index.tsx   ← assets como props ou bundled, só Tailwind
```

#### Critérios para o componente em `packages/ui`

1. **Sem imports de CSS externo** — usar apenas Tailwind
2. **Sem paths relativos de assets** — imagens vêm como prop `src` ou são bundled com o tsup
3. **Props tipadas com interface exportada** — o tipo fica disponível via `@modfy/ui`
4. **Exportado em `packages/ui/src/index.ts`**

#### Atualizar o registry após migração

```ts
// apps/docs/lib/registry.ts — depois da migração do Cards

// Antes:
// import Cards from '@curso/components/molecules/cards/Cards';

// Depois:
import { Cards } from '@modfy/ui';
```

A página `/docs/components/cards` não muda. Apenas o registry é atualizado.

---

### Convenção de Slugs

O slug na URL é sempre o nome do componente em **lowercase sem espaços**:

| Componente | Slug | URL |
| :--- | :--- | :--- |
| `Citation` | `citation` | `/docs/components/citation` |
| `CardFlip` | `cardflip` | `/docs/components/cardflip` |
| `IndentCitation` | `indentcitation` | `/docs/components/indentcitation` |
| `LearningBlock` | `learningblock` | `/docs/components/learningblock` |

O `Sidebar.tsx` e o registry seguem essa convenção — o slug é a única chave de ligação entre os dois.

---

## Dois Ambientes, Dois Propósitos

É fundamental entender que Storybook e Docs site têm papéis diferentes e **não são redundantes**:

| | Storybook (`localhost:6006`) | Docs Site (`apps/docs`) |
| :--- | :--- | :--- |
| **Audiência** | Desenvolvedor da biblioteca | Usuário final da biblioteca |
| **Propósito** | Desenvolver e testar componentes isolados | Documentar uso, props e exemplos |
| **Ambiente** | Local, nunca deployado como produto | Deployado em produção (Vercel) |
| **Conteúdo** | Stories técnicas, edge cases, estados | Preview curado, guia de uso, exemplos reais |
| **Durante migração** | Componentes de `curso-template` | Componentes de `packages/ui` |

O fluxo correto é: **desenvolver no Storybook → migrar para `packages/ui` → documentar no Docs site**.

---

## Ordem de Migração Recomendada

Para cada componente, seguir este checklist:

```text
[ ] 1. Componente existe em curso-template/src/components/
[ ] 2. Story existe em Storybook (molecules ou templates)
[ ] 3. Componente migrado para packages/ui/src/components/[Nome]/
[ ] 4. Exportado em packages/ui/src/index.ts
[ ] 5. Metadata criado em apps/docs/content/components/[slug].ts
[ ] 6. Adicionado ao componentRegistry em apps/docs/lib/registry.ts
[ ] 7. Página /docs/components/[slug] renderiza preview + props + código
```

---

## Filosofia

"A biblioteca cresce com o curso." — Cada componente novo criado para um curso deve ser avaliado para se tornar parte da `@modfy/ui`, e cada componente em `@modfy/ui` deve ter uma página de documentação no Docs site.
