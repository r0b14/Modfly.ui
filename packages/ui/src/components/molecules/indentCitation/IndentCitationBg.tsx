import React from "react";
import imgbg1 from "./assets/ImgBg1.jpg";
import imgbg2 from "./assets/ImgBg2.jpg";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

export interface IndentCitationBgProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  title?: string;
  text?: React.ReactNode;
  option?: "yellow" | "pink";
}

export const IndentCitationBg: React.FC<IndentCitationBgProps> = ({ 
  children, 
  backgroundColor = "#BAE3F3", 
  title, 
  text, 
  option = "yellow" 
}) => {
  const bgImage = option === "yellow" ? imgbg1 : imgbg2;
  const mainImage = option === "yellow" ? img1 : img2;

  const divStyle = {
    backgroundColor,
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="mb-10 py-8 px-6 md:px-20" style={divStyle}>
      {title && (
        <h4 className={`w-full font-bold text-xl mb-5 ${option === "yellow" ? "text-[#333333]" : "text-[#742B0B]"}`}>
          {title}
        </h4>
      )}
      <div className="flex flex-row gap-5 items-center w-full max-md:items-start">
        {mainImage && (
          <img
            className="max-md:max-w-[80px] max-w-[100px] h-auto object-contain"
            src={mainImage}
            alt=""
          />
        )}
        <div className="max-md:border-l-2 max-md:border-[#742B0B] max-md:pl-4 text-[#333333] leading-relaxed">
          {text}
        </div>
      </div>
      {children && (
        <div className="mt-5 text-[#333333] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};
