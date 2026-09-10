import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import catalog from '../../apps/docs/generated/catalog.json';
for (const item of catalog) {
  test(`${item.name}: renderização, imagens, responsividade e acessibilidade`, async ({page}) => {
    // O contrato é a URL/título do iframe. O player externo não pertence à biblioteca.
    await page.route(/https:\/\/(www\.)?youtube-nocookie\.com\/|https:\/\/open\.spotify\.com\//, route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><html lang="pt-BR"><title>Player de teste</title><body><p>Conteúdo externo simulado</p></body></html>' }));
    const errors:string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(`/docs/components/${item.slug}`);
    await expect(page.getByRole('heading',{name:new RegExp(`^${item.name}`),level:1})).toBeVisible();
    for (const width of [375,768,1440]) {
      await page.setViewportSize({width,height:1000});
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 2)).toBe(true);
    }
    for (const preview of await page.locator('[data-testid^="preview-"]').all()) {
      for (const img of await preview.locator('img').all()) {
        const src = await img.getAttribute('src');
        expect(src).toBeTruthy();
        if (src?.startsWith('data:')) await expect.poll(() => img.evaluate((el:HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
      }
    }
    // Todas as variantes do catálogo, incluindo subcomponentes de IndentCitation.
    for (const selector of await page.locator('select').all()) {
      for (const option of await selector.locator('option').all()) {
        const value = await option.getAttribute('value');
        if (value) await selector.selectOption(value);
        const audit = await new AxeBuilder({page}).include('[data-testid^="preview-"]').analyze();
        expect(audit.violations.filter(v => v.impact === 'critical' || v.impact === 'serious').map(v => ({id:v.id,nodes:v.nodes.map(n=>n.target)})), `${item.name}: ${value}`).toEqual([]);
      }
    }
    const audit = await new AxeBuilder({page}).include('[data-testid^="preview-"]').analyze();
    expect(audit.violations.filter(v => v.impact === 'critical' || v.impact === 'serious').map(v => ({id:v.id,nodes:v.nodes.map(n=>n.target)}))).toEqual([]);
    expect(errors).toEqual([]);
  });
}
test('Accordion e modal funcionam com teclado', async ({page}) => {
  await page.goto('/docs/components/accordion');
  const trigger = page.getByTestId('preview-Accordion').getByRole('button').first();
  await expect(trigger.getByRole('heading')).toHaveCSS('color', 'rgb(255, 255, 255)');
  await trigger.focus(); await page.keyboard.press('Enter'); await expect(trigger).toHaveAttribute('aria-expanded','true');
  await page.goto('/docs/components/referencemodal');
  const reference = page.getByTestId('preview-ReferenceModal').getByRole('button');
  await reference.focus(); await page.keyboard.press('Enter'); await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape'); await expect(page.getByRole('dialog')).not.toBeVisible(); await expect(reference).toBeFocused();
});
test('atividade completa apresenta os sete tipos e recebe respostas', async ({page}) => {
  await page.goto('/docs/getting-started/avamec');
  await expect(page.locator('fieldset')).toHaveCount(7);
  await page.getByRole('radio',{name:'Praticar com feedback'}).check();
  await page.getByRole('checkbox',{name:'Explicar com suas palavras'}).check(); await page.getByRole('checkbox',{name:'Resolver exercícios'}).check();
  const selects = page.locator('fieldset select');
  for (const [index,value] of ['true','false','ativa','consolidar','aplicar'].entries()) await selects.nth(index).selectOption(value);
  await page.getByRole('textbox',{name:'Sua resposta'}).fill('prática'); await page.getByRole('button',{name:'Enviar respostas'}).click();
  await expect(page.getByText('Atividade concluída!')).toBeVisible();
  const audit = await new AxeBuilder({page}).include('.modfly-question').analyze(); expect(audit.violations.filter(v => ['serious','critical'].includes(v.impact ?? ''))).toEqual([]);
});
