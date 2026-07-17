import React, { useEffect, useState } from "react";
import { styleAccordionBox, styleAccordionContent } from "./Accordion.styles";
import { courseAccordionAssets, type CourseVariant } from "./assets";

// Assets
import sun from "./assets/sun.svg";
import ArrowDownYellow from "./assets/arrowDownYellow.png";
import ArrowDownBlue from "./assets/arrowDownBlue.png";
import ArrowDownWhite from "./assets/arrowDownWhite.png";
import ArrowDownBrown from "./assets/arrowDownBrown.png";
import ArrowDownOrange from "./assets/arrowDownOrange.png";
import ArrowDownOrange2 from "./assets/arrowDownOrange2.svg";
import ArrowGreen from "./assets/arrowGreen.png";
import Arrow8 from "./assets/arrow8.svg";

import background1 from "./assets/background.png";
import background2 from "./assets/background2.png";
import background3 from "./assets/background3.png";
import background4 from "./assets/background4.png";
import background5 from "./assets/background5.svg";
import background6 from "./assets/background6.svg";
import background8 from "./assets/background8.svg";
import background8mobile from "./assets/background8Mobile.svg";
import background10 from "./assets/background10.svg";

import background2_open from "./assets/background2_open.png";
import background3_open from "./assets/background3_open.png";
import background4_open from "./assets/background4_open.png";
import background5_open from "./assets/background5_open.svg";
import background6_open from "./assets/background6_open.svg";
import background8_open from "./assets/background8_open.svg";
import background8mobile_open from "./assets/background8_openMobile.svg";

import detailBg8 from "./assets/detailBg8.svg";
import bgSunEDC from "./assets/bgSunEDC.svg";
import bgSunEDCMobile from "./assets/bgSunEDCMobile.svg";

//azul
import topBgBlueBgOpened from "./assets/topBgBlueOpened.svg";
import topBgBlueClosed from "./assets/topBgBlueClosed.svg";
import topDetailBlueOpened from "./assets/topBlueDetailOpened.svg";
import minusArrowBlue from "./assets/minusArrowBlue.svg";

//rosa
import topPinkBgOpened from "./assets/top_pink_open.svg";
import topPinkBgClosed from "./assets/bg-pink-closed.svg";
import topPinkDetailOpened from "./assets/top-pink-detail-opened.svg";
import plusArrowPink from "./assets/plusArrowPink.svg";
import minusArrowPink from "./assets/minusArrowPink.svg";

//verde
import topBgGreenClosed from "./assets/topBgGreenClosed.svg";
import topGreenDetailOpened from "./assets/topGreenDetailOpened.svg";
import minusArrowGreen from "./assets/minusArrowGreen.svg";
import plusArrowWhite from "./assets/plusArrowWhite.svg";
import topBgGreenOpened from "./assets/topBgGreenOpened.svg";

//laranja
import bgOrangeOpened from "./assets/bgOrangeOpened.svg";
import topBgOrangeClosed from "./assets/topBgOrangeClosed.svg";
import minusArrowOrange from "./assets/minusArrowOrange.svg";
import topOrangeDetailOpened from "./assets/topOrangeDetailOpened.svg";

import one from "./assets/one.svg";
import two from "./assets/two.svg";
import three from "./assets/three.svg";
import four from "./assets/four.svg";
import five from "./assets/five.svg";
import six from "./assets/six.svg";
import seven from "./assets/seven.svg";
import eigth from "./assets/eigth.svg";
import nine from "./assets/nine.svg";
import ten from "./assets/ten.svg";

import arrowone from "./assets/arrowone.svg";
import arrowtwo from "./assets/arrowtwo.svg";
import arrowthree from "./assets/arrowthree.svg";
import arrowfour from "./assets/arrowfour.svg";
import arrowfive from "./assets/arrowfive.svg";
import arrowsix from "./assets/arrowsix.svg";
import arrowseven from "./assets/arrowseven.svg";
import arroweigth from "./assets/arroweigth.svg";
import arrownine from "./assets/arrownine.svg";
import arrowten from "./assets/arrowten.svg";

