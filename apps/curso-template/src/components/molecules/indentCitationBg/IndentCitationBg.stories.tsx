import type { Meta, StoryObj } from '@storybook/react';
import IndentCitationBg from './IndentCitationBg';

const meta: Meta<typeof IndentCitationBg> = {
  title: 'Molecules/IndentCitation/IndentCitationBg',
  component: IndentCitationBg,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IndentCitationBg>;

export const Yellow: Story = {
  args: {
    option: 'yellow',
    title: 'Destaque Importante',
    text: 'A Justiça Restaurativa promove a cura e a reconciliação dentro da comunidade escolar.',
    children: 'Referência: Manual de Justiça Restaurativa (2023)',
  },
};

export const Pink: Story = {
  args: {
    option: 'pink',
    title: 'Atenção ao Conteúdo',
    text: 'Sempre considere os sentimentos de todas as partes envolvidas no processo de mediação.',
    children: 'Dica Prática para Educadores',
    backgroundColor: '#F3E0E9',
  },
};
