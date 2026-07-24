import type { Meta, StoryObj } from "@storybook/react";
import { TextWithImageBox } from "./index";

const meta: Meta<typeof TextWithImageBox> = {
  title: "Templates/TextWithImageBox",
  component: TextWithImageBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextWithImageBox>;

export const Default: Story = {
  args: {
    hasTitle: true,
    title: "Justiça Restaurativa",
    imgSrc: "https://placehold.co/220x180",
    children: "A justiça restaurativa propõe um novo olhar sobre o conflito, priorizando a reparação do dano em vez da punição.",
  },
};

export const Reversa: Story = {
  args: {
    hasTitle: true,
    title: "Layout invertido",
    imgSrc: "https://placehold.co/220x180",
    isReverse: true,
    children: "Com isReverse, a imagem passa para o lado direito do bloco.",
  },
};

export const DuasImagens: Story = {
  args: {
    imgSrc: "https://placehold.co/160x140",
    imgSrc2: "https://placehold.co/160x140",
    children: "Quando imgSrc2 é informado, o bloco passa a exibir uma imagem de cada lado do texto.",
  },
};
