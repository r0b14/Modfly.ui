import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./index";

const meta: Meta<typeof Slider> = {
  title: "Templates/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["blue", "orange", "green", "brown"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    variant: "blue",
    bulletColor: "#ccc",
    bulletActiveColor: "#285C93",
    children: [
      <div key="1" style={{ padding: "40px", textAlign: "center" }}>Slide 1</div>,
      <div key="2" style={{ padding: "40px", textAlign: "center" }}>Slide 2</div>,
      <div key="3" style={{ padding: "40px", textAlign: "center" }}>Slide 3</div>,
    ],
  },
};

export const Laranja: Story = {
  args: {
    variant: "orange",
    bulletColor: "#f0d9c0",
    bulletActiveColor: "#C66A4A",
    children: [
      <div key="1" style={{ padding: "40px", textAlign: "center" }}>Slide 1</div>,
      <div key="2" style={{ padding: "40px", textAlign: "center" }}>Slide 2</div>,
    ],
  },
};
