import type { Meta, StoryObj } from '@storybook/react';
import ImageList from './ImageList';

const meta: Meta<typeof ImageList> = {
  title: 'Molecules/ImageList',
  component: ImageList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageList>;

export const Default: Story = {
  args: {
    items: [
      {
        imgSrc: 'https://via.placeholder.com/800x400',
        imgFallback: 'https://via.placeholder.com/800x400',
        fonte: 'Fonte: Google Imagens (2024)',
        descricao: 'Esta é a descrição detalhada da primeira imagem. Ela aparece quando o botão de expandir é clicado.',
        barColor: '#3374C0',
        buttonColor: '#298BCA',
        descriptionBoxColor: '#ACCFD5',
      },
      {
        imgSrc: 'https://via.placeholder.com/800x400/8FCD79',
        imgFallback: 'https://via.placeholder.com/800x400/8FCD79',
        fonte: 'Fonte: Acervo Próprio (2024)',
        descricao: 'Segunda imagem com uma cor de barra diferente para demonstrar a flexibilidade do componente.',
        barColor: '#8FCD79',
        buttonColor: '#649753',
        descriptionBoxColor: '#BBD3B3',
        isLast: true,
      },
    ],
  },
};
