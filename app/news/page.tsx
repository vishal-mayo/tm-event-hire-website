import type { Metadata } from 'next'
import Image from 'next/image'
import { news } from '@/lib/data/news'
import { CallbackCTA } from '@/components/sections/CallbackCTA'

export const metadata: Metadata = {
  title: 'News & Inspiration | TM Event Hire Blog',
  description: 'Get inspired with event ideas, tips and news from the TM Event Hire team. Marquee parties, weddings, corporate events and more.',
}

export default function NewsPage() {
  const [featured, ...rest] = news

  return (
    <main className="pt-20">
      <section className="bg-navy-dark py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em] block mb-3">From Our Blog</span>
          <h1 className="font-display italic text-5xl md:text-6xl text-white">Get Inspired.</h1>
          <p className="text-white/50 text-lg mt-2">Ideas, tips and news from the TM Event Hire team.</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">

          {/* Featured article */}
          {featured && (
            <article id={featured.slug} className="grid md:grid-cols-2 gap-0 mb-16 border border-stone/60 overflow-hidden">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">{featured.date}</span>
                <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-4 leading-snug">{featured.title}</h2>
                <p className="text-navy/55 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="text-navy/60 text-sm leading-relaxed whitespace-pre-line border-t border-stone pt-6">{featured.content}</div>
              </div>
            </article>
          )}

          {/* Remaining articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <article key={post.slug} id={post.slug} className="border border-stone/60 overflow-hidden bg-white">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">{post.date}</span>
                  <h2 className="font-display italic text-xl text-navy mt-2 mb-3 leading-snug">{post.title}</h2>
                  <p className="text-navy/55 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="text-navy/50 text-sm leading-relaxed whitespace-pre-line border-t border-stone pt-4">{post.content}</div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <CallbackCTA />
    </main>
  )
}
