import type { Meta, StoryObj } from '@storybook/react';

import { Figure } from './Figure';

import image1_src from '../../assets/figure/image1.png';
import image1_fb from '../../assets/figure/phone.png';
import image2_src from '../../assets/figure/image2.png';
import image2_fb from '../../assets/figure/background2.png';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Figure> = {
  title: 'FPN/Figure',
  component: Figure,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Figure>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Number01: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    type: 'Figura',
    number: '01',
    caption:
      'À direita, duas células piramidais do córtex cerebral de um gato, coradas pelo método de Golgi; à esquerda, células piramidais corticais coradas pelo azul de metileno, usado por Cajal para demonstrar a presença das espinhas dendríticas',
    reference: 'Fonte: Sallet (2009).',
    imgFb: image1_fb,
    imgSrc: image1_src,
  },
};

export const Number02: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    type: 'Figura',
    number: '02',
    caption: 'Representação geral de um neurônio',
    reference: 'Fonte: Nossa autoria (2023).',
    imgSrc: image2_src,
    imgFb: image2_fb,
  },
};
