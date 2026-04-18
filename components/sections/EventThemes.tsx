'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

const themes = [
  { title: 'Birthday Parties', image: '/images/birthday.jpg', href: '/event-themes/birthdays', alt: 'Pink birthday party marquee' },
  { title: 'Corporate Events', image: '/images/corporate.jpg', href: '/event-themes/corporate-events', alt: 'Corporate event marquee' },
  { title: 'Weddings',         image: '/images/wedding.jpg',  href: '/event-themes/weddings',   alt: 'Wedding marquee in Hertfordshire' },
]

export function EventThemes() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionHeading eyebrow="Event Types" title="We Cater For Every Occasion" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={theme.href} className="group relative block overflow-hidden aspect-[3/4] rounded-sm">
                <Image
                  src={theme.image}
                  alt={theme.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent group-hover:from-navy/90 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">{theme.title}</h3>
                  <span className="text-silver font-semibold text-sm tracking-wide">Learn More →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
