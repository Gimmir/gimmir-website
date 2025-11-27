import { client } from './lib/client';
import type { PortableTextBlock } from '@portabletext/types';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

export type LayoutType = 'standard' | 'technical' | 'magnet';

export interface TableOfContentsItem {
  title: string;
  id: string;
}

export interface SanityImage {
  asset: {
    _ref: string;
    url?: string;
  };
  alt?: string;
  caption?: string;
  hotspot?: {
    x: number;
    y: number;
  };
}

export interface SanityFile {
  asset: {
    _ref: string;
    url?: string;
  };
}

// Category type
export interface Category {
  id: string;
  title: string;
  slug: string;
  description?: string;
  order: number;
}

// Author type (for referenced author documents)
export interface Author {
  name: string;
  role?: string;
  isTeamAlias?: boolean;
  imageUrl?: string;
  linkedinUrl?: string;
}

// Base fields shared by all layouts
export interface NewsPostBase {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  author?: Author;
  category: string;
  layoutType: LayoutType;
  date: string;
  readTime?: string;
  description: string;
  tags?: string[];
  body?: PortableTextBlock[];
}

// Standard layout (Magazine View)
export interface StandardNewsPost extends NewsPostBase {
  layoutType: 'standard';
  imageUrl?: string;
  mainImage?: SanityImage;
}

// Technical layout (Documentation View)
export interface TechnicalNewsPost extends NewsPostBase {
  layoutType: 'technical';
  tableOfContents?: TableOfContentsItem[];
  version?: string;
  lastUpdated?: string;
}

// Magnet layout (Lead Gen/Download Gate)
export interface MagnetNewsPost extends NewsPostBase {
  layoutType: 'magnet';
  resourceFile?: SanityFile;
  resourceFileUrl?: string;
  magnetBenefits?: string[];
  resourceType?: string;
  fileSize?: string;
  downloadCount?: number;
}

// Union type for any news post
export type NewsPost = StandardNewsPost | TechnicalNewsPost | MagnetNewsPost;

