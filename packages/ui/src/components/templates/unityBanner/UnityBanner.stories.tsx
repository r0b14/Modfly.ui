import type { Meta, StoryObj } from "@storybook/react";
import { UnityBanner } from "@modfly/ui";

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

export const Unidade0: Story = { args: { ...Main.args, module: 0 } };

export const Unidade1: Story = { args: { ...Main.args, module: 1 } };

export const Unidade2: Story = { args: { ...Main.args, module: 2 } };

export const Unidade3: Story = { args: { ...Main.args, module: 3 } };

export const Unidade4: Story = { args: { ...Main.args, module: 4 } };

export const Secundario1: Story = { args: { ...Secondary.args, module: 1 } };

export const Secundario2: Story = { args: { ...Secondary.args, module: 2 } };

export const Secundario3: Story = { args: { ...Secondary.args, module: 3 } };

export const Secundario4: Story = { args: { ...Secondary.args, module: 4 } };
