# Guia de Arquitetura — Diagnóstico do Modfly UI + Estudo sobre Projetos React e Bibliotecas

Este documento tem dois propósitos:

1. **Parte 1** — registrar o diagnóstico feito sobre a pasta `packages/` (e sua relação com `apps/`) neste monorepo especificamente, incluindo um problema de arquitetura já confirmado: a duplicação entre `apps/curso-template` e `packages/@legado`.
2. **Parte 2** — servir de material de estudo mais amplo sobre como estruturar um projeto React profissional e, em especial, como construir uma **biblioteca de componentes** (o propósito central do Modfly UI).

Use a Parte 1 para entender o estado atual e construir um plano de correção. Use a Parte 2 como referência de conceitos para embasar as decisões desse plano.

---

## Parte 1 — Diagnóstico: a arquitetura atual do Modfly UI

### 1.1 `packages/` está corretamente estruturado?

**Parcialmente.** Há três pacotes em `packages/`, com níveis de maturidade bem diferentes:

| Pacote | Papel | Está correto? |
|---|---|---|
| `packages/ui` | A biblioteca (`@modfly/ui`) | ✅ Sim — segue um padrão de biblioteca real |
| `packages/tsconfig` | Configuração TS compartilhada | ✅ Sim — pacote de config, sem ambiguidade |
| `packages/@legado` | "Backup" dos componentes originais | ❌ Não — está mal-classificado como pacote |

**`packages/ui` — o que está certo:**

```
packages/ui/
├── src/
│   ├── components/{atoms,molecules,organisms,templates}/   ← Atomic Design
│   ├── assets/
│   ├── hooks/
│   └── index.ts               ← ponto de entrada único (API pública)
├── package.json                ← nome @modfly/ui, exports ESM+CJS+d.ts
├── tsup.config.ts               ← bundler configurado
```

Isso é exatamente o que se espera de uma lib publicável: entrada única, build gerando os três formatos (`.mjs`, `.js`, `.d.ts`), `peerDependencies` corretas (`react`, `react-dom` não embutidos), scripts de `build`/`lint`/`typecheck`.

**`packages/@legado` — o que está errado:**

Ele tem um `package.json` (`@modfly/legado`, `private: true`) que o torna, tecnicamente, um membro do workspace pnpm (`packages/*`). Mas:

- Não tem `src/index.ts`, `tsconfig`, nem script de build — não é buildável.
- Uma busca por `@modfly/legado` em todo o repositório encontra esse nome **apenas dentro do próprio `package.json`** — nenhum outro pacote o declara como `dependency`/`workspace:*`.

Ou seja: ele ocupa uma pasta em `packages/` (que semanticamente é "código compartilhado e consumível") mas na prática funciona só como um **arquivo morto de referência** — ninguém importa nada dali via código. Isso é uma inconsistência de arquitetura: deveria estar fora do workspace (ex: uma pasta `_legado/` ou `.archive/` na raiz, fora do glob `packages/*`), ou then ser removido de vez, não ocupar o mesmo nível estrutural de um pacote real.

---

### 1.2 A duplicação `apps/curso-template` ↔ `packages/@legado` (confirmado como erro de projeto)

Esse é o ponto que você confirmou como erro de decisão inicial, e os números comprovam:

| Pasta | Papel | Arquivos |
|---|---|---|
| `apps/curso-template/src/components` + `assets` | **Fonte viva** — app React original de um curso real, em uso, com assets do curso (`modulo1` a `modulo5`) | 869 |
| `packages/@legado/components` + `assets` | **Snapshot congelado** — cópia desses mesmos componentes, feita para servir de referência durante a migração | 838 |

As duas pastas têm literalmente os mesmos nomes de subpasta (`accordion`, `cards`, `buttomlink`, `learningBlock`, `modulo1`...`modulo5`, etc.) — não é coincidência, é uma cópia quase completa de um lado para o outro.

**Por que isso é um problema, na prática:**

