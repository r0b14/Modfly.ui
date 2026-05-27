import type { Meta, StoryObj } from '@storybook/react';
import { Logos } from './Logos';

const meta: Meta<typeof Logos> = {
  title: 'Templates/Logos',
  component: Logos,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logos>;

export const Default: Story = {};
