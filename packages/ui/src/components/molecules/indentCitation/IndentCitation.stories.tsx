import type { Meta, StoryObj } from "@storybook/react";
import { IndentCitation } from "./index";

const meta: Meta<typeof IndentCitation> = {
  title: "Molecules/IndentCitation/IndentCitation",
  component: IndentCitation,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IndentCitation>;

export const Default: Story = {
  args: {
    children:
      "A citação indentada é ideal para destacar trechos de livros, artigos ou falas importantes que merecem atenção especial do aluno.",
    borderColor: "#0D4490",
  },
};

export const ComFundo: Story = {
  name: "Com fundo",
  args: {
    children: "Quando um backgroundColor é definido, ele preenche o bloco inteiro, não só a borda.",
    borderColor: "#742B0B",
    backgroundColor: "#F6ECBD",
  },
};
