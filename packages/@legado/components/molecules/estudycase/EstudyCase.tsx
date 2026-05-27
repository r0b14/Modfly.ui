import React from "react";

interface EstudyCaseProps {
  topBgImg: string;
  iconImg: string;
  title: string;
  bottomBgImg: string;
  bottomBgWidth?: string | number;
  bottomBgHeight?: string | number;
  children: React.ReactNode;
}

export const EstudyCase: React.FC<EstudyCaseProps> = ({
  topBgImg,
  iconImg,
  title,
  bottomBgImg,
  bottomBgWidth,
  bottomBgHeight,
  children,
}) => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      {/* Top section */}
      <div
        className="relative h-[80px] md:h-[100px] flex items-center"
        style={{
          backgroundImage: `url(${topBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={iconImg}
          alt="Ícone"
          className="h-10 w-10 md:h-14 md:w-14 ml-6"
        />
        <h5 className="ml-4 text-branco text-lg md:text-2xl font-bold drop-shadow">
          {title}
        </h5>
      </div>
      {/* Bottom section */}
      <div
        className="relative p-6 md:p-10"
        style={{
          backgroundImage: `url(${bottomBgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: bottomBgWidth,
          height: bottomBgHeight,
        }}
      >
        <div className="relative z-10 text-base md:text-lg text-[#2B2B2B]">
          {children}
        </div>
        {/* Optional overlay for better readability */}
        <div className="absolute inset-0 bg-white/70 z-0 rounded-b-lg" />
      </div>
    </div>
  );
};
