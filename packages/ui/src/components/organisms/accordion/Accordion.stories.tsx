import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./index";

const meta: Meta<typeof Accordion> = {
  title: "Organisms/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: "O que é Justiça Restaurativa?",
    bgColor: 1,
    children: (
      <p>
        Um processo colaborativo que reúne todas as partes afetadas por uma ofensa para decidir
        coletivamente como lidar com suas consequências.
      </p>
    ),
  },
};

export const VarianteSol: Story = {
  name: "Variante sol (bgColor 7)",
  args: {
    title: "Para refletir",
    bgColor: 7,
    titleColor: "#333333",
    children: <p>Layout especial com o ícone de sol animado ao abrir/fechar.</p>,
  },
};

export const VarianteCompacta: Story = {
  name: "Variante compacta (bgColor 9)",
  args: {
    title: "Pergunta rápida",
    bgColor: 9,
    children: <p>Cabeçalho menor, usado para blocos de pergunta e resposta curtos.</p>,
  },
};

export const PorCurso: Story = {
  name: "Assets por curso (course)",
  args: {
    title: "Módulo 1 · PCE",
    bgColor: 1,
    course: "pce",
    children: <p>Quando `course` é informado, os assets do curso substituem `bgColor`.</p>,
  },
};
