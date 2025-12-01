"use client";

import React, { ReactNode, useEffect } from 'react';
import { Shield, Clock, Lock, DollarSign as MoneyIcon, ArrowRight } from 'lucide-react';
import { getCalApi } from "@calcom/embed-react";

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

export function GimmirGuaranteeSection() {
    // Ініціалізація Cal.com
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "first-touch" });
            cal("ui", {
                "cssVarsPerTheme": {
                    "light": { "cal-brand": "#0162d1" },
                    "dark": { "cal-brand": "#0162d1" }
                },
                "hideEventTypeDetails": false,
                "layout": "month_view",
            });
        })();
    }, []);

    const guarantees = [
        { 
            title: "2-Week Trial", 
            desc: "If you aren't happy with the team in the first sprint, you don't pay.",
            icon: MoneyIcon, 
            color: "text-emerald-400"
        },
        { 
            title: "Replacement SLA", 
            desc: "If a dev leaves, we replace them within 10 days or credit your account.",
            icon: Clock, 
            color: "text-blue-400"
        },
        { 
            title: "NDA Default", 
            desc: "Your secrets are safe before we even say \"Hello\".",
            icon: Lock, 
            color: "text-purple-400"
        },
    ];

    return (
        <section className="py-16 sm:py-24 px-6 bg-[#080C14] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <LocalSectionHeader 
                    title={<span className="text-4xl md:text-5xl font-bold leading-snug">Put Us to the <span className="text-emerald-400">Test.</span></span>}
                    subtitle="We stand behind our talent and processes. Zero risk for you to try our dedicated engineering units."
                    badge="The Gimmir Guarantee (Risk Reversal)"
                    badgeIcon={Shield}
                />

                <div className="max-w-4xl mx-auto">
                    <ul className="space-y-4 sm:space-y-6">
                        {guarantees.map((guarantee, i) => {
                            const IconComponent = guarantee.icon;
                            return (
                                <li key={i} className="flex items-start p-4 sm:p-6 rounded-xl bg-[#0B0F19] border border-white/10 shadow-xl transition-all hover:border-emerald-500/50 hover:shadow-emerald-900/10">
                                    <div className={`p-2 sm:p-3 rounded-full ${guarantee.color} bg-white/5 border border-white/10 shrink-0 mr-3 sm:mr-4`}>
                                        <IconComponent size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">{guarantee.title}</h3>
                                        <p className="text-sm text-slate-400">{guarantee.desc}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                
                <div className="mt-16 text-center">
                    <button 
                        data-cal-namespace="first-touch"
                        data-cal-link="nazar-moroz/first-touch"
                        data-cal-config='{"layout":"month_view"}'
                        className="px-6 py-3 sm:px-8 sm:py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-all shadow-[0_0_20px_-5px_rgba(52,211,153,0.5)] hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.6)] flex items-center justify-center gap-2 group mx-auto text-base sm:text-lg"
                    >
                        Get Started Risk-Free <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}