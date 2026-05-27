import React from "react";

export interface CitationProps {
  title?: string;
  text?: React.ReactNode;
  children?: React.ReactNode;
  variant?: "green" | "yellow";
}

function BookGreenIcon({ className }: { className?: string }) {
  return (
    <svg
      width="110"
      height="90"
      viewBox="0 0 110 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g clipPath="url(#citation-clip-green)">
        <path d="M43.9019 75.7437L48.3944 49.1924L0.5 89.5203H27.7518C35.3593 89.5203 42.6193 83.3252 43.9019 75.7437Z" fill="#225C1C" />
        <path d="M7.324 49.1918L0.5 89.5198L48.3944 49.1855H7.324V49.1918Z" fill="#487E42" />
        <path d="M49.4688 13.5771C29.7487 13.5771 10.8815 29.5218 7.32422 49.191H26.5831C28.4723 38.7482 38.4935 30.278 48.9633 30.278H51.8129L54.8332 13.5771H49.4688Z" fill="#225C1C" />
        <path d="M98.4019 62.1655L102.894 35.6143L55 75.9485H82.2518C89.8593 75.9485 97.1193 69.7534 98.4019 62.1718V62.1655Z" fill="#225C1C" />
        <path d="M61.824 35.6143L55 75.9485L102.894 35.6143H61.824Z" fill="#487E42" />
        <path d="M103.969 0C84.2487 0 65.3815 15.9446 61.8242 35.6139H81.0831C82.9723 25.1711 92.9935 16.7009 103.463 16.7009H106.313L109.333 0H103.969Z" fill="#225C1C" />
      </g>
      <defs>
        <clipPath id="citation-clip-green">
          <rect width="109" height="90" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BookYellowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="110"
      height="90"
      viewBox="0 0 110 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g clipPath="url(#citation-clip-yellow)">
        <path d="M43.9019 75.7437L48.3944 49.1924L0.5 89.5203H27.7518C35.3593 89.5203 42.6193 83.3252 43.9019 75.7437Z" fill="#B8860B" />
        <path d="M7.324 49.1918L0.5 89.5198L48.3944 49.1855H7.324V49.1918Z" fill="#F5C542" />
        <path d="M49.4688 13.5771C29.7487 13.5771 10.8815 29.5218 7.32422 49.191H26.5831C28.4723 38.7482 38.4935 30.278 48.9633 30.278H51.8129L54.8332 13.5771H49.4688Z" fill="#B8860B" />
        <path d="M98.4019 62.1655L102.894 35.6143L55 75.9485H82.2518C89.8593 75.9485 97.1193 69.7534 98.4019 62.1718V62.1655Z" fill="#B8860B" />
        <path d="M61.824 35.6143L55 75.9485L102.894 35.6143H61.824Z" fill="#F5C542" />
        <path d="M103.969 0C84.2487 0 65.3815 15.9446 61.8242 35.6139H81.0831C82.9723 25.1711 92.9935 16.7009 103.463 16.7009H106.313L109.333 0H103.969Z" fill="#B8860B" />
      </g>
      <defs>
        <clipPath id="citation-clip-yellow">
          <rect width="109" height="90" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}

const BORDER_COLORS: Record<NonNullable<CitationProps["variant"]>, string> = {
  green: "#487E42",
  yellow: "#F5C542",
};

export function Citation({ title, text, children, variant = "green" }: CitationProps) {
  const Icon = variant === "yellow" ? BookYellowIcon : BookGreenIcon;
  const borderColor = BORDER_COLORS[variant];

  return (
    <div className="max-w-[914px] py-5 flex flex-col items-end ml-auto">
      {title && (
        <p className="w-full text-[#333333]">
          <strong className="font-semibold">{title}</strong>
        </p>
      )}
      <div className="flex items-start gap-5 mt-10 max-md:gap-2 max-md:items-start w-full">
        <Icon className="max-md:max-w-[80px] max-w-[100px] shrink-0" />
        <p
          className="max-md:pl-2 max-md:border-l-[3px]"
          style={{ borderColor }}
        >
          {text}
        </p>
      </div>
      {children && (
        <div className="text-right mt-5">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}
