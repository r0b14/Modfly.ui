import { test, expect } from '@playwright/test';
for (const [lang, id, title] of [
  ['pt', 'portugues', 'Modfly UI: laboratório de componentes'],
  ['en', 'english', 'Modfly UI: component lab'],
]) {
  test(`Storybook: apresentação ${lang} e componente real`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`http://127.0.0.1:6020/?path=/docs/welcome-${id}--docs`);
    const preview = page.frameLocator('#storybook-preview-iframe');
    await expect(preview.getByRole('heading', { name: title })).toBeVisible();
    await expect(
      preview.getByRole('link', {
        name: lang === 'pt' ? 'Documentação em português' : 'English documentation',
        exact: true,
      }),
    ).toHaveAttribute('href', `https://modfly.design/${lang}`);
    await page.reload();
    await expect(preview.getByRole('heading', { name: title })).toBeVisible();
    await page.goto('http://127.0.0.1:6020/?path=/story/molecules-citation--verde');
    await expect(preview.getByText('Citação Importante', { exact: true })).toBeVisible();
    expect(errors).toEqual([]);
  });
}
