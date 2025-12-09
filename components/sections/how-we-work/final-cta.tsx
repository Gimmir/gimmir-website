import React from 'react';
import { ArrowRight, BookOpen, LifeBuoy } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="py-24 sm:py-32 px-6 relative overflow-hidden bg-[#050A14] border-t border-white/5">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#0062d1]/10 via-[#050A14] to-[#050A14] opacity-50 pointer-events-none"></div>
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Ready to partner with a <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-cyan-400">transparent engineering firm?</span>
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-full transition-all shadow-[0_0_30px_-5px_rgba(0,98,209,0.4)] hover:shadow-[0_0_40px_-5px_rgba(0,98,209,0.6)] hover:scale-105 flex items-center justify-center gap-2 group">
            Book a Process Deep Dive
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 group hover:border-white/20 backdrop-blur-sm">
             View Sample Architecture Blueprint
             <BookOpen size={18} className="text-slate-400 group-hover:text-white transition-colors" />
          </button>
        </div>
        <div className="inline-flex items-center gap-2 text-sm text-slate-400 bg-white/5 px-5 py-2.5 rounded-full border border-white/5 backdrop-blur-md">
           <LifeBuoy size={16} className="text-[#0062d1]" />
           <span>Transparency is our default setting. Let us show you.</span>
        </div>
      </div>
    </section>
  );
}
