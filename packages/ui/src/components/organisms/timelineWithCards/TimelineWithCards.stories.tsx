import type { Meta, StoryObj } from "@storybook/react";
import { TimelineWithCards } from "./index";

const meta: Meta<typeof TimelineWithCards> = {
  title: "Organisms/TimelineWithCards",
  component: TimelineWithCards,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TimelineWithCards>;

export const Default: Story = {
  args: {
    content: [
      { title: "1970", content: "Primeiras experiências de mediação vítima-ofensor no Canadá." },
      { title: "1989", content: "Nova Zelândia formaliza práticas restaurativas na justiça juvenil." },
      { title: "2002", content: "ONU publica princípios básicos sobre justiça restaurativa." },
    ],
  },
};
