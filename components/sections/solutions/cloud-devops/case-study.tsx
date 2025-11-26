'use client';

import React from 'react';
import { BarChart, Zap } from 'lucide-react';

export function CaseStudySection() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050A14] relative overflow-hidden border-b border-white/5"> {/* Changed bg to match theme */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#0B0F19] border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl"> {/* Added shadow */}
          {/* Background gradient */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#0062d1]/10 to-transparent pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            {/* Content */}
            <div className="p-6 sm:p-12 flex flex-col justify-center">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-6 w-fit max-w-full shadow-sm">
                  <BarChart size={14} className="text-[#0062d1] shrink-0" />
                  <span className="text-left">Case Study: The Scalability Test</span>
               </div>
               
               <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                 Handling Black Friday Traffic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-cyan-400">Without Crashing.</span>
               </h3>
               
               <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                 We scaled a high-load e-commerce platform from 10k to 500k concurrent requests in seconds using Kubernetes Auto-scaling.
               </p>
               
               <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                  <div>
                     <div className="text-2xl font-bold text-white">50x</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Load Spike</div>
                  </div>
                  <div>
                     <div className="text-2xl font-bold text-emerald-400">99.99%</div>
                     <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Uptime Achieved</div>
                  </div>
               </div>
            </div>

            {/* Visual */}
            <div className="bg-[#080C14] border-t lg:border-t-0 lg:border-l border-white/10 p-8 flex items-center justify-center relative overflow-hidden min-h-[300px]"> {/* Slightly lighter dark bg */}
               {/* Chart Graphic */}
               <div className="w-full max-w-md h-48 relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                     <div className="w-full h-px bg-white"></div>
                     <div className="w-full h-px bg-white"></div>
                     <div className="w-full h-px bg-white"></div>
                     <div className="w-full h-px bg-white"></div>
                  </div>
                  
                  {/* Traffic Line */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                     <path d="M0,150 L50,145 L100,148 L150,20 L200,15 L250,18 L300,140 L350,145 L400,150" fill="none" stroke="#0062d1" strokeWidth="3" vectorEffect="non-scaling-stroke" className="drop-shadow-[0_0_10px_rgba(0,98,209,0.5)]" />
                     <path d="M0,150 L50,145 L100,148 L150,20 L200,15 L250,18 L300,140 L350,145 L400,150 V190 H0 Z" fill="url(#gradient)" opacity="0.2" />
                     <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                           <stop offset="0%" stopColor="#0062d1" />
                           <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                     </defs>
                  </svg>

                  {/* Spike Label */}
                  <div className="absolute top-[10%] left-[45%] bg-red-500/10 border border-red-500/30 px-2 py-1 rounded text-[10px] text-red-400 font-bold animate-pulse">
                     ⚠ TRAFFIC SPIKE DETECTED
                  </div>

                   {/* Scaling Action */}
                   <div className="absolute top-[25%] left-[60%] bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 rounded text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                     <Zap size={10} /> K8S SCALING: +50 NODES
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}