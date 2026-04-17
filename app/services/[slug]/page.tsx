import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { services } from '@/lib/data/services'
import { BubbleButton } from '@/components/ui/BubbleButton'
import { CallbackCTA } from '@/components/sections/CallbackCTA'

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.title} in Essex & Hertfordshire | TM Event Hire`,
    description: service.description.slice(0, 160),
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug)
  if (!service) notFound()

  return (
    <main className="pt-28">
      <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">Our Services</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-white/70 text-xl italic">{service.tagline}</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-navy text-lg leading-relaxed mb-8">{service.description}</p>
            {service.features && (
              <ul className="space-y-3 mb-8">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-navy">
                    <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 20 20" fill="white" className="w-3 h-3"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            )}
            <BubbleButton href="/get-a-quote" variant="gold">Get a Quote</BubbleButton>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {service.images.map((img, i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded-sm">
                <Image src={img} alt={`${service.title} ${i + 1}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallbackCTA />
    </main>
  )
}
