'use client';

import React from 'react';
import { Layers } from 'lucide-react';

export function ArchitectureSection() {
  return (
    <section className="py-24 px-6 bg-[#050A14]">
      <div className="max-w-6xl mx-auto bg-[#0B0F19] border border-white/10 rounded-3xl p-6 md:p-16 overflow-hidden relative shadow-2xl shadow-black/30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0062d1]/5 to-transparent pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#0062d1] font-bold mb-4">
              <Layers size={20} />
              <span className="uppercase tracking-widest text-xs">Our Philosophy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Domain-Driven Design. <br/> Logic Decoupling.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Most agencies mix UI logic with Business logic, making the app impossible to update. We implement <strong>Clean Architecture (Hexagonal)</strong> to separate the core domain from frameworks. You can switch from React to Vue without rewriting business rules.
            </p>
            <div className="flex flex-wrap gap-3">
               {['Pure Logic Entities', 'Use Cases', 'Adapters', 'Frameworks'].map(layer => (
                 <span key={layer} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 font-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> {layer}
                 </span>
               ))}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
             {/* Visual Rep of Hexagonal Arch */}
             <div className="bg-[#080C14] border border-white/10 rounded-xl p-6 font-mono text-xs text-slate-400 shadow-2xl ring-1 ring-white/5 w-full">
                <div className="flex flex-col gap-4 items-center justify-center py-8">
                   <div className="w-full max-w-[160px] p-4 border border-emerald-500/30 bg-emerald-900/10 rounded-xl text-center text-emerald-400 font-bold">
                      Domain (Core)
                   </div>
                   <div className="h-8 w-px bg-white/10"></div>
                   <div className="w-full max-w-[220px] p-4 border border-[#0062d1]/30 bg-[#0062d1]/10 rounded-xl text-center text-[#0062d1] font-bold">
                      Application Logic
                   </div>
                   <div className="h-8 w-px bg-white/10"></div>
                   <div className="flex gap-4 w-full justify-center">
                      <div className="p-3 border border-white/10 bg-white/5 rounded-lg text-slate-300 flex-1 text-center max-w-[100px]">UI / Web</div>
                      <div className="p-3 border border-white/10 bg-white/5 rounded-lg text-slate-300 flex-1 text-center max-w-[100px]">DB / API</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
