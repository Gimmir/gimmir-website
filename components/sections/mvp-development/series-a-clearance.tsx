'use client';

import React from 'react';
import { FileCode, Shield, BarChart3, FileText } from 'lucide-react';

export function SeriesAClearanceSection() {
  const features = [
    {
      icon: FileCode,
      title: "Architecture Diagrams",
      desc: "Visual maps of how data flows. Essential for your whitepaper."
    },
    {
      icon: Shield,
      title: "Security Audit",
      desc: "Basic OWASP penetration testing report for early B2B clients."
    },
    {
      icon: BarChart3,
      title: "Scalability Report",
      desc: "Load tests proving the system handles spikes (k6 / JMeter)."
    },
    {
      icon: FileText,
      title: "API Documentation",
      desc: "Auto-generated Swagger/OpenAPI docs for integrations."
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5">
       <div className="max-w-7xl mx-auto">
          <div className="bg-[#0B0F19] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#0062d1] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase mb-6">
                      Investment Grade
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for Due Diligence.</h2>
                   <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                      Investors don&apos;t just look at growth; they audit your tech. We deliver a "Series A Clearance Pack" with every MVP.
                   </p>
                   <button className="text-[#0062d1] font-bold hover:text-white transition-colors flex items-center gap-2">
                      Download Sample Report &rarr;
                   </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {features.map((item, i) => (
                      <div key={i} className="bg-[#050810] border border-white/5 p-5 rounded-xl hover:border-white/10 transition-colors">
                         <item.icon className="text-slate-300 mb-3" size={20} />
                         <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                         <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
