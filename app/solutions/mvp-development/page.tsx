'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/mvp-development/hero';
import { RealityCheckSection } from '@/components/sections/mvp-development/reality-check';
import { BoilerplateEngineSection } from '@/components/sections/mvp-development/boilerplate-engine';
import { TechStackSection } from '@/components/sections/mvp-development/tech-stack';
import { FounderProtectionSection } from '@/components/sections/mvp-development/founder-protection';
import { SeriesAClearanceSection } from '@/components/sections/mvp-development/series-a-clearance';
import { RoadmapSection } from '@/components/sections/mvp-development/roadmap';
import { FinalCTASection } from '@/components/sections/mvp-development/final-cta';

export default function MvpDevelopmentPage() {
  return (
    <div className="bg-[#020408] min-h-screen text-slate-300 selection:bg-[#0062d1] selection:text-white">
      <HeroSection />
      <RealityCheckSection />
      <BoilerplateEngineSection />
      <TechStackSection />
      <FounderProtectionSection />
      <SeriesAClearanceSection />
      <RoadmapSection />
      <FinalCTASection />
    </div>
  );
}
