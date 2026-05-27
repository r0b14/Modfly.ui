"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function buildBreadcrumb(pathname: string) {
  const parts = pathname.replace(/^\/docs\/?/, "").split("/").filter(Boolean);
  if (parts.length === 0) return [{ label: "OVERVIEW", bold: true }];

  const section = parts[0]
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
  const page = parts[1]
    ? parts[1]
        .split("-")
        .map((w) => w[0].toUpperCase() + w.slice(1))
        .join(" ")
    : null;

  return [
    { label: section, bold: !page },
    ...(page ? [{ label: page, bold: true }] : []),
  ];
}

export function Topbar() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const crumbs = buildBreadcrumb(pathname);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    requestAnimationFrame(() => el.classList.add("in"));
  }, []);

  return (
    <div ref={ref} className="flex items-center gap-4 py-4 px-14 border-b border-rule bg-[var(--bg)] sticky top-0 z-10 backdrop-blur-md topbar">
      <div className="font-jetbrains text-[11px] text-[var(--muted)] tracking-[0.04em] mono flex items-center">
        DOCS
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            <span className="mx-2 opacity-40">/</span>
            {c.bold ? (
              <b className="text-[var(--ink)] font-medium">{c.label.toUpperCase()}</b>
            ) : (
              <span>{c.label.toUpperCase()}</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="font-jetbrains text-[11px] py-[5px] px-[10px] rounded-full border border-rule bg-[var(--paper)] text-[var(--ink-2)] inline-flex items-center gap-1.5 mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
          npm · @modfly/ui · v0.1.0
        </span>
        <a
          href="https://github.com/r0b14/Modfly.ui"
          target="_blank"
          rel="noopener noreferrer"
          className="font-geist text-[13px] font-medium py-[7px] px-3.5 rounded-[6px] border border-rule-strong bg-transparent text-[var(--ink)] cursor-pointer hover:bg-[var(--bg-2)] transition-colors no-underline"
        >
          GitHub ↗
        </a>
        <Link
          href="/docs/getting-started/introduction"
          className="font-geist text-[13px] font-medium py-[7px] px-3.5 rounded-[6px] border border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)] cursor-pointer no-underline hover:opacity-90 transition-opacity"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
