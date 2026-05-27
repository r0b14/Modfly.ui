import React from "react";

export interface ImageFallbackProps {
  src: string; // Imagem WEBP (principal)
  fallback: string; // Imagem PNG/JPG (reserva)
  imgCenter?: boolean;
  maxWidth?: string;
  alt?: string;
  className?: string;
}

export const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  fallback,
  imgCenter = false,
  maxWidth = '100%',
  alt = "",
  className = "",
}) => {
  const style: React.CSSProperties = {
    maxWidth,
    margin: imgCenter ? '0 auto' : undefined,
    display: imgCenter ? 'block' : 'inline-block',
  };

  return (
    <picture className={className}>
      <source srcSet={src} type="image/webp" />
      <img
        src={fallback}
        alt={alt}
        style={style}
        className="w-full h-auto"
      />
    </picture>
  );
};
