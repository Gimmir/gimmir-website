import type { Metadata } from 'next';
import { urlForImage } from '@/sanity/lib/image';
import type { SanitySeo, SiteSettings, SanityImage } from '@/sanity/sanity-utils';

// Re-export for convenience
export type { SanitySeo, SiteSettings };

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Document with potential SEO fields
 */
export interface SeoableDocument {
  title?: string;
  description?: string;
  excerpt?: string;
  mainImage?: SanityImage;
  seo?: SanitySeo;
  slug?: string;
  publishedAt?: string;
  author?: { name?: string };
  tags?: string[];
}

/**
 * Options for generating metadata
 */
export interface GenerateMetadataOptions {
  /** The Sanity document with SEO fields */
  document: SeoableDocument;
  /** Global site settings */
  settings: SiteSettings;
  /** Page type for Open Graph (default: 'website') */
  type?: 'website' | 'article';
  /** Override the URL path (without base URL) */
  path?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Generate an absolute URL from a relative path
 */
function getAbsoluteUrl(baseUrl: string, path?: string): string {
  const cleanBase = baseUrl.replace(/\/$/, '');
  if (!path) return cleanBase;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}

/**
 * Get image URL with dimensions for Open Graph
 */
function getOgImageUrl(
  image: SanityImage | undefined,
  width = 1200,
  height = 630
): { url: string; width: number; height: number; alt?: string } | null {
  if (!image) return null;
  
  const imageUrl = urlForImage(image)?.width(width).height(height).url();
  if (!imageUrl) return null;
  
  return {
    url: imageUrl,
    width,
    height,
    alt: image.alt,
  };
}

/**
 * Apply title template to a title
 */
function applyTitleTemplate(title: string, template: string): string {
  if (!template.includes('%s')) {
    return title;
  }
  return template.replace('%s', title);
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN FUNCTION
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Generate Next.js Metadata object from Sanity document and settings
 * 
 * Fallback logic:
 * - metaTitle: seo.metaTitle -> document.title -> settings.siteTitle
 * - metaDescription: seo.metaDescription -> document.description/excerpt -> settings.defaultMetaDescription
 * - openGraphImage: seo.openGraphImage -> document.mainImage -> settings.defaultOgImage
 * 
 * @example
 * ```ts
 * export async function generateMetadata({ params }: Props): Promise<Metadata> {
 *   const [post, settings] = await Promise.all([
 *     getPostBySlug(params.slug),
 *     getSettings(),
 *   ]);
 *   
 *   return generateSeoMetadata({
 *     document: post,
 *     settings,
 *     type: 'article',
 *     path: `/news/${post.slug}`,
 *   });
 * }
 * ```
 */
export function generateSeoMetadata({
  document,
  settings,
  type = 'website',
  path,
}: GenerateMetadataOptions): Metadata {
  const seo = document.seo || {};

  // ─────────────────────────────────────────────────────────────────────────
  // Title: seo.metaTitle -> document.title -> settings.siteTitle
  // ─────────────────────────────────────────────────────────────────────────
  const rawTitle = seo.metaTitle || document.title || settings.siteTitle;
  const formattedTitle = applyTitleTemplate(rawTitle, settings.titleTemplate);

  // ─────────────────────────────────────────────────────────────────────────
  // Description: seo.metaDescription -> document.description/excerpt -> default
  // ─────────────────────────────────────────────────────────────────────────
  const description =
    seo.metaDescription ||
    document.description ||
    document.excerpt ||
    settings.defaultMetaDescription;

  // ─────────────────────────────────────────────────────────────────────────
  // Open Graph Image: seo.openGraphImage -> document.mainImage -> default
  // ─────────────────────────────────────────────────────────────────────────
  const ogImage = getOgImageUrl(
    seo.openGraphImage || document.mainImage || settings.defaultOgImage
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Canonical URL
  // ─────────────────────────────────────────────────────────────────────────
  const canonicalUrl = seo.canonicalUrl || (path ? getAbsoluteUrl(settings.siteUrl, path) : undefined);

  // ─────────────────────────────────────────────────────────────────────────
  // Build Metadata Object
  // ─────────────────────────────────────────────────────────────────────────
  const metadata: Metadata = {
    title: formattedTitle,
    description,
    ...(seo.noIndex && {
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
    }),
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
    openGraph: {
      title: rawTitle,
      description,
      type,
      siteName: settings.siteTitle,
      ...(canonicalUrl && { url: canonicalUrl }),
      ...(ogImage && {
        images: [ogImage],
      }),
      ...(type === 'article' && {
        publishedTime: document.publishedAt,
        authors: document.author?.name ? [document.author.name] : undefined,
        tags: document.tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: rawTitle,
      description,
      ...(ogImage && { images: [ogImage.url] }),
      ...(settings.twitterHandle && {
        creator: `@${settings.twitterHandle}`,
        site: `@${settings.twitterHandle}`,
      }),
    },
    ...(settings.facebookAppId && {
      facebook: {
        appId: settings.facebookAppId,
      },
    }),
  };

  return metadata;
}

// ═══════════════════════════════════════════════════════════════════════════
// ROOT METADATA GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Generate root metadata for the entire site
 * Use this in app/layout.tsx
 */
export function generateRootMetadata(settings: SiteSettings): Metadata {
  const ogImage = getOgImageUrl(settings.defaultOgImage);

  return {
    metadataBase: new URL(settings.siteUrl),
    title: {
      default: settings.siteTitle,
      template: settings.titleTemplate,
    },
    description: settings.defaultMetaDescription,
    openGraph: {
      title: settings.siteTitle,
      description: settings.defaultMetaDescription,
      siteName: settings.siteTitle,
      type: 'website',
      locale: 'en_US',
      ...(ogImage && { images: [ogImage] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: settings.siteTitle,
      description: settings.defaultMetaDescription,
      ...(ogImage && { images: [ogImage.url] }),
      ...(settings.twitterHandle && {
        creator: `@${settings.twitterHandle}`,
        site: `@${settings.twitterHandle}`,
      }),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// STATIC PAGE METADATA GENERATOR
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Options for generating static page metadata
 */
export interface StaticPageMetadataOptions {
  /** SEO object from routeSeo or singleton document */
  seo?: SanitySeo;
  /** Fallback title if seo.metaTitle is not set */
  fallbackTitle: string;
  /** Fallback description if seo.metaDescription is not set */
  fallbackDescription: string;
  /** Global site settings */
  settings: SiteSettings;
  /** The URL path for this page */
  path: string;
}

/**
 * Generate metadata for static pages (Home, Solutions, Contact, etc.)
 * Use this for hardcoded Next.js routes that have SEO managed via routeSeo documents
 * 
 * @example
 * ```ts
 * export async function generateMetadata(): Promise<Metadata> {
 *   const [routeSeo, settings] = await Promise.all([
 *     getSeoByPath('/solutions/mvp-development'),
 *     getSettings(),
 *   ]);
 *   
 *   return generateStaticPageMetadata({
 *     seo: routeSeo?.seo,
 *     fallbackTitle: 'MVP Development',
 *     fallbackDescription: 'Launch your startup in 6-8 weeks...',
 *     settings,
 *     path: '/solutions/mvp-development',
 *   });
 * }
 * ```
 */
export function generateStaticPageMetadata({
  seo,
  fallbackTitle,
  fallbackDescription,
  settings,
  path,
}: StaticPageMetadataOptions): Metadata {
  // ─────────────────────────────────────────────────────────────────────────
  // Title: seo.metaTitle -> fallbackTitle
  // ─────────────────────────────────────────────────────────────────────────
  const rawTitle = seo?.metaTitle || fallbackTitle;

  // ─────────────────────────────────────────────────────────────────────────
  // Description: seo.metaDescription -> fallbackDescription -> default
  // ─────────────────────────────────────────────────────────────────────────
  const description =
    seo?.metaDescription || fallbackDescription || settings.defaultMetaDescription;

  // ─────────────────────────────────────────────────────────────────────────
  // Open Graph Image: seo.openGraphImage -> settings.defaultOgImage
  // ─────────────────────────────────────────────────────────────────────────
  const ogImage = getOgImageUrl(seo?.openGraphImage || settings.defaultOgImage);

  // ─────────────────────────────────────────────────────────────────────────
  // Canonical URL
  // ─────────────────────────────────────────────────────────────────────────
  const canonicalUrl = seo?.canonicalUrl || getAbsoluteUrl(settings.siteUrl, path);

  // ─────────────────────────────────────────────────────────────────────────
  // Build Metadata Object
  // ─────────────────────────────────────────────────────────────────────────
  const metadata: Metadata = {
    title: rawTitle,
    description,
    ...(seo?.noIndex && {
      robots: {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
    }),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: rawTitle,
      description,
      type: 'website',
      siteName: settings.siteTitle,
      url: canonicalUrl,
      ...(ogImage && {
        images: [ogImage],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: rawTitle,
      description,
      ...(ogImage && { images: [ogImage.url] }),
      ...(settings.twitterHandle && {
        creator: `@${settings.twitterHandle}`,
        site: `@${settings.twitterHandle}`,
      }),
    },
  };

  return metadata;
}
