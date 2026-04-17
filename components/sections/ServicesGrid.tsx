'use client'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/ui/ServiceCard'

const featuredServices = [
  {
    title: 'Marquee Hire',
    description: 'Clear-span marquees for any occasion — from intimate garden parties to grand weddings.',
    image: '/images/marquee-1.jpg',
    href: '/services/marquees',
  },
  {
    title: 'Chinese Hat Hire',
    description: 'Elegant pagoda-style tents, perfect as standalone tents or beautiful additions to a main marquee.',
    image: '/images/chinese-hat-1.jpg',
    href: '/services/chinese-hats',
  },
  {
    title: 'Mobile Bar Hire',
    description: 'A range of mobile drinks bars — the perfect addition to any party or event.',
    image: '/images/bar-1.jpg',
    href: '/services/bars',
  },
  {
    title: 'Furniture Hire',
    description: 'Exquisite furniture items available to hire, tailored for every occasion and style.',
    image: '/images/furniture-1.jpg',
    href: '/services/furniture',
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="What We Offer"
            title="Quality Event Equipment & Marquee Hire For Events, Weddings & Parties"
            subtitle="Serving Essex, Hertfordshire and London with premium event hire for over 10 years."
          />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredServices.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ServiceCard {...service} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
