'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { Check } from "@modfly/ui";
const meta = {
    title: "Atoms/Check",
    component: Check,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: [1, 2],
            description: "1: verde, 2: azul",
        },
    },
};
export default meta;
const items = [
    <p key="1">Primeiro item de aprendizagem</p>,
    <p key="2">Segundo item de aprendizagem</p>,
    <p key="3">Terceiro item de aprendizagem</p>,
];
export const Verde = {
    args: {
        variant: 1,
        numberOfItems: 3,
        items,
    },
};
export const Azul = {
    args: {
        variant: 2,
        numberOfItems: 3,
        items,
    },
};
