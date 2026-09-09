'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { ListModule } from "@modfly/ui";
const meta = {
    title: "Molecules/ListModule",
    component: ListModule,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        title: "Módulo 1",
        subtitle: "Introdução aos Conceitos",
        textList: [
            "O que é Justiça Restaurativa?",
            "Histórico e origens.",
            "Diferença entre Justiça Retributiva e Restaurativa.",
            "Os três pilares da JR.",
        ],
        borderColor: "#0D4490",
    },
};
export const SemSubtitulo = {
    name: "Sem subtítulo",
    args: {
        title: "Módulo 2",
        textList: ["Item único de leitura complementar."],
        borderColor: "#742B0B",
    },
};
