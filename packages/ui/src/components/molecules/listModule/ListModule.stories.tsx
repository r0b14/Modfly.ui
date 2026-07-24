import type { Meta, StoryObj } from "@storybook/react";
import { ListModule } from "./index";

const meta: Meta<typeof ListModule> = {
  title: "Molecules/ListModule",
  component: ListModule,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListModule>;

export const Default: Story = {
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

export const SemSubtitulo: Story = {
  name: "Sem subtítulo",
  args: {
    title: "Módulo 2",
    textList: ["Item único de leitura complementar."],
    borderColor: "#742B0B",
  },
};
