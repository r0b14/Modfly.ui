import type { Meta, StoryObj } from '@storybook/react';
import IndentCitation from './IndentCitation';

const meta: Meta<typeof IndentCitation> = {
  title: 'Molecules/IndentCitation/IndentCitation',
  component: IndentCitation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IndentCitation>;

export const Default: Story = {
  args: {
    children: 'A citação indentada é ideal para destacar trechos de livros, artigos ou falas importantes que merecem atenção especial do aluno.',
    borderColor: '#0D4490',
  },
};
