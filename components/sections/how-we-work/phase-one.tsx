import React from 'react';
import { FileSignature, Map, Plug } from 'lucide-react';

export function PhaseOneSection() {
  const steps = [
    {
      title: "Legal & IP Protocol",
      desc: "Signed NDA and immediate IP Transfer contract initiated.",
      icon: FileSignature,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Discovery & Blueprinting",
      desc: "Detailed technical workshop to create the Architecture Blueprint (preventing technical debt before coding begins).",
      icon: Map,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      title: "Tooling Integration",
      desc: "Direct integration of the engineer into your existing toolchain (Slack, Jira).",
      icon: Plug,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#0062d1]/5 blur-[100px] rounded-full pointer-events-none"></div>

       <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0062d1]"></span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phase I: The Start</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                The Onboarding Protocol: <br />
                <span className="text-[#0062d1]">Secure Alignment.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
             {steps.map((step, i) => (
                <div key={i} className="group bg-[#0B0F19] border border-white/10 hover:border-white/20 p-8 rounded-2xl relative transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/20 flex flex-col h-full">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl pointer-events-none"></div>
                   
                   <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center text-white shadow-lg`}>
                         <step.icon size={24} className={step.color} />
                      </div>
                      <span className="text-4xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors">{`0${i + 1}`}</span>
                   </div>

                   <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-[#0062d1] transition-colors">{step.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed relative z-10 flex-grow">
                      {step.desc}
                   </p>

                   <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-transparent via-${step.color.split('-')[1]}-500 to-transparent group-hover:w-full transition-all duration-700 opacity-50`}></div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
