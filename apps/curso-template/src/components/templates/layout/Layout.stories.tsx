import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Layout from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Templates/Layout',
  component: Layout,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    children: <div style={{ background: '#eee', padding: '20px', width: '100%' }}>Conteúdo dentro do Layout</div>,
  },
};
