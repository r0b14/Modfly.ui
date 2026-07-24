import type { Meta, StoryObj } from "@storybook/react";
import { LearningBlock } from "./index";

const meta: Meta<typeof LearningBlock> = {
  title: "Organisms/LearningBlock",
  component: LearningBlock,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LearningBlock>;

export const Variante1: Story = {
  name: "Variante 1",
  args: {
    variant: 1,
    children: <p>Bloco de destaque com fundo verde e SVGs decorativos no topo e na base.</p>,
  },
};

export const Variante5: Story = {
  name: "Variante 5 · Para refletir",
  args: {
    variant: 5,
    children: <p>Bloco amarelo usado para perguntas de reflexão ao longo do módulo.</p>,
  },
};

export const Variante8: Story = {
  name: "Variante 8 · Fica a dica",
  args: {
    variant: 8,
    children: <p>Bloco com borda ilustrada e ícone fixo, sem SVGs de topo/base.</p>,
  },
};
