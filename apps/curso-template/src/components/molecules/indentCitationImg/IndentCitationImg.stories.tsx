import type { Meta, StoryObj } from '@storybook/react';
import IndentCitationImg from './IndentCitationImg';

const meta: Meta<typeof IndentCitationImg> = {
  title: 'Molecules/IndentCitation/IndentCitationImg',
  component: IndentCitationImg,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IndentCitationImg>;

export const Default: Story = {
  args: {
    title: 'Pensamento do Dia',
    imageSrc: 'https://via.placeholder.com/100',
    text: 'A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.',
    children: 'Albert Einstein',
    backgroundColor: '#DFF1D8',
    borderColor: '#649753',
  },
};
