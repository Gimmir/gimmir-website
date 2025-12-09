'use client';

import React, { useEffect, useState } from 'react';
import { ShieldAlert, Activity, Download, Database, Server, Cpu } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative z-10 pt-32 pb-16 sm:pb-24 px-6 border-b border-white/5 overflow-hidden bg-[#050A14]">
      {/* Background Effects - Standard Blue/Cyan Brand Colors */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0062d1]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up opacity-0">
            <ShieldAlert size={14} className="text-[#0062d1]" />
            <span className="text-xs font-mono text-slate-300 tracking-wider uppercase">Code Rescue Protocol</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight animate-fade-in-up opacity-0 drop-shadow-2xl" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            Turn Your <span className="text-white whitespace-nowrap">Technical Debt</span> <br />
            into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-cyan-400 whitespace-nowrap">Scalable Asset.</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            We rescue stalled projects, decouple spaghetti monoliths, and prepare architecture for VC Technical Due Diligence. Stop the bleeding before the code collapses.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            {/* Primary CTA - Standard Brand Style */}
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-full transition-all shadow-[0_0_30px_-5px_rgba(0,98,209,0.5)] hover:shadow-[0_0_40px_-5px_rgba(0,98,209,0.6)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
              <Activity size={18} />
              <span>Book Diagnostic Audit</span>
            </button>
            
            {/* Secondary CTA */}
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 group active:scale-95">
              <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
              <span>Due Diligence Checklist</span>
            </button>
          </div>
        </div>

        {/* Visual Content - System Health Monitor */}
        <div className="relative animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
           <SystemHealthMonitor />
        </div>

      </div>
    </section>
  );
}

function SystemHealthMonitor() {
  const [status, setStatus] = useState<'critical' | 'recovering' | 'stable'>('critical');

  // Simulate the rescue process animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(prev => {
        if (prev === 'critical') return 'recovering';
        if (prev === 'recovering') return 'stable';
        return 'critical';
      });
    }, 3000); // Change state every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#0B0F19]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl ring-1 ring-white/5 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-black/40 px-2 py-1 rounded border border-white/5">
                <Activity size={10} className={status === 'stable' ? 'text-emerald-500' : 'text-[#0062d1] animate-pulse'} />
                <span className="text-[10px] font-mono text-slate-500 uppercase">System Monitor</span>
            </div>
        </div>

        <div className={`px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
            status === 'critical' ? 'bg-red-500/10 border-red-500/50 text-red-500' :
            status === 'recovering' ? 'bg-amber-500/10 border-amber-500/50 text-amber-500' :
            'bg-emerald-500/10 border-emerald-500/50 text-emerald-500'
        }`}>
            {status === 'critical' ? 'CRITICAL FAILURE' : status === 'recovering' ? 'RESCUE IN PROGRESS' : 'SYSTEM STABLE'}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-4">
        <MetricRow 
          label="Database Latency" 
          icon={Database}
          status={status}
          values={{ critical: '2400ms', recovering: '450ms', stable: '45ms' }}
        />
        <MetricRow 
          label="Server Load" 
          icon={Server}
          status={status}
          values={{ critical: '98%', recovering: '65%', stable: '24%' }}
        />
        <MetricRow 
          label="Code Complexity" 
          icon={Cpu}
          status={status}
          values={{ critical: 'High Debt', recovering: 'Refactoring', stable: 'Optimized' }}
        />
      </div>

      {/* Terminal Log simulation */}
      <div className="mt-6 bg-black/50 rounded-lg p-3 font-mono text-[10px] border border-white/5 h-24 overflow-hidden flex flex-col justify-end">
        <div className="space-y-1 opacity-70">
          {status === 'critical' && (
            <>
              <div className="text-red-400">[CRITICAL] Unhandled Exception in PaymentModule</div>
              <div className="text-red-400">[ALERT] Memory Leak detected in Worker_04</div>
              <div className="text-slate-500">Restarting services... failed.</div>
            </>
          )}
          {status === 'recovering' && (
            <>
              <div className="text-amber-400">[WARN] Deprecated API usage found</div>
              <div className="text-blue-400">[INFO] Decoupling monolithic services...</div>
              <div className="text-blue-400">[INFO] Implementing caching layer...</div>
            </>
          )}
          {status === 'stable' && (
            <>
              <div className="text-emerald-400">[SUCCESS] Architecture Audit Passed</div>
              <div className="text-emerald-400">[SUCCESS] Test Coverage: 84%</div>
              <div className="text-slate-500">System running stable. Ready for scale.</div>
            </>
          )}
        </div>
      </div>

      {/* Decoration Blobs */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#0062d1] rounded-full blur-[90px] opacity-20 -z-10"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-600 rounded-full blur-[80px] opacity-15 -z-10"></div>
    </div>
  );
}

function MetricRow({ label, icon: Icon, status, values }: { label: string, icon: any, status: 'critical' | 'recovering' | 'stable', values: { critical: string, recovering: string, stable: string } }) {
  const getValue = () => values[status];
  
  const getColor = () => {
    if (status === 'critical') return 'text-red-500 border-red-500/20 bg-red-500/10';
    if (status === 'recovering') return 'text-amber-500 border-amber-500/20 bg-amber-500/10';
    return 'text-emerald-500 border-emerald-500/20 bg-emerald-500/10';
  };

  const getBarWidth = () => {
    if (status === 'critical') return 'w-[90%] bg-red-500';
    if (status === 'recovering') return 'w-[60%] bg-amber-500';
    return 'w-[20%] bg-emerald-500';
  };

  return (
    <div className="flex items-center gap-4">
      <div className={`p-2 rounded-lg border transition-colors duration-500 ${getColor()}`}>
        <Icon size={16} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1.5">
          <span className="text-xs text-slate-400 font-medium">{label}</span>
          <span className={`text-xs font-bold font-mono transition-colors duration-500 ${
             status === 'critical' ? 'text-red-400' : status === 'recovering' ? 'text-amber-400' : 'text-emerald-400'
          }`}>{getValue()}</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all duration-1000 ease-in-out ${getBarWidth()}`}></div>
        </div>
      </div>
    </div>
  );
}
