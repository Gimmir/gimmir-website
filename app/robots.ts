import { MetadataRoute } from 'next';
import { getSettings } from '@/sanity/sanity-utils';

/**
 * Dynamic robots.txt generation for Next.js
 * Points to the sitemap and sets crawling rules
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await getSettings();
  const baseUrl = settings.siteUrl || 'https://gimmir.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/gadmin/',       // Sanity Studio
          '/api/',          // API routes
          '/_next/',        // Next.js internals
          '/private/',      // Any private routes
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
