// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { QuoteText } from "./quoteText";

const meta: Meta<typeof QuoteText> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "QuoteText",
  component: QuoteText,
};

export default meta;
type Story = StoryObj<typeof QuoteText>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Main: Story = {
  render: () => (
    <QuoteText specText="quote-text-1">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </QuoteText>
  ),
};
