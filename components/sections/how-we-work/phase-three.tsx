import React from 'react';
import { Cloud, FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function PhaseThreeSection() {
  const deliverables = [
    {
      title: "Infrastructure as Code (IaC)",
      desc: "Delivery of Terraform/CloudFormation scripts.",
      icon: Cloud,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      title: "Living Documentation",
      desc: "Auto-generated API specs (Swagger/OpenAPI) and comprehensive user guides.",
      icon: FileText,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      title: "Warranty & Training",
      desc: "A 30-day bug fix guarantee post-launch, plus training for your internal team.",
      icon: ShieldCheck,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0062d1]/5 blur-[120px] rounded-full pointer-events-none"></div>

       <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phase III: The Finish</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                The Final Deliverable: <br />
                <span className="text-purple-400">Full Ownership.</span>
             </h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
               Detailed checklist of deliverables that reverse the "Code Hostage" risk.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
             {deliverables.map((item, i) => (
                <div key={i} className={`group bg-[#0B0F19] border border-white/10 hover:border-white/20 p-8 rounded-2xl relative transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/20 flex flex-col h-full ${item.border} hover:border-opacity-50`}>
                   <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl pointer-events-none"></div>
                   
                   <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className={`w-14 h-14 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110`}>
                         <item.icon size={28} className={item.color} />
                      </div>
                      <div className="h-px flex-grow bg-white/10 ml-4 mr-2"></div>
                      <CheckCircle2 size={18} className="text-slate-600 group-hover:text-emerald-500 transition-colors" />
                   </div>

                   <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-white transition-colors">{item.title}</h3>
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
