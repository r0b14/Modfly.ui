import React, { useEffect, useState, useRef } from 'react';

// Assets
import leftBlue from './assets/leftBlue.svg?url';
import leftOrange from './assets/leftOrange.svg?url';
import leftGreen from './assets/leftGreen.svg?url';
import leftBrown from './assets/leftBrown.svg?url';

import rightBlue from './assets/rightBlue.svg?url';
import rightOrange from './assets/rightOrange.svg?url';
import rightGreen from './assets/rightGreen.svg?url';
import rightBrown from './assets/rightBrown.svg?url';

export interface SliderProps {
  children: React.ReactNode[];
  variant?: 'blue' | 'orange' | 'green' | 'brown';
  bulletColor?: string;
  bulletActiveColor?: string;
  onSlideChange?: (current: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  children,
  variant = 'blue',
  bulletColor = '#ccc',
  bulletActiveColor = '#285C93',
  onSlideChange,
}) => {
  const [slideNow, setSlideNow] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = sliderRef.current;
    if (!element) return;
    const sync = () => element.scrollTo({ left: slideNow * element.clientWidth, behavior: 'auto' });
    sync();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(sync); observer.observe(element);
    return () => observer.disconnect();
  }, [slideNow]);

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth,
        behavior: 'smooth',
      });
      setSlideNow(index);
      if (onSlideChange) onSlideChange(index);
    }
  };

  const nextSlide = () => {
    if (slideNow < children.length - 1) goToSlide(slideNow + 1);
  };

  const prevSlide = () => {
    if (slideNow > 0) goToSlide(slideNow - 1);
  };

  const getArrows = () => {
    switch (variant) {
      case 'orange': return { left: leftOrange, right: rightOrange };
      case 'green': return { left: leftGreen, right: rightGreen };
      case 'brown': return { left: leftBrown, right: rightBrown };
      default: return { left: leftBlue, right: rightBlue };
    }
  };

  const arrows = getArrows();

  return (
    <div className="relative flex flex-col items-center w-full my-10 px-4 overflow-hidden">
      <div className="flex h-full items-center py-10 w-full max-w-[1400px]">
        {/* Left Arrow */}
        <button type="button"
          onClick={prevSlide}
          disabled={slideNow === 0}
          className="p-2 sm:p-4 transition-transform hover:scale-110 disabled:opacity-20"
        >
          <img src={arrows.left} alt="Anterior" className="w-12 h-12" />
        </button>

        {/* Slides Container */}
        <div
          ref={sliderRef}
          className="flex min-w-0 overflow-hidden scroll-smooth mx-auto"
          style={{ width: "100%" }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: "100%", visibility: index === slideNow ? "visible" : "hidden" }}
            >
              <div className="w-full flex justify-center p-4">
                {child}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button type="button"
          onClick={nextSlide}
          disabled={slideNow === children.length - 1}
          className="p-2 sm:p-4 transition-transform hover:scale-110 disabled:opacity-20"
        >
          <img src={arrows.right} alt="Próximo" className="w-12 h-12" />
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden w-full justify-between px-10 mb-6">
        <button type="button" onClick={prevSlide} disabled={slideNow === 0}>
          <img src={arrows.left} alt="Anterior" className="w-10 h-10" />
        </button>
        <button type="button" onClick={nextSlide} disabled={slideNow === children.length - 1}>
          <img src={arrows.right} alt="Próximo" className="w-10 h-10" />
        </button>
      </div>

      {/* Bullets */}
      <div className="flex gap-3 mb-4">
        {children.map((_, index) => (
          <button type="button"
            key={index}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={index === slideNow ? "step" : undefined}
            onClick={() => goToSlide(index)}
            className="w-3 h-3 rounded-full transition-all"
            style={{
              backgroundColor: index === slideNow ? bulletActiveColor : bulletColor,
              transform: index === slideNow ? 'scale(1.3)' : 'scale(1)'
            }}
          />
        ))}
      </div>
    </div>
  );
};
