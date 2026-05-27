import React, { useEffect, useState } from "react";

import ImageFallback from "../../atoms/imageFallback/ImageFallback";

export const Figure: React.FC<FigureProps> = ({
  imgSrc = '', // Imagem WEBP
  imgFb = '', // Imagem PNG
  imgSrcMobile = '',
  type,
  number,
  caption,
  reference,
  children,
  maxWidth = "100%",
  smallFont = false, // Adicionada a prop smallFont
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [showMessage, setShowMessage] = useState(
    smallFont && window.innerWidth < 600
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
    <div className="flex flex-col justify-center items-center text-center md:px-4 relative">
      {(number || caption || type) && (
        <>
          {number && <p> <p className="referencia">
            <strong>
              {type} {number}:{" "}
            </strong>
            {caption}
          </p></p>}
          {!number && <p> <p className="referencia">
           
            {caption}
          </p></p>}
         
        </>
      )}

      <div className="mb-5 relative">
        {showMessage && (
          <div className="p-4 absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="bg-gradient-to-r from-customPurple to-customLavender text-white min-[420px]:p-4 p-2  flex flex-col items-center justify-center rounded-2xl">
              <div className="flex">
                <p className="text-white mt-5 mx-5 font-medium	">
                  Para melhor experiência, vire o celular.
                </p>
              </div>
              {/* <button
                className="bg-gray-200 text-black px-2 py-1 rounded"
                onClick={() => setShowMessage(false)}
              >
                fechar
              </button> */}
            </div>
          </div>
        )}
        <div className={showMessage ? 'grayscale' : ''}>
          <ImageFallback
            maxWidth={maxWidth}
            src={finalImgSrc} // Lógica para escolher a imagem
            fallback={imgFb}
          />
        </div>
        {children && children}
      </div>
      <p className="referencia">{reference}</p>
    </div>
  );
};

interface FigureProps {
  imgSrc?: string;
  imgFb?: string;
  imgSrcMobile?: string;
  type?: string;
  number?: string | number;
  caption?: React.ReactNode;
  reference?: string | any;
  children?: React.ReactNode;
  maxWidth?: string;
  smallFont?: boolean; // Adicionada a prop smallFont
}
