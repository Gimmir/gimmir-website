import { Metadata } from 'next';
import { getPrivacyPolicy, formatLegalDate } from '@/sanity/sanity-utils';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy | Gimmir',
  description: 'Our commitment to your data sovereignty and privacy, compliant with GDPR, CCPA, and international standards.',
};

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