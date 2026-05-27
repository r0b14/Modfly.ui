---
description: Diretrizes para estruturação e manutenção de componentes de Questões no AVAMEC.
---

# Estruturação de Questões (Padrão AVAMEC)

Estas diretrizes definem as regras arquiteturais e de fluxo de dados que devem ser seguidas ao criar ou modificar componentes de questões (ex: `Question`, `QuestionTrueOrFalse`, `QuestionMultipleAnswer`) e seus respectivos contextos (`QuestionsContext`) e botões de envio (`SendActivityButton`) no ambiente AVAMEC.

## 1. Princípio Base: Single Source of Truth na API

O projeto utiliza um modelo Client-Server onde a verdadeira persistência de estado (True Memory) reside na API do AVAMEC (`BridgeRestApi`), e não apenas no estado local do React ou no `localStorage` (Visual Memory).

- **Regra:** Todo componente de questão DEVE consultar a API ao ser montado para reconstruir seu estado anterior.

## 2. Gerenciamento de Estado (Contexto e Persistência)

- O gerenciamento de estado das questões e do progresso do usuário durante a resolução é feito através do `QuestionsContext.tsx`.
- **Sincronização:** Alterações no estado (ex: `questionArray`, `questionAnsweredArray`, `showResult`) devem ser salvas na API usando o método assíncrono genérico `API.registrarDadosGenericos`.
- **Caching Local:** O contexto deve utilizar um sistema de cache (`stateCache`) aliado ao `localStorage` para transições rápidas e resiliência (ex: transição entre edição vs exibição de resultado), mas a fonte autoritativa final para inicializar a atividade ao carregar um novo slide é a chamada da respectiva API para recuperar dados ou respostas.

## 3. O Botão de Envio (`SendActivityButton`)

O botão de envio atua como o controlador do ciclo de vida da atividade do slide.

- **Consulta da API:** Ao carregar (e a cada montagem, para sincronia de estado), o botão DEVE invocar `API.obterRespostaAtividade(activityId)` para verificar a `situacao` e a `nota` atual daquela atividade.
- **Máquina de Estados de Visualização:**
  - Se a atividade retorna como concluída (ex: `situacao === 'AVALIADA'` ou nota não nula):
    - E a avaliação for positiva (aprovado/sucesso), a interface bloqueia e mantém visíveis os resultados em modo `VIEWING_RESULT`. O botão pode indicar apenas "RESPOSTA CORRETA".
    - Se for nota de falha _(errou alguma)_ e restarem tentativas, transita para o estado `EDITING` ao acionar "TENTAR NOVAMENTE" (com `showResult` em false), mantendo feedbacks de modo que a seleção original pode ser editada e reenviada.
- **Limite de Tentativas:** Deve monitorar a variável customizada de controle na API (ex: `errorsFPIA_M{modulo}_S{slide}`) por intermédio de `obterDadosGenericos` para gerir rigidamente quantas chances sobram, reagindo desabilitando o botão se chegar a 0 chances.
- **Envio Consistente:** O JSON DEVE seguir estritamente o formato esperado e submetido via `API.registrarRespostaAtividade()`. Race conditions aqui devem ser evitadas, não lendo estados velhos do backend imediatamente após submeter novos.

## 4. O Componente de Questão (`Question`, etc.)

As questões (múltipla escolha, V/F, arrasta-e-solta, etc.) partilham a mesma filosofia fundacional de ciclo de inicialização:

1. **Padrão de Inicialização e Hidratação:**

   - Deve ser executada uma verificação dupla (assíncrona) de dados iniciais no evento de mount de cada instância do componente.
   - **Hidratação de Memória Ocular (`LocalStorageLoad`):** Resgata instantaneamente as seleções do browser local, caso disponíveis.
     - _Cuidado de Race Condition:_ Na hidratação inicial visual, insira um atraso obrigatório (ex: `setTimeout` de no mínimo **500ms**) antes de setar o estado para que os resetadores de contexto (`resetContext()`) tenham concluído a quebra de cachês e não esmaguem a leitura recente.
   - **Hidratação Profunda Autoritativa (`True Memory`):** Chama o backend via `API.obterRespostaAtividade`, iterando sobre `questoesUsuario` e ressyncando o `questionArray` para garantir que respostas consolidadas permaneçam efetivamente conferidas nos gabaritos do react state.

2. **Reatividade à Situação (Feedback Rendering):**

   - Em layout e iteratividade, reaja _apenas_ às tags `showResult` e `feedbackShow` providas pelo `QuestionsContext`.
   - Quando `showResult === true`: Bloqueie TODOS os inputs (`pointer-events: none`). Exiba cores de gabarito para as respostas `correctAnswer-Question` (verde) e `incorrectAnswer-Question` (vermelho) apenas nas assinaladas.
   - Quando o state se torna `false` após tentar novamente: Exiba a cor e interatividade iniciais novamente limpando as classes visuais de erro das seleções mas preservando a assinalação em si (para que ele comece do ponto que havia parado).

3. **Event Handler Sensível a Limitações:**
   - Todo click em uma resposta acarreta imediatamente em gravar localmente seu id modificado (`LocalStorageSave`).
   - No `onChange/onClick`, avise ao Contexto via `updateQuestionAnsweredArray` que determinada posição na tela de lista de respostas possui conteúdo valido, para que ferramentas e o botão possam saber que está devidamente respondida.
   - Mute eventos ou preste atenção imediata no caso de _Múltiplas Escolhas (Multiple Answer)_ limitando _visualmente_ escolhas caso o `maxSelections` tenha sido atingido, ao invés de aceitar eventos até esperar react setar o estado negando-os na iteração seguinte, provendo melhor Resposta Visual.

## 5. Estrutura do JSON Esperado

- **Retorno da API (Leitura em obterRespostaAtividade):** Preste atenção no trajeto `questoesUsuario[i].respostas[j].chave` e em `.valor`. A `chave` costuma mapear IDs (IDs da radio button 1,2,3).
- **Envio para API (`registrarRespostaAtividade` dentro de CheckAnswer no SendAtivityButton):**
  Estruturação padrão básica de payload:
  ```json
  {
    "identificador": "ID_DA_ATIVIDADE", // Ex: moduloAvaliativo_S1M2
    "questoes": [
      {
        "identificador": "ID_DA_QUESTAO", // Ex: S1M2_1
        "gabaritos": [{ "chave": "1", "valor": "0 ou 1" }]
      }
    ]
  }
  ```
