# Entrega do site e documentação pública

Atualização de 9 de setembro de 2026. Continuação da v1.1 no [PR #5](https://github.com/r0b14/Modfly.ui/pull/5).

## Resultado implementado

- 102 páginas de conteúdo pré-renderizadas: página inicial, catálogo, 39 referências e dez guias, em português e inglês.
- Identidade editorial preservada, com página inicial coerente com a biblioteca real, estatísticas do catálogo e chamadas para os guias.
- Busca de componentes e guias, filtro do catálogo, breadcrumbs, navegação sequencial e índice acessível.
- Menu móvel com controle de foco, Escape, isolamento do fundo e retorno ao acionador.
- Troca de idioma preservando página e seção. URLs antigas redirecionam para português.
- Guias de instalação, CSS, personalização, CLI, AVAMEC, migração, contribuição, diagnóstico e changelog.
- Metadados por página, canonical, alternates, sitemap, robots, ícone e imagem de compartilhamento.
- Storybook com apresentação em português e inglês e links para o site.

Nomes de componentes, propriedades e variantes permanecem identificadores da API. As demonstrações do catálogo preservam conteúdo original em português, identificado no HTML e explicado nas duas versões. A interface nativa do Storybook permanece a da ferramenta.

## Decisões de manutenção

Conteúdo editorial fica separado dos tipos e stories gerados. O gerador não reescreve páginas ou traduções; as rotas compartilhadas renderizam o catálogo nos dois idiomas. A navegação usa uma projeção menor do catálogo, sem carregar tabelas de tipos e exemplos. As APIs dos pacotes não foram alteradas nesta etapa.

O site informa que a v1.1.0 está em preparação. Publicar documentação não significa publicar npm ou homologar a integração AVAMEC.

## Evidências

| Verificação | Resultado |
| --- | --- |
| `pnpm lint` | Passou |
| `pnpm typecheck` | Sete tarefas passaram |
| `pnpm build` | Seis tarefas passaram; build final do site também passou |
| `pnpm test` | 197 testes passaram, incluindo compilação dos guias nos dois idiomas |
| `pnpm test:e2e` | 62 cenários passaram; cobertura das 102 páginas em três larguras |
| Revisão visual | Capturas de home, referência, guia e menu em desktop/mobile revisadas |

Capturas disponíveis em `artifacts/site-home-desktop.png`, `site-home-mobile.png`, `site-menu-mobile.png`, `site-guide-mobile.png` e `site-component-desktop.png`; relatório navegável em `playwright-report/index.html`.

Os testes percorrem todas as páginas nos dois idiomas e três larguras (375, 768 e 1440), verificam navegação, âncoras, metadados, imagens das demonstrações, teclado, acessibilidade, cópia de código, recursos públicos e páginas inexistentes. A suíte de componentes continua exercitando todas as variantes; o Storybook é aberto no navegador, incluindo suas páginas de apresentação e uma story real.

## Publicação externa pendente

O projeto Vercel identificado é `modfly-docs`, na equipe `robson-thiagos-projects`. O preview do PR exige login. Os domínios `modfly.design` e `storybook.modfly.design` não resolveram DNS na verificação deste ambiente. Não há sessão Vercel local nem acesso ao provedor DNS identificado.

O aceite de acesso público **ainda não foi atingido**. Para concluí-lo, autenticar a Vercel neste ambiente (por exemplo, `pnpm dlx vercel login`), disponibilizar acesso ao DNS e seguir o [procedimento de publicação e reversão](../front/site-publico-bilingue.md). Não enviar tokens ou senhas na conversa.

Depois da configuração, verificar ambos os domínios sem login, com HTTPS e acesso direto a páginas internas. Não tratar resposta HTTP da tela de autenticação como sucesso de publicação.
