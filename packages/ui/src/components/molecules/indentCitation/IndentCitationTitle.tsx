import React from "react";

export interface IndentCitationTitleProps {
  children?: React.ReactNode;
  title?: string;
  borderColor?: string;
  backgroundColor?: string;
}

export const IndentCitationTitle: React.FC<IndentCitationTitleProps> = ({ 
  children, 
  borderColor = "#0D4490", 
  backgroundColor, 
  title 
}) => {
  const backgroundStyle = backgroundColor ? { backgroundColor } : {};

  return (
    <div className="py-8 sm:pl-12 md:pl-20 w-full" style={backgroundStyle}>
      <div
        className="md:w-[85%] ml-auto max-md:ml-10 px-6"
        style={{ borderLeft: `5px solid ${borderColor}`, ...backgroundStyle }}
      >
        {title && <p className="font-bold text-[#0D4490] mb-2">{title}</p>}
        <div className="text-[#333333] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};
