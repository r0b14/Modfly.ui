import React, {useState, useEffect} from "react"; // Importe React
import avaliativo from "../../../assets/miniBanner/avaliativo.png";
import artigos from "../../../assets/miniBanner/artigos.png";
import audiovisualAmarelo from "../../../assets/miniBanner/audiovisual-amarelo.svg";
import audiovisualAzul from "../../../assets/miniBanner/audiovisual-azul.png";
import audiovisualLaranja from "../../../assets/miniBanner/audiovisual-laranja.png";
import autoavaliacao from "../../../assets/miniBanner/autoavaliacao.png";
import fixacaoVerde from "../../../assets/miniBanner/fixacaoVerde.svg";
import fixacaoLaranja from "../../../assets/miniBanner/fixacaoLaranja.png";
import fixacaoLaranja2 from "../../../assets/miniBanner/fixacaoLaranja2.svg";
import fixacaoAmarelo from "../../../assets/miniBanner/fixacaoAmarelo.svg";
import fixacaoCiano from "../../../assets/miniBanner/fixacaoCiano.svg";
import minifaixaCiano from "../../../assets/miniBanner/minifaixa-ciano.png";
import minifaixaCianoEscuro from "../../../assets/miniBanner/minifaixa-cianoEscuro.svg";
import minifaixaLaranja from "../../../assets/miniBanner/minifaixa-laranja.png";
import minifaixaLaranjaEscuro from "../../../assets/miniBanner/minifaixa-laranjaEscuro.svg";
import minifaixaVerde from "../../../assets/miniBanner/minifaixa-verde.png";
import minifeixaVerdeEscuro from "../../../assets/miniBanner/minifaixa-verdeEscuro.svg";
import minifaixaVerde2 from "../../../assets/miniBanner/minifaixa-verde2.svg";
import minifaixaMarrom from "../../../assets/miniBanner/minifaixa-marrom.png";
import minifaixaAzulEscuro from "../../../assets/miniBanner/minifaixaazulescuro.svg";
import referencias from "../../../assets/miniBanner/referencias.png";
import tarefa from "../../../assets/miniBanner/tarefa.png";
import tarefaAzul from "../../../assets/miniBanner/tarefa-azul.svg";
import leitura from "../../../assets/miniBanner/leitura.png";
import leituraLaranja from "../../../assets/miniBanner/leituraLaranja.svg";
import iBG from "../../../assets/miniBanner/i.png";
import iiBG from "../../../assets/miniBanner/ii.png";
import iiiBG from "../../../assets/miniBanner/iii.png";
import ivBG from "../../../assets/miniBanner/iv.png";
import vBG from "../../../assets/miniBanner/v.png";
import viBG from "../../../assets/miniBanner/vi.png";
import faixaWifi from "../../../assets/miniBanner/faixawifi.svg";
import minifaixalaranjaEDC from "../../../assets/miniBanner/minifaixaEDC1.svg";
import minifaixarosaEDC from "../../../assets/miniBanner/minifaixaEDC2.svg";
import minifaixaverdeEDC from "../../../assets/miniBanner/minifaixaEDC3.svg";
import minifaixaazulEDC from "../../../assets/miniBanner/minifaixaEDC4.svg";
import parapraticarEDC from "../../../assets/miniBanner/parapraticarEDC.svg";
import atividadeavaliativaEDC from "../../../assets/miniBanner/atividadeavaliativaEDC.svg";

const Minibanner: React.FC<MinibannerProps> = ({
  children,
  variant = "ii",
  fontColor = "#FFFFFF",
  width,
  height,
  mobileWidth,
  tabletHeight,
  mobileHeight,
}) => {
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
        return isMobile? "100px": "77px";
      case "atividadeavaliativaEDC":
      case "parapraticarEDC":
        return "94px";
      default:
        return "70px";
    }
  };
    // detect mobile breakpoint to adjust some variant heights
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
    // set initial
    setIsMobile(mqlMobile.matches);
    setIsTablet(mqlTablet.matches);
    if (mqlMobile.addEventListener) mqlMobile.addEventListener("change", onMobileChange);
    else mqlMobile.addListener(onMobileChange as any);
    if (mqlTablet.addEventListener) mqlTablet.addEventListener("change", onTabletChange);
    else mqlTablet.addListener(onTabletChange as any);
    return () => {
      if (mqlMobile.removeEventListener) mqlMobile.removeEventListener("change", onMobileChange);
      else mqlMobile.removeListener(onMobileChange as any);
      if (mqlTablet.removeEventListener) mqlTablet.removeEventListener("change", onTabletChange);
      else mqlTablet.removeListener(onTabletChange as any);
    };
  }, []);
  const h5ClassName =
    variant === "fixacaoLaranja2"
      ? "pl-32 sm:pl-16 md:pl-24 font-bold text-3xl sm:text-3xl md:text-4xl text-center md:text-left"
      : variant === "minifaixarosaEDC"
      ? "pl-20 sm:pl-12 md:pl-14 font-semibold sm:text-center md:text-left"
      : "pl-16 sm:pl-12 md:pl-14 font-semibold text-center md:text-left";

  const backgroundImage = () => {
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
        return iBG; // fallback
    }
  };

  return (
    <div className="w-full">
      <div
        className={`
      my-10 
      max-w-full
      px-4 sm:px-8 md:pl-16 
      flex items-center
      bg-cover bg-center
      ${
        variant !== "fixacaoLaranja" &&
        variant !== "fixacaoLaranja2" &&
        variant !== "fixacaoVerde" &&
        variant !== "fixacaoCiano" &&
        variant !== "fixacaoAmarelo"
          ? "rounded-tr-2xl rounded-br-2xl"
          : ""
      }
      bg-left
    `}
        style={{
          backgroundImage: `url(${backgroundImage()})`,
          backgroundRepeat: "no-repeat",
          width: isMobile ? (mobileWidth || width || "fit-content") : (width || "fit-content"),
          height: isMobile ? (mobileHeight || getHeight()) : (isTablet ? (tabletHeight || getHeight()) : getHeight()),
          color: fontColor,
        }}
      >
        <div className="flex gap-4 sm:gap-8 items-center justify-center">
          <h5 className={h5ClassName}>{children}</h5>
        </div>
      </div>
    </div>
  );
};
interface MinibannerProps {
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
    | "fixacaoLaranja"
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


export default Minibanner;
