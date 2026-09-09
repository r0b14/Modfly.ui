import type { Meta, StoryObj } from "@storybook/react";
import { Cards } from "@modfly/ui";

const meta: Meta<typeof Cards> = {
  title: "Molecules/Cards",
  component: Cards,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Cards>;

export const Default: Story = {
  args: {
    cardsData: [
      [
        "Princípio 1",
        "Foco na reparação do dano.",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
        1,
        "<p>O foco principal da Justiça Restaurativa é reparar o dano causado à vítima, em vez de apenas punir o ofensor.</p>",
      ],
      [
        "Princípio 2",
        "Participação voluntária.",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
        2,
        "<p>Todas as partes envolvidas devem participar voluntariamente do processo restaurativo.</p>",
      ],
      [
        "Princípio 3",
        "Inclusão de todos os envolvidos.",
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
        3,
        "<p>Vítimas, ofensores e a comunidade são convidados a participar da resolução do conflito.</p>",
      ],
    ],
  },
};
