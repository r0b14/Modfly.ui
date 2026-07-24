import type { Meta, StoryObj } from "@storybook/react";
import { QuoteText } from "./index";

const meta: Meta<typeof QuoteText> = {
  title: "Molecules/QuoteText",
  component: QuoteText,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof QuoteText>;

export const Default: Story = {
  args: {
    specText: "quote-text-1",
    children: "A educação é o processo de viver e não uma preparação para a vida futura.",
  },
};

export const TelaCheia: Story = {
  name: "Tela cheia",
  args: {
    specText: "quote-text-2",
    fullScreen: true,
    children: "Com fullScreen, o bloco ocupa 100% da largura disponível em vez de 80%.",
  },
};
