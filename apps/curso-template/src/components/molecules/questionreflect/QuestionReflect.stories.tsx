import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import QuestionReflect from './QuestionReflect';

const meta: Meta<typeof QuestionReflect> = {
  title: 'Molecules/QuestionReflect',
  component: QuestionReflect,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QuestionReflect>;

export const Default: Story = {
  args: {
    title: 'Para Refletir',
    children: <p>O que você pensa sobre a aplicação de círculos restaurativos em turmas do ensino fundamental?</p>,
  },
};

export const Cloud: Story = {
  args: {
    title: 'Dúvida Comum',
    model: 'cloud',
    children: <p>Será que a Justiça Restaurativa funciona em qualquer ambiente escolar ou existem pré-requisitos?</p>,
  },
};
