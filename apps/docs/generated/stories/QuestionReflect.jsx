'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { QuestionReflect } from "@modfly/ui";
const meta = {
    title: "Molecules/QuestionReflect",
    component: QuestionReflect,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: ["default", "cloud"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        title: "Para Refletir",
        children: <p>O que você pensa sobre a aplicação de círculos restaurativos em turmas do ensino fundamental?</p>,
    },
};
export const Cloud = {
    args: {
        title: "Dúvida Comum",
        variant: "cloud",
        children: <p>Será que a Justiça Restaurativa funciona em qualquer ambiente escolar ou existem pré-requisitos?</p>,
    },
};
