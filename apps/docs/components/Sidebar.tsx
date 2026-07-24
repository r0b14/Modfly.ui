"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add("in"));
  }, []);

  return (
    <aside ref={ref} className="sidebar border-r border-rule bg-[var(--bg)] p-7 sticky top-0 h-screen overflow-y-auto overflow-x-hidden">
      <Link href="/" className="flex items-baseline gap-2.5 mb-1 no-underline text-inherit hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 bg-[var(--ink)] text-[var(--bg)] grid place-items-center font-instrument italic text-2xl rounded-[4px] translate-y-[2px] serif">
          M
        </div>
        <div className="font-instrument text-[28px] tracking-[-0.02em] leading-none serif">
          Modfly<sup className="text-[10px] text-[var(--orange)] font-jetbrains ml-[2px] mono">UI</sup>
        </div>
        <span className="ml-auto font-jetbrains text-[10px] text-[var(--muted)] py-[3px] px-[7px] bg-[var(--bg-2)] rounded-full self-center mono">
          v0.1.0
        </span>
      </Link>
      <div className="font-instrument italic text-[var(--muted)] text-sm mb-7 pl-[42px] -mt-1 serif">
        Components built for learning.
      </div>

      <div className="flex items-center gap-2 border border-rule bg-[var(--paper)] p-2.5 rounded-[6px] mb-7 text-[13px] text-[var(--muted)]">
        <span className="text-[13px]">⌕</span>
        <span>Search components…</span>
        <span className="ml-auto font-jetbrains text-[10px] bg-[var(--bg-2)] py-[2px] px-1.5 rounded-[3px] mono">
          ⌘ K
        </span>
      </div>

      <NavSection title="Getting started" items={["Introduction", "Installation", "Tailwind setup", "Theming"]} currentPath={pathname} />
      <NavSection title="Atoms" items={["ButtonLink", "ButtonPdfDownload", "Tooltip", "Postit", "Check", "ImageFallback", "ButtonReference", "Exclamation", "RangeBlue", "RangeGreen"]} currentPath={pathname} />
      <NavSection title="Molecules" items={["Cards", "CardFlip", "QuoteText", "Figure", "Citation", "IndentCitation", "ListModule", "MiniCards", "Embed", "ImageList", "CaseStudy", "QuestionReflect", "Quotes", "ReferenceModal"]} currentPath={pathname} />
      <NavSection title="Organisms" items={["Accordion", "StarList", "TimelineWithCards", "HistoryTopics", "LearningBlock", "QuestionOptionHeader"]} currentPath={pathname} />
      <NavSection title="Templates" items={["Carousel", "Slider", "Pagination", "UnityBanner", "Glossary"]} currentPath={pathname} />
    </aside>
  );
}

function NavSection({ title, items, currentPath }: any) {
  const isDocGroup = title !== "Getting started";
  
  return (
    <div className="mb-6">
      <div className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[var(--muted)] mb-2.5 flex items-center gap-2 mono">
        {title} <div className="flex-1 h-[1px] bg-rule" />
      </div>
      <ul className="list-none p-0 m-0">
        {items.map((item: string) => {
          const slug = item.toLowerCase().replace(/\s+/g, '-');
          const href = isDocGroup ? `/docs/components/${slug}` : `/docs/getting-started/${slug}`;
          const isActive = currentPath === href;
          
          return (
            <li key={item}>
              <Link 
                href={href}
                className={`text-[13.5px] py-1 px-2 rounded-[4px] flex items-center gap-2 transition-all no-underline ${isActive ? 'bg-[var(--ink)] text-[var(--bg)]' : 'text-[var(--ink-2)] hover:bg-[var(--bg-2)]'}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[var(--orange-soft)]' : 'bg-rule-strong'}`} />
                {item}
                {item === 'Accordion' && <span className="ml-auto font-jetbrains text-[9px] text-[var(--muted)] bg-[var(--bg-2)] py-[1px] px-[5px] rounded-[3px] mono">22+</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
