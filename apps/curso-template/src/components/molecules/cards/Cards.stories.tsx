import type { Meta, StoryObj } from '@storybook/react';
import Cards from './Cards';

const meta: Meta<typeof Cards> = {
  title: 'Molecules/Cards',
  component: Cards,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cards>;

export const Default: Story = {
  args: {
    cardsData: [
      [
        'Princípio 1',
        'Foco na reparação do dano.',
        'https://via.placeholder.com/300x250',
        1,
        '<p>O foco principal da Justiça Restaurativa é reparar o dano causado à vítima, em vez de apenas punir o ofensor.</p>',
      ],
      [
        'Princípio 2',
        'Participação voluntária.',
        'https://via.placeholder.com/300x250',
        2,
        '<p>Todas as partes envolvidas devem participar voluntariamente do processo restaurativo.</p>',
      ],
      [
        'Princípio 3',
        'Inclusão de todos os envolvidos.',
        'https://via.placeholder.com/300x250',
        3,
        '<p>Vítimas, ofensores e a comunidade são convidados a participar da resolução do conflito.</p>',
      ],
    ],
  },
};
