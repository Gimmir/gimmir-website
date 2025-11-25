'use client';

import { Globe, ShieldCheck, Phone, ChevronDown, Paperclip, Check, ArrowRight, Mail } from 'lucide-react';

export function GlobalContactSection() {
  return (
    <section id="global-contact" className="relative z-20 bg-[#050A14] border-t border-white/5 py-24 px-6 overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50"></div>
       
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
             
             {/* Left Column: Hub Network Visualization */}
             <div>
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-semibold mb-4">
                        <Globe size={12} /> 
                        <span>Network Nodes</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                       Global Engineering <br /> 
                       <span className="text-slate-500">Network</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-lg">
                       24/7 Engineering Coverage with complete Cultural & Timezone Alignment.
                    </p>
                </div>
                
                {/* Technical Map/List Visualization */}
                <div className="relative pl-6 border-l border-white/10 space-y-8">
                    {/* Node 1 */}
                    <div className="relative group">
                        <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-[#020408] border border-white/20 group-hover:border-[#0062d1] group-hover:bg-[#0062d1] transition-all duration-300"></div>
                        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-1 sm:gap-4">
                            <span className="text-white font-bold text-sm tracking-wide">USA <span className="text-slate-500 font-normal ml-2">Wilmington, DE</span></span>
                            <span className="hidden sm:block h-px flex-grow bg-white/10"></span>
                            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/5 border border-emerald-400/10 px-2 py-0.5 rounded w-fit">Legal HQ: Active</span>
                        </div>
                        <div className="text-xs font-medium text-slate-500 mt-1 ml-0">EST Timezone • Contracts • IP Protection</div>
                    </div>

                    {/* Node 2 */}
                    <div className="relative group">
                        <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-[#020408] border border-white/20 group-hover:border-[#0062d1] group-hover:bg-[#0062d1] transition-all duration-300"></div>
                        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-1 sm:gap-4">
                            <span className="text-white font-bold text-sm tracking-wide">LATAM <span className="text-slate-500 font-normal ml-2">Mexico City</span></span>
                            <span className="hidden sm:block h-px flex-grow bg-white/10"></span>
                            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/5 border border-emerald-400/10 px-2 py-0.5 rounded w-fit">Nearshore: Online</span>
                        </div>
                        <div className="text-xs font-medium text-slate-500 mt-1 ml-0">CST Timezone • Engineering • Real-time</div>
                    </div>

                    {/* Node 3 */}
                    <div className="relative group">
                        <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-[#020408] border border-white/20 group-hover:border-[#0062d1] group-hover:bg-[#0062d1] transition-all duration-300"></div>
                        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-1 sm:gap-4">
                            <span className="text-white font-bold text-sm tracking-wide">EU <span className="text-slate-500 font-normal ml-2">Valencia / Tallinn</span></span>
                            <span className="hidden sm:block h-px flex-grow bg-white/10"></span>
                            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/5 border border-emerald-400/10 px-2 py-0.5 rounded w-fit">Compliance: Secure</span>
                        </div>
                        <div className="text-xs font-medium text-slate-500 mt-1 ml-0">GDPR Safe • Data Sovereignty • Ops • Engineering</div>
                    </div>

                     {/* Node 4 */}
                     <div className="relative group">
                        <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-[#020408] border border-white/20 group-hover:border-[#0062d1] group-hover:bg-[#0062d1] transition-all duration-300"></div>
                        <div className="flex flex-col items-start sm:flex-row sm:items-center gap-1 sm:gap-4">
                            <span className="text-white font-bold text-sm tracking-wide">R&D <span className="text-slate-500 font-normal ml-2">Lviv / Remote</span></span>
                            <span className="hidden sm:block h-px flex-grow bg-white/10"></span>
                            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/5 border border-emerald-400/10 px-2 py-0.5 rounded w-fit">Core: Deployed</span>
                        </div>
                        <div className="text-xs font-medium text-slate-500 mt-1 ml-0">High Performance • Scalability • Talent</div>
                    </div>
                </div>

                {/* Security Badge */}
                <div className="mt-12 p-4 border border-emerald-500/20 bg-emerald-500/5 rounded-lg inline-flex items-center gap-4 max-w-md">
                   <div className="p-2 bg-emerald-500/10 rounded-full text-emerald-400">
                      <ShieldCheck size={20} />
                   </div>
                   <div>
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-0.5">System Security: Active</div>
                      <div className="text-xs text-emerald-400/70 font-medium">100% GDPR & NDA Compliant. IP Transfer Guaranteed.</div>
                   </div>
                </div>
             </div>

             {/* Right Column: Precision Form */}
             <div className="relative">
                <div className="bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10">
                    <div className="mb-8">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#0062d1] mb-2">Start Project</div>
                      <h3 className="text-2xl font-bold text-white mb-2">Let’s Engineer Your Vision.</h3>
                      <p className="text-slate-400 text-sm font-light">
                         Native English & Spanish support. We speak your language.
                      </p>
                    </div>

                    <form className="space-y-5">
                       <div className="grid grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                              <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">First Name</label>
                              <input type="text" className="w-full bg-[#0B0F19] border border-white/10 focus:border-[#0062d1] rounded-lg px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-slate-700" placeholder="John" />
                          </div>
                          <div className="space-y-1.5">
                              <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Last Name</label>
                              <input type="text" className="w-full bg-[#0B0F19] border border-white/10 focus:border-[#0062d1] rounded-lg px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-slate-700" placeholder="Doe" />
                          </div>
                       </div>
                       
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-1.5">
                              <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Work Email</label>
                              <div className="relative">
                                  <input type="email" className="w-full bg-[#0B0F19] border border-white/10 focus:border-[#0062d1] rounded-lg pr-4 py-3 pl-11 text-white text-sm outline-none transition-all placeholder:text-slate-700" placeholder="john@company.com" />
                                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                              </div>
                          </div>
                          <div className="space-y-1.5">
                              <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Mobile Number</label>
                              <div className="relative">
                                  <input type="tel" className="w-full bg-[#0B0F19] border border-white/10 focus:border-[#0062d1] rounded-lg pr-4 py-3 pl-11 text-white text-sm outline-none transition-all placeholder:text-slate-700" placeholder="+1 (555) 000-0000" />
                                  <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                              </div>
                          </div>
                       </div>

                       <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Interest Area</label>
                          <div className="relative">
                              <select className="w-full bg-[#0B0F19] border border-white/10 focus:border-[#0062d1] rounded-lg px-4 py-3 text-white text-sm outline-none transition-all appearance-none cursor-pointer">
                                  <option className="bg-[#0B0F19] text-slate-300">End-to-End Development</option>
                                  <option className="bg-[#0B0F19] text-slate-300">Code Rescue / Audit</option>
                                  <option className="bg-[#0B0F19] text-slate-300">Dedicated Team</option>
                                  <option className="bg-[#0B0F19] text-slate-300">Cloud/DevOps</option>
                              </select>
                              <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                          </div>
                       </div>

                       <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Project Brief</label>
                          <textarea rows={3} className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#0062d1] outline-none transition-all placeholder:text-slate-700 resize-none mt-1" placeholder="Briefly describe your goals..."></textarea>
                       </div>

                       <div className="space-y-1.5">
                          <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Attachments (NDA, RFP, Architecture Specs)</label>
                          <div className="border border-dashed border-white/10 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:border-[#0062d1]/50 hover:text-[#0062d1] transition-colors cursor-pointer bg-white/[0.01]">
                              <Paperclip size={20} className="mb-2" />
                              <span className="text-xs text-center">Drag & Drop or Click to Upload</span>
                          </div>
                       </div>

                       {/* NDA Checkbox */}
                       <div className="flex items-center gap-3 mt-2">
                          <div className="relative flex items-center">
                             <input type="checkbox" id="nda" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/20 bg-white/5 checked:bg-[#0062d1] checked:border-[#0062d1] transition-all" />
                             <Check size={10} className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                          </div>
                          <label htmlFor="nda" className="text-xs text-slate-400 cursor-pointer select-none hover:text-white transition-colors">
                             I want to sign an NDA first.
                          </label>
                       </div>

                       <div className="pt-2">
                          <button className="w-full px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-full transition-all shadow-[0_0_20px_-5px_rgba(0,98,209,0.5)] hover:shadow-[0_0_30px_-5px_rgba(0,98,209,0.6)] flex items-center justify-center gap-2 group">
                             Submit Request
                             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                       </div>
                    </form>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
