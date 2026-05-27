# Dúvidas Básicas — Modfly UI

Perguntas frequentes sobre o funcionamento da lib, sem jargão desnecessário.

---

## "Fiz a migração de um componente e o localhost não mudou nada. Por quê?"

Porque o site de docs (`apps/docs`) nunca importou o componente diretamente do `apps/curso-template` — ele tem um *preview inline* que recria o visual do componente com JSX puro, sem depender de nenhum pacote. Isso é intencional (documentado em `COMPONENT-DOC-PATTERN.md`) para que o site de docs funcione independentemente do estado do pacote.

O site de docs continua igual. Isso é correto.

---

## "Então o que a migração faz, afinal?"

Pensa assim:

```
Antes da migração:
  Citation existe em: apps/curso-template/  ← só funciona dentro deste projeto

Depois da migração:
  Citation existe em: packages/ui/dist/     ← pode ser instalado por qualquer pessoa
```

É a diferença entre uma receita que só existe no seu caderno e uma receita publicada num livro que você vende. O prato (o componente visual) é o mesmo. O que mudou é que agora ele pode sair daqui.

Quando alguém fizer `pnpm add @modfly/ui` no projeto dela, ela vai poder escrever:

```tsx
import { Citation } from "@modfly/ui"

<Citation title="Referência" variant="green">
  Paulo Freire (1968)
</Citation>
```

Sem precisar ter o seu `apps/curso-template` — só o pacote publicado.

---

## "O que é o `dist/` que o build gera?"

O `tsup` compila o TypeScript e gera três arquivos dentro de `packages/ui/dist/`:

| Arquivo | Para quem serve |
|---|---|
| `dist/index.mjs` | projetos modernos (Next.js, Vite) |
| `dist/index.js` | projetos antigos (CommonJS/Node) |
| `dist/index.d.ts` | o editor de quem usar (autocomplete, erros de tipo) |

Esses três arquivos são o que vai para dentro do `npm publish`. O resto (source, stories, docs) fica aqui no monorepo.

---

## "Qual a diferença entre `apps/`, `packages/` e `dist/`?"

| Pasta | O que é | Quem usa |
|---|---|---|
| `apps/curso-template/` | onde os componentes nascem, dentro de um curso real | só este projeto |
| `apps/docs/` | o site de documentação | quem visita modfly.design |
| `apps/storybook/` | catálogo visual interativo dos componentes | desenvolvedor |
| `packages/ui/src/` | código-fonte da lib após migração | compilado pelo tsup |
| `packages/ui/dist/` | versão compilada e pronta para distribuição | quem instala `@modfly/ui` |

---

## "Por que não exportar direto do `apps/curso-template`?"

Porque o `curso-template` é uma aplicação, não uma biblioteca. Ele tem:

- imagens importadas como módulos (`import img from "./assets/img.png"`)
- dependências de roteamento (`react-router-dom`)
- CSS global que vaza para fora do componente
- lógica de curso específica misturada com o componente

Uma lib precisa ser isolada, sem efeitos colaterais, com tipos exportados e compatível com qualquer projeto React. Por isso existe a etapa de migração: extrair só o que é genérico e reescrever limpo.

---

## "O que acontece quando faço `pnpm build` em `packages/ui`?"

O `tsup` lê `src/index.ts`, segue todos os imports, compila TypeScript para JavaScript e gera os três arquivos de `dist/`. O processo inteiro leva menos de 5 segundos.

Para rodar:

```bash
pnpm --filter @modfly/ui build
```

---

## "Como sei que um componente está 'realmente migrado'?"

Sete critérios, todos precisam estar ✅:

1. Código em `packages/ui/src/components/<categoria>/<Nome>/index.tsx`
2. Assets: SVG como componente React inline, PNG copiado se necessário
3. Interface TypeScript exportada (`export type { NomeProps }`)
4. Exportado em `packages/ui/src/index.ts`
5. `pnpm build` em `packages/ui` passa sem erros
6. Story no Storybook importando do pacote (não do curso-template)
7. Página de docs criada ou atualizada

Se algum falta, o componente ainda não está migrado — só copiado.
