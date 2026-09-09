# Entrega Modfly UI 1.1.0

**Data da verificação:** 9 de setembro de 2026.

**Situação:** implementação, validação local e preview da documentação; publicação estável ainda depende de autenticação e homologação externa. Este documento não declara uma release publicada.

[PR de revisão #5](https://github.com/r0b14/Modfly.ui/pull/5) · [Preview da documentação](https://modfly-docs-git-codex-modfly-v11-1f22a6-robson-thiagos-projects.vercel.app)

## O que foi implementado

| Frente | Resultado |
| --- | --- |
| Core | 42 componentes exportados em 39 grupos; CSS distribuído, assets tipados, SSR, teclado e ajustes responsivos |
| AVAMEC | Sete formatos, provider, controlador, payload binário e adaptadores remoto/local/memória |
| CLI | 51 entradas, dependências transitivas, assets portáveis, conflitos, dry-run e controle de versão |
| Docs | 39 páginas core com implementação real, API derivada de tipos e variantes das stories; guias de instalação, temas, CLI e AVAMEC |
| README | Índice, jornada pedagógica, origem, exemplos, stack, decisões, layout e operação |
| Consumo | Curso-template usa os pacotes; verificação de tarballs fora do workspace com React 18 e 19 |
| Operação | CI de qualidade, Changesets e workflow manual de candidatas/publicação com evidência de homologação |

A migração preserva referências históricas em `packages/@legado`. Logos, layout institucional e infográficos continuam pertencendo ao curso. O pacote AVAMEC tem API nova; não converte automaticamente o progresso do legado.

## Evidências reproduzíveis

| Verificação | Comando | Resultado |
| --- | --- | --- |
| Lint | `pnpm lint` | Passou |
| Tipos de pacotes, site e stories | `pnpm typecheck` | Passou |
| Builds dos três pacotes e três apps | `pnpm build` | 6 tarefas concluídas |
| Componentes, contratos, CLI e exemplos | `pnpm test` | 196 testes passaram |
| Navegador | `pnpm test:e2e` | 41 cenários passaram; auditoria das variantes sem violações graves/críticas nas fixtures |
| Distribuição externa | `pnpm test:packages` | React 18.3.1 e 19.2.6: ESM, CommonJS, CSS, tipos, SSR e interação sem Tailwind passaram |

Os testes no navegador percorrem as páginas em 375, 768 e 1440 pixels, verificam imagens das demos, auditam variantes e exercitam teclado, modal e uma atividade completa. Players externos são simulados nessa auditoria: o teste verifica o componente e o contrato do iframe, não a acessibilidade do código de YouTube/Spotify.

O ambiente local não tinha bibliotecas NSS/NSPR necessárias ao Chromium. Elas foram extraídas em `/tmp/modfly-browser-libs/runtime`, sem alterar o sistema. Neste ambiente, o comando foi executado com:

```bash
LD_LIBRARY_PATH=/tmp/modfly-browser-libs/runtime/usr/lib/x86_64-linux-gnu pnpm test:e2e
LD_LIBRARY_PATH=/tmp/modfly-browser-libs/runtime/usr/lib/x86_64-linux-gnu pnpm test:packages
```

Em CI, `playwright install --with-deps chromium` instala as dependências normalmente.

Artefatos locais: `artifacts/*.tgz`, `playwright-report/index.html`, `artifacts/docs-desktop.png` e `artifacts/docs-mobile.png`. Os relatórios e tarballs são gerados, não versionados.

## Limites e riscos materiais

- Storybook emite aviso de chunks grandes por causa do catálogo e das ilustrações incorporadas. O build conclui; não foi estabelecido um orçamento de desempenho nesta versão.
- Existem dependências antigas no curso-template original. Seus arquivos históricos foram mantidos; a aula demonstrativa usa os pacotes novos.
- A comparação de resposta escrita é textual, não semântica.
- Um envio AVAMEC sem confirmação permanece bloqueado. A reconciliação e os formatos reais de retorno do Bridge dependem da homologação.
- CSS/props customizados e conteúdo HTML do consumidor exigem validação pelo curso; os testes cobrem configurações e fixtures do catálogo.

## Condições externas ainda necessárias

1. **npm:** `npm whoami` retornou `ENEEDAUTH`; não há credencial npm no ambiente nem secret de publicação no repositório consultado. É necessário autenticar a máquina ou configurar o mecanismo de publicação da organização `@modfly` e do pacote `modfly`.
2. **AVAMEC:** foi confirmada a existência de homologação, mas URL e procedimento de acesso não foram fornecidos. A integração real não foi executada nem declarada aprovada.
3. **Vercel e domínios:** o histórico do GitHub identifica o projeto `modfly-docs` na equipe `robson-thiagos-projects`. Os domínios `modfly.design` e `storybook.modfly.design` não resolveram DNS neste ambiente; seus vínculos precisam ser confirmados. Não há sessão/token Vercel local.

## Procedimento de publicação

1. Executar instalação congelada, `pnpm docs:generate`, `pnpm check`, navegador e consumidores externos.
2. Publicar candidata no canal `next` pelo workflow Release; ele acrescenta sufixo `-rc.<execução>` e reconstrói o catálogo da CLI com a mesma versão.
3. Configurar Vercel com Root Directory `apps/docs` e `apps/storybook`; cada app tem `vercel.json` que constrói suas dependências antes do app.
4. Homologar com conta de teste: sete formatos, tentativas, refresh, restauração em outro dispositivo, falhas antes/depois do envio e dados genéricos.
5. Registrar evidência da homologação e executar canal `latest`. A primeira publicação exige autenticação npm; trusted publishing pode ser configurado posteriormente.
6. Verificar instalação dos três pacotes pelo registro público, versões, URLs e navegação final. Atualizar README, changelog e este relatório apenas após confirmação.

Se a publicação falhar entre pacotes, consultar as versões já publicadas antes de retomar. Versões npm são imutáveis. Em regressão, retornar o dist-tag à versão anterior disponível e restaurar o deployment anterior na Vercel; corrigir o pacote em nova versão.
