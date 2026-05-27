import { styleAccordionBox, styleAccordionContent } from "./Accordion.styles";
import { useEffect, useState } from "react";

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
import background10_open from "./assets/background10.svg";
import detailBg8 from "./assets/detailBg8.svg";
import bgSunEDC from "./assets/bgSunEDC.svg";
import bgSunEDCMobile from "./assets/bgSunEDCMobile.svg";
import borderTopSun from "./assets/borderTopSun.svg";
import borderBottomSun from "./assets/borderBottomSun.svg";
import plusDropdown from "./assets/plus-dropdown.svg";
import pinkBgOpened from "./assets/pink-bg-opened.svg";

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

// 10 variações, em ordem
const backgroundCorHeaderClosed = [
  "#4E9236",
  "#15623C",
  "#177586",
  "#4089DE",
  "#2A539F",
  "#B8649C",
  "#FAA5CC",
  "#EA8914",
  "#DDAD2A",
  "#4A90E2",
] as const;

const numbers = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eigth,
  nine,
  ten,
] as const;
const backgroundCorHeaderOpened = [
  "#CEE6C5",
  "#C5E6D4",
  "#C5E6E4",
  "#B0C4DA",
  "#B0BADA",
  "#D9B0DA",
  "#E3BFD1",
  "#E3D1BF",
  "#E3CC9A",
  "#B0C3DA",
] as const;

// setas para o estado FECHADO (aberto = ArrowDownWhite fixo)
const arrowsClosed = [
  arrowone,
  arrowtwo,
  arrowthree,
  arrowfour,
  arrowfive,
  arrowsix,
  arrowseven,
  arroweigth,
  arrownine,
  arrowten,
] as const;

type ClosedIdx = (typeof backgroundCorHeaderClosed)[number]; // literais preservados [web:159]

// Tipos numéricos para as variantes
type ArrowVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type BgVariant =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22;

const idxFromBg = (bgColor: number) => {
  // Map bgColor 13 -> index 0, 14 -> 1, etc. (custom variants start at 13)
  const i = (bgColor - 13) % backgroundCorHeaderClosed.length;
  return i < 0 ? 0 : i;
};