1. **Duas fontes de verdade.** Se alguém corrige um bug em `apps/curso-template/src/components/molecules/cards/Cards.tsx`, essa correção não existe em `packages/@legado/components/molecules/cards/`, e vice-versa. Com o tempo, os dois arquivos "com o mesmo nome" divergem silenciosamente — quem for migrar um componente pode estar olhando para a versão errada sem perceber.
2. **~840 arquivos redundantes** no repositório sem nenhuma automação (script, symlink, submódulo) ligando as duas cópias — é peso morto no histórico do git e no tamanho do checkout.
3. **Nenhum consumidor real.** Como mostrado no item 1.1, nada importa `@modfly/legado`. Ele existe só para *leitura humana* durante a migração manual — um propósito que poderia ser cumprido apontando direto para `apps/curso-template` (a fonte real), sem duplicar nada.
4. **Ambiguidade de propósito.** Não há nenhum documento que diga "`@legado` é somente-leitura, não edite" ou "quando `@legado` for esvaziado, delete a pasta" — sem esse contrato explícito, a duplicação tende a virar permanente por inércia.

**Hipótese de como aconteceu:** no início da migração, provavelmente se quis "congelar" uma cópia seguraça dos componentes originais antes de começar a mexer neles em `packages/ui`, para não arriscar o app do curso que já estava rodando (`curso-template`). Uma decisão compreensível no impulso do momento, mas que deveria ter sido resolvida de outra forma — por exemplo, com uma tag/branch de git (`git tag pre-migration`) em vez de uma cópia física de 838 arquivos que agora precisa ser mantida ou descartada manualmente.

---

### 1.3 A pasta `apps/` — papel na arquitetura

`apps/` não fica dentro de `packages/` — é a pasta irmã, no root do monorepo. O `pnpm-workspace.yaml` declara os dois glob patterns como workspaces independentes:

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

A distinção conceitual (padrão em qualquer monorepo pnpm/Turborepo/Nx):

- **`packages/`** = código **compartilhado e publicável** — bibliotecas que outros workspaces consomem via `workspace:*`.
- **`apps/`** = **aplicações executáveis/deployadas** — consomem os `packages/`, nunca o contrário.

```
apps/
├── curso-template/   ← app React (CRA) real, fonte original dos componentes — não publica nada, roda como site de curso
├── docs/              ← site Next.js 15 (modfly.design) — ⚠️ ainda não depende de @modfly/ui
└── storybook/         ← Storybook v8 — já depende de @modfly/ui (workspace:*) corretamente
```

Achado relevante: `apps/docs/package.json` **não lista `@modfly/ui`** como dependência hoje. O site de docs exibe os componentes via um alias de webpack que aponta direto para `apps/curso-template` (a chamada "Fase Ponte", documentada em [`arquitetura-monorepo.md`](arquitetura-monorepo.md)) — ou seja, ele contorna o pacote publicado e importa da fonte original. Isso é uma solução transitória intencional, mas reforça o mesmo problema de fundo: quanto mais lugares importam de `apps/curso-template` diretamente (em vez de `packages/ui`), mais difícil fica desligar essa fonte no futuro.

---

## Parte 2 — Guia de estudo: anatomia de um projeto React bem estruturado

### 2.1 Por que a organização de pastas importa

Estrutura de pastas não é estética — ela comunica **intenção e fronteiras**. Um bom layout de projeto responde, só pelo caminho do arquivo, a três perguntas:

- **O que é isso?** (componente, hook, config, asset, página)
- **Quem pode depender disso?** (é público/exportado ou é detalhe interno?)
- **O que acontece se eu editar isso?** (afeta um app, ou afeta todo mundo que instala o pacote?)

Quando a estrutura não responde a essas perguntas com clareza — como no caso de `@legado` parecendo um pacote real sem ser — o time perde tempo adivinhando, e erros de arquitetura (como a duplicação da Parte 1) se tornam mais prováveis.

---

### 2.2 Padrões de organização de componentes

**Atomic Design** (o padrão usado no Modfly UI: `atoms/molecules/organisms/templates`) organiza componentes por **complexidade/composição**:

