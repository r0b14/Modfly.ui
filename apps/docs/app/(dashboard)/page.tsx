"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("pnpm add @modfly/ui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* HERO */}
      <section className="p-6 sm:p-10 md:p-14 md:pt-20 md:pb-14 border-b border-rule relative overflow-hidden" data-reveal>
        <div className="font-jetbrains text-[11px] tracking-[0.16em] uppercase text-[var(--muted)] mb-7 flex items-center gap-3.5 mono">
          <div className="w-8 h-[1px] bg-[var(--ink)]" />
          Uma biblioteca React de componentes — código aberto, MIT
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-14 items-start lg:items-end">
          <div>
            <h1 className="font-instrument text-[42px] sm:text-[64px] md:text-[84px] lg:text-[112px] leading-[0.95] lg:leading-[0.92] tracking-[-0.03em] lg:tracking-[-0.035em] m-0 mb-5 lg:mb-7 serif">
              Componentes<br />
              <i className="italic text-[var(--orange)]">feitos</i> para<br />
              aprender<span className="text-[var(--orange)]">.</span>
            </h1>
            <p className="text-[15.5px] sm:text-[17px] md:text-[19px] leading-[1.5] lg:leading-[1.45] text-[var(--ink-2)] max-w-full md:max-w-[560px] mb-7 lg:mb-9">
              <b className="font-medium">Modfly UI</b> é uma biblioteca React + TypeScript + Tailwind para autoria de cursos e-learning.
              Cresce com cada curso novo, é pensada para acessibilidade e tem suporte de primeira classe
              à plataforma <span className="font-jetbrains text-[var(--ink)] text-[13px] mono">AVAMEC</span> via sub-pacote dedicado.
            </p>
            <div className="flex items-stretch border border-[var(--ink)] rounded-[8px] overflow-hidden bg-[var(--paper)] max-w-full sm:max-w-[500px] font-jetbrains text-[12px] sm:text-[13px] mono">
              <span className="py-3.5 pl-4 text-[var(--orange)] font-semibold">$&nbsp;</span>
              <span className="py-3.5 px-2 text-[var(--ink)] flex-1 overflow-x-auto whitespace-nowrap">pnpm add <span className="text-[var(--blue)]">@modfly/ui</span></span>
              <button
                onClick={copyToClipboard}
                className={`py-0 px-3 sm:px-[18px] shrink-0 bg-[var(--ink)] text-[var(--bg)] border-none font-geist text-[11px] sm:text-[12px] font-medium tracking-[0.04em] cursor-pointer transition-colors ${copied ? "bg-[var(--green)]" : ""}`}
              >
                {copied ? "COPIADO" : "COPIAR"}
              </button>
            </div>
          </div>

          <div className="p-6 bg-[var(--paper)] border border-rule rounded-[12px] relative" data-reveal>
            <div className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] flex items-center gap-2 mb-1 mono">
              ESTATÍSTICAS <span className="ml-auto text-[var(--green)]">●ao vivo</span>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-2.5">
              <StatItem num="38+" label="Componentes" />
              <StatItem num="22v" label="Variantes do Accordion" />
              <StatItem num="6" label="Esquemas de cor" />
              <StatItem num="2" label="Sub-pacotes" />
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-y-6 border-t border-rule pt-7">
          <MetaItem label="Stack" value="React 18 · TS · Tailwind" mono />
          <MetaItem label="Bundler" value="tsup" detail="— ESM + CJS" />
          <MetaItem label="Monorepo" value="pnpm" detail="+ Turborepo" />
          <MetaItem label="Licença" value="MIT" detail="— gratuito" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee border-y border-rule py-5 overflow-hidden bg-[var(--bg)] relative" aria-hidden="true">
        <div className="marquee-track flex whitespace-nowrap gap-0 mono text-[34px] tracking-[-0.02em]">
          <MarqueeSet />
          <MarqueeSet />
        </div>
      </div>

      {/* VITRINE */}
      <section className="p-6 sm:p-10 md:p-14 border-b border-rule relative overflow-hidden" data-reveal>
        <div className="deco-mark dm-overview hidden lg:block absolute text-[380px] -top-14 -right-12 opacity-[0.55] serif">Vitrine</div>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-14 mb-8 md:mb-12 items-start">
          <div className="font-jetbrains text-[11px] text-[var(--muted)] tracking-[0.14em] mono">
            SEC. 01 <span className="block font-instrument italic text-[52px] text-[var(--ink)] tracking-[-0.02em] leading-none mt-2 serif">i.</span>
          </div>
          <div>
            <h2 className="font-instrument text-[32px] sm:text-[40px] md:text-[52px] leading-none tracking-[-0.025em] m-0 mb-4 serif">Um inventário, não um sistema.</h2>
            <p className="max-w-full md:max-w-[620px] text-[var(--ink-2)] text-base leading-[1.55]">
              Modfly não te entrega regras — entrega componentes prontos para virar conteúdo. Cada peça já tem
              variantes de cor, comportamento responsivo e um conjunto de assets curado. Você compõe a lição.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 bg-[var(--paper)] border border-rule rounded-[12px] overflow-hidden flex flex-col group" data-reveal>
            <div className="flex-1 p-6 sm:p-10 flex flex-col items-center justify-center gap-3.5 demo-stage">
              <div className="w-full max-w-[360px] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                <div className="bg-[var(--blue)] text-white p-3.5 px-4.5 flex items-center gap-3 font-medium text-sm">
                  <span className="w-4 h-4 border-[1.5px] border-white rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">+</span>
                  Para saber mais sobre o tema
                </div>
                <div className="bg-[#DAF8F8] p-4.5 text-[#2A5C93] text-[13px] leading-relaxed">
                  O bloco Accordion mantém o ritmo da página com variantes visuais customizadas por módulo. 22 estilos disponíveis.
                </div>
              </div>
            </div>
            <div className="p-3.5 px-4.5 border-t border-rule flex flex-wrap items-center gap-2.5 bg-[var(--bg-2)]">
              <span className="font-jetbrains text-xs font-semibold mono">&lt;Accordion /&gt;</span>
              <span className="font-jetbrains text-[10px] text-[var(--muted)] py-[2px] px-1.5 bg-[var(--paper)] border border-rule rounded-[3px] mono">organismo</span>
              <span className="sm:ml-auto font-jetbrains text-[11px] text-[var(--muted)] mono">22 variantes ↗</span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[var(--paper)] border border-rule rounded-[12px] overflow-hidden flex flex-col" data-reveal>
            <div className="flex-1 p-6 sm:p-10 flex items-center justify-center gap-4 demo-stage overflow-x-auto">
              <MockCard title="Conceito A" color="blue" />
              <MockCard title="Conceito B" color="green" offset />
              <MockCard title="Conceito C" color="orange" />
            </div>
            <div className="p-3.5 px-4.5 border-t border-rule flex items-center gap-2.5 bg-[var(--bg-2)]">
              <span className="font-jetbrains text-xs font-semibold mono">&lt;Cards /&gt;</span>
              <span className="font-jetbrains text-[10px] text-[var(--muted)] py-[2px] px-1.5 bg-[var(--paper)] border border-rule rounded-[3px] mono">molécula</span>
            </div>
          </div>
        </div>
      </section>

      {/* PALETA DE CORES */}
      <section className="p-6 sm:p-10 md:p-14 border-b border-rule relative overflow-hidden bg-[var(--bg-2)]" data-reveal>
        <div className="deco-mark dm-palette hidden lg:block absolute text-[360px] -bottom-24 -left-8 opacity-50 serif" style={{ WebkitTextStroke: "1px rgba(26,23,20,0.18)" }}>Paleta</div>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-14 mb-8 md:mb-12 items-start">
          <div className="font-jetbrains text-[11px] text-[var(--muted)] tracking-[0.14em] mono">
            SEC. 02 <span className="block font-instrument italic text-[52px] text-[var(--ink)] tracking-[-0.02em] leading-none mt-2 serif">ii.</span>
          </div>
          <div>
            <h2 className="font-instrument text-[32px] sm:text-[40px] md:text-[52px] leading-none tracking-[-0.025em] m-0 mb-4 serif">Seis esquemas, três papéis.</h2>
            <p className="max-w-full md:max-w-[620px] text-[var(--ink-2)] text-base leading-[1.55]">
              A paleta vem do legado e segue uma regra simples: cada cor tem um par soft/strong.
              Mapeamos na migração como <span className="font-jetbrains text-[13px] mono">variant</span> via props — nunca hardcoded.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <Swatch name="azul" soft="var(--blue-soft)" strong="var(--blue)" hex1="#7DB0EC" hex2="#298BCA" />
          <Swatch name="verde" soft="var(--green-soft)" strong="var(--green)" hex1="#8FCD79" hex2="#649753" />
          <Swatch name="laranja" soft="var(--orange-soft)" strong="var(--orange)" hex1="#FFB861" hex2="#C66A4A" />
          <Swatch name="amarelo" soft="#FFE48A" strong="var(--yellow)" hex1="fundo PNG" hex2="#F5C542" />
          <Swatch name="rosa" soft="var(--pink-soft)" strong="var(--pink)" hex1="fundo PNG" hex2="#ED1B69" />
          <Swatch name="roxo" soft="var(--purple-soft)" strong="var(--purple)" hex1="fundoRoxo" hex2="#6C4AB6" />
        </div>
      </section>

      {/* TIPOGRAFIA */}
      <section className="p-6 sm:p-10 md:p-14 border-b border-rule relative overflow-hidden" data-reveal>
        <div className="deco-mark dm-specimen hidden lg:block absolute text-[380px] -top-12 -right-10 opacity-50 serif">Amostra</div>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-14 mb-8 md:mb-12 items-start">
          <div className="font-jetbrains text-[11px] text-[var(--muted)] tracking-[0.14em] mono">
            SEC. 03 <span className="block font-instrument italic text-[52px] text-[var(--ink)] tracking-[-0.02em] leading-none mt-2 serif">iii.</span>
          </div>
          <div>
            <h2 className="font-instrument text-[32px] sm:text-[40px] md:text-[52px] leading-none tracking-[-0.025em] m-0 mb-4 serif">Tipografia que fala por si.</h2>
            <p className="max-w-full md:max-w-[620px] text-[var(--ink-2)] text-base leading-[1.55]">
              Modfly assume três famílias: um serif editorial para títulos e citações,
              um sans neutro para corpo e UI, e um monospaced para código, props e tokens.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-rule rounded-xl p-6 sm:p-8 bg-[var(--paper)]">
            <div className="font-jetbrains text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] mb-4 flex items-center gap-3 mono">DISPLAY · Instrument Serif <div className="flex-1 h-[1px] bg-rule" /></div>
            <h3 className="font-instrument text-[56px] sm:text-[72px] md:text-[96px] leading-[0.85] tracking-[-0.03em] m-0 mb-1 serif">A<i className="text-[var(--orange)]">a</i>Bb<i className="text-[var(--orange)]">Gg</i></h3>
            <div className="mt-5 grid grid-cols-[44px_1fr] sm:grid-cols-[60px_1fr] gap-x-4 gap-y-1 text-[13px]">
              <span className="font-jetbrains text-[10px] text-[var(--muted)] uppercase self-end pb-1 mono">112</span>
              <span className="font-instrument text-[28px] sm:text-[38px] leading-none serif">Feito para aprender</span>
              <span className="font-jetbrains text-[10px] text-[var(--muted)] uppercase self-end pb-1 mono">52</span>
              <span className="font-instrument text-[20px] sm:text-[26px] leading-none serif">Seis esquemas, três papéis</span>
            </div>
          </div>
          <div className="border border-rule rounded-xl p-6 sm:p-8 bg-[var(--paper)] flex flex-col">
            <div className="font-jetbrains text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] mb-4 flex items-center gap-3 mono">UI · Geist Sans <span className="ml-auto text-[var(--ink)] font-geist normal-case">Aa</span> <div className="flex-1 h-[1px] bg-rule" /></div>
            <h3 className="font-geist text-[40px] sm:text-[48px] md:text-[56px] leading-none tracking-[-0.02em] m-0">Aa Bb Gg</h3>
            <div className="mt-5 grid grid-cols-[44px_1fr] sm:grid-cols-[60px_1fr] gap-x-4 gap-y-1 text-[13px]">
              <span className="font-jetbrains text-[10px] text-[var(--muted)] uppercase self-end pb-1 mono">15</span>
              <span>Texto base usado em parágrafos e descrições</span>
              <span className="font-jetbrains text-[10px] text-[var(--muted)] uppercase self-end pb-1 mono">13</span>
              <span>Controles de UI — botões, navegação, props</span>
            </div>
            <div className="font-jetbrains text-[10px] tracking-[0.14em] uppercase text-[var(--muted)] mt-7 mb-4 flex items-center gap-3 mono">MONO · JetBrains Mono <div className="flex-1 h-[1px] bg-rule" /></div>
            <p className="font-jetbrains text-[18px] sm:text-[22px] m-0 mono text-[var(--ink)]">npm i @modfly/ui →</p>
          </div>
        </div>
      </section>

      {/* COMEÇANDO */}
      <section className="p-6 sm:p-10 md:p-14 border-b border-rule relative overflow-hidden bg-[var(--bg-2)]" data-reveal>
        <div className="deco-mark dm-install hidden lg:block absolute text-[360px] -bottom-24 -right-8 opacity-50 serif" style={{ WebkitTextStroke: "1px rgba(26,23,20,0.16)" }}>Instale</div>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-14 mb-8 md:mb-12 items-start">
          <div className="font-jetbrains text-[11px] text-[var(--muted)] tracking-[0.14em] mono">
            SEC. 04 <span className="block font-instrument italic text-[52px] text-[var(--ink)] tracking-[-0.02em] leading-none mt-2 serif">iv.</span>
          </div>
          <div>
            <h2 className="font-instrument text-[32px] sm:text-[40px] md:text-[52px] leading-none tracking-[-0.025em] m-0 mb-4 serif">Começando em quatro passos.</h2>
            <p className="max-w-full md:max-w-[620px] text-[var(--ink-2)] text-base leading-[1.55]">
              Da instalação à primeira lição. O único passo não-óbvio é o <span className="font-jetbrains text-[13px] mono">content</span> do Tailwind —
              sem ele as classes da lib não chegam ao bundle final.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
          <div>
            <Step num="01" title="Instale o pacote" desc={<>Adicione <code>@modfly/ui</code> ao seu projeto React 18+ via pnpm, npm ou yarn.</>} />
            <Step num="02" title="Configure o Tailwind" desc={<>Inclua <code>./node_modules/@modfly/ui/dist/**/*.js</code> no array <code>content</code> do seu tailwind.config.</>} />
            <Step num="03" title="Importe e componha" desc={<>Use os componentes diretamente. Tudo é tree-shakeable — só carrega o que importa.</>} />
            <Step num="04" title="Precisa do AVAMEC?" desc={<>Instale também <code>@modfly/ui-avamec</code> para as questões integradas à BridgeRestApi.</>} />
          </div>
          <div className="bg-[#16140f] text-[#e8e2d1] rounded-xl p-5 sm:p-7 font-jetbrains text-[12px] sm:text-[13px] leading-[1.7] overflow-x-auto relative">
            <div className="flex items-center gap-2 pb-3.5 mb-3.5 border-b border-white/10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ec5d5d]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#f0c042]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#7fc77f]" />
              <div className="ml-auto text-[11px] text-[#6b645a] whitespace-nowrap">CursoTemplate / pages / Unidade01.tsx</div>
            </div>
            <pre className="m-0 font-inherit">
              <code className="text-[#f4a261]">import</code> {"{"}<br />
              {"  "}<code className="text-[#88c0ec]">UnityBanner</code>,<br />
              {"  "}<code className="text-[#88c0ec]">LearningBlock</code>,<br />
              {"  "}<code className="text-[#88c0ec]">Cards</code>,<br />
              {"}"} <code className="text-[#f4a261]">from</code> <code className="text-[#9fcd84]">&apos;@modfly/ui&apos;</code><br /><br />
              <code className="text-[#f4a261]">export default function</code> <code className="text-[#f4d35e]">Unidade01</code>() {"{"}<br />
              {"  "}<code className="text-[#f4a261]">return</code> (<br />
              {"    "}&lt;<code className="text-[#88c0ec]">main</code>&gt;<br />
              {"      "}&lt;<code className="text-[#88c0ec]">UnityBanner</code> <code className="text-[#d9b8f0]">title</code>=<code className="text-[#9fcd84]">&quot;Hierarquia&quot;</code> /&gt;<br />
              {"    "}&lt;/<code className="text-[#88c0ec]">main</code>&gt;<br />
              {"  "})<br />
              {"}"}
            </pre>
          </div>
        </div>
      </section>

      {/* ROTEIRO */}
      <section className="p-6 sm:p-10 md:p-14 border-b border-rule relative overflow-hidden" data-reveal>
        <div className="deco-mark dm-forward hidden lg:block absolute text-[340px] -bottom-20 -left-2.5 opacity-[0.45] serif">Roteiro</div>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-14 mb-8 md:mb-12 items-start">
          <div className="font-jetbrains text-[11px] text-[var(--muted)] tracking-[0.14em] mono">
            SEC. 05 <span className="block font-instrument italic text-[52px] text-[var(--ink)] tracking-[-0.02em] leading-none mt-2 serif">v.</span>
          </div>
          <div>
            <h2 className="font-instrument text-[32px] sm:text-[40px] md:text-[52px] leading-none tracking-[-0.025em] m-0 mb-4 serif">Para onde vamos.</h2>
            <p className="max-w-full md:max-w-[620px] text-[var(--ink-2)] text-base leading-[1.55]">
              Quatro fases até a 1.0. Cada fase termina com um entregável concreto: lib publicada,
              site no ar, ou CLI funcionando.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-rule">
          <Phase num="00" title="Estrutura" when="em andamento" ship="workspace pronto" items={["Org GitHub modfly-ui", "tsup + ESM/CJS", "Storybook v8 wiring", "Domínio modfly.design"]} />
          <Phase num="01" title="Migração central" when="planejado" ship="0.1.0-alpha no npm" items={["Accordion (22 variantes)", "ButtonLink + PDF", "Cards + CardFlip", "Carousel + Slider", "LearningBlock"]} />
          <Phase num="02" title="Site de docs" when="planejado" ship="0.1.0 estável" items={["Next.js 15 + MDX", "Preview + abas de código", "Página por componente", "Deploy Vercel"]} />
          <Phase num="03–04" title="AVAMEC + CLI" when="objetivo ambicioso" ship="1.0.0 com CLI" items={["@modfly/ui-avamec", "Tipos BridgeRestApi", "npx modfly add", "Analytics + SEO"]} />
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="p-6 sm:p-10 md:p-14 md:pt-16 md:pb-10 bg-[var(--ink)] text-[var(--bg)] relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-10 pb-10 border-b border-white/10 relative z-10">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="font-instrument text-[36px] sm:text-[52px] md:text-[72px] leading-[0.95] md:leading-[0.9] tracking-[-0.03em] serif">
              A biblioteca<br />cresce <i className="italic text-[var(--orange-soft)]">com</i><br />o curso.
            </div>
          </div>
          <FooterCol title="Produto" items={["Componentes", "AVAMEC", "Storybook", "Changelog"]} />
          <FooterCol title="Recursos" items={["GitHub", "NPM", "Roteiro", "Contribuir"]} />
          <FooterCol title="Inspirado por" items={["Pittaya UI", "Shadcn UI", "Radix UI", "Turborepo"]} />
        </div>
        <div className="pt-6 flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center font-jetbrains text-[11px] text-white/50 mono">
          <div>MODFLY UI · MIT · 2026</div>
          <div>FEITO PARA APRENDER · BRASIL</div>
        </div>
      </footer>
    </>
  );
}

