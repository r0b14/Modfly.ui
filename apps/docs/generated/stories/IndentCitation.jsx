'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { IndentCitation } from "@modfly/ui";
const meta = {
    title: "Molecules/IndentCitation/IndentCitation",
    component: IndentCitation,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        children: "A citação indentada é ideal para destacar trechos de livros, artigos ou falas importantes que merecem atenção especial do aluno.",
        borderColor: "#0D4490",
    },
};
export const ComFundo = {
    name: "Com fundo",
    args: {
        children: "Quando um backgroundColor é definido, ele preenche o bloco inteiro, não só a borda.",
        borderColor: "#742B0B",
        backgroundColor: "#F6ECBD",
    },
};
