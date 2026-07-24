import type { Meta, StoryObj } from "@storybook/react";
import { ButtonReference } from "./index";

const meta: Meta<typeof ButtonReference> = {
  title: "Atoms/ButtonReference",
  component: ButtonReference,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ButtonReference>;

export const Fechado: Story = {
  args: {
    isOpen: false,
    onToggle: () => {},
  },
};

export const Aberto: Story = {
  args: {
    isOpen: true,
    onToggle: () => {},
  },
};
