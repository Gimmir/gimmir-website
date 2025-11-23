'use client'

import { Clock, Check, Users, Code2 } from 'lucide-react'
import { FadeIn, Counter } from '@/components/ui'

export const Stats = () => {
  const stats = [
    { val: 7, suffix: '+', label: 'Years on Market', icon: Clock },
    { val: 300, suffix: '+', label: 'Projects Delivered', icon: Check },
    { val: 98, suffix: '%', label: 'Client Retention', icon: Users },
    { val: 120, suffix: '', label: 'Senior Engineers', icon: Code2 }
  ]

  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#0062D1] rounded-full blur-[100px] md:blur-[150px] opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-900 rounded-full blur-[100px] md:blur-[150px] opacity-20 animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <FadeIn key={i} delay={i * 100} className="h-full">
                <div className="h-full p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0062D1]/30 transition-all duration-500 group flex flex-col items-center text-center hover:-translate-y-1">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0062D1]/20 flex items-center justify-center text-[#0062D1] mb-4 group-hover:scale-110 group-hover:bg-[#0062D1] group-hover:text-white transition-all duration-500">
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-tight text-white group-hover:text-blue-200 transition-colors">
                    <Counter end={s.val} suffix={s.suffix} />
                  </div>
                  <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                    {s.label}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={400} className="text-center border-t border-white/10 pt-16">
          <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-10">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-24 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {['Microsoft', 'Google', 'Spotify', 'Slack', 'Airbnb', 'Uber'].map((logo) => (
              <h3 key={logo} className="text-2xl md:text-3xl font-black text-white tracking-tighter cursor-default hover:text-[#0062D1] transition-colors duration-300 hover:scale-110 transform inline-block">
                {logo}
              </h3>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
