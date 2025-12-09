'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/solutions/code-rescue/hero';
import { RedFlagsSection } from '@/components/sections/solutions/code-rescue/red-flags';
import { ForensicAuditSection } from '@/components/sections/solutions/code-rescue/forensic-audit';
import { RescueMethodologySection } from '@/components/sections/solutions/code-rescue/rescue-methodology';
import { GuaranteeSection } from '@/components/sections/solutions/code-rescue/guarantee';
import { ForensicToolkitSection } from '@/components/sections/solutions/code-rescue/forensic-toolkit';
import { FinalCTASection } from '@/components/sections/solutions/code-rescue/final-cta';

export default function CodeRescueClient() {
  return (
    <div className="bg-[#020408] min-h-screen selection:bg-[#0062d1] selection:text-white">
      <HeroSection />
      <RedFlagsSection />
      <ForensicAuditSection />
      <RescueMethodologySection />
      <GuaranteeSection />
      <ForensicToolkitSection />
      <FinalCTASection />
    </div>
  );
}
