import type { Meta, StoryObj } from "@storybook/react";
import { MiniCards } from "@modfly/ui";

const meta: Meta<typeof MiniCards> = {
  title: "Molecules/MiniCards",
  component: MiniCards,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MiniCards>;

export const Default: Story = {
  args: {
    cardsData: [
      [
        "Passo A",
        "Descrição detalhada do Passo A que aparece ao clicar.",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
        1,
      ],
      [
        "Passo B",
        "Descrição detalhada do Passo B com fundo verde.",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
        2,
      ],
    ],
  },
};
