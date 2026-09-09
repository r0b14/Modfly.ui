import Link from 'next/link';
import catalog from '@/generated/catalog.json';
import { editorial } from '@/content/components';
import { propDescription } from '@/content/props';
import { copy, localized, repository, type Locale } from '@/lib/i18n';
import { RightToc } from './RightToc';
import { LiveExample } from './LiveExample';
import { Pager } from './Pager';
export function ComponentDoc({ slug, lang }: { slug: string; lang: Locale }) {
  const index = catalog.findIndex((c) => c.slug === slug);
  const item = catalog[index];
  const content = editorial(slug, lang);
  const t = (pt: string, en: string) => copy(lang, pt, en);
  const entries = [
    { id: 'overview', label: t('Visão geral', 'Overview') },
    { id: 'preview', label: t('Demonstração', 'Demonstration') },
    { id: 'props', label: t('API e tipos', 'API and types') },
    { id: 'usage', label: t('Como usar', 'Usage') },
    { id: 'variants', label: t('Composição e acessibilidade', 'Composition and accessibility') },
  ];
  const pagerItem = (i: number, label: string) =>
    catalog[i]
      ? {
          href: localized(lang, `/docs/components/${catalog[i].slug}`),
          label,
          title: catalog[i].name,
        }
      : undefined;
  return (
    <div className="reading-layout">
      <article className="reading-article">
        <header className="doc-head">
          <p className="eyebrow">@modfly/ui · {t('Referência', 'Reference')}</p>
          <h1 className="doc-title">
            {item.name}
            <i>.</i>
          </h1>
          <p className="doc-lead">{content.description}</p>
        </header>
        <section id="overview">
          <h2 className="doc-h2">{entries[0].label}</h2>
          <p className="doc-p">{content.guidance}</p>
        </section>
        <section id="preview">
          <h2 className="doc-h2">{entries[1].label}</h2>
          <p className="doc-p">
            {t(
              'Demonstrações reais do catálogo. Os exemplos preservam o conteúdo original dos cursos em português; nomes de variantes são identificadores da API.',
              'Live catalog demonstrations. Examples preserve original Portuguese course content; variant names are API identifiers.',
            )}
          </p>
          {item.components.map((component) => (
            <div key={component.name}>
              <h3 className="doc-h3">{component.name}</h3>
              <LiveExample
                name={component.name}
                example={component.example}
                initialVariant={component.initialVariant}
              />
            </div>
          ))}
        </section>
        <section id="props">
          <h2 className="doc-h2">{entries[2].label}</h2>
          <p className="doc-p">
            {t(
              'Tipos extraídos da implementação pública. Propriedades opcionais podem ser omitidas; a demonstração mostra uma configuração inicial.',
              'Types extracted from the public implementation. Optional properties may be omitted; the demonstration shows an initial configuration.',
            )}
          </p>
          {item.components.map((component) => (
            <div key={component.name}>
              <h3 className="doc-h3">{component.name}</h3>
              <div
                className="table-wrap"
                role="region"
                tabIndex={0}
                aria-label={`${component.name} API`}
              >
                <table className="doc-table">
                  <caption className="sr-only">{component.name} API</caption>
                  <thead>
                    <tr>
                      {[
                        t('Propriedade', 'Property'),
                        t('Tipo', 'Type'),
                        t('Obrigatória', 'Required'),
                        t('Descrição', 'Description'),
                      ].map((label) => (
                        <th scope="col" key={label}>
                          {label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {component.props.map((prop) => (
                      <tr key={prop.name}>
                        <th scope="row">
                          <code>{prop.name}</code>
                        </th>
                        <td>
                          <code>{prop.type}</code>
                        </td>
                        <td>{prop.required ? t('Sim', 'Yes') : t('Não', 'No')}</td>
                        <td>{propDescription(prop.name, lang)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>
        <section id="usage">
          <h2 className="doc-h2">{entries[3].label}</h2>
          <ol className="prose-ol">
            <li>
              {t(
                'Instale o pacote e importe @modfly/ui/styles.css uma vez no entrypoint global.',
                'Install the package and import @modfly/ui/styles.css once in the global entrypoint.',
              )}
            </li>
            <li>
              {t(
                'Copie o exemplo e substitua o conteúdo pelo material da aula.',
                'Copy the example and replace its content with your lesson material.',
              )}
            </li>
            <li>
              {t(
                'No Next.js, mantenha callbacks e estado em uma fronteira de cliente.',
                'In Next.js, keep callbacks and state inside a client boundary.',
              )}
            </li>
          </ol>
          <p className="doc-p">
            <Link href={localized(lang, '/docs/getting-started/installation')}>
              {t(
                'Guia de instalação e disponibilidade da versão',
                'Installation guide and version availability',
              )}
            </Link>
          </p>
          <p className="doc-p">
            {t(
              'Para editar a implementação após a publicação da CLI:',
              'To edit the implementation after CLI publication:',
            )}{' '}
            <code>npx modfly@1.1.0 add {slug}</code>.{' '}
            <Link href={localized(lang, '/docs/getting-started/cli')}>
              {t('Configurar a CLI', 'Configure the CLI')}
            </Link>
          </p>
        </section>
        <section id="variants">
          <h2 className="doc-h2">{entries[4].label}</h2>
          <p className="doc-p">{content.guidance}</p>
          <p className="doc-p">
            {t(
              'Teste seu conteúdo em telas pequenas e com teclado. Props que recebem HTML precisam de conteúdo confiável e sanitizado pela aplicação. As cores e dimensões personalizadas devem preservar contraste e legibilidade.',
              'Test your content on small screens and with a keyboard. Props accepting HTML require trusted content sanitized by your application. Custom colors and dimensions must preserve contrast and readability.',
            )}
          </p>
          <p className="doc-p">
            <a
              href={`${repository}/tree/${process.env.VERCEL_GIT_COMMIT_SHA || 'codex/modfly-v1.1-release'}/${item.source}`}
            >
              {t('Consultar implementação e stories', 'View implementation and stories')} ↗
            </a>
          </p>
        </section>
        <Pager
          prev={pagerItem(index - 1, t('Anterior', 'Previous'))}
          next={pagerItem(index + 1, t('Próximo', 'Next'))}
        />
      </article>
      <RightToc entries={entries} />
    </div>
  );
}
