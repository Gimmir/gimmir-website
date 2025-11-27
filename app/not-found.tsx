"use client";

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, Home, Layers, Wrench } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020408] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl animate-pulse" />
            <div className="relative p-6 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <AlertTriangle size={64} className="text-amber-500" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-amber-500 tracking-tight mb-3">
            // ERROR_CODE_404
          </h1>
          <p className="font-mono text-sm sm:text-base text-red-400/80 uppercase tracking-widest">
            System Route Disruption. File or path not found.
          </p>
        </div>

        {/* Terminal-style Divider */}
        <div className="my-8 flex items-center justify-center gap-2 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Diagnostic Report</div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
        </div>

        {/* Witty Message */}
        <div className="mb-10 space-y-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
            Our server encountered an <span className="text-amber-400 font-medium">unexpected path divergence</span>, but your project doesn't have to.
          </p>
          <p className="text-sm text-slate-500">
            The page you're looking for may have been moved, deleted, or never existed. Let's get you back on track.
          </p>
        </div>

        {/* Console-style Status Box */}
        <div className="mb-10 mx-auto max-w-md bg-[#080a10]/80 backdrop-blur-sm border border-white/10 rounded-lg p-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-amber-500/50" />
              <div className="w-2 h-2 rounded-full bg-slate-500/30" />
            </div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">system_status</span>
          </div>
          <div className="font-mono text-xs text-left space-y-1">
            <p className="text-slate-500">
              <span className="text-red-400">×</span> Route resolution: <span className="text-red-400">FAILED</span>
            </p>
            <p className="text-slate-500">
              <span className="text-amber-400">!</span> Suggested action: <span className="text-amber-400">REDIRECT</span>
            </p>
            <p className="text-slate-500">
              <span className="text-[#0062d1]">→</span> Recovery options: <span className="text-[#0062d1]">AVAILABLE</span>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          {/* Primary CTA */}
          <Link 
            href="/solutions/code-rescue"
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-semibold rounded-full shadow-[0_0_40px_-10px_rgba(0,98,209,0.5)] hover:shadow-[0_0_50px_-10px_rgba(0,98,209,0.7)] transition-all transform hover:scale-[1.02] active:scale-95"
          >
            <Wrench size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Start a Project Audit</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Secondary Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium rounded-full transition-all active:scale-95"
            >
              <Home size={16} />
              <span>Return to Homepage</span>
            </Link>
            <Link
              href="/solutions/web-mobile"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-medium rounded-full transition-all active:scale-95"
            >
              <Layers size={16} />
              <span>Explore Solutions</span>
            </Link>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex items-center justify-center gap-2 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <div className="w-1 h-1 rounded-full bg-[#0062d1]/50" />
          <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            Gimmir Secure Environment • Error Handling Protocol
          </p>
          <div className="w-1 h-1 rounded-full bg-[#0062d1]/50" />
        </div>
      </div>
    </div>
  );
}
