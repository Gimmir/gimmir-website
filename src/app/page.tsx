'use client'

import { useState } from 'react'
import { Hero, Services, Industries, Cases, Stats, LatestInsights, Wizard, Contact } from '@/components/sections'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#0F172A] selection:bg-[#0062D1] selection:text-white">
      <Hero onNavigate={handleNavigate} />
      <Wizard />
      <Services />
      <Industries />
      <Cases onNavigate={handleNavigate} featured={true} />
      <Stats />
      <LatestInsights onNavigate={handleNavigate} />
      <Contact />
    </div>
  )
}
