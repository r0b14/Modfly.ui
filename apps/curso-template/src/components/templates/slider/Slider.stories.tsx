import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Slider from './Slider';

const meta: Meta<typeof Slider.Carousel> = {
  title: 'Templates/Slider',
  component: Slider.Carousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider.Carousel>;

export const Default: Story = {
  render: (args) => (
    <Slider.Wrapper borderColor="#221d70" backgroundColor="#f0ede2">
      <Slider.Carousel {...args}>
        <div style={{ padding: '40px', textAlign: 'center' }}>Slide 1</div>
        <div style={{ padding: '40px', textAlign: 'center' }}>Slide 2</div>
        <div style={{ padding: '40px', textAlign: 'center' }}>Slide 3</div>
      </Slider.Carousel>
    </Slider.Wrapper>
  ),
  args: {
    bulletColor: '#ccc',
    bulletActiveColor: '#221d70',
    variant: 'blue',
  },
};
