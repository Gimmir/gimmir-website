"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users2, Linkedin } from 'lucide-react';

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

export function LeadershipSection() {
    const leaders = [
        {
            name: "Nazar Moroz",
            title: "CEO / Founder",
            imgUrl: "https://media.licdn.com/dms/image/v2/D4E03AQFPlwDdCTjiZg/profile-displayphoto-crop_800_800/B4EZnnb6cTHEAI-/0/1760524479200?e=1765411200&v=beta&t=9zxnJYKhqj_x2GQRB4tOgK7eCgpgi-ScGB3OeMBsSp0",
            linkedinUrl: "https://www.linkedin.com/in/nazarmoroze/", 
        },
        {
            name: "Oleh Palazh",
            title: "CTO / Founder",
            imgUrl: "https://media.licdn.com/dms/image/v2/D4E03AQHZPCXSID33xw/profile-displayphoto-crop_800_800/B4EZl4l.kIIIAI-/0/1758664846680?e=1765411200&v=beta&t=UlpAitJB-d5xId8_8iiGPrM4zDf3ccQCERaAC7kXceA",
            linkedinUrl: "https://www.linkedin.com/in/oleh-palazhii/", 
        },
    ];

    return (
        <section className="py-16 sm:py-24 px-6 bg-[#050A14] relative overflow-hidden">
             <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#0062d1]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <LocalSectionHeader 
                    title={<span className="text-4xl md:text-5xl font-bold leading-snug">Meet the <span className="text-white/50">People</span> Behind the Code</span>}
                    subtitle="We are engineers leading engineers. Not salespeople. Our leadership guarantees technical integrity in every unit."
                    badge="Leadership: The Spec Sheets"
                    badgeIcon={Users2}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
                    {leaders.map((leader, i) => (
                        <div key={i} className="bg-[#0B0F19] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row shadow-xl shadow-black/20 hover:border-[#0062d1]/50 transition-colors duration-300 group h-full">
                            
                            {/* Image & Title Column */}
                            <div className="flex flex-col items-center text-center sm:items-start sm:text-left w-full sm:w-1/3 shrink-0 border-b border-white/10 pb-6 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8">
                                
                                <div className="w-24 h-24 shrink-0 relative overflow-hidden rounded-full border-4 border-[#0062d1]/50 bg-slate-800/50 mb-4 group-hover:border-[#0062d1] transition-colors duration-300">
                                    <Image
                                        src={leader.imgUrl}
                                        alt={leader.name}
                                        width={96}
                                        height={96}
                                        className="object-cover w-full h-full grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                                    />
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-0.5 whitespace-nowrap">{leader.name}</h3>
                                <p className="text-[#0062d1] font-semibold text-sm mb-3">{leader.title}</p>
                                
                                {leader.linkedinUrl && (
                                    <Link 
                                        href={leader.linkedinUrl}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-[#0062d1] hover:text-white transition-colors group/link text-sm"
                                    >
                                        <Linkedin size={16} className="group-hover/link:translate-y-px transition-transform" />
                                        <span>View LinkedIn</span>
                                    </Link>
                                )}
                            </div>

                            {/* Description Column */}
                            <div className="w-full sm:w-2/3 pt-6 sm:pt-0 sm:pl-8 flex flex-col justify-between">
                                <div className='space-y-4'>
                                    <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-3 text-center sm:text-left">OUR MISSION STATEMENT:</h4>
                                    
                                    <p className="text-slate-300 text-sm sm:text-base italic text-center sm:text-left">
                                        &quot;{leader.title === 'CEO / Founder' ? "We founded Gimmir to fix the trust and quality issues endemic to outsourcing. Our mission is to build digital assets, not debt." : "My focus is on maintaining a modular, high-performance architecture that guarantees scalability and passes any technical audit."}&quot;
                                    </p>
                                </div>
                                
                                <div className="mt-6 pt-4 border-t border-white/5 flex justify-center sm:justify-start">
                                    <span className="text-xs font-mono text-slate-600">
                                        {leader.title === 'CEO / Founder' ? "BUSINESS & VISION" : "TECHNICAL INTEGRITY"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}