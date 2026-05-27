import React, { useEffect, useState } from "react";

// Assets
import bottomBlue from "./assets/bottomBlue.svg";
import bottomGreen from "./assets/bottomGreen.svg";
import button1 from "./assets/button1.svg";
import button2 from "./assets/button2.svg";

export interface CardFlipProps {
  cardFlipData: [string, string, string, number, string][]; // Nome, Texto, ImagemURL, Tipo (1=blue, 2=green), TextoExpandido (HTML)
}

export const CardFlip: React.FC<CardFlipProps> = ({ cardFlipData }) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const getBottomImage = (tipo: number) => {
    return tipo === 1 ? bottomBlue : bottomGreen;
  };

  const getFrontBgColor = (tipo: number) => {
    return tipo === 1 ? "bg-[#E1EFFF]" : "bg-[#DFF1D8]";
  };

  return (
    <div className="flex flex-col items-center px-4 w-full my-10">
      <div className="flex md:flex-row flex-col flex-wrap gap-10 mb-10 justify-center relative max-w-[900px] w-full">
        {cardFlipData.map(
          ([nome, texto, imagemURL, tipo, textoExpandido], index) => {
            const isFlipped = flippedIndex === index;
            const isHovered = hoveredIndex === index;
            const frontBgColor = getFrontBgColor(tipo);

            return (
              <div
                key={index}
                className="flex flex-col items-center relative w-full md:w-[418px]"
                style={{ perspective: "1000px" }}
              >
                <div
                  className={`relative w-full h-[500px] md:h-[575px] transition-transform duration-700`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRENTE DO CARD */}
                  <div
                    className={`absolute w-full h-full rounded-[40px] shadow-lg overflow-hidden ${frontBgColor} flex flex-col`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="px-4 md:px-6 pt-6 md:pt-8 pb-4 md:pb-6">
                      <h3 className="text-center leading-tight text-[20px] md:text-[28px] font-bold text-black">
                        {nome}
                      </h3>
                    </div>

                    <div className="flex justify-center px-2 md:px-4 flex-1 items-center">
                      <div className="w-full h-[180px] md:h-[274px]">
                        <img
                          src={imagemURL}
                          alt={nome}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>

                    <div
                      className="px-4 md:px-10 pb-6 md:pb-10 pt-4 md:pt-6 flex justify-center cursor-pointer"
                      onClick={() => handleFlip(index)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <img
                        src={isHovered ? button2 : button1}
                        alt="Clique para ver mais"
                        className={`transition-all duration-300 ease-in-out w-auto h-[75px] ${
                          isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
                        }`}
                      />
                    </div>
                  </div>

                  {/* VERSO DO CARD */}
                  <div
                    className="absolute w-full h-full rounded-[40px] shadow-lg bg-[#FAEBC2] cursor-pointer overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                    onClick={() => handleFlip(index)}
                  >
                    <div className="p-8 h-full flex flex-col pb-[70px]">
                      <div
                        className="flex-grow overflow-y-auto text-black text-[14px] md:text-[16px] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: textoExpandido }}
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 w-full">
                      <img
                        src={getBottomImage(tipo)}
                        alt=""
                        className="w-full h-auto block rounded-b-[40px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
