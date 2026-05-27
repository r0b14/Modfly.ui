import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";

export const Wrapper: React.FC<LayoutProps> = ({
  children,
  fullWidthWithoutBorderRadius,
  backgroundColor,
  borderColor,
  backImgs = [],
  variants = [], // pode ser string (mesma variante para todos) ou array
}) => {
  const { width } = useWindowDimensions();
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImage = backImgs[currentSlide]
    ? `url(${backImgs[currentSlide]})`
    : "none";

  const styles = css`
    width: 100%; // voltar aqui para deixar mais especifico para o carrossel desse modulo
    background-color: ${backgroundColor};
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${width <= 768
      ? "100px 48px 100px"
      : width <= 1280
      ? "100px 52px 100px"
      : "0px 0px 0px"};
    padding-bottom: 80px;
    background-image: ${backgroundImage};
    background-color: ${backgroundColor || 'transparent'};
    background-size: cover;
    border-width: 6px;
    border-style: solid;
    border-color: ${borderColor};
    border-radius: 40px;
    transition: background-image 0.5s ease-in-out;
  `;

  // Determina a variante atual: aceita `variants` como string ou array
  const currentVariant =
    typeof variants === "string"
      ? variants
      : Array.isArray(variants)
      ? variants[currentSlide]
      : undefined;

  // Clona o filho e injeta as props
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        onSlideChange: setCurrentSlide,
        variant: currentVariant, // pode ser string ou undefined
      });
    }
    return child;
  });

  return (
    <>
      {fullWidthWithoutBorderRadius ? (
        <div>
          <div className="flex flex-col items-center w-full">
            <div className={styles}>
              <div style={{ maxWidth: "1400px" }} className={styles + " py-8"}>
                <div className="w-full">{childrenWithProps}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <div className="flex flex-col items-center w-full">
            <div style={{ maxWidth: "1400px" }} className={styles + " py-8"}>
              <div className="w-full">{childrenWithProps}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
  borderColor: string;
  fullWidthWithoutBorderRadius?: true;
  backImgs?: string[];
  variants?: string | string[]; // pode ser string (mesma variante) ou array
}

// hook
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
