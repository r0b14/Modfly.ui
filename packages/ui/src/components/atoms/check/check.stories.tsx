import type { Meta, StoryObj } from "@storybook/react";
import { Check } from "./index";

const meta: Meta<typeof Check> = {
  title: "Atoms/Check",
  component: Check,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: [1, 2],
      description: "1: verde, 2: azul",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Check>;

const items = [
  <p key="1">Primeiro item de aprendizagem</p>,
  <p key="2">Segundo item de aprendizagem</p>,
  <p key="3">Terceiro item de aprendizagem</p>,
];

export const Verde: Story = {
  args: {
    variant: 1,
    numberOfItems: 3,
    items,
  },
};

export const Azul: Story = {
  args: {
    variant: 2,
    numberOfItems: 3,
    items,
  },
};
