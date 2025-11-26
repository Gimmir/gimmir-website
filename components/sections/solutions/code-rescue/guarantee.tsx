import React from 'react';
import { Activity, FileCode, Server, Database, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function GuaranteeSection() {
  const deliverables = [
    {
      title: "Final Code Health Score",
      desc: "A comprehensive report detailing code quality, complexity, and maintainability metrics.",
      icon: Activity,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Clean IP Transfer Certificate",
      desc: "Legal confirmation that the codebase is free of third-party rights and fully owned by you.",
      icon: FileCode,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Load Testing Report",
      desc: "Proof of scalability with stress test results demonstrating system stability under load.",
      icon: Server,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "Infrastructure as Code (IaC)",
      desc: "Terraform scripts to recreate your entire infrastructure in one click. No manual setup.",
      icon: Database, // Or another suitable icon like Cloud or Layers
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <ShieldCheck size={14} className="text-[#0062d1]" />
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">The Guarantee</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The Due Diligence <br />
            <span className="text-[#0062d1]">Clearance Pack.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We deliver the documentation required by investors and acquirers. VC-Ready Code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, i) => (
            <div key={i} className={`group bg-[#0B0F19] border border-white/10 hover:border-opacity-50 ${item.border.replace('border-opacity-20', '')} p-6 rounded-2xl relative transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/20 flex flex-col h-full`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-6 relative z-10">
                 <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110`}>
                    <item.icon size={24} className={item.color} />
                 </div>
                 <CheckCircle2 size={20} className="text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className={`text-lg font-bold text-white mb-3 relative z-10 group-hover:${item.color} transition-colors`}>{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10 flex-grow">
                 {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
