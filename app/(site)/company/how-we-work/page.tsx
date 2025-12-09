import type { Metadata } from 'next';
import { getSeoByPath, getSettings } from '@/sanity/sanity-utils';
import { generateStaticPageMetadata } from '@/lib/seo-utils';
import HowWeWorkClient from './HowWeWorkClient';

export async function generateMetadata(): Promise<Metadata> {
  const [routeSeo, settings] = await Promise.all([
    getSeoByPath('/company/how-we-work'),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: routeSeo?.seo,
    fallbackTitle: 'How We Work',
    fallbackDescription: 'Our proven methodology for delivering production-ready software that passes technical due diligence.',
    settings,
    path: '/company/how-we-work',
  });
}

export default function HowWeWorkPage() {
  return <HowWeWorkClient />;
}