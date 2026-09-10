# Padrão de documentação de componentes

Desde a preparação da v1.1, as demonstrações devem importar o pacote real. Não recrie o componente em uma função Preview: isso mascara falhas de distribuição e permite divergências de API.

## Fonte e geração

1. Implementar e exportar componente e tipos em `packages/ui`.
2. Criar stories que importem de `@modfly/ui`, incluindo as variantes e estados relevantes. Usar fixtures locais/autocontidas.
3. Executar `pnpm docs:generate` na raiz. O gerador lê stories e tipos TypeScript, atualiza o catálogo; as rotas bilíngues são renderizadas pela página dinâmica compartilhada.
4. Acrescentar textos nas duas línguas em `apps/docs/content`. Conferir contexto pedagógico, tipos, exemplo e demonstração no site.
5. Validar build, testes e navegação no navegador.

`apps/docs/components/docs/ComponentDoc.tsx` mantém o layout comum: contexto, demonstração, API, uso e variantes. `LiveExample` executa as mesmas props das stories usando o pacote compilado. APIs adicionais devem ter guias dedicados, como AVAMEC e CLI.

## Identidade e acessibilidade

Preservar a tipografia, tokens CSS, sidebar e sumário lateral existentes. No celular, a coluna de conteúdo precisa caber na tela; tabelas e código podem ter rolagem própria. Toda interação precisa ter rótulo e comportamento por teclado. Manter as descrições editoriais em português e inglês. As demonstrações preservam conteúdo de curso em português, com idioma identificado.

## Revisão

- API corresponde aos tipos exportados e exemplos compilam.
- Demo executa o pacote, sem dependência de código interno do curso.
- Variantes têm nomes claros e dados reais de exemplo.
- Imagens carregam sem serviços externos de placeholder.
- Comandos apontam para recursos implementados.
- Status de release vem do relatório de evidências; ter uma página não significa estar homologado.

Consulte [site público bilíngue](site-publico-bilingue.md) para navegação, publicação e manutenção.
