import type { Meta, StoryObj } from "@storybook/react";
import { CardFlipLegacy } from "./legacy";

const meta: Meta<typeof CardFlipLegacy> = {
  title: "Molecules/CardFlipLegacy",
  component: CardFlipLegacy,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardFlipLegacy>;

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
