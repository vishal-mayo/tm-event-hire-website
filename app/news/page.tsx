import type { Metadata } from 'next'
import Image from 'next/image'
import { news } from '@/lib/data/news'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CallbackCTA } from '@/components/sections/CallbackCTA'

export const metadata: Metadata = {
  title: 'News & Inspiration | TM Event Hire Blog',
  description: 'Get inspired with event ideas, tips and news from the TM Event Hire team. Marquee parties, weddings, corporate events and more.',
}

export default function NewsPage() {
  return (
    <main className="pt-28">
      <section className="bg-navy py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="From Our Blog" title="Get Inspired. Stay Up To Date." light />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map(post => (
            <article key={post.slug} id={post.slug} className="bg-white border border-grey-light overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">{post.date}</span>
                <h2 className="font-display text-xl font-bold text-navy mt-2 mb-3">{post.title}</h2>
                <p className="text-navy/60 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="text-navy/70 text-sm leading-relaxed whitespace-pre-line">{post.content}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CallbackCTA />
    </main>
  )
}
