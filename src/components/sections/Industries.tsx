'use client'

import { 
  CreditCard, Activity, Heart, Box, Briefcase, Server 
} from 'lucide-react'
import { FadeIn, SectionHeading } from '@/components/ui'

interface IndustryCardProps {
  title: string
  sub: string
  features: string
  icon: React.ComponentType<{ size: number }>
  index: number
  image: string
}

const IndustryCard = ({ title, sub, features, icon: Icon, index, image }: IndustryCardProps) => (
  <FadeIn delay={index * 100} className="h-full">
    <div className="group relative h-48 rounded-lg overflow-hidden bg-[#0F172A] border border-white/5 hover:border-[#0062D1]/30 transition-all duration-500 shadow-lg cursor-default">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-all duration-700 scale-100 group-hover:scale-105 grayscale group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/40" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,98,209,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,98,209,0.1)_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="relative z-10 p-4 flex flex-col h-full">
        <div className="flex justify-between items-start mb-auto">
          <div className="w-8 h-8 rounded-md bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-[#0062D1] group-hover:text-white transition-colors duration-500">
            <Icon size={16} />
          </div>
          <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase bg-black/30 px-1.5 py-0.5 rounded border border-white/5 group-hover:text-blue-300 group-hover:border-blue-500/30 transition-colors">
            {sub}
          </span>
        </div>
        
        <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-blue-100 transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {features.split('•').map((f, i) => (
              <span key={i} className="text-[9px] text-gray-400 font-mono flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity delay-75">
                <span className="w-0.5 h-0.5 rounded-full bg-[#0062D1]"></span>
                {f.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 h-0.5 bg-[#0062D1] w-0 group-hover:w-full transition-all duration-700 ease-out" />
    </div>
  </FadeIn>
)

export const Industries = () => {
  const industries = [
    { 
      title: "Fintech", 
      sub: "Finance", 
      features: "PCI DSS • High-Freq Trading", 
      icon: CreditCard, 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Healthcare", 
      sub: "MedTech", 
      features: "HIPAA • Telemedicine", 
      icon: Activity, 
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Fitness", 
      sub: "Lifestyle", 
      features: "Wearables • AI Coaching", 
      icon: Heart, 
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "E-Commerce", 
      sub: "Retail", 
      features: "High Load • Omnichannel", 
      icon: Box, 
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Real Estate", 
      sub: "PropTech", 
      features: "Virtual Tours • Booking", 
      icon: Briefcase, 
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Enterprise", 
      sub: "SaaS", 
      features: "ERP Systems • Big Data", 
      icon: Server, 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
    }
  ]

  return (
    <section className="py-24 bg-[#0B101B] relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          label="Vertical Expertise" 
          title="Industries We Transform" 
          subtitle="Deep domain knowledge allows us to speak your language." 
          light={true} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <IndustryCard key={i} index={i} {...ind} />
          ))}
        </div>
      </div>
    </section>
  )
}
