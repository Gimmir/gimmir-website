'use client';

import React from 'react';
import { Settings2, Cpu } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative z-10 pt-32 pb-16 sm:pb-24 px-6 border-b border-white/5 overflow-hidden bg-[#050A14]">
       {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#0062d1] rounded-full blur-[100px] sm:blur-[200px] opacity-[0.15] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050A14]/80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up shadow-lg shadow-black/20">
            <Cpu size={14} className="text-[#0062d1]" />
            <span className="text-xs font-mono text-slate-300 tracking-wider uppercase">Web & Mobile Engineering</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up drop-shadow-2xl" style={{ animationDelay: '0.1s' }}>
            Engineering Assets. <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-cyan-400">Not Liabilities.</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             We build High-Load Web & Native Mobile platforms designed to handle 1M+ users without a total rewrite. Architecture ready for Series A Due Diligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-full transition-all shadow-[0_0_30px_-5px_rgba(0,98,209,0.4)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              <Settings2 size={18} />
              Plan Your Architecture
            </button>
          </div>
        </div>

        {/* Visual Content - Abstract Code/Architecture Visualization */}
        <div className="relative hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative bg-[#0B0F19]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 ring-1 ring-white/5">
               <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">system_core.ts</div>
               </div>
               <div className="space-y-3 font-mono text-xs leading-relaxed">
                  <div className="text-slate-500">// Domain-Driven Design Core</div>
                  <div className="flex items-center gap-2 text-slate-400">
                     <span className="text-purple-400">interface</span> <span className="text-yellow-200">SystemArchitecture</span> {'{'}
                  </div>
                  <div className="pl-6 space-y-2">
                     <div className="flex items-center gap-2">
                        <span className="text-blue-400">domain:</span> <span className="text-emerald-300">&quot;Pure Business Logic&quot;</span>,
                     </div>
                     <div className="flex items-center gap-2">
                        <span className="text-blue-400">infrastructure:</span> <span className="text-emerald-300">&quot;Decoupled Adapters&quot;</span>,
                     </div>
                     <div className="flex items-center gap-2">
                        <span className="text-blue-400">scalability:</span> <span className="text-orange-300">&quot;Horizontal Sharding&quot;</span>,
                     </div>
                     <div className="flex items-center gap-2">
                        <span className="text-blue-400">security:</span> <span className="text-emerald-300">[&quot;OWASP&quot;, &quot;AES-256&quot;]</span>
                     </div>
                  </div>
                  <div className="text-slate-400">{'}'}</div>
                  
                  <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                     <div className="text-slate-500 text-[10px]">Due Diligence Check</div>
                     <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide border border-emerald-400/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                        PASSED
                     </div>
                  </div>
               </div>
            </div>
            {/* Decoration Blobs */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#0062d1] rounded-full blur-[90px] opacity-20 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-600 rounded-full blur-[80px] opacity-15 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
