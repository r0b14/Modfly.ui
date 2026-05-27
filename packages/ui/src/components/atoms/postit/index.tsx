import React from "react";
import topImg from "./assets/top.png";
import bottomImg from "./assets/bottom.png";

export interface PostitProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Postit: React.FC<PostitProps> = ({ children, style, className }) => {
  return (
    <div
      className={`relative flex flex-col items-stretch mx-auto ${className || ""}`}
      style={{ width: 383, minHeight: 397, ...style }}
    >
      {/* Top image */}
      <img src={topImg} alt="Postit Top" className="w-full block" />
      
      {/* Body */}
      <div 
        className="w-full bg-[#285C93] text-white relative box-border flex-1 flex flex-col"
        style={{ minHeight: 339, fontSize: 22 }}
      >
        <div 
          className="w-full text-left pt-10 px-8 pb-9 flex-1"
        >
          {children}
        </div>
        
        {/* Bottom image */}
        <img 
          src={bottomImg} 
          alt="Postit Bottom" 
          className="absolute right-0 -bottom-[1px] z-[3]" 
        />
      </div>
    </div>
  );
};
