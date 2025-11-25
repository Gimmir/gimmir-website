import React from 'react';
import { Clock, Globe2, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function TimezoneSection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-t border-white/5 bg-[#050810]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Zero Latency Operations" 
          subtitle="Work with teams that wake up when you do."
          badge="Logistics"
          badgeIcon={Clock}
        />
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           {/* Row 1: Scenario A (Americas) */}
           <div className="group bg-[#0B0F19] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.02] transition-colors shadow-lg shadow-black/10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-2xl font-bold text-white">Scenario A (Americas)</h3>
                 <Globe2 className="text-[#0062d1]" />
              </div>
              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
              {/* Details */}
              <div className="space-y-4">
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Hub</span>
                    <span className="text-white font-mono">Mexico City (LatAm)</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Benefit</span>
                    <span className="text-emerald-400 font-bold font-mono">100% Real-Time Overlap (CST)</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Note</span>
                    <span className="text-slate-200 text-right max-w-[200px]">Best for US-based teams requiring synchronous collaboration.</span>
                 </div>
              </div>
           </div>

           {/* Row 1: Scenario B (Europe) */}
           <div className="group bg-[#0B0F19] border border-white/10 p-8 rounded-2xl hover:bg-white/[0.02] transition-colors shadow-lg shadow-black/10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-2xl font-bold text-white">Scenario B (Europe)</h3>
                 <Globe2 className="text-[#0062d1]" />
              </div>
              <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
              {/* Details */}
              <div className="space-y-4">
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Hub</span>
                    <span className="text-white font-mono">Ukraine / Spain</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Benefit</span>
                    <span className="text-emerald-400 font-bold font-mono">Full Business Day Overlap</span>
                 </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Note</span>
                    <span className="text-slate-200 text-right max-w-[200px]">Best for EU teams or US teams wanting morning updates.</span>
                 </div>
              </div>
           </div>

           {/* Row 2: Scenario C (Global / Hybrid) - Full Width */}
           <div className="md:col-span-2 group relative bg-[#0B0F19] border border-cyan-500/30 p-8 rounded-2xl overflow-hidden transition-all hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] shadow-lg shadow-black/10">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono font-bold uppercase mb-4">
                     // HYBRID_VELOCITY_MODEL
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Scenario C (20h+ Continuous Cycle)</h3>
                        <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                           Maximize velocity. Europe starts the sprint, hands off to LatAm in the evening. Result: Development continues while you sleep. Almost zero downtime.
                        </p>
                     </div>
                     <div className="text-right">
                         <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">Benefit</div>
                         <div className="text-cyan-400 font-bold font-mono text-lg">&quot;Follow the Sun&quot; Delivery</div>
                     </div>
                  </div>

                  {/* Timeline Visual */}
                  <div className="bg-[#050810] rounded-xl border border-white/10 p-6 relative overflow-hidden">
                      {/* 24h Scale Labels */}
                      <div className="flex justify-between text-[10px] font-mono text-slate-600 mb-2 px-0.5">
                        <span>00:00</span>
                        <span>06:00</span>
                        <span>12:00</span>
                        <span>18:00</span>
                        <span>24:00</span>
                      </div>
                      
                      {/* Timeline Track */}
                      <div className="h-3 bg-white/5 rounded-full w-full mb-8 relative overflow-hidden">
                         {/* Grid lines for context */}
                         <div className="absolute inset-0 flex justify-between px-0.5">
                            <div className="w-px h-full bg-white/5"></div>
                            <div className="w-px h-full bg-white/5"></div>
                            <div className="w-px h-full bg-white/5"></div>
                            <div className="w-px h-full bg-white/5"></div>
                            <div className="w-px h-full bg-white/5"></div>
                         </div>

                         {/* Active Zone - approximating the 20h coverage */}
                         <div className="absolute left-[15%] right-[5%] h-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 rounded-full opacity-80"></div>
                      </div>

                      <div className="flex flex-col md:flex-row justify-between gap-8 relative">
                          {/* Europe Shift */}
                          <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                  <span className="text-2xl">🇺🇦</span>
                                  <div>
                                      <div className="text-white font-bold text-sm">Europe (Start)</div>
                                      <div className="text-slate-500 text-xs font-mono">08:00 - 17:00 CET</div>
                                  </div>
                              </div>
                              <div className="h-1.5 w-full bg-indigo-500/20 rounded-full overflow-hidden">
                                  <div className="h-full w-full bg-indigo-500"></div>
                              </div>
                          </div>

                          {/* Handover Connector */}
                          <div className="flex flex-col items-center justify-center text-slate-500 text-xs font-mono my-4 md:my-0">
                              <ArrowRight className="text-cyan-500 mb-1 rotate-90 md:rotate-0" />
                              <span>HANDOVER</span>
                          </div>

                          {/* LatAm Shift */}
                          <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                  <span className="text-2xl">🇲🇽</span>
                                  <div>
                                      <div className="text-white font-bold text-sm">LatAm (Finish)</div>
                                      <div className="text-slate-500 text-xs font-mono">09:00 - 18:00 CST</div>
                                  </div>
                              </div>
                              <div className="h-1.5 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                                  <div className="h-full w-full bg-emerald-500"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