| Camada | Definição | Exemplo no projeto |
|---|---|---|
| Atoms | Menor unidade, sem composição interna | `Tooltip`, `Check`, `ButtonLink` |
| Molecules | Combinação de poucos atoms com um propósito | `Cards`, `Citation` |
| Organisms | Seções completas, com lógica e estado próprios | `Accordion`, `LearningBlock` |
| Templates | Estruturas de página/layout, sem conteúdo final | `Carousel`, `Pagination` |

**Vantagens:** vocabulário compartilhado com design (Figma costuma usar os mesmos termos), fácil localizar "o quão complexo" é um componente.

**Limitação conhecida:** Atomic Design não diz nada sobre *domínio* — um projeto grande pode acabar com uma pasta `organisms/` gigante misturando componentes de features completamente diferentes. A alternativa comum é a **organização por feature/domínio** (`features/checkout/`, `features/auth/`), que agrupa por *o que o código faz para o negócio*, não por *tamanho técnico*. Para uma **biblioteca de UI genérica** (como é o caso do Modfly UI), Atomic Design costuma ser a escolha certa, porque não há "domínio de negócio" — só componentes visuais reutilizáveis. Já dentro de `apps/curso-template` (uma aplicação de verdade, com módulos de curso, contexto, navegação), uma estrutura por feature tende a escalar melhor no longo prazo.

**Colocation (princípio geral, independente do padrão escolhido):** tudo que só faz sentido junto com um componente deve morar ao lado dele — teste, story, assets, estilos:

```
Cards/
  index.tsx
  Cards.test.tsx
  Cards.stories.tsx
  assets/
    topBlue.svg
```

Isso é o que `packages/ui/src/components/**/assets/` já faz corretamente — evita uma pasta `assets/` global desconectada dos componentes que a usam (que é exatamente o problema que `docs/front/assets-multi-curso.md` descreve e resolve para o `Accordion`).

---

### 2.3 Monorepo: `apps/` vs `packages/`

Um **monorepo** existe para permitir que múltiplos projetos relacionados (apps e libs) compartilhem código, versionamento e ferramentas de build sem precisar publicar cada mudança interna no npm antes de testá-la.

Regra de ouro, universal em qualquer monorepo (pnpm workspaces, Turborepo, Nx, Lerna):

> **A dependência flui em um único sentido: `apps/*` pode depender de `packages/*`, nunca o contrário.**

Se um `package` começar a importar algo de dentro de `apps/`, isso é um sinal de arquitetura invertida — geralmente significa que o código deveria ser promovido para dentro do próprio `package`, não referenciado de fora.

**Por que Turborepo/pnpm importam aqui:** eles fazem *cache de build* baseado em quais arquivos mudaram. Se `packages/ui` muda, o Turborepo sabe que só quem depende dele (`storybook`, e futuramente `docs`) precisa rebuildar — o resto do monorepo não é tocado. Esse ganho de performance só existe se o grafo de dependências (`workspace:*`) estiver correto — outro motivo para `apps/docs` idealmente depender de `@modfly/ui` de verdade, e não de um alias de webpack para `apps/curso-template`.

---

### 2.4 Anatomia de uma biblioteca de componentes (npm package) bem feita

Como o propósito final do projeto é publicar `@modfly/ui` no npm, vale destacar os requisitos que diferenciam uma **lib** de uma **aplicação**:

