# Instruções para Agentes / Copilot — Projeto [NOME_DO_PROJETO]

> **⚠️ IMPORTANTE**: Este é um documento template. Adapte as seções abaixo conforme as especificidades do seu projeto/curso.

---

## Resumo do Projeto

**Tecnologias principais:**

- Frontend: React + TypeScript
- Estilização: TailwindCSS + CSS Modules/Emotion
- Arquitetura: [Descrever arquitetura específica - SPA, MPA, etc.]

**Estrutura de componentes:**

- Atomic Design: `components/atoms`, `components/molecules`, `components/organisms`, `components/templates`
- [Adicionar componentes específicos relevantes do projeto]

**Gerenciamento de Estado:**

- [Descrever contextos e hooks principais, ex: `src/contexts/AppContext.tsx`]
- [Listar hooks customizados importantes]

**Integrações/APIs:**

- [Listar APIs externas ou internas utilizadas]
- [Descrever métodos de persistência: localStorage, sessionStorage, APIs, etc.]

---

## 1. Arquitetura e Fluxo Geral

**Big Picture:**

- [Descrever como a aplicação funciona de forma geral]
- [Explicar o fluxo principal de dados]
- [Mencionar padrões arquiteturais utilizados]

**Fluxo típico de dados:**

```
[Passo 1: Ex: Carregamento inicial]
  → [Passo 2: Ex: Renderização de componentes]
  → [Passo 3: Ex: Interação do usuário]
  → [Passo 4: Ex: Atualização de estado]
  → [Passo 5: Ex: Persistência]
```

---

## 2. Arquivos e Componentes Principais

**Arquivos críticos para entender o projeto:**

```
src/
├── contexts/
│   └── [NomeDoContexto].tsx          # [Descrição do contexto]
├── components/
│   ├── atoms/
│   │   └── [ComponenteImportante]/   # [Descrição do componente]
│   ├── organisms/
│   │   └── [ComponenteComplexo]/     # [Descrição do componente]
├── hooks/
│   └── [useCustomHook].ts            # [Descrição do hook]
├── modules/
│   └── [module-name]/                # [Descrição do módulo]
└── public/
    └── configuracao_conteudo.json    # [Configurações do projeto]
```

**Pontos de atenção:**

- [Listar arquivos que precisam de atenção especial]
- [Mencionar dependências críticas entre componentes]
- [Destacar padrões específicos que devem ser seguidos]

---

## 3. Padrões de Código e Boas Práticas

### 3.1 React e TypeScript

**Imutabilidade de Estado:**

```ts
// ✅ CORRETO: Criar novas referências
setState((prev) => [...prev, newItem]);
setState((prev) => prev.filter((item) => item.id !== id));
setState((prev) => ({ ...prev, key: newValue }));

// ❌ INCORRETO: Mutação in-place
const aux = state;
aux.push(newItem); // React não detecta mudança
setState(aux);
```

**Tipagem:**

```ts
// ✅ Sempre definir tipos para props
interface ComponentProps {
  title: string;
  items: Item[];
  onSelect: (id: string) => void;
}

export const Component: React.FC<ComponentProps> = ({
  title,
  items,
  onSelect,
}) => {
  // ...
};
```

### 3.2 Performance

**Memoização:**

```ts
// Use React.memo para componentes que renderizam frequentemente
export const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* ... */}</div>;
});

// Use useMemo para cálculos custosos
const processedData = useMemo(() => {
  return heavyComputation(data);
}, [data]);

// Use useCallback para funções passadas como props
const handleClick = useCallback(() => {
  doSomething(param);
}, [param]);
```

### 3.3 Estilização

- **Tailwind CSS**: Preferir para utilitários e classes comuns
- **CSS Modules/Emotion**: Para estilos complexos e dinâmicos específicos de componentes
- **Consistência**: Manter padrões de nomenclatura de classes CSS
- **Responsividade**: Sempre testar em diferentes breakpoints

**Exemplo:**

```tsx
// Combinando Tailwind com CSS Module
<div className={`flex items-center ${styles.customStyle}`}>
  {/* conteúdo */}
</div>
```

---

## 4. Persistência e Armazenamento

### 4.1 localStorage/sessionStorage

**Padrão de nomenclatura de chaves:**

