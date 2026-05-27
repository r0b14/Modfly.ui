import { useEffect, useState } from 'react';
import arrow from '../../../assets/carousel/arrow.png';
import './Carousel.css';

const Carousel: React.FC<CarouselProps> = ({
  items,
  numberOfItems,
  bgImages,
  bgColor,
  bgPosition,
}) => {
  const [widthPx, setWidthPx] = useState(1100);
  const [slideNow, setSlideNow] = useState(1);

  window.addEventListener('resize', resizeContent);
  function resizeContent() {
    if (window.innerWidth < 1350) {
      setWidthPx(window.innerWidth - 150);
    } else {
      setWidthPx(1200);
    }
  }

  
  useEffect(() => {
    if (window.innerWidth < 1350) {
      setWidthPx(window.innerWidth - 150);
    }
    if (bgImages) {
      document.documentElement.style.setProperty(
        '--backgroundSlide',
        `url(${bgImages[slideNow - 1]}) ${
          bgPosition[slideNow - 1]
        } no-repeat, ${bgColor} center/cover no-repeat`
      );
    }
  }, []);

  return (
    <div className="carouselBackgroundDiv relative flex flex-col items-center">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `${bgColor} center/cover no-repeat`,
          zIndex: '-2',
        }}
      ></div>
      <div className="flex h-full text-justify justify-center items-center py-20 flex-col sm:flex-row">
        {window.innerWidth > 639 && (
          <img
            onClick={() => prevSlide()}
            className="rotate-180 w-full max-w-[13px] max-h-[23px] cursor-pointer select-none"
            src={arrow}
            alt=""
          />
        )}
        <div
          className={`h-full flex overflow-hidden carouselItemsDiv`}
          style={{
            maxWidth: `${widthPx}px`,
            minWidth: `${widthPx}px`,
          }}
        >
          {items.map((item: React.ReactNode, index: number) => (
            <div
              key={index}
              className="carouselItem sm:px-10"
              style={{
                maxWidth: `${widthPx}px`,
                minWidth: `${widthPx}px`,
              }}
            >
              {item}
            </div>
          ))}
        </div>
        {window.innerWidth > 639 && (
          <img
            onClick={() => nextSlide()}
            className="w-full max-w-[13px] max-h-[23px] cursor-pointer select-none"
            src={arrow}
            alt=""
          />
        )}
        {window.innerWidth < 639 && (
          <div className="w-full flex justify-between mt-5">
            <img
              onClick={() => prevSlide()}
              className="rotate-180 w-full max-w-[13px] max-h-[23px] cursor-pointer select-none"
              src={arrow}
              alt=""
            />
            <img
              onClick={() => nextSlide()}
              className="w-full max-w-[13px] max-h-[23px] cursor-pointer select-none"
              src={arrow}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="flex gap-3">
        {items.map((item: React.ReactNode, index: number) => (
          <div
            key={index}
            className={
              index === 0
                ? `carouselBulletPoint currentBulletPoint`
                : `carouselBulletPoint`
            }
            onClick={() => goToSlideItem(index)}
          />
        ))}
      </div>
    </div>
  );

  function prevSlide() {
    let carousel = document.querySelector('.carouselItemsDiv') as any;
    let carouselBullets = document.querySelectorAll(
      '.carouselBulletPoint'
    ) as any;

    if (carousel !== null) {
      if (slideNow > 1) {
        document.documentElement.style.setProperty('--opacitySlide', `0`);

        carouselBullets.forEach((bullet: any) => {
          bullet.classList.remove('currentBulletPoint');
        });

        carousel.scrollTo({
          left: (slideNow - 2) * widthPx,
          behavior: 'smooth',
        });

        setSlideNow(slideNow - 1);

        setTimeout(() => {
          document.documentElement.style.setProperty('--opacitySlide', `1`);

          if (bgImages) {
            document.documentElement.style.setProperty(
              '--backgroundSlide',
              `url(${bgImages[slideNow - 2]}) ${
                bgPosition[slideNow - 2]
              } no-repeat, ${bgColor} center/cover no-repeat`
            );
          }

          carouselBullets[slideNow - 2].classList.add('currentBulletPoint');
        }, 400);
      }
    }
  }

  function nextSlide() {
    let carousel = document.querySelector('.carouselItemsDiv') as any;
    let carouselBullets = document.querySelectorAll(
      '.carouselBulletPoint'
    ) as any;

    if (carousel !== null) {
      if (slideNow < numberOfItems) {
        document.documentElement.style.setProperty('--opacitySlide', `0`);

        carouselBullets.forEach((bullet: any) => {
          bullet.classList.remove('currentBulletPoint');
        });

        setSlideNow(slideNow + 1);
        carousel.scrollTo({
          left: slideNow * widthPx,
          behavior: 'smooth',
        });

        setTimeout(() => {
          document.documentElement.style.setProperty('--opacitySlide', `1`);

          if (bgImages) {
            document.documentElement.style.setProperty(
              '--backgroundSlide',
              `url(${bgImages[slideNow]}) ${bgPosition[slideNow]} no-repeat, ${bgColor} center/cover no-repeat`
            );
          }

          carouselBullets[slideNow].classList.add('currentBulletPoint');
        }, 400);
      }
    }
  }

  function goToSlideItem(itemNumber: number) {
    let carousel = document.querySelector('.carouselItemsDiv') as any;
    let carouselBullets = document.querySelectorAll(
      '.carouselBulletPoint'
    ) as any;

    document.documentElement.style.setProperty('--opacitySlide', `0`);

    carouselBullets.forEach((bullet: any) => {
      bullet.classList.remove('currentBulletPoint');
    });

    setSlideNow(itemNumber + 1);
    carousel.scrollTo({
      left: itemNumber * widthPx,
      behavior: 'smooth',
    });

    setTimeout(() => {
      document.documentElement.style.setProperty('--opacitySlide', `1`);

      if (bgImages) {
        document.documentElement.style.setProperty(
          '--backgroundSlide',
          `url(${bgImages[itemNumber]}) ${bgPosition[itemNumber]} no-repeat, ${bgColor} center/cover no-repeat`
        );
      }

      carouselBullets[itemNumber].classList.add('currentBulletPoint');
    }, 400);
  }
};

interface CarouselProps {
  items: Array<React.ReactNode>;
  numberOfItems: number;
  bgImages: Array<string>;
  bgColor: string;
  bgPosition: Array<string>;
}

export default Carousel;