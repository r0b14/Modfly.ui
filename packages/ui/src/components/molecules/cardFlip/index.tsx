import React, { useState } from "react";

export { CardFlipLegacy } from "./legacy";
export type { CardFlipLegacyProps } from "./legacy";

// Redesign EDC (2026-07): frente clara com ilustração e botão chevron (anel cresce
// no hover), verso creme com texto e faixa ondulada no rodapé. SVGs renderizados
// como componentes React via plugin SVGR configurado no tsup.
import WaveBlue from "./assets/waveBlue.svg";
import WaveGreen from "./assets/waveGreen.svg";
import ChevronButton from "./assets/chevronButton.svg";
import ChevronButtonHover from "./assets/chevronButtonHover.svg";

type Svg = React.FC<React.SVGProps<SVGSVGElement>>;

const SCHEME: Record<"blue" | "green", { front: string; Wave: Svg }> = {
  blue: { front: "#E1EFFF", Wave: WaveBlue },
  green: { front: "#DFF1D8", Wave: WaveGreen },
};

const BACK_BG = "#FAEBC2";

export interface CardFlipItem {
  title: string;
  imageUrl: string;
  colorScheme?: "blue" | "green";
  /** Conteúdo do verso do cartão. Strings são renderizadas como HTML. */
  content: React.ReactNode | string;
}

export interface CardFlipProps {
  items: CardFlipItem[];
}

export const CardFlip: React.FC<CardFlipProps> = ({ items }) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center px-4 w-full my-10">
      <div className="flex md:flex-row flex-col flex-wrap gap-10 mb-10 justify-center relative max-w-[900px] w-full">
        {items.map(({ title, imageUrl, colorScheme = "blue", content }, index) => {
          const scheme = SCHEME[colorScheme];
          const isFlipped = flippedIndex === index;
          const isHovered = hoveredIndex === index;
          const ButtonIcon = isHovered ? ChevronButtonHover : ChevronButton;

          return (
            <div
              key={index}
              className="flex flex-col items-center relative w-full md:w-[418px]"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-[500px] md:h-[575px] transition-transform duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* FRENTE DO CARD */}
                <div
                  className="absolute w-full h-full rounded-[40px] shadow-lg overflow-hidden flex flex-col"
                  style={{ backfaceVisibility: "hidden", background: scheme.front }}
                >
                  <div className="px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6">
                    <h3 className="text-center leading-tight text-[20px] md:text-[24px] font-bold text-black">
                      {title}
                    </h3>
                  </div>

                  <div className="flex justify-center px-6 md:px-8 flex-1 items-center">
                    <div className="w-full h-[180px] md:h-[274px]">
                      <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="pb-6 md:pb-8 pt-4 flex justify-center cursor-pointer bg-transparent border-none w-full focus:outline-none"
                    onClick={() => handleFlip(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-expanded={isFlipped}
                  >
                    <ButtonIcon
                      aria-hidden="true"
                      className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] transition-transform duration-300 ease-in-out"
                    />
                  </button>
                </div>

                {/* VERSO DO CARD */}
                <div
                  className="absolute w-full h-full rounded-[40px] shadow-lg cursor-pointer overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: BACK_BG,
                  }}
                  onClick={() => handleFlip(index)}
                >
                  <div className="p-8 h-full flex flex-col pb-[110px]">
                    <div className="flex-grow overflow-y-auto text-black text-[14px] md:text-[16px] leading-relaxed">
                      {typeof content === "string" ? (
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                      ) : (
                        content
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 w-full">
                    <scheme.Wave
                      aria-hidden="true"
                      preserveAspectRatio="none"
                      className="w-full h-auto block rounded-b-[40px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