const getHeaderColorsAndArrow = (bgColor: number, isOpen: boolean) => {
  // custom headers apply only for bgColor > 12 (13, 14, ...)
  if (bgColor > 12) {
    const i = idxFromBg(bgColor);
    const bg = isOpen
      ? backgroundCorHeaderOpened[i]
      : backgroundCorHeaderClosed[i];
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

// helper: ativa layout especial apenas para bgColor > 12
const isCustom = (c: BgVariant) => c > 12;

export const Accordion: React.FC<AccordionProps> = ({
  title,
  titleColor,
  titleColor2,
  bgColor,
  bgInsideColor = bgColor === 7 ? "#FAEBC2" : "transparent",
  children,
  textColor,
  iconBackColor,
  variant = "static",
  upArrowColorVariant = 3,
  downArrowColorVariant = 3,
  headerHeight,
  sidePadding,
}) => {
  const isMobile = useMediaQuery("(max-width: 660px)"); // < sm do Tailwind
  const [isOpen, setIsOpen] = useState(false);
  const bgImageToUse = isOpen
    ? getBgOpened(bgColor, isMobile)
    : getBgClosed(bgColor, isMobile);
  const sizeVariation = isMobile
    ? "500px"
    : variant === "dynamic"
      ? "950px"
      : "";
  const headerMargin = bgColor === 7 ? (isMobile ? "0" : "0px auto") : "0px";
  const headerPadding =
    bgColor === 7
      ? isMobile
        ? "0 0px 0 75px"
        : "0 50px 0 90px"
      : bgColor === 9 || bgColor === 10 || bgColor === 11 || bgColor === 12
        ? "0 20px 0 30px"
        : variant === "dynamic"
          ? "0 24px 0 120px"
          : "0 24px";
  const custom = getHeaderColorsAndArrow(bgColor, isOpen);
  // choose header arrow src and width depending on arrow type
  const arrowSrcForHeader = custom
    ? custom.arrow
    : isOpen
    ? ArrowDownWhite
    : getArrowImage(upArrowColorVariant);
  const isPlusMinusArrow =
    arrowSrcForHeader === plusArrowPink || arrowSrcForHeader === plusArrowWhite;
  const headerArrowWidth = isPlusMinusArrow
    ? isMobile
      ? "15px"
      : "20px"
    : isMobile
    ? "40px"
    : "50px";
  // Para os bgColor 9-12: usar setas pequenas (15/20), outros usam grandes (40/50)
  const isSmallBgHeader =
    bgColor === 9 || bgColor === 10 || bgColor === 11 || bgColor === 12;
  const headerArrowWidthForBg = isSmallBgHeader
    ? isMobile
      ? "15px"
      : "20px"
    : isMobile
    ? "40px"
    : "50px";

  return (
    <div className={styleAccordionBox}>
      <div
        className={`${styleAccordionContent}`}
        style={{
          overflow: bgColor === 7 ? "visible" : "hidden",
          padding: 0,
          transition: "border-color 0.3s linear",
          maxWidth: sizeVariation,
          borderRadius: bgColor === 2 || bgColor === 4 ? "15px" : undefined,
          borderTopLeftRadius: bgColor === 3 ? "0px" : undefined,
          borderBottomLeftRadius: bgColor === 3 ? "0px" : undefined,
        }}
      >
        {/* Header */}
        {!isCustom(bgColor) ? (
          // Header original (1–12) — special layered layout only for bgColor 7
          bgColor === 7 ? (
            <div
              className="relative w-full"
              onClick={() => setIsOpen((prevState) => !prevState)}
              style={{
                padding: headerPadding,
                margin: headerMargin,
                height: headerHeight ?? "",
                color: isOpen ? titleColor2 : titleColor,
                transition: "color 0.3s linear",
                borderTopLeftRadius: undefined,
                borderTopRightRadius: undefined,
                maxWidth: sizeVariation,
              }}
            >
              {/* Sun behind background for bgColor 7 */}
              <img
                src={sun}
                alt=""
                className="absolute w-[80px] h-[80px] sm:w-[153px] sm:h-[153px] sun"
                style={{
                  zIndex: 10,
                  visibility: "visible",
                  bottom: isMobile ? "10px" : "30px",
                  right: isMobile ? "12px" : "-35px",
                  transform: isOpen ? "rotate(90deg)" : "rotate(30deg)",
                  transformOrigin: "center center",
                  transition: "transform 0.3s linear",
                }}
              />

              {/* Background as an image layer so the sun can sit behind it */}
              {bgImageToUse ? (
                <img
                  src={bgImageToUse}
                  alt=""
                  className="absolute inset-0 w-full h-full"
                  style={{
                    zIndex: 20,
                    objectFit: "contain",
                    objectPosition: "left",
                  }}
                />
              ) : null}

              {/* Content above background */}
              <div className="relative z-30 flex justify-between w-full items-center cursor-pointer">
                <h2
                  className={[
                    "ml-4",
                    "text-[26px] sm:text-[36px] sm:ml-4 ml-0",
                  ].join(" ")}
                  style={{ color: "inherit", fontWeight: 600 }}
                >
                  {title}
                </h2>

                <div
                  // fixed-position arrow container
                  style={{
                    marginBottom: "40px",
                    visibility: isOpen ? "visible" : "visible",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="z-20 rounded-[160px]"
                    src={getArrowImage(
                      isOpen ? downArrowColorVariant : upArrowColorVariant
                    )}
                    alt=""
                    style={{
                      width: isMobile ? "40px" : "50px",
                      height: "auto",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s linear",
                      background: iconBackColor,
                      margin: isMobile ? "50px 55px 0px 0px" : "60px -7px 15px 0px",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            // Non-7 behavior: keep original background-image via CSS
            <div
              className="relative z-20 flex justify-between w-full items-center cursor-pointer"
              onClick={() => setIsOpen((prevState) => !prevState)}
              style={{
                backgroundImage: bgImageToUse ? `url(${bgImageToUse})` : "none",
                padding: headerPadding,
                margin: headerMargin,
                backgroundSize: bgColor === 8 ? "100% auto" : "cover",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                height: headerHeight ?? "100px",
                color: isOpen ? titleColor2 : titleColor,
                transition: "color 0.3s linear",
                borderTopLeftRadius:
                  bgColor === 2 || bgColor === 4
                    ? "15px"
                    : bgColor === 3
                      ? "0px"
                      : undefined,
                borderTopRightRadius:
                  bgColor === 2 || bgColor === 4 ? "15px" : undefined,
                maxWidth: sizeVariation,
              }}
            >
              <h2
                className={[
                  "ml-4",
                  bgColor === 8
                    ? "text-[24px] sm:text-[36px] max-w-[300px] md:max-w-[600px] ml-[-5px] sm:ml-0"
                    : bgColor === 9 ||
                        bgColor === 10 ||
                        bgColor === 11 ||
                        bgColor === 12
                      ? "text-[18px] leading-tight sm:text-[30px] max-w-[200px] md:max-w-[600px]"
                      : "",
                ].join(" ")}
                style={{ color: "inherit" }}
              >
                {title}
              </h2>

              <div
                // fixed-position arrow container so all variants align the arrow consistently
                style={{
                  ...(bgColor === 9 ||
                  bgColor === 10 ||
                  bgColor === 11 ||
                  bgColor === 12
                    ? {
                        position: "absolute",
                        right: isMobile ? "30px" : "60px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }
                    : {}),
                  marginBottom: "0px",
                  visibility:
                    (bgColor === 9 ||
                      bgColor === 10 ||
                      bgColor === 11 ||
                      bgColor === 12) &&
                    isOpen
                      ? "hidden"
                      : "visible",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  className="z-20 rounded-[160px]"
                  src={getArrowImage(
                    isOpen ? downArrowColorVariant : upArrowColorVariant
                  )}
                  alt=""
                  style={{
                    width: headerArrowWidthForBg,
                    height: "auto",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s linear",
                    background: iconBackColor,
                    margin: bgColor === 8
                      ? isMobile
                        ? "15px 0px 15px 5px"
                        : "0px 30px 0px 0px"
                      : "0px",
                  }}
                />
              </div>
            </div>
          )
        ) : (
          // Novo layout (>12): <img/> no topo + barra colorida abaixo (sem background-image)
          <div className="relative w-full" style={{ maxWidth: sizeVariation }}>
            {/*number*/}
            <img src={custom?.numberImg} className="mb-[-10px] z-20" />
            {/* imagem no topo */}
            <img
              src={background10} // substitua por outra, se necessário
              alt=""
              className="z-10"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {/* barra colorida que funciona como header */}
            <div
              className="relative z-20 flex justify-between w-full items-center cursor-pointer"
              onClick={() => setIsOpen((p) => !p)}
              style={{
                padding: "0 24px",
                height: "auto",
                background: custom ? custom.bg : isOpen ? "#CEE6C5" : "#4E9236",
                color: isOpen ? titleColor2 : titleColor,
                transition: "background-color 0.3s linear, color 0.3s linear",
                borderTopLeftRadius:
                  bgColor === 13 && variant === "dynamic" ? "0px" : undefined,
                borderTopRightRadius:
                  bgColor === 13 && variant === "dynamic" ? "0px" : undefined,
              }}
            >
              <h2
                className="leading-snug ml-4 text-[18px] sm:text-[24px] py-4"
                style={{ color: "inherit", fontWeight: 600 }}
              >
                {title}
              </h2>
              <div
                className="relative flex items-center justify-center"
                style={{ width: "145px", height: "145px" }}
              >
                <img
                  className="z-20 rounded-[160px] ml-2"
                  src={
                    custom
                      ? custom.arrow
                      : isOpen
                        ? ArrowDownWhite
                        : getArrowImage(upArrowColorVariant)
                  }
                  alt=""
                  style={{
                    width: isMobile ? "30px" : "44px",
                    height: "auto",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s linear",
                    background: iconBackColor,
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* backgroundContent */}
        <div
          className="overflow-hidden z-20"
          style={{
            background: bgInsideColor,
            maxHeight: isOpen ? "3300px" : "0px",
            marginTop:
              bgColor === 7 ? "-32px" : bgColor === 8 ? "-42px" : "0px",
            padding:
              bgColor === 7
                ? "20px 20px 20px 20px"
                : bgColor === 8
                  ? isMobile ? "50px 10px 20px 10px" : "50px 20px 20px 20px"
                  : bgColor === 9 ||
                      bgColor === 10 ||
                      bgColor === 11 ||
                      bgColor === 12
                    ? "0px 0px 30px 0px"
                    : isOpen
                      ? "25px"
                      : "0px 25px",
            opacity: isOpen ? 1 : 0,
            transition:
              "max-height 0.3s linear, opacity 0.2s linear, padding 0.3s linear",
            borderBottomLeftRadius:
              bgColor === 7
                ? "60px"
                : bgColor === 2 || bgColor === 4
                  ? "15px"
                  : bgColor === 3
                    ? "0px"
                    : undefined,
            borderBottomRightRadius:
              bgColor === 7
                ? "60px"
                : bgColor === 2 || bgColor === 4
                  ? "15px"
                  : undefined,
          }}
        >
          <div className="">
            <img
              src={detailBg8}
              className="mt-[-27px]"
              style={{ visibility: bgColor === 8 ? "visible" : "hidden" }}
            />
            {isOpen && bgColor === 9 ? (
              <>
                <img
                  src={topPinkDetailOpened}
                  alt=""
                  style={{
                    width: "100%",
                    display: "block",
                    marginTop: "-18px",
                    marginBottom: "-2px",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      padding: sidePadding
                        ? `30px ${sidePadding} 20px ${sidePadding}`
                        : "30px 40px 20px 40px",
                      overflow: "visible",
                      wordWrap: "break-word",
                    }}
                  >
                    <div style={{ maxWidth: isMobile ? "320px" : "100%" }}>
                      {children}
                    </div>
                  </div>
                  <img
                    src={minusArrowPink}
                    alt="Fechar"
                    onClick={() => setIsOpen(false)}
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      right: "20px",
                      width: isMobile ? "15px" : "20px",
                      height: "auto",
                      cursor: "pointer",
                      zIndex: 30,
                    }}
                  />
                </div>
              </>
            ) : isOpen && bgColor === 10 ? (
              <>
                <img
                  src={topGreenDetailOpened}
                  alt=""
                  style={{
                    width: "100%",
                    display: "block",
                    marginTop: "-18px",
                    marginBottom: "-2px",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      padding: sidePadding
                        ? `30px ${sidePadding} 20px ${sidePadding}`
                        : "30px 40px 20px 40px",
                      overflow: "visible",
                      wordWrap: "break-word",
                    }}
                  >
                    <div style={{ maxWidth: isMobile ? "320px" : "100%" }}>
                      {children}
                    </div>
                  </div>
                  <img
                    src={minusArrowGreen}
                    alt="Fechar"
                    onClick={() => setIsOpen(false)}
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      right: "20px",
                      width: isMobile ? "15px" : "20px",
                      height: "auto",
                      cursor: "pointer",
                      zIndex: 30,
                    }}
                  />
                </div>
              </>
            ) : isOpen && bgColor === 11 ? (
              <>
                <img
                  src={topOrangeDetailOpened}
                  alt=""
                  style={{
                    width: "100%",
                    display: "block",
                    marginTop: "-18px",
                    marginBottom: "-2px",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      padding: sidePadding
                        ? `30px ${sidePadding} 20px ${sidePadding}`
                        : "30px 40px 20px 40px",
                      overflow: "visible",
                      wordWrap: "break-word",
                    }}
                  >
                    <div style={{ maxWidth: isMobile ? "320px" : "100%" }}>
                      {children}
                    </div>
                  </div>
                  <img
                    src={minusArrowOrange}
                    alt="Fechar"
                    onClick={() => setIsOpen(false)}
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      right: "20px",
                      width: isMobile ? "15px" : "20px",
                      height: "auto",
                      cursor: "pointer",
                      zIndex: 30,
                    }}
                  />
                </div>
              </>
            ) : isOpen && bgColor === 12 ? (
              <>
                {/* Detalhe azul entre o topo e o fundo ondulado */}
                <img
                  src={topDetailBlueOpened}
                  alt=""
                  style={{
                    width: "100%",
                    display: "block",
                    marginTop: "-18px",
                    marginBottom: "-2px",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      padding: sidePadding
                        ? `30px ${sidePadding} 20px ${sidePadding}`
                        : "30px 40px 20px 40px",
                      overflow: "visible",
                      wordWrap: "break-word",
                    }}
                  >
                    <div style={{ maxWidth: isMobile ? "320px" : "100%" }}>
                      {children}
                    </div>
                  </div>
                  {/* Botão minus no canto inferior direito */}
                  <img
                    src={minusArrowBlue}
                    alt="Fechar"
                    onClick={() => setIsOpen(false)}
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      right: "20px",
                      width: isMobile ? "15px" : "20px",
                      height: "auto",
                      cursor: "pointer",
                      zIndex: 30,
                    }}
                  />
                </div>
              </>
            ) : (
              <div
                className="flex-5 h-auto p-4"
                style={{
                  borderImageSlice:
                    bgColor === 7 || bgColor === 8 ? "35 44 32 38" : undefined,
                  borderImageWidth:
                    bgColor === 7 || bgColor === 8
                      ? "20px 20px 20px 20px"
                      : undefined,
                  borderImageOutset:
                    bgColor === 7 || bgColor === 8
                      ? "0px 0px 0px 0px"
                      : undefined,
                  borderImageRepeat:
                    bgColor === 7 || bgColor === 8
                      ? "stretch stretch"
                      : undefined,
                  borderImageSource:
                    bgColor === 7
                      ? "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDU3IiBoZWlnaHQ9IjYyOCIgdmlld0JveD0iMCAwIDQ1NyA2MjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MTAuMTA5IDEuMjVIMjI1LjY5Mkg0MS4yNzU5IiBzdHJva2U9IiM0QTkwRTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00Mi4yNzU5IDYyNi4yNUg0MS41NDI0TDEuMjc1ODggNTk0LjcxN0wyNC45NjgyIDI2Ljk3NTZDMjQuOTY4MiAyNi45NzU2IDMyLjE5ODcgMTEuNDI4OSAzNy4xOTA5IDEuMjVINDIuMjc1OSIgc3Ryb2tlPSIjNEE5MEUyIiBzdHJva2Utd2lkdGg9IjIuNSIvPgo8cGF0aCBkPSJNNDExLjEwOSA2MjYuMjVIMjI2LjY5Mkg0Mi4yNzU5IiBzdHJva2U9IiM0QTkwRTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00MDkuMjc2IDEuMjVINDEzLjE2Nkw0MjUuMzUyIDM3LjQxMTFMNDQ2LjY3NyA1MS42NzM3TDQ1NS4yNzYgNTM0Ljk3TDQxMy4xNjYgNjI2LjI1TDQwOS4yNzYgNjI2LjI1IiBzdHJva2U9IiM0QTkwRTIiIHN0cm9rZS13aWR0aD0iMi41Ii8+Cjwvc3ZnPgo=')"
                      : "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDU3IiBoZWlnaHQ9IjYyOCIgdmlld0JveD0iMCAwIDQ1NyA2MjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MTAuMTA5IDEuMjVIMjI1LjY5Mkg0MS4yNzU5IiBzdHJva2U9IiMyQTZCMTMiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00Mi4yNzU5IDYyNi4yNUg0MS41NDI0TDEuMjc1ODggNTk0LjcxN0wyNC45NjgyIDI2Ljk3NTZDMjQuOTY4MiAyNi45NzU2IDMyLjE5ODcgMTEuNDI4OSAzNy4xOTA5IDEuMjVINDIuMjc1OSIgc3Ryb2tlPSIjMkE2QjEzIiBzdHJva2Utd2lkdGg9IjIuNSIvPgo8cGF0aCBkPSJNNDExLjEwOSA2MjYuMjVIMjI2LjY5Mkg0Mi4yNzU5IiBzdHJva2U9IiMyQTZCMTMiIHN0cm9rZS13aWR0aD0iMi41Ii8+CjxwYXRoIGQ9Ik00MDkuMjc2IDEuMjVINDEzLjE2Nkw0MjUuMzUyIDM3LjQxMTFMNDQ2LjY3NyA1MS42NzM3TDQ1NS4yNzYgNTM0Ljk3TDQxMy4xNjYgNjI2LjI1TDQwOS4yNzYgNjI2LjI1IiBzdHJva2U9IiMyQTZCMTMiIHN0cm9rZS13aWR0aD0iMi41Ii8+Cjwvc3ZnPgo=')",
                  borderStyle:
                    bgColor === 7 || bgColor === 8 ? "solid" : undefined,
                  marginTop: bgColor === 8 ? "10px" : undefined,
                }}
              >
                <div style={{ maxWidth: isMobile ? "320px" : "100%" }}>
                  {children}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Mapeamento de imagens de seta por número
function getArrowImage(variant: ArrowVariant) {
  const arrowColors: { [key in ArrowVariant]: string } = {
    1: ArrowDownYellow,
    2: ArrowDownBlue,
    3: ArrowDownWhite,
    4: ArrowDownBrown,
    5: ArrowDownOrange,
    6: ArrowGreen,
    7: ArrowDownOrange2,
    8: Arrow8,
    9: plusArrowPink,
    10: plusArrowWhite,
    11: plusArrowWhite,
    12: plusArrowWhite,
  };
  return arrowColors[variant] || ArrowDownWhite;
}

// Mapeamento de imagens de fundo fechado por número
function getBgClosed(bgColor: BgVariant, isMobile: boolean) {
  const bgColors: { [key in BgVariant]: string | undefined } = {
    1: background1,
    2: background2,
    3: background3,
    4: background4,
    5: background5,
    6: background6,
    7: isMobile ? bgSunEDCMobile : bgSunEDC,
    8: isMobile ? background8mobile : background8,
    9: topPinkBgClosed,
    10: topBgGreenClosed,
    11: topBgOrangeClosed,
    12: topBgBlueClosed,
    13: undefined,
    14: undefined,
    15: undefined,
    16: undefined,
    17: undefined,
    18: undefined,
    19: undefined,
    20: undefined,
    21: undefined,
    22: undefined,
  };
  return bgColors[bgColor] ?? "";
}

// Mapeamento de imagens de fundo aberto por número
function getBgOpened(bgColor: BgVariant, isMobile: boolean) {
  const bgColors: { [key in BgVariant]: string | undefined } = {
    1: background1,
    2: background2_open,
    3: background3_open,
    4: background4_open,
    5: background5_open,
    6: background6_open,
    7: isMobile ? bgSunEDCMobile : bgSunEDC,
    8: isMobile ? background8mobile_open : background8_open,
    9: topPinkBgOpened,
    10: topBgGreenOpened,
    11: bgOrangeOpened,
    12: topBgBlueBgOpened,
    13: undefined,
    14: undefined,
    15: undefined,
    16: undefined,
    17: undefined,
    18: undefined,
    19: undefined,
    20: undefined,
    21: undefined,
    22: undefined,
  };
  return bgColors[bgColor] ?? "";
}

interface AccordionProps {
  // Accept rich content for the title so callers can pass JSX (styled spans, icons, etc.)
  title: React.ReactNode;
  titleColor?: string;
  titleColor2?: string;
  bgColor: BgVariant;
  bgInsideColor?: string;
  children: React.ReactNode;
  variant?: "static" | "dynamic" | "borderful";
  borderfulTitleColor?: string;
  textColor?: string;
  specTitle?: string;
  specText?: string;
  iconBackColor?: string;
  upArrowColorVariant?: ArrowVariant;
  downArrowColorVariant?: ArrowVariant;
  headerHeight?: string;
  sidePadding?: string;
}
