'use client';

import React, { useRef } from 'react';
import { 
  Rocket, 
  ArrowRight, 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Lock, 
  CreditCard, 
  LayoutDashboard, 
  Server, 
  Database, 
  Smartphone, 
  Code2, 
  ShieldCheck, 
  GitBranch, 
  FileSignature, 
  FileText, 
  Shield, 
  BarChart3, 
  FileCode,
  ChevronRight,
  ChevronLeft,
  Clock,
  X,
  Check,
  Folder,
  Search,
  PenTool,
  Terminal,
  UploadCloud,
  Users
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export default function MvpDevelopmentPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const roadmapSteps = [
    {
      phase: "Discovery",
      time: "Week 1-2",
      desc: "Blueprinting & Wireframes. We challenge your assumptions to save budget.",
      icon: Search,
      color: "text-blue-400",
      step: "01"
    },
    {
      phase: "Visual Prototype",
      time: "Week 3",
      desc: "High-fidelity UI. Clickable demo for early pitches.",
      icon: PenTool,
      color: "text-purple-400",
      step: "02"
    },
    {
      phase: "Core Development",
      time: "Week 4-10",
      desc: "Sprints. You see a demo every Friday.",
      icon: Terminal,
      color: "text-emerald-400",
      step: "03"
    },
    {
      phase: "Launch",
      time: "Week 11-12",
      desc: "Store submission & Production deploy.",
      icon: UploadCloud,
      color: "text-orange-400",
      step: "04"
    },
    {
      phase: "The Handover",
      time: "Optional",
      desc: "We help interview and hire your internal CTO/Team to take over.",
      icon: Users,
      color: "text-slate-400",
      step: "05"
    }
  ];

  return (
    <div className="bg-[#020408] min-h-screen text-slate-300 selection:bg-[#0062d1] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-32 pb-16 sm:pb-24 px-6 border-b border-white/5 overflow-hidden bg-[#050A14]">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#0062d1] rounded-full blur-[100px] sm:blur-[200px] opacity-[0.15] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050A14]/80 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-lg shadow-black/20">
              <Rocket size={14} className="text-[#0062d1]" />
              <span className="text-xs font-mono text-slate-300 tracking-wider uppercase">Scalable MVP Engineering</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl">
              Launch Your Vision. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-cyan-400">Keep Your Equity.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed mb-8">
               We build MVPs that act like mature products. Scalable architecture from Day 1, so you don&apos;t have to rebuild when you hit 10k users.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-full transition-all shadow-[0_0_30px_-5px_rgba(0,98,209,0.4)] hover:scale-105 active:scale-95">
                Estimate MVP Cost
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 group active:scale-95 shadow-lg shadow-black/20">
                View Success Stories <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-sm text-slate-500">
               <Zap size={16} className="text-yellow-400" />
               <span>Average Time-to-Market: <span className="text-white font-bold">8-12 Weeks</span></span>
            </div>
          </div>

          {/* Visual Content - Infrastructure Card */}
          <div className="relative hidden lg:block">
              <div className="relative bg-[#0B0F19]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 ring-1 ring-white/5">
                 <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                    <div className="text-[10px] font-mono text-slate-500">infrastructure.tf</div>
                 </div>
                 <div className="space-y-3 font-mono text-xs leading-relaxed">
                    <div className="flex items-center gap-2 text-slate-400">
                       <span className="text-purple-400">resource</span> <span className="text-yellow-300">"aws_ecs_cluster"</span> <span className="text-white">"production"</span> {'{'}
                    </div>
                    <div className="pl-6 space-y-2">
                       <div className="flex items-center gap-2">
                          <span className="text-blue-400">name</span> = <span className="text-emerald-300">"mvp-cluster-v1"</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <span className="text-blue-400">auto_scaling</span> = <span className="text-purple-400">true</span>
                       </div>
                       <div className="flex items-center gap-2">
                           <span className="text-slate-500">// Handle 10k+ users from Day 1</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <span className="text-blue-400">load_balancer</span> = <span className="text-purple-400">true</span>
                       </div>
                    </div>
                    <div className="text-slate-400">{'}'}</div>
                    
                    <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                       <div className="text-slate-500 text-[10px]">Architecture Check</div>
                       <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide border border-emerald-400/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                          SCALABLE
                       </div>
                    </div>
                 </div>
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#0062d1] rounded-full blur-[90px] opacity-20 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-600 rounded-full blur-[80px] opacity-15 -z-10"></div>
          </div>
        </div>
      </section>

      {/* 2. REALITY CHECK */}
      <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#0062d1] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            title="Disposable Demo vs. Growth Asset" 
            subtitle="The market standard is broken. Don't build something you'll have to throw away."
            badge="Reality Check"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* The Trap (Red Card) */}
            <div className="group bg-[#0B0F19] border border-white/5 hover:border-red-500/50 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden flex flex-col h-full shadow-xl shadow-black/20 hover:shadow-red-900/10">
               <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"></div>
               
               <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
                     <X size={20} className="text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The &quot;Disposable&quot; MVP</h3>
               </div>

               <div className="space-y-8 flex-grow relative z-10">
                  <div className="space-y-2">
                     <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">The Trap</div>
                     <p className="text-slate-300 text-sm leading-relaxed">
                        Built on No-Code tools (Bubble) or spaghetti code to look good fast.
                     </p>
                  </div>
                  <div className="space-y-2">
                     <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">The Cost</div>
                     <p className="text-slate-300 text-sm leading-relaxed">
                        Hits a &quot;performance wall&quot; at 500 users. Impossible to add custom features later.
                     </p>
                  </div>
               </div>

               <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
                  <div className="text-red-400 font-bold text-lg mb-1 flex items-center gap-2">
                     100% Technical Debt
                  </div>
                  <p className="text-xs text-slate-500 font-mono">
                     Rewrite required to raise funding.
                  </p>
               </div>
            </div>

            {/* The Gimmir Asset (Green Card) */}
            <div className="group bg-[#0B0F19] border border-white/5 hover:border-emerald-500/50 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden flex flex-col h-full shadow-xl shadow-black/20 hover:shadow-emerald-900/10">
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"></div>
               
               <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                     <Check size={20} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The Gimmir Asset</h3>
               </div>

               <div className="space-y-8 flex-grow relative z-10">
                  <div className="space-y-2">
                     <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">The Strategy</div>
                     <p className="text-slate-300 text-sm leading-relaxed">
                        Modular architecture using the same stack as Uber/Airbnb (React/Node/Python).
                     </p>
                  </div>
                  <div className="space-y-2">
                     <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">The Gain</div>
                     <p className="text-slate-300 text-sm leading-relaxed">
                        Validates the market AND handles scale. No re-platforming needed.
                     </p>
                  </div>
               </div>

               <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
                  <div className="text-emerald-400 font-bold text-lg mb-1 flex items-center gap-2">
                     Series A Ready
                  </div>
                  <p className="text-xs text-slate-500 font-mono">
                     Passes Technical Due Diligence immediately.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOILERPLATE ENGINE */}
      <section className="py-16 sm:py-24 px-6 bg-[#050810] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Speed via Architecture, Not Shortcuts." 
            subtitle="We start every project at 40% completion using our proprietary, battle-tested boilerplates. We spend budget on your USP, not on re-inventing the login form."
            badge="The Boilerplate Engine"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'MODULE_AUTH',
                icon: Lock,
                title: 'Secure Auth System',
                desc: 'Pre-built secure login (SSO, 2FA, Biometrics).',
                color: 'text-blue-400',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/20'
              },
              {
                id: 'MODULE_PAY',
                icon: CreditCard,
                title: 'Payments Infrastructure',
                desc: 'Stripe/Adyen/LemonSqueezy integration ready.',
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20'
              },
              {
                id: 'MODULE_ADMIN',
                icon: LayoutDashboard,
                title: 'Admin Dashboard',
                desc: 'Role-based dashboards for your operations team.',
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/20'
              },
              {
                id: 'MODULE_INFRA',
                icon: Server,
                title: 'Cloud Infrastructure',
                desc: 'Auto-scaling AWS/Terraform setup out of the box.',
                color: 'text-orange-400',
                bg: 'bg-orange-500/10',
                border: 'border-orange-500/20'
              }
            ].map((mod) => (
              <div key={mod.id} className="bg-[#0B0F19] border border-white/5 rounded-xl p-6 hover:border-white/20 transition-all group">
                 <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-lg ${mod.bg} ${mod.color} ${mod.border} border`}>
                       <mod.icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">{mod.id}</span>
                 </div>
                 <h3 className="text-white font-bold mb-2 group-hover:text-[#0062d1] transition-colors">{mod.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECH STACK STRATEGY */}
      <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              <div className="lg:col-span-1">
                 <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-8 h-full">
                    <div className="flex items-center gap-3 mb-6">
                       <AlertTriangle className="text-yellow-500" size={24} />
                       <h3 className="text-xl font-bold text-white">Why We Avoid &quot;No-Code&quot;</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                       No-Code platforms create <strong>Vendor Lock-in</strong> and limit intellectual property ownership. You can&apos;t export the code, you can&apos;t host it yourself, and you hit limits fast.
                    </p>
                    <div className="text-xs font-mono text-yellow-500/80 bg-yellow-500/10 p-3 rounded border border-yellow-500/10">
                       WARNING: Investors often consider No-Code apps as &quot;Prototypes&quot;, not &quot;Product Assets&quot;.
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-2">
                 <h3 className="text-2xl font-bold text-white mb-8">Our &quot;Future-Proof&quot; Stack</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 items-center justify-items-center sm:justify-items-stretch">
                    
                    <div className="bg-[#0B0F19] border border-white/10 rounded-xl p-6 hover:border-[#0062d1]/50 transition-colors group w-full max-w-sm sm:max-w-none">
                       <div className="mb-4 text-[#0062d1] bg-[#0062d1]/10 w-fit p-3 rounded-lg"><Database size={24} /></div>
                       <h4 className="text-white font-bold mb-2 text-lg">Web Platform</h4>
                       <div className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">Next.js + Supabase</div>
                       <p className="text-xs text-slate-400 leading-relaxed">Speed of No-Code, power of Enterprise. Server-side rendering for SEO.</p>
                    </div>

                    <div className="bg-[#0B0F19] border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-colors group w-full max-w-sm sm:max-w-none">
                       <div className="mb-4 text-purple-500 bg-purple-500/10 w-fit p-3 rounded-lg"><Smartphone size={24} /></div>
                       <h4 className="text-white font-bold mb-2 text-lg">Mobile App</h4>
                       <div className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">React Native (Expo)</div>
                       <p className="text-xs text-slate-400 leading-relaxed">One codebase, two native apps (iOS & Android). Native performance.</p>
                    </div>

                    <div className="bg-[#0B0F19] border border-white/10 rounded-xl p-6 hover:border-emerald-500/50 transition-colors group sm:col-span-2 xl:col-span-1 w-full max-w-sm sm:max-w-none">
                       <div className="mb-4 text-emerald-500 bg-emerald-500/10 w-fit p-3 rounded-lg"><Code2 size={24} /></div>
                       <h4 className="text-white font-bold mb-2 text-lg">Backend Core</h4>
                       <div className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">Python / Node.js</div>
                       <p className="text-xs text-slate-400 leading-relaxed">FastAPI or NestJS. Ready for complex logic and AI integration.</p>
                    </div>

                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. FOUNDER PROTECTION PROTOCOL */}
      <section className="py-16 sm:py-24 px-6 bg-[#050810] border-b border-white/5 relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[30%] -left-[10%] w-[600px] h-[600px] bg-[#0062d1]/10 rounded-full blur-[120px] mix-blend-screen"></div>
            <div className="absolute top-[20%] -right-[20%] w-[500px] h-[500px] bg-[#0062d1]/5 rounded-full blur-[100px] mix-blend-screen"></div>
            <div className="absolute -bottom-[40%] left-[10%] w-[800px] h-[800px] bg-[#0062d1]/5 rounded-full blur-[150px] mix-blend-screen"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            title="You Own the Business. We Just Build It." 
            subtitle="Addressing the fear of losing control and IP theft. Our contracts are designed for US/EU jurisdiction."
            badge="Founder Protection Protocol"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Card 1: IP Assignment */}
             <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 shadow-lg shadow-black/20">
                {/* Graphic Top */}
                <div className="h-44 bg-[#050810] relative flex items-center justify-center overflow-hidden border-b border-white/5">
                    <div className="w-48 bg-[#0B0F19] border border-white/10 rounded-lg p-4 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/5">
                        <div className="flex justify-between items-center mb-3">
                            <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center border border-white/5"><FileText size={14} className="text-slate-400"/></div>
                            <div className="bg-emerald-500/10 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/20 tracking-wide">SIGNED</div>
                        </div>
                        <div className="space-y-2">
                           <div className="h-1.5 w-2/3 bg-slate-700 rounded-full"></div>
                           <div className="h-1.5 w-full bg-slate-800 rounded-full"></div>
                           <div className="h-1.5 w-4/5 bg-slate-800 rounded-full"></div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center"><Check size={8} className="text-emerald-400"/></div>
                            <span className="text-[9px] text-slate-500 font-mono">IP_Transfer_v1.pdf</span>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                   <h3 className="text-xl font-bold text-white mb-3">IP Assignment</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">
                      Legal contracts ensuring you own 100% of the code, design, and assets from the moment they are created. Work-for-hire terms.
                   </p>
                </div>
             </div>

             {/* Card 2: No Black Box */}
             <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-lg shadow-black/20">
                {/* Graphic Top */}
                 <div className="h-44 bg-[#050810] relative flex items-center justify-center overflow-hidden border-b border-white/5">
                    <div className="w-56 bg-[#0B0F19] border border-white/10 rounded-lg p-4 shadow-2xl relative z-10 font-mono text-[9px] group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/5">
                       <div className="flex items-center gap-2 text-slate-500 mb-3 border-b border-white/5 pb-2">
                          <GitBranch size={12} className="text-[#0062d1]" /> <span className="text-white">main branch</span>
                       </div>
                       <div className="space-y-2.5">
                          <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
                             <span className="text-slate-300">feat: auth module impl</span>
                             <span className="text-[8px] text-slate-600 ml-auto">2m ago</span>
                          </div>
                          <div className="flex items-center gap-2 opacity-60">
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                             <span className="text-slate-400">fix: database schema</span>
                             <span className="text-[8px] text-slate-600 ml-auto">1h ago</span>
                          </div>
                           <div className="flex items-center gap-2 opacity-40">
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                             <span className="text-slate-400">chore: update deps</span>
                          </div>
                       </div>
                    </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
                 <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-3">No &quot;Black Box&quot;</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                       You are invited to our Jira and GitHub. Watch the commits in real-time. We build in your repository, not ours.
                    </p>
                 </div>
             </div>

             {/* Card 3: Handover Ready */}
             <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 shadow-lg shadow-black/20">
                 {/* Graphic Top */}
                 <div className="h-44 bg-[#050810] relative flex items-center justify-center overflow-hidden border-b border-white/5">
                     <div className="w-48 bg-[#0B0F19] border border-white/10 rounded-lg p-4 shadow-2xl relative z-10 font-mono text-[10px] group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/5">
                        <div className="flex items-center gap-2 text-slate-400 mb-3">
                           <Folder size={12} className="text-purple-400" /> project-root
                        </div>
                        <div className="pl-2 space-y-2 border-l border-white/5 ml-1.5">
                           <div className="flex items-center gap-2 text-slate-500">
                              <div className="w-3 h-0.5 bg-slate-700"></div>
                              <span className="text-slate-400">/src</span>
                           </div>
                           <div className="flex items-center gap-2 text-slate-500">
                              <div className="w-3 h-0.5 bg-slate-700"></div>
                              <span className="text-slate-400">/docs</span>
                           </div>
                           <div className="flex items-center gap-2 text-white bg-white/5 p-1 rounded border border-white/5 -ml-1">
                              <div className="w-3 h-0.5 bg-purple-400"></div>
                              <span className="text-purple-200">README.md</span>
                           </div>
                        </div>
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                 </div>
                 <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-3">Handover Ready</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                       We document code assuming you will hire an in-house team tomorrow. Zero lock-in. We help you transition when ready.
                    </p>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. SERIES A CLEARANCE PACK */}
      <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="bg-[#0B0F19] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#0062d1] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase mb-6">
                        Investment Grade
                     </div>
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for Due Diligence.</h2>
                     <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Investors don&apos;t just look at growth; they audit your tech. We deliver a "Series A Clearance Pack" with every MVP.
                     </p>
                     <button className="text-[#0062d1] font-bold hover:text-white transition-colors flex items-center gap-2">
                        Download Sample Report &rarr;
                     </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {[
                        {
                           icon: FileCode,
                           title: "Architecture Diagrams",
                           desc: "Visual maps of how data flows. Essential for your whitepaper."
                        },
                        {
                           icon: Shield,
                           title: "Security Audit",
                           desc: "Basic OWASP penetration testing report for early B2B clients."
                        },
                        {
                           icon: BarChart3,
                           title: "Scalability Report",
                           desc: "Load tests proving the system handles spikes (k6 / JMeter)."
                        },
                        {
                           icon: FileText,
                           title: "API Documentation",
                           desc: "Auto-generated Swagger/OpenAPI docs for integrations."
                        }
                     ].map((item, i) => (
                        <div key={i} className="bg-[#050810] border border-white/5 p-5 rounded-xl hover:border-white/10 transition-colors">
                           <item.icon className="text-slate-300 mb-3" size={20} />
                           <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                           <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. THE ROADMAP (NEW CAROUSEL STYLE) */}
      <section className="py-16 sm:py-24 px-0 bg-[#050810] border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
           <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6">
               <Clock size={12} className="text-[#0062d1]" />
               <span>The Roadmap</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
               From Idea to Handover
             </h2>
             <p className="text-slate-400 text-lg font-light max-w-xl">
               A transparent timeline. No hidden delays.
             </p>
           </div>
           
           <div className="hidden md:flex gap-3">
             <button onClick={() => scroll('left')} className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors">
               <ChevronLeft size={24} />
             </button>
             <button onClick={() => scroll('right')} className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors">
               <ChevronRight size={24} />
             </button>
           </div>
        </div>

        <div 
           ref={scrollRef}
           className="flex overflow-x-auto gap-6 px-6 pb-10 snap-x snap-mandatory no-scrollbar"
           style={{ scrollPaddingLeft: '1.5rem', scrollPaddingRight: '1.5rem' }}
        >
           {roadmapSteps.map((step, index) => (
             <div 
               key={index} 
               className="snap-center shrink-0 w-[85vw] sm:w-[400px] flex flex-col"
             >
               <div className="relative pl-8 pb-8 border-l border-white/10 last:border-transparent">
                  {/* Timeline Dot */}
                  <div className={`absolute left-[-9px] top-0 w-[18px] h-[18px] rounded-full border-4 border-[#050810] ${index < 4 ? 'bg-[#0062d1]' : 'bg-slate-700'}`}></div>
                  
                  <div className="group bg-[#0B0F19] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all duration-300 h-full flex flex-col">
                     <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-white group-hover:text-[#0062d1] transition-colors">
                           <step.icon size={24} />
                        </div>
                        <span className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">{step.step}</span>
                     </div>
                     
                     <h3 className={`text-xl font-bold text-white mb-2 ${step.color}`}>{step.phase}</h3>
                     <div className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">{step.time}</div>
                     <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                        {step.desc}
                     </p>
                  </div>
               </div>
             </div>
           ))}
           {/* Spacer for right padding */}
           <div className="w-6 shrink-0" />
        </div>
      </section>

      {/* 8. FINAL CTA - FIXED MOBILE LAYOUT */}
      <section className="py-16 sm:py-24 px-6 relative overflow-hidden bg-[#050A14] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a1435_0%,_#050A14_100%)] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
             Don&apos;t just build an app. <br className="hidden sm:block" /> Build a business.
           </h2>
           <p className="text-lg text-slate-400 mb-10 font-light max-w-2xl mx-auto">
             Calculate the budget for a scalable MVP, not a throwaway prototype.
           </p>
           <div className="flex flex-col items-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-xl text-lg transition-all shadow-2xl shadow-blue-900/50 hover:shadow-blue-900/70 hover:scale-105 flex items-center justify-center gap-3 group">
                Launch Project Simulator
                <Rocket className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                 <ShieldCheck size={14} className="text-emerald-500" />
                 <span>Native English & Spanish Support. Zero communication gaps.</span>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}