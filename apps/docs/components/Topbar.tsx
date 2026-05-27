"use client";

import React from "react";

export function Topbar() {
  return (
    <div className="flex items-center gap-4 py-4 px-14 border-b border-rule bg-[var(--bg)] sticky top-0 z-10 backdrop-blur-md topbar in">
      <div className="font-jetbrains text-[11px] text-[var(--muted)] tracking-[0.04em] mono">
        DOCS <span className="mx-2 opacity-40">/</span> <b className="text-[var(--ink)] font-medium uppercase">Reference</b>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="font-jetbrains text-[11px] py-[5px] px-[10px] rounded-full border border-rule bg-[var(--paper)] text-[var(--ink-2)] inline-flex items-center gap-1.5 mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
          npm · @modfy/ui · v0.1.0
        </span>
        <button className="font-geist text-[13px] font-medium py-[7px] px-3.5 rounded-[6px] border border-rule-strong bg-transparent text-[var(--ink)] cursor-pointer hover:bg-[var(--bg-2)] transition-colors">
          GitHub ↗
        </button>
        <button className="font-geist text-[13px] font-medium py-[7px] px-3.5 rounded-[6px] border border-[var(--ink)] bg-[var(--ink)] text-[var(--bg)] cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}
