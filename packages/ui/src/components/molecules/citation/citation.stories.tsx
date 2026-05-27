import type { Meta, StoryObj } from "@storybook/react";
import { Citation } from "./index";

const meta: Meta<typeof Citation> = {
  title: "Molecules/Citation",
  component: Citation,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["green", "yellow"],
      description: "Variante de cor do ícone do livro",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Citation>;

export const Verde: Story = {
  args: {
    title: "Citação Importante",
    text: "A educação é o processo de viver e não uma preparação para a vida futura.",
    children: "John Dewey (1897)",
    variant: "green",
  },
};

export const Amarelo: Story = {
  args: {
    title: "Outra Perspectiva",
    text: "O conhecimento não é algo que pode ser transmitido — é construído na relação.",
    children: "Paulo Freire (1968)",
    variant: "yellow",
  },
};

export const SemTitulo: Story = {
  name: "Sem título",
  args: {
    text: "Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua produção ou a sua construção.",
    children: "Paulo Freire",
    variant: "green",
  },
};
