import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Quotes from './Quotes';

const meta: Meta<typeof Quotes> = {
  title: 'Molecules/Quotes',
  component: Quotes,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Quotes>;

export const Blue: Story = {
  args: {
    type: 'blue',
    children: <p>A educação não transforma o mundo. Educação muda as pessoas. Pessoas mudam o mundo.</p>,
  },
};

export const Green: Story = {
  args: {
    type: 'green',
    children: <p>Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.</p>,
  },
};

export const Orange: Story = {
  args: {
    type: 'orange',
    children: <p>Ensinar não é transmitir conhecimento, mas criar as possibilidades para a sua própria produção ou a sua construção.</p>,
  },
};

export const Pink: Story = {
  args: {
    type: 'pink',
    children: <p>Não há saber mais ou saber menos. Há saberes diferentes.</p>,
  },
};
