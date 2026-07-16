# Assets Multi-Curso: Organização e Extração de SVGs

## O Problema que Estamos Evitando

Abra `packages/ui/src/components/organisms/accordion/index.tsx` e veja as primeiras 83 linhas: são **apenas imports de assets**. O arquivo tem 353 linhas, 22 variantes de `bgColor`, e condicionais encadeadas que crescem cada vez que um novo curso é adicionado.

Isso é o anti-padrão que queremos nomear antes de escalar:

```
❌ ANTI-PADRÃO: Componente Monolítico por Variação

accordion/
  index.tsx  ← 350+ linhas, 40+ imports, switch por bgColor 1~22
  assets/
    background1.png     ← LT
    background2.png     ← MAT
    background3.png     ← LT variação
    background3_open.png
    topPinkBgClosed.svg ← CNT?
    topBgGreenOpened.svg
    ... (30+ arquivos sem contexto de qual curso pertence)
```

O componente não sabe de qual curso veio cada asset. Quem lê o código não consegue rastrear "esse background pertence a qual identidade visual?". E cada novo curso adiciona mais imports e mais condicionais no mesmo arquivo.

---

## A Solução: Asset Maps por Curso

### Princípio

O componente fica **estático e simples**. O que muda é o *conjunto de assets* que ele recebe via prop `course`. Cada conjunto é um objeto tipado definido fora do componente.

```
✅ PADRÃO CORRETO: Asset Map + Prop course

accordion/
  index.tsx       ← lógica pura, sem imports de curso
  assets.ts       ← mapeia course → conjunto de arquivos
  assets/
    lt/
      bgClosed.svg
      bgOpen.svg
      arrow.svg
    mat/
      bgClosed.svg
      bgOpen.svg
      arrow.svg
    cnt/
      bgClosed.svg
      ...
    chsa/
      bgClosed.svg
      ...
```

---

## Estrutura de Pastas Completa

```
packages/ui/src/components/
├── atoms/
│   └── check/
│       ├── assets/
│       │   ├── lt/
│       │   │   ├── top.svg
│       │   │   └── bottom.svg
│       │   ├── mat/
│       │   │   ├── top.svg
│       │   │   └── bottom.svg
│       │   ├── cnt/   ...
│       │   └── chsa/  ...
│       ├── assets.ts      ← mapa: Course → { top, bottom }
│       └── index.tsx      ← recebe prop course, usa assets.ts
│
├── molecules/
│   └── cards/
│       ├── assets/
│       │   ├── lt/   { top.svg, openBtn.svg, closedBtn.svg }
│       │   ├── mat/  { top.svg, openBtn.svg, closedBtn.svg }
│       │   ├── cnt/  ...
│       │   └── chsa/ ...
│       ├── assets.ts
│       └── index.tsx
│
└── organisms/
    └── accordion/
        ├── assets/
        │   ├── lt/   { bgClosed.svg, bgOpen.svg, arrow.svg, ... }
        │   ├── mat/  ...
        │   ├── cnt/  ...
        │   └── chsa/ ...
        ├── assets.ts
        └── index.tsx
```

**Regra:** Os nomes dos arquivos são **idênticos entre as pastas do curso**. O que muda é a pasta, não o nome. Isso permite escrever o `assets.ts` de forma previsível.

---

## Como Fica o Código na Prática

### `assets.ts` — o arquivo que concentra todos os imports

```typescript
// accordion/assets.ts

import ltBgClosed   from "./assets/lt/bgClosed.svg";
import ltBgOpen     from "./assets/lt/bgOpen.svg";
import ltArrow      from "./assets/lt/arrow.svg";

import matBgClosed  from "./assets/mat/bgClosed.svg";
import matBgOpen    from "./assets/mat/bgOpen.svg";
import matArrow     from "./assets/mat/arrow.svg";

import cntBgClosed  from "./assets/cnt/bgClosed.svg";
// ...

export type Course = "lt" | "mat" | "cnt" | "chsa";

export interface AccordionAssets {
  bgClosed: string;
  bgOpen:   string;
  arrow:    string;
}

export const accordionAssets: Record<Course, AccordionAssets> = {
  lt:   { bgClosed: ltBgClosed,  bgOpen: ltBgOpen,  arrow: ltArrow  },
  mat:  { bgClosed: matBgClosed, bgOpen: matBgOpen, arrow: matArrow },
  cnt:  { bgClosed: cntBgClosed, bgOpen: cntBgOpen, arrow: cntArrow },
  chsa: { bgClosed: chsaBgClosed, bgOpen: chsaBgOpen, arrow: chsaArrow },
};
```

