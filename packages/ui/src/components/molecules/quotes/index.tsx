import React from "react";
import IconBlue from "./assets/quotesBlue.svg";
import IconGreen from "./assets/quotesGreen.svg";
import IconOrange from "./assets/quotesOrange.svg";
import IconPink from "./assets/quotesPink.svg";

export interface QuotesProps {
  children?: React.ReactNode;
  colorScheme?: "blue" | "green" | "orange" | "pink";
  width?: number;
}

const iconByColorScheme: Record<NonNullable<QuotesProps["colorScheme"]>, React.FC<React.SVGProps<SVGSVGElement>>> = {
  blue: IconBlue,
  green: IconGreen,
  orange: IconOrange,
  pink: IconPink,
};

export const Quotes: React.FC<QuotesProps> = ({ children, colorScheme = "blue", width }) => {
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