function StatItem({ num, label }: any) {
  return (
    <div className="py-3.5 border-b border-dashed border-rule last:border-none">
      <div className="font-instrument text-[42px] leading-none tracking-[-0.02em] serif">
        {num.includes("+") || num.includes("v") ? (
          <>{num.replace(/[+v]/, "")}<small className="text-base text-[var(--muted)] ml-1">{num.match(/[+v]/)}</small></>
        ) : num}
      </div>
      <div className="font-jetbrains text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] mt-1 mono">{label}</div>
    </div>
  );
}

function MetaItem({ label, value, mono, detail }: any) {
  return (
    <div className="pr-6 sm:border-r border-rule sm:last:border-none px-4 sm:px-6 first:pl-0">
      <div className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-[var(--muted)] mb-1.5 mono">{label}</div>
      <div className="font-instrument text-[22px] leading-[1.1] tracking-[-0.01em] serif">
        {mono ? <span className="font-jetbrains text-sm mono">{value}</span> : value}
        {detail && <span className="text-[var(--muted)] text-sm ml-1.5">{detail}</span>}
      </div>
    </div>
  );
}

function MarqueeSet() {
  return (
    <div className="mq-set inline-flex items-center shrink-0 pr-14 gap-14">
      <span><i>Componentes</i></span><span className="text-[var(--orange)] font-geist text-sm translate-y-[-2px]">✦</span>
      <span>Accordion</span><span className="text-[var(--orange)] font-geist text-sm translate-y-[-2px]">✦</span>
      <span>ButtonLink</span><span className="text-[var(--orange)] font-geist text-sm translate-y-[-2px]">✦</span>
      <span>Cards</span><span className="text-[var(--orange)] font-geist text-sm translate-y-[-2px]">✦</span>
      <span>CardFlip</span><span className="text-[var(--orange)] font-geist text-sm translate-y-[-2px]">✦</span>
      <span><i>feitos</i></span><span className="text-[var(--orange)] font-geist text-sm translate-y-[-2px]">✦</span>
      <span>Pagination</span><span className="text-[var(--orange)] font-geist text-sm translate-y-[-2px]">✦</span>
      <span>UnityBanner</span><span className="text-[var(--orange)] font-geist text-sm translate-y-[-2px]">✦</span>
      <span><i>para aprender.</i></span><span className="text-[var(--orange)] font-geist text-sm translate-y-[-2px]">✦</span>
    </div>
  );
}

