import type { Meta, StoryObj } from "@storybook/react";
import { ImageFallback } from "./index";

const meta: Meta<typeof ImageFallback> = {
  title: "Atoms/ImageFallback",
  component: ImageFallback,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageFallback>;

export const Default: Story = {
  args: {
    src: "https://placehold.co/320x200.webp",
    fallback: "https://placehold.co/320x200.png",
    alt: "Imagem de exemplo",
  },
};

export const Centralizada: Story = {
  args: {
    src: "https://placehold.co/320x200.webp",
    fallback: "https://placehold.co/320x200.png",
    alt: "Imagem centralizada",
    imgCenter: true,
    maxWidth: "320px",
  },
};
