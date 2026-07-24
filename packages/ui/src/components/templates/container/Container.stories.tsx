import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./index";

const meta: Meta<typeof Container> = {
  title: "Templates/Container",
  component: Container,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ background: "#EFEFEF", padding: 24, width: "100%", textAlign: "center" }}>
        Conteúdo centralizado com largura máxima de 1200px
      </div>
    ),
  },
};
