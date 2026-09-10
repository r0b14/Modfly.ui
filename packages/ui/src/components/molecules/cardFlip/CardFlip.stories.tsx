import type { Meta, StoryObj } from "@storybook/react";
import { CardFlip } from "@modfly/ui";

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
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
        1,
        "<p>A <strong>Justiça Restaurativa</strong> é um processo através do qual todas as partes que têm uma participação em uma ofensa específica reúnem-se para resolver coletivamente como lidar com as consequências da ofensa e suas implicações para o futuro.</p>",
      ],
      [
        "Círculos de Construção de Paz",
        "Outro card na frente.",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
        2,
        "<p>Os <strong>Círculos</strong> são processos estruturados de diálogo que criam um espaço seguro para que as pessoas se conectem, compartilhem suas histórias e resolvam conflitos de maneira construtiva.</p>",
      ],
    ],
  },
};
