'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { ButtonPdfDownload } from "@modfly/ui";
const meta = {
    title: "Atoms/ButtonPdfDownload",
    component: ButtonPdfDownload,
    tags: ["autodocs"],
    argTypes: {
        variation: {
            control: "radio",
            options: ["class", "video"],
        },
    },
};
export default meta;
export const Aula = {
    args: {
        pdfile: "/exemplo-slides.pdf",
        variation: "class",
    },
};
export const Video = {
    args: {
        pdfile: "/exemplo-roteiro.pdf",
        variation: "video",
    },
};
