import React from "react";

// SVGs como componentes React (via SVGR/vite-plugin-svgr ou config equivalente)
import { ReactComponent as TopCheckSVGGreen } from "../../../assets/check/topCheckGreen.svg";
import { ReactComponent as BottomCheckSVGGreen } from "../../../assets/check/bottomCheckGreen.svg";
import { ReactComponent as TopCheckSVGBlue } from "../../../assets/check/topCheckBlue.svg";
import { ReactComponent as BottomCheckSVGBlue } from "../../../assets/check/bottomCheckBlue.svg";

// PNG para o ícone do check (decorativo)
import checkIcon from "../../../assets/check/check.png";

interface CheckProps {
  items?: React.ReactNode[];
  numberOfItems?: number;
  variant?: 1 | 2; // 1 = verde, 2 = azul
}

const Check: React.FC<CheckProps> = ({
  items = [<p>Exemplo de item</p>],
  numberOfItems = 1,
  variant = 1,
}) => {
  // Seleção dos SVGs por variante
  const TopCheckSVG = variant === 1 ? TopCheckSVGGreen : TopCheckSVGBlue;
  const BottomCheckSVG =
    variant === 1 ? BottomCheckSVGGreen : BottomCheckSVGBlue;
  const bgColor = variant === 1 ? "#F2EFD2" : "#E3F6FD";
  const maxWidth = variant === 1 ? "1060px" : "100%";

  // Limitação do número de links para evitar overflow visual
  if (numberOfItems < 1) numberOfItems = 1;
  if (numberOfItems > items.length) numberOfItems = items.length;

  // Responsividade baseada na contagem de links
  const getResponsiveStyles = () => {
    let fontSize = 18;
    let marginBottom = 32;
    let lineHeight = 1.5;
    if (numberOfItems > 7) {
      fontSize = 16;
      marginBottom = 24;
      lineHeight = 1.4;
    }
    if (numberOfItems > 10) {
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
      className={`relative w-full mx-auto sm:my-14 overflow-visible`}
      style={{ maxWidth }}
    >
      {/* SVG topo, decorativo, atrás do conteúdo */}

      <div
        className="absolute inset-0 -z-20"
        style={{ backgroundColor: bgColor }}
      />
      <div className="pointer-events-none absolute left-0 w-full -top-10 -z-10">
        <TopCheckSVG className="w-full h-auto" />
      </div>

      {/* Conteúdo sobre os SVGs */}
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
        <ul className="flex flex-col">
          {items.slice(0, numberOfItems).map((item, index) => (
            <li
              key={index}
              className="flex items-start"
              style={{
                marginBottom: index === numberOfItems - 1 ? 0 : marginBottom,
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
                {/* Ícone decorativo: alt vazio e aria-hidden */}
                <img
                  src={checkIcon}
                  alt=""
                  aria-hidden="true"
                  className="block"
                  style={{ width: 20, height: 20 }}
                />
              </div>

              {/* Link abre em nova aba com aviso para tecnologia assistiva e visuais invisíveis */}
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* SVG base, decorativo, atrás do conteúdo */}
      <div className="pointer-events-none absolute left-0 w-full bottom-0 sm:-bottom-14 -z-10">
        <BottomCheckSVG className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Check;
