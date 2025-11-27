import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gimmir Website",
  description: "Engineering digital assets that pass due diligence.",
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
    title: "Gimmir",
  },
};

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
