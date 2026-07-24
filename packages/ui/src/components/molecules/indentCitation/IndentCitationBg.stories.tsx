import type { Meta, StoryObj } from "@storybook/react";
import { IndentCitationBg } from "./IndentCitationBg";

const meta: Meta<typeof IndentCitationBg> = {
  title: "Molecules/IndentCitation/IndentCitationBg",
  component: IndentCitationBg,
  tags: ["autodocs"],
  argTypes: {
    option: {
      control: "radio",
      options: ["yellow", "pink"],
      description: "Escolhe o par imagem de fundo + imagem principal",
    },
  },
};

export default meta;
type Story = StoryObj<typeof IndentCitationBg>;

export const Amarelo: Story = {
  args: {
    title: "Você sabia?",
    text: "Texto de apoio ao lado da imagem principal.",
    option: "yellow",
    children: "Conteúdo adicional abaixo da citação, quando necessário.",
  },
};

export const Rosa: Story = {
  args: {
    title: "Ponto de atenção",
    text: "Mesma estrutura, variante de cor rosa.",
    option: "pink",
  },
};
