'use client';

import React from 'react';
import Link from 'next/link';
import { Handshake, ArrowRight, Building2, Shield, Users } from 'lucide-react';

/**
 * Agency Partnership Section
 * 
 * Strategic Purpose: Target Digital Agencies for White Label partnerships
 * Design: Lighter bg-slate-900 for corporate trust (Directive 5)
 */
export function AgencyPartnershipSection() {
  return (
    <section className="relative z-20 py-16 sm:py-20 px-4 sm:px-6 bg-slate-900 border-y border-white/5">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-[#0a1628] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-50"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Icon/Visual */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#0062d1] to-cyan-500 flex items-center justify-center shadow-[0_0_60px_-10px_rgba(0,98,209,0.5)]">
                <Handshake size={40} className="text-white" />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-3xl border border-[#0062d1]/20 -z-10"></div>
              <div className="absolute -inset-4 rounded-3xl border border-[#0062d1]/10 -z-10"></div>
            </div>
          </div>

          {/* Center: Copy */}
          <div className="flex-grow text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0062d1]/10 border border-[#0062d1]/20 mb-4">
              <Building2 size={14} className="text-[#0062d1]" />
              <span className="text-xs font-semibold text-[#0062d1] uppercase tracking-wider">For Digital Agencies</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Scale Your Production Capacity <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-cyan-400">Without Hiring</span>
            </h2>
            
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
              White Label engineering for agencies. We code under your brand, you keep the client relationship. 
              NDA-protected, zero client visibility into our involvement.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-emerald-400" />
                <span>NDA Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-[#0062d1]" />
                <span>Your Brand, Our Code</span>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex-shrink-0">
            <Link 
              href="/contact-us?type=agency"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-lg group"
            >
              Partner with Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
