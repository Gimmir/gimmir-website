'use client';

import React from 'react';

export function QualitySection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-y border-white/5 bg-[#050810]">
       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="text-center px-4 py-4">
             <div className="text-3xl font-bold text-white mb-2">&gt; 80%</div>
             <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Unit Test Coverage</div>
          </div>
          <div className="text-center px-4 py-4">
             <div className="text-3xl font-bold text-white mb-2">E2E</div>
             <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Cypress / Detox</div>
          </div>
          <div className="text-center px-4 py-4">
             <div className="text-3xl font-bold text-white mb-2">Static</div>
             <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">SonarQube Analysis</div>
          </div>
          <div className="text-center px-4 py-4">
             <div className="text-3xl font-bold text-white mb-2">Auto</div>
             <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">CI/CD Pipelines</div>
          </div>
       </div>
    </section>
  );
}
