import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Gimmir Admin Studio',
  description: 'Sanity Studio for Gimmir Website',
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#101112',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
