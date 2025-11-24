import { SectionHeader } from '@/components/ui/section-header';
import { FileText, Calculator, Download, ChevronRightSquare } from 'lucide-react';

export default function LeadMagnetSection() {
  return (
    <section className="relative z-20 py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] to-[#020408]"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050810] to-transparent pointer-events-none"></div>
      {/* Connecting element between sections */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader
          title="Insights for Tech Leaders."
          subtitle="Expert resources to help you navigate technical leadership and scaling challenges."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative bg-[#0B0F19] border border-white/10 hover:border-[#0062d1]/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0062d1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[#0062d1] group-hover:scale-110 transition-transform duration-300">
                  <FileText size={28} />
                </div>
                <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                  Updated 2025
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#0062d1] transition-colors">
                Technical Due Diligence Checklist
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                A comprehensive 50-point checklist to prepare your architecture, code, and documentation
                for Series A/B funding rounds.
              </p>
              <div className="mt-auto border-t border-white/10 pt-6 flex justify-between items-center">
                <span className="text-xs font-mono text-slate-500">PDF_GUIDE_V2.4</span>
                <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#0062d1] transition-colors">
                  Download Free <Download size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="group relative bg-[#0B0F19] border border-white/10 hover:border-purple-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  <Calculator size={28} />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-wider">
                  Interactive Tool
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Hidden Costs Calculator
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                Don&apos;t get burned by low hourly rates. Calculate the <em>real</em> cost of technical
                debt, communication lag, and re-work.
              </p>
              <div className="mt-auto border-t border-white/10 pt-6 flex justify-between items-center">
                <span className="text-xs font-mono text-slate-500">WEB_TOOL_V1.0</span>
                <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                  Calculate ROI <ChevronRightSquare size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
