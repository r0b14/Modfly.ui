import React, { useState, useEffect } from "react";

import { ReactComponent as TopSVGBlue } from "../../../assets/learningBlock/ParaRefletirAzul/Top.svg";
import { ReactComponent as BottomSVGBlue } from "../../../assets/learningBlock/ParaRefletirAzul/Bottom.svg";
import { ReactComponent as TopSVGBlueMobile } from "../../../assets/learningBlock/ParaRefletirAzul/Top.svg";
import { ReactComponent as BottomSVGBlueMobile } from "../../../assets/learningBlock/ParaRefletirAzul/Bottom.svg";
import { ReactComponent as TopSVGBlueMobileMenor } from "../../../assets/learningBlock/ParaRefletirAzul/TopMobileMenor.svg";
import { ReactComponent as BottomSVGBlueMobileMenor } from "../../../assets/learningBlock/ParaRefletirAzul/Bottom.svg";

import { ReactComponent as TopSVGGreen } from "../../../assets/learningBlock/ParaRefletirVerde/Top.svg";
import { ReactComponent as BottomSVGGreen } from "../../../assets/learningBlock/ParaRefletirVerde/Bottom.svg";
import { ReactComponent as TopSVGGreenMobileMenor } from "../../../assets/learningBlock/ParaRefletirVerde/TopMobile.svg";
import { ReactComponent as BottomSVGGreenMobileMenor } from "../../../assets/learningBlock/ParaRefletirVerde/Bottom.svg";

import { ReactComponent as TopQuestaoCentral } from "../../../assets/learningBlock/QuestaoCentral/Top.svg";
import { ReactComponent as BottomQuestaoCentral } from "../../../assets/learningBlock/QuestaoCentral/Bottom.svg";
import { ReactComponent as TopQuestaoCentralMobile } from "../../../assets/learningBlock/QuestaoCentral/TopMobile.svg";
import { ReactComponent as BottomQuestaoCentralMobile } from "../../../assets/learningBlock/QuestaoCentral/BottomMobile.svg";
import { ReactComponent as TopQuestaoCentralMobileMenor } from "../../../assets/learningBlock/QuestaoCentral/TopMobileMenor.svg";
import { ReactComponent as BottomQuestaoCentralMobileMenor } from "../../../assets/learningBlock/QuestaoCentral/BottomMobileMenor.svg";

import { ReactComponent as TopQuestaoCentralAzul } from "../../../assets/learningBlock/QuestaoCentralAzul/Top.svg";
import { ReactComponent as BottomQuestaoCentralAzul } from "../../../assets/learningBlock/QuestaoCentralAzul/Bottom.svg";
import { ReactComponent as TopQuestaoCentralAzulMobile } from "../../../assets/learningBlock/QuestaoCentralAzul/TopMobile.svg";
import { ReactComponent as BottomQuestaoCentralAzulMobile } from "../../../assets/learningBlock/QuestaoCentralAzul/BottomMobile.svg";
import { ReactComponent as TopQuestaoCentralAzulMobileMenor } from "../../../assets/learningBlock/QuestaoCentralAzul/TopMobileMenor.svg";
import { ReactComponent as BottomQuestaoCentralAzulMobileMenor } from "../../../assets/learningBlock/QuestaoCentralAzul/BottomMobileMenor.svg";

import { ReactComponent as TopSintetizando } from "../../../assets/learningBlock/Sintetizando/Top.svg";
import { ReactComponent as BottomSintetizando } from "../../../assets/learningBlock/Sintetizando/Bottom.svg";
import { ReactComponent as TopSintetizandoMobile } from "../../../assets/learningBlock/Sintetizando/TopMobile.svg";
import { ReactComponent as BottomSintetizandoMobile } from "../../../assets/learningBlock/Sintetizando/BottomMobile.svg";
import { ReactComponent as TopSintetizandoMobileMenor } from "../../../assets/learningBlock/Sintetizando/TopMobileMenor.svg";
import { ReactComponent as BottomSintetizandoMobileMenor } from "../../../assets/learningBlock/Sintetizando/BottomMobileMenor.svg";

import { ReactComponent as TopParaRefletirAmarelo } from "../../../assets/learningBlock/ParaRefletirAmarelo/Top.svg";
import { ReactComponent as BottomParaRefletirAmarelo } from "../../../assets/learningBlock/ParaRefletirAmarelo/Bottom.svg";
import { ReactComponent as TopParaRefletirAmareloMobile } from "../../../assets/learningBlock/ParaRefletirAmarelo/TopMobile.svg";
import { ReactComponent as BottomParaRefletirAmareloMobile } from "../../../assets/learningBlock/ParaRefletirAmarelo/BottomMobile.svg";
import { ReactComponent as TopParaRefletirAmareloMobileMenor } from "../../../assets/learningBlock/ParaRefletirAmarelo/TopMobileMenor.svg";
import { ReactComponent as BottomParaRefletirAmareloMobileMenor } from "../../../assets/learningBlock/ParaRefletirAmarelo/BottomMobileMenor.svg";

