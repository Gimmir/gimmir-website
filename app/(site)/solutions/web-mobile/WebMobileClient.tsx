'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/web-mobile/hero';
import { ArchitectureSection } from '@/components/sections/web-mobile/architecture';
import { MobileStandardsSection } from '@/components/sections/web-mobile/mobile-standards';
import { ScalabilitySection } from '@/components/sections/web-mobile/scalability';
import { SecuritySection } from '@/components/sections/web-mobile/security';
import { DeliverablesSection } from '@/components/sections/web-mobile/deliverables';
import { QualitySection } from '@/components/sections/web-mobile/quality';
import { FinalCTA } from '@/components/sections/web-mobile/final-cta';

export default function WebMobileClient() {
  return (
    <div className="bg-[#020408] min-h-screen">
      <HeroSection />
      <ArchitectureSection />
      <MobileStandardsSection />
      <ScalabilitySection />
      <SecuritySection />
      <DeliverablesSection />
      <QualitySection />
      <FinalCTA />
    </div>
  );
}
