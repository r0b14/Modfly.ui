'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { Quotes } from "@modfly/ui";
const meta = {
    title: "Molecules/Quotes",
    component: Quotes,
    tags: ["autodocs"],
    argTypes: {
        colorScheme: {
            control: "radio",
            options: ["blue", "green", "orange", "pink"],
        },
    },
};
export default meta;
export const Blue = {
    args: {
        colorScheme: "blue",
        children: <p>A educação não transforma o mundo. Educação muda as pessoas. Pessoas mudam o mundo.</p>,
    },
};
export const Green = {
    args: {
        colorScheme: "green",
        children: <p>Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.</p>,
    },
};
export const Orange = {
    args: {
        colorScheme: "orange",
        children: <p>Ensinar não é transmitir conhecimento, mas criar as possibilidades para a sua própria produção ou a sua construção.</p>,
    },
};
export const Pink = {
    args: {
        colorScheme: "pink",
        children: <p>Não há saber mais ou saber menos. Há saberes diferentes.</p>,
    },
};
