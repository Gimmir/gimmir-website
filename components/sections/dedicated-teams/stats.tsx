import React from 'react';

export function StatsSection() {
  return (
    <section className="py-12 sm:py-24 px-6 border-y border-white/5 bg-[#050810]">
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="text-center px-4 py-4">
             <div className="text-4xl md:text-5xl font-bold text-white mb-2">94%</div>
             <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Retention Rate</div>
             <div className="text-[10px] text-slate-600 mt-2 max-w-[200px] mx-auto">Середній показник утримання розробника на проєкті</div>
          </div>
          <div className="text-center px-4 py-4">
             <div className="text-4xl md:text-5xl font-bold text-white mb-2">2.8 <span className="text-2xl text-slate-500">Yrs</span></div>
             <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Avg Tenure</div>
             <div className="text-[10px] text-slate-600 mt-2 max-w-[200px] mx-auto">Скільки в середньому люди працюють в Gimmir</div>
          </div>
          <div className="text-center px-4 py-4">
             <div className="text-4xl md:text-5xl font-bold text-white mb-2">&lt; 10 <span className="text-2xl text-slate-500">Days</span></div>
             <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Replacement SLA</div>
             <div className="text-[10px] text-slate-600 mt-2 max-w-[200px] mx-auto">Гарантія безкоштовної заміни</div>
          </div>
       </div>
    </section>
  );
}
