import type { Metadata } from 'next';
import { getSeoByPath, getSettings } from '@/sanity/sanity-utils';
import { generateStaticPageMetadata } from '@/lib/seo-utils';
import CodeRescueClient from './CodeRescueClient';

export async function generateMetadata(): Promise<Metadata> {
  const [routeSeo, settings] = await Promise.all([
    getSeoByPath('/solutions/code-rescue'),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: routeSeo?.seo,
    fallbackTitle: 'Code Rescue',
    fallbackDescription: 'Emergency code rescue and technical debt resolution services to save troubled software projects.',
    settings,
    path: '/solutions/code-rescue',
  });
}

export default function CodeRescuePage() {
  return <CodeRescueClient />;
}