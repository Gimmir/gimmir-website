'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Terminal } from 'lucide-react'
import { Button, FadeIn, Counter } from '@/components/ui'

interface HeroProps {
  onNavigate?: (page: string) => void
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    setInit(true)
  }, [])

  if (!init) return null

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-32 bg-[#0F172A] overflow-hidden min-h-screen flex items-start md:items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#0062D1]/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-900/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-4 md:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <FadeIn delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-200 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Software Development Agency
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                We Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                  Digital Excellence.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-base md:text-xl text-gray-300 mb-12 leading-relaxed max-w-xl border-l-2 border-blue-500/50 pl-6">
                Building high-load enterprise systems, scalable cloud platforms, and mobile solutions that define market leaders.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button 
                    variant="primary" 
                    className="!text-base !px-8 !py-4 w-full shadow-blue-500/20"
                  >
                    Start Your Project
                  </Button>
                </Link>
                <Link href="/cases" className="w-full sm:w-auto">
                  <Button 
                    variant="outline" 
                    className="!text-base !px-8 !py-4 w-full border-white/10 text-white hover:bg-white/5"
                  >
                    <Play size={16} />
                    Success Stories
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2 w-full relative perspective-1000">
            <FadeIn direction="left" delay={400}>
              <div className="relative bg-[#0B101B] rounded-xl border border-white/10 shadow-2xl shadow-blue-900/20 overflow-hidden animate-float">
                <div className="absolute inset-0 w-full h-full pointer-events-none z-20 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-[20%] animate-scan" />
                
                <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-6 justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] font-mono text-blue-300/50 tracking-widest flex items-center gap-2">
                    <Terminal size={10} /> SYSTEM_MONITOR_V3.0
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">System Load</div>
                      <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                        <span className="animate-pulse">Healthy</span>
                        <span className="text-xs font-normal text-gray-500">/ Online</span>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm font-mono flex items-center gap-2 bg-green-400/10 px-2 py-1 rounded">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      OPTIMAL
                    </div>
                  </div>

                  <div className="flex items-end gap-2 h-32 mb-8">
                    {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%`, animationDelay: `${i * 100 + 500}ms` }}
                        className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-500 rounded-t-sm relative group animate-bar opacity-0"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-300 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(147,197,253,0.8)]"></div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 group hover:border-white/20 transition-colors">
                      <div className="text-gray-400 text-[10px] uppercase mb-2">Active Users</div>
                      <div className="text-xl font-bold text-white">
                        <Counter end={2400000} suffix="+" duration={2000} />
                      </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5 group hover:border-white/20 transition-colors">
                      <div className="text-gray-400 text-[10px] uppercase mb-2">Avg Latency</div>
                      <div className="text-xl font-bold text-white">
                        <Counter end={42} suffix="ms" duration={1500} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
