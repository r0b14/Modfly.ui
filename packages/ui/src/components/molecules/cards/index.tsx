import React, { useEffect, useState } from "react";

// Assets
import topBlue from "./assets/topBlue.svg";
import topGreen from "./assets/topGreen.svg";
import topOrange from "./assets/topOrange.svg";
import openOrange from "./assets/openorange.svg";
import openBlue from "./assets/openblue.svg";
import openGreen from "./assets/opengreen.svg";
import closedOrange from "./assets/closedorange.svg";
import closedBlue from "./assets/closedblue.svg";
import closedGreen from "./assets/closedgreen.svg";

export interface CardProps {
  cardsData: [string, string, string, number, string][]; // Nome, Texto, ImagemURL, Tipo (1=blue, 2=green, 3=orange), TextoExpandido (HTML)
}

export const Cards: React.FC<CardProps> = ({ cardsData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getColorClasses = (tipo: number) => {
    switch (tipo) {
      case 1:
        return {
          bg: "bg-[#7DB0EC]",
          buttonBg: "bg-[#298BCA]",
          buttonHover: "hover:bg-[#2278b3]",
          buttonActiveBg: "bg-[#6990A9]",
          topImage: topBlue,
        };
      case 2:
        return {
          bg: "bg-[#8FCD79]",
          buttonBg: "bg-[#649753]",
          buttonHover: "hover:bg-[#6fa05e]",
          buttonActiveBg: "bg-[#82B571]",
          topImage: topGreen,
        };
      case 3:
        return {
          bg: "bg-[#FFB861]",
          buttonBg: "bg-[#C66A4A]",
          buttonHover: "hover:bg-[#b35a3a]",
          buttonActiveBg: "bg-[#EC803D]",
          topImage: topOrange,
        };
      default:
        return {
          bg: "bg-[#7DB0EC]",
          buttonBg: "bg-[#298BCA]",
          buttonHover: "hover:bg-[#2278b3]",
          buttonActiveBg: "bg-[#EC803D]",
          topImage: topBlue,
        };
    }
  };

  const getButtonImage = (tipo: number, isOpen: boolean, index: number) => {
    const isHovered = hoveredButton === index;

    if (tipo === 3) {
      if (isOpen) return openOrange;
      return closedOrange;
    }

    if (tipo === 1) {
      if (isOpen) return openBlue;
      return closedBlue;
    }

    if (isOpen) return openGreen;
    return closedGreen;
  };

  return (
    <div className="flex flex-col items-center w-full my-10">
      <div className="flex md:flex-row flex-col flex-wrap gap-10 mb-10 justify-center relative max-w-[1200px] w-full">
        {cardsData.map(([nome, texto, imagemURL, tipo, textoExpandido], index) => {
          const colors = getColorClasses(tipo);
          const ButtonImage = getButtonImage(tipo, openIndex === index, index);
          return (
            <div
              key={index}
              className="flex flex-col items-center relative w-full md:w-[353px]"
            >
              <div
                className={`${colors.bg} rounded-[10px] shadow-lg w-full max-w-[353px] h-[599px] flex flex-col relative transition-all duration-300`}
              >
                <div className="w-full h-[55px] flex items-center justify-center">
                  <colors.topImage
                    aria-hidden="true"
                    preserveAspectRatio="none"
                    className="w-full h-full rounded-t-[10px]"
                  />
                </div>

                <h3 className="text-center text-[24px] md:text-[28px] font-bold text-black px-4 mt-4 mb-4">
                  {nome}
                </h3>

                <div className="flex justify-center px-4 mb-6">
                  <div className="w-[286px] h-[274px]">
                    <img
                      src={imagemURL}
                      alt={nome}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="px-10 pb-10 flex-grow flex items-end">
                  <p className="w-full text-center text-black text-[18px] leading-relaxed whitespace-pre-line">
                    {texto}
                  </p>
                </div>
              </div>

              <button
                className={`flex items-center justify-center rounded-full w-[60px] h-[60px] focus:outline-none shadow-lg transition-all duration-300 -mt-[30px] relative z-10`}
                onClick={() => handleToggle(index)}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                aria-expanded={openIndex === index}
              >
                <ButtonImage
                  aria-hidden="true"
                  className="w-[60px] h-[60px] transition duration-200"
                />
              </button>

              {/* Mobile Expansion */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out w-full max-w-[353px] ${
                  openIndex === index && isMobile ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                {isMobile && (
                  <div className={`p-6 text-black ${colors.bg} shadow-lg rounded-[15px] transform transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-4'
                  }`}>
                    <div 
                      className="w-full text-[16px] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: textoExpandido }}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Expansion */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out w-full max-w-[1200px] ${
          openIndex !== null && !isMobile ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        {openIndex !== null && !isMobile && (
          <div className={`p-10 text-black ${getColorClasses(cardsData[openIndex][3]).bg} shadow-lg rounded-[15px] transform transition-all duration-500 ease-in-out ${
            openIndex !== null ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-4'
          }`}>
            <div 
              className="w-full text-[18px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: cardsData[openIndex][4] }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
