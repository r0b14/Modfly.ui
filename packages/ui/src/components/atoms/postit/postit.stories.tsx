import type { Meta, StoryObj } from "@storybook/react";
import { Postit } from "./index";

const meta: Meta<typeof Postit> = {
  title: "Atoms/Postit",
  component: Postit,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Postit>;

export const Default: Story = {
  args: {
    children: "Não esqueça de revisar o conteúdo da aula anterior antes de continuar!",
  },
};
