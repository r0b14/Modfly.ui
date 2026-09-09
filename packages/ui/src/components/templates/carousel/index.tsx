import React, { useState } from 'react';

export { CarouselLegacy } from './legacy';
export type { CarouselLegacyProps } from './legacy';

// Redesign EDC (2026-07): cada slide é um card colorido com fundo decorativo
// (tubos/setas ilustrados nos cantos), seta de navegação sobreposta nas bordas
// e paginação por pontos. SVGs renderizados como componentes React via SVGR.
import CardBlue from './assets/cardBlue.svg';
import CardOrange from './assets/cardOrange.svg';
import CardGreen from './assets/cardGreen.svg';
import Arrow from './assets/arrow.svg';

type Svg = React.FC<React.SVGProps<SVGSVGElement>>;

const CARD_BY_SCHEME: Record<'blue' | 'orange' | 'green', Svg> = {
  blue: CardBlue,
  orange: CardOrange,
  green: CardGreen,
};

const ARROW_COLOR_BY_SCHEME: Record<'blue' | 'orange' | 'green', string> = {
  blue: '#285C93',
  orange: '#DD6F2F',
  green: '#2D9522',
};

export interface CarouselItem {
  content: React.ReactNode;
  colorScheme?: 'blue' | 'orange' | 'green';
}

export interface CarouselProps {
  items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [slideNow, setSlideNow] = useState(0);

  const goToSlide = (index: number) => setSlideNow(index);
  const nextSlide = () => slideNow < items.length - 1 && goToSlide(slideNow + 1);
  const prevSlide = () => slideNow > 0 && goToSlide(slideNow - 1);

  const currentArrowColor = ARROW_COLOR_BY_SCHEME[items[slideNow]?.colorScheme ?? 'blue'];

  return (
    <div className="flex flex-col items-center w-full my-10 px-4">
      <div className="relative overflow-hidden w-full" style={{ maxWidth: '1200px' }}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slideNow * 100}%)` }}
        >
          {items.map(({ content, colorScheme = 'blue' }, index) => {
            const Card = CARD_BY_SCHEME[colorScheme];

            return (
              <div key={index} className="flex-shrink-0 w-full">
                <div className="relative rounded-xl overflow-hidden min-h-[200px] flex items-center">
                  <Card
                    aria-hidden="true"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full"
                  />
                  <div className="relative z-10 flex-1 flex justify-center px-14 sm:px-20 py-10 text-center">
                    {content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={prevSlide}
          disabled={slideNow === 0}
          aria-label="Slide anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 focus:outline-none transition-transform hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ color: currentArrowColor }}
        >
          <Arrow className="w-[15px] h-[30px] rotate-180" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          disabled={slideNow === items.length - 1}
          aria-label="Próximo slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 focus:outline-none transition-transform hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ color: currentArrowColor }}
        >
          <Arrow className="w-[15px] h-[30px]" />
        </button>
      </div>

      {items.length > 1 && (
        <div className="flex gap-3 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
              className="p-1"
            >
              <span
                className="block w-3 h-3 rounded-full transition-opacity duration-300"
                style={{ background: '#3A584E', opacity: index === slideNow ? 1 : 0.5 }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
