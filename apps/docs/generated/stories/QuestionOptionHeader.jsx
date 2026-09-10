'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { QuestionOptionHeader } from "@modfly/ui";
const meta = {
    title: "Organisms/QuestionOptionHeader",
    component: QuestionOptionHeader,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        questionNumber: 1,
        text: ["Qual das alternativas abaixo representa corretamente o conceito discutido na aula?"],
        answersContent: ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"],
        groupIndex: 1,
    },
};
export const SemNumeroDaQuestao = {
    args: {
        text: ["Enunciado sem numeração visível, usado quando o número já aparece em outro lugar da página."],
        answersContent: ["Verdadeiro", "Falso"],
        groupIndex: 2,
    },
};