1. **Ponto de entrada único (`index.ts`)** — tudo que é público passa por ali com `export`. Ninguém importa `@modfly/ui/dist/components/Cards/Cards.tsx` diretamente; a estrutura de pastas interna pode mudar livremente sem quebrar quem consome a lib, desde que o `index.ts` mantenha os mesmos exports.
2. **Sem efeitos colaterais no ambiente do consumidor** — nada de `import './global.css'` que vaze estilos para o app que instala a lib, nada de depender de `react-router-dom` internamente (por isso `useModfy`/`Pagination` recebem callbacks injetados em vez de chamar `useNavigate()` direto).
3. **`peerDependencies`, não `dependencies`, para o framework host** — `react`/`react-dom` ficam como peer para não duplicar o React na árvore de `node_modules` do consumidor (já está correto em `packages/ui/package.json`).
4. **Build gerando múltiplos formatos** — `dist/index.mjs` (ESM, para bundlers modernos), `dist/index.js` (CJS, para Node antigo), `dist/index.d.ts` (tipos). É o que `tsup` já entrega aqui.
5. **Assets bundlados, não referenciados por caminho relativo do projeto-fonte** — um PNG/SVG usado internamente pelo componente precisa ser resolvido pelo bundler da lib (loader `.png`/`.svg` do `tsup`), nunca por um path que só existe dentro do monorepo (esse é o motivo de existir `docs/front/guia-assets-png-svg.md`).
6. **Versionamento semântico com cada mudança rastreada** — ferramentas como *Changesets* existem para que cada PR declare se a mudança é `patch`/`minor`/`major`, gerando changelog e bump de versão automaticamente. Sem isso, publicar no npm vira um processo manual propenso a erro de versão.
7. **Tree-shaking** — exports nomeados (`export { Cards }`, não `export default`) e a flag `"sideEffects": false` no `package.json` permitem que bundlers do consumidor removam componentes não usados do bundle final.

---

### 2.5 Como evitar duplicação em migrações de monorepo (a lição do item 1.2)

Quando se está migrando um app legado para uma lib nova, é comum sentir a tentação de "congelar uma cópia de segurança" antes de mexer. Formas mais seguras de fazer isso **sem duplicar arquivos fisicamente**:

- **Git como memória, não o filesystem.** Uma tag (`git tag pre-migration-ui`) ou branch (`legacy/pre-migration`) preserva o estado exato de qualquer commit para sempre, sem ocupar espaço na árvore de trabalho nem exigir manutenção.
- **Uma fonte, um destino.** Migrar deveria ser: ler de `apps/curso-template`, escrever em `packages/ui`, apagar o componente antigo assim que a versão nova estiver validada — nunca manter as duas versões "vivas" ao mesmo tempo por tempo indefinido.
- **Se uma cópia de referência for mesmo necessária**, ela deve ficar **fora** do glob de workspaces (ex: `_archive/legado/`, não `packages/@legado/`) e ter um `README.md` explícito dizendo "não editar, não importar, será removido em X".
- **Checklist de saúde de migração:** se depois de X meses uma pasta "temporária" ainda existe e ninguém tem certeza se pode apagar, isso é o sintoma exato do que aconteceu aqui — vale revisar migrações em andamento periodicamente com uma pergunta simples: *"o que trava a exclusão desta pasta hoje?"*.

---

### 2.6 Checklist rápido para avaliar a saúde de uma arquitetura de monorepo

- [ ] Toda pasta em `packages/*` é realmente buildável e importada por pelo menos um outro workspace?
- [ ] Nenhum `package` importa de dentro de `apps/`?
- [ ] Existe apenas **uma** fonte de verdade para cada componente/lógica (nenhuma cópia "congelada" sem dono)?
- [ ] A lib publicável tem ponto de entrada único, sem vazamento de CSS/assets/roteamento para o consumidor?
- [ ] Pastas temporárias/transitórias (ex: "Fase Ponte") têm um critério explícito e datado de quando deixam de existir?

---

## Referências para aprofundar

- [Turborepo — Structuring a repository](https://turbo.build/repo/docs/crafting-your-repository/structuring-a-repository)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Atomic Design (Brad Frost)](https://atomicdesign.bradfrost.com/)
- [Changesets](https://github.com/changesets/changesets) — versionamento semântico em monorepos
- [tsup](https://tsup.egoist.dev/) — bundler usado em `packages/ui`
- Ver também, neste repositório: [`arquitetura-monorepo.md`](arquitetura-monorepo.md), [`design-system-especificacao.md`](../front/design-system-especificacao.md), [`assets-multi-curso.md`](../front/assets-multi-curso.md)
