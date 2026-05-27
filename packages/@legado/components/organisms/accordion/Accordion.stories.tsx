// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Type1: Story = {
  render: () => (
    <Accordion
      title={"Apresentação"}
      bgColor={1}
      bgInsideColor="#FFEDB8"
      titleColor="#FFFFFF"
      titleColor2="#FFFFFF"
      variant="static"
    >
      .
    </Accordion>
  ),
};

export const Type2: Story = {
  render: () => (
    <Accordion
      title={"Para saber mais"}
      bgColor={1}
      bgInsideColor="#DAF8F8"
      titleColor="#FFFFFF"
      titleColor2="#2A5C93"
      variant="dynamic"
    >
      .
    </Accordion>
  ),
};

export const Type3: Story = {
  render: () => (
    <Accordion
      title={"Sugestão de resposta"}
      bgColor={1}
      bgInsideColor="#FFEDB8"
      titleColor="#FFFFFF"
      titleColor2="#2D9522"
      variant="dynamic"
    >
      .
    </Accordion>
  ),
};

export const Type4: Story = {
  render: () => (
    <Accordion
      title={"Dica de aprofundamento"}
      bgColor={1}
      bgInsideColor="#FFEDB8"
      titleColor="#FFFFFF"
      titleColor2="#9E5022"
      variant="dynamic"
    >
      .
    </Accordion>
  ),
};
