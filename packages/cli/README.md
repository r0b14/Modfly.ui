# modfly

**Código editável para a sua aula.** CLI com 51 entradas de componentes React e TypeScript, incluindo dependências de código e assets portáveis.

> **v1.1.0 em preparação.** Os comandos npm abaixo passam a funcionar após a publicação. No monorepo, execute `pnpm build` e use `node packages/cli/src/cli.mjs --help` para explorar a CLI local.

[Começar](#começar) · [Arquivos](#arquivos-e-estilos) · [Opções](#opções) · [Versões](#versões-e-atualização) · [Documentação](#documentação)

## Começar

Use Node `>=22.14.0` em um projeto existente com React e TypeScript.

```bash
npx modfly@1.1.0 init
npx modfly@1.1.0 list
npx modfly@1.1.0 add citation accordion
npx modfly@1.1.0 add question-option
```

`init` cria `modfly.json`. `list` mostra os nomes disponíveis. `add` copia as entradas selecionadas, resolve dependências transitivas e instala as dependências npm ausentes.

## Arquivos e estilos

O destino padrão é `src/components/modfly`, ou `components/modfly` se não houver `src`:

```json
{
  "version": "1.1.0",
  "directory": "src/components/modfly"
}
```

Importe o `styles.css` copiado uma vez no entrypoint global e os componentes pelos caminhos mostrados no terminal. SVGs viram componentes TSX; imagens viram módulos de dados. O consumidor não precisa configurar SVGR para esses arquivos.

O CSS acompanha as classes existentes da biblioteca. Novas classes Tailwind adicionadas por você exigem compilação no seu projeto.

## Opções

| Opção | Quando usar |
| --- | --- |
| `--dry-run` | Conferir o trabalho sem gravar arquivos ou instalar dependências |
| `--no-install` | Copiar código e instalar as dependências informadas manualmente |
| `--force` | Substituir arquivos locais que diferem do catálogo |
| `--cwd pasta` | Escolher o projeto de destino |
| `--help` | Consultar comandos e orientações |
| `--version` | Consultar a versão do catálogo distribuído |

```bash
npx modfly@1.1.0 add cards --dry-run --cwd ./meu-curso
```

Arquivos idênticos são preservados. Sem `--force`, um conflito interrompe a operação antes da cópia. O destino deve permanecer dentro do projeto e não pode atravessar links simbólicos.

## Versões e atualização

A versão em `modfly.json` deve corresponder à CLI. Compare as APIs e os arquivos antes de migrar; mudar apenas o número não converte o código.

As edições ficam no seu projeto. Atualizar um pacote npm não atualiza automaticamente os componentes copiados. Preserve a licença MIT incluída no código.

## Documentação

[Guia PT](https://modfly.design/pt/docs/getting-started/cli) · [Guide EN](https://modfly.design/en/docs/getting-started/cli) · [Monorepo e tarballs](../../README.md#desenvolvimento) · [Evidências da release](../../docs/projeto/entrega-v1.1.md)

Os domínios públicos ainda dependem da configuração de publicação registrada no relatório.
