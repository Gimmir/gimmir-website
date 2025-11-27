import { Metadata } from 'next';
import { getTermsOfService, formatLegalDate } from '@/sanity/sanity-utils';
import TermsOfServiceClient from './TermsOfServiceClient';

export const metadata: Metadata = {
  title: 'Terms of Service | Gimmir',
  description: 'Governing your use of Gimmir services, including payment terms, obligations, and the clear transfer of Intellectual Property rights.',
};

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