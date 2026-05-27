import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Templates/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    numberOfSlides: 5,
    slideNow: 1,
    minicourseNow: 1,
    numberOfMinicourses: 3,
  },
};
