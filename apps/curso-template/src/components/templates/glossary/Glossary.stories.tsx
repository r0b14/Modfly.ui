import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Glossary from './Glossary';

const meta: Meta<typeof Glossary> = {
  title: 'Templates/Glossary',
  component: Glossary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Glossary>;

export const Default: Story = {
  args: {
    word: 'Justiça Restaurativa',
    definition: 'Uma abordagem de resolução de conflitos que se concentra em reparar o dano causado às pessoas e relacionamentos, em vez de focar apenas na punição do infrator.',
    hasBoldTitle: true,
  },
};
