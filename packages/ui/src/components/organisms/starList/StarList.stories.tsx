import type { Meta, StoryObj } from "@storybook/react";
import { StarList } from "./index";

const meta: Meta<typeof StarList> = {
  title: "Organisms/StarList",
  component: StarList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StarList>;

export const Default: Story = {
  args: {
    items: [
      { textBold: "Primeiro pilar:", text: "reparação do dano causado à vítima." },
      { textBold: "Segundo pilar:", text: "responsabilização ativa do ofensor." },
      { textBold: "Terceiro pilar:", text: "reintegração de todos à comunidade." },
    ],
  },
};
