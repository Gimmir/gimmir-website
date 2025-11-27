import { notFound } from 'next/navigation';
import { toHTML } from '@portabletext/to-html';
import type { Metadata } from 'next';
import { 
  getPostBySlug, 
  getRelatedPosts, 
  getAllSlugs,
} from '@/sanity/sanity-utils';
import ArticleClient, { type ArticleData } from './ArticleClient';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// ═══════════════════════════════════════════════════════════════════════════
// PORTABLE TEXT TO HTML CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Using simplified components that work with @portabletext/to-html
const portableTextComponents = {
  types: {
    // Handle code blocks from @sanity/code-input
    code: ({ value }: { value: { code?: string; language?: string } }) => {
      const code = value?.code || '';
      const lang = value?.language || 'text';
      return `<pre><code class="language-${lang}">${escapeHtml(code)}</code></pre>`;
    },
    // Handle images
    image: ({ value }: { value: { asset?: { url?: string }; alt?: string } }) => {
      if (!value?.asset?.url) return '';
      return `<img src="${value.asset.url}" alt="${value.alt || ''}" class="rounded-lg" loading="lazy" />`;
    },
  },
  marks: {
    // Handle links with proper target for external URLs
    link: ({ value, children }: { value?: { href?: string }; children?: string }) => {
      const href = value?.href || '#';
      const isExternal = href.startsWith('http');
      if (isExternal) {
        return `<a href="${href}" target="_blank" rel="noopener noreferrer">${children || ''}</a>`;
      }
      return `<a href="${href}">${children || ''}</a>`;
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// DATA FETCHING
// ═══════════════════════════════════════════════════════════════════════════

async function getArticle(slug: string): Promise<ArticleData | null> {
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return null;
  }

  // Convert Portable Text body to HTML
  let bodyHtml = '';
  if (post.body && Array.isArray(post.body)) {
    try {
      bodyHtml = toHTML(post.body, { components: portableTextComponents });
    } catch (error) {
      console.error('Error converting Portable Text to HTML:', error);
      bodyHtml = '<p>Error loading content.</p>';
    }
  }

  // Return article data with converted body
  const { body, ...rest } = post;
  return {
    ...rest,
    body: bodyHtml,
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// STATIC GENERATION
// ═══════════════════════════════════════════════════════════════════════════

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ═══════════════════════════════════════════════════════════════════════════
// METADATA
// ═══════════════════════════════════════════════════════════════════════════

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Gimmir',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${post.title} | Gimmir`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : ['Gimmir Team'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT (Server Component)
// ═══════════════════════════════════════════════════════════════════════════

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  
  // Fetch article data
  const article = await getArticle(slug);

  // Handle 404
  if (!article) {
    notFound();
  }

  // Fetch related posts
  const relatedPosts = await getRelatedPosts(article.category, article.id, 2);

  return <ArticleClient article={article} relatedPosts={relatedPosts} />;
}
