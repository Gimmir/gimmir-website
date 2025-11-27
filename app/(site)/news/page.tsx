import { getPosts } from '@/sanity/sanity-utils';
import NewsClientWrapper from './NewsClientWrapper';

// --- Metadata ---
export const metadata = {
  title: 'Engineering Insights | Gimmir',
  description: 'No fluff. Just architectural patterns, cost analysis, and management protocols we use daily.',
};

// --- Page Component (Server Component) ---
export default async function NewsPage() {
  const initialPosts = await getPosts();

  return <NewsClientWrapper initialPosts={initialPosts} />;
}