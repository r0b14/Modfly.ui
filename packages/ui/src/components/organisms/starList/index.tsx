import React from "react";
import starIcon from "./assets/star.svg";

export interface StarListItem {
  textBold: string;
  text: string;
}

export interface StarListProps {
  items: StarListItem[];
  lineColor?: string;
}

export const StarList: React.FC<StarListProps> = ({ 
  items, 
  lineColor = "#6CA3E8" 
}) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-col items-center w-full max-w-[1250px] mx-auto my-10">
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;
        
        // Calcular larguras de borda variadas como no original
        const borderWidths = ["12%", "14%", "17%", "10%", "17%", "10%", "15%", "9%"];
        const currentWidth = borderWidths[index % borderWidths.length];

        return (
          <div 
            key={index} 
            className={`flex items-center w-full ${isFirst ? "mb-[-50px]" : ""} ${isLast ? "mt-[-52px]" : ""}`}
          >
            <div className="flex flex-col items-start w-full">
              {/* Container da linha vertical e conteúdo */}
              <div className={`flex items-center w-full ${!isFirst && !isLast ? "sm:border-l-4 border-dashed pt-10 pb-10" : ""}`}
                   style={{ borderLeftColor: lineColor }}>
                
                {/* Linha horizontal tracejada */}
                <div 
                  className="sm:border-b-4 border-dashed hidden sm:block" 
                  style={{ width: currentWidth, borderBottomColor: lineColor }}
                />
                
                {/* Estrela e Texto */}
                <div className="flex justify-center items-center ml-8">
                  <img
                    src={starIcon}
                    alt=""
                    className="w-10 h-10 m-4 ml-[-35px] shrink-0"
                  />
                  <p className="text-[#333333] leading-relaxed">
                    <strong className="text-[#285C93]">{item.textBold}</strong> {item.text}
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
