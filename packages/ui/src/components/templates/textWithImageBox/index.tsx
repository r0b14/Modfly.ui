import React from "react";

export interface TextWithImageBoxProps {
  title?: string;
  hasTitle?: boolean;
  children: React.ReactNode;
  backgroundColor?: string;
  borderColor?: string;
  imgSrc: string;
  imgSrc2?: string;
  imgMaxWidth?: number | string;
  isReverse?: boolean;
  justifyText?: boolean;
  titleColor?: string;
}

export const TextWithImageBox: React.FC<TextWithImageBoxProps> = ({
  title,
  titleColor = "#111",
  hasTitle = false,
  children,
  backgroundColor = "#F3E0E9",
  borderColor = "#F592C0",
  imgSrc,
  imgSrc2,
  imgMaxWidth,
  isReverse = false,
  justifyText = false,
}) => {
  const isNoBackground = !backgroundColor || /none/i.test(String(backgroundColor)) || /transparent/i.test(String(backgroundColor));
  const isNoBorder = !borderColor || /none/i.test(String(borderColor)) || /transparent/i.test(String(borderColor));

  return (
    <div className="mb-10">
      <div
        className={`
          flex flex-col md:flex-row items-start md:items-center justify-center
          w-full max-w-[1200px] mx-auto p-5 gap-5
          rounded-[7px] md:h-[311px] h-auto

          ${
            imgSrc2
              ? "md:flex-row md:justify-between"
              : isReverse
              ? "md:flex-row-reverse md:justify-around"
              : "md:flex-row md:justify-around"
          }
        `}
        style={{
          ...(isNoBackground ? {} : { backgroundColor }),
          ...(isNoBorder ? { border: "none" } : { border: `3px solid ${borderColor}` }),
        }}
      >
        {imgSrc2 && (
          <img
            src={imgSrc2}
            alt=""
            style={{ maxWidth: imgMaxWidth || "100%", width: "100%", height: "auto", objectFit: "contain" }}
          />
        )}

        {!imgSrc2 && (
          <img
            src={imgSrc}
            alt=""
            className="w-full md:w-auto"
            style={{ maxWidth: imgMaxWidth || "100%", width: "100%", height: "auto", objectFit: "contain" }}
          />
        )}

        <div className={imgSrc2 ? "w-full px-5" : "w-full md:w-[70%]"}>
          {hasTitle && (
            <header>
              <h4 className="font-semibold" style={{ color: titleColor }}>
                {title}
              </h4>
            </header>
          )}
          <div className={justifyText ? "sm:mt-2.5 text-justify" : "sm:mt-2.5 text-left"}>{children}</div>
        </div>

        {imgSrc2 && (
          <img
            src={imgSrc}
            alt=""
            className="w-full md:w-auto"
            style={{ maxWidth: imgMaxWidth || "100%", width: "100%", height: "auto", objectFit: "contain" }}
          />
        )}
      </div>
    </div>
  );
};