### `index.tsx` — o componente sem nenhum asset hardcoded

```typescript
// accordion/index.tsx
import { accordionAssets, type Course } from "./assets";

interface AccordionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  course: Course;          // ← única prop nova
}

export const Accordion = ({ title, children, course }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const assets = accordionAssets[course]; // ← seleção em uma linha

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${isOpen ? assets.bgOpen : assets.bgClosed})` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <img src={assets.arrow} alt="" />
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
```

**O componente não cresce.** Ele nunca vai ter mais de 5–10 linhas de lógica de layout. Todo o crescimento de cursos fica isolado no `assets.ts` e nas subpastas de `assets/`.

---

## Por Que o Componente NÃO Fica Gigante

A confusão surge porque hoje o `Accordion` mistura **duas responsabilidades**:

| Responsabilidade | Onde deve estar |
|---|---|
| Estrutura HTML e comportamento (open/close, animação) | `index.tsx` |
| Qual imagem usar para cada curso | `assets.ts` |

Quando as duas estão no mesmo arquivo, cada novo curso adiciona condicionais no `index.tsx`. Com a separação, novo curso = nova entrada no `Record<Course, Assets>` do `assets.ts`. O `index.tsx` não muda.

```
Sem separação:  index.tsx cresce linearmente a cada curso
Com separação:  assets.ts cresce, index.tsx permanece estável
```

---

## Como Extrair os SVGs do Figma

### Regras de exportação

Ao entrar no arquivo Figma de cada curso, siga este protocolo para garantir que os assets fiquem compatíveis:

**1. Selecionar o frame ou grupo correto**
- Selecione o asset isolado (só o background, só o ícone — nunca o componente inteiro)
- Verifique que o frame não tem padding invisível

**2. Configurar a exportação**
- Formato: `SVG`
- Sufixo: deixe **vazio** (o nome do arquivo virá do nome do layer no Figma)
- Sem escala (1x)
- Marque "Include id attribute" apenas se o SVG precisar de animação CSS

**3. Nomear o layer no Figma antes de exportar**

Use os nomes padronizados que o `assets.ts` espera:

| Tipo de asset | Nome do layer no Figma | Nome do arquivo exportado |
|---|---|---|
| Fundo fechado | `bgClosed` | `bgClosed.svg` |
| Fundo aberto | `bgOpen` | `bgOpen.svg` |
| Seta / ícone de toggle | `arrow` | `arrow.svg` |
| Topo decorativo | `top` | `top.svg` |
| Base decorativa | `bottom` | `bottom.svg` |
| Botão ativo | `btnOpen` | `btnOpen.svg` |
| Botão inativo | `btnClosed` | `btnClosed.svg` |

**4. Destino do arquivo após exportar**

```
Figma: MAIS LT → componente Accordion → layer "bgClosed"
         ↓ exportar como SVG
packages/ui/src/components/organisms/accordion/assets/lt/bgClosed.svg
```

```
Figma: MAIS MAT → componente Accordion → layer "bgClosed"
         ↓ exportar como SVG
packages/ui/src/components/organisms/accordion/assets/mat/bgClosed.svg
```

**Nunca coloque na pasta raiz de assets.** Cada arquivo vai direto para a subpasta do seu curso.

### Preview do componente completo

Junto com os SVGs individuais, sempre exporte uma imagem mostrando o componente inteiro — como ele aparece na tela, com todos os elementos no lugar (fundo, ícone, título, conteúdo expandido se houver).

**Nome do arquivo:** `preview.png`

**Destino:** na subpasta do curso, no mesmo nível dos demais assets:

```
accordion/assets/
  lt/
    bgClosed.svg
    bgOpen.svg
    arrow.svg
    preview.png   ← componente completo, como aparece no curso
  mat/
    bgClosed.svg
    bgOpen.svg
    arrow.svg
    preview.png
