import React, { useEffect, useState, useRef } from 'react';

// Assets
import leftBlue from './assets/leftBlue.svg';
import leftOrange from './assets/leftOrange.svg';
import leftGreen from './assets/leftGreen.svg';
import leftBrown from './assets/leftBrown.svg';

import rightBlue from './assets/rightBlue.svg';
import rightOrange from './assets/rightOrange.svg';
import rightGreen from './assets/rightGreen.svg';
import rightBrown from './assets/rightBrown.svg';

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
  const [widthPx, setWidthPx] = useState(1200);
  const sliderRef = useRef<HTMLDivElement>(null);

  const resizeContent = () => {
    if (typeof window !== 'undefined') {
      const vw = window.innerWidth;
      if (vw < 1350) {
        setWidthPx(vw - 150);
      } else {
        setWidthPx(1200);
      }
    }
  };

  useEffect(() => {
    resizeContent();
    window.addEventListener('resize', resizeContent);
    return () => window.removeEventListener('resize', resizeContent);
  }, []);

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * widthPx,
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
        <button 
          onClick={prevSlide}
          disabled={slideNow === 0}
          className="hidden md:block p-4 transition-transform hover:scale-110 disabled:opacity-20"
        >
          <img src={arrows.left} alt="Anterior" className="w-12 h-12" />
        </button>

        {/* Slides Container */}
        <div
          ref={sliderRef}
          className="flex overflow-hidden scroll-smooth mx-auto"
          style={{ width: `${widthPx}px` }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${widthPx}px` }}
            >
              <div className="w-full flex justify-center p-4">
                {child}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          disabled={slideNow === children.length - 1}
          className="hidden md:block p-4 transition-transform hover:scale-110 disabled:opacity-20"
        >
          <img src={arrows.right} alt="Próximo" className="w-12 h-12" />
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="flex md:hidden w-full justify-between px-10 mb-6">
        <button onClick={prevSlide} disabled={slideNow === 0}>
          <img src={arrows.left} alt="Anterior" className="w-10 h-10" />
        </button>
        <button onClick={nextSlide} disabled={slideNow === children.length - 1}>
          <img src={arrows.right} alt="Próximo" className="w-10 h-10" />
        </button>
      </div>

      {/* Bullets */}
      <div className="flex gap-3 mb-4">
        {children.map((_, index) => (
          <button
            key={index}
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
