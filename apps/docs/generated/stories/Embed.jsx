'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { Embed } from "@modfly/ui";
const meta = {
    title: "Molecules/Embed",
    component: Embed,
    tags: ["autodocs"],
};
export default meta;
export const YouTube = {
    args: {
        text: "Exemplo de incorporação do YouTube (mídia externa):",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
};
export const Spotify = {
    args: {
        text: "Exemplo de incorporação do Spotify (mídia externa):",
        link: "https://open.spotify.com/episode/7F6mWkn6tPqr0HMHA86Deu",
    },
};
export const OnlyText = {
    args: {
        text: "Apenas um texto explicativo sem link de embed.",
        isOnlyText: true,
    },
};
