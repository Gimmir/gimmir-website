import React from 'react';
import { ChevronRightSquare } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 px-6 relative overflow-hidden bg-[#050A14]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a1435_0%,_#020408_100%)] -z-10"></div>
      <div className="max-w-4xl mx-auto text-center">
         <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to scale your squad?</h2>
         <p className="text-lg text-slate-400 mb-10 font-light">Get a list of candidates matching your stack within 48 hours.</p>
         <div className="flex justify-center">
            <button className="px-10 py-5 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-xl text-lg transition-all shadow-2xl shadow-blue-900/50 hover:shadow-blue-900/70 hover:scale-105 flex items-center gap-3 group">
              Initiate Team Setup
              <ChevronRightSquare className="group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </div>
    </section>
  );
}
