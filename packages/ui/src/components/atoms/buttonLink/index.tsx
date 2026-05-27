import React, { useState } from "react";

// Backgrounds
import buttomBlue from "./assets/ButtomBlue.svg";
import buttomBlueHover from "./assets/ButtomBlueHover.svg";
import buttomPink from "./assets/ButtomPink.svg";
import buttomPinkHover from "./assets/ButtomPinkHover.svg";
import buttomYellow from "./assets/ButtomYellow.svg";
import buttomYellowHover from "./assets/ButtomYellowHover.svg";

// Icons
import clickYellow from "./assets/clickYellow.svg";
import docBlue from "./assets/docBlue.svg";
import docPink from "./assets/docPink.svg";
import docYellow from "./assets/docYellow.svg";
import videoYellow from "./assets/videoYellow.svg";

export interface ButtonLinkProps {
  variant: 1 | 2 | 3; // 1: click, 2: doc, 3: video
  variantmodel?: 1 | 2 | 3; // 1: azul, 2: amarelo, 3: rosa
  text?: string;
  textColor?: string;
  textClassName?: string;
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  width?: string | number;
  height?: string | number;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant,
  variantmodel = 1,
  text,
  textColor = 'black',
  textClassName = 'tracking-wide m-0 p-0 font-bold sm:text-2xl',
  href,
  onClick,
  target = "_blank",
  className = "",
  width = 269,
  height = 60,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBackground = () => {
    if (isHovered) {
      switch (variantmodel) {
        case 1: return buttomBlueHover;
        case 2: return buttomYellowHover;
        case 3: return buttomPinkHover;
        default: return buttomBlueHover;
      }
    }

    switch (variantmodel) {
      case 1: return buttomBlue;
      case 2: return buttomYellow;
      case 3: return buttomPink;
      default: return buttomBlue;
    }
  };

  const getVariantIcon = () => {
    switch (variant) {
      case 1:
        return clickYellow;
      case 2:
        switch (variantmodel) {
          case 1: return docBlue;
          case 2: return docYellow;
          case 3: return docPink;
          default: return docBlue;
        }
      case 3:
        return videoYellow;
      default:
        return clickYellow;
    }
  };

  const buttonStyle: React.CSSProperties = {
    maxWidth: typeof width === 'number' ? `${width}px` : width,
    width: '100%',
    height: typeof height === 'number' ? `${height}px` : height,
    backgroundImage: `url(${getBackground()})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const buttonClassName = `
    flex items-center justify-center
    font-bold text-2xl cursor-pointer 
    border-none no-underline 
    transition-all duration-300 ease-in-out 
    relative mx-auto
    hover:no-underline hover:scale-105 
    focus:outline-none
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const content = (
    <div
      className="space-x-2 flex items-center"
      style={variantmodel === 1 && variant === 2 ? { margin: "10px" } : undefined}
    >
      {text && (
        <p
          className={textClassName}
          style={{ color: textColor }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      <div className="flex items-center justify-center flex-shrink-0">
        <img
          src={getVariantIcon()}
          alt="Ícone"
          className="sm:w-10 sm:h-10 w-8 h-8 object-contain transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={buttonClassName}
        style={buttonStyle}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={buttonClassName}
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
};