function MockCard({ title, color, offset }: any) {
  const bg =
    color === "blue" ? "bg-gradient-to-br from-[var(--blue-soft)] to-[var(--blue)]" :
    color === "green" ? "bg-gradient-to-br from-[var(--green-soft)] to-[var(--green)]" :
    "bg-gradient-to-br from-[var(--orange-soft)] to-[var(--orange)]";
  return (
    <div className={`w-[200px] shrink-0 bg-white rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 ${offset ? "-translate-y-3" : ""}`}>
      <div className={`h-[70px] ${bg}`} />
      <div className="w-20 h-20 rounded-full bg-[var(--bg-2)] mx-auto -mt-10 border-4 border-white" style={{ backgroundImage: "repeating-linear-gradient(45deg, #d6cdb8 0, #d6cdb8 4px, #efeae0 4px, #efeae0 8px)" }} />
      <div className="font-instrument text-[22px] text-center leading-none px-4 mt-3 serif">{title}</div>
      <div className="text-[11px] text-[var(--muted)] text-center p-4 pt-1.5 leading-relaxed">
        Descrição curta do componente para visualização rápida.
      </div>
      <div className={`w-8 h-8 rounded-full ${color === "blue" ? "bg-[var(--blue)]" : color === "green" ? "bg-[var(--green)]" : "bg-[var(--orange)]"} mx-auto mb-3.5 flex items-center justify-center text-white text-lg`}>+</div>
    </div>
  );
}

