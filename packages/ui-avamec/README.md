# @modfly/ui-avamec

Atividades React com avaliação, estado compartilhado e persistência explícita.

> **v1.1.0 em preparação.** A publicação npm e a homologação real são etapas externas de lançamento. Antes da publicação, use os tarballs ou o ambiente local do [monorepo](../../README.md#desenvolvimento).

[Exemplo](#exemplo) · [Adaptadores](#adaptadores) · [Formatos](#formatos) · [Persistência](#persistência-e-migração) · [Documentação](#documentação)

## Exemplo

Requer React e React DOM `^18.2.0` ou `^19.0.0`. O pacote distribui ESM, CommonJS, tipos e CSS. Importe o CSS uma vez no entrypoint global.

```bash
pnpm add @modfly/ui-avamec@1.1.0
```

```tsx
'use client';

import { useMemo } from 'react';
import {
  ActivityQuestions, QuestionsProvider, createMemoryAdapter,
} from '@modfly/ui-avamec';
import type { ActivityDefinition } from '@modfly/ui-avamec';
import '@modfly/ui-avamec/styles.css';

const activity: ActivityDefinition = {
  module: 1,
  slide: 1,
  maxAttempts: 3,
  questions: [{
    id: '1',
    type: 'option',
    prompt: 'O que ajuda a consolidar o aprendizado?',
    options: [
      { id: 'a', label: 'Praticar e receber feedback' },
      { id: 'b', label: 'Ignorar dúvidas' },
    ],
    correctAnswer: 'a',
  }],
};

export function Atividade() {
  const adapter = useMemo(() => createMemoryAdapter(), []);
  return (
    <QuestionsProvider activity={activity} adapter={adapter}>
      <ActivityQuestions />
    </QuestionsProvider>
  );
}
```

## Adaptadores

O exemplo usa memória e reinicia ao recarregar. Para persistência local, use `createLocalAdapter(storage, namespace)` com um namespace por curso e estudante. Para a plataforma, injete um `AvamecBridge` em `createAvamecAdapter(bridge)`.

## Formatos

| Formato | Identificador em `ActivityDefinition` |
| --- | --- |
| Alternativa única | `option` |
| Múltiplas respostas | `multiple` |
| Verdadeiro ou falso por linha | `true-false` |
| Classificação em grade | `grid` |
| Correlação | `correlation` |
| Arrastar ou selecionar pelo teclado | `drag-drop` |
| Resposta textual aceita | `written` |

Você pode usar `ActivityQuestions` ou compor os componentes individualmente dentro do provider. A resposta escrita usa comparação textual com respostas aceitas; não realiza avaliação semântica.

## Persistência e migração

O envio separa **resultado binário** de **respostas detalhadas**. Erros remotos são exibidos. Um envio sem confirmação bloqueia novas tentativas até reconciliação; o contrato existente não oferece idempotência para repetir uma requisição com segurança. A implementação não migra automaticamente o estado dos cursos antigos.

## Documentação

[Guia PT](https://modfly.design/pt/docs/getting-started/avamec) · [Guide EN](https://modfly.design/en/docs/getting-started/avamec) · [Contrato e homologação](../../docs/integracoes/avamec-v1.1.md) · [Status da release](../../docs/projeto/entrega-v1.1.md)

Os domínios públicos ainda dependem da configuração de publicação. Homologação real é uma condição de lançamento, não uma consequência dos testes com simulador.

Licença MIT — preserve a atribuição ao redistribuir o código.
