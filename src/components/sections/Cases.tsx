'use client'

import { ArrowRight } from 'lucide-react'
import { FadeIn, SectionHeading, Button } from '@/components/ui'

interface CaseCardProps {
  id: string
  client: string
  title: string
  desc: string
  tags: string[]
  metrics: { label: string; value: string }[]
  image: string
  index: number
  onNavigate: (page: string) => void
}

const CaseCard = ({ id, client, title, desc, tags, metrics, image, index, onNavigate }: CaseCardProps) => (
  <FadeIn delay={index * 150} className="h-full">
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#0062D1] transition-all duration-500 group flex flex-col h-full hover:-translate-y-1">
      <div className="relative h-48 md:h-56 overflow-hidden cursor-pointer" onClick={() => onNavigate(`case:${id}`)}>
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent opacity-80" />
        
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <div className="flex gap-2 mb-2">
            {tags.map((t, i) => (
              <span key={i} className="px-2 py-0.5 bg-white/20 backdrop-blur border border-white/10 text-white text-[9px] font-bold uppercase tracking-wider rounded">
                {t}
              </span>
            ))}
          </div>
          <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">{client}</div>
          <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <p className="text-gray-600 text-sm leading-relaxed mb-5 border-b border-gray-100 pb-5 flex-1 line-clamp-3">
          {desc}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {metrics.map((m, i) => (
            <div key={i}>
              <div className="text-xl font-bold text-[#0062D1] mb-0.5">{m.value}</div>
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <Button 
            variant="outline" 
            className="w-full !py-2.5 text-xs justify-center group-hover:bg-[#0062D1] group-hover:text-white group-hover:border-[#0062D1] transition-colors"
            onClick={() => onNavigate(`case:${id}`)}
          >
            Read Case Study <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </div>
  </FadeIn>
)

interface CasesProps {
  onNavigate: (page: string) => void
  featured?: boolean
}

export const Cases = ({ onNavigate, featured = true }: CasesProps) => {
  const ALL_CASES = [
    { 
      id: 'neobank',
      client: "NeoBank Corp", 
      title: "Banking Ecosystem Transformation", 
      desc: "Complete re-engineering of a legacy banking core to a microservices architecture.", 
      tags: ['Fintech', 'Mobile', 'Security'], 
      metrics: [{ label: "User Growth", value: "+240%" }, { label: "Uptime", value: "99.99%" }], 
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600"
    },
    { 
      id: 'fitpulse',
      client: "FitPulse Inc.", 
      title: "Holistic Wellness App", 
      desc: "Developed a comprehensive fitness ecosystem integrating real-time wearable data with AI-personalized nutrition.", 
      tags: ['Wellness', 'Mobile', 'AI/ML'], 
      metrics: [{ label: "User Retention", value: "+45%" }, { label: "Daily Active", value: "1.2M" }], 
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1600"
    },
    { 
      id: 'medconnect',
      client: "MedConnect", 
      title: "Telehealth Portal", 
      desc: "Secure, HIPAA-compliant platform connecting patients with specialists worldwide.", 
      tags: ['Healthcare', 'Web', 'Cloud'], 
      metrics: [{ label: "Consultations", value: "10k/Day" }, { label: "Compliance", value: "100%" }], 
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
    },
  ]

  const casesToShow = featured ? ALL_CASES.slice(0, 3) : ALL_CASES

  return (
    <section id="success-stories" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          label="Proven Track Record" 
          title="Results That Speak" 
          subtitle="We focus on business outcomes. Here is how we helped our partners achieve market dominance." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {casesToShow.map((caseStudy, idx) => (
            <CaseCard 
              key={caseStudy.id} 
              index={idx} 
              {...caseStudy} 
              onNavigate={onNavigate} 
            />
          ))}
        </div>

        {featured && (
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={() => onNavigate('cases')}>
              View All Success Stories
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
