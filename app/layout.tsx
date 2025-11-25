import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GlobalContactSection } from "@/components/sections/global-contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gimmir Website",
  description: "Engineering digital assets that pass due diligence.",
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
      <body className={`${inter.className} min-h-[100dvh] bg-[#020408] text-white font-sans selection:bg-[#0062d1] selection:text-white overflow-x-hidden w-full`}>
        <div className="fixed top-0 left-0 w-full h-[100dvh] pointer-events-none z-0">
           <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] sm:w-[80%] h-[400px] sm:h-[600px] bg-[#0062d1] rounded-[100%] blur-[80px] sm:blur-[120px] opacity-[0.15]"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        </div>
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <GlobalContactSection />
        <Footer />
      </body>
    </html>
  );
}
