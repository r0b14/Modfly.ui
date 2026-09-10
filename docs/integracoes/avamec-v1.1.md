# AVAMEC na Modfly UI 1.1

O pacote `@modfly/ui-avamec` separa renderização, estado da atividade e persistência. O core `@modfly/ui` não conhece a plataforma.

## Contrato público

- `ActivityDefinition`: módulo, slide, questões e `maxAttempts` (padrão 3).
- `QuestionDefinition`: união discriminada por `type`; todos os formatos têm `id`, `prompt` e feedback opcional.
- `Answer`: string, lista de strings ou mapa de respostas por linha.
- `QuestionsProvider`: recebe a atividade e um adaptador estável. Mudanças de definição recriam o controlador.
- `ActivityQuestions`: renderiza a atividade completa. Componentes individuais recebem a prop `question` e usam o mesmo provider.
- `ActivityAdapter`: `load`, `save`, `submit` e `result`, todos assíncronos.
- `AvamecBridge`: descreve os quatro métodos usados da plataforma; não há instanciação automática de `window.BridgeRestApi`.

As alternativas e linhas têm IDs únicos. Gabaritos devem apontar para opções existentes. Questões escritas aceitam uma lista de respostas equivalentes; espaços nas extremidades são ignorados e a comparação não diferencia caixa, salvo `caseSensitive: true`. Elas não realizam avaliação semântica de texto livre.

## Persistência e tentativas

O payload mantém os identificadores `moduloAvaliativo_S{slide}M{module}`, `MA_S{slide}M{module}` e `S{slide}M{module}_{id}`. Cada gabarito contém as duas chaves binárias do [contrato documentado](avamec-padrao-payload-api-questoes.md).

Respostas e estado detalhado são salvos nos dados genéricos, em `modfly_v1_M{module}_S{slide}`. Esse registro versionado não é o formato de armazenamento do curso antigo.

1. Carregar estado e consultar a avaliação da plataforma antes de permitir edição.
2. Gravar alterações em sequência; carregar não dispara gravações vazias.
3. Exigir respostas completas e persistir o marcador `submitting` antes do envio.
4. Confirmar o envio, incrementar tentativa e persistir resultado.
5. Em falha na gravação final, repetir apenas essa gravação.
6. Em timeout ou rejeição de envio sem confirmação, bloquear como `uncertain`.

O contrato existente não permite distinguir uma requisição perdida de uma recebida cuja resposta se perdeu. Por isso não há reenvio automático de avaliações incertas. A reconciliação depende da plataforma e deve ser definida na homologação. Uma nota existente sem estado detalhado também bloqueia a edição para impedir perda de histórico.

`createLocalAdapter(storage, namespace)` é explícito: o namespace precisa identificar curso e estudante. Não é fallback para falhas remotas. `createMemoryAdapter()` serve a exemplos e testes, sem persistência após recarregar.

## Migração de cursos existentes

Não substitua as questões antigas por imports novos sem migrar as props e o estado. As tuplas e arrays de callbacks do legado são substituídos por uma definição tipada da atividade.

| Legado | v1.1 |
| --- | --- |
| `Question`, `QuestionOneAnswerNormal`, `QuestionOption` | `QuestionOption` com `type: 'option'` |
| Estado global com arrays indexados | Estado por `question.id` dentro da atividade |
| Instanciação global de BridgeRestApi em cada componente | Adaptador injetado uma vez |
| `SendActivityButton` monta e dispara requests | Controller centraliza avaliação e envio |
| Chaves `activityState_*`, `selections_*`, `PRQuestion*` | Registro versionado `modfly_v1_*` |
| Resposta escrita em vários campos | Uma questão `written` por campo; respostas equivalentes em `correctAnswer` |

Não há migração automática de progresso. Um curso com alunos ativos precisa de conversão e reconciliação dos seus dados antes de adotar o novo pacote. Mantenha os IDs das questões alinhados ao cadastro da atividade na plataforma.

## Homologação obrigatória

Usar conta de teste e curso isolado. Conferir os sete formatos, acerto/erro, limite de tentativas, refresh, troca de atividade, restauração em outro dispositivo, falha de rede antes e depois do envio e erro na gravação de dados genéricos. Validar respostas reais do bridge, incluindo eventuais APIs baseadas em callbacks.

A implementação cobre o contrato interno do repositório. Testes locais não substituem essa homologação; registrar URL do ambiente, versão testada, resultados e evidência antes da publicação estável.
