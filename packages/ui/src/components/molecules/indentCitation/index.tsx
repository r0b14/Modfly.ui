import React from "react";

export interface IndentCitationProps {
  children?: React.ReactNode;
  borderColor?: string;
  backgroundColor?: string;
}

export const IndentCitation: React.FC<IndentCitationProps> = ({ 
  children, 
  borderColor = '#0D4490', 
  backgroundColor 
}) => {
  const backgroundStyle = backgroundColor ? { backgroundColor } : {};
  
  return (
    <div className="py-8 sm:pl-12 md:pl-20 w-full" style={backgroundStyle}>
      <div
        className="md:w-[85%] ml-auto max-md:ml-10 px-6"
        style={{ borderLeft: `5px solid ${borderColor}`, ...backgroundStyle }}
      >
        <div className="text-[#333333] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export * from "./IndentCitationBg";
export * from "./IndentCitationImg";
export * from "./IndentCitationTitle";
