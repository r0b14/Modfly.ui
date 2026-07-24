import type { Meta, StoryObj } from "@storybook/react";
import { RangeGreen } from "./index";

const meta: Meta<typeof RangeGreen> = {
  title: "Atoms/RangeGreen",
  component: RangeGreen,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: [1, 2, 3],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RangeGreen>;

export const Variante1: Story = {
  name: "Variante 1",
  args: {
    variant: 1,
    children: <p style={{ margin: 0 }}>Conteúdo dentro da faixa verde, variante 1.</p>,
  },
};

export const Variante2: Story = {
  name: "Variante 2",
  args: {
    variant: 2,
    children: <p style={{ margin: 0 }}>Conteúdo dentro da faixa verde, variante 2.</p>,
  },
};

export const Variante3: Story = {
  name: "Variante 3",
  args: {
    variant: 3,
    children: <p style={{ margin: 0 }}>Conteúdo dentro da faixa verde, variante 3.</p>,
  },
};
