'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { Glossary } from "@modfly/ui";
const meta = {
    title: "Templates/Glossary",
    component: Glossary,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        word: "Justiça Restaurativa",
        definition: "Uma abordagem de resolução de conflitos que se concentra em reparar o dano causado às pessoas e relacionamentos, em vez de focar apenas na punição do infrator.",
        hasBoldTitle: true,
    },
};
export const SemTituloEmNegrito = {
    name: "Sem título em negrito",
    args: {
        word: "Mediação",
        definition: "Processo de facilitação de diálogo entre partes em conflito, conduzido por um terceiro neutro.",
        hasBoldTitle: false,
    },
};
