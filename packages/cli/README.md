# modfly

CLI de componentes pedagógicos React e TypeScript. Node 22.14+. Versão em preparação: 1.1.0.

```sh
npx modfly@1.1.0 init
npx modfly@1.1.0 list
npx modfly@1.1.0 add citation accordion
```

Execute em um projeto React. Importe o `styles.css` gerado e os componentes pelos caminhos indicados. O código, assets e dependências transitivas são copiados para seu projeto.

`--dry-run`: conferir sem escrever. `--no-install`: instalar dependências manualmente. `--force`: substituir arquivos modificados. `--cwd`: definir o projeto de destino.

A versão de `modfly.json` deve corresponder à CLI. Arquivos modificados bloqueiam a cópia por padrão. Preserve a licença MIT.

[Documentação](https://modfly.design/docs/getting-started/cli) · [Repositório](https://github.com/r0b14/Modfly.ui).
