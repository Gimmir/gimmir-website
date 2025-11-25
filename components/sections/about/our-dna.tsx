"use client";

import React, { ReactNode } from 'react';
import { MessageSquare, Cpu, GitBranch, Users2, BarChart3, Code, MapPin, DollarSign as DollarIcon, Shield } from 'lucide-react';

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

    return (
        <div className={`mb-12 md:mb-16 ${alignClass} relative z-10`}>
            {badge && (
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6 ${badgeMargin}`}>
                    {Icon && <Icon size={12} className="text-[#0062d1]" />}
                    <span>{badge}</span>
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

export function OurDnaSection() {
    const values = [
        {
            icon: MessageSquare,
            title: "Radical Transparency",
            desc: "You see the Git commits, the Jira backlog, and the bad news instantly. No \"Project Manager Filter\".",
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            hoverBorder: "hover:border-blue-500/50"
        },
        {
            icon: Cpu,
            title: "No \"Yes\" Culture",
            desc: "If a feature is a bad idea, we will tell you. We protect your budget from waste.",
            color: "text-red-400",
            bg: "bg-red-500/10",
            hoverBorder: "hover:border-red-500/50"
        },
        {
            icon: GitBranch,
            title: "You Own It All",
            desc: "No vendor lock-in. The code, the cloud, the keys—they are yours from Day 1.",
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            hoverBorder: "hover:border-emerald-500/50"
        },
        {
            icon: Users2,
            title: "Talent Over Location",
            desc: "We hire the top 1.5% of engineers globally, regardless of whether they sit in Spain, Ukraine, or Mexico.",
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            hoverBorder: "hover:border-purple-500/50"
        },
    ];
    
    const renderVisual = (index: number, color: string) => {
        switch (index) {
            case 0: // Radical Transparency (Чат/Лог - Blue)
                return (
                    <div className="absolute right-0 top-0 w-32 h-32 opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none p-4 transform translate-x-4 -translate-y-4">
                        <div className={`w-full h-1.5 bg-blue-400/50 rounded-full mb-1 animate-pulse`}></div>
                        <div className={`w-3/4 h-1.5 bg-blue-400/30 rounded-full mb-1`}></div>
                        <div className="flex items-center mt-2">
                           <div className={`w-2 h-2 rounded-full bg-blue-400`}></div>
                           <span className="text-[8px] text-white/50 ml-1">Live Feed</span>
                        </div>
                    </div>
                );
            case 1: // No "Yes" Culture (Захист Бюджету - Red)
                return (
                    <div className="absolute right-0 top-0 w-32 h-32 opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none p-4 transform translate-x-4 -translate-y-4 flex items-center justify-center">
                        <DollarIcon size={64} className={`text-red-400 animate-spin-slow`} style={{ opacity: 0.2 }} />
                        <Shield size={32} className={`text-red-400 absolute opacity-50`} />
                    </div>
                );
            case 2: // You Own It All (Передача Коду - Emerald)
                return (
                    <div className="absolute right-0 top-0 w-32 h-32 opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none p-4 transform translate-x-4 -translate-y-4">
                        <Code size={40} className={`text-emerald-400 transform rotate-12`} />
                        <GitBranch size={24} className={`text-emerald-400 absolute bottom-4 left-4`} />
                    </div>
                );
            case 3: // Talent Over Location (Карта - Purple)
                return (
                    <div className="absolute right-0 top-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                        <MapPin size={20} className={`absolute top-4 left-1/3 text-purple-400 animate-pulse`} />
                        <MapPin size={16} className={`absolute top-1/2 right-4 text-purple-400 animate-pulse-slow`} />
                        <MapPin size={18} className={`absolute bottom-4 left-4 text-purple-400 animate-pulse`} style={{ animationDelay: '0.5s' }} />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5 relative overflow-hidden">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 15s linear infinite;
                }
            `}} />

            <div className="max-w-7xl mx-auto relative z-10">
                <LocalSectionHeader 
                    title={<span className="text-4xl md:text-5xl font-bold leading-snug">Our <span className="text-[#0062d1]">DNA:</span> The &quot;Anti-Agency&quot; Values</span>}
                    subtitle="These core principles eliminate risk and align our incentives with your long-term success."
                    badge="Core Values"
                    badgeIcon={BarChart3}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((item, i) => {
                        const IconComponent = item.icon;
                        
                        let hoverBorderClass = 'hover:border-blue-500/50';
                        if (item.color.includes('red')) hoverBorderClass = 'hover:border-red-500/50';
                        else if (item.color.includes('emerald')) hoverBorderClass = 'hover:border-emerald-500/50';
                        else if (item.color.includes('purple')) hoverBorderClass = 'hover:border-purple-500/50';

                        return (
                            <div key={i} className={`group relative bg-[#0B0F19] border border-white/10 rounded-xl p-6 transition-all duration-300 shadow-lg shadow-black/10 flex flex-col h-full overflow-hidden ${hoverBorderClass}`}>
                                
                                <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                                
                                {renderVisual(i, item.color)}

                                <div className="relative z-10 flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-lg ${item.bg} ${item.color} border border-white/10 group-hover:border-white/20 transition-colors`}>
                                        <IconComponent size={24} />
                                    </div>
                                    <span className="text-4xl font-extrabold opacity-5 text-white/50">{i + 1}</span>
                                </div>
                                <h3 className={`text-xl font-bold text-white mb-3 flex-grow transition-colors group-hover:${item.color}`}>{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
