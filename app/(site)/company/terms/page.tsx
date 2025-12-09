import { Metadata } from 'next';
import { getTermsOfService, getTermsSeo, getSettings, formatLegalDate } from '@/sanity/sanity-utils';
import { generateStaticPageMetadata } from '@/lib/seo-utils';
import TermsOfServiceClient from './TermsOfServiceClient';

// ═══════════════════════════════════════════════════════════════════════════
// METADATA
// ═══════════════════════════════════════════════════════════════════════════

export async function generateMetadata(): Promise<Metadata> {
  const [termsSeo, settings] = await Promise.all([
    getTermsSeo(),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: termsSeo?.seo,
    fallbackTitle: termsSeo?.title || 'Terms of Service',
    fallbackDescription: 'Governing your use of Gimmir services, including payment terms, obligations, and the clear transfer of Intellectual Property rights.',
    settings,
    path: '/company/terms',
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default async function TermsOfServicePage() {
  const terms = await getTermsOfService();
  
  // Format the date for display
  const formattedDate = formatLegalDate(terms.lastRevision);

  return (
    <TermsOfServiceClient 
      terms={terms} 
      formattedDate={formattedDate}
    />
  );
}