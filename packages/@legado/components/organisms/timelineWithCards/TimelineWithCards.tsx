import React, { useState, useEffect } from 'react';

interface TimelineWithCardsProps {
  content: { title: string; content: string }[];
}


const TimelineWithCards: React.FC<TimelineWithCardsProps> = ({ content }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Adiciona o event listener
    window.addEventListener('resize', handleResize);

    // Remove o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center py-10">
      <div className="relative w-full max-w-6xl">
        {/* Linha vertical */}
        <div
          className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 bg-orange-400 max-md:left-10 max-md:translate-x-0"
          style={{
            height: 'calc(100% - 174px)',
          }}
        ></div>
        {content.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center max-w-[550px] mb-[-50px] ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            } max-md:flex-col max-md:items-start max-md:ml-[40px] max-md:mb-10`}
          >
            {/* Ponto circular */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#F9AE63] rounded-full border-white border-8 z-10 max-md:relative max-md:top-20 max-md:left-[-18px] max-md:transform-none"></div>

            {/* Linha horizontal */}
            <div
              className={`absolute top-1/2 h-1 bg-orange-400 ${
                index % 2 === 0 ? 'right-1/2' : 'left-1/2'
              } max-md:hidden`}
              style={{
                width: 'calc(50% - 30px)',
              }}
            ></div>

            <div
              className={`bg-white border-2 max-md:border-l-4 border-orange-400 rounded-lg shadow-md p-5 ${
                index % 2 === 0 ? 'text-left' : 'text-left'
              } max-md:relative max-md:ml-0 max-md:mt-5`}
              style={{
                transform: isDesktop
                  ? index % 2 === 0
                    ? 'translateX(-60%)'
                    : 'translateX(60%)'
                  : 'none',
                marginLeft: 'auto',
              }}
            >
              <h4 className="text-[#3A584E] font-bold mb-3">{item.title}</h4>
              <p className="text-gray-700">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineWithCards;
