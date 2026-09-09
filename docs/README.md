# Central de documentação · Modfly UI

Guias de implementação, decisões técnicas e evidências do projeto. Para começar a usar a biblioteca, consulte o [README principal](../README.md). O site bilíngue é mantido em [`apps/docs`](../apps/docs); seus endereços públicos planejados são `modfly.design/pt` e `modfly.design/en`.

**Leia primeiro os guias atuais.** Os documentos históricos registram a evolução do projeto e podem descrever propostas ou APIs anteriores à v1.1.

[Entrega](#entrega-e-publicação) · [Desenvolvimento](#desenvolvimento-e-manutenção) · [Pacotes](#pacotes-e-referências-públicas) · [Histórico](#arquitetura-e-histórico) · [Licença](#autoria-e-licença)

## Entrega e publicação

| Documento atual | Quando consultar |
| --- | --- |
| [Entrega v1.1](projeto/entrega-v1.1.md) | Escopo implementado, testes, limites e publicação npm |
| [Entrega do site](projeto/entrega-site-publico.md) | Páginas bilíngues, validação no navegador e pendências dos domínios |
| [Migração para v1.1](projeto/migracao-v1.1.md) | Transição de imports, APIs e progresso dos cursos |
| [Changelog](../CHANGELOG.md) | Mudanças incluídas na versão em preparação |

Implementação validada não significa publicação concluída. Os relatórios identificam o estado registrado de npm, AVAMEC real, Vercel e DNS.

## Desenvolvimento e manutenção

| Guia atual | Responsabilidade |
| --- | --- |
| [Fluxo saudável dos componentes](projeto/fluxo-saudavel-componentes.md) | Fonte de verdade, build e consumo por cursos, docs e Storybook |
| [Padrão de documentação](front/padrao-documentacao-componentes.md) | Tipos públicos, stories, geração e referências de componentes |
| [Site público bilíngue](front/site-publico-bilingue.md) | Conteúdo PT/EN, rotas, navegação, metadados, deploy e reversão |
| [Integração AVAMEC v1.1](integracoes/avamec-v1.1.md) | Bridge, adaptadores, persistência, falhas e homologação |

Os textos do site ficam em [`apps/docs/content`](../apps/docs/content); tipos e demonstrações são derivados do código por `pnpm docs:generate`. Novas páginas e orientações precisam das versões em português e inglês. O gerador não deve sobrescrever a camada editorial.

## Pacotes e referências públicas

| Porta de entrada | Conteúdo |
| --- | --- |
| [@modfly/ui](../packages/ui/README.md) | Instalação, CSS, exemplo e personalização |
| [@modfly/ui-avamec](../packages/ui-avamec/README.md) | Atividade completa, formatos, adaptadores e recuperação |
| [modfly CLI](../packages/cli/README.md) | Comandos, configuração, conflitos e atualização |
| [Guias do site](../apps/docs/content/guides.ts) | Introdução, instalação, estilos, temas, CLI, AVAMEC, migração, contribuição, diagnóstico e changelog |
| [Conteúdo dos componentes](../apps/docs/content/components.ts) | Finalidade e orientações específicas nos dois idiomas |
| [API e exemplos gerados](../apps/docs/generated/catalog.json) | Contratos e exemplos derivados dos tipos e stories |

## Arquitetura e histórico

Estes materiais complementam os guias atuais. Antes de aplicar uma recomendação antiga, confira os contratos exportados e os relatórios da v1.1.

| Área | Documento | Contexto |
| --- | --- | --- |
| Infraestrutura | [Arquitetura do monorepo](infra/arquitetura-monorepo.md) | Estrutura e decisões de organização registradas ao longo do projeto |
| Infraestrutura | [React e bibliotecas](infra/guia-arquitetura-react-e-bibliotecas.md) | Estudo e diagnóstico da separação entre cursos e pacotes |
| Design | [Especificação do design system](front/design-system-especificacao.md) | Inventário e convenções da etapa de planejamento |
| Assets | [PNG, SVG e SVGR](front/guia-assets-png-svg.md) | Referência técnica para migração de imagens |
| Assets | [Assets por curso](front/assets-multi-curso.md) | Proposta de organização de mapas visuais e exportação |
| Planejamento | [Plano de ação da biblioteca](projeto/plano-acao-biblioteca.md) | Fases e roteiro anteriores à entrega atual |
| Planejamento | [Issues da v1](projeto/issues-v1-roadmap.md) | Backlog histórico de lançamento |
| Conhecimento | [FAQ de projeto e stack](projeto/faq-basic-projetestack.md) | Conceitos e respostas da evolução da biblioteca |
| AVAMEC | [Payload de questões](integracoes/avamec-padrao-payload-api-questoes.md) | Convenções que fundamentaram o contrato atual |
| AVAMEC | [Diagnóstico de persistência](integracoes/avamec-diagnostico-persistencia-questoes.md) | Problemas e recomendações levantados na integração legada |
| AVAMEC | [Proposta de PersistenceService](integracoes/avamec-persistence-service-recomendacao.md) | Desenho histórico; o contrato atual usa adaptadores explícitos |

## Autoria e licença

[Licença MIT e atribuição](copyright/licenca-mit.md) · [Texto da licença](../LICENSE) · [Autoria e contribuição](../README.md#contribuir)

Ao atualizar a documentação, mantenha os links deste índice válidos e registre evidências nos relatórios de entrega. Referências históricas devem continuar reconhecíveis como histórico.
