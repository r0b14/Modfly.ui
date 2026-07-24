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
      <div key="1" style={{ padding: "40px", background: "#eee" }}>Slide 1 Content</div>,
      <div key="2" style={{ padding: "40px", background: "#ddd" }}>Slide 2 Content</div>,
      <div key="3" style={{ padding: "40px", background: "#ccc" }}>Slide 3 Content</div>,
    ],
    numberOfItems: 3,
    bgColor: "#f0f0f0",
    bgImages: [],
    bgPosition: [],
  },
};
