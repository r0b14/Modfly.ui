import type { Meta, StoryObj } from "@storybook/react";
import { Quotes } from "./index";

const meta: Meta<typeof Quotes> = {
  title: "Molecules/Quotes",
  component: Quotes,
  tags: ["autodocs"],
  argTypes: {
    colorScheme: {
      control: "radio",
      options: ["blue", "green", "orange", "pink"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Quotes>;

export const Blue: Story = {
  args: {
    colorScheme: "blue",
    children: <p>A educação não transforma o mundo. Educação muda as pessoas. Pessoas mudam o mundo.</p>,
  },
};

export const Green: Story = {
  args: {
    colorScheme: "green",
    children: <p>Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.</p>,
  },
};

export const Orange: Story = {
  args: {
    colorScheme: "orange",
    children: <p>Ensinar não é transmitir conhecimento, mas criar as possibilidades para a sua própria produção ou a sua construção.</p>,
  },
};

export const Pink: Story = {
  args: {
    colorScheme: "pink",
    children: <p>Não há saber mais ou saber menos. Há saberes diferentes.</p>,
  },
};
