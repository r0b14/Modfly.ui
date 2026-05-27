import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TextWithImageBox from './TextWithImageBox';

const meta: Meta<typeof TextWithImageBox> = {
  title: 'Templates/TextWithImageBox',
  component: TextWithImageBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextWithImageBox>;

export const Default: Story = {
  args: {
    children: 'Este é um texto de exemplo que acompanha uma imagem dentro de um box estilizado.',
    imgSrc: 'https://via.placeholder.com/300',
    isReverse: false,
    hasTitle: true,
    title: 'Título do Box',
    backgroundColor: '#F3E0E9',
    borderColor: '#F592C0',
  },
};
