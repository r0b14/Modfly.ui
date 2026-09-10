import type { Meta, StoryObj } from "@storybook/react";
import { ImageList } from "@modfly/ui";

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
        imgSrc: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
        imgFallback: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
        fonte: "Fonte: elaboração própria.",
        descricao: "Descrição detalhada que aparece ao clicar no botão de expandir.",
        barColor: "#298BCA",
        buttonColor: "#298BCA",
        buttonColorActive: "#1E6591",
        descriptionBoxColor: "#E1EFFF",
      },
      {
        imgSrc: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
        imgFallback: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
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
