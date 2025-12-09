import { Metadata } from 'next';
import { getPrivacyPolicy, getPrivacySeo, getSettings, formatLegalDate } from '@/sanity/sanity-utils';
import { generateStaticPageMetadata } from '@/lib/seo-utils';
import PrivacyPolicyClient from './PrivacyPolicyClient';

// ═══════════════════════════════════════════════════════════════════════════
// METADATA
// ═══════════════════════════════════════════════════════════════════════════

export async function generateMetadata(): Promise<Metadata> {
  const [privacySeo, settings] = await Promise.all([
    getPrivacySeo(),
    getSettings(),
  ]);

  return generateStaticPageMetadata({
    seo: privacySeo?.seo,
    fallbackTitle: privacySeo?.title || 'Privacy Policy',
    fallbackDescription: 'Our commitment to your data sovereignty and privacy, compliant with GDPR, CCPA, and international standards.',
    settings,
    path: '/company/privacy-policy',
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default async function PrivacyPolicyPage() {
  const policy = await getPrivacyPolicy();
  
  // Format the date for display
  const formattedDate = formatLegalDate(policy.lastUpdated);

  return (
    <PrivacyPolicyClient 
      policy={policy} 
      formattedDate={formattedDate}
    />
  );
}