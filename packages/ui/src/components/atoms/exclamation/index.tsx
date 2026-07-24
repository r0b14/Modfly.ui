import React from "react";
import Icon from "./assets/icon.svg";

export interface ExclamationProps {
  title?: string;
  children?: React.ReactNode;
  link?: string;
  linkLabel?: string;
}

export const Exclamation: React.FC<ExclamationProps> = ({
  title,
  children,
  link,
  linkLabel = "Baixe aqui",
}) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h3 className="w-full">{title}</h3>
      <div className="w-full max-w-[1066px] flex items-center justify-start gap-5">
        <Icon aria-hidden="true" />
        <div>
          {children}
          <div className="mb-2.5"></div>
          <a href={link} target="_blank" rel="noreferrer">
            {linkLabel}
          </a>
        </div>
      </div>
    </div>
  );
};
