import React, { useEffect, useState } from "react";

import avaliativo from "./assets/avaliativo.png";
import artigos from "./assets/artigos.png";
import audiovisualAmarelo from "./assets/audiovisual-amarelo.svg";
import audiovisualAzul from "./assets/audiovisual-azul.png";
import audiovisualLaranja from "./assets/audiovisual-laranja.png";
import autoavaliacao from "./assets/autoavaliacao.png";
import fixacaoVerde from "./assets/fixacaoVerde.svg";
import fixacaoLaranja from "./assets/fixacaoLaranja.png";
import fixacaoLaranja2 from "./assets/fixacaoLaranja2.svg";
import fixacaoAmarelo from "./assets/fixacaoAmarelo.svg";
import fixacaoCiano from "./assets/fixacaoCiano.svg";
import minifaixaCiano from "./assets/minifaixa-ciano.png";
import minifaixaCianoEscuro from "./assets/minifaixa-cianoEscuro.svg";
import minifaixaLaranja from "./assets/minifaixa-laranja.png";
import minifaixaLaranjaEscuro from "./assets/minifaixa-laranjaEscuro.svg";
import minifaixaVerde from "./assets/minifaixa-verde.png";
import minifeixaVerdeEscuro from "./assets/minifaixa-verdeEscuro.svg";
import minifaixaVerde2 from "./assets/minifaixa-verde2.svg";
import minifaixaMarrom from "./assets/minifaixa-marrom.png";
import minifaixaAzulEscuro from "./assets/minifaixaazulescuro.svg";
import referencias from "./assets/referencias.png";
import tarefa from "./assets/tarefa.png";
import tarefaAzul from "./assets/tarefa-azul.svg";
import leitura from "./assets/leitura.png";
import leituraLaranja from "./assets/leituraLaranja.svg";
import iBG from "./assets/i.png";
import iiBG from "./assets/ii.png";
import iiiBG from "./assets/iii.png";
import ivBG from "./assets/iv.png";
import vBG from "./assets/v.png";
import viBG from "./assets/vi.png";
import faixaWifi from "./assets/faixawifi.svg";
import minifaixalaranjaEDC from "./assets/minifaixaEDC1.svg";
import minifaixarosaEDC from "./assets/minifaixaEDC2.svg";
import minifaixaverdeEDC from "./assets/minifaixaEDC3.svg";
import minifaixaazulEDC from "./assets/minifaixaEDC4.svg";
import parapraticarEDC from "./assets/parapraticarEDC.svg";
import atividadeavaliativaEDC from "./assets/atividadeavaliativaEDC.svg";

/**
 * Todo asset importado de `.svg` neste pacote é transformado em componente React pelo
 * SVGR (esbuild-plugin-svgr, sem filtro por arquivo) — nunca é uma URL. Os `.png`
 * continuam sendo URL normalmente. Como o mapa de variantes abaixo mistura os dois tipos,
 * `AssetBg` decide em tempo de execução como renderizar cada um.
 */
type ImgAsset = string | React.FC<React.SVGProps<SVGSVGElement>>;

function AssetBg({ src, className }: { src: ImgAsset; className?: string }) {
  if (typeof src === "string") {
    return <img src={src} alt="" aria-hidden="true" className={className} />;
  }
  const Svg = src;
  return <Svg aria-hidden="true" preserveAspectRatio="none" className={className} />;
}

export interface MinibannerProps {
  children: React.ReactNode;
  fontColor?: string;
  variant?:
    | "faixaWifi"
    | "referencias"
    | "minifaixaLaranja"
    | "minifaixaLaranjaEscuro"
    | "fixacaoLaranja"
    | "minifaixaCiano"
    | "minifaixaCianoEscuro"
    | "minifaixaVerde"
    | "minifaixaVerdeEscuro"
    | "minifaixaVerde2"
    | "minifaixaAzulEscuro"
    | "fixacaoAmarelo"
    | "fixacaoCiano"
    | "fixacaoVerde"
    | "fixacaoLaranja2"
    | "autoavaliacao"
    | "audiovisualLaranja"
    | "audiovisualAzul"
    | "audiovisualAmarelo"
    | "leitura"
    | "leituraLaranja"
    | "tarefa"
    | "tarefaAzul"
    | "artigos"
    | "minifaixaMarrom"
    | "avaliativo"
    | "ii"
    | "iii"
    | "iv"
    | "v"
    | "vi"
    | "minifaixalaranjaEDC"
    | "minifaixarosaEDC"
    | "minifaixaverdeEDC"
    | "minifaixaazulEDC"
    | "parapraticarEDC"
    | "atividadeavaliativaEDC";
  width?: string;
  height?: string;
  mobileWidth?: string;
  tabletHeight?: string;
  mobileHeight?: string;
}

