import type { Meta, StoryObj } from '@storybook/react';
import IndentCitationTitle from './IndentCitationTitle';

const meta: Meta<typeof IndentCitationTitle> = {
  title: 'Molecules/IndentCitation/IndentCitationTitle',
  component: IndentCitationTitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IndentCitationTitle>;

export const Default: Story = {
  args: {
    title: 'Título do Destaque',
    children: 'Este é um texto de citação com um título em negrito e uma barra lateral colorida.',
    borderColor: '#0D4490',
  },
};
