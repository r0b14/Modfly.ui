'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { ButtonLink } from "@modfly/ui";
const meta = {
    title: "Atoms/ButtonLink",
    component: ButtonLink,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            options: [1, 2, 3],
            description: "1: link/clique, 2: documento, 3: vídeo",
        },
        colorScheme: {
            control: "radio",
            options: [1, 2, 3],
            description: "1: azul, 2: amarelo, 3: rosa",
        },
    },
};
export default meta;
export const Azul = {
    args: {
        variant: 1,
        colorScheme: 1,
        text: "Acessar material",
        href: "#",
    },
};
export const Amarelo = {
    args: {
        variant: 2,
        colorScheme: 2,
        text: "Baixar documento",
        href: "#",
    },
};
export const Rosa = {
    args: {
        variant: 3,
        colorScheme: 3,
        text: "Assistir vídeo",
        href: "#",
    },
};
export const Acao1Cor1 = { args: { variant: 1, colorScheme: 1, text: "Explorar conteúdo" } };
export const Acao1Cor2 = { args: { variant: 1, colorScheme: 2, text: "Explorar conteúdo" } };
export const Acao1Cor3 = { args: { variant: 1, colorScheme: 3, text: "Explorar conteúdo" } };
export const Acao2Cor1 = { args: { variant: 2, colorScheme: 1, text: "Explorar conteúdo" } };
export const Acao2Cor2 = { args: { variant: 2, colorScheme: 2, text: "Explorar conteúdo" } };
export const Acao2Cor3 = { args: { variant: 2, colorScheme: 3, text: "Explorar conteúdo" } };
export const Acao3Cor1 = { args: { variant: 3, colorScheme: 1, text: "Explorar conteúdo" } };
export const Acao3Cor2 = { args: { variant: 3, colorScheme: 2, text: "Explorar conteúdo" } };
export const Acao3Cor3 = { args: { variant: 3, colorScheme: 3, text: "Explorar conteúdo" } };
