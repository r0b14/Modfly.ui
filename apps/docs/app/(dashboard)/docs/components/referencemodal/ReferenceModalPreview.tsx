"use client";

import { useState } from "react";

export function ReferenceModalPreview({
  children,
  reference,
}: {
  children: React.ReactNode;
  reference: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#00000065] rounded-xl">
          <div className="bg-[#EEEEEE] border-[3px] border-[#664388] rounded-md flex gap-4 p-6 max-w-[85%]">
            <div style={{ margin: 0, color: "#000", textAlign: "left", fontSize: 13.5 }}>{reference}</div>
            <div
              className="border-[2px] border-black h-[32px] min-w-[32px] rounded-md hover:bg-[#cfc8d68b] cursor-pointer flex items-center justify-center"
              onClick={() => setShowModal(false)}
            >
              ✕
            </div>
          </div>
        </div>
      )}
      <span
        style={{ color: "#664388", borderBottom: "2px solid #664388", cursor: "pointer" }}
        onClick={() => setShowModal(true)}
      >
        {children}
      </span>
    </>
  );
}
