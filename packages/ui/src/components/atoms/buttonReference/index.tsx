import React from "react";
import plus from "./assets/plus.png";
import minus from "./assets/minus.png";

export interface ButtonReferenceProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ButtonReference: React.FC<ButtonReferenceProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      className="flex items-center justify-center mt-5 cursor-pointer shadow-md text-[20px] text-[#111] bg-[#FFAB00] hover:bg-[#EC9E00] transition-all py-3 px-8 rounded-[20px] w-full max-w-[200px]"
      onClick={onToggle}
    >
      <img
        src={isOpen ? minus : plus}
        alt=""
        aria-hidden="true"
        className="mr-2 ml-[-8px] w-[24px]"
      />
      {isOpen ? "Ver menos" : "Ver mais"}
    </button>
  );
};
