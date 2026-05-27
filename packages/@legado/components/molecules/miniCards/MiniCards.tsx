import React, { useEffect, useState } from "react";
import topBlue from "../../../assets/miniCards/topBlue.png";
import topGreen from "../../../assets/miniCards/topGreen.png";
import closedBlue from "../../../assets/miniCards/closedBlue.png";
import closedBlueHover from "../../../assets/miniCards/closedBlueHover.png";
import closedGreen from "../../../assets/miniCards/closedGreen.png";
import closedGreenHover from "../../../assets/miniCards/closedGreenHover.png";
import openBlue from "../../../assets/miniCards/openBlue.png";
import openBlueHover from "../../../assets/miniCards/openBlueHover.png";
import openGreen from "../../../assets/miniCards/openGreen.png";
import openGreenHover from "../../../assets/miniCards/openGreenHover.png";

interface MiniCardProps {
  cardsData: [string, string, string, number][]; // Nome, Texto, ImagemURL, Tipo (1=blue, 2=green)
}

const MiniCards: React.FC<MiniCardProps> = ({ cardsData }) => {
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

  const getTopImage = (tipo: number) => {
    return tipo === 1 ? topBlue : topGreen;
  };

  const getButtonImage = (tipo: number, isOpen: boolean, index: number) => {
    const isHovered = hoveredButton === index;
    
    if (tipo === 1) {
      if (isOpen) {
        // Card aberto - mostra botão closed
        return isHovered ? closedBlueHover : closedBlue;
      } else {
        // Card fechado - mostra botão open
        return isHovered ? openBlueHover : openBlue;
      }
    } else {
      if (isOpen) {
        // Card aberto - mostra botão closed
        return isHovered ? closedGreenHover : closedGreen;
      } else {
        // Card fechado - mostra botão open
        return isHovered ? openGreenHover : openGreen;
      }
    }
  };

  const getBackgroundColor = (tipo: number) => {
    return tipo === 1 ? "bg-[#3374C0]" : "bg-[#2A6B13]";
  };

  const getTextBackgroundColor = (tipo: number) => {
    return tipo === 1 ? "bg-[#ACCFD5]" : "bg-[#BBD3B3]";
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Container Principal dos Cards - 2 por linha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 w-full max-w-[800px]">
        {cardsData.map(([nome, texto, imagemURL, tipo], index) => (
          <div key={index} className="flex flex-col items-center relative w-full">
            {/* Container do Card */}
            <div className={`${getBackgroundColor(tipo)} rounded-[20px] shadow-md w-full h-[430px] flex flex-col relative pb-8 justify-between`}>
              {/* Imagem Top (Blue ou Green) */}
              <div className="w-full">
                <img 
                  src={getTopImage(tipo)} 
                  alt="Top decoration" 
                  className="w-full h-auto rounded-t-[20px]"
                />
              </div>
              
              {/* Nome do Card */}
              <h3 className="text-center leading-none text-[20px] md:text-[24px] text-[#F9F5C1] px-4 mt-4 mb-4">
                {nome}
              </h3>
              
              {/* Imagem Principal do Card */}
              <div className="flex justify-center px-4 mb-3">
                <img 
                  src={imagemURL} 
                  alt={nome}
                  className="max-w-[300px] w-full h-auto object-contain"
                />
              </div>

              {/* Botão de Abrir/Fechar */}
              <button
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-25px] focus:outline-none z-10"
                onClick={() => handleToggle(index)}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                aria-expanded={openIndex === index}
                aria-controls={`card-text-${index}`}
              >
                <img 
                  src={getButtonImage(tipo, openIndex === index, index)}
                  alt={openIndex === index ? "Fechar" : "Abrir"}
                  className="w-[60px] h-[60px] transition-opacity duration-200"
                />
              </button>
            </div>

            {/* Texto Escondido Diretamente Após o Card */}
            {openIndex === index && (
              <div 
                className={`mt-8 p-6 text-black ${getTextBackgroundColor(tipo)} shadow-md rounded-[20px] w-full 
                  animate-[slideDown_0.4s_ease-out] opacity-0 
                  [animation-fill-mode:forwards]`}
                style={{
                  animation: 'slideDown 0.4s ease-out forwards'
                }}
              >
                <p className="text-[20px] text-center leading-relaxed">{texto}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCards;
