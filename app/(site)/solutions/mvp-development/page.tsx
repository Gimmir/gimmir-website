import type { Metadata } from 'next';
import { getSeoByPath, getSettings } from '@/sanity/sanity-utils';
import { generateStaticPageMetadata } from '@/lib/seo-utils';
import { HeroSection } from '@/components/sections/mvp-development/hero';
import { RealityCheckSection } from '@/components/sections/mvp-development/reality-check';
import { BoilerplateEngineSection } from '@/components/sections/mvp-development/boilerplate-engine';
import { TechStackSection } from '@/components/sections/mvp-development/tech-stack';
import { FounderProtectionSection } from '@/components/sections/mvp-development/founder-protection';
import { SeriesAClearanceSection } from '@/components/sections/mvp-development/series-a-clearance';
import { RoadmapSection } from '@/components/sections/mvp-development/roadmap';
import { FinalCTASection } from '@/components/sections/mvp-development/final-cta';

// ═══════════════════════════════════════════════════════════════════════════
// METADATA
// ═══════════════════════════════════════════════════════════════════════════

export async function generateMetadata(): Promise<Metadata> {
  const [routeSeo, settings] = await Promise.all([
    getSeoByPath('/solutions/mvp-development'),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: routeSeo?.seo,
    fallbackTitle: 'MVP Development',
    fallbackDescription: 'Launch your startup MVP in 6-8 weeks. Production-ready code that passes technical due diligence and scales with your growth.',
    settings,
    path: '/solutions/mvp-development',
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

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
