import type { Meta, StoryObj } from "@storybook/react";
import { Cards } from "./index";

const meta: Meta<typeof Cards> = {
  title: "Molecules/Cards",
  component: Cards,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Cards>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Infraestrutura das escolas",
        imageUrl: "https://via.placeholder.com/380x274.png?text=Ilustra%C3%A7%C3%A3o",
        colorScheme: "green",
        content: "Ter metade das escolas com infraestrutura sustentável e resiliente;",
      },
      {
        title: "Currículo",
        imageUrl: "https://via.placeholder.com/380x274.png?text=Ilustra%C3%A7%C3%A3o",
        colorScheme: "blue",
        content:
          "Ter a educação ambiental climática presente nos currículos nacionais de 90% dos países do mundo;",
      },
    ],
  },
};

export const QuatroCards: Story = {
  name: "Quatro cards",
  args: {
    items: [
      {
        title: "Infraestrutura das escolas",
        imageUrl: "https://via.placeholder.com/380x274.png?text=Ilustra%C3%A7%C3%A3o",
        colorScheme: "green",
        content: "Ter metade das escolas com infraestrutura sustentável e resiliente;",
      },
      {
        title: "Currículo",
        imageUrl: "https://via.placeholder.com/380x274.png?text=Ilustra%C3%A7%C3%A3o",
        colorScheme: "blue",
        content:
          "Ter a educação ambiental climática presente nos currículos nacionais de 90% dos países do mundo;",
      },
      {
        title: "Formação de educadores e capacidades de gestão dos sistemas educativos",
        imageUrl: "https://via.placeholder.com/380x274.png?text=Ilustra%C3%A7%C3%A3o",
        colorScheme: "blue",
        content:
          "Promover formação continuada a educadores(as) e gestores(as) sobre mudanças climáticas e como se adaptar a elas e contribuir para que não aumentem;",
      },
      {
        title: "Comunidades",
        imageUrl: "https://via.placeholder.com/380x274.png?text=Ilustra%C3%A7%C3%A3o",
        colorScheme: "green",
        content: "Fortalecer o papel das comunidades na ação climática por meio da educação;",
      },
    ],
  },
};
