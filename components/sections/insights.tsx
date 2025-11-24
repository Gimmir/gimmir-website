import { ArrowRight } from 'lucide-react';

export default function InsightsSection() {
  return (
    <section className="relative z-20 py-24 px-6 border-t border-white/5 bg-[#050A14] overflow-hidden">
      {/* Subtle Tech Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#0062d1]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Engineering <span className="text-slate-500">Insights</span>
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors px-5 py-2.5 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 shrink-0">
            View All Insights
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Content - Clean Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group relative bg-[#0B0F19] border border-white/10 hover:border-white/20 rounded-xl p-px overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 flex flex-col h-full">
            <div className="bg-[#0B0F19] rounded-xl p-6 h-full flex flex-col relative z-10">
              <div className="flex justify-between items-start mb-5">
                <span className="text-[10px] font-mono text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/5">
                  STRATEGY
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#0062d1] transition-colors leading-snug">
                The Hidden Cost of Low Rates
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 flex-grow font-light">
                Why paying $20/hr often results in 3x total cost of ownership due to "communication lag"
                and refactoring loops.
              </p>

              <div className="mt-auto pt-5 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                  <span>MAR 12, 2025</span>
                  <span className="text-slate-700 opacity-50">|</span>
                  <span>5 MIN READ</span>
                </div>
                <button className="text-[10px] font-bold text-white group-hover:text-[#0062d1] transition-colors flex items-center gap-1.5 uppercase tracking-wider">
                  Read More{' '}
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#0B0F19] border border-white/10 hover:border-white/20 rounded-xl p-px overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 flex flex-col h-full">
            <div className="bg-[#0B0F19] rounded-xl p-6 h-full flex flex-col relative z-10">
              <div className="flex justify-between items-start mb-5">
                <span className="text-[10px] font-mono text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/5">
                  AUDIT
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#0062d1] transition-colors leading-snug">
                Passing the VC Tech Audit
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 flex-grow font-light">
                Investors are now auditing for "Spaghetti Code" and IP ownership. Here is our 10-point due
                diligence checklist.
              </p>

              <div className="mt-auto pt-5 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                  <span>FEB 28, 2025</span>
                  <span className="text-slate-700 opacity-50">|</span>
                  <span>8 MIN READ</span>
                </div>
                <button className="text-[10px] font-bold text-white group-hover:text-[#0062d1] transition-colors flex items-center gap-1.5 uppercase tracking-wider">
                  Read More{' '}
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-[#0B0F19] border border-white/10 hover:border-white/20 rounded-xl p-px overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 flex flex-col h-full sm:col-span-2 lg:col-span-1">
            <div className="bg-[#0B0F19] rounded-xl p-6 h-full flex flex-col relative z-10">
              <div className="flex justify-between items-start mb-5">
                <span className="text-[10px] font-mono text-slate-500 border border-white/10 px-2 py-1 rounded bg-white/5">
                  GLOBAL
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#0062d1] transition-colors leading-snug">
                Nearshore vs. Offshore
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6 flex-grow font-light">
                How pivoting to Mexico & Spain helps US startups solve the GDPR puzzle and eliminate the
                12-hour feedback loop.
              </p>

              <div className="mt-auto pt-5 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                  <span>JAN 15, 2025</span>
                  <span className="text-slate-700 opacity-50">|</span>
                  <span>4 MIN READ</span>
                </div>
                <button className="text-[10px] font-bold text-white group-hover:text-[#0062d1] transition-colors flex items-center gap-1.5 uppercase tracking-wider">
                  Read More{' '}
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
