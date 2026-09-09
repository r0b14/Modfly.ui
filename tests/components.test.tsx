import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderToString } from 'react-dom/server';
import { Accordion, ReferenceModal, Pagination } from '../packages/ui/src';
const modules = import.meta.glob('../packages/ui/src/components/**/*.stories.tsx', { eager: true }) as Record<string, any>;
describe('Catálogo público', () => {
  for (const [file, module] of Object.entries(modules)) {
    for (const [name, story] of Object.entries(module) as [string, any][]) {
      if (name === 'default') continue;
      it(`${file.split('/').at(-1)} / ${name}: renderização e SSR`, () => {
        const Component = module.default.component;
        const props = {...module.default.args,...story.args};
        expect(() => renderToString(<Component {...props} />)).not.toThrow();
        const { container } = render(<Component {...props} />);
        expect(container.innerHTML.length).toBeGreaterThan(0);
        expect(container.querySelector('img[src^="function"]')).toBeNull();
      });
    }
  }
});
it('Accordion abre por teclado e associa painel ao gatilho', () => {
  render(<Accordion title="Saiba mais" bgColor={1}><p>Conteúdo expandido</p></Accordion>);
  const trigger = screen.getByRole('button',{name:/Saiba mais/}); expect(trigger).toHaveAttribute('aria-expanded','false');
  fireEvent.keyDown(trigger,{key:'Enter'}); expect(trigger).toHaveAttribute('aria-expanded','true'); expect(document.getElementById(trigger.getAttribute('aria-controls')!)).toBeVisible();
});
it('ReferenceModal tem diálogo identificado e botão de fechar', () => {
  render(<ReferenceModal reference="Fonte bibliográfica">Consultar fonte</ReferenceModal>);
  fireEvent.click(screen.getByRole('button',{name:'Consultar fonte'})); expect(screen.getByRole('dialog',{name:'Referência'})).toBeVisible();
  fireEvent.click(screen.getByRole('button',{name:'Fechar referência'})); expect(screen.queryByRole('dialog')).toBeNull();
});
it('Pagination identifica a página atual e evita submissão de formulário', () => {
  render(<Pagination numberOfPages={3} currentPage={1} onPageChange={() => {}} />);
  expect(screen.getByRole('button',{name:'Página 1'})).toHaveAttribute('aria-current','page');
  expect(screen.getByRole('button',{name:'VOLTAR'})).toBeDisabled();
  for (const button of screen.getAllByRole('button')) expect(button).toHaveAttribute('type','button');
});
