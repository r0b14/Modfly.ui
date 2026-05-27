import React, { useEffect, useState } from "react";
import bottomBlue from "../../../assets/cardFlip/bottomBlue.png";
import bottomGreen from "../../../assets/cardFlip/bottomGreen.png";
import button1 from "../../../assets/cardFlip/button1.png";
import button2 from "../../../assets/cardFlip/button2.png";

interface CardFlipProps {
  cardFlipData: [string, string, string, number, string][]; // Nome, Texto, ImagemURL, Tipo (1=blue, 2=green), TextoExpandido (HTML)
}

const CardFlip: React.FC<CardFlipProps> = ({ cardFlipData }) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBottomImage = (tipo: number) => {
    return tipo === 1 ? bottomBlue : bottomGreen;
  };

  const getFrontBgColor = (tipo: number) => {
    return tipo === 1 ? "bg-[#E1EFFF]" : "bg-[#DFF1D8]";
  };

  return (
    <div className="flex flex-col items-center px-4">
      {/* Container Principal dos CardFlips - Máximo 2 por linha */}
      <div className="flex md:flex-row flex-col flex-wrap gap-10 mb-10 justify-center relative max-w-[900px] w-full">
        {cardFlipData.map(
          ([nome, texto, imagemURL, tipo, textoExpandido], index) => {
            const isFlipped = flippedIndex === index;
            const isHovered = hoveredIndex === index;
            const frontBgColor = getFrontBgColor(tipo);

            return (
              <div
                key={index}
                className="flex flex-col items-center relative w-full md:w-[418px] perspective-1000"
              >
                {/* Container do CardFlip com efeito 3D */}
                <div
                  className="relative w-full md:w-[418px] h-[500px] md:h-[575px]"
                  style={{ perspective: "1000px" }}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                      isFlipped ? "rotate-y-180" : ""
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                    }}
                  >
                    {/* FRENTE DO CARD */}
                    <div
                      className={`absolute w-full h-full backface-hidden rounded-[40px] shadow-lg overflow-hidden ${frontBgColor} flex flex-col`}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      {/* Nome do CardFlip */}
                      <div className="px-4 md:px-6 pt-6 md:pt-8 pb-4 md:pb-6">
                        <h3 className="text-center leading-tight text-[20px] md:text-[28px] font-bold text-black">
                          {nome}
                        </h3>
                      </div>

                      {/* Imagem Central */}
                      <div className="flex justify-center px-2 md:px-4 flex-1 items-center">
                        <div className="w-full h-[180px] md:h-[274px]">
                          <img
                            src={imagemURL}
                            alt={nome}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Botão no lugar do texto */}
                      <div
                        className="px-4 md:px-10 pb-6 md:pb-10 pt-4 md:pt-6 flex justify-center cursor-pointer"
                        onClick={() => handleFlip(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <img
                          src={isHovered ? button2 : button1}
                          alt="Clique para ver mais"
                          className={`transition-all duration-300 ease-in-out w-auto h-[75px] md:h-[75px] ${
                            isHovered
                              ? "scale-110 rotate-3"
                              : "scale-100 rotate-0"
                          }`}
                        />
                      </div>
                    </div>

                    {/* VERSO DO CARD */}
                    <div
                      className="absolute w-full h-full backface-hidden rounded-[40px] shadow-lg bg-[#FAEBC2] cursor-pointer"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                      onClick={() => handleFlip(index)}
                    >
                      {/* Conteúdo do verso - Card todo clicável para voltar */}
                      <div className="p-4 md:p-8 h-full flex flex-col pb-[55px] md:pb-[70px] overflow-hidden rounded-[40px]">
                        <div
                          className="flex-grow overflow-y-auto text-black text-[13px] md:text-[16px] leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: textoExpandido }}
                        />
                      </div>

                      {/* Imagem Bottom (Blue ou Green) - Fora do overflow */}
                      <div className="absolute bottom-0 left-0 right-0 w-full h-auto">
                        <img
                          src={getBottomImage(tipo)}
                          alt="Bottom decoration"
                          className="w-full h-auto object-contain rounded-b-[40px]"
                          style={{ display: "block" }}
                        />
                      </div>
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

export default CardFlip;
