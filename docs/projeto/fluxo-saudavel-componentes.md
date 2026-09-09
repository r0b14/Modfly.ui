# Fluxo de componentes

A necessidade nasce em uma aula; a implementação reutilizável entra em `packages/ui` ou `packages/ui-avamec`. Storybook e documentação são consumidores desses pacotes.

```text
Necessidade pedagógica → implementação + tipos públicos
                      → stories + testes
                      → pacote compilado
                      → docs, curso de exemplo e CLI
                      → validação externa + homologação → publicação
```

O catálogo da CLI é derivado do código da biblioteca, incluindo dependências transitivas. O catálogo das docs deriva de stories e tipos. Evitar implementar versões paralelas para o preview.

As cópias históricas em `packages/@legado` e no curso-template não devem receber novas funcionalidades destinadas à biblioteca. Layout institucional, logos e conteúdo de um curso continuam pertencendo ao curso.

Concluir uma mudança exige verificar comportamento, distribuição e documentação. A publicação estável exige adicionalmente a homologação AVAMEC e a verificação dos destinos públicos.
