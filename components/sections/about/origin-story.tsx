"use client";

import React, { ReactNode } from 'react';
import { DollarSign, Shield, CheckCircle2, Lightbulb } from 'lucide-react';

interface LocalSectionHeaderProps {
  title: ReactNode;
  subtitle: string;
  badge?: string;
  badgeIcon?: React.ElementType; 
  align?: 'center' | 'left';
}

function LocalSectionHeader({ 
  title, 
  subtitle, 
  badge, 
  badgeIcon: Icon, 
  align = 'center' 
}: LocalSectionHeaderProps) {
    const alignClass = align === 'left' ? 'text-left' : 'text-center';
    const marginClass = align === 'center' ? 'mx-auto' : '';
    const badgeMargin = align === 'center' ? 'mx-auto' : '';

    return (
        <div className={`mb-12 md:mb-16 ${alignClass} relative z-10`}>
            {badge && (
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6 ${badgeMargin}`}>
                    {Icon && <Icon size={12} className="text-[#0062d1]" />}
                    <span>{badge}</span>
                </div>
            )}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-snug">
                {title}
            </h2>
            <p className={`text-base sm:text-lg text-slate-400 max-w-2xl font-light leading-relaxed ${marginClass}`}>
                {subtitle}
            </p>
        </div>
    );
}

export function OriginStorySection() {
  const problemData = {
    icon: DollarSign,
    title_start: "The Industry is Full of \"Lemons\".", 
    title_end: "We Built a Lemonade Factory.", 
    desc: "Most agencies compete on price ($20/hr), leading to a \"Race to the Bottom\". They hide juniors behind senior profiles and say \"Yes\" to bad ideas just to bill hours.",
    solution: "We decided to compete on Architecture & Trust. We don't sell hours; we sell assets. We don't hide developers; we put them in your Slack.",
  };

  const ProblemIcon = problemData.icon;
  const SolutionIcon = Shield;

  return (
    <section className="relative z-30 py-16 sm:py-24 px-6 bg-[#080C14] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <LocalSectionHeader 
          title={
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug max-w-4xl mx-auto">
                {problemData.title_start} <br /><span className="text-[#0062d1]">{problemData.title_end}</span>
            </span>
          }
          subtitle="The Origin Story: We join the customer's pain, outlined below."
          badge="Why We Exist"
          badgeIcon={Lightbulb}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Problem Column (Left) */}
          <div className="flex flex-col h-full">
            <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-6 border-b border-red-500/20 pb-4 flex items-center gap-3">
              <ProblemIcon size={24} />
              <span className="text-white">The Problem: Race to the Bottom</span>
            </h3>
            
            <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-red-500/40 transition-all duration-500 shadow-xl shadow-black/20 flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3">The Problem: Most agencies compete on price ($20/hr)</h4>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {problemData.desc}
                </p>
              </div>

              {/* Visual Element: Risk Gauge */}
              <div className="mt-8 pt-4 border-t border-white/5 relative z-10">
                <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest mb-2">Resulting Risk: Hidden Debt</div>
                <div className="w-full bg-red-500/10 h-3 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-red-600 rounded-full shadow-lg shadow-red-700/50" title="High Debt"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Solution Column (Right) */}
          <div className="flex flex-col h-full">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0062d1] mb-6 border-b border-[#0062d1]/20 pb-4 flex items-center gap-3">
              <SolutionIcon size={24} />
              <span className="text-white">The Gimmir Solution: Architecture & Trust</span>
            </h3>
            
             <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-emerald-500/40 transition-all duration-500 shadow-xl shadow-black/20 flex-1">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                <div className="relative z-10">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3">We built a Lemonade Factory</h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
                    {problemData.solution}
                  </p>
                </div>
                
                {/* Highlighted differentiators */}
                <div className="space-y-3 pt-4 border-t border-white/5 relative z-10">
                    <div className="flex items-center gap-3 text-emerald-400">
                        <CheckCircle2 size={16} className="shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold">We don&apos;t sell hours; we sell assets.</span>
                    </div>
                    <div className="flex items-center gap-3 text-emerald-400">
                        <CheckCircle2 size={16} className="shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold">We don&apos;t hide developers; we put them in your Slack.</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
        {/* CTA focused on next step */}
        <div className="mt-16 text-center">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-full transition-all shadow-[0_0_20px_-5px_rgba(0,98,209,0.5)] hover:shadow-[0_0_30px_-5px_rgba(0,98,209,0.6)] flex items-center justify-center gap-2 group mx-auto text-base sm:text-lg">
                See How We Deliver Assets
            </button>
        </div>
      </div>
    </section>
  );
}
