import React, { useState } from "react";

export { CardsLegacy } from "./legacy";
export type { CardsLegacyProps } from "./legacy";

// Redesign EDC (2026-07): card colorido com faixa abstrata no topo, ilustração
// e botão +/− que revela um painel de texto abaixo (o "puxadinho" do Figma).
// SVGs renderizados como componentes React via plugin SVGR configurado no tsup.
import AbstratoGreen from "./assets/abstratoGreen.svg";
import AbstratoBlue from "./assets/abstratoBlue.svg";
import PlusGreen from "./assets/plusGreen.svg";
import PlusGreenHover from "./assets/plusGreenHover.svg";
import PlusBlue from "./assets/plusBlue.svg";
import PlusBlueHover from "./assets/plusBlueHover.svg";
import MinusGreen from "./assets/minusGreen.svg";
import MinusGreenHover from "./assets/minusGreenHover.svg";
import MinusBlue from "./assets/minusBlue.svg";
import MinusBlueHover from "./assets/minusBlueHover.svg";

type Svg = React.FC<React.SVGProps<SVGSVGElement>>;

const SCHEME: Record<
  "green" | "blue",
  { card: string; panel: string; Band: Svg; Plus: Svg; PlusHover: Svg; Minus: Svg; MinusHover: Svg }
> = {
  green: {
    card: "#2A6B13",
    panel: "#BBD3B3",
    Band: AbstratoGreen,
    Plus: PlusGreen,
    PlusHover: PlusGreenHover,
    Minus: MinusGreen,
    MinusHover: MinusGreenHover,
  },
  blue: {
    card: "#3374C0",
    panel: "#ACCFD5",
    Band: AbstratoBlue,
    Plus: PlusBlue,
    PlusHover: PlusBlueHover,
    Minus: MinusBlue,
    MinusHover: MinusBlueHover,
  },
};

export interface CardsItem {
  title: string;
  imageUrl: string;
  colorScheme?: "green" | "blue";
  /** Conteúdo revelado no painel abaixo do card. Strings são renderizadas como HTML. */
  content: React.ReactNode | string;
}

export interface CardsProps {
  items: CardsItem[];
}

export const Cards: React.FC<CardsProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center px-4 w-full my-10">
      <div className="flex md:flex-row flex-col flex-wrap gap-10 justify-center items-start max-w-[980px] w-full">
        {items.map(({ title, imageUrl, colorScheme = "green", content }, index) => {
          const scheme = SCHEME[colorScheme];
          const isOpen = openIndex === index;
          const isHovered = hoveredIndex === index;
          const ButtonIcon = isOpen
            ? isHovered ? scheme.MinusHover : scheme.Minus
            : isHovered ? scheme.PlusHover : scheme.Plus;

          return (
            <div key={index} className="w-full md:w-[444px] flex flex-col">
              {/* Card */}
              <div
                className="relative z-10 rounded-lg shadow-md overflow-hidden flex flex-col"
                style={{ background: scheme.card }}
              >
                <scheme.Band
                  aria-hidden="true"
                  className="absolute top-0 left-0 w-full h-auto pointer-events-none"
                />

                <h3 className="relative text-center font-bold text-white text-[20px] md:text-[28px] leading-tight pt-6 md:pt-8 px-4 md:px-6">
                  {title}
                </h3>

                <div className="relative flex justify-center items-center flex-1 px-4 py-4 md:py-6">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-[180px] md:h-[274px] object-contain"
                  />
                </div>

                <button
                  type="button"
                  className="relative flex justify-center pb-5 md:pb-6 cursor-pointer bg-transparent border-none w-full focus:outline-none"
                  onClick={() => handleToggle(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  aria-expanded={isOpen}
                >
                  <ButtonIcon
                    aria-hidden="true"
                    className={`w-[64px] h-[64px] md:w-[78px] md:h-[78px] transition-transform duration-300 ease-in-out ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                  />
                </button>
              </div>

              {/* Puxadinho */}
              <div
                className="-mt-8 overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? 600 : 0 }}
              >
                <div
                  className="rounded-lg px-8 pb-4 pt-[44px] text-black text-[18px] md:text-[22px] leading-[1.5] text-center"
                  style={{ background: scheme.panel }}
                >
                  {typeof content === "string" ? (
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                  ) : (
                    content
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
