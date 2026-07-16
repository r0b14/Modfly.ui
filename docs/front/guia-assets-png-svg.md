# Guia de Assets: PNG, SVG e ReactComponent na migração para `packages/ui`

Este documento explica como tratar corretamente cada tipo de asset durante a migração dos componentes de `apps/curso-template` para `packages/ui`. Leia antes de mexer em qualquer componente.

---

## Os três padrões de import encontrados no codebase

Antes de qualquer coisa, você precisa identificar qual padrão de import o componente usa. São três:

### Padrão 1 — PNG como URL

```ts
import topBlue from '../../../assets/cards/topBlue.png';
// topBlue é uma string com o caminho: "/assets/cards/topBlue.abc123.png"
// Usado em: <img src={topBlue} />
```

Exemplos no projeto: `Cards`, `CardFlip`, `PostIt`, `MiniCards`, `ButtonLink`, `Accordion`, `Pagination`

### Padrão 2 — SVG como URL

```ts
import arrow from '../../../assets/carousel/arrow/arrow.png';
import backButton from '../../../assets/pagination/back.svg';
// Igual ao PNG — é uma string de URL
// Usado em: <img src={backButton} />
```

Exemplos no projeto: `Carousel`, `Pagination`, `Slider`, `Citation` (`bookGreen.svg`)

### Padrão 3 — SVG como componente React (SVGR)

```ts
import { ReactComponent as TopSVGBlue } from '../../../assets/learningBlock/ParaRefletirAzul/Top.svg';
// TopSVGBlue é um componente React — <TopSVGBlue />
// Esse padrão usa o plugin SVGR do Vite/webpack
```

Exemplos no projeto: `LearningBlock`, `Check`, `Sintetizando` (todos os variants do LearningBlock)

---

## Regra de ouro: qual formato usar?

| Situação | Formato | Motivo |
| :--- | :--- | :--- |
| Ícone simples (seta, estrela, check) | **SVG** | Escalável, estilizável por CSS, ~1KB, sem perda de qualidade |
| Decoração vetorial de UI (borda, faixa, banner) | **SVG** | Mesmo motivo — foi desenhado como vetor, não faz sentido rasterizar |
| Background ou textura complexa | **PNG** | Se foi feito em software de imagem, não tem como converter sem perda |
| Foto ou imagem de conteúdo | **Prop `src: string`** | A biblioteca jamais embute fotos — o usuário passa a URL |
| SVG que precisa de cores dinâmicas (via CSS/props) | **ReactComponent (SVGR)** | Permite alterar fill/stroke via CSS ou props diretamente no JSX |

---

## Decisão por componente: o que fazer com cada asset

### Categoria A — Assets que são parte visual do componente (UI interna)

Esses assets fazem parte do design do componente — o usuário final não escolhe nem troca. Eles devem ir **bundled** dentro de `packages/ui`.

**O que fazer:**

- Se for SVG → mantém como SVG, copia para `packages/ui/src/components/[Nome]/assets/`
- Se for PNG simples (ícone ou decoração vetorial) → **converter para SVG** antes de migrar
- Se for PNG complexo/foto → mantém PNG, copia junto

**Exemplos:**

```
Cards:
  topBlue.png / topGreen.png / topOrange.png  → converter para SVG (são banners simples)
  openblue.svg / closedgreen.svg / ...        → manter como SVG ✓

Pagination:
  back.svg / next.svg                         → manter como SVG ✓

Citation:
  bookGreen.svg                               → manter como SVG ✓
  bookYellow.png                              → verificar se existe versão SVG

LearningBlock:
  Top.svg / Bottom.svg (via ReactComponent)   → manter SVGR — é o padrão correto para esses
```

---

### Categoria B — Assets que são conteúdo do curso (não UI)

Esses assets são imagens de conteúdo que mudam de curso para curso — fotos, ilustrações específicas, imagens de seção. O componente recebe o caminho via **prop**.

**O que fazer:** transformar em prop `src: string` (já acontece em vários componentes — `Cards` já faz isso com `imagemURL`).

