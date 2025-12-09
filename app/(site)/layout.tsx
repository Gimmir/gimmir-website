import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GlobalContactSection } from "@/components/sections/global-contact";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[120vh] pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] sm:w-[80%] h-[400px] sm:h-[600px] bg-[#0062d1] rounded-[100%] blur-[80px] sm:blur-[120px] opacity-[0.15]"></div>
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <GlobalContactSection />
      <Footer />
    </>
  );
}
