# @modfly/ui-avamec

Questões React com estado de atividade e adaptadores AVAMEC. Versão em preparação: 1.1.0.

Importe `@modfly/ui-avamec/styles.css` no entrypoint global. Use `QuestionsProvider` com uma `ActivityDefinition` e um adaptador estável; `ActivityQuestions` renderiza todos os formatos e o envio.

Adaptadores: `createMemoryAdapter()` para demonstração, `createLocalAdapter(storage, namespace)` para armazenamento local explícito e `createAvamecAdapter(bridge)` para integração remota.

Não migra automaticamente props nem progresso de cursos legados. Envios sem confirmação ficam bloqueados para reconciliação. A integração real exige homologação.

[Guia e exemplo completo](https://modfly.design/docs/getting-started/avamec) · [Contrato e migração](https://github.com/r0b14/Modfly.ui/blob/main/docs/integracoes/avamec-v1.1.md) · MIT.
