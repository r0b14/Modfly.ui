import type { Meta, StoryObj } from "@storybook/react";
import { RangeBlue } from "./index";

const meta: Meta<typeof RangeBlue> = {
  title: "Atoms/RangeBlue",
  component: RangeBlue,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RangeBlue>;

export const Default: Story = {
  args: {
    children: <p style={{ margin: 0 }}>Conteúdo principal dentro da faixa.</p>,
    text: "Texto de apoio ao lado do conteúdo principal.",
  },
};

export const ConteudoCustomizado: Story = {
  name: "Conteúdo customizado",
  args: {
    isCustomContent: true,
    children: (
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <p style={{ margin: 0 }}>Layout livre, sem a divisão automática de texto.</p>
      </div>
    ),
  },
};
