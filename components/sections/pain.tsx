'use client';

import { UserX, Layers, MessageSquareWarning, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/section-header';

export function PainSection() {
  return (
    <section className="relative z-30 py-16 sm:py-24 px-4 sm:px-6 border-t border-white/5">
      <div className="absolute inset-0 bg-[#060910]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#0062d1] opacity-[0.08] blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader 
          title={<span>The "Cheap" Option <span className="whitespace-nowrap">is <span className="relative inline-block ml-2">Expensive<svg className="absolute w-full h-2 sm:h-3 -bottom-1 left-0 text-red-500" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" className="opacity-80" /></svg></span></span></span>}
          subtitle="We fix the architectural debt you didn't know you were accumulating."
          badge="Market Analysis"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {/* Card 1 - Bait & Switch */}
          <div className="group relative flex flex-col h-full bg-[#0B0F19]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-[#0062d1]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10" data-card>
            <div className="p-6 sm:p-8 sm:pb-6 relative flex-grow">
               <div className="absolute top-4 right-4 text-slate-700 font-bold text-5xl sm:text-6xl opacity-10 group-hover:opacity-20 transition-opacity select-none">01</div>
               <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 border border-red-500/20 group-hover:bg-red-500/20 transition-colors"><UserX className="text-red-400" size={20} /></div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-2">The "Bait & Switch"</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Agencies sell you Seniors on the call, but hand off code to Juniors learning on your dime.</p>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-0 shrink-0"></div>
            <div className="px-6 py-5 sm:px-8 sm:py-6 bg-white/[0.02] group-hover:bg-[#0062d1]/[0.05] transition-colors shrink-0">
               <div className="flex items-start gap-3"><CheckCircle2 className="text-[#0062d1] mt-0.5 shrink-0" size={18} /><div><h4 className="text-white font-medium text-sm mb-1">Direct Access Guarantee</h4><p className="text-slate-500 text-xs">You work directly with the engineers you interviewed.</p></div></div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group relative flex flex-col h-full bg-[#0B0F19]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-[#0062d1]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10" data-card>
            <div className="p-6 sm:p-8 sm:pb-6 relative flex-grow">
               <div className="absolute top-4 right-4 text-slate-700 font-bold text-5xl sm:text-6xl opacity-10 group-hover:opacity-20 transition-opacity select-none">02</div>
               <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors"><Layers className="text-orange-400" size={20} /></div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-2">The "Facade" MVP</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Looks good on a pitch deck, but crashes at 100 concurrent users due to spaghetti code.</p>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-0 shrink-0"></div>
            <div className="px-6 py-5 sm:px-8 sm:py-6 bg-white/[0.02] group-hover:bg-[#0062d1]/[0.05] transition-colors shrink-0">
               <div className="flex items-start gap-3"><CheckCircle2 className="text-[#0062d1] mt-0.5 shrink-0" size={18} /><div><h4 className="text-white font-medium text-sm mb-1">Scalable Architecture</h4><p className="text-slate-500 text-xs">We build systems ready for Series A due diligence.</p></div></div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group relative flex flex-col h-full bg-[#0B0F19]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-[#0062d1]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10" data-card>
            <div className="p-6 sm:p-8 sm:pb-6 relative flex-grow">
               <div className="absolute top-4 right-4 text-slate-700 font-bold text-5xl sm:text-6xl opacity-10 group-hover:opacity-20 transition-opacity select-none">03</div>
               <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 border border-yellow-500/20 group-hover:bg-yellow-500/20 transition-colors"><MessageSquareWarning className="text-yellow-400" size={20} /></div>
               <h3 className="text-lg sm:text-xl font-bold text-white mb-2">"Yes-Man" Culture</h3>
               <p className="text-slate-400 text-sm leading-relaxed">Agencies that agree to everything just to bill hours, leading to bloated, useless features.</p>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-0 shrink-0"></div>
            <div className="px-6 py-5 sm:px-8 sm:py-6 bg-white/[0.02] group-hover:bg-[#0062d1]/[0.05] transition-colors shrink-0">
               <div className="flex items-start gap-3"><CheckCircle2 className="text-[#0062d1] mt-0.5 shrink-0" size={18} /><div><h4 className="text-white font-medium text-sm mb-1">Strategic Pushback</h4><p className="text-slate-500 text-xs">We challenge bad ideas to save your budget.</p></div></div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-32 sm:-bottom-48 left-1/2 -translate-x-1/2 h-32 sm:h-48 w-px bg-gradient-to-b from-[#333] via-[#0062d1] to-[#0062d1] z-30"></div>
      </div>
    </section>
  );
}
