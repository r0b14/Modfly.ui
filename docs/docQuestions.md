Com base na análise minuciosa do documento técnico (PDF) do padrão AVAMEC, especificamente o tópico **5.5.6 - Atividade** e as definições de estruturas JSON, elaborei o seguinte conjunto de instruções e descrições técnicas.

Estas diretrizes servirão de "Base de Conhecimento" para o Agente de IA analisar os problemas de persistência (seleção, feedback e estado do botão de envio) no seu projeto.

---

# Diretrizes Técnicas para Agente de IA: Persistência de Atividades no AVAMEC

## 1. Contexto da Arquitetura de Dados (Bridge REST API)

O Agente deve compreender que o AVAMEC opera num modelo **Client-Server** via `Post Message` e `BridgeRestApi`. O Frontend (conteúdo do curso) não deve manter estado apenas na memória volátil (RAM/Variáveis locais do JS) entre trocas de slides.

* **A Regra de Ouro:** Toda vez que um slide contendo uma atividade é carregado, o frontend **deve** consultar a API para saber o estado anterior daquela atividade.

## 2. Métodos da API Envolvidos (Referência PDF Seção 5.5.6)

O Agente deve monitorar e verificar a implementação correta dos dois métodos vitais para o ciclo de vida da atividade:

### A. Envio (Escrita)

* **Método:** `API.registrarRespostaAtividade(payload)`
* **Uso:** Chamado quando o botão "Enviar" (`sendactivitybutton`) é acionado.
* **Comportamento:** Envia um JSON contendo o `identificador` da atividade e um array `questoes` com as respostas (`chave` e `valor`) escolhidas pelo aluno.

### B. Recuperação (Leitura/Persistência)

* **Método:** `API.obterRespostaAtividade(identificadorAtividade)`
* **Uso:** **Obrigatório** ser chamado no evento de "mount" ou "load" do slide/componente da questão.
* **Retorno Crítico:** Retorna um objeto contendo:
  * `situacao`: Status da avaliação (ex: "AVALIADA", "PENDENTE_AVALIACAO").
  * `nota`: Nota obtida (se já avaliada).
  * `questoesUsuario`: Array contendo as respostas que o aluno enviou anteriormente.

---

## 3. Lógica para Resolução dos Problemas Específicos

O Agente deve utilizar a lógica abaixo para diagnosticar os três problemas relatados:

### Problema 1: Persistência das alternativas selecionadas (Checkbox/Radio/Input)

**Instrução para o Agente:**
Para garantir que as alternativas permaneçam marcadas ao voltar para o slide, o código deve seguir este fluxo:

1. **Check de Inicialização:** Ao carregar o componente da questão, invocar `API.obterRespostaAtividade('ID_DA_ATIVIDADE')`.
2. **Análise de Retorno:**
    * Verificar se o array `questoesUsuario` dentro do objeto de retorno possui itens.
    * Iterar sobre `questoesUsuario[i].respostas`.
3. **Mapeamento (Match):**
    * Comparar a `chave` retornada pela API com o ID/Value dos inputs (alternativas) locais.
    * **Ação:** Se houver correspondência, definir o estado do componente (ex: `checked={true}` ou `selected={true}`) programaticamente.
    * *Nota do PDF (pág. 47):* O retorno traz `chave` e `valor`. Para questões de múltipla escolha (INTEGRAL/PROPORCIONAL), a presença da `chave` no array de respostas indica que ela foi selecionada.
4. **Resolução de Race Condition (Padrão de Ouro de Inicialização):**
    * **Erro Identificado:** O componente Questão (filho) carrega o estado do `localStorage` (10ms) antes que o componente Página (pai/contexto) termine de zerar o contexto (`resetContext`), fazendo com que as respostas restauradas sejam apagadas logo em seguida.
    * **Solução Obrigatória (Timing):** O método `LocalStorageLoad` deve estar envolto em um `setTimeout` de no mínimo **500ms** (meio segundo).
    * **Sincronia Visual:** A renderização dos Feedbacks (`if (showResult)`) deve ocorrer **DENTRO** do callback do `setTimeout`, estritamente *após* a restauração dos dados. Isso evita que o feedback seja calculado sobre dados vazios, o que mostraria respostas como "incorretas" por um breve momento.
    * **Hooks:** Deve-se remover a própria função `LocalStorageLoad` do array de dependências do `useCallback` para evitar loops e travamentos. Padrão "Fire-and-forget" na inicialização via `useEffect`.

### Problema 2: Persistência dos Feedbacks (Certo/Errado/Correção)

**Instrução para o Agente:**
O feedback visual não deve depender apenas da ação imediata do clique no botão enviar, mas sim do estado retornado pela API.

