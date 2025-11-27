import { ContactDirectAccessSection } from "@/components/sections/contact/contact-direct-access";
import { ContactEfficiencyLoopSection } from "@/components/sections/contact/contact-efficiency-loop";
import { ContactGlobalPresenceSection } from "@/components/sections/contact/contact-global-presence";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero";
import { ContactInquiryFormSection } from "@/components/sections/contact/contact-inquiry-form";

export default function ContactPage() {
  return (
    <div className="bg-[#050A14] min-h-screen">
      <ContactHeroSection />
      <ContactInquiryFormSection />
      <ContactDirectAccessSection />
      <ContactGlobalPresenceSection />
      <ContactEfficiencyLoopSection />
    </div>
  );
}
