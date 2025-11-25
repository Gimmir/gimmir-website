'use client';

import React from 'react';
import { X, Check } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function RealityCheckSection() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#0062d1] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="Disposable Demo vs. Growth Asset" 
          subtitle="The market standard is broken. Don't build something you'll have to throw away."
          badge="Reality Check"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* The Trap (Red Card) */}
          <div className="group bg-[#0B0F19] border border-white/5 hover:border-red-500/50 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden flex flex-col h-full shadow-xl shadow-black/20 hover:shadow-red-900/10">
             <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"></div>
             
             <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                   <X size={20} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white">The &quot;Disposable&quot; MVP</h3>
             </div>

             <div className="space-y-8 flex-grow relative z-10">
                <div className="space-y-2">
                   <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">The Trap</div>
                   <p className="text-slate-300 text-sm leading-relaxed">
                      Built on No-Code tools (Bubble) or spaghetti code to look good fast.
                   </p>
                </div>
                <div className="space-y-2">
                   <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">The Cost</div>
                   <p className="text-slate-300 text-sm leading-relaxed">
                      Hits a &quot;performance wall&quot; at 500 users. Impossible to add custom features later.
                   </p>
                </div>
             </div>

             <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
                <div className="text-red-400 font-bold text-lg mb-1 flex items-center gap-2">
                   100% Technical Debt
                </div>
                <p className="text-xs text-slate-500 font-mono">
                   Rewrite required to raise funding.
                </p>
             </div>
          </div>

          {/* The Gimmir Asset (Green Card) */}
          <div className="group bg-[#0B0F19] border border-white/5 hover:border-emerald-500/50 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden flex flex-col h-full shadow-xl shadow-black/20 hover:shadow-emerald-900/10">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"></div>
             
             <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                   <Check size={20} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">The Gimmir Asset</h3>
             </div>

             <div className="space-y-8 flex-grow relative z-10">
                <div className="space-y-2">
                   <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">The Strategy</div>
                   <p className="text-slate-300 text-sm leading-relaxed">
                      Modular architecture using the same stack as Uber/Airbnb (React/Node/Python).
                   </p>
                </div>
                <div className="space-y-2">
                   <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">The Gain</div>
                   <p className="text-slate-300 text-sm leading-relaxed">
                      Validates the market AND handles scale. No re-platforming needed.
                   </p>
                </div>
             </div>

             <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
                <div className="text-emerald-400 font-bold text-lg mb-1 flex items-center gap-2">
                   Series A Ready
                </div>
                <p className="text-xs text-slate-500 font-mono">
                   Passes Technical Due Diligence immediately.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
