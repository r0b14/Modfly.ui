import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';

import Slider from 'react-slick';

import leftBlue from '../../../assets/slider/leftBlue.svg';
import leftOrange from '../../../assets/slider/leftOrange.svg';
import leftGreen from '../../../assets/slider/leftGreen.svg';
import leftBrown from '../../../assets/slider/leftBrown.svg';

import rightBlue from '../../../assets/slider/rightBlue.svg';
import rightOrange from '../../../assets/slider/rightOrange.svg';
import rightGreen from '../../../assets/slider/rightGreen.svg';
import rightBrown from '../../../assets/slider/rightBrown.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

export const Carousel: React.FC<CarouselProps> = ({
  children,
  bulletColor,
  bulletActiveColor,
  variant,
  onSlideChange, // Recebe a função do pai
}) => {
  const { width } = useWindowDimensions();

  const settings = {
    dots: true,
    infinite: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    draggable: width <= 768,
    afterChange: (current: number) => {
      if (onSlideChange) onSlideChange(current);
    },
  };

  const styles = css`
    /* O restante dos seus estilos permanece intacto */
    .slick-disabled {
      opacity: 0;
      pointer-events: none;
    }

    .slick-prev:before {
      content: url(${variant === 'blue'
        ? leftBlue
        : variant === 'orange'
          ? leftOrange
          : variant === 'green'
            ? leftGreen
            : variant === 'brown'
              ? leftBrown
              : leftGreen});
    }

    .slick-next:before {
      content: url(${variant === 'blue'
        ? rightBlue
        : variant === 'orange'
          ? rightOrange
          : variant === 'green'
            ? rightGreen
            : variant === 'brown'
              ? rightBrown
              : rightGreen});
    }

    .slick-prev,
    .slick-next {
      height: auto;
    }

    .slick-next {
      right: -90px;
    }

    .slick-prev {
      left: -100px;
    }

    .slick-dots {
      bottom: -50px;
    }

    .slick-dots li {
      cursor: default;

      @media (max-width: 420px) {
        height: 13px;
        width: 13px;
      }
    }

    .slick-dots li button:before {
      font-size: 1rem;
      color: ${bulletColor};
      opacity: 0.5;
    }

    .slick-dots li.slick-active button:before {
      color: ${bulletActiveColor};
      opacity: 1;
    }

    .slick-prev:focus:before,
    .slick-next:focus:before {
      opacity: 0.75;
    }

    .slick-next:hover:before,
    .slick-prev:hover:before {
      opacity: 1 !important;
    }

    @media (max-width: 768px) {
      .slick-next {
        right: -120px;
      }

      .slick-prev {
        left: -120px;
      }
    }

    @media (max-width: 576px) {
      .slick-next {
        right: -120px;
      }

      .slick-prev {
        left: -120px;
      }
    }
  `;

  return (
    <Slider className={styles} {...settings}>
      {children}
    </Slider>
  );
};

interface CarouselProps {
  children: React.ReactNode;
  bulletActiveColor: string;
  bulletColor: string;
  variant?: string;
  onSlideChange?: (current: number) => void; // Nova prop na interface
}

// A função useWindowDimensions continua a mesma
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
