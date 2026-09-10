import React, { useEffect, useState } from "react";

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
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src, fallback]);
  const image = failed ? fallback : src || fallback;
  if (!image) return null;
  const style: React.CSSProperties = {
    maxWidth,
    margin: imgCenter ? '0 auto' : undefined,
    display: imgCenter ? 'block' : 'inline-block',
  };

  return (
    <picture className={className}>

      <img
        src={image}
        onError={() => { if (!failed && fallback && fallback !== image) setFailed(true); }}
        alt={alt}
        style={style}
        className="w-full h-auto"
      />
    </picture>
  );
};