export const Minibanner: React.FC<MinibannerProps> = ({
  children,
  variant = "ii",
  fontColor = "#FFFFFF",
  width,
  height,
  mobileWidth,
  tabletHeight,
  mobileHeight,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 660px)").matches;
  });
  const [isTablet, setIsTablet] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 661px) and (max-width: 1024px)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mqlMobile = window.matchMedia("(max-width: 660px)");
    const mqlTablet = window.matchMedia("(min-width: 661px) and (max-width: 1024px)");
    const onMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const onTabletChange = (e: MediaQueryListEvent) => setIsTablet(e.matches);
    setIsMobile(mqlMobile.matches);
    setIsTablet(mqlTablet.matches);
    mqlMobile.addEventListener("change", onMobileChange);
    mqlTablet.addEventListener("change", onTabletChange);
    return () => {
      mqlMobile.removeEventListener("change", onMobileChange);
      mqlTablet.removeEventListener("change", onTabletChange);
    };
  }, []);

  const getHeight = () => {
    if (height) return height;

    switch (variant) {
      case "autoavaliacao":
      case "fixacaoLaranja":
      case "fixacaoLaranja2":
      case "fixacaoAmarelo":
      case "fixacaoCiano":
      case "fixacaoVerde":
        return "87px";
      case "minifaixarosaEDC":
        return isMobile ? "100px" : "77px";
      case "atividadeavaliativaEDC":
      case "parapraticarEDC":
        return "94px";
      default:
        return "70px";
    }
  };

  const h5ClassName =
    variant === "fixacaoLaranja2"
      ? "pl-32 sm:pl-16 md:pl-24 font-bold text-3xl sm:text-3xl md:text-4xl text-center md:text-left"
      : variant === "minifaixarosaEDC"
      ? "pl-20 sm:pl-12 md:pl-14 font-semibold sm:text-center md:text-left"
      : "pl-16 sm:pl-12 md:pl-14 font-semibold text-center md:text-left";

  const backgroundImage = (): ImgAsset => {
    switch (variant) {
      case "faixaWifi":
        return faixaWifi;
      case "avaliativo":
        return avaliativo;
      case "artigos":
        return artigos;
      case "audiovisualAmarelo":
        return audiovisualAmarelo;
      case "audiovisualAzul":
        return audiovisualAzul;
      case "audiovisualLaranja":
        return audiovisualLaranja;
      case "minifaixaCiano":
        return minifaixaCiano;
      case "minifaixaVerde":
        return minifaixaVerde;
      case "minifaixaVerdeEscuro":
        return minifeixaVerdeEscuro;
      case "minifaixaVerde2":
        return minifaixaVerde2;
      case "minifaixaAzulEscuro":
        return minifaixaAzulEscuro;
      case "fixacaoLaranja":
        return fixacaoLaranja;
      case "fixacaoLaranja2":
        return fixacaoLaranja2;
      case "fixacaoAmarelo":
        return fixacaoAmarelo;
      case "fixacaoCiano":
        return fixacaoCiano;
      case "minifaixaCianoEscuro":
        return minifaixaCianoEscuro;
      case "fixacaoVerde":
        return fixacaoVerde;
      case "minifaixaLaranja":
        return minifaixaLaranja;
      case "minifaixaLaranjaEscuro":
        return minifaixaLaranjaEscuro;
      case "referencias":
        return referencias;
      case "autoavaliacao":
        return autoavaliacao;
      case "minifaixaMarrom":
        return minifaixaMarrom;
      case "tarefa":
        return tarefa;
      case "tarefaAzul":
        return tarefaAzul;
      case "leitura":
        return leitura;
      case "leituraLaranja":
        return leituraLaranja;
      case "ii":
        return iiBG;
      case "iii":
        return iiiBG;
      case "iv":
        return ivBG;
      case "v":
        return vBG;
      case "vi":
        return viBG;
      case "minifaixalaranjaEDC":
        return minifaixalaranjaEDC;
      case "minifaixarosaEDC":
        return minifaixarosaEDC;
      case "minifaixaverdeEDC":
        return minifaixaverdeEDC;
      case "minifaixaazulEDC":
        return minifaixaazulEDC;
      case "parapraticarEDC":
        return parapraticarEDC;
      case "atividadeavaliativaEDC":
        return atividadeavaliativaEDC;
      default:
        return iBG;
    }
  };

  const hasRoundedCorners =
    variant !== "fixacaoLaranja" &&
    variant !== "fixacaoLaranja2" &&
    variant !== "fixacaoVerde" &&
    variant !== "fixacaoCiano" &&
    variant !== "fixacaoAmarelo";

  return (
    <div className="w-full">
      <div
        className={`relative overflow-hidden my-10 max-w-full ${hasRoundedCorners ? "rounded-tr-2xl rounded-br-2xl" : ""}`}
        style={{
          width: isMobile ? mobileWidth || width || "fit-content" : width || "fit-content",
          height: isMobile ? mobileHeight || getHeight() : isTablet ? tabletHeight || getHeight() : getHeight(),
          color: fontColor,
        }}
      >
        <AssetBg src={backgroundImage()} className="absolute inset-0 w-full h-full object-cover object-left" />
        <div className="relative z-10 h-full px-4 sm:px-8 md:pl-16 flex items-center">
          <div className="flex gap-4 sm:gap-8 items-center justify-center">
            <h5 className={h5ClassName}>{children}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