1. **Verificação de Estado:**
    * No retorno de `API.obterRespostaAtividade`, ler o campo `situacao`.
2. **Lógica de Renderização:**
    * Se `situacao` == "AVALIADA" (ou status similar indicando conclusão):
        * O frontend deve bloquear a edição das questões (modo *read-only*).
        * O frontend deve exibir os componentes de feedback (ícones de V/F, cores de sucesso/erro) baseando-se na comparação entre o `gabarito` (que o frontend já possui ou busca via `obterConfiguracaoAtividade`) e as respostas vindas em `questoesUsuario`.
    * *Atenção:* O PDF (pág. 46) mostra que o retorno já inclui a `nota` e a `formaAvaliacao`. Se a nota existe, o feedback deve estar visível.

### Problema 3: Persistência do componente `sendactivitybutton`

**Instrução para o Agente:**
O botão de envio não deve ser "stateless". Ele reage ao histórico da atividade.

1. **Consulta de Tentativas/Status:**
    * Ao carregar o slide, verificar o retorno de `API.obterRespostaAtividade`.
    * Verificar os campos `situacao` e `quantidadeRespostasResgistradas` (Pág. 46/48 do PDF).
2. **Máquina de Estados do Botão:**
    * **Estado Inicial:** Se `questoesUsuario` é vazio -> Botão Habilitado (Texto: "Enviar").
    * **Estado Já Respondido (Sucesso):** Se `situacao` == "AVALIADA" -> Botão Desabilitado OU oculto OU alterado para "Tentativa Finalizada" (dependendo da regra de negócio de múltiplas tentativas do curso).
    * **Estado Reenvio (Se permitido):** Se o curso permite múltiplas tentativas e a nota não foi máxima -> Botão Habilitado (Texto: "Tentar Novamente").

### Problema 4: Inconsistência de `maxSelections` e "Ghost Inputs"

**Problema:**
Em questões de múltipla escolha com limite (`maxSelections`), o usuário conseguia visualmente selecionar mais opções do que o permitido devido ao evento DOM `onClick` ocorrer antes da valwidação React, e o `LocalStorageLoad` restaurava estados inconsistentes.

**Instrução para o Agente:**
1. **Visual Reversion (UX):**
    * No handler de clique (`handleInputChecked`), se o limite for atingido, force manualmente `element.checked = false` no DOM. O React State (Virtual DOM) às vezes é lento demais para impedir o feedback visual nativo do browser.
2. **Safe Hydration (Persistência):**
    * No método `LocalStorageLoad`, adicione um contador (`loadedCount`) que interrompe a restauração se `loadedCount >= maxSelections`. Nunca confie que o LocalStorage contém dados válidos.
3. **API Authority (Double Check):**
    * Sempre hidrate (adicione seleções) baseado no array `questoesUsuario` da API, pois ele representa a verdade no servidor.

---

## 4. Estruturas de Dados de Referência (Snippets do PDF)

O Agente deve validar se o *payload* enviado e recebido segue estritamente os padrões abaixo para evitar erros de parser (Códigos de erro ME34_04, ME91, etc).

**Estrutura de Resposta Esperada (Leitura - `obterRespostaAtividade`):**
*(Baseado nas páginas 46 e 47)*

```json
{
  "status": 200,
  "data": {
    "nota": 10,
    "situacao": "AVALIADA", // Campo crucial para o Problema 3
    "mapaAtributos": {
        "quantidadeRespostasResgistradas": 1
    },
    "questoesUsuario": [
      {
        "questao": {
            "identificador": "Q1_ID",
            "tipoQuestao": "INTEGRAL"
        },
        "respostas": [ // Crucial para o Problema 1
          {
            "chave": "1", // ID da alternativa selecionada
            "valor": "3"  // Valor associado
          }
        ]
      }
    ]
  }
}
```

**Estrutura de Envio (Escrita - `registrarRespostaAtividade`):**
*(Baseado na página 40)*

```json
{
  "identificador": "atividade_id_uni_1",
  "questoes": [
    {
      "identificador": "Q1_ID",
      "gabaritos": [
        { "chave": "1", "valor": "3" }
      ]
    }
  ]
}
```

## 5. Checklist de Diagnóstico para o Agente

Ao analisar o código fonte do componente da questão, o agente deve responder:

1. Existe um `useEffect` (ou equivalente no ciclo de vida) que chama `obterRespostaAtividade`?
2. O estado local das checkboxes (`checked`) é inicializado usando os dados vindos dessa chamada da API?
3. O componente de feedback tem uma condicional `if (status === 'AVALIADA')` para renderizar automaticamente ao carregar?
4. O botão de envio possui lógica `disabled={status === 'AVALIADA'}`?
