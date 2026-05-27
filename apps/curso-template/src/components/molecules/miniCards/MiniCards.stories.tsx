import type { Meta, StoryObj } from '@storybook/react';
import MiniCards from './MiniCards';

const meta: Meta<typeof MiniCards> = {
  title: 'Molecules/MiniCards',
  component: MiniCards,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MiniCards>;

export const Default: Story = {
  args: {
    cardsData: [
      [
        'Passo A',
        'Descrição detalhada do Passo A que aparece ao clicar.',
        'https://via.placeholder.com/300x200',
        1,
      ],
      [
        'Passo B',
        'Descrição detalhada do Passo B com fundo verde.',
        'https://via.placeholder.com/300x200',
        2,
      ],
    ],
  },
};
