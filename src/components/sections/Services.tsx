'use client'

import { 
  Smartphone, Globe, Database, Users, Layers, Shield 
} from 'lucide-react'
import { FadeIn, SectionHeading } from '@/components/ui'
import { ArrowUpRight } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ComponentType<{ size: number; strokeWidth: number }>
  title: string
  desc: string
  tags: string[]
  index: number
}

const ServiceCard = ({ icon: Icon, title, desc, tags, index }: ServiceCardProps) => (
  <FadeIn delay={index * 100} className="h-full">
    <div className="group relative h-full bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0062D1] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 text-gray-400 flex items-center justify-center shadow-sm group-hover:text-[#0062D1] group-hover:border-blue-100 group-hover:scale-110 group-hover:shadow-blue-200/50 transition-all duration-500">
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
            <ArrowUpRight size={16} className="text-[#0062D1]" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-[#0062D1] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 leading-relaxed mb-8 text-sm flex-1">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-[11px] font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 group-hover:bg-white group-hover:border-blue-100 group-hover:text-blue-600 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </FadeIn>
)

export const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile Engineering',
      desc: 'Native performance with cross-platform efficiency.',
      tags: ['iOS', 'Android', 'Flutter']
    },
    {
      icon: Globe,
      title: 'Web Platforms',
      desc: 'Enterprise-grade SaaS solutions using modern stacks.',
      tags: ['Next.js', 'React', 'Node.js']
    },
    {
      icon: Database,
      title: 'Cloud & DevOps',
      desc: 'Bank-grade security on public cloud.',
      tags: ['AWS', 'Azure', 'Kubernetes']
    },
    {
      icon: Users,
      title: 'Dedicated Teams',
      desc: 'Seamlessly extend your in-house capacity.',
      tags: ['Staff Augmentation', 'Agile']
    },
    {
      icon: Layers,
      title: 'Product Design',
      desc: 'Data-driven UX/UI that converts.',
      tags: ['Design Systems', 'Figma']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      desc: 'Zero-tolerance for bugs.',
      tags: ['Automated Testing', 'Cypress']
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 max-w-7xl mx-auto border-b border-gray-100 pb-12">
          <FadeIn className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062D1] text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062D1] animate-pulse" />
              Core Competencies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0F172A] tracking-tight">
              We Build <span className="text-[#0062D1]">Digital Assets.</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              From MVP to IPO. Our engineering stack is designed for speed, security, and massive scalability.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
