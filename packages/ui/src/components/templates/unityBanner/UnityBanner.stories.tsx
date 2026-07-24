import type { Meta, StoryObj } from "@storybook/react";
import { UnityBanner } from "./index";

const meta: Meta<typeof UnityBanner> = {
  title: "Templates/UnityBanner",
  component: UnityBanner,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["main", "secondary"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof UnityBanner>;

export const Main: Story = {
  args: {
    type: "main",
    module: 1,
    subtitle: "Conhecimentos Fundamentais",
  },
};

export const Secondary: Story = {
  args: {
    type: "secondary",
    module: 2,
    subtitle: "Módulo Secundário",
  },
};
