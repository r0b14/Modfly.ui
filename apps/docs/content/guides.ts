import type { Locale } from '@/lib/i18n';
type Section = { id: string; title: string; paragraphs: string[]; code?: string };
export type Guide = { title: string; description: string; sections: Section[] };
const section = (id: string, title: string, paragraphs: string[], code?: string): Section => ({
  id,
  title,
  paragraphs,
  code,
});
const example = `import { Citation } from '@modfly/ui';
import '@modfly/ui/styles.css';

export function Lesson() {
  return <Citation title="Uma ideia / An idea" text="Aprender exige prática. / Learning takes practice." />;
}`;
const installation = `pnpm add @modfly/ui@1.1.0
# npm install @modfly/ui@1.1.0
# yarn add @modfly/ui@1.1.0
# bun add @modfly/ui@1.1.0`;
const cli = `npx modfly@1.1.0 init
npx modfly@1.1.0 list
npx modfly@1.1.0 add citation accordion
npx modfly@1.1.0 add question-option
npx modfly@1.1.0 add cards --dry-run`;
const avamec = `'use client';
import { useMemo } from 'react';
import { QuestionsProvider, ActivityQuestions, createAvamecAdapter } from '@modfly/ui-avamec';
import type { ActivityDefinition, AvamecBridge } from '@modfly/ui-avamec';
import '@modfly/ui-avamec/styles.css';

const activity: ActivityDefinition = {
  module: 1, slide: 1, maxAttempts: 3,
  questions: [{ id: '1', type: 'option', prompt: 'Learning?',
    options: [{ id: 'a', label: 'Practice' }, { id: 'b', label: 'Skip review' }],
    correctAnswer: 'a' }]
};
export function Lesson({ bridge }: { bridge: AvamecBridge }) {
  const adapter = useMemo(() => createAvamecAdapter(bridge), [bridge]);
  return <QuestionsProvider activity={activity} adapter={adapter}>
    <ActivityQuestions />
  </QuestionsProvider>;
}`;
export const guides: Record<string, Record<Locale, Guide>> = {
  introduction: {
    pt: {
      title: 'Uma biblioteca para aprender',
      description: 'Conheça as peças, a origem e as decisões que dão forma à Modfly UI.',
      sections: [
        section(
          'journey',
          'Da ideia à aula',
          [
            'Um banner apresenta o assunto. Uma citação abre espaço para refletir. Um acordeão aprofunda o conteúdo e uma questão permite praticar. A Modfly fornece essas peças; o curso fornece o conteúdo e a navegação.',
          ],
          example,
        ),
        section('packages', 'Três caminhos de uso', [
          '@modfly/ui reúne 42 componentes públicos e CSS pronto. @modfly/ui-avamec acrescenta sete formatos de atividade e persistência explícita. A CLI modfly copia código editável para seu projeto.',
          'Comece pelo pacote para compor uma aula. Escolha a CLI quando precisar alterar a implementação. Acrescente AVAMEC quando a aula precisar avaliar e registrar respostas.',
        ]),
        section('origin', 'Criada a partir de cursos reais', [
          'A biblioteca nasceu da extração de componentes de cursos em React. O código histórico permanece em packages/@legado; a implementação pública foi organizada por responsabilidade e passou a distribuir estilos, tipos e assets.',
          'React compõe a interface, TypeScript descreve os contratos, Tailwind gera o CSS e Emotion atende componentes com estilos dinâmicos. O build tsup entrega ESM, CommonJS e declarações de tipos.',
          'Atomic Design organiza átomos, moléculas, organismos e templates. Essa classificação ajuda a encontrar peças; não impõe o layout do seu curso.',
        ]),
        section('layout', 'Identidade e composição', [
          'Ilustrações, faixas e cores marcam momentos pedagógicos. O site usa uma identidade editorial própria; seus tokens não se tornam automaticamente um tema dos componentes. Confira as variantes e propriedades de cada peça.',
        ]),
      ],
    },
    en: {
      title: 'A library for learning',
      description: 'Meet the building blocks, origins and decisions behind Modfly UI.',
      sections: [
        section(
          'journey',
          'From an idea to a lesson',
          [
            'A banner introduces the topic. A quotation invites reflection. An accordion explores the details and a question provides practice. Modfly supplies the pieces; the course supplies content and navigation.',
          ],
          example,
        ),
        section('packages', 'Three ways to use it', [
          '@modfly/ui provides 42 public components and ready-to-use CSS. @modfly/ui-avamec adds seven activity formats and explicit persistence. The modfly CLI copies editable source into your project.',
          'Start with the package to compose lessons. Choose the CLI when you need to change implementation. Add AVAMEC when lessons need to assess and record answers.',
        ]),
        section('origin', 'Created from real courses', [
          'The library started by extracting components from React courses. Historical code remains in packages/@legado; the public implementation was organized by responsibility and now ships styles, types and assets.',
          'React composes the interface, TypeScript describes contracts, Tailwind generates CSS and Emotion handles components with dynamic styles. tsup builds ESM, CommonJS and type declarations.',
          'Atomic Design organizes atoms, molecules, organisms and templates. This classification helps you find pieces; it does not prescribe your course layout.',
        ]),
        section('layout', 'Identity and composition', [
          'Illustrations, bands and colors identify learning moments. The website has its own editorial identity; its tokens do not automatically theme library components. Check each component’s variants and properties.',
        ]),
      ],
    },
  },
  installation: {
    pt: {
      title: 'Sua primeira aula',
      description: 'Instalação, estilos e exemplos para Vite e Next.js.',
      sections: [
        section(
          'requirements',
          'Antes de começar',
          [
            'A v1.1.0 está em preparação. Os comandos do registro abaixo dependem da publicação npm. Para avaliar antes da publicação, execute pnpm build no monorepo e instale um tarball gerado por pnpm pack no pacote desejado.',
            'Use React e React DOM 18.2 ou 19. O monorepo e a CLI usam Node 22.14 ou superior; a versão fixada para desenvolvimento está em .nvmrc.',
          ],
          installation,
        ),
        section(
          'vite',
          'Vite',
          [
            'Importe o CSS uma vez em src/main.tsx. Depois importe componentes pela API pública. Tailwind não é requisito para consumir o pacote.',
          ],
          example,
        ),
        section(
          'next',
          'Next.js App Router',
          [
            'Importe @modfly/ui/styles.css em app/layout.tsx. Exemplos com estado ou callbacks devem ficar em um arquivo com a diretiva de cliente.',
          ],
          `'use client';
import { useState } from 'react';
import { Pagination } from '@modfly/ui';
export function LessonPages() {
  const [page, setPage] = useState(1);
  return <Pagination numberOfPages={5} currentPage={page} onPageChange={setPage} />;
}`,
        ),
        section('verify', 'Confira o resultado', [
          'Abra uma página com Citation e uma interação com Pagination. Verifique estilos, imagens e teclado. Se faltar estilo, confira a importação global antes de adicionar configuração Tailwind.',
        ]),
      ],
    },
    en: {
      title: 'Your first lesson',
      description: 'Installation, styles and examples for Vite and Next.js.',
      sections: [
        section(
          'requirements',
          'Before you begin',
          [
            'Version 1.1.0 is in preparation. Registry commands below depend on npm publication. To evaluate before publication, run pnpm build in the monorepo and install a tarball generated with pnpm pack in the required package.',
            'Use React and React DOM 18.2 or 19. The monorepo and CLI require Node 22.14 or later; .nvmrc pins the development version.',
          ],
          installation,
        ),
        section(
          'vite',
          'Vite',
          [
            'Import CSS once in src/main.tsx. Then import components through the public API. Tailwind is not required to consume the package.',
          ],
          example,
        ),
        section(
          'next',
          'Next.js App Router',
          [
            'Import @modfly/ui/styles.css in app/layout.tsx. Examples with state or callbacks belong in a file with the client directive.',
          ],
          `'use client';
import { useState } from 'react';
import { Pagination } from '@modfly/ui';
export function LessonPages() {
  const [page, setPage] = useState(1);
  return <Pagination numberOfPages={5} currentPage={page} onPageChange={setPage} />;
}`,
        ),
        section('verify', 'Check the result', [
          'Open a page with Citation and a Pagination interaction. Check styles, images and keyboard use. If styles are missing, check the global CSS import before adding Tailwind configuration.',
        ]),
      ],
    },
  },
  'tailwind-setup': {
    pt: {
      title: 'Estilos prontos para usar',
      description: 'CSS distribuído, compilação própria e cuidados com classes novas.',
      sections: [
        section(
          'css',
          'O caminho padrão',
          [
            'Importe @modfly/ui/styles.css. O pacote inclui as classes usadas pelos componentes e não inclui o reset Preflight. Alguns componentes usam Emotion internamente.',
          ],
          `import '@modfly/ui/styles.css';`,
        ),
        section(
          'custom',
          'Código copiado e classes novas',
          [
            'O CSS distribuído cobre as classes conhecidas da biblioteca. Se adicionar classes Tailwind ao código copiado pela CLI, configure o compilador do seu projeto para examinar esse diretório. O monorepo usa Tailwind 3.',
            'Evite gerar o nome completo de uma classe por concatenação: o compilador precisa enxergar as classes no código. Confira a ordem dos estilos quando combinar CSS do curso e da biblioteca.',
          ],
          `// Tailwind 3
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};`,
        ),
      ],
    },
    en: {
      title: 'Ready-to-use styles',
      description: 'Distributed CSS, custom compilation and new utility classes.',
      sections: [
        section(
          'css',
          'The default path',
          [
            'Import @modfly/ui/styles.css. The package includes classes used by its components and excludes the Preflight reset. Some components use Emotion internally.',
          ],
          `import '@modfly/ui/styles.css';`,
        ),
        section(
          'custom',
          'Copied code and new classes',
          [
            'Distributed CSS covers known library classes. If you add Tailwind classes to CLI-copied code, configure your project compiler to scan that directory. The monorepo uses Tailwind 3.',
            'Avoid generating entire class names by concatenation: the compiler needs to see classes in source. Check stylesheet order when combining course and library CSS.',
          ],
          `// Tailwind 3
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};`,
        ),
      ],
    },
  },
  theming: {
    pt: {
      title: 'Sua identidade, com legibilidade',
      description: 'Personalize variantes, cores e composição sem perder a função da peça.',
      sections: [
        section(
          'variants',
          'Comece pelas variantes',
          [
            'A v1.1 não tem um provider universal de tema. Cada componente expõe suas opções: variant, cores, dimensões e className quando disponíveis. Consulte os tipos antes de personalizar.',
          ],
          `import { Citation } from '@modfly/ui';
export function Highlight() {
  return <Citation variant="yellow" title="Uma perspectiva" text="Explique com suas palavras." />;
}`,
        ),
        section('assets', 'Ilustrações e layout', [
          'Alguns SVGs têm cores fixas. Imagens, logos e textos específicos pertencem ao curso. Use a CLI quando precisar alterar a estrutura ou os assets de uma peça.',
          'Os tokens editoriais do site não substituem os estilos da biblioteca. Revise contraste, tamanho de texto, estados de foco e ordem de leitura depois de personalizar.',
        ]),
      ],
    },
    en: {
      title: 'Your identity, kept readable',
      description:
        'Customize variants, colors and composition while preserving each component’s purpose.',
      sections: [
        section(
          'variants',
          'Start with variants',
          [
            'Version 1.1 has no universal theme provider. Each component exposes its own options: variant, colors, dimensions and className where available. Check the types before customizing.',
          ],
          `import { Citation } from '@modfly/ui';
export function Highlight() {
  return <Citation variant="yellow" title="A perspective" text="Explain it in your own words." />;
}`,
        ),
        section('assets', 'Illustrations and layout', [
          'Some SVGs have fixed colors. Course-specific images, logos and text belong to the course. Use the CLI to change a component’s structure or assets.',
          'Website editorial tokens do not replace library styles. Review contrast, text size, focus states and reading order after customizing.',
        ]),
      ],
    },
  },
  cli: {
    pt: {
      title: 'Seu código, sua aula',
      description: 'Copie componentes editáveis com dependências e assets portáveis.',
      sections: [
        section(
          'start',
          'Preparar e adicionar',
          [
            'Use Node 22.14 ou superior em um projeto React com TypeScript. Os comandos abaixo dependem da publicação da CLI 1.1.0 no npm.',
            'init cria modfly.json. O destino padrão é src/components/modfly, ou components/modfly quando não existe src. list mostra o catálogo disponível.',
          ],
          cli,
        ),
        section('imports', 'Usar os arquivos', [
          'Importe styles.css do diretório gerado uma vez no entrypoint global e cada componente pelo caminho indicado no terminal. SVGs viram TSX e imagens viram módulos de dados: não é necessário configurar loaders específicos.',
        ]),
        section('conflicts', 'Revisar alterações', [
          '--dry-run mostra o trabalho sem gravar. Arquivos idênticos são preservados. Havendo conflito, add interrompe antes de copiar os componentes. Use --force apenas para substituir suas edições.',
          '--cwd seleciona o projeto. --no-install copia sem executar o gerenciador de pacotes; instale as dependências informadas manualmente.',
        ]),
        section('versions', 'Versões e licença', [
          'A versão em modfly.json deve corresponder à CLI. Não altere esse número como atalho para migração: compare as APIs e os arquivos primeiro. Preserve a licença MIT na redistribuição.',
        ]),
      ],
    },
    en: {
      title: 'Your code, your lesson',
      description: 'Copy editable components with dependencies and portable assets.',
      sections: [
        section(
          'start',
          'Prepare and add',
          [
            'Use Node 22.14 or later in a React TypeScript project. Commands below depend on CLI 1.1.0 being published to npm.',
            'init creates modfly.json. The default destination is src/components/modfly, or components/modfly when src does not exist. list shows the available catalog.',
          ],
          cli,
        ),
        section('imports', 'Use the files', [
          'Import styles.css from the generated directory once in your global entrypoint and components from the paths shown in the terminal. SVGs become TSX and images become data modules: no special loaders are needed.',
        ]),
        section('conflicts', 'Review changes', [
          '--dry-run previews work without writing. Identical files are preserved. On conflict, add stops before copying components. Use --force only to replace your edits.',
          '--cwd selects the project. --no-install copies without running the package manager; install the reported dependencies manually.',
        ]),
        section('versions', 'Versions and license', [
          'The modfly.json version must match the CLI. Do not change this number as a migration shortcut: compare APIs and files first. Preserve the MIT license when redistributing.',
        ]),
      ],
    },
  },
  avamec: {
    pt: {
      title: 'Praticar e receber feedback',
      description: 'Sete formatos de atividade com avaliação e persistência explícitas.',
      sections: [
        section('demo', 'Experimente uma atividade', [
          'A demonstração abaixo usa os componentes reais com conteúdo de curso em português e armazenamento em memória. Recarregar reinicia as respostas; nenhum dado é enviado ao AVAMEC.',
        ]),
        section(
          'connect',
          'Conectar à plataforma',
          [
            'A aplicação fornece um AvamecBridge assíncrono a createAvamecAdapter. Se a integração original usa callbacks, converta-os em Promises que resolvam somente após confirmação.',
            'QuestionsProvider recebe activity e adapter. ActivityQuestions renderiza as questões e o envio. useActivity permite compor uma interface própria com o mesmo controlador.',
          ],
          avamec,
        ),
        section('formats', 'Escolher o formato', [
          'option aceita uma alternativa; multiple aceita várias; true-false avalia linhas; grid classifica; correlation associa; drag-drop permite arrastar ou selecionar pelo teclado; written compara respostas textuais aceitas.',
          'QuestionOption, QuestionMultipleAnswer, QuestionTrueOrFalse, QuestionGrid, QuestionCorrelation, QuestionDragDrop e QuestionWritten recebem question. SendActivityButton apresenta envio, resultado e nova tentativa. A comparação escrita não é semântica.',
        ]),
        section('persistence', 'Persistência e recuperação', [
          'createMemoryAdapter é temporário. createLocalAdapter recebe armazenamento e namespace para isolamento local. createAvamecAdapter usa o bridge remoto; falhas não ativam armazenamento local silenciosamente.',
          'Respostas detalhadas são salvas separadamente do gabarito binário. A conclusão depende da confirmação de envio. Se a gravação posterior falhar, sincronizar novamente não reenvia a avaliação.',
          'Um envio sem confirmação bloqueia novas tentativas até reconciliação na plataforma. Homologue IDs, retornos, tentativas e restauração com uma conta de teste antes de usar em produção. Não há migração automática do progresso legado.',
        ]),
      ],
    },
    en: {
      title: 'Practice and receive feedback',
      description: 'Seven activity formats with assessment and explicit persistence.',
      sections: [
        section('demo', 'Try an activity', [
          'The demo below uses real components with Portuguese course content and in-memory storage. Reloading resets answers; no data is sent to AVAMEC.',
        ]),
        section(
          'connect',
          'Connect to the platform',
          [
            'Your application supplies an asynchronous AvamecBridge to createAvamecAdapter. If the original integration uses callbacks, wrap them in Promises that resolve only after confirmation.',
            'QuestionsProvider accepts activity and adapter. ActivityQuestions renders questions and submission. useActivity lets you compose a custom interface with the same controller.',
          ],
          avamec,
        ),
        section('formats', 'Choose a format', [
          'option accepts one choice; multiple accepts several; true-false evaluates rows; grid classifies; correlation matches; drag-drop allows dragging or keyboard selection; written compares accepted text answers.',
          'QuestionOption, QuestionMultipleAnswer, QuestionTrueOrFalse, QuestionGrid, QuestionCorrelation, QuestionDragDrop and QuestionWritten accept question. SendActivityButton displays submission, results and retries. Written comparison is not semantic.',
        ]),
        section('persistence', 'Persistence and recovery', [
          'createMemoryAdapter is temporary. createLocalAdapter accepts storage and a namespace for local isolation. createAvamecAdapter uses the remote bridge; failures do not silently activate local storage.',
          'Detailed answers are stored separately from the binary evaluation payload. Completion requires submission confirmation. If subsequent saving fails, resynchronization does not resend the evaluation.',
          'An unconfirmed submission blocks new attempts until platform reconciliation. Validate IDs, responses, attempts and restoration with a test account before production. Legacy progress is not migrated automatically.',
        ]),
      ],
    },
  },
  migration: {
    pt: {
      title: 'Migrar para a v1.1',
      description: 'Planeje a transição do código histórico para os pacotes públicos.',
      sections: [
        section('inventory', 'Inventarie o curso', [
          'Mapeie imports, variantes, estilos e integrações existentes. Logos, conteúdo institucional e infográficos específicos continuam no curso. O código em packages/@legado serve de referência histórica.',
        ]),
        section('core', 'Migre uma página de cada vez', [
          'Substitua imports locais por @modfly/ui, importe o CSS global e ajuste propriedades conforme a referência. Compare a página em desktop e mobile, incluindo estados expandidos e navegação por teclado.',
        ]),
        section('activity', 'Trate progresso como uma migração própria', [
          '@modfly/ui-avamec tem API nova. Não use o novo provider como substituição automática do legado. Defina a conversão de IDs e estados com a equipe da plataforma, teste em homologação e preserve a possibilidade de voltar ao curso anterior.',
        ]),
      ],
    },
    en: {
      title: 'Migrate to v1.1',
      description: 'Plan the transition from historical source to public packages.',
      sections: [
        section('inventory', 'Inventory your course', [
          'Map imports, variants, styles and existing integrations. Logos, institutional content and course-specific infographics stay in the course. packages/@legado is a historical reference.',
        ]),
        section('core', 'Migrate one page at a time', [
          'Replace local imports with @modfly/ui, import global CSS and adjust properties using the reference. Compare desktop and mobile pages, including expanded states and keyboard navigation.',
        ]),
        section('activity', 'Treat progress as its own migration', [
          '@modfly/ui-avamec has a new API. Do not use its provider as an automatic legacy replacement. Define ID and state conversion with the platform team, test in staging and preserve a way to restore the previous course.',
        ]),
      ],
    },
  },
  contributing: {
    pt: {
      title: 'Contribuir com uma peça',
      description:
        'Uma contribuição inclui código, exemplo, documentação e evidência de funcionamento.',
      sections: [
        section(
          'setup',
          'Preparar o ambiente',
          ['Use a versão Node de .nvmrc, habilite pnpm e instale o lockfile sem alterações.'],
          `corepack enable
pnpm install --frozen-lockfile
pnpm build
pnpm --filter docs dev`,
        ),
        section(
          'change',
          'Implementar e documentar',
          [
            'Mantenha contratos públicos tipados. Adicione ou ajuste stories com situações reais de uso e inclua testes para comportamentos relevantes. Textos editoriais em português e inglês ficam separados dos tipos gerados.',
          ],
          `pnpm docs:generate
pnpm check
pnpm test:e2e
pnpm test:packages`,
        ),
        section('review', 'Enviar para revisão', [
          'Abra um PR explicando o problema, o comportamento final e as verificações realizadas. Para mudanças de pacote, registre a alteração com Changesets. Confira a licença de novos assets antes de incluí-los.',
        ]),
      ],
    },
    en: {
      title: 'Contribute a building block',
      description:
        'A contribution includes code, an example, documentation and evidence that it works.',
      sections: [
        section(
          'setup',
          'Prepare the environment',
          [
            'Use the Node version in .nvmrc, enable pnpm and install without changing the lockfile.',
          ],
          `corepack enable
pnpm install --frozen-lockfile
pnpm build
pnpm --filter docs dev`,
        ),
        section(
          'change',
          'Implement and document',
          [
            'Keep public contracts typed. Add or update stories with realistic usage and test meaningful behavior. Portuguese and English editorial content is separate from generated types.',
          ],
          `pnpm docs:generate
pnpm check
pnpm test:e2e
pnpm test:packages`,
        ),
        section('review', 'Submit for review', [
          'Open a PR explaining the problem, final behavior and checks performed. Record package changes with Changesets. Check the license of new assets before including them.',
        ]),
      ],
    },
  },
  troubleshooting: {
    pt: {
      title: 'Encontrar e resolver problemas',
      description: 'Um roteiro curto para diagnosticar instalação, estilos e interações.',
      sections: [
        section('install', 'O pacote não é encontrado', [
          'Confirme se a versão já foi publicada no registro usado pelo seu projeto. Enquanto a v1.1 está em preparação, use os tarballs locais. Não troque silenciosamente para uma versão com API diferente.',
        ]),
        section('styles', 'O componente aparece sem estilo', [
          'Confira a importação global do CSS, a ordem das folhas e as regras do curso. Se copiou código pela CLI, importe o styles.css copiado. Classes novas podem exigir compilação Tailwind própria.',
        ]),
        section('interaction', 'A interação não responde', [
          'No Next.js, mantenha estado e callbacks em uma fronteira de cliente. Confira se propriedades controladas, como currentPage e isOpen, são atualizadas no componente pai.',
        ]),
        section('media', 'Uma mídia não carrega', [
          'Abra a URL diretamente e confira permissão de incorporação no provedor. Para imagens, verifique src, fallback e descrições. Players externos precisam de validação própria.',
        ]),
        section('platform', 'O envio ficou sem confirmação', [
          'Não force uma nova tentativa. Confira o registro na plataforma e o estado salvo antes de reconciliar. Inclua passos de reprodução e mensagens de erro ao reportar o problema, sem dados de alunos ou credenciais.',
        ]),
      ],
    },
    en: {
      title: 'Find and solve problems',
      description: 'A short diagnostic path for installation, styling and interactions.',
      sections: [
        section('install', 'The package cannot be found', [
          'Check whether the version has been published to your project’s registry. While v1.1 is in preparation, use local tarballs. Do not silently switch to a version with a different API.',
        ]),
        section('styles', 'The component has no styles', [
          'Check the global CSS import, stylesheet order and course rules. For CLI-copied code, import the copied styles.css. New classes may need your own Tailwind compilation.',
        ]),
        section('interaction', 'An interaction does not respond', [
          'In Next.js, keep state and callbacks inside a client boundary. Ensure controlled properties such as currentPage and isOpen are updated by the parent.',
        ]),
        section('media', 'Media does not load', [
          'Open the URL directly and check the provider’s embedding permissions. For images, verify src, fallback and descriptions. External players require their own validation.',
        ]),
        section('platform', 'Submission was not confirmed', [
          'Do not force a new attempt. Check the platform record and stored state before reconciliation. Include reproduction steps and error messages when reporting the issue, without student data or credentials.',
        ]),
      ],
    },
  },
  changelog: {
    pt: {
      title: 'O que muda na v1.1',
      description: 'Implementação disponível para revisão; publicação estável ainda em preparação.',
      sections: [
        section('core', 'Componentes e distribuição', [
          '42 componentes públicos em 39 grupos, CSS distribuído, assets portáveis e ajustes de responsividade, SSR e teclado. O catálogo e as referências partem dos tipos e stories reais.',
        ]),
        section('tools', 'Atividades e código editável', [
          'Sete formatos AVAMEC com adaptadores explícitos e tratamento de envio incerto. CLI com 51 entradas, verificação de conflitos e instalação de dependências.',
        ]),
        section('release', 'Estado da entrega', [
          'Build e testes automatizados verificam os pacotes. A publicação npm e a homologação real AVAMEC precisam de confirmação externa. Esta página não declara a versão publicada.',
        ]),
      ],
    },
    en: {
      title: 'What changes in v1.1',
      description:
        'Implementation is available for review; stable publication is still in preparation.',
      sections: [
        section('core', 'Components and distribution', [
          '42 public components in 39 groups, distributed CSS, portable assets and improvements to responsiveness, SSR and keyboard use. Catalog references come from real types and stories.',
        ]),
        section('tools', 'Activities and editable code', [
          'Seven AVAMEC formats with explicit adapters and unconfirmed-submission handling. A CLI with 51 entries, conflict checks and dependency installation.',
        ]),
        section('release', 'Delivery status', [
          'Builds and automated tests verify the packages. npm publication and real AVAMEC staging validation require external confirmation. This page does not declare the version published.',
        ]),
      ],
    },
  },
};
export const guideSlugs = Object.keys(guides);