**Exemplos:**

```
Cards:       imagemURL já é prop ✓ — não precisa mudar nada
IndentCitationImg:  imgbg1.jpg / imgbg2.jpg  → viram props
HistoryTopics:      img1.png / img2.png / img3.png  → viram props
Infografico:        block_1_1.png / circle1.png / ...  → viram props
```

---

### Categoria C — Logos de terceiros

Logos do MEC, UFPE, USP etc. são institucionais e não devem ir na biblioteca genérica.

**O que fazer:** mover para o `apps/curso-template/src/assets/logos/` (permanecem no template, não migram para `packages/ui`).

---

## Como o SVGR funciona e o que muda na migração

### O problema

O Vite do `curso-template` tem o plugin SVGR configurado, que permite:

```ts
import { ReactComponent as Icon } from './icon.svg';
// Icon é um componente React renderizável: <Icon className="w-5 h-5" />
```

O `tsup` (que empacota o `packages/ui`) **não tem SVGR por padrão**. Sem configuração, essa importação vai falhar ou retornar apenas a URL string.

### A solução: configurar SVGR no tsup

```ts
// packages/ui/tsup.config.ts  — adicionar o plugin
import { defineConfig } from 'tsup';
import svgr from 'esbuild-plugin-svgr';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  esbuildPlugins: [svgr()],
});
```

Instalar a dependência:

```sh
pnpm add esbuild-plugin-svgr --filter @modfy/ui -D
```

Após isso, o padrão `import { ReactComponent as X } from './x.svg'` funciona dentro de `packages/ui`.

### Alternativa: inline SVG via componente manual

Para SVGs simples (setas, ícones), em vez de SVGR, você pode escrever o componente React diretamente. Isso elimina a dependência do plugin:

```tsx
// packages/ui/src/components/Pagination/ArrowIcon.tsx
export function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
```

Use esta abordagem para ícones pequenos e simples. Use SVGR para SVGs complexos (como os `Top.svg` e `Bottom.svg` do `LearningBlock`) onde reescrever manualmente seria impraticável.

---

## Como converter PNG para SVG

Para banners e decorações simples (como `topBlue.png` dos Cards), o processo é:

1. Abrir o PNG no **Figma** ou **Inkscape**
2. Se for um shape sólido: recriar como path vetorial
3. Exportar como SVG otimizado (sem metadados desnecessários)
4. Testar se o resultado visual é idêntico

**Quando NÃO converter:**

- Imagens com gradientes complexos que dependem de rasterização
- Imagens com muita textura ou ruído
- PNGs com foto/ilustração real

Para esses, manter PNG e copiar junto com o componente para `packages/ui/src/components/[Nome]/assets/`.

---

## Estrutura de pastas recomendada em `packages/ui`

```text
packages/ui/src/components/
  Cards/
    index.tsx
    assets/
      topBlue.svg       ← convertido de PNG
      topGreen.svg      ← convertido de PNG
      topOrange.svg     ← convertido de PNG
      openblue.svg      ← já era SVG, copiado
      closedblue.svg    ← já era SVG, copiado
      (... demais SVGs de estado)

  LearningBlock/
    index.tsx
    variants/
      ParaRefletirAzul/
        Top.svg         ← copiado do legado
        Bottom.svg
      Sintetizando/
        Top.svg
        Bottom.svg
      (... todos os variants)

  Citation/
    index.tsx
    assets/
      bookGreen.svg     ← já era SVG
      bookYellow.svg    ← converter de PNG (ou manter PNG se não tiver SVG)
```

---

## Checklist por componente antes de migrar

Para cada componente, responder estas perguntas antes de mover qualquer arquivo:

```text
[ ] 1. Liste todos os imports de assets do componente
[ ] 2. Para cada asset, identifique o padrão (PNG-URL / SVG-URL / SVGR)
[ ] 3. Classifique cada asset: UI interna / conteúdo do curso / logo terceiro
[ ] 4. Assets de UI interna: existe versão SVG? Se não, converter ou manter PNG
[ ] 5. Assets de conteúdo: transformar em prop src: string
[ ] 6. Assets SVGR: tsup está com esbuild-plugin-svgr configurado?
[ ] 7. Copiar assets internos para packages/ui/src/components/[Nome]/assets/
[ ] 8. Atualizar os import paths no componente migrado
[ ] 9. Testar que o componente renderiza igual no Storybook
```

---

## Mapeamento rápido dos assets críticos por componente

| Componente | Assets internos | Padrão | Ação na migração |
| :--- | :--- | :--- | :--- |
| `Cards` | topBlue/Green/Orange.png, open/closed SVGs | PNG-URL + SVG-URL | Converter PNGs para SVG |
| `MiniCards` | topBlue/Green.png, open/closed PNG | PNG-URL | Converter para SVG |
| `CardFlip` | bottomBlue/Green.png, button1/2.png | PNG-URL | Verificar se existem SVGs equivalentes |
| `Citation` | bookGreen.svg, bookYellow.png | SVG-URL + PNG-URL | bookGreen ✓, bookYellow → converter |
| `IndentCitationImg` | img1.png, img2.png, ImgBg1.jpg, ImgBg2.jpg | PNG-URL | Viram props `src` |
| `Pagination` | back.svg, next.svg | SVG-URL | Copiar SVGs ✓ |
| `Carousel` | arrow.png | PNG-URL | Converter para SVG |
| `Slider` | leftBlue/Brown/Green/Orange.svg, right... | SVG-URL | Copiar SVGs ✓ |
| `ButtonLink` | buttomBlue.png/svg, buttomPink.png/svg, etc. | PNG-URL (mas tem SVG equivalente!) | Usar os `.svg` existentes |
| `LearningBlock` | Top.svg, Bottom.svg (múltiplos variants) | SVGR | Configurar SVGR no tsup |
| `Check` | topCheckBlue.svg, bottomCheckGreen.svg | SVGR | Configurar SVGR no tsup |
| `MiniBanner` | ~30 PNGs e SVGs variados | Misto | Mapeamento variant a variant |
| `Accordion` | background1-10.png/svg, arrows | Misto | Mapeamento variant a variant |
| `Logos` | logo2.png (MEC), logo3.png (UFPE), logo5.png (USP) | PNG-URL | Não migrar — ficam no curso-template |
| `Infografico` | pilar.png, block_1_1.png, circle1.png, etc. | PNG-URL | Viram props `src` |
| `HistoryTopics` | img1.png, img2.png, img3.png | PNG-URL | Viram props `src` |
| `StarList` | star.png | PNG-URL | Converter para SVG |
| `QuoteText` | (sem assets de imagem) | — | Sem trabalho de assets |
| `ListModule` | (sem assets de imagem) | — | Sem trabalho de assets |

---

## Ordem de migração sugerida (do mais fácil para o mais complexo)

1. **Sem assets:** `QuoteText`, `ListModule`, `Embed` — migrar primeiro, sem dor
2. **Só SVG-URL simples:** `Pagination`, `Slider` — copiar e atualizar paths
3. **PNG convertível:** `Cards`, `Citation`, `StarList` — converter e migrar
4. **SVGR simples:** `Check` — configurar tsup com SVGR, migrar
5. **Muitos variants:** `MiniBanner`, `Accordion` — fazer variant a variant
6. **SVGR complexo:** `LearningBlock` — último, mais trabalhoso

---

## Referências

- [esbuild-plugin-svgr](https://github.com/nickvdyck/esbuild-plugin-svgr) — plugin para tsup/esbuild
- [SVGR](https://react-svgr.com/) — transformador de SVG → React Component
- [Inkscape](https://inkscape.org/) — editor vetorial gratuito para converter PNG → SVG
- [SVGOMG](https://jakearchibald.github.io/svgomg/) — otimizador de SVG online (reduz tamanho antes de commitar)
