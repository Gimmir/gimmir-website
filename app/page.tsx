import { HeroSection } from "@/components/sections/hero";
import { PainSection } from "@/components/sections/pain";
import { ValuePropSection } from "@/components/sections/value-prop";
import { ServicesSection } from "@/components/sections/services";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { ProjectSimulatorSection } from "@/components/sections/project-simulator";
import { LeadMagnetSection } from "@/components/sections/lead-magnet";
import { InsightsSection } from "@/components/sections/insights";

export default function Home() {
  return (
    <div className="animate-in fade-in duration-700">
      <HeroSection />
      <PainSection />
      <ValuePropSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProjectSimulatorSection />
      <LeadMagnetSection />
      <InsightsSection />
    </div>
  );
}
