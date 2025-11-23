'use client'

import { FadeIn } from './FadeIn'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export const SectionHeading = ({ 
  label, 
  title, 
  subtitle, 
  center = false, 
  light = false 
}: SectionHeadingProps) => (
  <FadeIn className={`mb-12 md:mb-16 ${center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
    {label && (
      <div className={`text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2 ${center ? 'justify-center' : ''} ${light ? 'text-blue-300' : 'text-[#0062D1]'}`}>
        <div className={`w-6 h-0.5 md:w-8 md:h-1 rounded-full ${light ? 'bg-blue-400' : 'bg-[#0062D1]'}`} />
        {label}
      </div>
    )}
    <h2 className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight tracking-tight ${light ? 'text-white' : 'text-[#0F172A]'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-blue-100/80' : 'text-gray-500'}`}>
        {subtitle}
      </p>
    )}
  </FadeIn>
)
