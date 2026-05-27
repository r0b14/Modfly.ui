import React, { useState, useEffect } from "react";

// SVGs como componentes React (via plugin SVGR)
import TopSVGBlue from "./assets/ParaRefletirAzul/Top.svg";
import BottomSVGBlue from "./assets/ParaRefletirAzul/Bottom.svg";
import TopSVGBlueMobileMenor from "./assets/ParaRefletirAzul/TopMobileMenor.svg";

import TopSVGGreen from "./assets/ParaRefletirVerde/Top.svg";
import BottomSVGGreen from "./assets/ParaRefletirVerde/Bottom.svg";
import TopSVGGreenMobileMenor from "./assets/ParaRefletirVerde/TopMobile.svg";

import TopQuestaoCentral from "./assets/QuestaoCentral/Top.svg";
import BottomQuestaoCentral from "./assets/QuestaoCentral/Bottom.svg";
import TopQuestaoCentralMobile from "./assets/QuestaoCentral/TopMobile.svg";
import BottomQuestaoCentralMobile from "./assets/QuestaoCentral/BottomMobile.svg";
import TopQuestaoCentralMobileMenor from "./assets/QuestaoCentral/TopMobileMenor.svg";
import BottomQuestaoCentralMobileMenor from "./assets/QuestaoCentral/BottomMobileMenor.svg";

import TopQuestaoCentralAzul from "./assets/QuestaoCentralAzul/Top.svg";
import BottomQuestaoCentralAzul from "./assets/QuestaoCentralAzul/Bottom.svg";
import TopQuestaoCentralAzulMobile from "./assets/QuestaoCentralAzul/TopMobile.svg";
import BottomQuestaoCentralAzulMobile from "./assets/QuestaoCentralAzul/BottomMobile.svg";
import TopQuestaoCentralAzulMobileMenor from "./assets/QuestaoCentralAzul/TopMobileMenor.svg";
import BottomQuestaoCentralAzulMobileMenor from "./assets/QuestaoCentralAzul/BottomMobileMenor.svg";

import TopSintetizando from "./assets/Sintetizando/Top.svg";
import BottomSintetizando from "./assets/Sintetizando/Bottom.svg";
import TopSintetizandoMobile from "./assets/Sintetizando/TopMobile.svg";
import BottomSintetizandoMobile from "./assets/Sintetizando/BottomMobile.svg";
import TopSintetizandoMobileMenor from "./assets/Sintetizando/TopMobileMenor.svg";
import BottomSintetizandoMobileMenor from "./assets/Sintetizando/BottomMobileMenor.svg";

import TopParaRefletirAmarelo from "./assets/ParaRefletirAmarelo/Top.svg";
import BottomParaRefletirAmarelo from "./assets/ParaRefletirAmarelo/Bottom.svg";
import TopParaRefletirAmareloMobile from "./assets/ParaRefletirAmarelo/TopMobile.svg";
import BottomParaRefletirAmareloMobile from "./assets/ParaRefletirAmarelo/BottomMobile.svg";
import TopParaRefletirAmareloMobileMenor from "./assets/ParaRefletirAmarelo/TopMobileMenor.svg";
import BottomParaRefletirAmareloMobileMenor from "./assets/ParaRefletirAmarelo/BottomMobileMenor.svg";

import TopQuestao from "./assets/QuestoesQueNaoQueremCalar/Top.svg";
import BottomQuestao from "./assets/QuestoesQueNaoQueremCalar/Bottom.svg";
import BottomQuestaoMobile from "./assets/QuestoesQueNaoQueremCalar/BottomMobile.svg";
import TopQuestaoMobileMenor from "./assets/QuestoesQueNaoQueremCalar/TopMobile.svg";
import BottomQuestaoMobileMenor from "./assets/QuestoesQueNaoQueremCalar/Bottom.svg";

import iconVariant8 from "./assets/Variant8/iconVariant8.svg";
import valeaPenaIcon from "./assets/ValeaPenaExplicar/valeaPenaTopo.svg";

export interface LearningBlockProps {
  children?: React.ReactNode;
  variant?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  maxWidth?: string | number;
  borderColor?: string;
}