function Swatch({ name, soft, strong, hex1, hex2 }: any) {
  return (
    <div className="bg-[var(--paper)] border border-rule rounded-xl overflow-hidden shadow-sm transition-transform hover:-translate-y-2 group cursor-pointer">
      <div className="h-28 relative" style={{ background: soft }}>
        <div className="absolute inset-x-0 bottom-0 h-[36%]" style={{ background: strong }} />
      </div>
      <div className="p-3.5">
        <div className="font-instrument text-xl leading-none mb-2 capitalize serif">{name}</div>
        <div className="flex justify-between font-jetbrains text-[11px] text-[var(--muted)] mono">
          <span>{hex1}</span>
          <span>{hex2}</span>
        </div>
      </div>
    </div>
  );
}

function Step({ num, title, desc }: any) {
  return (
    <div className="flex gap-4 py-4.5 border-b border-dashed border-rule last:border-none">
      <div className="font-instrument italic text-4xl leading-none text-[var(--orange)] w-12 shrink-0 serif">{num}</div>
      <div>
        <div className="font-instrument text-[22px] leading-tight mb-1 serif">{title}</div>
        <div className="text-[var(--ink-2)] text-[13.5px] leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

function Phase({ num, title, when, ship, items }: any) {
  return (
    <div className="p-6 border-r border-rule last:border-none relative group hover:bg-[var(--paper)] transition-colors">
      <div className="font-jetbrains text-[10px] text-[var(--muted)] tracking-[0.14em] mb-2 mono">FASE {num} · SEMANAS 1–2</div>
      <div className="font-instrument text-[26px] leading-tight mb-1 serif">{title}</div>
      <div className="font-jetbrains text-[11px] text-[var(--orange)] mb-4 mono">{when}</div>
      <ul className="list-none p-0 m-0 text-[13px]">
        {items.map((item: string) => (
          <li key={item} className="py-1 text-[var(--ink-2)] flex items-start gap-2">
            <span className="text-[var(--muted)] font-bold">·</span> {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-3 border-t border-dashed border-rule font-jetbrains text-[11px] text-[var(--muted)] mono">
        ENTREGA · <b className="text-[var(--ink)] font-semibold">{ship}</b>
      </div>
    </div>
  );
}

function FooterCol({ title, items }: any) {
  return (
    <div>
      <h4 className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-white/50 mb-3.5 font-medium mono">{title}</h4>
      <ul className="list-none p-0 m-0">
        {items.map((item: string) => (
          <li key={item} className="text-[13.5px] py-1 text-white/85 hover:text-white cursor-pointer transition-colors">{item}</li>
        ))}
      </ul>
    </div>
  );
}
