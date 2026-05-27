import type { Meta, StoryObj } from '@storybook/react';
import Infografico from './Infografico';

const meta: Meta<typeof Infografico> = {
  title: 'Templates/Infografico',
  component: Infografico,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Infografico>;

export const Default: Story = {};