const backgroundCorHeaderClosed = [
  "#4E9236", "#15623C", "#177586", "#4089DE", "#2A539F",
  "#B8649C", "#FAA5CC", "#EA8914", "#DDAD2A", "#4A90E2",
] as const;

const numbers = [one, two, three, four, five, six, seven, eigth, nine, ten] as const;

const backgroundCorHeaderOpened = [
  "#CEE6C5", "#C5E6D4", "#C5E6E4", "#B0C4DA", "#B0BADA",
  "#D9B0DA", "#E3BFD1", "#E3D1BF", "#E3CC9A", "#B0C3DA",
] as const;

const arrowsClosed = [
  arrowone, arrowtwo, arrowthree, arrowfour, arrowfive,
  arrowsix, arrowseven, arroweigth, arrownine, arrowten,
] as const;

export type ArrowVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type BgVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22;

export interface AccordionProps {
  title: React.ReactNode;
  titleColor?: string;
  titleColor2?: string;
  bgColor: BgVariant;
  bgInsideColor?: string;
  children: React.ReactNode;
  variant?: "static" | "dynamic" | "borderful";
  textColor?: string;
  iconBackColor?: string;
  upArrowColorVariant?: ArrowVariant;
  downArrowColorVariant?: ArrowVariant;
  headerHeight?: string;
  sidePadding?: string;
  /** Quando informado, usa os assets do curso correspondente e ignora bgColor */
  course?: CourseVariant;
}

const idxFromBg = (bgColor: number) => {
  const i = (bgColor - 13) % backgroundCorHeaderClosed.length;
  return i < 0 ? 0 : i;
};

const getHeaderColorsAndArrow = (bgColor: number, isOpen: boolean) => {
  if (bgColor > 12) {
    const i = idxFromBg(bgColor);
    const bg = isOpen ? backgroundCorHeaderOpened[i] : backgroundCorHeaderClosed[i];
    const arrow = isOpen ? arrowsClosed[i] : ArrowDownWhite;
    const numberImg = numbers[i];
    return { bg, arrow, numberImg };
  }
  return null;
};

export function useMediaQuery(query: string, ssrFallback = false) {
  const [matches, setMatches] = useState(ssrFallback);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}

function getArrowImage(variant: ArrowVariant) {
  const arrowColors: Record<number, string> = {
    1: ArrowDownYellow, 2: ArrowDownBlue, 3: ArrowDownWhite, 4: ArrowDownBrown,
    5: ArrowDownOrange, 6: ArrowGreen, 7: ArrowDownOrange2, 8: Arrow8,
    9: plusArrowPink, 10: plusArrowWhite, 11: plusArrowWhite, 12: plusArrowWhite,
  };
  return arrowColors[variant] || ArrowDownWhite;
}

function getBgClosed(bgColor: BgVariant, isMobile: boolean) {
  const bgs: Record<number, string | undefined> = {
    1: background1, 2: background2, 3: background3, 4: background4, 5: background5,
    6: background6, 7: isMobile ? bgSunEDCMobile : bgSunEDC, 8: isMobile ? background8mobile : background8,
    9: topPinkBgClosed, 10: topBgGreenClosed, 11: topBgOrangeClosed, 12: topBgBlueClosed,
  };
  return bgs[bgColor] || "";
}

function getBgOpened(bgColor: BgVariant, isMobile: boolean) {
  const bgs: Record<number, string | undefined> = {
    1: background1, 2: background2_open, 3: background3_open, 4: background4_open, 5: background5_open,
    6: background6_open, 7: isMobile ? bgSunEDCMobile : bgSunEDC, 8: isMobile ? background8mobile_open : background8_open,
    9: topPinkBgOpened, 10: topBgGreenOpened, 11: bgOrangeOpened, 12: topBgBlueBgOpened,
  };
  return bgs[bgColor] || "";
}

