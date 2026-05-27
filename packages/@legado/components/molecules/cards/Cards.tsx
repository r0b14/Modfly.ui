import React, { useEffect, useState } from "react";
import topBlue from "../../../assets/cards/topBlue.png";
import topGreen from "../../../assets/cards/topGreen.png";
import topOrange from "../../../assets/cards/topOrange.png";
import openOrange from "../../../assets/cards/openorange.svg";
import openBlue from "../../../assets/cards/openblue.svg";
import openGreen from "../../../assets/cards/opengreen.svg";
import closedOrange from "../../../assets/cards/closedorange.svg";
import closedBlue from "../../../assets/cards/closedblue.svg";
import closedGreen from "../../../assets/cards/closedgreen.svg";

interface CardProps {
  cardsData: [string, string, string, number, string][]; // Nome, Texto, ImagemURL, Tipo (1=blue, 2=green, 3=orange), TextoExpandido (HTML)
}

const Cards: React.FC<CardProps> = ({ cardsData }) => {
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
      // orange
      if (isOpen) {
        return openOrange;
      } else {
        return isHovered ? closedOrange : closedOrange;
      }
    }

    if (tipo === 1) {
      if (isOpen) {
        return openBlue;
      } else {
        return isHovered ? closedBlue : closedBlue;
      }
    }

    // default / tipo 2
    if (isOpen) {
      return openGreen;
    } else {
      return isHovered ? closedGreen : closedGreen;
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Container Principal dos Cards */}
      <div className="flex md:flex-row flex-col flex-wrap gap-10 mb-10 justify-center relative max-w-[1200px]">
        {cardsData.map(([nome, texto, imagemURL, tipo, textoExpandido], index) => {
          const colors = getColorClasses(tipo);
          return (
            <div
              key={index}
              className="flex flex-col items-center relative w-full md:w-[353px]"
            >
              {/* Container do Card */}
              <div
                className={`${colors.bg} rounded-[10px] shadow-lg w-[353px] h-[599px] flex flex-col relative transition-all duration-300`}
              >
                {/* Imagem Superior (topBlue, topGreen ou topOrange) */}
                <div className="w-full h-[55px] flex items-center justify-center">
                  <img
                    src={colors.topImage}
                    alt="Top decoration"
                    className="w-full h-full object-cover rounded-t-[10px]"
                  />
                </div>

                {/* Nome do Card */}
                <h3 className="text-center text-[24px] md:text-[28px] font-semi text-black px-4 mt-4 mb-4">
                  {nome}
                </h3>

                {/* Imagem Central */}
                <div className="flex justify-center px-4 mb-6">
                  <div className="w-[286px] h-[274px] ">
                    <img
                      src={imagemURL}
                      alt={nome}
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>

                {/* Texto do Card */}
                <div className="px-10 pb-10 flex-grow flex items-end">
                  <p className="w-full text-center text-black text-[18px] leading-relaxed whitespace-pre-line">
                    {texto}
                  </p>
                </div>
              </div>

              <button
                className={`flex items-center justify-center rounded-full w-[60px] h-[60px] focus:outline-none
                  text-white text-3xl font-bold shadow-lg transition-all duration-300 -mt-[30px] relative z-10
                  ${openIndex === index ? colors.buttonActiveBg : colors.buttonBg}
                  ${colors.buttonHover}
                `}
                onClick={() => handleToggle(index)}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                aria-expanded={openIndex === index}
                aria-controls={`card-text-${index}`}
              >
                <img
                  src={getButtonImage(tipo, openIndex === index, index)}
                  alt={openIndex === index ? "Fechar" : "Abrir"}
                  className="w-[60px] h-[60px] filter hover:brightness-75 transition duration-200"
                />
              </button>

              {/* Texto Expandido Diretamente Após o Card no Mobile */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                {isMobile && (
                  <div className={`p-6 text-black ${colors.bg} shadow-lg rounded-[15px] w-[353px] transform transition-all duration-500 ease-in-out ${
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

      {/* Texto Expandido Separado dos Cards para Desktop */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          openIndex !== null && !isMobile ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        {openIndex !== null && !isMobile && (
          <div className={`p-6 text-black ${getColorClasses(cardsData[openIndex][3]).bg} shadow-lg rounded-[15px] max-w-[1200px] w-full transform transition-all duration-500 ease-in-out ${
            openIndex !== null ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-4'
          }`}>
            <div 
              className="w-full px-10 text-[18px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: cardsData[openIndex][4] }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;