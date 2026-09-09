import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLink } from "./index";

const meta: Meta<typeof ButtonLink> = {
  title: "Atoms/ButtonLink",
  component: ButtonLink,
  tags: ["autodocs"],
  argTypes: {
    showIcon: {
      control: "boolean",
      description: "Exibe o selo com a seta à esquerda do rótulo",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Default: Story = {
  args: {
    children: "Acessar agora",
    href: "#",
  },
};

export const SemIcone: Story = {
  args: {
    children: "Acessar agora",
    href: "#",
    showIcon: false,
  },
};

export const ComoBotao: Story = {
  args: {
    children: "Acessar agora",
    onClick: () => alert("clicado"),
  },
};
