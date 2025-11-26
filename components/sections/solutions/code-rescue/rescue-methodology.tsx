import React from 'react';
import { ShieldCheck, Layers, TestTube2, LifeBuoy } from 'lucide-react';

export function RescueMethodologySection() {
  const phases = [
    {
      id: '01',
      title: "Stabilization Protocol",
      desc: "Fixing critical security threats and implementing error logging (Sentry/Datadog). Stopping the bleeding immediately.",
      icon: ShieldCheck,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20"
    },
    {
      id: '02',
      title: "The Strangler Fig Pattern",
      desc: "Incrementally replacing old, 'toxic' components with modern microservices. Decoupling without downtime.",
      icon: Layers,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    {
      id: '03',
      title: "Automated Quality Gates",
      desc: "Installing CI/CD and E2E testing to prevent regression. Ensuring that fixed bugs stay fixed.",
      icon: TestTube2,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#080C14] border-b border-white/5 relative overflow-hidden">
       <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                <LifeBuoy size={14} className="text-emerald-400" />
                <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">Recovery Strategy</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Stabilize. Decouple. <span className="text-emerald-400">Migrate.</span>
             </h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
               We fix the plane while flying it — without stopping your business.
             </p>
          </div>

          <div className="relative grid gap-12">
             {/* Vertical Connecting Line */}
             <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2 z-0"></div>

             {phases.map((phase, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                   
                   {/* Content Side */}
                   <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${i % 2 !== 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                      <div className={`bg-[#0B0F19] border border-white/10 p-6 sm:p-8 rounded-2xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg relative group`}>
                         <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl pointer-events-none"></div>
                         
                         <div className="flex items-center justify-between mb-4 relative z-10">
                            <div className={`w-10 h-10 rounded-lg ${phase.bg} ${phase.border} border flex items-center justify-center text-white`}>
                               <phase.icon size={20} className={phase.color} />
                            </div>
                            <span className="text-xs font-mono text-slate-500 border border-white/5 px-2 py-1 rounded bg-white/5">PHASE {phase.id}</span>
                         </div>

                         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{phase.title}</h3>
                         <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
                      </div>
                   </div>

                   {/* Center Marker */}
                   <div className="absolute left-0 md:left-1/2 w-14 h-14 flex items-center justify-center md:-translate-x-1/2 z-10 mt-0 md:mt-0">
                      <div className={`w-4 h-4 rounded-full ${phase.bg} border-2 ${phase.border} ring-4 ring-[#080C14]`}></div>
                   </div>

                   {/* Empty Side for Balance */}
                   <div className="w-full md:w-1/2 hidden md:block"></div>
                </div>
             ))}
          </div>

       </div>
    </section>
  );
}
