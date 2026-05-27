import React from 'react';
import backButton from './assets/back.svg';
import nextButton from './assets/next.svg';

export interface PaginationProps {
  numberOfPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onNext?: () => void;
  onPrev?: () => void;
  title?: string;
  showNumbers?: boolean;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  numberOfPages,
  currentPage,
  onPageChange,
  onNext,
  onPrev,
  title = "Progresso do Módulo",
  showNumbers = true,
  className = "",
}) => {

  const handlePrev = () => {
    if (onPrev) {
      onPrev();
    } else if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (onNext) {
      onNext();
    } else if (currentPage < numberOfPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={`w-full flex justify-center items-center flex-col py-10 mt-10 bg-[#FAEBC2] ${className}`}>
      {title && (
        <div className="mb-6 text-black text-center font-medium text-2xl tracking-wider">
          {title}
        </div>
      )}
      
      <div className="flex flex-col-reverse sm:flex-row items-center gap-8 md:gap-12">
        {/* Back Button */}
        <button
          className="flex justify-start items-center gap-3 h-[70px] w-[195px] bg-white px-3 rounded-[35px] font-bold text-xl text-[#285C93] shadow-md transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          onClick={handlePrev}
          disabled={currentPage === 1 && !onPrev}
        >
          <div className="bg-[#285C93] h-[50px] w-[50px] flex items-center justify-center rounded-full shrink-0">
            <img src={backButton} alt="" className="w-6 h-6 mr-1" />
          </div>
          <span>VOLTAR</span>
        </button>

        {/* Page Numbers */}
        {showNumbers && (
          <div className="flex justify-center flex-wrap gap-3 px-4 max-w-[700px]">
            {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`w-[50px] h-[50px] rounded-full flex justify-center items-center text-lg font-bold transition-all shadow-sm ${
                  page === currentPage
                    ? 'bg-[#FFB861] text-[#285C93] border-[3px] border-[#285C93] scale-110'
                    : 'bg-[#285C93] text-white hover:bg-[#3374C0]'
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}

        {/* Next Button */}
        <button
          className="flex justify-end items-center gap-3 h-[70px] w-[195px] bg-white px-3 rounded-[35px] font-bold text-xl text-[#285C93] shadow-md transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={currentPage === numberOfPages && !onNext}
        >
          <span>PRÓXIMO</span>
          <div className="bg-[#285C93] h-[50px] w-[50px] flex items-center justify-center rounded-full shrink-0">
            <img src={nextButton} alt="" className="w-6 h-6 ml-1" />
          </div>
        </button>
      </div>
    </div>
  );
};
