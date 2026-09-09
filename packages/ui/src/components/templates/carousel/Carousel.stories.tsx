import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./index";

const meta: Meta<typeof Carousel> = {
  title: "Templates/Carousel",
  component: Carousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    items: [
      {
        colorScheme: "blue",
        content: (
          <p className="text-[22px] leading-[1.5] text-black m-0">
            &quot;Se você não tem uma religião, você não tem um Deus&quot;
          </p>
        ),
      },
      {
        colorScheme: "orange",
        content: (
          <p className="text-[22px] leading-[1.5] text-black m-0">
            &quot;Se você não tem um Deus, você não tem uma alma&quot;
          </p>
        ),
      },
      {
        colorScheme: "green",
        content: (
          <p className="text-[22px] leading-[1.5] text-black m-0">
            &quot;E, por fim, se você não tem uma alma, não é humano, mas animal&quot; (Grosfoguel, 2016 p. 37).
          </p>
        ),
      },
    ],
  },
};
