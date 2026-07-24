import type { Meta, StoryObj } from "@storybook/react";
import { Exclamation } from "./index";

const meta: Meta<typeof Exclamation> = {
  title: "Atoms/Exclamation",
  component: Exclamation,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Exclamation>;

export const ComLink: Story = {
  name: "Com link",
  args: {
    title: "Atenção",
    children: "O material complementar desta unidade está disponível para download.",
    link: "https://example.com/material.pdf",
  },
};

export const SemLink: Story = {
  name: "Sem link",
  args: {
    title: "Atenção",
    children: "Revise o conteúdo anterior antes de prosseguir para o próximo módulo.",
  },
};
