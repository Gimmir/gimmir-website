'use client';

import React from 'react';
import { 
  Search, 
  PenTool, 
  Terminal, 
  UploadCloud, 
  Users, 
  Clock,
  ArrowUpRight,
  Check,
  Database,
  Code2
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function RoadmapSection() {
  // Discovery Visual
  const DiscoveryVisual = () => (
    <div className="absolute right-0 bottom-0 w-40 h-32 opacity-10 group-hover:opacity-30 transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0">
      <div className="border-l border-t border-blue-400/50 w-full h-full rounded-tl-2xl p-3 bg-blue-500/5 backdrop-blur-sm">
        <div className="flex gap-2 mb-3">
           <div className="w-2 h-2 rounded-full bg-blue-400/50"></div>
           <div className="w-2 h-2 rounded-full bg-blue-400/50"></div>
        </div>
        <div className="space-y-2">
           <div className="w-full h-8 bg-blue-400/20 rounded border border-dashed border-blue-400/30"></div>
           <div className="flex gap-2">
              <div className="w-1/3 h-16 bg-blue-400/20 rounded border border-dashed border-blue-400/30"></div>
              <div className="w-2/3 h-16 bg-blue-400/10 rounded border border-dashed border-blue-400/20"></div>
           </div>
        </div>
      </div>
    </div>
  );

  // Prototype Visual
  const PrototypeVisual = () => (
    <div className="absolute right-0 bottom-0 w-40 h-32 opacity-10 group-hover:opacity-40 transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0">
       <svg className="absolute -top-3 -left-3 w-6 h-6 text-purple-400 fill-current drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10 animate-pulse" viewBox="0 0 24 24"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path></svg>
       
       <div className="border-l border-t border-purple-500/50 w-full h-full rounded-tl-2xl p-3 bg-purple-500/5 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-2 right-2 px-2 py-0.5 bg-purple-500/20 rounded text-[8px] font-mono text-purple-300 border border-purple-500/30">Figma</div>
          <div className="mt-4 space-y-2">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-400/20"></div>
                <div className="w-20 h-2 bg-purple-400/20 rounded"></div>
             </div>
             <div className="w-full h-2 bg-purple-400/10 rounded"></div>
             <button className="w-full h-6 bg-purple-500/30 rounded border border-purple-500/30 text-[8px] text-purple-200 flex items-center justify-center">Click Me</button>
          </div>
       </div>
    </div>
  );

  // Dev Visual
  const DevVisual = () => (
    <div className="absolute right-0 bottom-0 w-48 h-32 opacity-20 group-hover:opacity-60 transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0">
       <div className="border-l border-t border-emerald-500/50 w-full h-full rounded-tl-2xl p-3 bg-[#050810] font-mono text-[8px] text-emerald-400/80 leading-relaxed overflow-hidden">
          <div className="flex gap-1.5 mb-2 opacity-50">
             <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          </div>
          <div><span className="text-purple-400">const</span> <span className="text-blue-400">MVP</span> = <span className="text-yellow-300">new</span> Asset();</div>
          <div>MVP.<span className="text-blue-300">init</span>(<span className="text-orange-300">"Scale"</span>);</div>
          <div className="mt-1 text-slate-500">// Deploying core...</div>
          <div className="mt-1 flex gap-1">
             <span className="text-emerald-500">➜</span> 
             <span className="animate-pulse">_</span>
          </div>
       </div>
    </div>
  );

  // Launch Visual
  const LaunchVisual = () => (
    <div className="absolute right-4 bottom-4 flex gap-3 opacity-20 group-hover:opacity-100 transition-all duration-500">
       <div className="px-3 py-1.5 rounded-md bg-orange-500/10 border border-orange-500/30 text-[10px] font-mono text-orange-400 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
          SERVER: ONLINE
       </div>
       <div className="px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/30 text-[10px] font-mono text-blue-400 flex items-center gap-2">
          <Check size={10} />
          APP STORE: APPROVED
       </div>
    </div>
  );

  // Handover Visual
  const HandoverVisual = () => (
    <div className="absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-l from-slate-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-end pr-8">
       <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]">
             <Users size={18} />
          </div>
          <span className="text-[9px] font-mono text-slate-400 bg-black/50 px-2 py-0.5 rounded border border-white/10">ACCESS_GRANTED</span>
       </div>
    </div>
  );

  const roadmapSteps = [
    {
      id: "01",
      phase: "Discovery",
      time: "Week 1-2",
      desc: "Blueprinting & Wireframes. We challenge assumptions.",
      icon: Search,
      color: "text-blue-400",
      bg: "from-blue-500/5 to-blue-500/0",
      border: "group-hover:border-blue-500/50",
      colSpan: "md:col-span-4",
      Visual: DiscoveryVisual
    },
    {
      id: "02",
      phase: "Visual Prototype",
      time: "Week 3",
      desc: "High-fidelity UI. Clickable demo for early pitches.",
      icon: PenTool,
      color: "text-purple-400",
      bg: "from-purple-500/5 to-purple-500/0",
      border: "group-hover:border-purple-500/50",
      colSpan: "md:col-span-4",
      Visual: PrototypeVisual
    },
    {
      id: "03",
      phase: "Core Development",
      time: "Week 4-10",
      desc: "Sprints. You see a demo every Friday.",
      icon: Terminal,
      color: "text-emerald-400",
      bg: "from-emerald-500/5 to-emerald-500/0",
      border: "group-hover:border-emerald-500/50",
      colSpan: "md:col-span-4",
      Visual: DevVisual
    },
    {
      id: "04",
      phase: "Launch",
      time: "Week 11-12",
      desc: "Store submission & Production deploy. We handle the App Store rejection risks.",
      icon: UploadCloud,
      color: "text-orange-400",
      bg: "from-orange-500/5 to-orange-500/0",
      border: "group-hover:border-orange-500/50",
      colSpan: "md:col-span-6",
      Visual: LaunchVisual
    },
    {
      id: "05",
      phase: "The Handover",
      time: "Optional",
      desc: "We help interview and hire your internal CTO/Team to take over the codebase.",
      icon: Users,
      color: "text-slate-400",
      bg: "from-slate-500/5 to-slate-500/0",
      border: "group-hover:border-slate-500/50",
      colSpan: "md:col-span-6",
      Visual: HandoverVisual
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050810] border-b border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="From Idea to Handover"
          subtitle="A transparent timeline. No hidden delays."
          badge="The Roadmap"
          badgeIcon={Clock}
        />

        {/* Background Connector Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 relative z-10">
          {roadmapSteps.map((step, index) => {
            const VisualComponent = step.Visual;
            return (
             <div key={index} className={`group relative bg-[#0B0F19] border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl ${step.colSpan} ${step.border} flex flex-col h-full min-h-[280px]`}>
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex justify-between items-start mb-6">
                    <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${step.color} border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                       <step.icon size={20} />
                    </div>
                    <span className="text-4xl sm:text-5xl font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">{step.id}</span>
                </div>

                <div className="relative z-10 mt-auto">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 border border-white/5 bg-white/5 px-2 py-1 rounded w-fit">{step.time}</div>
                    <h3 className={`text-xl font-bold text-white mb-2 group-hover:${step.color} transition-colors`}>{step.phase}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-[85%]">{step.desc}</p>
                </div>
                
                {/* Rich Visual */}
                <VisualComponent />
                
                {/* Corner Arrow */}
                <div className={`absolute top-6 right-6 text-slate-600 group-hover:${step.color} opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1`}>
                   <ArrowUpRight size={20} />
                </div>
             </div>
          )})}
        </div>
      </div>
    </section>
  );
}
