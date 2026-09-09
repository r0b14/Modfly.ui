import React from "react";

export { ButtonLinkLegacy } from "./legacy";
export type { ButtonLinkLegacyProps } from "./legacy";

// SVGs renderizados como componentes React via plugin SVGR configurado no tsup
import ArrowBadgeDefault from "./assets/arrowBadgeDefault.svg";
import ArrowBadgeHover from "./assets/arrowBadgeHover.svg";
import TextureOverlay from "./assets/textureOverlay.svg";

export interface ButtonLinkProps {
  /** Rótulo do botão */
  children: React.ReactNode;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: () => void;
  /** Exibe o selo com a seta à esquerda do rótulo (padrão: true) */
  showIcon?: boolean;
  /** Substitui o ícone do estado padrão */
  icon?: React.ReactNode;
  /** Substitui o ícone exibido no hover */
  hoverIcon?: React.ReactNode;
  className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  href,
  target = "_blank",
  onClick,
  showIcon = true,
  icon,
  hoverIcon,
  className = "",
}) => {
  const containerClassName = `
    group relative inline-flex items-center gap-4
    h-16 px-7 py-[7px] rounded-full overflow-hidden
    bg-[#FFB89F] shadow-[0_0_6.8px_rgba(0,0,0,0.35)]
    hover:bg-[#F59978] hover:shadow-[0_0_6.8px_rgba(0,0,0,0.25)]
    transition-all duration-300 ease-in-out
    cursor-pointer border-none no-underline hover:no-underline
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#881438] focus-visible:ring-offset-2
    ${className}
  `.replace(/\s+/g, " ").trim();

  const inner = (
    <>
      <TextureOverlay
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      {showIcon && (
        <span className="relative z-10 w-[51px] h-[50px] shrink-0">
          <span className="absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
            {icon ?? <ArrowBadgeDefault className="w-full h-full" />}
          </span>
          <span className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            {hoverIcon ?? <ArrowBadgeHover className="w-full h-full" />}
          </span>
        </span>
      )}
      <span className="relative z-10 whitespace-nowrap font-medium text-[22px] leading-[33px] text-[#881438]">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={containerClassName}
        onClick={onClick}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={containerClassName} onClick={onClick}>
      {inner}
    </button>
  );
};
