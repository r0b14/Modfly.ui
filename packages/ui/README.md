# @modfly/ui

**Componentes feitos para aprender.** 42 exportações públicas em 39 grupos, para compor aulas em React e TypeScript.

> **v1.1.0 em preparação.** Os comandos npm abaixo dependem da publicação. Para experimentar antes, use o monorepo ou os tarballs descritos no [README principal](../../README.md#desenvolvimento).

[Instalação](#instalação) · [Exemplo](#exemplo) · [Estilos](#estilos-e-personalização) · [Documentação](#documentação)

## Instalação

```bash
pnpm add @modfly/ui@1.1.0
```

O projeto consumidor fornece React e React DOM `^18.2.0` ou `^19.0.0`. O pacote entrega ESM, CommonJS, declarações TypeScript e CSS.

## Exemplo

Importe o CSS uma vez em `src/main.tsx` no Vite ou `app/layout.tsx` no Next.js:

```tsx
import '@modfly/ui/styles.css';
```

Componha o conteúdo pelos imports públicos:

```tsx
import { Citation } from '@modfly/ui';

export function Aula() {
  return (
    <Citation
      title="Para refletir"
      text="Aprender exige prática."
      variant="yellow"
    >
      Material da aula
    </Citation>
  );
}
```

No Next.js, exemplos com estado e callbacks precisam de uma fronteira `'use client'`. A referência de cada componente apresenta tipos e demonstrações reais.

## Estilos e personalização

- O CSS compilado inclui os utilitários usados pelos componentes, sem o reset Preflight. Tailwind é opcional no consumidor.
- Alguns componentes usam Emotion internamente; ele é uma dependência do pacote.
- Variantes e propriedades de apresentação pertencem a cada componente. A v1.1 não oferece um provider universal de tema.
- Para modificar a implementação, use a [CLI modfly](../cli/README.md). Classes Tailwind novas no código copiado precisam ser compiladas pelo projeto consumidor.
- Imagens, textos e navegação do curso são fornecidos pela aplicação. Conteúdo HTML deve ser confiável e sanitizado por ela.

## Documentação

[Catálogo PT](https://modfly.design/pt/docs/components) · [Catalog EN](https://modfly.design/en/docs/components) · [Arquitetura e desenvolvimento](../../README.md#arquitetura) · [Evidências da release](../../docs/projeto/entrega-v1.1.md)

Os domínios públicos ainda dependem da configuração de publicação registrada no relatório. A documentação também pode ser executada localmente pelo monorepo.

Licença MIT — preserve a atribuição ao redistribuir o código.
