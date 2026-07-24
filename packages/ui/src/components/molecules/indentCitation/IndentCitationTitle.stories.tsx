import type { Meta, StoryObj } from "@storybook/react";
import { IndentCitationTitle } from "./IndentCitationTitle";

const meta: Meta<typeof IndentCitationTitle> = {
  title: "Molecules/IndentCitation/IndentCitationTitle",
  component: IndentCitationTitle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IndentCitationTitle>;

export const Default: Story = {
  args: {
    title: "Resumo do capítulo",
    children:
      "Igual ao IndentCitation, mas com um título em destaque acima do texto — útil para citações mais longas.",
    borderColor: "#0D4490",
  },
};
