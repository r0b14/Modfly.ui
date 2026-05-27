import React from 'react';

// Imagens para o banner 'main'
import bg0 from '../../../assets/unityBanner/bg0.svg';
import bg1 from '../../../assets/unityBanner/bg1.svg';
import bg2 from '../../../assets/unityBanner/bg2.svg';
import bg3 from '../../../assets/unityBanner/bg3.svg';
import bg4 from '../../../assets/unityBanner/bg4.svg';

import bg1Secondary from '../../../assets/unityBanner/bg1-secondary.svg';
import bg2Secondary from '../../../assets/unityBanner/bg2-secondary.svg';
import bg3Secondary from '../../../assets/unityBanner/bg3-secondary.svg';
import bg4Secondary from '../../../assets/unityBanner/bg4-secondary.svg';

const mainBgs = { 0: bg0, 1: bg1, 2: bg2, 3: bg3, 4: bg4 };
const secondaryBgs = { 1: bg1Secondary, 2: bg2Secondary, 3: bg3Secondary, 4: bg4Secondary };

const UnityBanner: React.FC<BannerProps> = ({
  type,
  module = 1,
  subtitle = 'Conhecimentos Fundamentais',
}) => {
  const getBg = (currentModule: number, bannerType: 'main' | 'secondary') => {
    const bgs = bannerType === 'main' ? mainBgs : secondaryBgs;
    return bgs[currentModule as keyof typeof bgs] || bgs[2];
  };

  const aspectRatioClass =
    type === 'main'
      ? 'sm:aspect-[1400/328] max-sm:aspect-[1200/328]'
      : 'sm:aspect-[1400/256] max-sm:aspect-[1280/256]';

  return (
    <div
      className={`relative flex items-end w-full ${aspectRatioClass} bg-center bg-cover bg-no-repeat mb-10`}
      style={{
        backgroundImage: `url(${getBg(module, type)})`,
      }}
    >
      <div className="flex md:flex-row flex-col-reverse justify-between w-full md:items-end">
        <div className="sm:z-30 max-md:flex max-md:justify-center max-md:items-center">
          <div className="w-full">
            <div className="flex w-full mb-20 xss:mb-20 flex-col">
              <div className="flex flex-col">{/* <p>{subtitle}</p> */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface BannerProps {
  type: 'main' | 'secondary';
  module?: number;
  subtitle?: React.ReactNode;
}

export default UnityBanner;
