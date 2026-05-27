import React, { useEffect, useState } from "react";

// Assets
import topBlue from "./assets/topBlue.svg";
import topGreen from "./assets/topGreen.svg";
import closedBlue from "./assets/closedBlue.svg";
import closedGreen from "./assets/closedGreen.svg";
import openBlue from "./assets/openBlue.svg";
import openGreen from "./assets/openGreen.svg";

export interface MiniCardProps {
  cardsData: [string, string, string, number][]; // Nome, Texto, ImagemURL, Tipo (1=blue, 2=green)
}

export const MiniCards: React.FC<MiniCardProps> = ({ cardsData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  const getButtonImage = (tipo: number, isOpen: boolean) => {
    if (tipo === 1) {
      return isOpen ? closedBlue : openBlue;
    } else {
      return isOpen ? closedGreen : openGreen;
    }
  };

  const getBackgroundColor = (tipo: number) => {
    return tipo === 1 ? "bg-[#3374C0]" : "bg-[#2A6B13]";
  };

  const getTextBackgroundColor = (tipo: number) => {
    return tipo === 1 ? "bg-[#ACCFD5]" : "bg-[#BBD3B3]";
  };

  return (
    <div className="flex flex-col items-center w-full my-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 w-full max-w-[800px]">
        {cardsData.map(([nome, texto, imagemURL, tipo], index) => (
          <div key={index} className="flex flex-col items-center relative w-full">
            <div className={`${getBackgroundColor(tipo)} rounded-[20px] shadow-md w-full h-[430px] flex flex-col relative pb-8 justify-between transition-all duration-300`}>
              <div className="w-full">
                <img 
                  src={getTopImage(tipo)} 
                  alt="" 
                  className="w-full h-auto rounded-t-[20px]"
                />
              </div>
              
              <h3 className="text-center leading-tight text-[20px] md:text-[24px] font-bold text-[#F9F5C1] px-4 mt-4 mb-4">
                {nome}
              </h3>
              
              <div className="flex justify-center px-4 mb-3 flex-1 items-center">
                <img 
                  src={imagemURL} 
                  alt={nome}
                  className="max-w-[200px] w-full h-auto object-contain"
                />
              </div>

              <button
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-30px] focus:outline-none z-10 transition-transform hover:scale-110 active:scale-95"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
              >
                <img 
                  src={getButtonImage(tipo, openIndex === index)}
                  alt={openIndex === index ? "Fechar" : "Abrir"}
                  className="w-[60px] h-[60px]"
                />
              </button>
            </div>

            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
                openIndex === index ? 'max-h-[500px] opacity-100 mt-10' : 'max-h-0 opacity-0 mt-0'
              }`}
            >
              <div className={`p-6 text-black ${getTextBackgroundColor(tipo)} shadow-md rounded-[20px] w-full text-center`}>
                <p className="text-[18px] md:text-[20px] leading-relaxed">{texto}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
