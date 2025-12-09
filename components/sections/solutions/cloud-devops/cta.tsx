'use client';

import React from 'react';
import { ChevronRightSquare } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 px-6 relative overflow-hidden bg-[#050A14] border-t border-white/5">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#0062d1]/10 via-[#050A14] to-[#050A14] opacity-50 pointer-events-none"></div>
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Is your infrastructure <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-cyan-400">ready for scale?</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Get a free infrastructure audit to find security holes and cost leaks.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-full transition-all shadow-[0_0_30px_-5px_rgba(0,98,209,0.4)] hover:shadow-[0_0_40px_-5px_rgba(0,98,209,0.6)] hover:scale-105 flex items-center justify-center gap-2 group">
            Book Infrastructure Audit
            <ChevronRightSquare size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}