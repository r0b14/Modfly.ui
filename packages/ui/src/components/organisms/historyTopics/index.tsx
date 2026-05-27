import React from 'react';
import img1 from './assets/img1.svg';
import img2 from './assets/img2.svg';
import img3 from './assets/img3.svg';

export interface HistoryTopicsProps {
  text1: string;
  text11: string;
  text2: string;
  text22: string;
  text3: string;
  text33: string;
  text333: string;
  lineColor?: string;
}

export const HistoryTopics: React.FC<HistoryTopicsProps> = ({
  text1,
  text11,
  text2,
  text22,
  text3,
  text33,
  text333,
  lineColor = "#6CA3E8"
}) => {
  
  return (
    <div className="w-full max-w-[1250px] mx-auto my-10 px-4">
      {/* Geração 1 */}
      <div className="flex items-center relative z-10">
        <div className="sm:border-b-4 border-dashed hidden sm:block w-[10%]" style={{ borderBottomColor: lineColor }} />
        <div className="flex justify-start items-center ml-4">
          <img src={img1} alt="" className="w-12 h-12 mr-4 shrink-0" />
          <p className="text-[#333333]">
            <strong className="text-[#285C93]">A primeira geração,</strong> {text1}
          </p>
        </div>
      </div>

      {/* Linha Vertical e Conteúdo Intermediário */}
      <div className="sm:border-l-4 border-dashed ml-[5%] pl-[5%] py-10 my-[-20px] relative z-0" style={{ borderLeftColor: lineColor }}>
        
        {/* Detalhe 1.1 */}
        <div className="flex items-center my-10">
          <div className="sm:border-b-4 border-dashed hidden sm:block w-[15%]" style={{ borderBottomColor: lineColor }} />
          <div className="flex items-center border-2 border-[#FAB641] bg-white rounded-2xl p-6 ml-4 shadow-sm w-full max-w-[800px]">
            <span className="w-12 h-12 bg-[#FAB641] rounded-full shrink-0 mr-4" />
            <div className="text-[#444444] leading-relaxed">{text11}</div>
          </div>
        </div>

        {/* Geração 2 */}
        <div className="flex items-center my-10">
          <div className="sm:border-b-4 border-dashed hidden sm:block w-[5%]" style={{ borderBottomColor: lineColor }} />
          <div className="flex justify-start items-center ml-4">
            <img src={img2} alt="" className="w-12 h-12 mr-4 shrink-0" />
            <p className="text-[#333333]">
              <strong className="text-[#285C93]">A segunda geração,</strong> {text2}
            </p>
          </div>
        </div>

        {/* Detalhe 2.1 */}
        <div className="flex items-center my-10">
          <div className="sm:border-b-4 border-dashed hidden sm:block w-[15%]" style={{ borderBottomColor: lineColor }} />
          <div className="flex items-center border-2 border-[#FA7765] bg-white rounded-2xl p-6 ml-4 shadow-sm w-full max-w-[800px]">
            <span className="w-12 h-12 bg-[#FA7765] rounded-full shrink-0 mr-4" />
            <div className="text-[#444444] leading-relaxed">{text22}</div>
          </div>
        </div>

        {/* Geração 3 */}
        <div className="flex items-center my-10">
          <div className="sm:border-b-4 border-dashed hidden sm:block w-[5%]" style={{ borderBottomColor: lineColor }} />
          <div className="flex justify-start items-center ml-4">
            <img src={img3} alt="" className="w-12 h-12 mr-4 shrink-0" />
            <p className="text-[#333333]">
              <strong className="text-[#285C93]">A terceira geração,</strong> {text3}
            </p>
          </div>
        </div>

        {/* Detalhe 3.1 */}
        <div className="flex items-center my-10">
          <div className="sm:border-b-4 border-dashed hidden sm:block w-[15%]" style={{ borderBottomColor: lineColor }} />
          <div className="flex items-center border-2 border-[#6CA3E8] bg-white rounded-2xl p-6 ml-4 shadow-sm w-full max-w-[800px]">
            <span className="w-12 h-12 bg-[#6CA3E8] rounded-full shrink-0 mr-4" />
            <div className="text-[#444444] leading-relaxed">{text33}</div>
          </div>
        </div>
      </div>

      {/* Conclusão (Fora da linha vertical) */}
      <div className="flex items-center relative z-10">
        <div className="sm:border-b-4 border-dashed hidden sm:block w-[10%]" style={{ borderBottomColor: lineColor }} />
        <div className="flex items-center border-2 border-[#6CA3E8] bg-white rounded-2xl p-6 ml-4 shadow-sm w-full max-w-[800px]">
          <span className="w-12 h-12 bg-[#6CA3E8] rounded-full shrink-0 mr-4" />
          <div className="text-[#444444] leading-relaxed">{text333}</div>
        </div>
      </div>
    </div>
  );
};
