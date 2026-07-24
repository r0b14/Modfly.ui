import type { Meta, StoryObj } from "@storybook/react";
import { ImageList } from "./index";

const meta: Meta<typeof ImageList> = {
  title: "Molecules/ImageList",
  component: ImageList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageList>;

export const Default: Story = {
  args: {
    items: [
      {
        imgSrc: "https://via.placeholder.com/1080x500",
        imgFallback: "https://via.placeholder.com/1080x500",
        fonte: "Fonte: elaboração própria.",
        descricao: "Descrição detalhada que aparece ao clicar no botão de expandir.",
        barColor: "#298BCA",
        buttonColor: "#298BCA",
        buttonColorActive: "#1E6591",
        descriptionBoxColor: "#E1EFFF",
      },
      {
        imgSrc: "https://via.placeholder.com/1080x500",
        imgFallback: "https://via.placeholder.com/1080x500",
        fonte: "Fonte: elaboração própria.",
        descricao: "Segundo item da lista, com cor de destaque diferente.",
        barColor: "#649753",
        buttonColor: "#649753",
        buttonColorActive: "#4C7440",
        descriptionBoxColor: "#DFF1D8",
        isLast: true,
      },
    ],
  },
};
