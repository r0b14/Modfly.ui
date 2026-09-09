import React, { useState, ReactNode, useRef, useLayoutEffect, useEffect } from 'react';

export { TooltipLegacy } from './legacy';
export type { TooltipLegacyProps } from './legacy';

// Redesign GFD (2026-07): balão azul-claro com borda arredondada e rabinho
// arredondado (path exportado do Figma, nó "Polygon 4" — cópia em assets/tooltipTail.svg).
const TAIL_WIDTH = 32;
const TAIL_HEIGHT = 31;
const TAIL_PATH =
  'M19.4406 27.9777C17.9292 30.778 13.9117 30.778 12.4004 27.9777L0.485042 5.89978C-0.953271 3.23475 0.976715 1.16519e-06 4.0051 1.40425e-06L27.8359 3.28547e-06C30.8643 3.52453e-06 32.7943 3.23474 31.356 5.89977L19.4406 27.9777Z';
// A borda de 8px na cor do fundo reproduz o stroke externo do Figma;
// o rabinho fica 8px sobreposto a ela e projeta o restante para fora.
const TAIL_OVERHANG = TAIL_HEIGHT - 8;

export interface TooltipProps {
  content: string | ReactNode;
  position?: 'left' | 'center' | 'right';
  text: string;
  width?: number;
  /** width to use on mobile viewports (px) */
  widthMobile?: number;
  height?: number;
  bgColor?: string;
  reference?: string | ReactNode;
  /** Exibe o rabinho do balão (variante "container" do Figma usa false) */
  showArrow?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'center',
  text,
  width,
  widthMobile,
  height,
  bgColor = '#D1F1FF',
  reference,
  showArrow = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0, transform: '' });
  const [arrowPosition, setArrowPosition] = useState({ left: '50%' });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const getResponsiveWidth = () => {
    if (typeof window === 'undefined') return width || 750;
    const vw = window.innerWidth;

    if (vw <= 425) {
      return widthMobile ? Math.min(widthMobile, vw - 32) : vw - 32;
    }
    if (vw <= 768) {
      return Math.min(width || 500, vw - 48);
    }
    if (vw <= 1024) {
      return Math.min(width || 600, vw - 80);
    }
    return width || 750;
  };

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current || !isVisible) return;

    const trigger = triggerRef.current.getBoundingClientRect();
    const tooltipWidth = getResponsiveWidth();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipHeight = tooltipRef.current.offsetHeight;

    const margin = 16; // Margem de segurança
    const arrowHeight = showArrow ? TAIL_OVERHANG : 0;
    const spacing = 10; // Espaçamento entre trigger e tooltip

    let left = 0;
    let top = trigger.top - tooltipHeight - arrowHeight - spacing;
    const transform = '';

    // Calcular posição horizontal inicial baseado na preferência
    if (window.innerWidth <= 768) {
      // Mobile/Tablet: sempre centralizar na viewport
      left = (viewportWidth - tooltipWidth) / 2;
    } else {
      // Desktop: respeitar position prop
      switch (position) {
        case 'left':
          left = trigger.left;
          break;
        case 'right':
          left = trigger.right - tooltipWidth;
          break;
        default: // center
          left = trigger.left + trigger.width / 2 - tooltipWidth / 2;
      }

      // Garantir que não saia da viewport (Desktop)
      if (left < margin) {
        left = margin;
      } else if (left + tooltipWidth > viewportWidth - margin) {
        left = viewportWidth - tooltipWidth - margin;
      }
    }

    // Calcular posição da seta SEMPRE em relação ao trigger
    const triggerCenter = trigger.left + trigger.width / 2;
    const tooltipLeft = left;
    let arrowLeft = triggerCenter - tooltipLeft;

    // Garantir que a seta não saia dos limites do tooltip
    const arrowMinPosition = TAIL_WIDTH / 2 + 8;
    const arrowMaxPosition = tooltipWidth - TAIL_WIDTH / 2 - 8;

    if (arrowLeft < arrowMinPosition) {
      arrowLeft = arrowMinPosition;
    } else if (arrowLeft > arrowMaxPosition) {
      arrowLeft = arrowMaxPosition;
    }

    // Verificar se há espaço acima, senão mostrar abaixo
    if (top < margin) {
      top = trigger.bottom + spacing;
    }

    // Garantir que não saia do topo ou fundo da viewport
    if (top + tooltipHeight > viewportHeight - margin) {
      top = viewportHeight - tooltipHeight - margin;
    }

    setTooltipPosition({ left, top, transform });
    setArrowPosition({ left: `${arrowLeft}px` });
  };

  useLayoutEffect(() => {
    if (isVisible) {
      calculatePosition();
    }
  }, [isVisible, position]);

  useEffect(() => {
    if (!isVisible) return;

    const handleResize = () => calculatePosition();
    const handleScroll = () => calculatePosition();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 40,
            pointerEvents: 'none',
          }}
        />
      )}

      <span ref={triggerRef} style={{ position: 'relative', display: 'inline-block' }}>
        <span
          style={{
            cursor: 'pointer',
            position: 'relative',
            zIndex: 10,
          }}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          {text}
          <svg
            style={{
              position: 'absolute',
              left: 0,
              bottom: '-4px',
              width: '100%',
              height: '3px',
              overflow: 'visible',
            }}
          >
            <pattern
              id="dotted-underline"
              x="0"
              y="0"
              width="8"
              height="3"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="1.5" fill="#285C93" />
            </pattern>
            <rect x="0" y="0" width="100%" height="3" fill="url(#dotted-underline)" />
          </svg>
        </span>

        {isVisible && (
          <div
            ref={tooltipRef}
            style={{
              position: 'fixed',
              zIndex: 50,
              left: `${tooltipPosition.left}px`,
              top: `${tooltipPosition.top}px`,
              transform: tooltipPosition.transform,
              filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.18))',
            }}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-30px',
                zIndex: -1,
              }}
            />

            <div
              style={{
                borderRadius: '8px',
                border: `8px solid ${bgColor}`,
                position: 'relative',
                width: `${getResponsiveWidth()}px`,
                height: 'auto',
                maxHeight: typeof window !== 'undefined' && window.innerHeight <= 1024 ? '80vh' : height ? `${height}px` : 'none',
                minHeight: '81px',
                padding: typeof window !== 'undefined' && window.innerWidth <= 425 ? '10px' : typeof window !== 'undefined' && window.innerWidth <= 768 ? '14px' : '16px',
                background: bgColor,
                boxSizing: 'border-box',
                overflowY: 'auto',
              }}
            >
              <div
                style={{
                  fontSize: typeof window !== 'undefined' && window.innerWidth <= 425
                      ? '0.75rem'
                      : typeof window !== 'undefined' && window.innerWidth <= 768
                        ? '0.8125rem'
                        : '0.875rem',
                  lineHeight: '1.625',
                  overflowWrap: 'anywhere',
                  wordBreak: 'break-word',
                  color: 'black'
                }}
              >
                {typeof content === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                  content
                )}
              </div>
              {reference && (
                <div
                  style={{
                    marginTop: '16px',
                    textAlign: 'right',
                    fontSize: typeof window !== 'undefined' && window.innerWidth <= 425 ? '0.6875rem' : '0.75rem',
                    opacity: 0.9,
                    color: 'black'
                  }}
                >
                  {typeof reference === 'string' ? (
                    <div dangerouslySetInnerHTML={{ __html: reference }} />
                  ) : (
                    reference
                  )}
                </div>
              )}
            </div>

            {showArrow && (
              <svg
                width={TAIL_WIDTH}
                height={TAIL_HEIGHT}
                viewBox={`0 0 ${TAIL_WIDTH} ${TAIL_HEIGHT}`}
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: 'absolute',
                  bottom: `-${TAIL_OVERHANG}px`,
                  left: arrowPosition.left,
                  transform: 'translateX(-50%)',
                  zIndex: 51,
                }}
                aria-hidden
              >
                <path d={TAIL_PATH} fill={bgColor} />
              </svg>
            )}
          </div>
        )}
      </span>
    </>
  );
};