export const LearningBlock: React.FC<LearningBlockProps> = ({
  children,
  variant = 1,
  maxWidth,
  borderColor = "#4A90E2",
}) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth >= 768;
  const isMobile = windowWidth < 768 && windowWidth >= 640;
  const isMobileMenor = windowWidth < 640;

  let TopSVG: React.FC<any> | undefined;
  let BottomSVG: React.FC<any> | undefined;
  let bgColor = "#CCF3BE";

  // Variant 9
  if (variant === 9) {
      return (
        <div className="max-w-[986px] mx-auto my-10">
          <div
            className="px-10 pt-3 pb-5 rounded-[20px]"
            style={{
              borderStyle: "solid",
              borderWidth: "20px",
              borderImageSlice: "181 187 181 168",
              borderImageWidth: "20px 20px 20px 20px",
              borderImageOutset: "0px 0px 0px 0px",
              borderImageRepeat: "stretch stretch",
              borderImageSource:
                'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5NyIgaGVpZ2h0PSIxMzkxIiB2aWV3Qm94PSIwIDAgMTc5NyAxMzkxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTcxNi4wNCAxMzc1LjVMMTI4LjU0NSAxMzcwLjVMMTUuMDQ0OSAxMjAzTDI1LjA0NDkgMTc3QzI1LjA0NDkgMTc3IDEwOS41NTMgMzcuMTgxNyAxMTQuNTQ1IDE1SDE3MDcuMDQiIHN0cm9rZT0iIzRBOTBFMiIgc3Ryb2tlLXdpZHRoPSIzMCIvPgo8cGF0aCBkPSJNMTcwMC41NCAxNUgxNzI0LjI1TDE3MjguODMgMTIyLjM3MkwxNzgxLjU0IDIwMlYxMDI5TDE3MDAuNTQgMTM2OCIgc3Ryb2tlPSIjNEE5MEUyIiBzdHJva2Utd2lkdGg9IjMwIi8+Cjwvc3ZnPgo=")',
              borderRadius: "20px",
            }}
          >
            {children}
          </div>
        </div>
      );
  }
  
  // Variant 8
  if (variant === 8) {
    return (
      <div className="max-w-[986px] mx-auto my-10">
        <div 
          className="px-10 pt-3 pb-5"
          style={{
            borderStyle: "solid",
            borderWidth: "20px",
            borderImageSlice: "35 44 32 38",
            borderImageSource: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDU3IiBoZWlnaHQ9IjYyOCIgdmlld0JveD0iMCAwIDQ1NyA2MjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MTAuMTA5IDEuMjVIMjI1LjY5Mkg0MS4yNzU5IiBzdHJva2U9IiMyQTZCMTMiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00Mi4yNzU5IDYyNi4yNUg0MS41NDI0TDEuMjc1ODggNTk0LjcxN0wyNC45NjgyIDI2Ljk3NTZDMjQuOTY4MiAyNi45NzU2IDMyLjE5ODcgMTEuNDI4OSAzNy4xOTA5IDEuMjVINDIuMjc1OSIgc3Ryb2tlPSIjMkE2QjEzIiBzdHJva2Utd2lkdGg9IjIuNSIvPgo8cGF0aCBkPSJNNDExLjEwOSA2MjYuMjVIMjI2LjY5Mkg0Mi4yNzU5IiBzdHJva2U9IiMyQTZCMTMiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00MDkuMjc2IDEuMjVINDEzLjE2Nkw0MjUuMzUyIDM3LjQxMTFMNDQ2LjY3NyA1MS42NzM3TDQ1NS4yNzYgNTM0Ljk3TDQxMy4xNjYgNjI2LjI1TDQwOS4yNzYgNjI2LjI1IiBzdHJva2U9IiMyQTZCMTMiIHN0cm9rZS13aWR0aD0iMi41Ii8+Cjwvc3ZnPgo=')"
          }}
        >
          <div className="flex items-center mb-5">
            <img src={iconVariant8} alt="" className="w-8 h-8" />
            <h3 className="text-[#2A6B13] ml-4 font-bold text-xl">Fica a dica:</h3>
          </div>
          <div className="text-[#333333] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    );
  }

  // Variant 10
  if (variant === 10) {
    return (
      <div className="max-w-[986px] mx-auto my-10">
        <div 
          className="px-10 pt-3 pb-5"
          style={{
            borderStyle: "solid",
            borderWidth: "20px",
            borderImageSlice: "35 44 32 38",
            borderImageSource: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDU3IiBoZWlnaHQ9IjYyOCIgdmlld0JveD0iMCAwIDQ1NyA2MjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MTAuMTA5IDEuMjVIMjI1LjY5Mkg0MS4yNzU5IiBzdHJva2U9IiNDNTdFOUYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00Mi4yNzU5IDYyNi4yNUg0MS41NDI0TDEuMjc1ODggNTk0LjcxN0wyNC45NjgyIDI2Ljk3NTZDMjQuOTY4MiAyNi45NzU2IDMyLjE5ODcgMTEuNDI4OSAzNy4xOTA5IDEuMjVINDIuMjc1OSIgc3Ryb2tlPSIjQzU3RTlGIiBzdHJva2Utd2lkdGg9IjIuNSIvPgo8cGF0aCBkPSJNNDExLjEwOSA2MjYuMjVIMjI2LjY5Mkg0Mi4yNzU5IiBzdHJva2U9IiNDNTdFOUYiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00MDkuMjc2IDEuMjVINDEzLjE2Nkw0MjUuMzUyIDM3LjQxMTFMNDQ2LjY3NyA1MS42NzM3TDQ1NS4yNzYgNTM0Ljk3TDQxMy4xNjYgNjI2LjI1TDQwOS4yNzYgNjI2LjI1IiBzdHJva2U9IiNDNTdFOUYiIHN0cm9rZS13aWR0aD0iMi41Ii8+Cjwvc3ZnPgo=')"
          }}
        >
          <div className="flex items-center mb-5">
            <img src={valeaPenaIcon} alt="" className="w-8 h-8" />
            <h3 className="text-[#C57E9F] ml-4 font-bold text-xl">Vale a pena explicar:</h3>
          </div>
          <div className="text-[#333333] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    );
  }

  // Common Variants
  switch (variant) {
    case 1:
      TopSVG = isMobileMenor ? TopSVGBlueMobileMenor : TopSVGBlue;
      BottomSVG = BottomSVGBlue;
      bgColor = "#BDDEA1"; // Corrigido conforme legacy
      break;
    case 2:
      TopSVG = isMobileMenor ? TopSVGGreenMobileMenor : TopSVGGreen;
      BottomSVG = BottomSVGGreen;
      bgColor = "#CCF3BE";
      break;
    case 3:
      TopSVG = isMobileMenor ? TopQuestaoCentralMobileMenor : isMobile ? TopQuestaoCentralMobile : TopQuestaoCentral;
      BottomSVG = isMobileMenor ? BottomQuestaoCentralMobileMenor : isMobile ? BottomQuestaoCentralMobile : BottomQuestaoCentral;
      bgColor = "#BDDEA1";
      break;
    case 4:
      TopSVG = isMobileMenor ? TopSintetizandoMobileMenor : isMobile ? TopSintetizandoMobile : TopSintetizando;
      BottomSVG = isMobileMenor ? BottomSintetizandoMobileMenor : isMobile ? BottomSintetizandoMobile : BottomSintetizando;
      bgColor = "#FFEBE3";
      break;
    case 5:
      TopSVG = isMobileMenor ? TopParaRefletirAmareloMobileMenor : isMobile ? TopParaRefletirAmareloMobile : TopParaRefletirAmarelo;
      BottomSVG = isMobileMenor ? BottomParaRefletirAmareloMobileMenor : isMobile ? BottomParaRefletirAmareloMobile : BottomParaRefletirAmarelo;
      bgColor = "#FFF5D4";
      break;
    case 6:
      TopSVG = isMobileMenor ? TopQuestaoCentralAzulMobileMenor : isMobile ? TopQuestaoCentralAzulMobile : TopQuestaoCentralAzul;
      BottomSVG = isMobileMenor ? BottomQuestaoCentralAzulMobileMenor : isMobile ? BottomQuestaoCentralAzulMobile : BottomQuestaoCentralAzul;
      bgColor = "#E3F4FF";
      break;
    case 7:
      TopSVG = isMobileMenor ? TopQuestaoMobileMenor : TopQuestao;
      BottomSVG = isMobileMenor ? BottomQuestaoMobileMenor : isMobile ? BottomQuestaoMobile : BottomQuestao;
      bgColor = "#E3F4FF";
      break;
    default:
      return null;
  }

  if (!BottomSVG) return null;

  const finalContainerStyle: React.CSSProperties = {
    maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
    margin: "0 auto",
  };

  return (
    <div className="w-full mb-20 px-4" style={finalContainerStyle}>
      <div className="relative w-full">
        {TopSVG && (
          <div className="absolute top-0 left-0 right-0 z-10">
            <TopSVG className="w-full h-auto block" preserveAspectRatio="none" />
          </div>
        )}

        <div className="relative z-0 md:pt-20 sm:pt-20 pt-14">
          <div
            className="pb-0 w-full lg:pt-14 lg:mt-2 md:pt-10 md:mt-0 sm:mt-[-10px] sm:pt-8 mt-8 pt-14 px-8"
            style={{ backgroundColor: bgColor }}
          >
            <div className="text-[#333333] leading-relaxed">
              {children}
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <BottomSVG
            className="w-full block"
            preserveAspectRatio="none"
          />
        </div>
      </div>
    </div>
  );
};
