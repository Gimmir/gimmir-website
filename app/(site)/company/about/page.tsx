import type { Metadata } from 'next';
import { getSeoByPath, getSettings } from '@/sanity/sanity-utils';
import { generateStaticPageMetadata } from '@/lib/seo-utils';
import { AboutHeroSection } from "@/components/sections/about/hero";
import { OriginStorySection } from "@/components/sections/about/origin-story";
import { OurDnaSection } from "@/components/sections/about/our-dna";
import { GlobalInfrastructureSection } from "@/components/sections/about/global-infrastructure";
import { LeadershipSection } from "@/components/sections/about/leadership";
import { GimmirGuaranteeSection } from "@/components/sections/about/gimmir-guarantee";
import { AboutCTASection } from "@/components/sections/about/cta";

export async function generateMetadata(): Promise<Metadata> {
  const [routeSeo, settings] = await Promise.all([
    getSeoByPath('/company/about'),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: routeSeo?.seo,
    fallbackTitle: 'About Gimmir',
    fallbackDescription: 'Learn about Gimmir - our mission, values, and the team behind investor-ready software development.',
    settings,
    path: '/company/about',
  });
}

export default function AboutPage() {
  return (
    <div className="bg-[#050810] min-h-screen">
      <AboutHeroSection />
      <OriginStorySection />
      <OurDnaSection /> 
      <GlobalInfrastructureSection />
      <LeadershipSection />
      <GimmirGuaranteeSection />
      <AboutCTASection />
    </div>
  );
}
