import React, { useState, ReactNode, useRef, useLayoutEffect } from 'react';

interface TooltipProps {
  content: string | ReactNode;
  position?: 'left' | 'center' | 'right';
  text: string;
  width?: number;
  /** width to use on mobile viewports (px) */
  widthMobile?: number;
  height?: number;
  bgColor?: string;
  reference?: string | ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'center',
  text,
  width,
  widthMobile,
  height,
  bgColor = '#FFDB70',
  reference,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0, transform: '' });
  const [arrowPosition, setArrowPosition] = useState({ left: '50%' });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const getResponsiveWidth = () => {
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
    const arrowHeight = 34;
    const spacing = 10; // Espaçamento entre trigger e tooltip

    let left = 0;
    let top = trigger.top - tooltipHeight - arrowHeight - spacing;
    let transform = '';

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
    // A seta deve sempre apontar para o centro do elemento trigger
    const triggerCenter = trigger.left + trigger.width / 2;
    const tooltipLeft = left;
    let arrowLeft = triggerCenter - tooltipLeft;

    // Garantir que a seta não saia dos limites do tooltip (com margem de segurança)
    const arrowMinPosition = 19; // Metade da largura da seta (38px / 2)
    const arrowMaxPosition = tooltipWidth - 19;

    if (arrowLeft < arrowMinPosition) {
      arrowLeft = arrowMinPosition;
    } else if (arrowLeft > arrowMaxPosition) {
      arrowLeft = arrowMaxPosition;
    }

    // Verificar se há espaço acima, senão mostrar abaixo
    if (top < margin) {
      top = trigger.bottom + spacing;
      // Inverter seta (não implementado nesta versão, mas o tooltip aparecerá abaixo)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, position]);

  React.useEffect(() => {
    if (!isVisible) return;

    const handleResize = () => calculatePosition();
    const handleScroll = () => calculatePosition();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                position: 'relative',
                width: `${getResponsiveWidth()}px`,
                height: 'auto',
                maxHeight: window.innerHeight <= 1024 ? '80vh' : height ? `${height}px` : 'none',
                minHeight: '103px',
                padding:
                  window.innerWidth <= 425 ? '12px' : window.innerWidth <= 768 ? '16px' : '20px',
                background: bgColor,
                boxSizing: 'border-box',
                overflowY: 'auto',
              }}
            >
              <div
                style={{
                  fontSize:
                    window.innerWidth <= 425
                      ? '0.75rem'
                      : window.innerWidth <= 768
                        ? '0.8125rem'
                        : '0.875rem',
                  lineHeight: '1.625',
                  overflowWrap: 'anywhere',
                  wordBreak: 'break-word',
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
                    fontSize: window.innerWidth <= 425 ? '0.6875rem' : '0.75rem',
                    opacity: 0.9,
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

            <svg
              width="38"
              height="34"
              viewBox="0 0 38 34"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                bottom: '-30px',
                left: arrowPosition.left,
                transform: 'translateX(-50%)',
                zIndex: 51,
              }}
              aria-hidden
            >
              <path d="M19 34 L38 0 H0 Z" fill={bgColor} />
            </svg>
          </div>
        )}
      </span>
    </>
  );
};

export default Tooltip;
