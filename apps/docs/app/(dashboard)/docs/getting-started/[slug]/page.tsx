import React from "react";
import { notFound } from "next/navigation";

interface GettingStartedPageProps {
  params: Promise<{ slug: string }>;
}

const VALID_STEPS = ["introduction", "installation", "tailwind-setup", "theming"];

export default async function GettingStartedPage({ params }: GettingStartedPageProps) {
  const { slug } = await params;
  
  if (!VALID_STEPS.includes(slug)) {
    notFound();
  }

  return (
    <div className="p-14" data-reveal>
      <div className="max-w-[1000px]">
        <div className="font-jetbrains text-[11px] tracking-[0.16em] uppercase text-[var(--muted)] mb-7 flex items-center gap-3.5 mono">
          <div className="w-8 h-[1px] bg-[var(--ink)]" />
          Getting Started
        </div>
        
        <h1 className="font-instrument text-[84px] leading-[0.92] tracking-[-0.035em] m-0 mb-7 capitalize serif">
          {slug.replace(/-/g, ' ')}
        </h1>
        
        <div className="prose prose-slate max-w-none text-[19px] leading-[1.6] text-[var(--ink-2)]">
          <p>
            Esta seção fornece as diretrizes fundamentais para começar a utilizar a <strong>Modfly UI</strong> no seu projeto.
          </p>
          {/* Content would be dynamic here */}
          <div className="mt-10 p-10 bg-[var(--paper)] border border-rule rounded-xl italic text-[var(--muted)]">
             Conteúdo em desenvolvimento para o passo: <strong>{slug}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
