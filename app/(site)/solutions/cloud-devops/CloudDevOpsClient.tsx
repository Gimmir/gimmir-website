'use client';

import React from 'react';
import { HeroSection } from '@/components/sections/solutions/cloud-devops/hero';
import { RootAccessProtocolSection } from '@/components/sections/solutions/cloud-devops/root-access-protocol';
import { ServicePillarsSection } from '@/components/sections/solutions/cloud-devops/service-pillars';
import { ComplianceShieldSection } from '@/components/sections/solutions/cloud-devops/compliance-shield';
import { TechStackSection } from '@/components/sections/solutions/cloud-devops/tech-stack';
import { CaseStudySection } from '@/components/sections/solutions/cloud-devops/case-study';
import { CTASection } from '@/components/sections/solutions/cloud-devops/cta';

export default function CloudDevOpsClient() {
  return (
    <div className="bg-[#020408] min-h-screen selection:bg-sky-500/30">
      <HeroSection />
      <RootAccessProtocolSection />
      <ServicePillarsSection />
      <ComplianceShieldSection />
      <TechStackSection />
      <CaseStudySection />
      <CTASection />
    </div>
  );
}
