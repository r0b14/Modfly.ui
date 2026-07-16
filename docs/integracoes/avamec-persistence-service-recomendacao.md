# Recomendação de Padrão de Persistência de Dados

Para garantir que o ambiente de teste (local) seja o mais fiel possível ao ambiente de homologação/produção (AVAMEC) e resolver os problemas de inconsistência com `localStorage`, recomendo a implementação de uma camada de abstração para a persistência de dados.

## Problema Atual

1.  **Inconsistência**: Alguns componentes (`Question`, `QuestionTrueOrFalse`) tentam usar a API `BridgeRestApi` e fazem fallback para `localStorage`, enquanto outros (`QuestionMultipleAnswer`) usam **apenas** `localStorage`.
2.  **Ambiente de Teste vs. Produção**: Em desenvolvimento local, `window.BridgeRestApi` geralmente não existe, forçando o uso do `localStorage`. Em produção, a API existe, mas se o código priorizar ou misturar lógicas, pode haver conflitos.
3.  **Perda de Dados**: O `localStorage` é local do navegador. Se o aluno trocar de computador ou limpar o cache, perde o progresso parcial (quais opções marcou), mesmo que o AVAMEC tenha registrado a nota final.

## Solução Proposta: `PersistenceService`

Criar um serviço unificado (classe ou módulo) que gerencie toda a leitura e escrita de dados temporários (estado das questões).

### 1. Estrutura do Serviço (`src/services/PersistenceService.ts`)

Este serviço deve implementar a seguinte lógica:

1.  **Verificação de Ambiente**: Detectar se `window.BridgeRestApi` está disponível.
2.  **Interface Unificada**: Métodos `save(key, value)` e `load(key)` que funcionam independentemente do ambiente.
3.  **Fallback Transparente**:
    *   **Produção (API disponível)**: Chama `API.registrarDadosGenericos` e `API.obterDadosGenericos`.
    *   **Desenvolvimento (API indisponível)**: Usa `localStorage` simulando o comportamento da API (assíncrono).

### 2. Exemplo de Implementação

```typescript
// src/services/PersistenceService.ts

export class PersistenceService {
  private api: any;

  constructor() {
    // Verifica se a API do Bridge está disponível no escopo global
    if (typeof window !== 'undefined' && (window as any).BridgeRestApi) {
      this.api = new (window as any).BridgeRestApi();
    }
  }

  /**
   * Salva um valor (objeto ou string) associado a uma chave.
   */
  async saveData(key: string, value: any): Promise<void> {
    const stringValue = JSON.stringify(value);

    if (this.api) {
      try {
        await this.api.registrarDadosGenericos(key, stringValue);
      } catch (error) {
        console.error(`[PersistenceService] Erro ao salvar na API: ${key}`, error);
        // Opcional: Fallback para localStorage mesmo em produção se a API falhar?
        // localStorage.setItem(key, stringValue); 
      }
    } else {
      // Ambiente de Desenvolvimento (Local)
      console.log(`[DevMode] Salvando no LocalStorage: ${key}`);
      localStorage.setItem(key, stringValue);
    }
  }

  /**
   * Recupera um valor associado a uma chave.
   */
  async loadData<T>(key: string): Promise<T | null> {
    if (this.api) {
      try {
        const result = await this.api.obterDadosGenericos(key);
        if (result && result.data && result.data[0] && result.data[0].valor) {
          return JSON.parse(result.data[0].valor) as T;
        }
      } catch (error) {
        console.warn(`[PersistenceService] Dados não encontrados na API ou erro: ${key}`);
      }
    } 
    
    // Fallback para LocalStorage (Dev mode ou se não achou na API)
    // Nota: Em produção, decidir se queremos ler do localStorage se a API falhar.
    // Para consistência estrita, talvez devêssemos evitar misturar.
    
    const localValue = localStorage.getItem(key);
    if (localValue) {
      if (!this.api) console.log(`[DevMode] Carregado do LocalStorage: ${key}`);
      return JSON.parse(localValue) as T;
    }

    return null;
  }
  
  /**
   * Limpa dados (útil para resetar tentativas)
   */
  async clearData(key: string): Promise<void> {
      if (this.api) {
          // Implementar se a API suportar exclusão ou sobrescrever com vazio
          await this.saveData(key, null);
      } else {
          localStorage.removeItem(key);
      }
  }
}

export const persistenceService = new PersistenceService();
```

### 3. Refatoração dos Componentes

Substituir as chamadas diretas em `Question.tsx`, `QuestionTrueOrFalse.tsx` e `QuestionMultipleAnswer.tsx` pelo serviço.

**Antes (Exemplo em `QuestionMultipleAnswer.tsx`):**
```typescript
function LocalStorageSave(classValue: string) {
  const key = `PRQuestionMultipleAnswerStorageQuestion${moduleNow}${slideNow}${number}`;
  const storedData = localStorage.getItem(key);
  // ... lógica de manipulação de array ...
  localStorage.setItem(key, JSON.stringify(updatedItems));
}
```

**Depois:**
```typescript
import { persistenceService } from "../../../services/PersistenceService";

async function LocalStorageSave(classValue: string) {
  const key = `PRQuestionMultipleAnswerStorageQuestion${moduleNow}${slideNow}${number}`;
  
  // Carrega estado atual
  let existingItems: string[] = await persistenceService.loadData<string[]>(key) || [];
  
  // Manipula
  const found = existingItems.find((item) => item == classValue);
  if (found) {
    existingItems = existingItems.filter((item) => item !== classValue);
  } else {
    existingItems.push(classValue);
  }

  // Salva novo estado
  await persistenceService.saveData(key, existingItems);
}
```

## Benefícios

1.  **Paridade de Ambientes**: O código se comporta da mesma forma (assíncrono) em Dev e Prod.
2.  **Centralização**: Se a API do AVAMEC mudar, você altera apenas um arquivo.
3.  **Correção de Bugs**: O componente `QuestionMultipleAnswer` passará a salvar na API corretamente, resolvendo o problema de perda de dados ao trocar de dispositivo.
4.  **Depuração**: Logs centralizados no serviço facilitam entender o que está sendo salvo e onde.

## Próximos Passos

1.  Criar o arquivo `src/services/PersistenceService.ts`.
2.  Refatorar um componente (ex: `QuestionMultipleAnswer`) para testar.
3.  Aplicar aos demais componentes.