import { ReactComponent as TopQuestao } from "../../../assets/learningBlock/QuestoesQueNaoQueremCalar/Top.svg";
import { ReactComponent as BottomQuestao } from "../../../assets/learningBlock/QuestoesQueNaoQueremCalar/Bottom.svg";
import { ReactComponent as BottomQuestaoMobile } from "../../../assets/learningBlock/QuestoesQueNaoQueremCalar/BottomMobile.svg";
import { ReactComponent as TopQuestaoMobileMenor } from "../../../assets/learningBlock/QuestoesQueNaoQueremCalar/TopMobile.svg";
import { ReactComponent as BottomQuestaoMobileMenor } from "../../../assets/learningBlock/QuestoesQueNaoQueremCalar/Bottom.svg";



import iconVariant8 from "../../../assets/learningBlock/Variant8/iconVariant8.svg";
import valeaPenaIcon from "../../../assets/learningBlock/ValeaPenaExplicar/valeaPenaTopo.svg";
import "./LearningBlock.css";

type LearningBlockProps = {
  children?: React.ReactNode;
  variant?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  maxWidth?: string | number; // ex: "600px" ou 600
  /** Optional border color used by variant 9 (e.g. '#4A90E2') */
  borderColor?: string;
};

const LearningBlock = ({
  children,
  variant = 1,
  maxWidth,
  borderColor = "#4A90E2",
}: LearningBlockProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  {
    /* EDC */
  }
  // Variante 9: similar ao variant 8, mas mostra apenas as bordas (usa borderLearningBlock)
  if (variant === 9) {
      return (
        <div className="max-w-[986px] mx-auto">
          {/* decorative SVG border using border-image as requested */}
          <div
            className="px-10 pt-3 pb-5 rounded-[20px]"
            style={{
              borderStyle: "solid",
              borderWidth: "20px",
              borderImageSlice: "27 45 27 27",
              borderImageWidth: "20px 20px 20px 20px",
              borderImageOutset: "0px 0px 0px 0px",
              borderImageRepeat: "stretch stretch",
              borderImageSource:
                'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMyIgaGVpZ2h0PSI1NTUiIHZpZXdCb3g9IjAgMCAxMjAzIDU1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTY5LjkxNjggNTUzLjI1SDQxLjU0NzhMMS4yODEyNSA1MjUuNEwyNC45NzM2IDIzLjk3MDhDMjQuOTczNiAyMy45NzA4IDMyLjIwNDEgMTAuMjQgMzcuMTk2MyAxLjI1SDY5Ljk0NjMiIHN0cm9rZT0iI0ZBQTVDQyIgc3Ryb2tlLXdpZHRoPSIyLjUiLz4KPHBhdGggZD0iTTY5Ljk0NjMgMS4yNVYyLjVIMTExOC45OVYxLjI1VjBINjkuOTQ2M1YxLjI1Wk0xMTE4Ljk5IDU1My4yNVY1NTJINjkuOTQ2M1Y1NTMuMjVWNTU0LjVIMTExOC45OVY1NTMuMjVaIiBmaWxsPSIjRkFBNUNDIi8+CjxwYXRoIGQ9Ik0xMTE4Ljk5IDEuMjVIMTE0Mi42OUwxMTY1LjU3IDMzLjQxODZMMTE4OS4zMiA0NS43ODQyTDEyMDEuMjggNDcyLjYzMUwxMTQyLjY5IDU1My4yNUgxMTE5LjA3IiBzdHJva2U9IiNGQUE1Q0MiIHN0cm9rZS13aWR0aD0iMi41Ii8+Cjwvc3ZnPgo=")',
              borderRadius: "20px",
            }}
          >
            {children}
          </div>
        </div>
      );
  }
  
  if (variant === 8) {
    return (
      <div className="max-w-[986px] mx-auto">
        <div className=" borderLearningBlock px-10 pt-3 pb-5">
          <div className="flex items-center mb-5">
            <img src={iconVariant8} />
            <h3 className="text-[#2A6B13] ml-4 font-bold">Fica a dica:</h3>
          </div>
          {children}
        </div>
      </div>
    );
  }

  // Variante 10: Vale a pena explicar — reutiliza layout do variant 8 mas com borda rosa
  if (variant === 10) {
    return (
      <div className="max-w-[986px] mx-auto">
        <div className=" borderLearningBlockPink px-10 pt-3 pb-5">
          <div className="flex items-center mb-5">
            <img src={valeaPenaIcon} />
            <h3 className="text-[#C57E9F] ml-4 font-bold">Vale a pena explicar:</h3>
          </div>
          {children}
        </div>
      </div>
    );
  }


  {
    /* Others */
  }

  if (variant === 1) {
    if (isDesktop) {
      TopSVG = TopSVGBlue;
      BottomSVG = BottomSVGBlue;
    } else if (isMobile) {
      TopSVG = TopSVGBlueMobile;
      BottomSVG = BottomSVGBlueMobile;
    } else if (isMobileMenor) {
      TopSVG = TopSVGBlueMobileMenor;
      BottomSVG = BottomSVGBlueMobileMenor;
    }
  } else if (variant === 2) {
    if (isDesktop) {
      TopSVG = TopSVGGreen;
      BottomSVG = BottomSVGGreen;
    } else if (isMobile) {
      TopSVG = TopSVGGreen;
      BottomSVG = BottomSVGGreen;
    } else if (isMobileMenor) {
      TopSVG = TopSVGGreenMobileMenor;
      BottomSVG = BottomSVGGreenMobileMenor;
    }
  } else if (variant === 3) {
    if (isDesktop) {
      TopSVG = TopQuestaoCentral;
      BottomSVG = BottomQuestaoCentral;
      bgColor = "#BDDEA1";
    } else if (isMobile) {
      TopSVG = TopQuestaoCentralMobile;
      BottomSVG = BottomQuestaoCentralMobile;
      bgColor = "#BDDEA1";
    } else if (isMobileMenor) {
      TopSVG = TopQuestaoCentralMobileMenor;
      BottomSVG = BottomQuestaoCentralMobileMenor;
      bgColor = "#BDDEA1";
    }
  } else if (variant === 4) {
    if (isDesktop) {
      TopSVG = TopSintetizando;
      BottomSVG = BottomSintetizando;
      bgColor = "#FFEBE3";
    } else if (isMobile) {
      TopSVG = TopSintetizandoMobile;
      BottomSVG = BottomSintetizandoMobile;
      bgColor = "#FFEBE3";
    } else if (isMobileMenor) {
      TopSVG = TopSintetizandoMobileMenor;
      BottomSVG = BottomSintetizandoMobileMenor;
      bgColor = "#FFEBE3";
    }
  } else if (variant === 5) {
    if (isDesktop) {
      TopSVG = TopParaRefletirAmarelo;
      BottomSVG = BottomParaRefletirAmarelo;
      bgColor = "#FFF5D4";
    } else if (isMobile) {
      TopSVG = TopParaRefletirAmareloMobile;
      BottomSVG = BottomParaRefletirAmareloMobile;
      bgColor = "#FFF5D4";
    } else if (isMobileMenor) {
      TopSVG = TopParaRefletirAmareloMobileMenor;
      BottomSVG = BottomParaRefletirAmareloMobileMenor;
      bgColor = "#FFF5D4";
    }
  } else if (variant === 6) {
    if (isDesktop) {
      TopSVG = TopQuestaoCentralAzul;
      BottomSVG = BottomQuestaoCentralAzul;
      bgColor = "#E3F4FF";
    } else if (isMobile) {
      TopSVG = TopQuestaoCentralAzulMobile;
      BottomSVG = BottomQuestaoCentralAzulMobile;
      bgColor = "#E3F4FF";
    } else if (isMobileMenor) {
      TopSVG = TopQuestaoCentralAzulMobileMenor;
      BottomSVG = BottomQuestaoCentralAzulMobileMenor;
      bgColor = "#E3F4FF";
    }
  } else if (variant === 7) {
    if (isDesktop) {
      TopSVG = TopQuestao;
      BottomSVG = BottomQuestao;
      bgColor = "#E3F4FF";
    } else if (isMobile) {
      TopSVG = TopQuestao;
      BottomSVG = BottomQuestaoMobile;
      bgColor = "#E3F4FF";
    } else if (isMobileMenor) {
      TopSVG = TopQuestaoMobileMenor;
      BottomSVG = BottomQuestaoMobileMenor;
      bgColor = "#E3F4FF";
    }
  } else if (variant === 9) {
    if (isDesktop) {
      TopSVG = TopQuestao;
      BottomSVG = BottomQuestao;
      bgColor = "#E3F4FF";
    }
  } else {
    console.error(`Variante desconhecida: ${variant}`);
    return null;
  }

  // BottomSVG is required for the visual; TopSVG is optional (some variants may omit it)
  if (!BottomSVG) {
    return null;
  }

  // Define o estilo para largura máxima se fornecido
  const containerStyle = maxWidth
    ? {
        maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
        marginx: "0 auto",
      }
    : undefined;

  // Variante 9: sem top e com borda azul #4A90E2
  let finalContainerStyle: React.CSSProperties | undefined = containerStyle ? { ...containerStyle } : undefined;
  

  return (
    <div className="w-full mb-20" style={finalContainerStyle}>
      <div className="relative w-full">
        {TopSVG && (
          <div className="absolute top-0 left-0 right-0 z-10">
            <TopSVG className="w-full h-auto block" preserveAspectRatio="none" />
          </div>
        )}

        <div className="relative z-0 md:pt-20 sm:pt-20 pt-14">
          <div
            className="pb-0 w-full       lg:pt-14 lg:mt-2          md:pt-10 md:mt-0       sm:mt-[-10px] sm:pt-8      mt-8 pt-14      xs:pt-0 xs:mt-0"
            style={{ backgroundColor: bgColor }}
          >
            {children}
          </div>
        </div>

        <div className="absolute z-10">
          <BottomSVG
            className="w-full block leading-none"
            preserveAspectRatio="none"
          />
        </div>
      </div>
    </div>
  );
};

export default LearningBlock;
