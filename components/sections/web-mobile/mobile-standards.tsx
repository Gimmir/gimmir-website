'use client';

import React from 'react';
import { Smartphone, Zap, Code2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function MobileStandardsSection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-t border-white/5 bg-[#050A14] relative overflow-hidden">
      {/* Background Glow & Noise */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#0062d1]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="Our &quot;Future-Proof&quot; Stack" 
          subtitle="We don't guess. We choose the right strategy for your performance needs."
          badge="iOS & Android"
          badgeIcon={Smartphone}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
           {/* Strategy A: Native */}
           <div className="group relative bg-[#0B0F19] border border-white/10 p-6 md:p-8 rounded-3xl overflow-hidden hover:border-[#0062d1]/50 transition-all duration-500 shadow-2xl shadow-black/20 flex flex-col">
              {/* Background Graphic */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-yellow-500/10 transition-colors"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                   <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-yellow-500/10 rounded-xl text-yellow-500 border border-yellow-500/20 shrink-0">
                        <Zap size={24} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">Native</h3>
                   </div>
                   <span className="text-[10px] md:text-xs font-mono text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/5 whitespace-nowrap">SWIFT / KOTLIN</span>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                      <span className="text-slate-400 text-sm font-medium">Performance</span>
                      <span className="text-white font-mono text-xs bg-white/5 px-2 py-1 rounded border border-white/5 w-fit">Direct Memory</span>
                   </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                      <span className="text-slate-400 text-sm font-medium">Arch</span>
                      <span className="text-emerald-400 font-mono text-xs bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 w-fit">MVVM-C</span>
                   </div>
                </div>
                   
                {/* Abstract Visual: Threading - Reponsive Fix */}
                <div className="mt-auto p-4 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="flex gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2 font-mono text-[10px] text-slate-500">
                        <div className="flex flex-wrap justify-between gap-2"><span>Thread.main</span> <span className="text-emerald-500 whitespace-nowrap">60fps UI</span></div>
                        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden"><div className="bg-emerald-500 w-1/4 h-full animate-pulse"></div></div>
                        <div className="flex flex-wrap justify-between gap-2 pt-1"><span>Thread.bg</span> <span className="text-yellow-500 whitespace-nowrap">Heavy Calc</span></div>
                        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden"><div className="bg-yellow-500 w-3/4 h-full"></div></div>
                    </div>
                </div>
              </div>
           </div>

           {/* Strategy B: React Native */}
           <div className="group relative bg-[#0B0F19] border border-white/10 p-6 md:p-8 rounded-3xl overflow-hidden hover:border-[#0062d1]/50 transition-all duration-500 shadow-2xl shadow-black/20 flex flex-col">
              {/* Background Graphic */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0062d1]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-[#0062d1]/10 transition-colors"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                   <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#0062d1]/10 rounded-xl text-[#0062d1] border border-[#0062d1]/20 shrink-0">
                        <Code2 size={24} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">React Native</h3>
                   </div>
                   <span className="text-[10px] md:text-xs font-mono text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/5 whitespace-nowrap">TYPESCRIPT</span>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                      <span className="text-slate-400 text-sm font-medium">Deps</span>
                      <span className="text-white font-mono text-xs bg-white/5 px-2 py-1 rounded border border-white/5 w-fit">Strict Locking</span>
                   </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                      <span className="text-slate-400 text-sm font-medium">Bridging</span>
                      <span className="text-emerald-400 font-mono text-xs bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 w-fit">Native Modules</span>
                   </div>
                </div>

                {/* Abstract Visual: Bridge - Responsive Fix */}
                <div className="mt-auto p-4 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <div className="flex gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
                    </div>
                    <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 gap-2">
                        <div className="text-center flex-1 min-w-0"><div className="mb-1 text-[#0062d1] truncate">JS</div><div className="w-full max-w-[40px] h-8 rounded border border-[#0062d1]/30 bg-[#0062d1]/10 mx-auto flex items-center justify-center">Log</div></div>
                        <div className="h-px flex-[2] bg-gradient-to-r from-[#0062d1]/50 to-emerald-500/50 mx-1 relative"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B0F19] px-1 text-[8px] text-slate-500 border border-white/10 rounded">BRIDGE</div></div>
                        <div className="text-center flex-1 min-w-0"><div className="mb-1 text-emerald-500 truncate">Native</div><div className="w-full max-w-[40px] h-8 rounded border border-emerald-500/30 bg-emerald-500/10 mx-auto flex items-center justify-center">UI</div></div>
                    </div>
                </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
