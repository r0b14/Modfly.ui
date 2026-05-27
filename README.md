# ModfyJS - Boilerplate React Template

<div align="center">

Boilerplate robusto e otimizado baseado em ReactJS para desenvolvimento de aplicações web modulares de alta performance.

**[Documentação](https://vlab-1.gitbook.io/modfyjs-1.0.0-alpha/)** • **[Vlab UFPE](https://vlab.ufpe.br)**

</div>

---

## 🚀 Resumo Técnico

- **Linguagem & Framework**: React (v18) com TypeScript.
- **Roteamento**: React Router DOM (v7).
- **Estilização**: Tailwind CSS e Emotion (CSS-in-JS).
- **Testes & Documentação UI**: Jest, React Testing Library e Storybook.

---

## ⚙️ Requisitos e Execução

### 1. Pré-requisitos

- **Node.js**: Obrigatório o uso da versão `v20.19.0` (`nvm use`).
- **Yarn**: Necessário como gerenciador de pacotes (`npm install -g yarn`).

### 2. Rodando o Projeto

```bash
# Instale as dependências
yarn install

# Inicie o servidor de desenvolvimento
yarn start
```

O projeto será aberto e poderá ser acessado usando a estrutura de módulos na URL, por exemplo:
👉 `http://localhost:3000/?module=1&page=1`

### 3. Outros Scripts Úteis

- `yarn build`: Gera o build de produção otimizado.
- `yarn test`: Executa a suíte de testes.
- `yarn storybook`: Inicia o ambiente de documentação de componentes.

---

## 📁 Estrutura do Projeto

```text
src/
├── @modfy/              # Utilitários e helpers do ModfyJS
├── @types/              # Definições de tipos TypeScript
├── assets/              # Recursos estáticos (imagens, ícones, etc.)
├── components/          # Componentes React (Atomic Design)
│   ├── atoms/           # Componentes básicos (Button, Input, etc.)
│   ├── molecules/       # Combinação de átomos (Card, Form, etc.)
│   ├── organisms/       # Combinação de moléculas (Header, Footer, etc.)
│   └── templates/       # Templates de página
├── contexts/            # Contextos React (Context API)
├── modules/             # Módulos da aplicação
│   ├── module-1/        # Módulo 1
│   ├── module-2/        # Módulo 2
│   └── module-3/        # Módulo 3
├── index.css            # Estilos globais
└── index.tsx            # Ponto de entrada da aplicação
```

### Arquitetura de Componentes (Atomic Design)

O projeto segue os princípios do **Atomic Design** para organização de componentes:

1. **Atoms** (Átomos): Componentes básicos e indivisíveis
2. **Molecules** (Moléculas): Combinação simples de átomos
3. **Organisms** (Organismos): Componentes complexos com lógica de negócio
4. **Templates**: Estruturas de página com layout definido

---

## 📝 Padrão de Commits

Nesse repositório, o padrão de commits segue de acordo com o **[Conventional Commits](https://www.conventionalcommits.org/pt-br)**.

### Tipo e descrição

O commit semântico possui os elementos estruturais abaixo (tipos), que informam a intenção do seu commit ao utilizador(a) de seu código.

| Tipo       | Descrição                                                                                                                                 | Relacionamento                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `feat`     | Commits do tipo feat indicam que seu trecho de código está incluindo um **novo recurso**                                                  | MINOR do versionamento semântico |
| `fix`      | Commits do tipo fix indicam que seu trecho de código commitado está **solucionando um problema** (bug fix)                                | PATCH do versionamento semântico |
| `docs`     | Commits do tipo docs indicam que houveram **mudanças na documentação**, como por exemplo no Readme do seu repositório                     | Não inclui alterações em código  |
| `test`     | Commits do tipo test são utilizados quando são realizadas **alterações em testes**, seja criando, alterando ou excluindo testes unitários | Não inclui alterações em código  |
| `build`    | Commits do tipo build são utilizados quando são realizadas modificações em **arquivos de build e dependências**                           | Configurações de build           |
| `perf`     | Commits do tipo perf servem para identificar quaisquer alterações de código que estejam relacionadas a **performance**                    | Otimizações                      |
| `style`    | Commits do tipo style indicam que houveram alterações referentes a **formatações de código**, semicolons, trailing spaces, lint...        | Não inclui alterações em código  |
| `refactor` | Commits do tipo refactor referem-se a mudanças devido a **refatorações que não alterem sua funcionalidade**                               | Melhoria de código               |
| `chore`    | Commits do tipo chore indicam **atualizações de tarefas** de build, configurações de administrador, pacotes...                            | Não inclui alterações em código  |
| `ci`       | Commits do tipo ci indicam mudanças relacionadas a **integração contínua** (continuous integration)                                       | Pipeline CI/CD                   |

### Recomendações

- ✅ Adicione um título consistente com o título do conteúdo
- ✅ Recomendamos que na primeira linha deve ter no máximo 4 palavras
- ✅ Para descrever com detalhes, usar a descrição do commit
- ✅ Usar um emoji no início da mensagem de commit representando sobre o commit
- ✅ Os links precisam ser adicionados em sua forma mais autêntica, ou seja: sem encurtadores de link e links afiliados

### 💻 Exemplos

<table>
  <thead>
    <tr>
      <th>Comando Git</th>
      <th>Resultado no GitHub</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>
        <code>git commit -m ":tada: Commit inicial"</code>
      </td>
      <td>🎉 Commit inicial</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":books: docs: Atualizaçao do README"</code>
      </td>
      <td>📚 docs: Atualizaçao do README</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bug: fix: Loop infinito na linha 50"</code>
      </td>
      <td>🐛 fix: Loop infinito na linha 50</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":sparkles: feat: Pagina de login"</code>
      </td>
      <td>✨ feat: Pagina de login</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bricks: ci: Modificaçao no Dockerfile"</code>
      </td>
      <td>🧱 ci: Modificaçao no Dockerfile</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":recycle: refactor: Passando para arrow functions"</code>
      </td>
      <td>♻️ refactor: Passando para arrow functions</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":zap: perf: Melhoria no tempo de resposta"</code>
      </td>
      <td>⚡ perf: Melhoria no tempo de resposta</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":boom: fix: Revertendo mudanças ineficientes"</code>
      </td>
      <td>💥 fix: Revertendo mudanças ineficientes</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":lipstick: feat: Estilizaçao CSS do formulario"</code>
      </td>
      <td>💄 feat: Estilizaçao CSS do formulario</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":test_tube: test: Criando novo teste"</code>
      </td>
      <td>🧪 test: Criando novo teste</td>
    </tr>
    <tr>
      <td>
        <code>git commit -m ":bulb: docs: Comentários sobre a função LoremIpsum( )"</code>
      </td>
      <td>💡 docs: Comentários sobre a função LoremIpsum( )</td>
    </tr>
  </tbody>
</table>

> 📌 **Referência**: Padrão de commits encontrado no repositório de [iuricode](https://github.com/iuricode/padroes-de-commits)

---

<div align="center">

**Desenvolvido com ❤️ pelo [Vlab UFPE](https://vlab.ufpe.br)**

</div>
