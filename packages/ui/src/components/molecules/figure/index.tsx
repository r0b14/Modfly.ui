import React, { useEffect, useState } from "react";
import { ImageFallback } from "../../atoms/imageFallback";

export interface FigureProps {
  imgSrc?: string;
  imgFb?: string;
  imgSrcMobile?: string;
  type?: string;
  number?: string | number;
  caption?: React.ReactNode;
  reference?: React.ReactNode;
  children?: React.ReactNode;
  maxWidth?: string;
  smallFont?: boolean;
}

export const Figure: React.FC<FigureProps> = ({
  imgSrc = '',
  imgFb = '',
  imgSrcMobile = '',
  type,
  number,
  caption,
  reference,
  children,
  maxWidth = "100%",
  smallFont = false,
}) => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 600 : false);
  const [showMessage, setShowMessage] = useState(
    smallFont && (typeof window !== 'undefined' ? window.innerWidth < 600 : false)
  );

  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyMobile = window.innerWidth < 600;
      setIsMobile(isCurrentlyMobile);
      setShowMessage(smallFont && isCurrentlyMobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [smallFont]);

  const finalImgSrc = isMobile && imgSrcMobile ? imgSrcMobile : imgSrc;
   
  return (
    <div className="flex flex-col justify-center items-center text-center md:px-4 relative mb-10 mx-auto">
      {(number || caption || type) && (
        <div className="referencia mb-2">
          {number ? (
            <p>
              <strong>
                {type} {number}:{" "}
              </strong>
              {caption}
            </p>
          ) : (
            <p>{caption}</p>
          )}
        </div>
      )}

      <div className="mb-5 relative w-full flex justify-center">
        {showMessage && (
          <div className="p-4 absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-10 rounded-lg">
            <div className="bg-gradient-to-r from-[#6A1B9A] to-[#9C27B0] text-white p-4 flex flex-col items-center justify-center rounded-2xl shadow-xl">
              <p className="text-white font-medium">
                Para melhor experiência, vire o celular.
              </p>
            </div>
          </div>
        )}
        
        <div className={`w-full ${showMessage ? 'grayscale' : ''}`}>
          <ImageFallback
            maxWidth={maxWidth}
            src={finalImgSrc}
            fallback={imgFb}
            imgCenter
          />
        </div>
        {children}
      </div>
      
      {reference && (
        <div className="referencia text-sm opacity-80 italic">
          {reference}
        </div>
      )}
    </div>
  );
};
