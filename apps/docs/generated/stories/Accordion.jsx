'use client';
// Gerado por pnpm docs:generate a partir da story original.
import { Accordion } from "@modfly/ui";
const meta = {
    title: "Organisms/Accordion",
    component: Accordion,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        title: "O que é Justiça Restaurativa?",
        bgColor: 1,
        children: (<p>
        Um processo colaborativo que reúne todas as partes afetadas por uma ofensa para decidir
        coletivamente como lidar com suas consequências.
      </p>),
    },
};
export const VarianteSol = {
    name: "Variante sol (bgColor 7)",
    args: {
        title: "Para refletir",
        bgColor: 7,
        titleColor: "#333333",
        children: <p>Layout especial com o ícone de sol animado ao abrir/fechar.</p>,
    },
};
export const VarianteCompacta = {
    name: "Variante compacta (bgColor 9)",
    args: {
        title: "Pergunta rápida",
        bgColor: 9,
        children: <p>Cabeçalho menor, usado para blocos de pergunta e resposta curtos.</p>,
    },
};
export const PorCurso = {
    name: "Assets por curso (course)",
    args: {
        title: "Módulo 1 · PCE",
        bgColor: 1,
        course: "pce",
        children: <p>Quando `course` é informado, os assets do curso substituem `bgColor`.</p>,
    },
};
export const Fundo02 = { args: { ...Default.args, bgColor: 2 } };
export const Fundo03 = { args: { ...Default.args, bgColor: 3 } };
export const Fundo04 = { args: { ...Default.args, bgColor: 4 } };
export const Fundo05 = { args: { ...Default.args, bgColor: 5 } };
export const Fundo06 = { args: { ...Default.args, bgColor: 6 } };
export const Fundo08 = { args: { ...Default.args, bgColor: 8 } };
export const Fundo10 = { args: { ...Default.args, bgColor: 10 } };
export const Fundo11 = { args: { ...Default.args, bgColor: 11 } };
export const Fundo12 = { args: { ...Default.args, bgColor: 12 } };
export const Fundo13 = { args: { ...Default.args, bgColor: 13 } };
export const Fundo14 = { args: { ...Default.args, bgColor: 14 } };
export const Fundo15 = { args: { ...Default.args, bgColor: 15 } };
export const Fundo16 = { args: { ...Default.args, bgColor: 16 } };
export const Fundo17 = { args: { ...Default.args, bgColor: 17 } };
export const Fundo18 = { args: { ...Default.args, bgColor: 18 } };
export const Fundo19 = { args: { ...Default.args, bgColor: 19 } };
export const Fundo20 = { args: { ...Default.args, bgColor: 20 } };
export const Fundo21 = { args: { ...Default.args, bgColor: 21 } };
export const Fundo22 = { args: { ...Default.args, bgColor: 22 } };
export const Seta01 = { args: { ...Default.args, upArrowColorVariant: 1, downArrowColorVariant: 1 } };
export const Seta02 = { args: { ...Default.args, upArrowColorVariant: 2, downArrowColorVariant: 2 } };
export const Seta03 = { args: { ...Default.args, upArrowColorVariant: 3, downArrowColorVariant: 3 } };
export const Seta04 = { args: { ...Default.args, upArrowColorVariant: 4, downArrowColorVariant: 4 } };
export const Seta05 = { args: { ...Default.args, upArrowColorVariant: 5, downArrowColorVariant: 5 } };
export const Seta06 = { args: { ...Default.args, upArrowColorVariant: 6, downArrowColorVariant: 6 } };
export const Seta07 = { args: { ...Default.args, upArrowColorVariant: 7, downArrowColorVariant: 7 } };
export const Seta08 = { args: { ...Default.args, upArrowColorVariant: 8, downArrowColorVariant: 8 } };
export const Seta09 = { args: { ...Default.args, upArrowColorVariant: 9, downArrowColorVariant: 9 } };
export const Seta10 = { args: { ...Default.args, upArrowColorVariant: 10, downArrowColorVariant: 10 } };
export const Seta11 = { args: { ...Default.args, upArrowColorVariant: 11, downArrowColorVariant: 11 } };
export const Seta12 = { args: { ...Default.args, upArrowColorVariant: 12, downArrowColorVariant: 12 } };
export const Dinamico = { args: { ...Default.args, variant: "dynamic" } };
export const ComBorda = { args: { ...Default.args, variant: "borderful" } };
