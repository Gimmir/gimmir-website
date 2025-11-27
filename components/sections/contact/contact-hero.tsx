'use client';

import { ArrowDown, Calendar, Globe, MessageSquare, Radio } from 'lucide-react';
import React from 'react';

export function ContactHeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('inquiry-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 pt-32 pb-20 sm:pt-40 sm:pb-24 px-6 border-b border-white/5 overflow-hidden bg-[#050A14]">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0062d1]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      {/* Grid Pattern - KEPT ONLY HERE */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge: Protocol Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[10px] sm:text-xs font-mono text-slate-300 tracking-wider uppercase">
              Direct Connection Protocol: Active
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1] drop-shadow-2xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Connect With Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] via-cyan-400 to-[#0062d1] bg-[length:200%_auto] animate-gradient">
              Global Engineering Team.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 font-light leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            We prioritize direct communication to solve problems faster. <br className="hidden sm:block" />
            Talk to a <span className="text-white font-medium">Technical Lead</span>, not a Sales Manager.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            
            {/* Primary CTA: Cal.com */}
            <a 
              href="https://cal.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-full transition-all shadow-[0_0_30px_-5px_rgba(0,98,209,0.5)] hover:shadow-[0_0_40px_-5px_rgba(0,98,209,0.6)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
            >
              <Calendar size={18} />
              <span>Book Technical Consultation</span>
            </a>

            {/* Secondary CTA: Scroll to Form */}
            <button 
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium rounded-full transition-all active:scale-95 flex items-center justify-center gap-2 group"
            >
              <MessageSquare size={18} className="text-slate-400 group-hover:text-white transition-colors" />
              <span>Jump to Inquiry Form</span>
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform ml-1" />
            </button>
          </div>

          {/* Trust Signals / Hub Status */}
          <div className="mt-16 pt-8 border-t border-white/5 w-full max-w-4xl flex flex-wrap justify-center gap-8 sm:gap-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3">
               <div className="p-2 bg-white/5 rounded-full text-[#0062d1] border border-white/5">
                  <Globe size={16} />
               </div>
               <div className="text-left">
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Response Time</div>
                  <div className="text-sm font-bold text-white">&lt; 24 Hours</div>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="p-2 bg-white/5 rounded-full text-emerald-400 border border-white/5">
                  <Radio size={16} />
               </div>
               <div className="text-left">
                  <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Engineering Hubs</div>
                  <div className="text-sm font-bold text-white">Online (EU / LATAM)</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
