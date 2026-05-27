import type { Meta, StoryObj } from '@storybook/react';
import ListModule from './ListModule';

const meta: Meta<typeof ListModule> = {
  title: 'Molecules/ListModule',
  component: ListModule,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ListModule>;

export const Default: Story = {
  args: {
    title: 'Módulo 1',
    subtitle: 'Introdução aos Conceitos',
    textList: [
      'O que é Justiça Restaurativa?',
      'Histórico e origens.',
      'Diferença entre Justiça Retributiva e Restaurativa.',
      'Os três pilares da JR.',
    ],
    borderColor: '#0D4490',
  },
};
