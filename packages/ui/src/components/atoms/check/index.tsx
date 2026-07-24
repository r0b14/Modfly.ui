import React from "react";

// SVGs como componentes React (via plugin SVGR configurado no tsup)
import TopCheckSVGGreen from "./assets/topCheckGreen.svg";
import BottomCheckSVGGreen from "./assets/bottomCheckGreen.svg";
import TopCheckSVGBlue from "./assets/topCheckBlue.svg";
import BottomCheckSVGBlue from "./assets/bottomCheckBlue.svg";

// Ícone do check (SVG renderizado como componente React via plugin SVGR)
import CheckIcon from "./assets/checkIcon.svg";

export interface CheckProps {
  items?: React.ReactNode[];
  numberOfItems?: number;
  variant?: 1 | 2; // 1 = verde, 2 = azul
}

export const Check: React.FC<CheckProps> = ({
  items = [<p key="1">Exemplo de item</p>],
  numberOfItems = 1,
  variant = 1,
}) => {
  // Seleção dos SVGs por variante
  const TopCheckSVG = variant === 1 ? TopCheckSVGGreen : TopCheckSVGBlue;
  const BottomCheckSVG = variant === 1 ? BottomCheckSVGGreen : BottomCheckSVGBlue;
  
  const bgColor = variant === 1 ? "#F2EFD2" : "#E3F6FD";
  const maxWidth = variant === 1 ? "1060px" : "100%";

  // Ajuste do número de itens
  const effectiveNumberOfItems = Math.max(1, Math.min(numberOfItems, items.length));

  // Responsividade baseada na contagem de itens
  const getResponsiveStyles = () => {
    let fontSize = 18;
    let marginBottom = 32;
    let lineHeight = 1.5;
    if (effectiveNumberOfItems > 7) {
      fontSize = 16;
      marginBottom = 24;
      lineHeight = 1.4;
    }
    if (effectiveNumberOfItems > 10) {
      fontSize = 15;
      marginBottom = 18;
      lineHeight = 1.3;
    }
    return { fontSize, marginBottom, lineHeight };
  };

  const { fontSize, marginBottom, lineHeight } = getResponsiveStyles();

  // Altura base estimada para compensar os SVGs decorativos
  const estimatedSvgHeight = 120;

  return (
    <div
      className="relative w-full mx-auto sm:my-14 overflow-visible"
      style={{ maxWidth }}
    >
      {/* Background Color */}
      <div
        className="absolute inset-0 -z-20"
        style={{ backgroundColor: bgColor }}
      />
      
      {/* Top SVG Decoration */}
      <div className="pointer-events-none absolute left-0 w-full -top-10 -z-10">
        <TopCheckSVG className="w-full h-auto" />
      </div>

      {/* Content */}
      <div
        className="relative bg-transparent px-10 sm:px-20 lg:px-28 z-10"
        style={{
          fontSize: `${fontSize}px`,
          lineHeight,
          paddingTop: estimatedSvgHeight / 2,
          paddingBottom: estimatedSvgHeight / 2,
          marginTop: estimatedSvgHeight / -10,
          marginBottom: estimatedSvgHeight / -10,
        }}
      >
        <ul className="flex flex-col m-0 p-0 list-none">
          {items.slice(0, effectiveNumberOfItems).map((item, index) => (
            <li
              key={index}
              className="flex items-start"
              style={{
                marginBottom: index === effectiveNumberOfItems - 1 ? 0 : marginBottom,
                minHeight: 48,
              }}
            >
              <div
                className="flex items-center justify-center rounded-lg mr-6"
                style={{
                  width: 32,
                  height: 30,
                  backgroundColor: "#295A8F",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                <CheckIcon
                  aria-hidden="true"
                  className="block w-5 h-5"
                />
              </div>
              <div className="flex-1">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom SVG Decoration */}
      <div className="pointer-events-none absolute left-0 w-full bottom-0 sm:-bottom-14 -z-10">
        <BottomCheckSVG className="w-full h-auto" />
      </div>
    </div>
  );
};
