import type { Meta, StoryObj } from "@storybook/react";
import { Minibanner } from "./index";

const meta: Meta<typeof Minibanner> = {
  title: "Templates/Minibanner",
  component: Minibanner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Minibanner>;

export const Default: Story = {
  args: {
    variant: "ii",
    children: "Atividade",
  },
};

export const Leitura: Story = {
  args: {
    variant: "leitura",
    children: "Leitura complementar",
  },
};

export const FixacaoLaranja: Story = {
  args: {
    variant: "fixacaoLaranja2",
    children: "Fixação",
  },
};

export const Referencias: Story = {
  args: {
    variant: "referencias",
    children: "Referências",
  },
};
