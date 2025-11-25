import { AboutHeroSection } from "@/components/sections/about/hero";
import { OriginStorySection } from "@/components/sections/about/origin-story";
import { OurDnaSection } from "@/components/sections/about/our-dna";
import { GlobalInfrastructureSection } from "@/components/sections/about/global-infrastructure";
import { LeadershipSection } from "@/components/sections/about/leadership";
import { GimmirGuaranteeSection } from "@/components/sections/about/gimmir-guarantee";
import { AboutCTASection } from "@/components/sections/about/cta";

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
