import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Minibanner from './Minibanner';

const meta: Meta<typeof Minibanner> = {
  title: 'Templates/Minibanner',
  component: Minibanner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Minibanner>;

export const Default: Story = {
  args: {
    children: 'Título do Minibanner',
    variant: 'ii',
    fontColor: '#FFFFFF',
  },
};

export const AutoAvaliacao: Story = {
  args: {
    children: 'Autoavaliação',
    variant: 'autoavaliacao',
    fontColor: '#FFFFFF',
  },
};
