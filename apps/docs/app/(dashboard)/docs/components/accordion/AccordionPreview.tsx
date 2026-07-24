"use client";

import { useState } from "react";

export function AccordionPCEPreview({ title = "Para saber mais" }: { title?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ width: "100%", maxWidth: 860 }}>
      {/* Header — roxo #670098, rx=20 quando fechado, topo arredondado quando aberto */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: 89,
          background: "#670098",
          border: "none",
          cursor: "pointer",
          borderRadius: open ? "20px 20px 0 0" : 20,
          transition: "border-radius 0.05s",
        }}
      >
        <span style={{ fontSize: 22, fontWeight: 600, color: "#F3EBBE" }}>
          {title}
        </span>

        {/* Seta creme — path real do arrow.svg */}
        <svg
          width="36"
          height="21"
          viewBox="0 0 50 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s linear",
            flexShrink: 0,
          }}
        >
          <path
            d="M25 28.3406C22.9809 28.3406 20.9619 27.4506 19.4332 25.7035L0.627345 4.21114C-0.209115 3.25519 -0.209115 1.67292 0.627345 0.716966C1.4638 -0.238989 2.84829 -0.238989 3.68475 0.716966L22.4906 22.2093C23.8751 23.7916 26.1249 23.7916 27.5093 22.2093L46.3153 0.716966C47.1517 -0.238989 48.5362 -0.238989 49.3727 0.716966C50.2091 1.67292 50.2091 3.25519 49.3727 4.21114L30.5667 25.7035C29.038 27.4506 27.019 28.3406 25 28.3406Z"
            fill="#F3EBBE"
          />
        </svg>
      </button>

      {/* Body — fundo roxo com área interna creme #F6ECBD com sombra, igual ao bgOpen.svg */}
      <div
        style={{
          maxHeight: open ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s linear",
          background: "#670098",
          borderRadius: "0 0 20px 20px",
        }}
      >
        <div
          style={{
            margin: "0 20px 20px 20px",
            borderRadius: 20,
            background: "#F6ECBD",
            boxShadow: "0 4px 4px rgba(0,0,0,0.25)",
            padding: "28px 32px",
            color: "#333",
            fontSize: 15,
            lineHeight: 1.7,
          }}
        >
          Aqui ficam textos complementares, links de referência ou materiais de
          aprofundamento do módulo. O conteúdo só é revelado após o clique,
          mantendo a página organizada.
        </div>
      </div>
    </div>
  );
}
