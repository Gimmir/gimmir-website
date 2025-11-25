'use client';

import React from 'react';
import { ChevronRightSquare } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#050A14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a1435_0%,_#020408_100%)] -z-10"></div>
      <div className="max-w-4xl mx-auto text-center">
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">Don&apos;t just build an app. <br className="hidden sm:block" /> Build a business.</h2>
         <p className="text-lg text-slate-400 mb-12 font-light max-w-2xl mx-auto">Stop guessing. Get a precise engineering roadmap that guarantees scalability.</p>
         <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <button className="w-full sm:w-auto px-10 py-5 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-xl text-lg transition-all shadow-2xl shadow-blue-900/50 hover:shadow-blue-900/70 hover:scale-105 flex items-center justify-center gap-3 group">
              Simulate Project Cost
              <ChevronRightSquare className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl text-lg transition-all flex items-center justify-center gap-3">
              Book Architecture Review
            </button>
         </div>
      </div>
    </section>
  );
}
