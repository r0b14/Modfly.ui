import type { Meta, StoryObj } from "@storybook/react";
import { QuestionOptionHeader } from "./index";

const meta: Meta<typeof QuestionOptionHeader> = {
  title: "Organisms/QuestionOptionHeader",
  component: QuestionOptionHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof QuestionOptionHeader>;

export const Default: Story = {
  args: {
    questionNumber: 1,
    text: ["Qual das alternativas abaixo representa corretamente o conceito discutido na aula?"],
    answersContent: ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"],
    groupIndex: 1,
  },
};

export const SemNumeroDaQuestao: Story = {
  args: {
    text: ["Enunciado sem numeração visível, usado quando o número já aparece em outro lugar da página."],
    answersContent: ["Verdadeiro", "Falso"],
    groupIndex: 2,
  },
};
