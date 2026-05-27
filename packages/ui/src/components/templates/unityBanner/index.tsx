import React from 'react';

// Assets
import bg0 from './assets/bg0.svg';
import bg1 from './assets/bg1.svg';
import bg2 from './assets/bg2.svg';
import bg3 from './assets/bg3.svg';
import bg4 from './assets/bg4.svg';

import bg1Secondary from './assets/bg1-secondary.svg';
import bg2Secondary from './assets/bg2-secondary.svg';
import bg3Secondary from './assets/bg3-secondary.svg';
import bg4Secondary from './assets/bg4-secondary.svg';

const mainBgs: Record<number, string> = { 0: bg0, 1: bg1, 2: bg2, 3: bg3, 4: bg4 };
const secondaryBgs: Record<number, string> = { 1: bg1Secondary, 2: bg2Secondary, 3: bg3Secondary, 4: bg4Secondary };

export interface UnityBannerProps {
  type: 'main' | 'secondary';
  module?: number;
  subtitle?: React.ReactNode;
}

export const UnityBanner: React.FC<UnityBannerProps> = ({
  type,
  module = 1,
  subtitle,
}) => {
  const getBg = (currentModule: number, bannerType: 'main' | 'secondary') => {
    const bgs = bannerType === 'main' ? mainBgs : secondaryBgs;
    return bgs[currentModule] || bgs[1] || bg0;
  };

  const aspectRatioClass =
    type === 'main'
      ? 'sm:aspect-[1400/328] max-sm:aspect-[1200/328]'
      : 'sm:aspect-[1400/256] max-sm:aspect-[1280/256]';

  return (
    <div
      className={`relative flex items-end w-full ${aspectRatioClass} bg-center bg-cover bg-no-repeat mb-10 overflow-hidden shadow-sm`}
      style={{
        backgroundImage: `url(${getBg(module, type)})`,
      }}
    >
      <div className="flex md:flex-row flex-col-reverse justify-between w-full md:items-end px-10 pb-8 md:pb-12">
        <div className="z-10 w-full">
          {subtitle && (
            <div className="text-[#333333] font-medium text-xl md:text-2xl tracking-wide max-w-[600px]">
              {subtitle}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
