import React from "react";

// Versão anterior ao redesign GFD (2026-07), mantida propositalmente ao lado do novo
// Quotes: aspas do design antigo nos esquemas blue/green/orange/pink.

import IconBlue from "./assets/quotesBlue.svg";
import IconGreen from "./assets/quotesGreen.svg";
import IconOrange from "./assets/quotesOrange.svg";
import IconPink from "./assets/quotesPink.svg";

export interface QuotesLegacyProps {
  children?: React.ReactNode;
  colorScheme?: "blue" | "green" | "orange" | "pink";
  width?: number;
}

const iconByColorScheme: Record<NonNullable<QuotesLegacyProps["colorScheme"]>, React.FC<React.SVGProps<SVGSVGElement>>> = {
  blue: IconBlue,
  green: IconGreen,
  orange: IconOrange,
  pink: IconPink,
};

export const QuotesLegacy: React.FC<QuotesLegacyProps> = ({ children, colorScheme = "blue", width }) => {
  const Icon = iconByColorScheme[colorScheme];

  return (
    <div className="flex flex-col items-end gap-6 mx-auto">
      <div
        className="pl-10 text-[22px] flex items-start gap-5"
        style={{ width: width ? `${width}%` : "100%" }}
      >
        <Icon aria-hidden="true" className="object-contain" width={100} />
        <div className="w-full text-left">{children}</div>
      </div>
    </div>
  );
};