```

**Como exportar no Figma:**
- Selecione o frame do componente completo (com conteúdo representativo dentro)
- Formato: `PNG`, escala `2x` para ficar nítido em retinas
- O frame deve mostrar pelo menos as duas variações principais se cabir: fechado e aberto

O `preview.png` serve para três coisas:
1. Quem vai implementar o asset vê exatamente o resultado esperado sem precisar abrir o Figma
2. Serve de referência visual no code review para confirmar que os SVGs estão corretos
3. Pode ser usado diretamente na página de docs como imagem de capa da seção de variantes

### Checklist por componente

Antes de fechar o Figma, confirme para cada componente exportado:

- [ ] O `preview.png` mostra o componente completo e reconhecível
- [ ] O SVG abre corretamente em browser (arraste para o Chrome)
- [ ] Não tem `width`/`height` fixos no `<svg>` raiz (prefira `viewBox` apenas)
- [ ] Não referencia fontes externas ou imagens embedded desnecessárias
- [ ] O arquivo está na pasta correta: `assets/<curso>/<nome-padrão>.svg`

---

## Exibindo 60–80% das Variações no Docs

No arquivo de stories ou na página de documentação do componente, renderize uma instância por curso lado a lado. Isso cobre todas as variações sem precisar de um seletor interativo:

```tsx
// accordion.stories.tsx (ou página docs)

const conteudo = <p>Texto de exemplo do acordeão.</p>;

export const TodasAsVariacoes = () => (
  <div className="flex flex-col gap-8">
    <Accordion title="MAIS LT"   course="lt"   >{conteudo}</Accordion>
    <Accordion title="MAIS MAT"  course="mat"  >{conteudo}</Accordion>
    <Accordion title="MAIS CNT"  course="cnt"  >{conteudo}</Accordion>
    <Accordion title="MAIS CHSA" course="chsa" >{conteudo}</Accordion>
  </div>
);
```

---

## Caso Real Implementado: Accordion PCE

O primeiro curso integrado ao novo sistema foi o **PCE**. Os três assets exportados do Figma revelaram a anatomia exata do componente:

```
accordion/assets/pce/
  bgClosed.svg  ← rect 1083×89, rx=20, fill=#670098
  bgOpen.svg    ← rect roxo externo + rect interno #F6ECBD com drop-shadow
  arrow.svg     ← chevron fill=#F3EBBE (creme), aponta para baixo
  preview.png   ← screenshot do componente completo
```

O que os SVGs revelaram sobre o design do PCE:
- **Cor primária:** `#670098` (roxo escuro)
- **Cor de conteúdo:** `#F6ECBD` (creme amarelado) com `box-shadow: 0 4px 4px rgba(0,0,0,0.25)`
- **Cor do texto/ícone:** `#F3EBBE` (creme claro)
- **Forma:** bordas arredondadas `rx=20` no header — quando aberto, o arredondamento fica só no topo

Esses valores foram usados diretamente na página de docs (`/docs/components/accordion`) para recriar o componente visualmente com inline JSX — sem importar assets do pacote, sem depender do build.

A página de docs tem três cards na seção Variantes:
1. Estado fechado estático (replica `bgClosed.svg`)
2. Estado aberto estático (replica `bgOpen.svg` com a área interna creme)
3. Preview interativo clicável (`AccordionPCEPreview` — client component)

---

## Ordem de Trabalho Sugerida

1. **Mapear** quais assets cada componente usa hoje (já visível nos imports do `index.tsx`)
2. **Criar as subpastas** `assets/<curso>/` para os componentes prioritários
3. **Exportar do Figma** seguindo o protocolo de nomenclatura acima
4. **Escrever o `assets.ts`** com o `Record<CourseVariant, Assets>` para o componente
5. **Refatorar o `index.tsx`** para receber `course` com early return — o código legado de `bgColor` não é tocado
6. **Criar o preview na página de docs** replicando visualmente os SVGs com inline JSX

Componentes sugeridos para começar (maior impacto visual):
- `accordion` — ✅ PCE implementado, EDC-SEB a organizar
- `cards` — visível em praticamente todas as aulas
- `check` — usado com frequência, assets simples de extrair