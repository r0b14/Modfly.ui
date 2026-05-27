import React, { ReactNode } from "react";
import faixaBottom from "../../../assets/range/FaixaAzul-Bottom.svg";
import faixaTop from "../../../assets/range/FaixaAzul-Top.svg";


interface RangeProps {
  children: ReactNode;
  text?: ReactNode;
  bgColor?: string;
  isCustomContent?: boolean;
}

export const RangeBlue: React.FC<RangeProps> = ({ children, text, bgColor = "#E3F4FF", isCustomContent }) => {
  return (
    <div style={{ backgroundColor: bgColor, width: "100%" }}>
      <div style={{ backgroundImage: `url(${faixaTop})`, height: "43px", width: "100%" }} />
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
                {typeof text === "string" ? (
                  <p className="mb-2.5 items-center">{text}</p>
                ) : (
                  text
                )}
              </div>
            )}
          </>
        )}
      </div>
      <div style={{ backgroundImage: `url(${faixaBottom})`, height: "43px", width: "100%" }} />
    </div>
  );
};
