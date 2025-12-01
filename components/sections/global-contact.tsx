'use client';

import { Globe, ShieldCheck, Phone, ChevronDown, Paperclip, Check, ArrowRight, Mail, Loader2, AlertCircle, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/schemas'; 
import React, { useState, useRef, ChangeEvent } from 'react';

export function GlobalContactSection() {
    // --- File Upload State and Logic ---
    const [files, setFiles] = useState<File[]>([]); // State for multiple files
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newFiles = e.target.files;

        if (newFiles) {
            const fileArray = Array.from(newFiles);
            // Limit to 10MB
            const validFiles = fileArray.filter(f => f.size <= 10 * 1024 * 1024); 
            
            if (validFiles.length !== fileArray.length) {
                alert("One or more files exceeded the 10MB limit and were not added.");
            }
            // Add new files to the existing array
            setFiles(prevFiles => [...prevFiles, ...validFiles]);
        }
    };
    
    const handleAreaClick = () => {
        fileInputRef.current?.click();
    };
    
    const handleRemoveFile = (fileName: string) => {
        setFiles(prevFiles => prevFiles.filter(f => f.name !== fileName));
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; 
        }
    };
    // ------------------------------------

    const [serverError, setServerError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            projectType: 'End-to-End Development',
            briefing: '',
            nda: false,
        }
    });

    const onSubmit = async (data: ContactFormData) => {
        setServerError(null);
        
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value.toString());
        });

        files.forEach((file, index) => {
            // Append files with attachment_X key for backend processing
            formData.append(`attachment_${index}`, file); 
        });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Failed to submit form');
            
            setIsSuccess(true);
            reset();
            setFiles([]); // Clear files state on success
        } catch (error) {
            console.error(error);
            setServerError("Failed to submit. Please check your network or try again.");
        }
    };

    if (isSuccess) {
        return (
            <section id="global-contact" className="relative z-20 bg-[#050A14] border-t border-white/5 py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Left Column: Hub Network Visualization */}
                        <GlobalContactHubs />

                        {/* Right Column: Success Message */}
                        <div className="relative pt-20 pb-20">
                            <div className="bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 text-center">
                                <div className="inline-flex p-4 rounded-full bg-green-500/10 text-green-500 mb-4 border border-green-500/20">
                                    <Check size={48} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
                                <p className="text-slate-400 text-sm font-light">
                                    Your request has been successfully transmitted to our engineering team. We will be in touch shortly.
                                </p>
                                <button onClick={() => setIsSuccess(false)} className="text-[#0062d1] hover:text-[#0052b3] transition-colors mt-6 font-medium text-sm">Submit another request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="global-contact" className="relative z-20 bg-[#050A14] border-t border-white/5 py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-50"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column: Hub Network Visualization (RESTORED) */}
                    <GlobalContactHubs />

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

                            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                                {/* Hidden File Input */}
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    onChange={handleFileChange} 
                                    className="hidden" 
                                    accept=".pdf,.docx,.png"
                                    multiple // Allow multiple files
                                />

                                {/* Row 1: Names */}
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">First Name</label>
                                        <input {...register("firstName")} type="text" className={`w-full bg-[#0B0F19] border rounded-lg px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-slate-700 ${errors.firstName ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#0062d1]'}`} placeholder="John" />
                                        {errors.firstName && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.firstName.message}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Last Name</label>
                                        <input {...register("lastName")} type="text" className={`w-full bg-[#0B0F19] border rounded-lg px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-slate-700 ${errors.lastName ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#0062d1]'}`} placeholder="Doe" />
                                        {errors.lastName && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.lastName.message}</p>}
                                    </div>
                                </div>

                                {/* Row 2: Contact */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Work Email</label>
                                        <div className="relative">
                                            <input {...register("email")} type="email" className={`w-full bg-[#0B0F19] border rounded-lg pr-4 py-3 pl-11 text-white text-sm outline-none transition-all placeholder:text-slate-700 ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#0062d1]'}`} placeholder="john@company.com" />
                                            <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                                        </div>
                                        {errors.email && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.email.message}</p>}
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Mobile Number</label>
                                        <div className="relative">
                                            <input {...register("phone")} type="tel" className={`w-full bg-[#0B0F19] border rounded-lg pr-4 py-3 pl-11 text-white text-sm outline-none transition-all placeholder:text-slate-700 ${errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#0062d1]'}`} placeholder="+1 (555) 000-0000" />
                                            <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                                        </div>
                                        {errors.phone && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.phone.message}</p>}
                                    </div>
                                </div>

                                {/* Row 3: Interest Area */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Interest Area</label>
                                    <div className="relative">
                                        <select {...register("projectType")} className={`w-full bg-[#0B0F19] border rounded-lg px-4 py-3 text-white text-sm outline-none transition-all appearance-none cursor-pointer ${errors.projectType ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#0062d1]'}`} defaultValue="End-to-End Development">
                                            <option value="End-to-End Development">End-to-End Development</option>
                                            <option value="Code Rescue / Audit">Code Rescue / Audit</option>
                                            <option value="Dedicated Team">Dedicated Team</option>
                                            <option value="Cloud/DevOps">Cloud/DevOps</option>
                                        </select>
                                        <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                                    </div>
                                    {errors.projectType && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.projectType.message}</p>}
                                </div>

                                {/* Row 4: Project Brief */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Project Brief</label>
                                    <textarea {...register("briefing")} rows={3} className={`w-full bg-[#0B0F19] border rounded-lg px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-slate-700 resize-none mt-1 ${errors.briefing ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#0062d1]'}`} placeholder="Briefly describe your goals..."></textarea>
                                    {errors.briefing && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.briefing.message}</p>}
                                </div>

                                {/* Row 5: Attachments - UPDATED UI */}
                                <div className="space-y-1.5">
                                    <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">Attachments (NDA, RFP, Architecture Specs)</label>
                                    
                                    {files.length > 0 ? (
                                        <div className="space-y-2">
                                            {files.map((f, index) => (
                                                <div key={index} className="flex items-center justify-between p-3 bg-[#0B0F19] border border-[#0062d1]/50 rounded-lg text-white">
                                                    <span className="text-xs truncate">
                                                        <Check size={14} className="inline mr-2 text-emerald-400" />
                                                        {f.name}
                                                    </span>
                                                    <button 
                                                        type="button" 
                                                        onClick={() => handleRemoveFile(f.name)} 
                                                        className="text-slate-400 hover:text-red-400 transition-colors ml-4"
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                            ))}
                                            <button 
                                                type="button"
                                                onClick={handleAreaClick}
                                                className="w-full border border-dashed border-white/10 rounded-lg p-3 text-xs text-slate-500 hover:border-[#0062d1]/50 hover:text-[#0062d1] transition-colors mt-2"
                                            >
                                                + Click to Add More Files
                                            </button>
                                        </div>
                                    ) : (
                                        <div 
                                            onClick={handleAreaClick}
                                            className="border border-dashed border-white/10 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:border-[#0062d1]/50 hover:text-[#0062d1] transition-colors cursor-pointer bg-white/[0.01]"
                                        >
                                            <Paperclip size={20} className="mb-2" />
                                            <span className="text-xs text-center">Drag & Drop or Click to Upload</span>
                                        </div>
                                    )}
                                </div>

                                {serverError && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-2">
                                        <AlertCircle size={16} />
                                        {serverError}
                                    </div>
                                )}

                                {/* NDA Checkbox */}
                                <div className="flex items-center gap-3 mt-2">
                                    <div className="relative flex items-center">
                                        <input {...register("nda")} type="checkbox" id="nda" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/20 bg-white/5 checked:bg-[#0062d1] checked:border-[#0062d1] transition-all" />
                                        <Check size={10} className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                                    </div>
                                    <label htmlFor="nda" className="text-xs text-slate-400 cursor-pointer select-none hover:text-white transition-colors">
                                        I want to sign an NDA first.
                                    </label>
                                </div>

                                <div className="pt-2">
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-full transition-all shadow-[0_0_20px_-5px_rgba(0,98,209,0.5)] hover:shadow-[0_0_30px_-5px_rgba(0,98,209,0.6)] flex items-center justify-center gap-2 group"
                                    >
                                        {isSubmitting ? (
                                            <><span>Submitting...</span><Loader2 size={18} className="animate-spin" /></>
                                        ) : (
                                            <><span>Submit Request</span><ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                        )}
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

// Sub-component for Hubs visualization (Restored)
function GlobalContactHubs() {
    return (
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
    );
}