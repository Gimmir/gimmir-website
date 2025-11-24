import { HeroSection } from '@/components/sections/hero';
import { PainSection } from '@/components/sections/pain';
import { ValuePropSection } from '@/components/sections/value-prop';
import ServicesSection from '@/components/sections/services';
import CaseStudiesSection from '@/components/sections/case-studies';
import ProjectSimulatorSection from '@/components/sections/project-simulator';
import LeadMagnetSection from '@/components/sections/lead-magnet';
import InsightsSection from '@/components/sections/insights';
import GlobalContactSection from '@/components/sections/global-contact';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#020408] text-white">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] sm:w-[80%] h-[400px] sm:h-[600px] bg-[#0062d1] rounded-[100%] blur-[80px] sm:blur-[120px] opacity-[0.15]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      <HeroSection />
      <PainSection />
      <ValuePropSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ProjectSimulatorSection />
      <LeadMagnetSection />
      <InsightsSection />
      <GlobalContactSection />
    </div>
  );
}
