import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Citation, LearningBlock } from '@modfly/ui';
import catalog from '@/generated/catalog.json';
import { copy, isLocale, localized, release } from '@/lib/i18n';
import { pageMetadata } from '@/lib/metadata';
import { DocCodeBlock } from '@/components/docs/DocCodeBlock';
type Props = { params: Promise<{ lang: string }> };
export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return pageMetadata(
    lang,
    '',
    copy(lang, 'Componentes feitos para aprender', 'Components built for learning'),
    copy(
      lang,
      'Uma biblioteca React e TypeScript para compor cursos, explorar ideias e praticar com feedback.',
      'A React and TypeScript library for composing courses, exploring ideas and practicing with feedback.',
    ),
  );
}
export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = (pt: string, en: string) => copy(lang, pt, en);
  const components = catalog.reduce((sum, item) => sum + item.components.length, 0);
  const examples = [
    ['citation', t('Uma ideia para refletir', 'An idea to reflect on')],
    ['accordion', t('Um assunto para aprofundar', 'A topic to explore')],
    ['pagination', t('Um caminho para seguir', 'A path to follow')],
  ];
  return (
    <>
      <section className="home-hero">
        <div>
          <p className="eyebrow">React · TypeScript · {t('Código aberto', 'Open source')}</p>
          <h1 className="hero-title">
            {t('Componentes', 'Components')}
            <br />
            <i>{t('feitos', 'built')}</i> {t('para', 'for')}
            <br />
            {t('aprender.', 'learning.')}
          </h1>
          <p className="hero-description">
            {t(
              'Transforme conteúdo em uma experiência de aprendizagem. Peças ilustradas para apresentar, explorar e praticar — com o código nas suas mãos.',
              'Turn content into a learning experience. Illustrated building blocks to introduce, explore and practice — with the code in your hands.',
            )}
          </p>
          <div className="hero-actions">
            <Link
              className="primary-link"
              href={localized(lang, '/docs/getting-started/installation')}
            >
              {t('Criar minha primeira aula', 'Build my first lesson')} ↗
            </Link>
            <Link className="secondary-link" href={localized(lang, '/docs/components')}>
              {t('Explorar componentes', 'Explore components')} →
            </Link>
          </div>
          <p className="release-note">
            v{release.version} ·{' '}
            {t('em preparação para publicação npm', 'in preparation for npm publication')}.{' '}
            <Link href={localized(lang, '/docs/getting-started/changelog')}>
              {t('Acompanhar a versão', 'Follow this version')}
            </Link>
          </p>
        </div>
        <div className="hero-preview">
          <p className="eyebrow">{t('Uma peça em ação', 'A building block in action')}</p>
          <Citation
            variant="yellow"
            title={t('Para refletir', 'Pause and reflect')}
            text={t(
              'O que você pode criar com uma nova maneira de ensinar?',
              'What could you create with a new way of teaching?',
            )}
          />
          <p className="preview-caption">
            {t(
              'Este é o componente Citation, renderizado pela biblioteca.',
              'This is Citation, rendered by the library.',
            )}
          </p>
        </div>
      </section>
      <dl className="home-stats">
        {[
          [String(components), t('componentes públicos', 'public components')],
          [String(catalog.length), t('grupos no catálogo', 'catalog groups')],
          ['7', t('formatos de atividade', 'activity formats')],
          ['MIT', t('para criar e compartilhar', 'to create and share')],
        ].map(([value, label]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">01 · {t('Compor', 'Compose')}</p>
          <h2>{t('Uma aula ganha forma.', 'A lesson takes shape.')}</h2>
          <p>
            {t(
              'Comece com uma ideia, organize a leitura e convide o aluno a participar. Cada peça tem demonstrações, tipos e código de exemplo.',
              'Start with an idea, organize the reading and invite the learner to participate. Each piece includes demonstrations, types and example code.',
            )}
          </p>
        </div>
        <div className="journey-grid">
          {examples.map(([slug, title], i) => (
            <Link
              key={slug}
              className="journey-card"
              href={localized(lang, `/docs/components/${slug}`)}
            >
              <span className="journey-number">0{i + 1}</span>
              <h3>{title}</h3>
              <span>{catalog.find((item) => item.slug === slug)?.name} ↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="home-section home-split">
        <div className="section-heading">
          <p className="eyebrow">02 · {t('Entender', 'Understand')}</p>
          <h2>{t('Nascida na sala de aula.', 'Born in the classroom.')}</h2>
          <p>
            {t(
              'Componentes extraídos de cursos reais, organizados em um monorepo com contratos TypeScript, estilos distribuídos e exemplos verificáveis.',
              'Components extracted from real courses, organized in a monorepo with TypeScript contracts, distributed styles and verifiable examples.',
            )}
          </p>
          <Link
            className="secondary-link"
            href={localized(lang, '/docs/getting-started/introduction')}
          >
            {t('Conhecer a origem e as decisões', 'Explore the origins and decisions')} →
          </Link>
        </div>
        <div>
          <LearningBlock variant={9}>
            <p className="p-4 text-base">
              {t(
                'Você escolhe o conteúdo. A biblioteca oferece as peças para dar ritmo, destaque e espaço à aprendizagem.',
                'You choose the content. The library offers the pieces to give learning rhythm, emphasis and room to grow.',
              )}
            </p>
          </LearningBlock>
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">03 · {t('Escolher', 'Choose')}</p>
          <h2>{t('O caminho que sua aula precisa.', 'The path your lesson needs.')}</h2>
        </div>
        <div className="journey-grid">
          {[
            [
              '@modfly/ui',
              t(
                'Componha com os componentes e o CSS distribuído. React 18 e 19, sem exigir Tailwind no seu projeto.',
                'Compose with components and distributed CSS. React 18 and 19, with no Tailwind requirement in your project.',
              ),
              'installation',
            ],
            [
              'modfly CLI',
              t(
                'Copie o código, adapte a estrutura e mantenha as mudanças no seu projeto.',
                'Copy the code, adapt the structure and keep changes in your project.',
              ),
              'cli',
            ],
            [
              '@modfly/ui-avamec',
              t(
                'Crie atividades com sete formatos. Conecte a persistência explicitamente e homologue sua integração.',
                'Create activities with seven formats. Connect persistence explicitly and validate your integration.',
              ),
              'avamec',
            ],
          ].map(([name, description, slug]) => (
            <div className="package-card" key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
              <Link
                className="secondary-link"
                href={localized(lang, `/docs/getting-started/${slug}`)}
              >
                {t('Abrir guia', 'Open guide')} →
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="home-section home-split">
        <div className="section-heading">
          <p className="eyebrow">04 · {t('Começar', 'Start')}</p>
          <h2>{t('Uma importação. Muitas possibilidades.', 'One import. Many possibilities.')}</h2>
          <p>
            {t(
              'Importe o CSS uma vez no entrypoint e componha sua primeira página. O guia explica instalação, disponibilidade da versão e uso no Vite e no Next.js.',
              'Import CSS once in the entrypoint and compose your first page. The guide explains installation, version availability and usage with Vite and Next.js.',
            )}
          </p>
          <Link
            className="primary-link"
            href={localized(lang, '/docs/getting-started/installation')}
          >
            {t('Abrir instalação', 'Open installation')} →
          </Link>
        </div>
        <DocCodeBlock
          filename="Lesson.tsx"
          raw={`import { Citation } from '@modfly/ui';\nimport '@modfly/ui/styles.css';\n\nexport function Lesson() {\n  return <Citation title="${t('Para refletir', 'Reflect')}"\n    text="${t('Aprender exige prática.', 'Learning takes practice.')}" />;\n}`}
        >
          <pre>{`import { Citation } from '@modfly/ui';\nimport '@modfly/ui/styles.css';\n\nexport function Lesson() {\n  return <Citation title="${t('Para refletir', 'Reflect')}"\n    text="${t('Aprender exige prática.', 'Learning takes practice.')}" />;\n}`}</pre>
        </DocCodeBlock>
      </section>
    </>
  );
}
