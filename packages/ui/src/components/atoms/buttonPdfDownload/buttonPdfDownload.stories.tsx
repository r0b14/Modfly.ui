import type { Meta, StoryObj } from "@storybook/react";
import { ButtonPdfDownload } from "./index";

const meta: Meta<typeof ButtonPdfDownload> = {
  title: "Atoms/ButtonPdfDownload",
  component: ButtonPdfDownload,
  tags: ["autodocs"],
  argTypes: {
    variation: {
      control: "radio",
      options: ["class", "video"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonPdfDownload>;

export const Aula: Story = {
  args: {
    pdfile: "/exemplo-slides.pdf",
    variation: "class",
  },
};

export const Video: Story = {
  args: {
    pdfile: "/exemplo-roteiro.pdf",
    variation: "video",
  },
};
