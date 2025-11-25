'use client';

import { useRef } from 'react';
import {
  Dumbbell,
  RocketIcon,
  HeartPulse,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Trophy,
} from 'lucide-react';

export function CaseStudiesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () =>
    scrollContainerRef.current?.scrollBy({ left: -420, behavior: 'smooth' });
  const scrollRight = () =>
    scrollContainerRef.current?.scrollBy({ left: 420, behavior: 'smooth' });

  return (
    <section className="relative z-20 py-16 sm:py-24 px-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-[#0b1221] to-[#020408]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 flex flex-col md:flex-row justify-between items-end w-full mb-6 md:mb-12">
        <div className="text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6">
            <Trophy size={12} className="text-[#0062d1]" />
            <span>SUCCESS_STORIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Proven Track <span className="text-[#0062d1]">Record.</span>
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Real results for companies where failure was not an option.
          </p>
          <div className="md:hidden flex items-center gap-2 text-slate-400 text-sm mt-6 animate-pulse">
            <ArrowRight size={16} />
            <span>Swipe to explore</span>
          </div>
        </div>
        <div className="hidden md:flex gap-4 mt-6 md:mt-0">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-105 active:scale-95"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative w-full z-10">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto py-10 pb-12 gap-6 snap-x snap-mandatory no-scrollbar w-full px-6 xl:pl-[calc(50%_-_40rem_+_1.5rem)] xl:scroll-pl-[calc(50%_-_40rem_+_1.5rem)]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Case 1: Gym Network */}
          <div className="min-w-[85vw] sm:min-w-[320px] md:min-w-[400px] snap-center md:snap-start group relative bg-[#0B0F19]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300 flex flex-col shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
            <div className="flex justify-between items-start mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Fitness / Franchise
              </div>
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-emerald-500/20 transition-colors">
                <Dumbbell size={18} className="text-slate-400 group-hover:text-emerald-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
              Gym Network Scaling: <br />
              <span className="text-emerald-400">300% Franchise Growth</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Built the centralized IT infrastructure enabling a gym brand to scale into a seamless,
              automated franchise network.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5">
              <div className="flex justify-between items-center text-xs text-slate-400 font-mono uppercase mb-2">
                <span>Locations Opened</span>
                <span className="text-emerald-400 font-bold">15 → 150</span>
              </div>
              <div className="flex gap-1 h-1.5">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-emerald-500 rounded-full opacity-80"
                    style={{ opacity: i < 8 ? 1 : 0.3 }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Case 2: SaaS Startup */}
          <div className="min-w-[85vw] sm:min-w-[320px] md:min-w-[400px] snap-center md:snap-start group relative bg-[#0B0F19]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-indigo-500/40 transition-all duration-300 flex flex-col shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
            <div className="flex justify-between items-start mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                SaaS / Startup
              </div>
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-indigo-500/20 transition-colors">
                <RocketIcon size={18} className="text-slate-400 group-hover:text-indigo-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
              MVP to Series A: <br />
              <span className="text-indigo-400">Zero Tech Debt</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Built a scalable platform from scratch, passing VC technical due diligence with flying
              colors.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white font-bold text-xs">
                A
              </div>
              <div className="text-xs text-slate-400">
                <span className="block text-white font-bold">Series A Secured</span>
                $12M Funding Round
              </div>
            </div>
          </div>

          {/* Case 3: Healthcare */}
          <div className="min-w-[85vw] sm:min-w-[320px] md:min-w-[400px] snap-center md:snap-start group relative bg-[#0B0F19]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-rose-500/40 transition-all duration-300 flex flex-col shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
            <div className="flex justify-between items-start mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider">
                Healthcare
              </div>
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-rose-500/20 transition-colors">
                <HeartPulse size={18} className="text-slate-400 group-hover:text-rose-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
              Telehealth Platform: <br />
              <span className="text-rose-400">100% HIPAA Compliant</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              End-to-end encrypted video consultations for the US market. Security audit passed on first
              attempt.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5 flex gap-2">
              <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 border border-white/5">
                HIPAA
              </span>
              <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 border border-white/5">
                GDPR
              </span>
              <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 border border-white/5">
                SOC2
              </span>
            </div>
          </div>

          {/* Case 4: E-Commerce */}
          <div className="min-w-[85vw] sm:min-w-[320px] md:min-w-[400px] snap-center md:snap-start group relative bg-[#0B0F19]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-orange-500/40 transition-all duration-300 flex flex-col shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
            <div className="flex justify-between items-start mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider">
                E-Commerce
              </div>
              <div className="p-2 bg-white/5 rounded-full group-hover:bg-orange-500/20 transition-colors">
                <ShoppingCart size={18} className="text-slate-400 group-hover:text-orange-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
              High-Load Marketplace: <br />
              <span className="text-orange-400">2M+ Daily Users</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Architecture optimization for Black Friday loads. Reduced infrastructure costs by 40% while
              doubling capacity.
            </p>
            <div className="mt-auto pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] text-slate-400 font-mono uppercase">Traffic</div>
                <div className="text-white font-bold text-sm">2.4M Daily</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-mono uppercase">Load Time</div>
                <div className="text-white font-bold text-sm">&lt; 0.8s</div>
              </div>
            </div>
          </div>

          <div className="min-w-[24px]"></div>
        </div>
      </div>

      <div className="mt-12 flex justify-center w-full relative z-10">
        <button className="px-8 py-4 bg-transparent border border-slate-600 hover:border-white hover:bg-white/5 text-white font-medium rounded-full transition-all flex items-center gap-2 group">
          View All Case Studies
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
