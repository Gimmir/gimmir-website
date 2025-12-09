import type { Metadata } from 'next';
import { HeroSection } from "@/components/sections/hero";
import { PainSection } from "@/components/sections/pain";
import { ValuePropSection } from "@/components/sections/value-prop";
import { ServicesSection } from "@/components/sections/services";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { ProjectSimulatorSection } from "@/components/sections/project-simulator";
import { LeadMagnetSection } from "@/components/sections/lead-magnet";
import { InsightsSection } from "@/components/sections/insights";
import { AgencyPartnershipSection } from "@/components/sections/agency-partnership";
import { getLatestInsights, getSeoByPath, getSettings } from "@/sanity/sanity-utils";
import { generateStaticPageMetadata } from "@/lib/seo-utils";

// ═══════════════════════════════════════════════════════════════════════════
// METADATA
// ═══════════════════════════════════════════════════════════════════════════

export async function generateMetadata(): Promise<Metadata> {
  const [routeSeo, settings] = await Promise.all([
    getSeoByPath('/'),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: routeSeo?.seo,
    fallbackTitle: 'Engineering Digital Assets That Pass Due Diligence',
    fallbackDescription: 'Gimmir builds investor-ready software. We deliver MVPs, dedicated engineering teams, and code rescue services that survive technical due diligence.',
    settings,
    path: '/',
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default async function Home() {
  // Fetch latest 3 posts (all layout types) for the Insights section
  const latestPosts = await getLatestInsights();

  return (
    <div className="animate-in fade-in duration-700 min-h-screen">
      <HeroSection />
      <PainSection />
      <ValuePropSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProjectSimulatorSection />
      <LeadMagnetSection />
      <InsightsSection posts={latestPosts} />
      <AgencyPartnershipSection />
    </div>
  );
}
