# Migração para 1.1.0

## Consumo npm

Importe `@modfly/ui/styles.css` no entrypoint global. O CSS compilado elimina a exigência de varrer `node_modules` com Tailwind. Evite carregar uma segunda cópia dos mesmos utilitários se seu projeto já gera as classes da biblioteca.

O pacote declara React 18.2 ou React 19 como peers. O ambiente do monorepo e a CLI usam Node 22.14 ou superior; Node não é uma dependência do componente executado no navegador.

`Citation` recebe `title`, `text`, `children` e `variant`; `author` nunca fez parte da API implementada. O exemplo antigo do README estava incorreto.

`Carousel.numberOfItems` continua aceito por compatibilidade, mas a navegação usa `items.length`, evitando páginas vazias. `ReferenceModal` usa diálogo nativo com Escape e restauração de foco. Botões da biblioteca usam `type="button"` para não enviar formulários do consumidor por acidente.

## Questões

O novo pacote não é uma troca direta de imports do legado. Consulte [o guia AVAMEC](../integracoes/avamec-v1.1.md) antes de migrar atividades e progresso de alunos.

## CLI

`modfly init` registra versão e diretório de destino. O catálogo acompanha a CLI, sem download remoto de código durante `add`. As dependências npm ainda podem exigir rede. Componentes copiados são de responsabilidade do projeto consumidor; use versionamento antes de substituir arquivos com `--force`.

## Fontes e documentação

`packages/ui` e `packages/ui-avamec` são as fontes consumíveis. Docs e Storybook importam os pacotes. `pnpm docs:generate` atualiza as páginas e demos do catálogo core; não edite arquivos em `apps/docs/generated` manualmente.

Os diretórios legados permanecem privados como referência. `rangeBlue`/`rangeGreen`, variantes de IndentCitation e `CaseStudy` já consolidam componentes que tinham diretórios duplicados. Logos, layout institucional e infográficos permanecem específicos de curso.
