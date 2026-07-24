import type { Meta, StoryObj } from "@storybook/react";
import { Figure } from "./index";

const meta: Meta<typeof Figure> = {
  title: "Molecules/Figure",
  component: Figure,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Figure>;

export const Default: Story = {
  args: {
    imgSrc: "https://via.placeholder.com/900x500",
    type: "Figura",
    number: 1,
    caption: "Legenda descrevendo o conteúdo da imagem.",
    reference: "Fonte: elaboração própria.",
  },
};

export const SemNumeracao: Story = {
  name: "Sem numeração",
  args: {
    imgSrc: "https://via.placeholder.com/900x500",
    caption: "Quando não há number/type, só a legenda aparece.",
  },
};

export const FonteMobileDiferente: Story = {
  name: "Fonte mobile diferente",
  args: {
    imgSrc: "https://via.placeholder.com/900x500",
    imgSrcMobile: "https://via.placeholder.com/500x900",
    type: "Figura",
    number: 2,
    caption: "Em telas estreitas, troca para a versão vertical da imagem.",
  },
};
