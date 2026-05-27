import React, { useState } from "react";
import ImageFallback from "../../atoms/imageFallback/ImageFallback";

interface ImageListItem {
  imgSrc: string;
  imgFallback: string;
  fonte: string;
  descricao: string;
  barColor: string;
  buttonColor: string;
  descriptionBoxColor: string;
  buttonColorActive?: string;
  isLast?: boolean
}

interface ImageListProps {
  items: ImageListItem[];
}

export const ImageList: React.FC<ImageListProps> = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleDescription = (index: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {items.map((item, index) => {
        const isExpanded = expandedItems.has(index);

        return (
        <div key={index} className="flex items-stretch">
      {/* Coluna esquerda: barra + bolinha */}
      <div className="flex flex-col items-center w-8">
        {/* Barra cresce com o conteúdo */}
        <div
          className="w-2 flex-1 transition-all duration-300 ease-in-out"
          style={{ backgroundColor: item.barColor }}
        />
        {/* Bolinha no fim */}
        {item.isLast && (
          <div
            className="w-8 h-8 rounded-full shrink-0"
            style={{ backgroundColor: item.barColor }}
          />
        )}
      </div>    
               
            {/* Conteúdo principal */}
            <div className="flex-1 pb-5" style={{ maxWidth: "1080px" }}>
              {/* Container da imagem com botão */}
              <div className="relative mb-3">
                <ImageFallback
                  src={item.imgSrc}
                  fallback={item.imgFallback}
                  maxWidth="1080px"
                />

                {/* Botão de expandir/recolher - Centralizado na parte inferior */}
                <button
                  onClick={() => toggleDescription(index)}
                  className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                  style={{
                    backgroundColor: isExpanded ? item.buttonColorActive : item.buttonColor,
                    width: "78px",
                    height: "78px",
                  }}
                  aria-label={
                    isExpanded ? "Recolher descrição" : "Expandir descrição"
                  }
                >
                  <svg
                    className={`w-10 h-10 text-[#F9F5C1] transform transition-all duration-300
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isExpanded ? (
                      <path
                        d="M2 12h20"
                        strokeWidth={5}
                      />
                    ) : (
                      <path
                        d="M2 12h20 M12 2v20"
                        strokeWidth={5}
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Fonte da imagem */}
              <p className="text-base ml-10 mb-6" style={{ fontSize: "16px" }}>
                {item.fonte}
              </p>

              {/* Caixa de descrição */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded
                    ? "max-h-[1080px] mb-10 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="p-6 rounded-lg"
                  style={{ backgroundColor: item.descriptionBoxColor }}
                >
                  <p className=" leading-relaxed whitespace-pre-line">
                    {item.descricao}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
