const ImageFallback: React.FC<ImageFallbackProps> = ({
  src, // Imagem WEBP
  fallback, // Imagem PNG
  imgCenter = false,
  maxWidth = '100%',
}) => {
  
  return (
    <div>
      <picture>
        <source srcSet={src} type="image/webp" />
        <img
          style={
            imgCenter
              ? { margin: '0 auto', maxWidth: maxWidth }
              : { maxWidth: maxWidth }
          }
          src={fallback}
          alt=""
          className="w-full sm:!hidden"
        />
        <img
          style={
            imgCenter
              ? { margin: '0 auto', maxWidth: maxWidth }
              : { maxWidth: maxWidth }
          }
          src={fallback}
          alt=""
          className="w-full max-sm:!hidden"
        />
      </picture>
    </div>
  );
};

interface ImageFallbackProps {
  src: string;
  fallback: string;
  imgCenter?: boolean;
  maxWidth?: string;
}

export default ImageFallback;
