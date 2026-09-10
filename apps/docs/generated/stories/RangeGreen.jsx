'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { RangeGreen } from "@modfly/ui";
const meta = {
    title: "Atoms/RangeGreen",
    component: RangeGreen,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: [1, 2, 3],
        },
    },
};
export default meta;
export const Variante1 = {
    name: "Variante 1",
    args: {
        variant: 1,
        children: <p style={{ margin: 0 }}>Conteúdo dentro da faixa verde, variante 1.</p>,
    },
};
export const Variante2 = {
    name: "Variante 2",
    args: {
        variant: 2,
        children: <p style={{ margin: 0 }}>Conteúdo dentro da faixa verde, variante 2.</p>,
    },
};
export const Variante3 = {
    name: "Variante 3",
    args: {
        variant: 3,
        children: <p style={{ margin: 0 }}>Conteúdo dentro da faixa verde, variante 3.</p>,
    },
};
