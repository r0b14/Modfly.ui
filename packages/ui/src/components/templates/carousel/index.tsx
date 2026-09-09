import React, { useEffect, useRef, useState } from 'react';
import arrowIcon from './assets/arrow.svg?url';
export interface CarouselProps {
  items: React.ReactNode[];
  /** Compatibilidade: a navegação usa items.length para evitar slides vazios. */
  numberOfItems?: number;
  bgImages?: string[];
  bgColor?: string;
  bgPosition?: string[];
}
export const Carousel: React.FC<CarouselProps> = ({ items, bgImages, bgColor = 'transparent', bgPosition = [] }) => {
  const [index, setIndex] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const current = Math.min(index, Math.max(0, items.length - 1));
  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const sync = () => element.scrollTo({ left: current * element.clientWidth, behavior: 'auto' });
    sync();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(sync); observer.observe(element); return () => observer.disconnect();
  }, [current, items.length]);
  if (!items.length) return null;
  const go = (next: number) => setIndex(Math.max(0, Math.min(next, items.length - 1)));
  return <section aria-roledescription="carrossel" aria-label="Conteúdo da aula" className="w-full min-w-0 my-10" style={{ backgroundColor: bgColor, backgroundImage: bgImages?.[current] ? `url(${bgImages[current]})` : undefined, backgroundPosition: bgPosition[current] ?? 'center', backgroundSize: 'cover' }}>
    <div ref={viewport} className="flex w-full overflow-hidden" onKeyDown={e => { if (e.target === e.currentTarget && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) { e.preventDefault(); go(current + (e.key === 'ArrowRight' ? 1 : -1)); } }} tabIndex={0} aria-label="Slides; use as setas para navegar">
      {items.map((item, i) => <div key={i} className="w-full shrink-0 min-w-0 p-4 sm:p-8" role="group" aria-roledescription="slide" aria-label={`${i + 1} de ${items.length}`} aria-hidden={i !== current} style={{ visibility: i === current ? 'visible' : 'hidden' }}>{item}</div>)}
    </div>
    <div className="flex flex-wrap items-center justify-center gap-3 p-4">
      <button type="button" onClick={() => go(current - 1)} disabled={current === 0} aria-label="Slide anterior" className="p-3 disabled:opacity-30"><img src={arrowIcon} alt="" className="w-4 h-6 rotate-180" /></button>
      {items.map((_, i) => <button type="button" key={i} aria-label={`Ir para slide ${i + 1}`} aria-current={i === current ? 'step' : undefined} onClick={() => go(i)} className="w-8 h-8 rounded-full border" style={{ background: i === current ? '#285c93' : '#fff', color: i === current ? '#fff' : '#285c93' }}>{i + 1}</button>)}
      <button type="button" onClick={() => go(current + 1)} disabled={current === items.length - 1} aria-label="Próximo slide" className="p-3 disabled:opacity-30"><img src={arrowIcon} alt="" className="w-4 h-6" /></button>
    </div>
  </section>;
};
