"use client";

import React, { ReactNode } from 'react';
import { Landmark, Clock, Shield, Cpu, Globe } from 'lucide-react';

interface LocalSectionHeaderProps {
  title: ReactNode;
  subtitle: string;
  badge?: string;
  badgeIcon?: React.ElementType; 
  align?: 'center' | 'left';
}

function LocalSectionHeader({ 
  title, 
  subtitle, 
  badge, 
  badgeIcon: Icon, 
  align = 'center' 
}: LocalSectionHeaderProps) {
    const alignClass = align === 'left' ? 'text-left' : 'text-center';
    const marginClass = align === 'center' ? 'mx-auto' : '';
    const badgeMargin = align === 'center' ? 'mx-auto' : '';
    
    const isInfraBadge = badge === "Global Infrastructure (Proof of Scale)";
    const badgeContent = isInfraBadge 
        ? <><span className="sm:hidden">GLOBAL INFRASTRUCTURE</span><span className="hidden sm:inline">GLOBAL INFRASTRUCTURE (PROOF OF SCALE)</span></>
        : <span>{badge}</span>;

    return (
        <div className={`mb-12 md:mb-16 ${alignClass} relative z-10`}>
            {badge && (
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6 ${badgeMargin}`}>
                    {Icon && <Icon size={12} className="text-[#0062d1]" />}
                    {badgeContent}
                </div>
            )}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-snug">
                {title}
            </h2>
            <p className={`text-base sm:text-lg text-slate-400 max-w-2xl font-light leading-relaxed ${marginClass}`}>
                {subtitle}
            </p>
        </div>
    );
}

export function GlobalInfrastructureSection() {
    const hubs = [
        { name: "Legal Safety", detail: "US (Delaware) & EU (Estonia) entities for ironclad contracts.", icon: Landmark, color: "text-blue-400", bg: "bg-blue-500/10" },
        { name: "Timezone Sync", detail: "Nearshore hubs ensuring we are online when you are.", icon: Clock, color: "text-emerald-400", bg: "bg-emerald-500/10" },
        { name: "Data Security", detail: "GDPR & HIPAA compliant workspaces for sensitive data.", icon: Shield, color: "text-red-400", bg: "bg-red-500/10" },
        { name: "Core Talent", detail: "Top 1.5% engineering talent from UA, Spain, Mexico.", icon: Cpu, color: "text-purple-400", bg: "bg-purple-500/10" },
    ];

    return (
        <section className="py-16 sm:py-24 px-6 bg-[#080C14] border-b border-white/5 relative overflow-hidden">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 15s linear infinite;
                }
            `}} />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-[#080C14] opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                <LocalSectionHeader 
                    title={<span className="text-4xl md:text-5xl font-bold leading-snug">Global Reach, <span className="text-[#0062d1]">Local Accountability.</span></span>}
                    subtitle="Proof of Scale: We are strategically structured with legal and engineering hubs across three continents. We are not two guys in a garage."
                    badge="Global Infrastructure (Proof of Scale)"
                    badgeIcon={Globe}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {hubs.map((hub, i) => {
                        const IconComponent = hub.icon;
                        
                        let hoverBorderClass = 'hover:border-blue-500/50';
                        if (hub.color.includes('red')) hoverBorderClass = 'hover:border-red-500/50';
                        else if (hub.color.includes('emerald')) hoverBorderClass = 'hover:border-emerald-500/50';
                        else if (hub.color.includes('purple')) hoverBorderClass = 'hover:border-purple-500/50';

                        return (
                            <div key={i} className={`group relative bg-[#0B0F19] border border-white/10 rounded-2xl p-6 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col h-full overflow-hidden ${hoverBorderClass}`}>
                                
                                <div className="relative z-10 flex items-center justify-between mb-4">
                                    <div className={`p-3 rounded-lg ${hub.bg} ${hub.color} border border-white/10 group-hover:border-white/20 transition-colors`}>
                                        <IconComponent size={24} />
                                    </div>
                                    <span className="text-xs font-mono text-slate-500">Node {i + 1}</span>
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-3 transition-colors">{hub.name}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed flex-grow">{hub.detail}</p>

                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest flex items-center gap-2">
                                        <Globe size={10} className={`${hub.color}`} /> 
                                        {hub.name.split('(')[0].trim()}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
