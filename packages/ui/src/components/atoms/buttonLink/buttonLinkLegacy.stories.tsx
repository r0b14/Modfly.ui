import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLinkLegacy } from "./legacy";

const meta: Meta<typeof ButtonLinkLegacy> = {
  title: "Atoms/ButtonLinkLegacy",
  component: ButtonLinkLegacy,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: [1, 2, 3],
      description: "1: link/clique, 2: documento, 3: vídeo",
    },
    colorScheme: {
      control: "radio",
      options: [1, 2, 3],
      description: "1: azul, 2: amarelo, 3: rosa",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonLinkLegacy>;

export const Azul: Story = {
  args: {
    variant: 1,
    colorScheme: 1,
    text: "Acessar material",
    href: "#",
  },
};

export const Amarelo: Story = {
  args: {
    variant: 2,
    colorScheme: 2,
    text: "Baixar documento",
    href: "#",
  },
};

export const Rosa: Story = {
  args: {
    variant: 3,
    colorScheme: 3,
    text: "Assistir vídeo",
    href: "#",
  },
};
