# Fluxo Saudável de Componentes — Fonte, Validação e Documentação

Este documento registra a decisão de arquitetura sobre como um componente deve sair de um curso real, passar por validação visual e chegar ao pacote público da Modfly UI.

## Princípio central

Nem tudo que renderiza um componente é fonte de verdade.

| Papel | Caminho | Função |
|---|---|---|
| Fonte original de curso | `apps/curso-template` | Lugar onde componentes podem nascer no contexto de um curso real. |
| Validação visual | `apps/storybook` | Laboratório para testar estados, variantes, responsividade e assets. |
| Fonte consumível da lib | `packages/ui` | API pública importada por consumidores via `@modfly/ui`. |
| Documentação pública | `apps/docs` | Guia editorial, exemplos curados, props e demonstrações públicas. |

Regra: **Storybook e Docs são consumidores/renderizadores; `packages/ui` é a fonte da biblioteca.**

## Fluxo saudável

```text
apps/curso-template ou novo componente isolado
        ↓
Storybook valida visualmente
        ↓
packages/ui recebe a versão limpa, tipada e exportada
        ↓
apps/docs documenta a API pública e exemplos de uso
        ↓
consumidor instala/importa @modfly/ui
```

O Storybook entra antes da documentação pública porque ele é o ambiente certo para testar o componente em isolamento. Ele não deve virar dependência runtime do `apps/docs`, nem gerar o pacote. Ele aprova visualmente a migração.

## O que cada etapa precisa entregar

### 1. Curso ou protótipo

- Componente nasce em um curso real ou em um spike isolado.
- Pode conter acoplamentos temporários do curso, assets locais ou nomes ainda específicos.
- Deve ser avaliado: se for reutilizável, entra no fluxo da biblioteca; se for específico, permanece no curso.

### 2. Storybook

- Criar stories para estados principais, variações, responsividade e casos limite.
- Usar o componente real que será migrado ou já migrado, não uma recriação visual separada.
- Validar assets, dimensões, comportamento e combinações de props antes da documentação pública.

### 3. `packages/ui`

- Mover/refatorar o componente para `packages/ui/src/components/<camada>/<nome>/`.
- Remover acoplamento com curso, rota, plataforma ou conteúdo final.
- Tipar props e exportar componente/tipos pelo `packages/ui/src/index.ts`.
- Tratar assets conforme `docs/front/guia-assets-png-svg.md` e, quando houver variantes por curso, conforme `docs/front/assets-multi-curso.md`.

### 4. `apps/docs`

- Criar rota estática `apps/docs/app/(dashboard)/docs/components/<slug>/page.tsx`.
- Documentar uso, props, variantes, acessibilidade e exemplos copiáveis.
- A página deve representar a API pública de `@modfly/ui`.
- Enquanto houver incompatibilidade de assets/CSS no Next.js, o preview pode ser recriado visualmente, mas deve ser conferido contra o Storybook.

## Antipadrões a evitar

- `apps/docs` importar stories do Storybook como dependência de runtime.
- Storybook ser tratado como fonte de verdade do pacote.
- `packages/ui` importar arquivos de `apps/*`.
- Documentar props que não existem mais no componente exportado.
- Manter preview da docs divergente da story aprovada.

## Plano de ação

1. Definir a ordem de componentes prioritários: começar pelos que já estão migrados em `packages/ui` e têm maior uso nos cursos.
2. Para cada componente, criar ou revisar stories no `apps/storybook` com estados principais e variantes reais.
3. Confirmar que a implementação final está em `packages/ui` e exportada por `packages/ui/src/index.ts`.
4. Criar ou atualizar a página em `apps/docs` usando a API pública como referência.
5. Conferir visualmente Docs vs Storybook antes de considerar a página publicada.
6. Quando o componente depender de assets por curso, aplicar asset maps antes de expandir variantes.
7. Automatizar o fluxo em CI depois: build de `packages/ui`, build do Storybook e build de `apps/docs`.

## Critério de pronto por componente

Um componente só deve ser considerado pronto para a biblioteca quando:

- Tem implementação em `packages/ui`.
- Tem export público e tipos exportados.
- Tem story cobrindo estados principais.
- Tem página pública em `apps/docs`.
- A documentação usa a mesma API pública descrita nos tipos.
- Assets estão colocalizados ou mapeados por curso.
- Build da lib, Storybook e Docs passa sem erro.
