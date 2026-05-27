import React from "react";

type CalloutVariant = "info" | "warn" | "tip" | "danger";

interface CalloutProps {
  variant?: CalloutVariant;
  label?: string;
  children: React.ReactNode;
}

const LABELS: Record<CalloutVariant, string> = {
  info: "Note",
  warn: "Warning",
  tip: "Tip",
  danger: "Danger",
};

export function Callout({ variant = "info", label, children }: CalloutProps) {
  const cls = variant === "info" ? "" : variant;
  return (
    <div className={`callout ${cls}`}>
      <div className="callout-label">{label ?? LABELS[variant]}</div>
      {children}
    </div>
  );
}
