'use client';

import React from 'react';
import { DedicatedHero } from '@/components/sections/dedicated-teams/hero';
import { GuaranteeSection } from '@/components/sections/dedicated-teams/guarantee';
import { EngineerSpecsSection } from '@/components/sections/dedicated-teams/engineer-specs';
import { VettingSection } from '@/components/sections/dedicated-teams/vetting';
import { ManagementSection } from '@/components/sections/dedicated-teams/management';
import { TimezoneSection } from '@/components/sections/dedicated-teams/timezone';
import { StatsSection } from '@/components/sections/dedicated-teams/stats';
import { FinalCTA } from '@/components/sections/dedicated-teams/final-cta';

export default function DedicatedTeamsClient() {
  return (
    <div className="bg-[#020408] min-h-screen">
      <DedicatedHero />
      <GuaranteeSection />
      <EngineerSpecsSection />
      <VettingSection />
      <ManagementSection />
      <TimezoneSection />
      <StatsSection />
      <FinalCTA />
    </div>
  );
}
