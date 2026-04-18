'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowCircle } from '@/components/ui/ArrowCircle'

const themes = [
  { title: 'Birthday Parties', image: '/images/birthday.jpg', href: '/event-themes/birthdays',       alt: 'Pink birthday party marquee' },
  { title: 'Corporate Events', image: '/images/corporate.jpg', href: '/event-themes/corporate-events', alt: 'Corporate event marquee' },
  { title: 'Weddings',         image: '/images/wedding.jpg',   href: '/event-themes/weddings',         alt: 'Wedding marquee in Hertfordshire' },
]

export function EventThemes() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionHeading eyebrow="Event Types" title="We Cater For Every Occasion" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={theme.href} className="group relative block overflow-hidden rounded-2xl aspect-[3/4] transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl">
                <Image
                  src={theme.image}
                  alt={theme.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between gap-3">
                  <h3 className="font-sans font-bold text-white text-xl leading-snug">
                    {theme.title}
                  </h3>
                  <ArrowCircle />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
