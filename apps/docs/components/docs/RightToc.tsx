"use client";

import React, { useEffect, useRef, useState } from "react";

interface TocEntry {
  id: string;
  label: string;
  level?: 2 | 3;
}

interface RightTocProps {
  entries: TocEntry[];
  readTime?: string;
  editHref?: string;
}

export function RightToc({ entries, readTime = "~5 min", editHref }: RightTocProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ids = entries.map((e) => e.id);
    const observers: IntersectionObserver[] = [];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-10% 0px -70% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    observers.push(obs);

    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, [entries]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="toc">
      <span className="toc-chip">{readTime}</span>

      <div className="toc-label">On this page</div>
      <ul className="toc-list">
        {entries.map((e) => (
          <li
            key={e.id}
            className={`${e.level === 3 ? "h3-link" : ""} ${activeId === e.id ? "active" : ""}`}
            onClick={() => scrollTo(e.id)}
          >
            {e.label}
          </li>
        ))}
      </ul>

      <div className="toc-progress">
        <div className="toc-progress-label">
          <span>Progress</span>
          <b>{Math.round(progress)}%</b>
        </div>
        <div className="toc-progress-bar">
          <div
            ref={fillRef}
            className="toc-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {editHref && (
        <div className="toc-meta">
          <a href={editHref} target="_blank" rel="noopener noreferrer">
            <span className="icon">✎</span>
            Edit this page
          </a>
          <a href="https://github.com/r0b14/Modfly.ui/issues" target="_blank" rel="noopener noreferrer">
            <span className="icon">⚑</span>
            Report an issue
          </a>
        </div>
      )}
    </div>
  );
}
