import React from "react";

export interface IndentCitationImgProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  title?: string;
  imageSrc?: string;
  text?: React.ReactNode;
  align?: "items-center" | "items-start" | "items-end";
  borderColor?: string;
}

export const IndentCitationImg: React.FC<IndentCitationImgProps> = ({
  children,
  backgroundColor = "#BAE3F3",
  title,
  imageSrc,
  borderColor = "#549d90",
  text,
  align = "items-center",
}) => {
  return (
    <div className="mb-10 py-8 px-6 md:px-20 w-full" style={{ backgroundColor }}>
      {title && <h3 className="w-full text-[#333333] font-bold text-2xl mb-6">{title}</h3>}
      <div className={`flex flex-row gap-5 max-md:gap-2 max-md:items-start ${align}`}>
        {imageSrc && (
          <img
            src={imageSrc}
            alt=""
            className="max-md:max-w-[80px] max-w-[100px] h-auto object-contain"
          />
        )}
        <div 
          className="max-md:border-l-[3px] max-md:pl-4 text-[#333333] leading-relaxed" 
          style={{ borderLeftColor: borderColor }}
        >
          {text}
        </div>
      </div>
      {children && <div className="mt-5 text-[#333333] leading-relaxed">{children}</div>}
    </div>
  );
};
