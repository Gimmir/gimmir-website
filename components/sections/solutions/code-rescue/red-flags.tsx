import React from 'react';
import { GitPullRequest, TrendingDown, UserX, FileWarning, DollarSign, AlertTriangle } from 'lucide-react';

export function RedFlagsSection() {
  const symptoms = [
    {
      title: "Feature Paralysis",
      desc: "One minor change breaks the entire system ('One change breaks everything').",
      icon: GitPullRequest,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20"
    },
    {
      title: "Performance Cliff",
      desc: "The app works for 10 users but crashes at 100.",
      icon: TrendingDown,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      title: "Developer Turnover",
      desc: "Good engineers refuse to work with the existing 'spaghetti' code.",
      icon: UserX,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20"
    },
    {
      title: "Hidden Debt",
      desc: "Adding a simple feature takes months instead of days.",
      icon: FileWarning,
      color: "text-rose-400",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      title: "Investment Risk",
      desc: "VCs refused funding or flagged the tech stack during due diligence.",
      icon: DollarSign,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050810] border-b border-white/5 relative overflow-hidden">
       <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-500/5 blur-[100px] rounded-full pointer-events-none"></div>

       <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <AlertTriangle size={14} className="text-red-400" />
                <span className="text-xs font-mono text-red-300 uppercase tracking-wider">The Diagnosis</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                The 7 Signs Your <br />
                <span className="text-red-500">Codebase Is in Crisis.</span>
             </h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                These symptoms indicate your system is in a "critical state" and may not survive scaling.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
             {symptoms.map((symptom, i) => (
                <div key={i} className={`group bg-[#0B0F19] border border-white/10 hover:border-opacity-50 ${symptom.border.replace('border-opacity-20', '')} p-8 rounded-2xl relative transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/20 flex flex-col h-full`}>
                   <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl pointer-events-none"></div>
                   
                   <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className={`w-12 h-12 rounded-xl ${symptom.bg} border ${symptom.border} flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110`}>
                         <symptom.icon size={24} className={symptom.color} />
                      </div>
                   </div>

                   <h3 className={`text-xl font-bold text-white mb-3 relative z-10 group-hover:${symptom.color} transition-colors`}>{symptom.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed relative z-10 flex-grow">
                      {symptom.desc}
                   </p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
