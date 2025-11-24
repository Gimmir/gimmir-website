import { Code2, ArrowRight, ChevronRightSquare, Lock } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden border-t border-white/5">
      {/* Gradient and Noise Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a1435_0%,_#020408_100%)]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      {/* Subtle Circuit/Network Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Pre-headline Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
          <Code2 size={14} className="text-[#0062d1]" />
          <span className="text-xs font-mono text-slate-300 tracking-wider uppercase">
            Final_Checkpoint
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
          Ready to Build an Asset, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-cyan-400">
            Not a Liability?
          </span>
        </h2>
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Stop guessing. Get a precise engineering roadmap that guarantees scalability and IP ownership
          from the first commit.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          {/* High-Contrast Primary Button */}
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-xl transition-all shadow-[0_0_40px_-10px_rgba(0,98,209,0.5)] hover:shadow-[0_0_50px_-10px_rgba(0,98,209,0.7)] hover:scale-105 active:scale-95 flex flex-col items-center gap-1 group">
            <div className="flex items-center gap-2">
              <span>Simulate Project Cost & Risk</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <span className="text-[10px] opacity-80 font-mono font-normal uppercase tracking-wider">
              Get range in 2 mins
            </span>
          </button>

          {/* Secondary Outline Button */}
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold rounded-xl transition-all hover:border-white/40 active:scale-95 flex flex-col items-center gap-1 group">
            <div className="flex items-center gap-2">
              <span>Book Architecture Review</span>
              <ChevronRightSquare
                size={18}
                className="text-slate-400 group-hover:text-white transition-colors"
              />
            </div>
            <span className="text-[10px] text-slate-400 group-hover:text-slate-300 transition-colors font-mono font-normal uppercase tracking-wider">
              Speak with Lead Engineer
            </span>
          </button>
        </div>

        {/* Trust Footer */}
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-500 font-mono bg-white/5 border border-white/10 px-4 py-2 rounded-2xl sm:rounded-full text-center">
          <div className="flex items-center gap-2">
            <Lock size={12} className="text-emerald-500 shrink-0" />
            <span>All discussions are covered by our standard NDA.</span>
          </div>
          <span>Your idea remains yours.</span>
        </div>
      </div>
    </section>
  );
}
