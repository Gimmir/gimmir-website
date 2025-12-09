import type { Metadata } from 'next';
import { getSeoByPath, getSettings } from '@/sanity/sanity-utils';
import { generateStaticPageMetadata } from '@/lib/seo-utils';
import { ContactDirectAccessSection } from "@/components/sections/contact/contact-direct-access";
import { ContactEfficiencyLoopSection } from "@/components/sections/contact/contact-efficiency-loop";
import { ContactGlobalPresenceSection } from "@/components/sections/contact/contact-global-presence";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero";
import { ContactInquiryFormSection } from "@/components/sections/contact/contact-inquiry-form";

export async function generateMetadata(): Promise<Metadata> {
  const [routeSeo, settings] = await Promise.all([
    getSeoByPath('/contact-us'),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: routeSeo?.seo,
    fallbackTitle: 'Contact Us',
    fallbackDescription: 'Get in touch with Gimmir. Schedule a consultation to discuss your software development needs.',
    settings,
    path: '/contact-us',
  });
}

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
