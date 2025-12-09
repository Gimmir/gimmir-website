'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/how-we-work/hero';
import { CoreProblemSection } from '@/components/sections/how-we-work/core-problem';
import { PhaseOneSection } from '@/components/sections/how-we-work/phase-one';
import { PhaseTwoSection } from '@/components/sections/how-we-work/phase-two';
import { PhaseThreeSection } from '@/components/sections/how-we-work/phase-three';
import { FinalCTASection } from '@/components/sections/how-we-work/final-cta';

export default function HowWeWorkClient() {
  return (
    <div className="bg-[#020408] min-h-screen selection:bg-[#0062d1] selection:text-white">
      <HeroSection />
      <CoreProblemSection />
      <PhaseOneSection />
      <PhaseTwoSection />
      <PhaseThreeSection />
      <FinalCTASection />
    </div>
  );
}
