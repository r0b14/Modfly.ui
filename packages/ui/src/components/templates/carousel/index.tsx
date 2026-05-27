import React, { useEffect, useState, useRef } from 'react';
import arrowIcon from './assets/arrow.svg';

export interface CarouselProps {
  items: Array<React.ReactNode>;
  numberOfItems: number;
  bgImages?: Array<string>;
  bgColor?: string;
  bgPosition?: Array<string>;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  numberOfItems,
  bgImages,
  bgColor = "transparent",
  bgPosition = [],
}) => {
  const [widthPx, setWidthPx] = useState(1200);
  const [slideNow, setSlideNow] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const resizeContent = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1350) {
        setWidthPx(window.innerWidth - 150);
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
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * widthPx,
        behavior: 'smooth',
      });
      setSlideNow(index);
    }
  };

  const nextSlide = () => {
    if (slideNow < numberOfItems - 1) {
      goToSlide(slideNow + 1);
    }
  };

  const prevSlide = () => {
    if (slideNow > 0) {
      goToSlide(slideNow - 1);
    }
  };

  const currentBgImage = bgImages && bgImages[slideNow] ? `url(${bgImages[slideNow]})` : 'none';
  const currentBgPos = bgPosition[slideNow] || 'center';

  return (
    <div 
      className="relative flex flex-col items-center w-full my-10 overflow-hidden"
      style={{
        backgroundColor: bgColor,
        backgroundImage: currentBgImage,
        backgroundPosition: currentBgPos,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      <div className="flex h-full text-justify justify-center items-center py-20 flex-col sm:flex-row w-full max-w-[1400px]">
        {/* Prev Arrow */}
        <button 
          onClick={prevSlide}
          className="hidden sm:block p-4 focus:outline-none transition-transform hover:scale-125 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={slideNow === 0}
        >
          <img src={arrowIcon} alt="Anterior" className="rotate-180 w-4 h-6" />
        </button>

        {/* Carousel Items Container */}
        <div
          ref={carouselRef}
          className="flex overflow-hidden scroll-smooth"
          style={{
            maxWidth: `${widthPx}px`,
            minWidth: `${widthPx}px`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="px-4 sm:px-10 flex-shrink-0"
              style={{
                width: `${widthPx}px`,
              }}
            >
              <div className="w-full flex justify-center">
                {item}
              </div>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <button 
          onClick={nextSlide}
          className="hidden sm:block p-4 focus:outline-none transition-transform hover:scale-125 disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={slideNow === numberOfItems - 1}
        >
          <img src={arrowIcon} alt="Próximo" className="w-4 h-6" />
        </button>

        {/* Mobile Arrows */}
        <div className="flex sm:hidden w-full justify-between px-10 mt-8">
          <button onClick={prevSlide} disabled={slideNow === 0}>
            <img src={arrowIcon} alt="Anterior" className="rotate-180 w-4 h-6" />
          </button>
          <button onClick={nextSlide} disabled={slideNow === numberOfItems - 1}>
            <img src={arrowIcon} alt="Próximo" className="w-4 h-6" />
          </button>
        </div>
      </div>

      {/* Bullets */}
      <div className="flex gap-4 mb-10">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === slideNow ? "bg-[#285C93] scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
