import React, { ReactNode } from "react";
import faixaImg from "../../../assets/range/FaixaVerde.png";
import faixaImgBottom from "../../../assets/range/FaixaVerdeBaixo.svg";
import faixaImg2 from "../../../assets/range/FaixaVerde2.png";
import faixaImgBottom2 from "../../../assets/range/faixaVerdeBaixo2.png";
import faixaVerdetb from "../../../assets/range/faixaVerdetb.svg";
interface RangeProps {
  children: ReactNode;
  variant?: 1 | 2 | 3;
  bgColor?: string;
}

export const RangeGreen: React.FC<RangeProps> = ({ children, variant = 1 }) => {
  const isVariant3 = variant === 3;
  const isVariant2 = variant === 2;
  let faixaTop: string; 
  let faixaBottom: string;
  if (isVariant3) {
  faixaTop = faixaVerdetb;
  faixaBottom = faixaVerdetb;}
  else if (isVariant2) {
  faixaTop = faixaImgBottom2;
  faixaBottom = faixaImgBottom2;}
  else { // Variant 1
  faixaTop = faixaImg;
  faixaBottom = faixaImgBottom;
 }
// Determinação dos Estilos
  const background = isVariant3 ? "#F8FFE4" : isVariant2 ? "#F8FFE4" : "#F2EFD2"; // Exemplo de cor para Variant 3
  const radius = isVariant3 ? "20px" : isVariant2 ? "20px" : "0px"; // Exemplo de raio para Variant 3
  
  // classes de largura por variant
  const containerWidth = isVariant3 ? "1065px" : isVariant2 ? "1065px" : "100%";
  const faixaHeight = isVariant3 ? 22 : isVariant2 ? 22 : 44; // Exemplo de altura para Variant 3

  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundColor: background,
        maxWidth: containerWidth,
        margin: "0 auto",
        borderRadius: radius,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${faixaTop})`,
          height: faixaHeight,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div
        className={`flex max-md:flex-col justify-center items-center py-10 px-10 gap-14 mt-[-1px]`}
        style={{ backgroundColor: background }}
      >
        {children}
      </div>
      <div
        style={{
          backgroundImage: `url(${faixaBottom})`,
          height: faixaHeight,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};
