import React, { useState } from "react";

import buttomYellow1 from "../../../assets/buttomlink/buttomYellow-233.png";
import buttomYellow1Houver from "../../../assets/buttomlink/buttomYellow-233-2.png";
import buttomYellow2 from "../../../assets/buttomlink/buttomYellow-253.png";
import buttomYellow2Houver from "../../../assets/buttomlink/buttomYellow-253-2.png";
import buttomYellow3 from "../../../assets/buttomlink/buttomYellow-377.png";
import buttomYellow3Houver from "../../../assets/buttomlink/buttomYellow-377-2.png";
import buttomYellow4 from "../../../assets/buttomlink/buttomYellow-405.png";
import buttomYellow4Houver from "../../../assets/buttomlink/buttomYellow-405-2.png";
import buttomYellow5 from "../../../assets/buttomlink/buttomYellow.png";
import buttomYellow5Houver from "../../../assets/buttomlink/buttomYellow2.png";

import buttomBlue from "../../../assets/buttomlink/ButtomBlue.png";
import buttomBlue2 from "../../../assets/buttomlink/ButtomBlue2.png";
import buttomPink from "../../../assets/buttomlink/buttomPink.png";
import buttomPink2 from "../../../assets/buttomlink/buttomPink2.png";

// Icons
import clickYellow from "../../../assets/buttomlink/clickYellow.svg";
import docBlue from "../../../assets/buttomlink/docBlue.svg";
import docPink from "../../../assets/buttomlink/docPink.svg";
import docYellow from "../../../assets/buttomlink/docYellow.svg";
import videoYellow from "../../../assets/buttomlink/videoYellow.svg";

interface ButtonLinkProps {
  variant: 1 | 2 | 3;
  variantmodel?: 1 | 2 | 3; // 1: azul, 2: amarelo, 3: rosa
  text?: string;
  textColor?: string; // Cor do texto
  textClassName?: string; // className for the inner text element
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  width?: string | number;
  height?: string | number;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
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

  const getYellowVariant = () => {
    const numericWidth = typeof width === 'string' ? parseInt(width) : width;
    
    // Determinar qual variante amarela usar baseado no width
    if (numericWidth >= 234 && numericWidth <= 253) {
      return isHovered ? buttomYellow1Houver : buttomYellow1;
    } else if (numericWidth >= 378 && numericWidth <= 410) {
      return isHovered ? buttomYellow3Houver : buttomYellow3;
    } else if (numericWidth >= 430 && numericWidth <= 600) {
      return isHovered ? buttomYellow5Houver : buttomYellow5;
    } else if (numericWidth > 600) {
      return isHovered ? buttomYellow5Houver : buttomYellow5;
    } else {
      // Padrão para valores fora dos ranges
      return isHovered ? buttomYellow2Houver : buttomYellow2;
    }
  };

  const getIcon = () => {
    // Para variantmodel 2 (amarelo), usar lógica especial baseada no width
    if (variantmodel === 2) {
      return getYellowVariant();
    }

    // Para hover, sempre usar as imagens com "2"
    if (isHovered) {
      switch (variantmodel) {
        case 1: // Azul
          return buttomBlue2;
        case 3: // Rosa
          return buttomPink2;
        default:
          return buttomBlue2;
      }
    }

    // Estado normal - usar as imagens sem "2"
    switch (variantmodel) {
      case 1: // Azul
        return buttomBlue;
      case 3: // Rosa
        return buttomPink;
      default:
        return buttomBlue;
    }
  };

  const getVariantIcon = () => {
    switch (variant) {
      case 1:
        return clickYellow;
      case 2:
        // Para variant 2, usar ícone baseado no variantmodel
        switch (variantmodel) {
          case 1:
            return docBlue;
          case 2:
            return docYellow;
          case 3:
            return docPink;
          default:
            return docBlue;
        }
      case 3:
        return videoYellow;
      default:
        return clickYellow;
    }
  };

  const buttonStyle = {
    maxWidth: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url(${getIcon()})`,
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

export default ButtonLink;
