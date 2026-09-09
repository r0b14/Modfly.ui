# Site público bilíngue

A Modfly UI usa português e inglês em `/pt` e `/en`. A identidade editorial é compartilhada; nomes de componentes, propriedades e variantes continuam sendo identificadores da API. As demonstrações preservam o material de curso em português, identificado com `lang="pt-BR"` e explicado nas duas versões.

## Como manter

- `apps/docs/content` contém guias, descrições e orientações nos dois idiomas. Toda página editorial precisa das duas versões.
- `pnpm docs:generate` extrai tipos, exemplos e variantes e atualiza o inventário do README. Não cria páginas duplicadas: as rotas dinâmicas renderizam o catálogo.
- O catálogo de navegação é uma projeção menor dos metadados públicos, sem exemplos e tabelas de tipos.
- A navegação deriva dos guias e do catálogo. Breadcrumbs, busca e paginação usam os mesmos destinos.
- Novos componentes precisam de descrição editorial e documentação das novas propriedades. O build rejeita entradas sem esses textos.
- As âncoras dos guias têm IDs estáveis iguais nos dois idiomas. O seletor preserva a página e a seção.

## Endereços e metadados

`/` redireciona permanentemente para `/pt`; `/docs/*` para `/pt/docs/*`. O site publica canonical e alternates em cada página, sitemap com os dois idiomas, ícone e imagem de compartilhamento. Previews Vercel recebem `noindex` por metadados, robots e cabeçalho HTTP.

O domínio canônico é `https://modfly.design`. O laboratório usa `https://storybook.modfly.design`, com páginas de apresentação `welcome-portugues--docs` e `welcome-english--docs`. Não altere o estado de publicação npm apenas porque o site foi publicado.

## Verificações

```bash
pnpm docs:generate
pnpm check
pnpm test:e2e
```

Os testes do site percorrem todas as páginas nos dois idiomas, validam metadados, destinos internos, âncoras e layouts em 375, 768 e 1440 pixels. Também verificam menu móvel, foco, busca, mudança de idioma, clipboard, 404, sitemap e acessibilidade das páginas principais. A suíte de componentes continua auditando todas as variantes.

## Publicar e reverter

1. Validar o CI do commit candidato e guardar o identificador do deployment de produção anterior.
2. Na equipe Vercel `robson-thiagos-projects`, usar `apps/docs` como Root Directory do projeto `modfly-docs`; criar ou vincular um projeto Storybook com Root Directory `apps/storybook`.
3. Vincular os domínios nos respectivos projetos. Usar os registros DNS informados pela Vercel para cada domínio; não presumir IPs ou CNAMEs.
4. Permitir acesso público à produção e configurar HTTPS. `www.modfly.design`, se utilizado, deve apontar ao projeto de docs e redirecionar para o domínio sem www.
5. Promover os deployments validados. Em uma sessão sem login, abrir página inicial, guia, referência e Storybook, mudar idioma e atualizar uma URL interna.
6. Conferir respostas HTTP, canonical, robots e sitemap nos domínios reais. Em regressão, restaurar o deployment anterior e corrigir antes de promover novamente.

A configuração de domínio e proteção é externa ao repositório. Um preview protegido ou DNS não resolvido não satisfaz o aceite de publicação pública.
