import type { Metadata } from 'next';
import { getPosts, getCategories, getSeoByPath, getSettings } from '@/sanity/sanity-utils';
import { generateStaticPageMetadata } from '@/lib/seo-utils';
import NewsClientWrapper from './NewsClientWrapper';

// --- Metadata ---
export async function generateMetadata(): Promise<Metadata> {
  const [routeSeo, settings] = await Promise.all([
    getSeoByPath('/news'),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: routeSeo?.seo,
    fallbackTitle: 'News & Insights',
    fallbackDescription: 'No fluff. Just architectural patterns, cost analysis, and management protocols we use daily.',
    settings,
    path: '/news',
  });
}

// --- Page Component (Server Component) ---
export default async function NewsPage() {
  const [initialPosts, categories] = await Promise.all([
    getPosts(),
    getCategories(),
  ]);

  return <NewsClientWrapper initialPosts={initialPosts} categories={categories} />;
}