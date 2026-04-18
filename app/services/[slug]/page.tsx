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
    <main className="pt-20">
      {/* Hero banner */}
      <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-silver font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Our Services</span>
          <h1 className="font-display italic text-5xl md:text-7xl text-white mb-4">{service.title}</h1>
          <p className="text-white/60 text-xl">{service.tagline}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Text */}
            <div>
              <div className="w-8 h-px bg-silver mb-8" />
              <p className="text-navy/70 text-lg leading-relaxed mb-6">{service.description}</p>
              {service.longDescription && (
                <div className="space-y-4">
                  {service.longDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="text-navy/60 leading-relaxed">{para}</p>
                  ))}
                </div>
              )}
              <div className="mt-8">
                <BubbleButton href="/get-a-quote" variant="gold">Get a Quote</BubbleButton>
              </div>
            </div>

            {/* Images */}
            <div className="space-y-4">
              {service.images.map((img, i) => (
                <div key={i} className="relative overflow-hidden border border-stone/60">
                  <div className="aspect-video relative">
                    <Image src={img} alt={`${service.title} ${i + 1}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority={i === 0} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features + Use Cases */}
          <div className="grid md:grid-cols-2 gap-12 border-t border-stone pt-16">
            {service.features && (
              <div>
                <h2 className="font-display italic text-3xl text-navy mb-6">What&apos;s included</h2>
                <ul className="space-y-3">
                  {service.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-navy/70">
                      <span className="w-5 h-5 rounded-full bg-silver flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 20 20" fill="white" className="w-3 h-3">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.useCases && (
              <div>
                <h2 className="font-display italic text-3xl text-navy mb-6">Perfect for</h2>
                <div className="flex flex-wrap gap-2">
                  {service.useCases.map(u => (
                    <span key={u} className="px-4 py-2 border border-stone text-navy/70 text-sm bg-stone/30">
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CallbackCTA />
    </main>
  )
}
