import React from "react";
import { notFound } from "next/navigation";

interface ComponentPageProps {
  params: Promise<{ slug: string }>;
}

const VALID_COMPONENTS = [
  "buttonlink", "buttonpdfdownload", "tooltip", "postit", "check",
  "cards", "cardflip", "quotetext", "figure", "citation", "indentcitation", "listmodule", "minicards", "embed", "imagelist",
  "accordion", "starlist", "timelinewithcards", "historytopics", "learningblock",
  "carousel", "slider", "pagination", "unitybanner", "glossary"
];

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { slug } = await params;
  
  if (!VALID_COMPONENTS.includes(slug)) {
    notFound();
  }

  return (
    <div className="p-14" data-reveal>
      <div className="max-w-[1000px]">
        <div className="font-jetbrains text-[11px] tracking-[0.16em] uppercase text-[var(--muted)] mb-7 flex items-center gap-3.5 mono">
          <div className="w-8 h-[1px] bg-[var(--ink)]" />
          Component Reference
        </div>
        
        <h1 className="font-instrument text-[84px] leading-[0.92] tracking-[-0.035em] m-0 mb-7 capitalize serif">
          {slug.replace(/-/g, ' ')}
        </h1>
        
        <p className="text-[19px] leading-[1.45] text-[var(--ink-2)] mb-12">
          Documentação detalhada e exemplos para o componente <code className="bg-[var(--bg-2)] px-1.5 py-0.5 rounded mono text-base">{slug}</code>. 
          Em breve, você verá aqui o preview interativo e as tabelas de propriedades.
        </p>

        <div className="grid grid-cols-1 gap-10 mt-14">
          <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
            <div className="p-4 border-b border-rule bg-[var(--bg-2)] font-jetbrains text-[11px] uppercase tracking-wider mono">
              Interactive Preview
            </div>
            <div className="h-[400px] flex items-center justify-center text-[var(--muted)] italic">
              Laboratório do Storybook sendo integrado...
            </div>
          </div>

          <div className="border border-rule rounded-xl overflow-hidden bg-[var(--paper)]">
             <div className="p-4 border-b border-rule bg-[var(--bg-2)] font-jetbrains text-[11px] uppercase tracking-wider mono">
              Installation
            </div>
            <div className="p-8">
               <pre className="bg-[var(--ink)] text-[var(--bg)] p-5 rounded-lg font-jetbrains text-sm mono">
                 npx modfy add {slug}
               </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
