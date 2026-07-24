import React from "react";
import FaixaTop from "./assets/FaixaAzul-Top.svg";
import FaixaBottom from "./assets/FaixaAzul-Bottom.svg";

export interface RangeBlueProps {
  children: React.ReactNode;
  text?: React.ReactNode;
  bgColor?: string;
  isCustomContent?: boolean;
}

export const RangeBlue: React.FC<RangeBlueProps> = ({
  children,
  text,
  bgColor = "#E3F4FF",
  isCustomContent,
}) => {
  return (
    <div style={{ backgroundColor: bgColor, width: "100%" }}>
      <FaixaTop aria-hidden="true" preserveAspectRatio="none" style={{ height: 43, width: "100%" }} />
      <div
        className="flex max-md:flex-col justify-center items-center py-14 px-5 gap-14 mt-[-1px]"
        style={{ backgroundColor: bgColor, width: "100%" }}
      >
        {isCustomContent ? (
          children
        ) : (
          <>
            {children}
            {text && (
              <div className="flex flex-col w-[50%]">
                {typeof text === "string" ? <p className="mb-2.5 items-center">{text}</p> : text}
              </div>
            )}
          </>
        )}
      </div>
      <FaixaBottom aria-hidden="true" preserveAspectRatio="none" style={{ height: 43, width: "100%" }} />
    </div>
  );
};