export const Accordion: React.FC<AccordionProps> = ({
  title, titleColor, titleColor2, bgColor,
  bgInsideColor = bgColor === 7 ? "#FAEBC2" : "transparent",
  children, iconBackColor, variant = "static",
  upArrowColorVariant = 3, downArrowColorVariant = 3,
  headerHeight, sidePadding, course,
}) => {
  const isMobile = useMediaQuery("(max-width: 660px)");
  const [isOpen, setIsOpen] = useState(false);

  // Renderização pelo sistema de cursos (pce, e futuros)
  if (course) {
    const assets = courseAccordionAssets[course];
    return (
      <div className={styleAccordionBox}>
        <div
          className={styleAccordionContent}
          style={{ overflow: "hidden", padding: 0, maxWidth: isMobile ? "500px" : variant === "dynamic" ? "950px" : "" }}
        >
          <div
            className="relative z-20 flex justify-between w-full items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              backgroundImage: `url(${isOpen ? assets.bgOpen : assets.bgClosed})`,
              backgroundSize: "cover",
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
              height: headerHeight ?? "100px",
              padding: "0 24px",
              color: isOpen ? titleColor2 : titleColor,
            }}
          >
            <h2 className="ml-4" style={{ color: "inherit" }}>{title}</h2>
            <img
              src={assets.arrow}
              alt={isOpen ? "Fechar" : "Abrir"}
              style={{
                width: isMobile ? "40px" : "50px",
                transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                transition: "transform 0.3s linear",
              }}
            />
          </div>
          <div
            className="overflow-hidden z-20"
            style={{
              maxHeight: isOpen ? "3300px" : "0px",
              opacity: isOpen ? 1 : 0,
              transition: "max-height 0.3s linear, opacity 0.2s linear",
              padding: isOpen ? "25px" : "0 25px",
            }}
          >
            <div className="p-4">{children}</div>
          </div>
        </div>
      </div>
    );
  }

  const bgImageToUse = isOpen ? getBgOpened(bgColor, isMobile) : getBgClosed(bgColor, isMobile);

  const sizeVariation = isMobile ? "500px" : variant === "dynamic" ? "950px" : "";
  const headerMargin = bgColor === 7 ? (isMobile ? "0" : "0px auto") : "0px";
  const headerPadding = bgColor === 7 ? (isMobile ? "0 0px 0 75px" : "0 50px 0 90px") :
                        (bgColor >= 9 && bgColor <= 12) ? "0 20px 0 30px" :
                        variant === "dynamic" ? "0 24px 0 120px" : "0 24px";

  const custom = getHeaderColorsAndArrow(bgColor, isOpen);
  const arrowSrcForHeader = custom ? custom.arrow : (isOpen ? ArrowDownWhite : getArrowImage(upArrowColorVariant));
  const isSmallBgHeader = bgColor >= 9 && bgColor <= 12;
  const headerArrowWidth = isSmallBgHeader ? (isMobile ? "15px" : "20px") : (isMobile ? "40px" : "50px");

  return (
    <div className={styleAccordionBox}>
      <div
        className={styleAccordionContent}
        style={{
          overflow: bgColor === 7 ? "visible" : "hidden",
          padding: 0,
          maxWidth: sizeVariation,
          borderRadius: (bgColor === 2 || bgColor === 4) ? "15px" : undefined,
        }}
      >
        {bgColor <= 12 ? (
          bgColor === 7 ? (
            <div
              className="relative w-full"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: headerPadding, margin: headerMargin,
                height: headerHeight, color: isOpen ? titleColor2 : titleColor,
              }}
            >
              <img src={sun} alt="" className="absolute w-[80px] h-[80px] sm:w-[153px] sm:h-[153px] sun"
                style={{
                  zIndex: 10, bottom: isMobile ? "10px" : "30px", right: isMobile ? "12px" : "-35px",
                  transform: isOpen ? "rotate(90deg)" : "rotate(30deg)", transition: "transform 0.3s linear",
                }}
              />
              {bgImageToUse && (
                <img src={bgImageToUse} alt="" className="absolute inset-0 w-full h-full"
                  style={{ zIndex: 20, objectFit: "contain", objectPosition: "left" }}
                />
              )}
              <div className="relative z-30 flex justify-between w-full items-center cursor-pointer">
                <h2 className="ml-4 text-[26px] sm:text-[36px] font-semibold" style={{ color: "inherit" }}>
                  {title}
                </h2>
                <div style={{ marginBottom: "40px", display: "flex", alignItems: "center" }}>
                  <img className="z-20 rounded-full"
                    src={getArrowImage(isOpen ? downArrowColorVariant : upArrowColorVariant)}
                    alt=""
                    style={{
                      width: isMobile ? "40px" : "50px", transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s linear", background: iconBackColor,
                      margin: isMobile ? "50px 55px 0px 0px" : "60px -7px 15px 0px",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div
              className="relative z-20 flex justify-between w-full items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                backgroundImage: bgImageToUse ? `url(${bgImageToUse})` : "none",
                padding: headerPadding, margin: headerMargin,
                backgroundSize: bgColor === 8 ? "100% auto" : "cover",
                backgroundPosition: "left", backgroundRepeat: "no-repeat",
                height: headerHeight ?? "100px", color: isOpen ? titleColor2 : titleColor,
              }}
            >
              <h2 className={`ml-4 ${bgColor === 8 ? 'text-[24px] sm:text-[36px]' : isSmallBgHeader ? 'text-[18px] sm:text-[30px]' : ''}`} style={{ color: "inherit" }}>
                {title}
              </h2>
              <div style={{
                ...(isSmallBgHeader ? { position: "absolute", right: isMobile ? "30px" : "60px", top: "50%", transform: "translateY(-50%)" } : {}),
                display: isOpen && isSmallBgHeader ? "none" : "flex", alignItems: "center"
              }}>
                <img className="z-20 rounded-full"
                  src={getArrowImage(isOpen ? downArrowColorVariant : upArrowColorVariant)}
                  alt=""
                  style={{
                    width: headerArrowWidth, transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s linear", background: iconBackColor,
                    margin: bgColor === 8 ? (isMobile ? "15px 0 15px 5px" : "0 30px 0 0") : "0",
                  }}
                />
              </div>
            </div>
          )
        ) : (
          <div className="relative w-full" style={{ maxWidth: sizeVariation }}>
            {custom && <img src={custom.numberImg} className="mb-[-10px] z-20" alt="" />}
            <img src={background10} alt="" className="z-10 w-full h-auto block" />
            <div
              className="relative z-20 flex justify-between w-full items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                padding: "0 24px", background: custom ? custom.bg : (isOpen ? "#CEE6C5" : "#4E9236"),
                color: isOpen ? titleColor2 : titleColor,
              }}
            >
              <h2 className="leading-snug ml-4 text-[18px] sm:text-[24px] py-4 font-semibold" style={{ color: "inherit" }}>
                {title}
              </h2>
              <div className="relative flex items-center justify-center w-[145px] h-[145px]">
                <img className="z-20 rounded-full ml-2"
                  src={custom ? custom.arrow : (isOpen ? ArrowDownWhite : getArrowImage(upArrowColorVariant))}
                  alt=""
                  style={{
                    width: isMobile ? "30px" : "44px", transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s linear", background: iconBackColor,
                  }}
                />
              </div>
            </div>
          </div>
        )}

        <div
          className="overflow-hidden z-20"
          style={{
            background: bgInsideColor, maxHeight: isOpen ? "3300px" : "0px",
            marginTop: bgColor === 7 ? "-32px" : bgColor === 8 ? "-42px" : "0px",
            padding: bgColor === 7 ? "20px" : bgColor === 8 ? (isMobile ? "50px 10px 20px 10px" : "50px 20px 20px 20px") : 
                     isSmallBgHeader ? "0 0 30px 0" : (isOpen ? "25px" : "0 25px"),
            opacity: isOpen ? 1 : 0, transition: "max-height 0.3s linear, opacity 0.2s linear, padding 0.3s linear",
          }}
        >
          <div className="relative">
            {bgColor === 8 && <img src={detailBg8} className="mt-[-27px]" alt="" />}
            {isOpen && isSmallBgHeader ? (
              <>
                <img src={bgColor === 9 ? topPinkDetailOpened : bgColor === 10 ? topGreenDetailOpened : bgColor === 11 ? topOrangeDetailOpened : topDetailBlueOpened} 
                     alt="" className="w-full block mt-[-18px] mb-[-2px]" />
                <div className="relative p-8 md:px-10">
                  <div style={{ maxWidth: isMobile ? "320px" : "100%", wordWrap: "break-word" }}>
                    {children}
                  </div>
                  <img 
                    src={bgColor === 9 ? minusArrowPink : bgColor === 10 ? minusArrowGreen : bgColor === 11 ? minusArrowOrange : minusArrowBlue} 
                    alt="Fechar" onClick={() => setIsOpen(false)}
                    className="absolute bottom-0 right-5 cursor-pointer z-30"
                    style={{ width: isMobile ? "15px" : "20px" }}
                  />
                </div>
              </>
            ) : (
              <div className="p-4" style={{
                borderStyle: (bgColor === 7 || bgColor === 8) ? "solid" : undefined,
                borderWidth: (bgColor === 7 || bgColor === 8) ? "20px" : undefined,
                borderImageSlice: (bgColor === 7 || bgColor === 8) ? "35 44 32 38" : undefined,
                borderImageSource: bgColor === 7 ? "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDU3IiBoZWlnaHQ9IjYyOCIgdmlld0JveD0iMCAwIDQ1NyA2MjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MTAuMTA5IDEuMjVIMjI1LjY5Mkg0MS4yNzU5IiBzdHJva2U9IiM0QTkwRTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00Mi4yNzU5IDYyNi4yNUg0MS41NDI0TDEuMjc1ODggNTk0LjcxN0wyNC45NjgyIDI2Ljk3NTZDMjQuOTY4MiAyNi45NzU2IDMyLjE5ODcgMTEuNDI4OSAzNy4xOTA5IDEuMjVINDIuMjc1OSIgc3Ryb2tlPSIjNEE5MEUyIiBzdHJva2Utd2lkdGg9IjIuNSIvPgo8cGF0aCBkPSJNNDExLjEwOSA2MjYuMjVIMjI2LjY5Mkg0Mi4yNzU5IiBzdHJva2U9IiM0QTkwRTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00MDkuMjc2IDEuMjVINDEzLjE2Nkw0MjUuMzUyIDM3LjQxMTFMNDQ2LjY3NyA1MS42NzM3TDQ1NS4yNzYgNTM0Ljk3TDQxMy4xNjYgNjI2LjI1TDQwOS4yNzYgNjI2LjI1IiBzdHJva2U9IiM0QTkwRTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+Cjwvc3ZnPgo=')" : 
                                   bgColor === 8 ? "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDU3IiBoZWlnaHQ9IjYyOCIgdmlld0JveD0iMCAwIDQ1NyA2MjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MTAuMTA5IDEuMjVIMjI1LjY5Mkg0MS4yNzU5IiBzdHJva2U9IiMyQTZCMTMiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00Mi4yNzU5IDYyNi4yNUg0MS41NDI0TDEuMjc1ODggNTk0LjcxN0wyNC45NjgyIDI2Ljk3NTZDMjQuOTY4MiAyNi45NzU2IDMyLjE5ODcgMTEuNDI4OSAzNy4xOTA5IDEuMjVINDIuMjc1OSIgc3Ryb2tlPSIjMkE2QjEzIiBzdHJva2Utd2lkdGg9IjIuNSIvPgo8cGF0aCBkPSJNNDExLjEwOSA2MjYuMjVIMjI2LjY5Mkg0Mi4yNzU5IiBzdHJva2U9IiMyQTZCMTMiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00MDkuMjc2IDEuMjVINDEzLjE2Nkw0MjUuMzUyIDM3LjQxMTFMNDQ2LjY3NyA1MS42NzM3TDQ1NS4yNzYgNTM0Ljk3TDQxMy4xNjYgNjI2LjI1TDQwOS4yNzYgNjI2LjI1IiBzdHJva2U9IiMyQTZCMTMiIHN0cm9rZS13aWR0aD0iMi41Ii8+Cjwvc3ZnPgo=')" : undefined,
              }}>
                <div style={{ maxWidth: isMobile ? "320px" : "100%" }}>{children}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
