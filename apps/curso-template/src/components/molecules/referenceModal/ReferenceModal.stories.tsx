import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ReferenceModal from './ReferenceModal';

const meta: Meta<typeof ReferenceModal> = {
  title: 'Molecules/ReferenceModal',
  component: ReferenceModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ReferenceModal>;

export const Default: Story = {
  args: {
    children: 'Clique aqui para ver a referência',
    reference: (
      <div>
        <p><strong>FREIRE, Paulo.</strong> Pedagogia da Autonomia: saberes necessários à prática educativa. São Paulo: Paz e Terra, 1996.</p>
      </div>
    ),
  },
};
