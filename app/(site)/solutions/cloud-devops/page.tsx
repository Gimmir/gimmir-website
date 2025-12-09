import type { Metadata } from 'next';
import { getSeoByPath, getSettings } from '@/sanity/sanity-utils';
import { generateStaticPageMetadata } from '@/lib/seo-utils';
import CloudDevOpsClient from './CloudDevOpsClient';

export async function generateMetadata(): Promise<Metadata> {
  const [routeSeo, settings] = await Promise.all([
    getSeoByPath('/solutions/cloud-devops'),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: routeSeo?.seo,
    fallbackTitle: 'Cloud & DevOps',
    fallbackDescription: 'Enterprise cloud infrastructure and DevOps solutions for scalable, secure, and compliant deployments.',
    settings,
    path: '/solutions/cloud-devops',
  });
}

export default function CloudDevOpsPage() {
  return <CloudDevOpsClient />;
}