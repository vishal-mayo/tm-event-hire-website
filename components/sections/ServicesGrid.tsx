'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ServiceCard } from '@/components/ui/ServiceCard'

const featuredServices = [
  { title: 'Marquee Hire',      description: 'Clear-span marquees for any occasion — from intimate garden parties to grand weddings.', image: '/images/marquee-1.jpg',    href: '/services/marquees' },
  { title: 'Chinese Hat Hire',  description: 'Elegant pagoda-style tents — standalone or as a stunning addition to a main marquee.',  image: '/images/chinese-hat-1.jpg', href: '/services/chinese-hats' },
  { title: 'Mobile Bar Hire',   description: 'A range of mobile drinks bars — the perfect addition to any party or event.',           image: '/images/bar-1.jpg',         href: '/services/bars' },
  { title: 'Furniture Hire',    description: 'Exquisite furniture items tailored for every occasion, style and guest count.',         image: '/images/furniture-1.jpg',   href: '/services/furniture' },
]

export function ServicesGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-silver-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
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
              <span className="text-silver-dark text-xs font-semibold uppercase tracking-[0.2em]">What We Offer</span>
            </div>
            <h2 className="font-display italic text-4xl md:text-5xl text-navy leading-tight max-w-xl">
              Premium Equipment for Every Event
            </h2>
          </div>
          <p className="text-slate/60 max-w-sm leading-relaxed md:text-right">
            Serving Essex, Hertfordshire and London with professional event hire for over 10 years.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {featuredServices.map((service, i) => (
            <ServiceCard key={service.href} {...service} index={i} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/services"
            className="inline-flex items-center gap-2 text-navy font-semibold text-sm tracking-wide border-b border-silver pb-0.5 hover:border-navy transition-colors duration-200 hover:gap-4"
          >
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
