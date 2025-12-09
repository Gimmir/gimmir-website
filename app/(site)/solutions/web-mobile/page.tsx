import type { Metadata } from 'next';
import { getSeoByPath, getSettings } from '@/sanity/sanity-utils';
import { generateStaticPageMetadata } from '@/lib/seo-utils';
import WebMobileClient from './WebMobileClient';

export async function generateMetadata(): Promise<Metadata> {
  const [routeSeo, settings] = await Promise.all([
    getSeoByPath('/solutions/web-mobile'),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: routeSeo?.seo,
    fallbackTitle: 'Web & Mobile Development',
    fallbackDescription: 'Full-stack web and mobile application development with modern technologies and best practices.',
    settings,
    path: '/solutions/web-mobile',
  });
}

export default function WebMobilePage() {
  return <WebMobileClient />;
}