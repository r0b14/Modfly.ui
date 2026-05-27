import React, { useState, useRef, useEffect } from 'react';

export interface GlossaryProps {
  word: React.ReactNode;
  definition: React.ReactNode;
  hasBoldTitle?: boolean;
  className?: string;
}

export const Glossary: React.FC<GlossaryProps> = ({
  word,
  definition,
  hasBoldTitle = false,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [side, setSide] = useState<'top' | 'bottom'>('bottom');
  const triggerRef = useRef<HTMLSpanElement>(null);

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    if (typeof window === 'undefined') return;
    
    const coordY = (e as React.MouseEvent).clientY;
    if (coordY > window.innerHeight / 2) {
      setSide('top');
    } else {
      setSide('bottom');
    }
    setIsVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = () => setIsVisible(false);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <span 
      className={`relative cursor-pointer inline ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      <span
        ref={triggerRef}
        className="break-words font-medium relative border-b-[3px] border-dotted border-[#285C93] hover:text-[#285C93] transition-colors"
        onMouseEnter={handleInteraction}
        onMouseLeave={() => setIsVisible(false)}
        onClick={handleInteraction}
      >
        {word}
      </span>

      {isVisible && (
        <div
          className={`absolute z-50 bg-[#F2F2F2] text-[#333333] p-6 rounded-xl shadow-xl w-64 md:w-80 transition-all duration-200 ${
            side === 'top' ? 'bottom-full mb-4' : 'top-full mt-4'
          } left-1/2 -translate-x-1/2`}
          style={{ pointerEvents: 'none' }}
        >
          {/* Arrow */}
          <div 
            className={`absolute w-4 h-4 bg-[#F2F2F2] rotate-45 left-1/2 -translate-x-1/2 ${
              side === 'top' ? '-bottom-2' : '-top-2'
            }`}
          />
          
          <div className="relative z-10 text-sm md:text-base leading-relaxed">
            {hasBoldTitle && (
              <div className="font-bold uppercase mb-2 border-b border-gray-300 pb-1">
                {word}
              </div>
            )}
            <div>{definition}</div>
          </div>
        </div>
      )}
    </span>
  );
};
