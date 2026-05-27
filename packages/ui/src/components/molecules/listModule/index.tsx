import React from "react";

export interface ListModuleProps {
  borderColor?: string;
  title?: string;
  subtitle?: string;
  textList?: string[];
}

export const ListModule: React.FC<ListModuleProps> = ({ 
  borderColor = "#0D4490", 
  title, 
  subtitle, 
  textList 
}) => {
  return (
    <div
      className="my-6"
      style={{
        borderColor,
        borderLeftWidth: "3.5px",
        borderLeftStyle: "solid",
        paddingLeft: "0.8rem",
      }}
    >
      {title && (
        <div className="mb-2">
          <span className="font-bold text-[#333333]">
            <span className="text-[#0D4490] font-bold">{title}</span>
            {subtitle && <span> | {subtitle}</span>}
          </span>
        </div>
      )}
      <div>
        <ul className="list-[circle] pl-5 marker:text-[#0D4490] text-[#444444]">
          {textList &&
            textList.map((text, index) => (
              <li key={index} className="mb-2">
                {text}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
