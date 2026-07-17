import React from "react";

// Backgrounds (SVGs renderizados como componentes React via plugin SVGR configurado no tsup)
import ButtomBlueBg from "./assets/ButtomBlue.svg";
import ButtomBlueHoverBg from "./assets/ButtomBlueHover.svg";
import ButtomPinkBg from "./assets/ButtomPink.svg";
import ButtomPinkHoverBg from "./assets/ButtomPinkHover.svg";
import ButtomYellowBg from "./assets/ButtomYellow.svg";
import ButtomYellowHoverBg from "./assets/ButtomYellowHover.svg";

// Icons
import ClickYellowIcon from "./assets/clickYellow.svg";
import DocBlueIcon from "./assets/docBlue.svg";
import DocPinkIcon from "./assets/docPink.svg";
import DocYellowIcon from "./assets/docYellow.svg";
import VideoYellowIcon from "./assets/videoYellow.svg";

// Cor padrão do texto por esquema, conforme especificação do Figma
const SCHEME_TEXT_COLOR: Record<1 | 2 | 3, string> = {
  1: "#164165", // azul
  2: "#7f5e05", // amarelo
  3: "#9c355a", // rosa
};

export interface ButtonLinkProps {
  variant: 1 | 2 | 3; // 1: click, 2: doc, 3: video
  colorScheme?: 1 | 2 | 3; // 1: azul, 2: amarelo, 3: rosa
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
  colorScheme = 1,
  text,
  textColor,
  textClassName = 'tracking-wide m-0 p-0 font-bold sm:text-2xl',
  href,
  onClick,
  target = "_blank",
  className = "",
  width = 269,
  height = 60,
}) => {
  const resolvedTextColor = textColor ?? SCHEME_TEXT_COLOR[colorScheme];

  const DefaultBg = (() => {
    switch (colorScheme) {
      case 2: return ButtomYellowBg;
      case 3: return ButtomPinkBg;
      default: return ButtomBlueBg;
    }
  })();

  const HoverBg = (() => {
    switch (colorScheme) {
      case 2: return ButtomYellowHoverBg;
      case 3: return ButtomPinkHoverBg;
      default: return ButtomBlueHoverBg;
    }
  })();

  const VariantIcon = (() => {
    switch (variant) {
      case 1:
        return ClickYellowIcon;
      case 2:
        switch (colorScheme) {
          case 2: return DocYellowIcon;
          case 3: return DocPinkIcon;
          default: return DocBlueIcon;
        }
      case 3:
        return VideoYellowIcon;
      default:
        return ClickYellowIcon;
    }
  })();

  const buttonStyle: React.CSSProperties = {
    maxWidth: typeof width === 'number' ? `${width}px` : width,
    width: '100%',
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const buttonClassName = `
    group flex items-center justify-center
    font-bold text-2xl cursor-pointer
    border-none no-underline
    transition-all duration-300 ease-in-out
    relative mx-auto
    hover:no-underline hover:scale-105
    focus:outline-none
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const content = (
    <span
      className="relative z-10 space-x-2 flex items-center"
      style={colorScheme === 1 && variant === 2 ? { margin: "10px" } : undefined}
    >
      {text && (
        <p
          className={textClassName}
          style={{ color: resolvedTextColor }}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      <span className="flex items-center justify-center flex-shrink-0">
        <VariantIcon
          aria-hidden="true"
          className="sm:w-10 sm:h-10 w-8 h-8 object-contain transition-transform duration-300 ease-in-out"
        />
      </span>
    </span>
  );

  const buttonInner = (
    <>
      <DefaultBg
        aria-hidden="true"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      />
      <HoverBg
        aria-hidden="true"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
      />
      {content}
    </>
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
      >
        {buttonInner}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={buttonClassName}
      style={buttonStyle}
      onClick={onClick}
    >
      {buttonInner}
    </button>
  );
};