// Simplified type for listing page (cards)
export interface NewsPostCard {
  id: string;
  title: string;
  slug: string;
  category: string;
  layoutType: LayoutType;
  date: string;
  readTime?: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  resourceFileUrl?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// GROQ QUERIES
// ═══════════════════════════════════════════════════════════════════════════

// Query for fetching all categories
const CATEGORIES_QUERY = `*[_type == "category"] | order(order asc) {
  "id": _id,
  title,
  "slug": slug.current,
  description,
  order
}`;

// Query for listing page (cards only - minimal data)
// Excludes drafts to only show published documents
// Uses coalesce to handle both old string-based categories and new reference-based categories
const NEWS_LIST_QUERY = `*[_type == "news" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  "category": coalesce(category->title, category, "Uncategorized"),
  layoutType,
  "date": _createdAt,
  readTime,
  description,
  "imageUrl": mainImage.asset->url,
  tags,
  "resourceFileUrl": resourceFile.asset->url
}`;

// Full query for detail page (all fields based on layoutType)
// Excludes drafts to only show published documents
// Uses coalesce to handle both old string-based categories and new reference-based categories
const NEWS_DETAIL_QUERY = `*[_type == "news" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
  "id": _id,
  title,
  subtitle,
  "slug": slug.current,
  "author": author->{
    name,
    role,
    isTeamAlias,
    "imageUrl": image.asset->url,
    linkedinUrl
  },
  "category": coalesce(category->title, category, "Uncategorized"),
  layoutType,
  "date": publishedAt,
  readTime,
  description,
  tags,
  body,
  
  // Standard layout fields
  "imageUrl": mainImage.asset->url,
  mainImage {
    asset->{
      _ref,
      url
    },
    alt,
    hotspot
  },
  
  // Technical layout fields
  tableOfContents,
  version,
  lastUpdated,
  
  // Magnet layout fields
  "resourceFileUrl": resourceFile.asset->url,
  resourceFile {
    asset->{
      _ref,
      url
    }
  },
  magnetBenefits,
  resourceType,
  fileSize,
  downloadCount
}`;

// Related posts query
// Excludes drafts to only show published documents
// Uses coalesce to handle both old string-based categories and new reference-based categories
const RELATED_POSTS_QUERY = `*[_type == "news" && (category->title == $category || category == $category) && _id != $excludeId && !(_id in path("drafts.**"))] | order(_createdAt desc)[0...$limit] {
  "id": _id,
  title,
  "slug": slug.current,
  "category": coalesce(category->title, category, "Uncategorized"),
  layoutType,
  "date": _createdAt,
  readTime,
  description,
  "imageUrl": mainImage.asset->url,
  tags
}`;

// ═══════════════════════════════════════════════════════════════════════════
// FALLBACK MOCK DATA
// ═══════════════════════════════════════════════════════════════════════════

const FALLBACK_CATEGORIES: Category[] = [
  { id: '1', title: 'Strategy', slug: 'strategy', order: 1 },
  { id: '2', title: 'Engineering', slug: 'engineering', order: 2 },
  { id: '3', title: 'Management', slug: 'management', order: 3 },
  { id: '4', title: 'Resources', slug: 'resources', order: 4 },
];

const FALLBACK_POSTS: NewsPostCard[] = [
  {
    id: '1',
    title: 'The Hidden Cost of Outsourcing',
    slug: 'hidden-cost-of-outsourcing',
    category: 'Strategy',
    layoutType: 'standard',
    date: '2025-03-12',
    readTime: '5 MIN READ',
    description: 'Why paying $20/hr often results in 3x total cost of ownership due to "communication lag" and refactoring loops.',
    tags: ['Cost Analysis', 'Vendor Risk']
  },
  {
    id: '2',
    title: 'Audit Protocol v2.0',
    slug: 'audit-protocol-v2',
    category: 'Engineering',
    layoutType: 'technical',
    date: '2025-02-28',
    readTime: '8 MIN READ',
    description: 'Deep dive into our 50-point architecture audit process. How we detect "Spaghetti Code" before it kills your roadmap.',
    tags: ['Security', 'System Design', 'Due Diligence']
  },
  {
    id: '3',
    title: 'Due Diligence Checklist',
    slug: 'due-diligence-checklist',
    category: 'Resources',
    layoutType: 'magnet',
    date: '2025-01-01',
    description: 'The exact checklist VCs use to audit your tech stack before Series A. Don\'t get caught with tech debt.',
    tags: ['PDF Guide', 'Fundraising']
  },
  {
    id: '4',
    title: 'React Native vs Native',
    slug: 'react-native-vs-native',
    category: 'Engineering',
    layoutType: 'technical',
    date: '2025-01-15',
    readTime: '6 MIN READ',
    description: 'Benchmark results: When to choose cross-platform and when to go pure Swift/Kotlin for high-load apps.',
    tags: ['Mobile', 'Performance', 'Benchmarks']
  },
  {
    id: '5',
    title: 'Managing Remote Squads',
    slug: 'managing-remote-squads',
    category: 'Management',
    layoutType: 'standard',
    date: '2024-12-10',
    readTime: '4 MIN READ',
    description: 'How to sync with a nearshore team without 3 AM meetings. Tools and rituals for async excellence.',
    tags: ['Culture', 'Async Work']
  },
  {
    id: '6',
    title: 'GDPR Compliance Guide',
    slug: 'gdpr-compliance-guide',
    category: 'Resources',
    layoutType: 'magnet',
    date: '2025-01-01',
    description: 'A practical guide for US startups hiring in Europe. Data sovereignty, contracts, and IP protection explained.',
    tags: ['Legal', 'Compliance', 'PDF']
  },
  {
    id: '7',
    title: 'Microservices vs Monolith',
    slug: 'microservices-vs-monolith',
    category: 'Engineering',
    layoutType: 'standard',
    date: '2024-11-22',
    readTime: '7 MIN READ',
    description: 'When to split your codebase and when to keep it simple. A pragmatic guide for CTOs.',
    tags: ['Architecture', 'Scaling']
  },
  {
    id: '8',
    title: 'Hiring in LatAm',
    slug: 'hiring-in-latam',
    category: 'Management',
    layoutType: 'standard',
    date: '2024-10-05',
    readTime: '5 MIN READ',
    description: 'Cultural nuances and legal frameworks for hiring remote engineers in Mexico and Brazil.',
    tags: ['Hiring', 'Remote']
  },
  {
    id: '9',
    title: 'Cloud Cost Optimization',
    slug: 'cloud-cost-optimization',
    category: 'Engineering',
    layoutType: 'technical',
    date: '2024-09-18',
    readTime: '6 MIN READ',
    description: 'Practical steps to reduce your AWS bill by 30% without sacrificing performance.',
    tags: ['AWS', 'FinOps']
  },
  {
    id: '10',
    title: 'CTO Handbook 2025',
    slug: 'cto-handbook-2025',
    category: 'Resources',
    layoutType: 'magnet',
    date: '2025-01-01',
    description: 'The ultimate guide to technical leadership in the age of AI. Download the full PDF.',
    tags: ['Leadership', 'PDF']
  },
  {
    id: '11',
    title: 'AI Integration Patterns',
    slug: 'ai-integration-patterns',
    category: 'Engineering',
    layoutType: 'technical',
    date: '2024-08-30',
    readTime: '9 MIN READ',
    description: 'How to integrate LLMs into your existing infrastructure securely and efficiently.',
    tags: ['AI', 'LLM', 'Integration']
  },
  {
    id: '12',
    title: 'The "No-Code" Trap',
    slug: 'the-no-code-trap',
    category: 'Strategy',
    layoutType: 'standard',
    date: '2024-08-12',
    readTime: '4 MIN READ',
    description: 'Why starting with No-Code might be faster but costlier in the long run for scalable products.',
    tags: ['No-Code', 'MVP']
  },
];

// Full mock data for detail pages
const FALLBACK_DETAIL_POSTS: Record<string, NewsPost> = {
  'audit-protocol-v2': {
    id: '2',
    title: 'Audit Protocol v2.0',
    subtitle: 'Our battle-tested methodology for assessing technical debt',
    slug: 'audit-protocol-v2',
    author: { name: 'Gimmir Engineering', role: 'Engineering Team', isTeamAlias: true },
    category: 'Engineering',
    layoutType: 'technical',
    date: '2025-02-28',
    readTime: '8 MIN READ',
    description: 'Deep dive into our 50-point architecture audit process. How we detect "Spaghetti Code" before it kills your roadmap.',
    tags: ['Security', 'System Design', 'Due Diligence'],
    version: 'v2.1',
    lastUpdated: '2025-02-28',
    tableOfContents: [
      { title: 'Executive Summary', id: 'executive-summary' },
      { title: 'The Problem', id: 'the-problem' },
      { title: 'Our Methodology', id: 'methodology' },
      { title: 'The 50-Point Checklist', id: 'checklist' },
      { title: 'Case Studies', id: 'case-studies' },
      { title: 'Implementation', id: 'implementation' },
    ],
  },
  'due-diligence-checklist': {
    id: '3',
    title: 'Due Diligence Checklist',
    subtitle: 'The exact framework VCs use to evaluate your tech',
    slug: 'due-diligence-checklist',
    author: { name: 'Gimmir Strategy', role: 'Strategy Team', isTeamAlias: true },
    category: 'Resources',
    layoutType: 'magnet',
    date: '2025-01-01',
    description: 'The exact checklist VCs use to audit your tech stack before Series A. Don\'t get caught with tech debt.',
    tags: ['PDF Guide', 'Fundraising'],
    magnetBenefits: [
      '47-point technical due diligence framework',
      'Red flag identification matrix',
      'Architecture documentation templates',
      'Security audit checklist',
      'Scalability assessment tools',
    ],
    resourceType: 'PDF + Excel Templates',
    fileSize: '2.4 MB',
    downloadCount: 1247,
  },
  'hidden-cost-of-outsourcing': {
    id: '1',
    title: 'The Hidden Cost of Outsourcing',
    subtitle: 'Why the cheapest option is rarely the most economical',
    slug: 'hidden-cost-of-outsourcing',
    author: { name: 'Gimmir Strategy', role: 'Strategy Team', isTeamAlias: true },
    category: 'Strategy',
    layoutType: 'standard',
    date: '2025-03-12',
    readTime: '5 MIN READ',
    description: 'Why paying $20/hr often results in 3x total cost of ownership due to "communication lag" and refactoring loops.',
    tags: ['Cost Analysis', 'Vendor Risk'],
    imageUrl: '/images/outsourcing-cost.jpg',
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// DATA FETCHING FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Fetches all categories for the news filter
 * @returns Array of Category objects
 */
export async function getCategories(): Promise<Category[]> {
  try {
    const categories = await client.fetch<Category[]>(
      CATEGORIES_QUERY,
      {},
      { next: { revalidate: 300 } }
    );

    if (!categories || categories.length === 0) {
      return FALLBACK_CATEGORIES;
    }

    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return FALLBACK_CATEGORIES;
  }
}

/**
 * Fetches all news posts for the listing page (cards only)
 * @returns Array of NewsPostCard objects
 */
export async function getPosts(): Promise<NewsPostCard[]> {
  try {
    const posts = await client.fetch<NewsPostCard[]>(
      NEWS_LIST_QUERY,
      {},
      { next: { revalidate: 60 } }
    );

    if (!posts || posts.length === 0) {
      return FALLBACK_POSTS;
    }

    return posts;
  } catch (error) {
    console.error('Error fetching news posts:', error);
    return FALLBACK_POSTS;
  }
}

/**
 * Fetches a single post by slug for the detail page (full data)
 * @param slug - The post slug
 * @returns Full NewsPost object or null if not found
 */
export async function getPostBySlug(slug: string): Promise<NewsPost | null> {
  try {
    const post = await client.fetch<NewsPost | null>(
      NEWS_DETAIL_QUERY,
      { slug },
      { next: { revalidate: 60 } }
    );

    if (!post) {
      // Try fallback
      return FALLBACK_DETAIL_POSTS[slug] || null;
    }

    return post;
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return FALLBACK_DETAIL_POSTS[slug] || null;
  }
}

/**
 * Fetches related posts (same category, excluding current post)
 * @param category - The category to filter by
 * @param excludeId - The ID of the current post to exclude
 * @param limit - Maximum number of posts to return
 * @returns Array of NewsPostCard objects
 */
export async function getRelatedPosts(
  category: string,
  excludeId: string,
  limit: number = 2
): Promise<NewsPostCard[]> {
  try {
    const posts = await client.fetch<NewsPostCard[]>(
      RELATED_POSTS_QUERY,
      { category, excludeId, limit: limit - 1 },
      { next: { revalidate: 60 } }
    );

    if (!posts || posts.length === 0) {
      // Return fallback related posts
      return FALLBACK_POSTS
        .filter(p => p.category === category && p.id !== excludeId)
        .slice(0, limit);
    }

    return posts;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return FALLBACK_POSTS
      .filter(p => p.category === category && p.id !== excludeId)
      .slice(0, limit);
  }
}

/**
 * Fetches posts by category
 * @param category - The category title to filter by
 * @returns Array of NewsPostCard objects
 */
export async function getPostsByCategory(category: string): Promise<NewsPostCard[]> {
  const query = `*[_type == "news" && (category->title == $category || category == $category)] | order(publishedAt desc) {
    "id": _id,
    title,
    "slug": slug.current,
    "category": coalesce(category->title, category, "Uncategorized"),
    layoutType,
    "date": publishedAt,
    readTime,
    description,
    "imageUrl": mainImage.asset->url,
    tags
  }`;

  try {
    const posts = await client.fetch<NewsPostCard[]>(
      query,
      { category },
      { next: { revalidate: 60 } }
    );

    if (!posts || posts.length === 0) {
      return FALLBACK_POSTS.filter(p => p.category === category);
    }

    return posts;
  } catch (error) {
    console.error(`Error fetching posts for category "${category}":`, error);
    return FALLBACK_POSTS.filter(p => p.category === category);
  }
}

/**
 * Fetches all unique tags from news posts
 * @returns Array of unique tag strings
 */
export async function getAllTags(): Promise<string[]> {
  const query = `*[_type == "news" && defined(tags)].tags[]`;

  try {
    const tags = await client.fetch<string[]>(
      query,
      {},
      { next: { revalidate: 300 } }
    );

    // Return unique tags
    return [...new Set(tags)];
  } catch (error) {
    console.error('Error fetching tags:', error);
    const allTags = FALLBACK_POSTS.flatMap(p => p.tags || []);
    return [...new Set(allTags)];
  }
}

/**
 * Fetches all slugs for static generation
 * @returns Array of slug strings
 */
export async function getAllSlugs(): Promise<string[]> {
  const query = `*[_type == "news"].slug.current`;

  try {
    const slugs = await client.fetch<string[]>(
      query,
      {},
      { next: { revalidate: 60 } }
    );

    return slugs || FALLBACK_POSTS.map(p => p.slug);
  } catch (error) {
    console.error('Error fetching slugs:', error);
    return FALLBACK_POSTS.map(p => p.slug);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// TYPE GUARDS
// ═══════════════════════════════════════════════════════════════════════════

export function isStandardPost(post: NewsPost): post is StandardNewsPost {
  return post.layoutType === 'standard';
}

export function isTechnicalPost(post: NewsPost): post is TechnicalNewsPost {
  return post.layoutType === 'technical';
}

export function isMagnetPost(post: NewsPost): post is MagnetNewsPost {
  return post.layoutType === 'magnet';
}

// ═══════════════════════════════════════════════════════════════════════════
// LAYOUT STYLE UTILITIES
// Fixed color scheme based on layoutType:
// - Standard: Blue (default brand color)
// - Technical: Emerald/Green
// - Magnet: Amber/Orange
// ═══════════════════════════════════════════════════════════════════════════

export interface LayoutStyles {
  // Tailwind color classes
  accentColor: string;
  bgAccent: string;
  bgAccentHover: string;
  borderAccent: string;
  textAccent: string;
  // Icon name (Lucide)
  icon: string;
  // Gradient for backgrounds
  gradientFrom: string;
  gradientTo: string;
}

const LAYOUT_STYLES: Record<LayoutType, LayoutStyles> = {
  standard: {
    accentColor: 'blue',
    bgAccent: 'bg-[#0062d1]/10',
    bgAccentHover: 'hover:bg-[#0062d1]/20',
    borderAccent: 'border-[#0062d1]/20',
    textAccent: 'text-[#0062d1]',
    icon: 'FileText',
    gradientFrom: 'from-[#0062d1]/20',
    gradientTo: 'to-cyan-500/10',
  },
  technical: {
    accentColor: 'emerald',
    bgAccent: 'bg-emerald-500/10',
    bgAccentHover: 'hover:bg-emerald-500/20',
    borderAccent: 'border-emerald-500/20',
    textAccent: 'text-emerald-400',
    icon: 'Terminal',
    gradientFrom: 'from-emerald-500/20',
    gradientTo: 'to-green-500/10',
  },
  magnet: {
    accentColor: 'amber',
    bgAccent: 'bg-amber-500/10',
    bgAccentHover: 'hover:bg-amber-500/20',
    borderAccent: 'border-amber-500/20',
    textAccent: 'text-amber-400',
    icon: 'Download',
    gradientFrom: 'from-amber-500/20',
    gradientTo: 'to-orange-500/10',
  },
};

/**
 * Get fixed styling based on layoutType
 * No more manual color/icon selection - derived automatically
 */
export function getLayoutStyles(layoutType: LayoutType): LayoutStyles {
  return LAYOUT_STYLES[layoutType] || LAYOUT_STYLES.standard;
}

/**
 * Get accent color class for a layout type
 */
export function getAccentColor(layoutType: LayoutType): string {
  return LAYOUT_STYLES[layoutType]?.accentColor || 'blue';
}

/**
 * Get icon name for a layout type
 */
export function getLayoutIcon(layoutType: LayoutType): string {
  return LAYOUT_STYLES[layoutType]?.icon || 'FileText';
}
