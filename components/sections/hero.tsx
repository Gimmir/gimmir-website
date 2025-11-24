import { ShieldCheck, FileKey, Globe, Settings2, PlayCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-28 sm:pt-32 md:pt-40 px-4 text-center max-w-5xl mx-auto w-full">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 sm:mb-8 animate-fade-in-up">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0062d1] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0062d1]"></span>
        </span>
        <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-slate-300">Premium Engineering Partner</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 sm:mb-8 leading-[1.1] drop-shadow-2xl">
        Engineering Digital Assets <br className="hidden sm:block" />
        That You <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4da6ff] to-[#0062d1]">Won't Have To Rewrite</span>.
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-10 sm:mb-12 font-light leading-relaxed mx-auto px-2">
        Stop gambling with "facade MVPs". Get transparent architecture, full IP ownership from Day 1, and code ready for VC Due Diligence.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center mb-12 sm:mb-16 px-4">
        <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-semibold rounded-full shadow-[0_0_40px_-10px_rgba(0,98,209,0.5)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
          <Settings2 size={18} className="group-hover:rotate-180 transition-transform duration-500" />
          <span>Start Project Configurator</span>
        </button>
        <button className="w-full sm:w-auto px-8 py-4 bg-[#0f121a] hover:bg-[#1a1f2e] border border-white/10 text-slate-300 font-medium rounded-full transition-all active:scale-95 flex items-center justify-center gap-2 group">
          <PlayCircle size={18} className="text-[#0062d1]" />
          <span>How We Audit Code</span>
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-12 opacity-60 mb-16 sm:mb-20 px-2">
        <div className="flex items-center gap-2"><ShieldCheck className="text-[#0062d1]" size={16} /><span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">GDPR & HIPAA</span></div>
        <div className="flex items-center gap-2"><FileKey className="text-[#0062d1]" size={16} /><span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">100% IP Transfer</span></div>
        <div className="flex items-center gap-2"><Globe className="text-[#0062d1]" size={16} /><span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">US & EU Entity</span></div>
      </div>

      {/* Visual Console */}
      <div className="w-full relative mt-auto perspective-1000 group px-2 sm:px-0">
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0062d1]/50 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-4xl bg-[#080a10]/80 backdrop-blur-sm border-t border-x border-white/10 rounded-t-xl sm:rounded-t-2xl shadow-2xl p-2 md:p-4 pb-0 overflow-hidden transform origin-bottom transition-transform duration-1000 ease-out rotate-x-6 group-hover:rotate-x-6 hidden sm:block sm:rotate-x-12 sm:group-hover:rotate-x-6">
          <div className="flex items-center gap-4 mb-4 px-3 py-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="text-[8px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Gimmir Secure Environment</div>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 opacity-50 px-2 sm:px-4 pb-8 sm:pb-12">
            <div className="col-span-2 h-20 sm:h-24 rounded-lg bg-white/5 border border-white/5 p-2 sm:p-3 flex flex-col gap-2">
              <div className="w-1/3 h-1.5 sm:h-2 bg-white/20 rounded-full"></div>
              <div className="w-1/2 h-1.5 sm:h-2 bg-white/10 rounded-full"></div>
              <div className="mt-auto flex gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-[#0062d1]/20 border border-[#0062d1]/30 flex items-center justify-center"><ShieldCheck size={12} className="text-[#0062d1] sm:w-[14px] sm:h-[14px]" /></div>
                <div className="text-[8px] sm:text-[10px] text-slate-400 flex items-center">IP Protection Active</div>
              </div>
            </div>
            <div className="col-span-1 h-20 sm:h-24 rounded-lg bg-white/5 border border-white/5 p-2 sm:p-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0062d1]/20 to-transparent"></div>
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 text-[#0062d1] font-mono text-lg sm:text-xl">98%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
