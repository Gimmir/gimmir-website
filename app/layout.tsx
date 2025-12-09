import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSettings } from "@/sanity/sanity-utils";
import { generateRootMetadata } from "@/lib/seo-utils";

const inter = Inter({ subsets: ["latin"] });

// Fetch settings and generate metadata at build/request time
export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  
  const rootMetadata = generateRootMetadata(settings);
  
  return {
    ...rootMetadata,
    icons: {
      icon: [
        { url: '/logo.svg?v=2', type: 'image/svg+xml' },
        { url: '/favicon.png?v=2', type: 'image/png' },
      ],
      apple: [
        { url: '/favicon.png?v=2' },
      ],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: settings.siteTitle,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-[100vh] bg-[#020408] text-white font-sans selection:bg-[#0062d1] selection:text-white w-full`}>
        {children}
      </body>
    </html>
  );
}
