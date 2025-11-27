'use client';

import React, { useState } from 'react';
import { Check, ChevronDown, Cpu, Send, ShieldCheck, Upload } from 'lucide-react';

export function ContactInquiryFormSection() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section id="inquiry-form" className="relative z-20 py-24 px-6 bg-[#050A14] overflow-hidden">
      {/* Background Glow Only - No Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0062d1]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-mono uppercase tracking-wider mb-6">
             <Cpu size={12} className="text-[#0062d1]" />
             <span>Secure Transmission</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Initiate Partnership Protocol.
          </h2>
          <p className="text-slate-400 text-lg font-light">
             Fill out the specs below. Our engineering team will review your architecture needs.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0062d1] to-transparent opacity-50"></div>
            
            <form className="space-y-8">
                
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">First Name</label>
                        <input 
                            type="text" 
                            placeholder="e.g. Sarah"
                            className="w-full bg-[#050810] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#0062d1] focus:ring-1 focus:ring-[#0062d1]/50 outline-none transition-all placeholder:text-slate-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Last Name</label>
                        <input 
                            type="text" 
                            placeholder="e.g. Connor"
                            className="w-full bg-[#050810] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#0062d1] focus:ring-1 focus:ring-[#0062d1]/50 outline-none transition-all placeholder:text-slate-700"
                        />
                    </div>
                </div>

                {/* Row 2: Email & Phone Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Work Email</label>
                        <input 
                            type="email" 
                            placeholder="sarah@skynet.com"
                            className="w-full bg-[#050810] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#0062d1] focus:ring-1 focus:ring-[#0062d1]/50 outline-none transition-all placeholder:text-slate-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Phone Number</label>
                        <input 
                            type="tel" 
                            placeholder="+1 (555) 000-0000"
                            className="w-full bg-[#050810] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#0062d1] focus:ring-1 focus:ring-[#0062d1]/50 outline-none transition-all placeholder:text-slate-700"
                        />
                    </div>
                </div>

                {/* Row 3: Project Type */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Project Type</label>
                    <div className="relative">
                        <select className="w-full bg-[#050810] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#0062d1] focus:ring-1 focus:ring-[#0062d1]/50 outline-none transition-all appearance-none cursor-pointer text-slate-300">
                            <option value="" disabled selected>Select Protocol...</option>
                            <option value="mvp">Scalable MVP Development</option>
                            <option value="dedicated">Dedicated Engineering Unit</option>
                            <option value="rescue">Code Rescue / Forensic Audit</option>
                            <option value="cloud">Cloud Infrastructure & DevOps</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
                    </div>
                </div>

                {/* Row 4: Briefing */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Briefing</label>
                    <textarea 
                        rows={4}
                        placeholder="Describe your technical challenge or stack requirements..."
                        className="w-full bg-[#050810] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#0062d1] focus:ring-1 focus:ring-[#0062d1]/50 outline-none transition-all placeholder:text-slate-700 resize-none"
                    ></textarea>
                </div>

                {/* Row 5: Attachments (RFP, Architecture Docs) */}
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Attachments (RFP, Architecture Docs)</label>
                    <div 
                        className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer group
                            ${isDragging ? 'border-[#0062d1] bg-[#0062d1]/5' : 'border-white/10 bg-[#050810] hover:border-white/20 hover:bg-white/[0.02]'}
                        `}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
                    >
                        <div className={`p-3 rounded-full mb-3 transition-colors ${isDragging ? 'bg-[#0062d1]/20 text-[#0062d1]' : 'bg-white/5 text-slate-400 group-hover:text-white'}`}>
                            <Upload size={20} />
                        </div>
                        <p className="text-sm text-slate-300 font-medium mb-1">
                            Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-slate-600">
                            PDF, DOCX, or PNG (Max 10MB)
                        </p>
                    </div>
                </div>

                {/* NDA & Submit */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5 mt-8">
                    
                    {/* NDA Checkbox */}
                    <label className="flex items-start gap-3 cursor-pointer group order-2 sm:order-1">
                        <div className="relative flex items-center mt-0.5">
                            <input type="checkbox" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/20 bg-[#050810] checked:bg-[#0062d1] checked:border-[#0062d1] transition-all" />
                            <Check size={10} className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                        </div>
                        <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                            <span className="font-bold text-slate-300">Request Mutual NDA.</span> <br/>
                            <span className="opacity-70">We protect your IP before the first call.</span>
                        </div>
                    </label>

                    {/* Submit Button */}
                    <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(0,98,209,0.5)] hover:shadow-[0_0_30px_-5px_rgba(0,98,209,0.6)] flex items-center justify-center gap-3 group active:scale-95 order-1 sm:order-2">
                        <span>Request Technical Proposal</span>
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </form>

            {/* Security Footer */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] text-slate-600 font-mono opacity-50">
                <ShieldCheck size={10} />
                <span>256-BIT ENCRYPTED TRANSMISSION</span>
            </div>
        </div>

      </div>
    </section>
  );
}