```
[PREFIXO_PROJETO]_[CONTEXTO]_[IDENTIFICADOR]

Exemplos:
- PROJECT_User_Preferences
- PROJECT_Module_1_Progress
- PROJECT_Question_1_Answer
```

**Padrão de leitura segura:**

```ts
function loadFromStorage(key: string) {
  try {
    const stored = localStorage.getItem(key);
    if (!stored || stored === "void" || stored === "null") {
      return null;
    }
    return JSON.parse(stored);
  } catch (error) {
    console.error("Error loading from storage:", key, error);
    return null;
  }
}

function saveToStorage(key: string, value: any) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("Error saving to storage:", key, error);
    return false;
  }
}
```

### 4.2 APIs Externas

**[Se aplicável, descrever integrações com APIs]**

```ts
// Exemplo de padrão de chamada de API
async function fetchData(endpoint: string) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("API Error");
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
```

---

## 5. Contextos e Estado Global

**[Descrever contextos específicos do projeto]**

### Exemplo de Context Pattern:

```ts
// src/contexts/ExampleContext.tsx
interface ExampleContextType {
  data: DataType[];
  updateData: (data: DataType[]) => void;
  loading: boolean;
}

export const useExampleContext = () => {
  const context = useContext(ExampleContext);
  if (!context) {
    throw new Error("useExampleContext must be used within ExampleProvider");
  }
  return context;
};
```

**Armadilhas a evitar:**

- ❌ Não mutar estado diretamente
- ❌ Não usar contexto para dados que mudam frequentemente (preferir estado local)
- ❌ Não criar contextos muito grandes (dividir responsabilidades)

---

## 6. Componentes Reutilizáveis

**[Listar componentes que devem ser reutilizados no projeto]**

### Padrão de criação de componentes:

```tsx
// src/components/atoms/Button/Button.tsx
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
```

---

## 7. Debugging e Troubleshooting

### Checklist de Debug:

1. **Estado não atualiza:**

   - [ ] Verificar se está criando novas referências (não mutar)
   - [ ] Verificar dependências de useEffect/useMemo/useCallback
   - [ ] Usar React DevTools para inspecionar estado

2. **Performance:**

   - [ ] Verificar renderizações desnecessárias (React DevTools Profiler)
   - [ ] Usar React.memo, useMemo, useCallback onde apropriado
   - [ ] Verificar tamanho do bundle (webpack-bundle-analyzer)

3. **Persistência:**

   - [ ] Verificar localStorage/sessionStorage no DevTools (Application tab)
   - [ ] Logar valores antes de salvar e após carregar
   - [ ] Validar formato JSON (try/catch)

4. **Integração com APIs:**
   - [ ] Verificar Network tab no DevTools
   - [ ] Logar request/response
   - [ ] Verificar CORS e autenticação

### Ferramentas recomendadas:

- **React DevTools**: Inspecionar componentes e estado
- **Redux DevTools**: Se usar Redux
- **Network Tab**: Debugar chamadas de API
- **Console**: Logs estratégicos (remover antes de produção)

---

## 8. Testes

**[Descrever estratégia de testes do projeto]**

### Padrão de testes:

```tsx
// Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with label", () => {
    render(<Button label="Click me" onClick={() => {}} />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

---

## 9. Configuração e Setup

**Variáveis de ambiente:**

```bash
# .env.example
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=development
```

**Scripts úteis:**

```bash
yarn start          # Desenvolvimento
yarn build          # Build de produção
yarn test           # Executar testes
yarn storybook      # Storybook
```

---

## 10. Documentação Adicional

**Links importantes:**

- [Documentação do ModfyJS](https://vlab-1.gitbook.io/modfyjs-1.0.0-alpha/)
- [Figma/Design do projeto]
- [Documentação de API]
- [Guia de contribuição]

**Convenções específicas do projeto:**

- [Adicionar convenções específicas, nomenclaturas, padrões de branch, etc.]

---

## Notas Finais

> **Lembre-se**: Este documento deve ser atualizado conforme o projeto evolui. Mantenha-o sincronizado com as mudanças mais importantes da arquitetura e padrões do código.

**Responsáveis pela manutenção deste documento:**

- [Nome/Time responsável]

**Última atualização:** [Data]
