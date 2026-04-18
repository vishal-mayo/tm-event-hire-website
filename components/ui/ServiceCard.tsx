'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  index?: number
}

export function ServiceCard({ title, description, image, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      style={{ transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)' }}
    >
      <Link href={href} className="group block overflow-hidden bg-white shadow-navy-sm hover:shadow-navy-lg transition-shadow duration-400">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {/* Number overlay */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-navy"
            style={{ background: 'rgba(212,220,232,0.9)', backdropFilter: 'blur(4px)' }}>
            {String(index + 1).padStart(2, '0')}
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-400" />
        </div>

        {/* Content */}
        <div className="p-5 relative">
          {/* Animated silver line */}
          <div className="h-px bg-silver/30 mb-4 overflow-hidden">
            <div className="h-full bg-navy w-0 group-hover:w-full transition-all duration-500" />
          </div>

          <h3 className="font-display italic text-xl text-navy mb-2 leading-snug group-hover:text-navy-light transition-colors duration-200">
            {title}
          </h3>
          <p className="text-slate/60 text-sm mb-4 leading-relaxed line-clamp-2">{description}</p>

          <span className="inline-flex items-center gap-2 text-navy text-sm font-semibold tracking-wide group-hover:gap-4 transition-all duration-300">
            Learn More
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              className="text-silver"
            >
              →
            </motion.span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
