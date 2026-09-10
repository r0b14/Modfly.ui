import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLink } from "@modfly/ui";

const meta: Meta<typeof ButtonLink> = {
  title: "Atoms/ButtonLink",
  component: ButtonLink,
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
type Story = StoryObj<typeof ButtonLink>;

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

export const Acao1Cor1: Story = { args: { variant: 1, colorScheme: 1, text: "Explorar conteúdo" } };

export const Acao1Cor2: Story = { args: { variant: 1, colorScheme: 2, text: "Explorar conteúdo" } };

export const Acao1Cor3: Story = { args: { variant: 1, colorScheme: 3, text: "Explorar conteúdo" } };

export const Acao2Cor1: Story = { args: { variant: 2, colorScheme: 1, text: "Explorar conteúdo" } };

export const Acao2Cor2: Story = { args: { variant: 2, colorScheme: 2, text: "Explorar conteúdo" } };

export const Acao2Cor3: Story = { args: { variant: 2, colorScheme: 3, text: "Explorar conteúdo" } };

export const Acao3Cor1: Story = { args: { variant: 3, colorScheme: 1, text: "Explorar conteúdo" } };

export const Acao3Cor2: Story = { args: { variant: 3, colorScheme: 2, text: "Explorar conteúdo" } };

export const Acao3Cor3: Story = { args: { variant: 3, colorScheme: 3, text: "Explorar conteúdo" } };
