"use client";

import React, { useRef, useState } from "react";

interface DocCodeBlockProps {
  filename?: string;
  children: React.ReactNode;
  raw: string;
}

export function DocCodeBlock({ filename, children, raw }: DocCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);

  function handleCopy() {
    setCopyError(false);
    if (!navigator.clipboard) { setCopyError(true); return; }
    navigator.clipboard.writeText(raw).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }).catch(() => setCopyError(true));
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = blockRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }

  return (
    <div className="code-block">
      {filename && (
        <div className="code-block-head">
          <div className="code-block-dots">
            <span style={{ background: "#ff5f57" }} />
            <span style={{ background: "#febc2e" }} />
            <span style={{ background: "#28c840" }} />
          </div>
          <span className="code-block-file">{filename}</span>
        </div>
      )}
      <div ref={blockRef} className="code" onMouseMove={handleMouseMove}>
        {children}
      </div>
      <button
        className={`code-copy${copied ? " copied" : ""}`}
        onClick={handleCopy}
        type="button" aria-label="Copiar código"
      >
        {copied ? "COPIADO" : "COPIAR"}
      </button>
      {copyError && <p role="status">Não foi possível copiar. Selecione o código e copie manualmente.</p>}
    </div>
  );
}
