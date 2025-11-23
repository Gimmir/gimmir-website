import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ALL_CASES } from '../data';

type Props = {
  params: { slug: string };
};

export default function CaseDetailPage({ params }: Props) {
  const slug = params.slug;
  const c = ALL_CASES.find((x) => x.id === slug);
  if (!c) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <header className="relative h-[420px] md:h-[520px] w-full">
        <Image
          src={c.image}
          alt={c.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-6 right-6 md:left-16 md:right-auto text-white">
          <div className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-2">
            {c.client} • {c.industry}
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            {c.title}
          </h1>
          <p className="mt-4 max-w-3xl text-gray-100 text-lg">{c.desc}</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {c.aboutClient && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-3">About the client</h2>
                <p className="text-gray-700">{c.aboutClient}</p>
              </div>
            )}

            {c.challenge && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Challenge</h3>
                <p className="text-gray-700">{c.challenge}</p>
              </div>
            )}

            {c.solution && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Solution</h3>
                <p className="text-gray-700">{c.solution}</p>
              </div>
            )}

            {c.process && c.process.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">Process</h3>
                <div className="space-y-4">
                  {c.process.map((step, idx) => (
                    <div key={idx} className="p-4 border border-gray-100 rounded-lg">
                      <div className="font-bold">{step.title}</div>
                      <div className="text-gray-700 mt-1">{step.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {c.gallery && c.gallery.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {c.gallery.map((g, i) => (
                    <div key={i} className="h-52 relative rounded overflow-hidden">
                      <Image src={g} alt={`${c.title} ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            {c.metrics && (
              <div className="p-5 border rounded-lg">
                <h4 className="font-bold mb-3">Key Metrics</h4>
                <div className="space-y-2">
                  {c.metrics.map((m: any, i: number) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="text-gray-600">{m.label}</div>
                      <div className="font-bold">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {c.techStack && (
              <div className="p-5 border rounded-lg">
                <h4 className="font-bold mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {c.techStack.map((t: string) => (
                    <span key={t} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-5 border rounded-lg">
              <h4 className="font-bold mb-3">Contact us</h4>
              <p className="text-gray-600 mb-4">Interested in a similar project?</p>
              <Link href="/contact">
                <button className="w-full px-4 py-2 bg-[#0062D1] text-white rounded-md font-bold">Start a Project</button>
              </Link>
            </div>
          </aside>
        </section>

        {c.testimonial && (
          <section className="mt-16 p-8 bg-gray-50 rounded-lg">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl italic text-gray-800">"{c.testimonial.text}"</p>
              <div className="mt-4 font-bold">— {c.testimonial.author}</div>
            </div>
          </section>
        )}

        <div className="mt-12 text-center">
          <Link href="/cases">
            <button className="px-6 py-3 rounded-lg border border-gray-200 bg-white font-bold">Back to cases</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
