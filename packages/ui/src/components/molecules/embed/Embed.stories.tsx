import type { Meta, StoryObj } from "@storybook/react";
import { Embed } from "./index";

const meta: Meta<typeof Embed> = {
  title: "Molecules/Embed",
  component: Embed,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Embed>;

export const YouTube: Story = {
  args: {
    text: "Assista a este vídeo sobre educação:",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
};

export const Spotify: Story = {
  args: {
    text: "Ouça este podcast:",
    link: "https://open.spotify.com/episode/7F6mWkn6tPqr0HMHA86Deu",
  },
};

export const OnlyText: Story = {
  args: {
    text: "Apenas um texto explicativo sem link de embed.",
    isOnlyText: true,
  },
};
