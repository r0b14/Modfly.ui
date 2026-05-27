import React from 'react';
import buttonIcon from './assets/pdfDownload.svg';

export interface ButtonPdfDownloadProps {
  pdfile?: string;
  variation?: 'class' | 'video';
}

export const ButtonPdfDownload: React.FC<ButtonPdfDownloadProps> = ({
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


      // Remover hash
      const hashIndex = nameWithoutExtension.lastIndexOf('.');
      const cleanName =
        hashIndex !== -1 
          ? nameWithoutExtension.substring(0, hashIndex)
          : nameWithoutExtension;

      return decodeURIComponent(cleanName) + extension;
    } catch {
      let lastSegment = url.split('/').pop() || 'download.pdf';
      const extensionIndex = lastSegment.lastIndexOf('.');
      const extension =
        extensionIndex !== -1 ? lastSegment.substring(extensionIndex) : '';
      const nameWithoutExtension =
        extensionIndex !== -1
          ? lastSegment.substring(0, extensionIndex)
          : lastSegment;

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
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleDownload}
        className="flex mx-5 lg:mx-32 gap-5 justify-center items-center bg-[#FFAB00] hover:bg-[#E89C01] font-semibold py-3 px-6 rounded-3xl shadow-md transition-colors"
      >
        <div className="text-left">
          <strong className="text-black block leading-tight">
            {variation === 'video' ? (
              "Download do roteiro do vídeo em PDF"
            ) : (
              "Download dos slides da aula em PDF"
            )}
          </strong>
        </div>
        <img
          src={buttonIcon}
          alt="Ícone de download"
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </button>
    </div>
  );
};
