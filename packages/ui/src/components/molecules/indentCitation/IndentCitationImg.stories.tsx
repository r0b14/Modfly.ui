import type { Meta, StoryObj } from "@storybook/react";
import { IndentCitationImg } from "./IndentCitationImg";

const meta: Meta<typeof IndentCitationImg> = {
  title: "Molecules/IndentCitation/IndentCitationImg",
  component: IndentCitationImg,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IndentCitationImg>;

export const Default: Story = {
  args: {
    title: "Título do bloco",
    text: "Texto ao lado da imagem, com borda colorida à esquerda em telas pequenas.",
    imageSrc: "https://via.placeholder.com/100x100",
    borderColor: "#549d90",
  },
};

export const AlinhadoAoTopo: Story = {
  name: "Alinhado ao topo",
  args: {
    title: "Alinhamento items-start",
    text: "Quando o texto é mais alto que a imagem, alinhar ao topo evita espaço estranho.",
    imageSrc: "https://via.placeholder.com/100x140",
    align: "items-start",
  },
};
