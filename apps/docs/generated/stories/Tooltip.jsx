'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { Tooltip } from "@modfly/ui";
const meta = {
    title: "Atoms/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {
        position: {
            control: "radio",
            options: ["left", "center", "right"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        text: "Justiça Restaurativa",
        content: "Modelo de justiça focado em reparar o dano causado, não apenas punir.",
        position: "center",
    },
};
export const ComReferencia = {
    name: "Com referência",
    args: {
        text: "Zona de Desenvolvimento Proximal",
        content: "Distância entre o que o aluno já sabe fazer sozinho e o que consegue fazer com ajuda.",
        reference: "VYGOTSKY, L. S. A formação social da mente. 1978.",
        position: "center",
    },
};
