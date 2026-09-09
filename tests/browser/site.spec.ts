import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import catalog from '../../apps/docs/generated/catalog.json';
import { guideSlugs } from '../../apps/docs/content/guides';
const paths = [
  '',
  '/docs/components',
  ...catalog.map((item) => `/docs/components/${item.slug}`),
  ...guideSlugs.map((slug) => `/docs/getting-started/${slug}`),
];
for (const lang of ['pt', 'en']) {
  test(`${lang}: todas as páginas, metadados, links internos e layouts`, async ({ page }) => {
    test.setTimeout(240000);
    await page.route(
      /https:\/\/(www\.)?youtube-nocookie\.com\/|https:\/\/open\.spotify\.com\//,
      (route) =>
        route.fulfill({
          contentType: 'text/html',
          body: '<!doctype html><html lang="en"><title>Test player</title><body>External content</body></html>',
        }),
    );
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    for (const path of paths) {
      const response = await page.goto(`/${lang}${path}`);
      expect(response?.status(), path).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
      await expect(page.locator('main h1')).toHaveCount(1);
      await expect(page.locator('main h1')).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        `https://modfly.design/${lang}${path}`,
      );
      await expect(page.locator('link[hreflang="en"]')).toHaveAttribute(
        'href',
        `https://modfly.design/en${path}`,
      );
      expect(await page.locator('meta[name="description"]').getAttribute('content')).toBeTruthy();
      const links = await page
        .locator('a[href^="/"]')
        .evaluateAll((nodes) => nodes.map((node) => node.getAttribute('href')!));
      for (const href of links) {
        const [withoutHash] = href.split('#');
        expect(paths, `${path}: ${href}`).toContain(withoutHash.replace(/^\/(pt|en)/, ''));
      }
      for (const anchor of await page.locator('main a[href^="#"], .page-toc a').all()) {
        const href = await anchor.getAttribute('href');
        if (href && href !== '#')
          expect(await page.locator(`[id="${href.slice(1)}"]`).count(), href).toBe(1);
      }
      for (const width of [375, 768, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        expect(
          await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 2),
          `${path} ${width}`,
        ).toBe(true);
      }
    }
    expect(errors).toEqual([]);
  });
  for (const path of [
    '',
    '/docs/components',
    '/docs/components/citation',
    '/docs/getting-started/installation',
    '/docs/getting-started/cli',
    '/docs/getting-started/avamec',
  ]) {
    test(`${lang}${path}: acessibilidade da página inteira`, async ({ page }) => {
      await page.goto(`/${lang}${path}`);
      for (const width of [375, 1440]) {
        await page.setViewportSize({ width, height: 1000 });
        const audit = await new AxeBuilder({ page }).analyze();
        expect(
          audit.violations
            .filter((v) => ['serious', 'critical'].includes(v.impact ?? ''))
            .map((v) => ({
              id: v.id,
              nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })),
            })),
        ).toEqual([]);
      }
    });
  }
}
test('menu móvel: foco, Escape, navegação e busca sem acentos', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/pt');
  const trigger = page.getByRole('button', { name: 'Abrir menu', exact: true });
  await trigger.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.locator('.site-main')).toHaveAttribute('inert', '');
  const audit = await new AxeBuilder({ page }).analyze();
  expect(
    audit.violations
      .filter((v) => ['serious', 'critical'].includes(v.impact ?? ''))
      .map((v) => v.id),
  ).toEqual([]);
  const search = page.getByRole('searchbox', { name: 'Buscar na documentação' });
  await expect(search).toBeFocused();
  const firstLink = page.getByRole('dialog').locator('a').first();
  const lastLink = page.getByRole('dialog').locator('a').last();
  await lastLink.focus(); await page.keyboard.press('Tab'); await expect(firstLink).toBeFocused();
  await page.keyboard.press('Shift+Tab'); await expect(lastLink).toBeFocused();
  await search.fill('instalacao');
  await expect(page.getByRole('link', { name: 'Sua primeira aula', exact: true })).toBeVisible();
  await search.fill('zzzzzz');
  await expect(page.getByRole('dialog').getByRole('status')).toContainText('Nenhum resultado');
  await page.keyboard.press('Escape');
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  await page.keyboard.press('Control+k');
  await expect(search).toBeFocused();
  await search.fill('Citation');
  await page.getByRole('link', { name: 'Citation', exact: true }).click();
  await expect(page).toHaveURL('/pt/docs/components/citation');
  await expect(page.getByRole('dialog')).toHaveCount(0);
});
test('trocar idioma preserva página e seção; índice funciona pelo teclado', async ({ page }) => {
  await page.goto('/pt/docs/components/citation#usage');
  await page.getByRole('link', { name: 'Read this page in English' }).click();
  await expect(page).toHaveURL('/en/docs/components/citation#usage');
  const anchor = page
    .getByRole('navigation', { name: 'On this page' })
    .getByRole('link', { name: 'API and types' });
  await anchor.focus();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#props$/);
  await page.getByRole('link', { name: 'Ler esta página em português' }).click();
  await expect(page).toHaveURL('/pt/docs/components/citation#props');
});
test('código: sucesso e falha de cópia são informados', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/en/docs/getting-started/cli');
  await page.getByRole('button', { name: 'Copy code', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Code copied');
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain(
    'npx modfly@1.1.0 init',
  );
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: () => Promise.reject(new Error('denied')) },
      configurable: true,
    });
  });
  await page.getByRole('button', { name: 'Copy code', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Could not copy');
});
test('redirecionamentos, páginas inexistentes e recursos públicos', async ({ page, request }) => {
  for (const [from, to] of [
    ['/', '/pt'],
    ['/docs/components/citation', '/pt/docs/components/citation'],
    ['/docs/getting-started/cli', '/pt/docs/getting-started/cli'],
  ]) {
    const response = await request.get(from, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(to);
  }
  for (const lang of ['pt', 'en']) {
    const response = await page.goto(`/${lang}/docs/components/not-a-component`);
    expect(response?.status()).toBe(404);
    await expect(page.locator('main h1')).toContainText(
      lang === 'pt' ? 'Página não encontrada' : 'Page not found',
    );
  }
  const sitemap = await request.get('/sitemap.xml');
  const xml = await sitemap.text();
  expect(xml.match(/<loc>/g)?.length).toBe(paths.length * 2);
  expect(xml).toContain('https://modfly.design/en/docs/getting-started/cli');
  expect((await request.get('/share.png')).headers()['content-type']).toContain('image/png');
  expect((await request.get('/icon.svg')).status()).toBe(200);
});
test('catálogo filtra e oferece recuperação sem resultados', async ({ page }) => {
  await page.goto('/en/docs/components');
  const input = page.getByRole('searchbox', { name: 'Find a building block' });
  await input.fill('quotation');
  await expect(page.locator('.catalog-card')).not.toHaveCount(0);
  await input.fill('zzzzz');
  await expect(page.getByRole('status')).toHaveText('No components found. Try another term.');
  await input.fill('Accordion');
  await page.locator('.catalog-card').click();
  await expect(page).toHaveURL('/en/docs/components/accordion');
});
