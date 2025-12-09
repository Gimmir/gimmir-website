import type { Metadata } from 'next';
import { getSeoByPath, getSettings } from '@/sanity/sanity-utils';
import { generateStaticPageMetadata } from '@/lib/seo-utils';
import DedicatedTeamsClient from './DedicatedTeamsClient';

export async function generateMetadata(): Promise<Metadata> {
  const [routeSeo, settings] = await Promise.all([
    getSeoByPath('/solutions/dedicated-teams'),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: routeSeo?.seo,
    fallbackTitle: 'Dedicated Engineering Teams',
    fallbackDescription: 'Scale your engineering capacity with vetted, senior developers who integrate seamlessly with your existing team.',
    settings,
    path: '/solutions/dedicated-teams',
  });
}

export default function DedicatedTeamsPage() {
  return <DedicatedTeamsClient />;
}
