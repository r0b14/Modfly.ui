import type { Meta, StoryObj } from "@storybook/react";
import { CardFlip } from "./index";

const meta: Meta<typeof CardFlip> = {
  title: "Molecules/CardFlip",
  component: CardFlip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardFlip>;

export const Default: Story = {
  args: {
    cardFlipData: [
      [
        "Justiça Restaurativa",
        "Breve descrição na frente.",
        "https://via.placeholder.com/400x300",
        1,
        "<p>A <strong>Justiça Restaurativa</strong> é um processo através do qual todas as partes que têm uma participação em uma ofensa específica reúnem-se para resolver coletivamente como lidar com as consequências da ofensa e suas implicações para o futuro.</p>",
      ],
      [
        "Círculos de Construção de Paz",
        "Outro card na frente.",
        "https://via.placeholder.com/400x300",
        2,
        "<p>Os <strong>Círculos</strong> são processos estruturados de diálogo que criam um espaço seguro para que as pessoas se conectem, compartilhem suas histórias e resolvam conflitos de maneira construtiva.</p>",
      ],
    ],
  },
};
