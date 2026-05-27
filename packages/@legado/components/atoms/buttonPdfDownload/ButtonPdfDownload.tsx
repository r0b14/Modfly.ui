import React from 'react';
import buttonIcon from '../../../assets/buttons/pdfDownload.png';

interface ButtonPdfDownloadProps {
  pdfile?: string;
  variation?: 'class' | 'video';
}

const ButtonPdfDownload: React.FC<ButtonPdfDownloadProps> = ({
  pdfile,
  variation,
}) => {
  const getFileName = (url: string): string => {
    try {
      const parsedUrl = new URL(url, window.location.origin);
      const pathname = parsedUrl.pathname;
      const segments = pathname.split('/');
      let lastSegment = segments.pop() || 'download.pdf';

      // Remover extensão
      const extensionIndex = lastSegment.lastIndexOf('.');
      const extension =
        extensionIndex !== -1 ? lastSegment.substring(extensionIndex) : '';
      const nameWithoutExtension =
        extensionIndex !== -1
          ? lastSegment.substring(0, extensionIndex)
          : lastSegment;


      // Remover hash (sequência de caracteres alfanuméricos após o último ponto)
      const hashIndex = nameWithoutExtension.lastIndexOf('.');
      const cleanName =
        hashIndex !== -1 
          ? nameWithoutExtension.substring(0, hashIndex)
          : nameWithoutExtension;

      return decodeURIComponent(cleanName) + extension;
    } catch (error) {
      // Se pdfile não for uma URL válida, tenta extrair o nome diretamente
      let lastSegment = url.split('/').pop() || 'download.pdf';

      // Remover extensão
      const extensionIndex = lastSegment.lastIndexOf('.');
      const extension =
        extensionIndex !== -1 ? lastSegment.substring(extensionIndex) : '';
      const nameWithoutExtension =
        extensionIndex !== -1
          ? lastSegment.substring(0, extensionIndex)
          : lastSegment;

      // Remover hash
      const hashIndex = nameWithoutExtension.lastIndexOf('.');
      const cleanName =
        hashIndex !== -1
          ? nameWithoutExtension.substring(0, hashIndex)
          : nameWithoutExtension;

      return decodeURIComponent(cleanName) + extension;
    }
  };

  const handleDownload = () => {
    if (pdfile) {
      const link = document.createElement('a');
      link.href = pdfile;
      const fileName = getFileName(pdfile);
      link.setAttribute('download', fileName); // Usa o nome limpo do arquivo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleDownload}
        className="flex mx-5 lg:mx-32 gap-5 justify-center items-center bg-[#FFAB00] hover:bg-[#E89C01]  font-semibold py-3 px-6 rounded-3xl shadow-md"
      >
        <p>
          <strong>
            {variation === 'video' ? (
              <span className="text-[#000000]">
                Download do roteiro do vídeo em PDF
              </span>
            ) : (
              <span className="text-[#000000]">
                Download dos slides da aula em PDF
              </span>
            )}
          </strong>
        </p>
        <img
          src={buttonIcon}
          alt="Ícone de download"
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
        />
      </button>
    </div>
  );
};

export default ButtonPdfDownload;
