'use client';

import React, { useState, useRef, ChangeEvent } from 'react'; // useEffect removed
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ChevronDown, Cpu, Send, ShieldCheck, Upload, Loader2, AlertCircle, X } from 'lucide-react';
import { contactFormSchema, ContactFormData } from '@/lib/schemas'; // Assuming this is correct

export function ContactInquiryFormSection() {
    // --- File Upload State and Logic ---
    const [files, setFiles] = useState<File[]>([]); 
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false); 

    const handleFileChange = (e: ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
        let newFiles: FileList | undefined;

        if ('dataTransfer' in e) {
            e.preventDefault();
            setIsDragging(false);
            newFiles = e.dataTransfer.files;
        } else {
            newFiles = e.target.files;
        }

        if (newFiles) {
            const fileArray = Array.from(newFiles);
            const validFiles = fileArray.filter(f => f.size <= 10 * 1024 * 1024); 
            
            if (validFiles.length !== fileArray.length) {
                alert("One or more files exceeded the 10MB limit and were not added.");
            }
            setFiles(prevFiles => [...prevFiles, ...validFiles]);
        }
    };
    
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };
    
    const handleDragLeave = () => setIsDragging(false);
    
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
        // setValue removed
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            projectType: '',
            briefing: '',
            nda: false,
        }
    });

    // --- Phone Input Logic (REMOVED) ---
    // useEffect and handlePhoneInput removed. Phone uses default RHF register.
    // ------------------------------------

    const onSubmit = async (data: ContactFormData) => {
        setServerError(null);
        
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value.toString());
        });

        files.forEach((file, index) => {
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
            setFiles([]); 
            // setValue('phone', '+') removed
        } catch (error) {
            console.error(error);
            setServerError("Failed to submit. Please check your network or try again.");
        }
    };


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
                    
                    {isSuccess ? (
                        <div className="py-20 text-center space-y-4 animate-in fade-in duration-500">
                            <div className="inline-flex p-4 rounded-full bg-green-500/10 text-green-500 mb-4 border border-green-500/20">
                                <Check size={48} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Transmission Successful</h3>
                            <p className="text-slate-400">Protocol initiated. Our team has received your specs.</p>
                            <button onClick={() => setIsSuccess(false)} className="text-[#0062d1] hover:text-[#0052b3] transition-colors mt-4 font-medium">Send another inquiry</button>
                        </div>
                    ) : (
                        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                            
                            {/* Hidden File Input */}
                            <input 
                                type="file" 
                                ref={fileInputRef} 
                                onChange={handleFileChange} 
                                className="hidden" 
                                accept=".pdf,.docx,.png"
                                multiple // Allow multiple files
                            />

                            {/* Row 1: First Name & Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">First Name</label>
                                    <input 
                                        {...register("firstName")}
                                        type="text" 
                                        placeholder="e.g. Sarah"
                                        className={`w-full bg-[#050810] border rounded-xl px-4 py-3.5 text-white text-sm focus:ring-1 outline-none transition-all placeholder:text-slate-700
                                            ${errors.firstName ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-[#0062d1] focus:ring-[#0062d1]/50'}
                                        `}
                                    />
                                    {errors.firstName && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.firstName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Last Name</label>
                                    <input 
                                        {...register("lastName")}
                                        type="text" 
                                        placeholder="e.g. Connor"
                                        className={`w-full bg-[#050810] border rounded-xl px-4 py-3.5 text-white text-sm focus:ring-1 outline-none transition-all placeholder:text-slate-700
                                            ${errors.lastName ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-[#0062d1] focus:ring-[#0062d1]/50'}
                                        `}
                                    />
                                    {errors.lastName && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.lastName.message}</p>}
                                </div>
                            </div>

                            {/* Row 2: Email & Phone Number */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Work Email</label>
                                    <input 
                                        {...register("email")}
                                        type="email" 
                                        placeholder="sarah@skynet.com"
                                        className={`w-full bg-[#050810] border rounded-xl px-4 py-3.5 text-white text-sm focus:ring-1 outline-none transition-all placeholder:text-slate-700
                                            ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-[#0062d1] focus:ring-[#0062d1]/50'}
                                        `}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.email.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Phone Number</label>
                                    <input 
                                        {...register("phone")} 
                                        type="tel" 
                                        // id and onChange removed
                                        className={`w-full bg-[#050810] border rounded-xl px-4 py-3.5 text-white text-sm focus:ring-1 outline-none transition-all placeholder:text-slate-700
                                            ${errors.phone ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-[#0062d1] focus:ring-[#0062d1]/50'}
                                        `}
                                        placeholder="+1 (555) 000-0000" // Restored original placeholder
                                    />
                                    {errors.phone && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.phone.message}</p>}
                                </div>
                            </div>

                            {/* Row 3: Project Type */}
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Project Type</label>
                                <div className="relative">
                                    <select 
                                        {...register("projectType")}
                                        className={`w-full bg-[#050810] border rounded-xl px-4 py-3.5 text-white text-sm focus:ring-1 outline-none transition-all appearance-none cursor-pointer text-slate-300
                                            ${errors.projectType ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-[#0062d1] focus:ring-[#0062d1]/50'}
                                        `}
                                    >
                                        <option value="">Select Protocol...</option>
                                        <option value="Scalable MVP Development">Scalable MVP Development</option>
                                        <option value="Dedicated Engineering Unit">Dedicated Engineering Unit</option>
                                        <option value="Code Rescue / Forensic Audit">Code Rescue / Forensic Audit</option>
                                        <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
                                </div>
                                {errors.projectType && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.projectType.message}</p>}
                            </div>

                            {/* Row 4: Briefing */}
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Briefing</label>
                                <textarea 
                                    {...register("briefing")}
                                    rows={4}
                                    placeholder="Describe your technical challenge or stack requirements..."
                                    className={`w-full bg-[#050810] border rounded-xl px-4 py-3.5 text-white text-sm focus:ring-1 outline-none transition-all placeholder:text-slate-700 resize-none
                                        ${errors.briefing ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : 'border-white/10 focus:border-[#0062d1] focus:ring-[#0062d1]/50'}
                                    `}
                                ></textarea>
                                {errors.briefing && <p className="text-red-400 text-xs ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.briefing.message}</p>}
                            </div>

                            {/* Row 5: Attachments (RFP, Architecture Docs) - UPDATED UI */}
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-wider font-bold text-slate-500 ml-1">Attachments (RFP, Architecture Docs)</label>
                                
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
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleFileChange}
                                        className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer group
                                            ${isDragging ? 'border-[#0062d1] bg-[#0062d1]/5' : 'border-white/10 bg-[#050810] hover:border-white/20 hover:bg-white/[0.02]'}
                                        `}
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
                                )}
                            </div>
                            
                            {serverError && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-2">
                                    <AlertCircle size={16} />
                                    {serverError}
                                </div>
                            )}

                            {/* NDA & Submit */}
                            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5 mt-8">
                                
                                {/* NDA Checkbox */}
                                <label className="flex items-start gap-3 cursor-pointer group order-2 sm:order-1">
                                    <div className="relative flex items-center mt-0.5">
                                        <input {...register("nda")} type="checkbox" className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-white/20 bg-[#050810] checked:bg-[#0062d1] checked:border-[#0062d1] transition-all" />
                                        <Check size={10} className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                                    </div>
                                    <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                                        <span className="font-bold text-slate-300">Request Mutual NDA.</span> <br/>
                                        <span className="opacity-70">We protect your IP before the first call.</span>
                                    </div>
                                </label>

                                {/* Submit Button */}
                                <button 
                                    disabled={isSubmitting}
                                    type="submit" 
                                    className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(0,98,209,0.5)] hover:shadow-[0_0_30px_-5px_rgba(0,98,209,0.6)] flex items-center justify-center gap-3 group active:scale-95 order-1 sm:order-2"
                                >
                                    {isSubmitting ? (
                                        <><span>Transmitting...</span><Loader2 size={18} className="animate-spin" /></>
                                    ) : (
                                        <><span>Request Technical Proposal</span><Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>
                            </div>

                        </form>
                    )}

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