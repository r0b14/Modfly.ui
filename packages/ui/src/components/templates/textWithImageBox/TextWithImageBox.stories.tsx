import type { Meta, StoryObj } from "@storybook/react";
import { TextWithImageBox } from "@modfly/ui";

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
    imgSrc: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
    children: "A justiça restaurativa propõe um novo olhar sobre o conflito, priorizando a reparação do dano em vez da punição.",
  },
};

export const Reversa: Story = {
  args: {
    hasTitle: true,
    title: "Layout invertido",
    imgSrc: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
    isReverse: true,
    children: "Com isReverse, a imagem passa para o lado direito do bloco.",
  },
};

export const DuasImagens: Story = {
  args: {
    imgSrc: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
    imgSrc2: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgOTAwIDUwMCI+PHJlY3Qgd2lkdGg9IjkwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNlMWVmZmYiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIyMTAiIHI9IjEwMCIgZmlsbD0iI2Y1YzU0MiIvPjxwYXRoIGQ9Ik0zMzAgMzYwVjE1MGg0MDB2MjEweiIgZmlsbD0iIzQ4N2U0MiIvPjx0ZXh0IHg9IjQ1MCIgeT0iNDM1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzE2NDE2NSI+QXByZW5kZXIsIHByYXRpY2FyLCBjb21wYXJ0aWxoYXI8L3RleHQ+PC9zdmc+",
    children: "Quando imgSrc2 é informado, o bloco passa a exibir uma imagem de cada lado do texto.",
  },
};
