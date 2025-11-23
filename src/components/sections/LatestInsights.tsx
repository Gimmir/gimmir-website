'use client'

import { ArrowRight } from 'lucide-react'
import { FadeIn, SectionHeading, Button } from '@/components/ui'

export const LatestInsights = ({ onNavigate }: { onNavigate?: (page: string) => void }) => {
  const posts = [
    { 
      date: 'OCT 24, 2024', 
      category: 'ENGINEERING', 
      title: 'Migrating Legacy Banking Systems to Microservices' 
    },
    { 
      date: 'OCT 12, 2024', 
      category: 'AI TECH', 
      title: 'Implementing LLMs in Customer Support: A Technical Guide' 
    },
    { 
      date: 'SEP 28, 2024', 
      category: 'COMPANY', 
      title: 'Gimmir Ranked Top B2B Developer in Eastern Europe' 
    },
  ]

  return (
    <section id="insights" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          label="Thought Leadership" 
          title="Latest Insights" 
          subtitle="Technical deep dives, company updates, and industry analysis from our lead engineers." 
        />
        
        <div className="flex flex-col border-t border-gray-200">
          {posts.map((post, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="group flex flex-col md:flex-row items-start md:items-center py-6 md:py-10 border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 cursor-pointer px-2 md:px-4 -mx-2 md:-mx-4 rounded-xl">
                <div className="flex flex-wrap items-center gap-3 md:gap-6 w-full md:w-auto mb-3 md:mb-0 md:mr-12">
                  <div className="text-[10px] md:text-xs font-bold text-gray-400 tracking-widest uppercase shrink-0 min-w-[80px]">
                    {post.date}
                  </div>
                  <span className="inline-flex items-center justify-center px-2.5 py-1 md:px-3 md:py-1 rounded-full bg-blue-50 text-[#0062D1] border border-blue-100 text-[9px] md:text-[10px] font-bold uppercase tracking-wider shrink-0">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="flex-1 text-lg md:text-2xl font-bold text-[#0F172A] group-hover:text-[#0062D1] transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 text-gray-400 group-hover:bg-[#0062D1] group-hover:text-white group-hover:border-[#0062D1] transition-all ml-6 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 shrink-0">
                  <ArrowRight size={18} />
                </div>
                
                <div className="md:hidden w-full flex justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={16} className="text-[#0062D1]" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">Read All Articles</Button>
        </div>
      </div>
    </section>
  )
}
