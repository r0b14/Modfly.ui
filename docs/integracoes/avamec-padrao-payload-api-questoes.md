# Padrão de Integração API AVAMEC - Questões

Este documento descreve o padrão de payload JSON utilizado para submissão de respostas de atividades avaliativas para a API do AVAMEC no projeto EDC-SEB.

## 1. Visão Geral

O sistema utiliza uma abordagem de **validação no frontend**. O cliente (aplicação React) é responsável por determinar se a resposta do usuário está correta ou incorreta. O payload enviado para a API reflete apenas o status de acerto ou erro, abstraindo a lógica específica de cada tipo de questão (múltipla escolha, correlação, drag & drop, etc.).

## 2. Estrutura do Payload

O envio é feito através de um objeto JSON contendo o identificador da atividade e uma lista de questões com seus respectivos gabaritos binários.

```json
{
  "identificador": "string",
  "nomeAtividade": "string",
  "questoes": [
    {
      "identificador": "string",
      "gabaritos": [
        { "chave": "string", "valor": "string" },
        { "chave": "string", "valor": "string" }
      ]
    }
  ]
}
```

## 3. Detalhamento dos Campos

### 3.1. Cabeçalho da Atividade

| Campo | Formato | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `identificador` | `moduloAvaliativo_S{slide}M{modulo}` | ID único da atividade avaliativa. | `moduloAvaliativo_S12M2` |
| `nomeAtividade` | `MA_S{slide}M{modulo}` | Nome curto da atividade. | `MA_S12M2` |

* **{slide}**: Número do slide/página onde a atividade se encontra.
* **{modulo}**: Número do módulo atual.

### 3.2. Lista de Questões (`questoes`)

Array de objetos representando cada questão respondida na atividade.

| Campo | Formato | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `identificador` | `S{slide}M{modulo}_{numero}` | ID único da questão. Deve corresponder ao ID da atividade com sufixo numérico. | `S12M2_1` |
| `gabaritos` | `Array<{chave, valor}>` | Representação binária do resultado (Acerto/Erro). | Ver abaixo |

## 4. Padrão de Gabarito Binário

Para garantir compatibilidade e simplificar a validação no backend, utilizamos um padrão fixo de chaves e valores para indicar sucesso ou falha.

### ✅ Resposta Correta (Acerto)

Quando o usuário acerta a questão, o sistema envia:

```json
"gabaritos": [
  { "chave": "1", "valor": "1" },
  { "chave": "2", "valor": "0" }
]
```

### ❌ Resposta Incorreta (Erro)

Quando o usuário erra a questão, o sistema envia:

```json
"gabaritos": [
  { "chave": "1", "valor": "0" },
  { "chave": "2", "valor": "1" }
]
```

> **Nota:** A lógica de "chave 1" representar acertos e "chave 2" representar erros é uma convenção adotada para este projeto para mapear booleanos em uma estrutura de chave-valor esperada pela API.

## 5. Exemplo Completo

Exemplo de payload para uma atividade no **Módulo 2**, **Slide 12**, contendo **1 questão** que foi respondida **corretamente**:

```json
{
  "identificador": "moduloAvaliativo_S12M2",
  "nomeAtividade": "MA_S12M2",
  "questoes": [
    {
      "identificador": "S12M2_1",
      "gabaritos": [
        {
          "chave": "1",
          "valor": "1"
        },
        {
          "chave": "2",
          "valor": "0"
        }
      ]
    }
  ]
}
```

## 6. Pontos de Atenção para Desenvolvedores

1. **Consistência de IDs**: É crucial que o `identificador` da questão (`S12M2_1`) coincida com o `identificador` da atividade (`moduloAvaliativo_S12M2`) em seus prefixos. IDs órfãos (ex: questão `S11M1_1` dentro da atividade `S12M2`) causam erro 500 ou rejeição silenciosa na API.
2. **Validação Local**: Como o payload envia apenas o resultado final, toda a lógica de validação (qual alternativa é a correta, quantas seleções são permitidas, etc.) deve estar implementada e testada no componente React antes do envio.
3. **QuestionsContext**: A geração deste payload é centralizada no método `preparePayload` do `QuestionsContext`. Evite construir payloads manualmente nos componentes para prevenir regressões.

## 7. Persistência Híbrida (Sidecar) - "QuestionMultipleAnswer"

Para questões complexas (Múltipla Escolha) que exigem a persistência exata de quais checkboxes foram marcados, mas onde o padrão do AVAMEC exige apenas status binário (Certo/Errado), utiliza-se o padrão **Sidecar**.

### 7.1. O Problema

Se enviarmos o payload customizado (ex: `{chave: "2", valor: "1"}`) para persistir que o usuário marcou a opção 2, a API do AVAMEC pode rejeitar ou falhar em contabilizar como "tentativa válida" se esperar apenas o padrão binário. Se enviarmos apenas o binário, perdemos a informação de qual opção o usuário marcou ao recarregar a página (o usuário vê a opção 1 marcada pois o binário "1" é interpretado como índice).

### 7.2. A Solução (Dados Genéricos)

Utilizamos um canal secundário de dados (`API.registrarDadosGenericos`) para salvar o estado visual granular.

**Fluxo de Envio (`SendActivityButton`):**

1. Envia `registrarRespostaAtividade` com payload estritamente binário (1=Acerto, 0=Erro) para garantir nota e tentativas.
2. Envia `registrarDadosGenericos` com um JSON contendo os índices reais selecionados.

**Chave do Dado Genérico:**
`selections_M{modulo}_S{slide}`

**Valor do Dado Genérico:**

```json
{
  "1": [2, 3, 5], // Questão 1: Índices 2, 3 e 5 selecionados
  "2": [1, 4]     // Questão 2: Índices 1 e 4 selecionados
}
```

**Fluxo de Leitura (`QuestionMultipleAnswer`):**

1. Chama `obterRespostaAtividade` para verificar status ("AVALIADA") e bloquear interface.
2. Chama `obterDadosGenericos` para recuperar quais checkboxes devem aparecer marcados.
