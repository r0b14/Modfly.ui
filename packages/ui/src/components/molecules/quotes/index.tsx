import React from "react";

export { QuotesLegacy } from "./legacy";
export type { QuotesLegacyProps } from "./legacy";

// Aspas do redesign GFD (SVGs renderizados como componentes React via plugin SVGR no tsup)
import IconPurple from "./assets/quotePurple.svg";
import IconBlue from "./assets/quoteBlue.svg";
import IconYellow from "./assets/quoteYellow.svg";
import IconOrange from "./assets/quoteOrange.svg";
import IconBeige from "./assets/quoteBeige.svg";

export interface QuotesProps {
  children?: React.ReactNode;
  colorScheme?: "purple" | "blue" | "yellow" | "orange" | "beige";
  width?: number;
}

const iconByColorScheme: Record<NonNullable<QuotesProps["colorScheme"]>, React.FC<React.SVGProps<SVGSVGElement>>> = {
  purple: IconPurple,
  blue: IconBlue,
  yellow: IconYellow,
  orange: IconOrange,
  beige: IconBeige,
};

export const Quotes: React.FC<QuotesProps> = ({ children, colorScheme = "blue", width }) => {
  const Icon = iconByColorScheme[colorScheme];

  return (
    <div className="flex flex-col items-end gap-6 mx-auto">
      <div
        className="pl-10 text-[22px] flex items-start gap-5"
        style={{ width: width ? `${width}%` : "100%" }}
      >
        <Icon aria-hidden="true" className="object-contain shrink-0" width={100} />
        <div className="w-full text-left">{children}</div>
      </div>
    </div>
  );
};
