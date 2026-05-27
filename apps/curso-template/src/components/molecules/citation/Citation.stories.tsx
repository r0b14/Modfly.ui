import type { Meta, StoryObj } from '@storybook/react';
import Citation from './Citation';

const meta: Meta<typeof Citation> = {
  title: 'Molecules/Citation',
  component: Citation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Citation>;

export const Default: Story = {
  args: {
    title: 'Citação Importante',
    text: 'A educação é o processo de viver e não uma preparação para a vida futura.',
    children: 'John Dewey (1897)',
  },
};
