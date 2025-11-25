'use client';

import React from 'react';
import { Rocket, ShieldCheck } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-16 sm:py-24 px-6 relative overflow-hidden bg-[#050A14] border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a1435_0%,_#050A14_100%)] -z-10"></div>
      <div className="max-w-4xl mx-auto text-center">
         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
           Don&apos;t just build an app. <br className="hidden sm:block" /> Build a business.
         </h2>
         <p className="text-lg text-slate-400 mb-10 font-light max-w-2xl mx-auto">
           Calculate the budget for a scalable MVP, not a throwaway prototype.
         </p>
         <div className="flex flex-col items-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-xl text-lg transition-all shadow-2xl shadow-blue-900/50 hover:shadow-blue-900/70 hover:scale-105 flex items-center justify-center gap-3 group">
              Launch Project Simulator
              <Rocket className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <div className="flex items-center gap-2 text-xs text-slate-500">
               <ShieldCheck size={14} className="text-emerald-500" />
               <span>Native English & Spanish Support. Zero communication gaps.</span>
            </div>
         </div>
      </div>
    </section>
  );
}
