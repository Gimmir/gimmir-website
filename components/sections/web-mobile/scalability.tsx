'use client';

import React from 'react';
import { Database, CheckCircle2, Zap, Server } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function ScalabilitySection() {
  return (
    <section className="py-24 px-6 overflow-hidden relative bg-[#050A14]">
       {/* Background elements */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0062d1]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="Web & Backend Scalability" 
          subtitle="Infrastructure that handles growth spikes without crashing. Ready for terabytes of data."
          badge="High-Load Ready"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Database */}
          <div className="group relative bg-[#0B0F19] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#0062d1]/50 transition-all duration-500 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
             <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                   <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20"><Database size={24} /></div>
                   <span className="text-[10px] font-mono text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/5">LOW_LATENCY</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Database Optimization</h3>
                <ul className="space-y-3 mb-8">
                   <li className="flex items-start gap-2 text-sm text-slate-400"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> <span>Automated Query Analysis</span></li>
                   <li className="flex items-start gap-2 text-sm text-slate-400"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> <span>N+1 Query Prevention</span></li>
                   <li className="flex items-start gap-2 text-sm text-slate-400"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> <span>Indexing Strategies</span></li>
                </ul>

                {/* Visual: Query Performance */}
                <div className="mt-auto bg-[#050810] rounded-xl border border-white/10 p-4 font-mono text-[10px] relative overflow-hidden group-hover:border-blue-500/30 transition-colors">
                   <div className="flex justify-between items-center mb-2 text-slate-500">
                      <span>Query Time</span>
                      <span className="text-emerald-400">0.04ms</span>
                   </div>
                   <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden mb-3">
                      <div className="h-full w-[15%] bg-emerald-500 rounded-full"></div>
                   </div>
                   <div className="space-y-1 text-slate-600">
                      <div className="flex gap-2"><span className="text-blue-400">SELECT</span> * <span className="text-blue-400">FROM</span> users</div>
                      <div className="flex gap-2"><span className="text-blue-400">WHERE</span> id = <span className="text-yellow-400">idx_scan</span></div>
                   </div>
                </div>
             </div>
          </div>

          {/* Card 2: Caching */}
          <div className="group relative bg-[#0B0F19] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
             <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                   <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-400 border border-yellow-500/20"><Zap size={24} /></div>
                   <span className="text-[10px] font-mono text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/5">HIGH_SPEED</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Caching Layer</h3>
                <ul className="space-y-3 mb-8">
                   <li className="flex items-start gap-2 text-sm text-slate-400"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> <span>Redis Implementation</span></li>
                   <li className="flex items-start gap-2 text-sm text-slate-400"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> <span>Hot Data Caching</span></li>
                   <li className="flex items-start gap-2 text-sm text-slate-400"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> <span>Load Reduction (80%)</span></li>
                </ul>

                {/* Visual: Cache Hit/Miss */}
                <div className="mt-auto bg-[#050810] rounded-xl border border-white/10 p-4 font-mono text-[10px] relative overflow-hidden group-hover:border-yellow-500/30 transition-colors">
                    <div className="grid grid-cols-2 gap-2 text-center">
                       <div className="bg-white/5 rounded p-2">
                          <div className="text-slate-500 mb-1">Cache Hit</div>
                          <div className="text-emerald-400 font-bold text-lg">94%</div>
                       </div>
                       <div className="bg-white/5 rounded p-2">
                          <div className="text-slate-500 mb-1">DB Load</div>
                          <div className="text-yellow-400 font-bold text-lg">⬇ 8x</div>
                       </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Card 3: API Standards */}
          <div className="group relative bg-[#0B0F19] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
             <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                   <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20"><Server size={24} /></div>
                   <span className="text-[10px] font-mono text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/5">DOCUMENTED</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">API Standards</h3>
                <ul className="space-y-3 mb-8">
                   <li className="flex items-start gap-2 text-sm text-slate-400"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> <span>RESTful Strict / GraphQL</span></li>
                   <li className="flex items-start gap-2 text-sm text-slate-400"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> <span>OpenAPI (Swagger) Docs</span></li>
                   <li className="flex items-start gap-2 text-sm text-slate-400"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" /> <span>No &quot;Black Box&quot; APIs</span></li>
                </ul>

                {/* Visual: API Response */}
                <div className="mt-auto bg-[#050810] rounded-xl border border-white/10 p-4 font-mono text-[10px] relative overflow-hidden group-hover:border-purple-500/30 transition-colors">
                   <div className="flex items-center gap-2 mb-2 border-b border-white/5 pb-2">
                      <span className="text-emerald-400 font-bold">GET</span>
                      <span className="text-slate-400">/v1/users</span>
                      <span className="ml-auto text-slate-500">200 OK</span>
                   </div>
                   <div className="space-y-1 text-slate-500">
                      <div>{`{`}</div>
                      <div className="pl-4"><span className="text-purple-400">&quot;data&quot;</span>: [...],</div>
                      <div className="pl-4"><span className="text-purple-400">&quot;meta&quot;</span>: {`{ "total": 1050 }`}</div>
                      <div>{`}`}</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
