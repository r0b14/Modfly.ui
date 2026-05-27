import React, { useState, useEffect } from 'react';

export interface TimelineItem {
  title: string;
  content: string;
}

export interface TimelineWithCardsProps {
  content: TimelineItem[];
  lineColor?: string;
  dotColor?: string;
}

export const TimelineWithCards: React.FC<TimelineWithCardsProps> = ({ 
  content,
  lineColor = "bg-orange-400",
  dotColor = "#F9AE63"
}) => {
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 768 : true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex justify-center py-10 w-full">
      <div className="relative w-full max-w-6xl px-4">
        {/* Vertical Line */}
        <div
          className={`absolute top-20 left-1/2 transform -translate-x-1/2 w-1 ${lineColor} max-md:left-10 max-md:translate-x-0`}
          style={{ height: 'calc(100% - 160px)' }}
        />
        
        {content.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-12 md:mb-[-40px] ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            } max-md:flex-col max-md:items-start max-md:ml-10`}
          >
            {/* Dot */}
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-white border-8 z-10 max-md:static max-md:translate-x-[-30px] max-md:translate-y-0 max-md:mb-[-20px]"
              style={{ backgroundColor: dotColor }}
            />

            {/* Horizontal Line (Desktop) */}
            <div
              className={`absolute top-1/2 h-1 ${lineColor} ${
                index % 2 === 0 ? 'right-1/2' : 'left-1/2'
              } max-md:hidden`}
              style={{ width: 'calc(50% - 20px)' }}
            />

            <div
              className="bg-white border-2 border-orange-400 rounded-xl shadow-lg p-6 max-w-[450px] w-full z-0 transition-transform duration-500"
              style={{
                transform: isDesktop
                  ? index % 2 === 0
                    ? 'translateX(-15%)'
                    : 'translateX(15%)'
                  : 'none',
              }}
            >
              <h4 className="text-[#3A584E] font-bold text-xl mb-3">{item.title}</h4>
              <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
