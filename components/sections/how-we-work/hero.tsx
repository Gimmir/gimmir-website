import React from 'react';
import { ArrowRight, Search, Terminal, ShieldCheck, Rocket, FileText } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative z-10 pt-32 pb-16 sm:pb-24 px-6 border-b border-white/5 overflow-hidden bg-[#050A14]">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#0062d1] opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-lg shadow-black/20 animate-fade-in-up opacity-0">
          <FileText size={14} className="text-[#0062d1]" />
          <span className="text-xs font-mono text-slate-300 tracking-wider uppercase">The Transparency Protocol</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up opacity-0 drop-shadow-2xl" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          Transparency is Our <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] via-cyan-400 to-[#0062d1] bg-[length:200%_auto] animate-gradient">
            Default Protocol.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          We built our process to eliminate the communication gaps, technical debt, and vendor risks common in traditional outsourcing models.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-full transition-all shadow-[0_0_30px_-5px_rgba(0,98,209,0.4)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
            View Service Level Agreements
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Process Visualization (Flowchart) */}
        <div className="relative max-w-5xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          {/* Desktop Connecting Line (Horizontal) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0"></div>
          
          {/* Mobile Connecting Line (Vertical) */}
          <div className="md:hidden absolute top-0 bottom-20 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            <ProcessStep 
              number="01" 
              title="Discovery" 
              icon={Search} 
              color="blue"
              desc="Requirements & Architecture"
            />
            <ProcessStep 
              number="02" 
              title="Coding" 
              icon={Terminal} 
              color="cyan"
              desc="Sprints & CI/CD"
            />
            <ProcessStep 
              number="03" 
              title="Quality Gateway" 
              icon={ShieldCheck} 
              color="emerald"
              desc="Audit & Security Checks"
            />
            <ProcessStep 
              number="04" 
              title="Deployment" 
              icon={Rocket} 
              color="purple"
              desc="Launch & Handover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ number, title, icon: Icon, color, desc }: { number: string, title: string, icon: any, color: 'blue' | 'cyan' | 'emerald' | 'purple', desc: string }) {
  const colors = {
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-blue-900/20 group-hover:border-blue-500/50",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-cyan-900/20 group-hover:border-cyan-500/50",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 shadow-emerald-900/20 group-hover:border-emerald-500/50",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20 shadow-purple-900/20 group-hover:border-purple-500/50",
  };

  return (
    <div className="group flex flex-col items-center text-center">
      <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center border mb-6 transition-all duration-300 ${colors[color]} backdrop-blur-sm z-10 shadow-lg bg-[#050A14]/80`}>
        <Icon size={32} />
        <div className="absolute -top-3 -right-3 bg-[#050A14] border border-white/10 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-sm z-20">
          {number}
        </div>
      </div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">{desc}</p>
    </div>
  );
}
