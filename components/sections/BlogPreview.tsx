'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { news } from '@/lib/data/news'

export function BlogPreview() {
  const posts = news.slice(0, 3)
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-silver" />
              <span className="text-silver-dark text-xs font-semibold uppercase tracking-[0.2em]">Latest News</span>
            </div>
            <h2 className="font-display italic text-4xl md:text-5xl text-navy">Get Inspired</h2>
          </div>
          <Link href="/news"
            className="text-navy font-semibold text-sm tracking-wide border-b border-silver pb-0.5 hover:border-navy transition-colors whitespace-nowrap self-start md:self-auto"
          >
            View All Articles →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <Link href={`/news#${post.slug}`} className="group block bg-silver-100 border border-silver/30 hover:border-navy/20 hover:shadow-navy-md transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Category tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white"
                    style={{ background: 'rgba(10,59,130,0.85)', backdropFilter: 'blur(4px)' }}>
                    Event Tips
                  </div>
                </div>

                <div className="p-5">
                  <div className="h-px bg-silver/30 mb-4 overflow-hidden">
                    <div className="h-full bg-navy w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                  <time className="text-silver-dark text-[11px] font-semibold uppercase tracking-[0.15em]">{post.date}</time>
                  <h3 className="font-display italic text-xl text-navy mt-2 mb-3 leading-snug group-hover:text-navy-light transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-slate/55 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-navy text-xs font-semibold tracking-wide mt-4 group-hover:gap-3 transition-all duration-300">
                    Read More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
