import type { Meta, StoryObj } from "@storybook/react";
import { CardFlip } from "./index";

const meta: Meta<typeof CardFlip> = {
  title: "Molecules/CardFlip",
  component: CardFlip,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardFlip>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Jornada Pedagógica Pluvipet + App: Monitoramento participativo de chuvas",
        imageUrl: "https://via.placeholder.com/340x274.png?text=Ilustra%C3%A7%C3%A3o",
        colorScheme: "blue",
        content:
          "<p>Esta Jornada Pedagógica é uma resposta prática e inovadora aos desafios impostos pelas mudanças do clima. Vivemos em um mundo onde desastres como inundações e deslizamentos de terra são cada vez mais frequentes.</p>",
      },
      {
        title: "Jornada Pedagógica Bacia Escola: Aprendendo com a bacia hidrográfica",
        imageUrl: "https://via.placeholder.com/340x274.png?text=Ilustra%C3%A7%C3%A3o",
        colorScheme: "green",
        content:
          "<p>A Jornada Pedagógica Bacia Escola nos convida a redefinir nosso entendimento sobre o lugar onde vivemos. Ela parte da premissa de que a bacia hidrográfica, mais do que uma simples área geográfica, é uma verdadeira escola a céu aberto.</p>",
      },
    ],
  },
};
