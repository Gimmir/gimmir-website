import { HeroSection } from "@/components/sections/hero";
import { PainSection } from "@/components/sections/pain";
import { ValuePropSection } from "@/components/sections/value-prop";
import { ServicesSection } from "@/components/sections/services";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { ProjectSimulatorSection } from "@/components/sections/project-simulator";
import { LeadMagnetSection } from "@/components/sections/lead-magnet";
import { InsightsSection } from "@/components/sections/insights";
import { getLatestInsights } from "@/sanity/sanity-utils";

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
    </div>
  );
}
