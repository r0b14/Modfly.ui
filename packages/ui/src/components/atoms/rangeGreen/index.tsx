import React from "react";
import FaixaVerdeTop from "./assets/FaixaVerde.png";
import FaixaVerdeBaixo from "./assets/FaixaVerdeBaixo.svg";
import FaixaVerdeBaixo2 from "./assets/faixaVerdeBaixo2.png";
import FaixaVerdeTb from "./assets/faixaVerdetb.svg";

export interface RangeGreenProps {
  children: React.ReactNode;
  variant?: 1 | 2 | 3;
}

const HEIGHT_BY_VARIANT: Record<1 | 2 | 3, number> = { 1: 44, 2: 22, 3: 22 };

export const RangeGreen: React.FC<RangeGreenProps> = ({ children, variant = 1 }) => {
  const background = variant === 1 ? "#F2EFD2" : "#F8FFE4";
  const radius = variant === 1 ? "0px" : "20px";
  const containerWidth = variant === 1 ? "100%" : "1065px";
  const height = HEIGHT_BY_VARIANT[variant];
  const stripStyle = { height, width: "100%", objectFit: "cover" as const };

  const topStrip =
    variant === 1 ? (
      <img src={FaixaVerdeTop} alt="" aria-hidden="true" style={stripStyle} />
    ) : variant === 2 ? (
      <img src={FaixaVerdeBaixo2} alt="" aria-hidden="true" style={stripStyle} />
    ) : (
      <FaixaVerdeTb aria-hidden="true" preserveAspectRatio="none" style={stripStyle} />
    );

  const bottomStrip =
    variant === 1 ? (
      <FaixaVerdeBaixo aria-hidden="true" preserveAspectRatio="none" style={stripStyle} />
    ) : variant === 2 ? (
      <img src={FaixaVerdeBaixo2} alt="" aria-hidden="true" style={stripStyle} />
    ) : (
      <FaixaVerdeTb aria-hidden="true" preserveAspectRatio="none" style={stripStyle} />
    );

  return (
    <div
      className="overflow-hidden"
      style={{ backgroundColor: background, maxWidth: containerWidth, margin: "0 auto", borderRadius: radius }}
    >
      {topStrip}
      <div
        className="flex max-md:flex-col justify-center items-center py-10 px-10 gap-14 mt-[-1px]"
        style={{ backgroundColor: background }}
      >
        {children}
      </div>
      {bottomStrip}
    </div>
  );
};
