'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const themes = [
  { title: 'Weddings',         subtitle: 'Make your perfect day unforgettable', image: '/images/wedding.jpg',   href: '/event-themes/weddings',        alt: 'Wedding marquee Essex' },
  { title: 'Birthday Parties', subtitle: 'Celebrate in style, whatever the age', image: '/images/birthday.jpg',  href: '/event-themes/birthdays',       alt: 'Birthday party marquee' },
  { title: 'Corporate Events', subtitle: 'Impress clients and reward your team', image: '/images/corporate.jpg', href: '/event-themes/corporate-events', alt: 'Corporate event marquee' },
  { title: 'Funerals',         subtitle: 'A dignified space to remember loved ones', image: '/images/funeral.jpg',   href: '/event-themes/funerals',        alt: 'Funeral marquee hire' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export function EventThemes() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-silver-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-silver" />
            <span className="text-silver-dark text-xs font-semibold uppercase tracking-[0.2em]">Event Types</span>
            <div className="w-8 h-px bg-silver" />
          </div>
          <h2 className="font-display italic text-4xl md:text-5xl text-navy">We Cater For Every Occasion</h2>
        </motion.div>

        {/* Theme cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {themes.map((theme, i) => (
            <motion.div key={theme.href} variants={cardVariants}>
              <Link href={theme.href} className="group relative block overflow-hidden aspect-[3/4]">
                <Image
                  src={theme.image}
                  alt={theme.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy/40 to-transparent" />

                {/* Hover accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-silver scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: 0 }}
                      whileHover={{ y: 0 }}
                    >
                      <p className="text-silver/70 text-xs uppercase tracking-widest mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                        {theme.subtitle}
                      </p>
                      <h3 className="font-display italic text-2xl text-white leading-tight mb-3 group-hover:text-silver-light transition-colors duration-200">
                        {theme.title}
                      </h3>
                      <span className="text-silver text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
                        Explore <span className="translate-x-0 group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span>
                      </span>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
