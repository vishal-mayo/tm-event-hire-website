'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { news } from '@/lib/data/news'

export function BlogPreview() {
  const posts = news.slice(0, 3)
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionHeading eyebrow="Latest News" title="Get Inspired. Stay Up To Date." />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/news#${post.slug}`} className="group block overflow-hidden bg-white border border-stone/60 hover:border-silver/40 transition-colors duration-300">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-silver text-xs font-semibold uppercase tracking-[0.15em]">{post.date}</span>
                  <h3 className="font-display italic text-xl text-navy mt-2 mb-3 leading-snug group-hover:text-silver transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-navy/60 text-sm group-hover:text-silver transition-colors">Continue reading →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
