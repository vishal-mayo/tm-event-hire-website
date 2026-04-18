'use client'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeading({ eyebrow, title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`inline-block font-semibold text-xs uppercase tracking-[0.25em] mb-4 ${light ? 'text-silver' : 'text-silver'}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: '105%' }}
          whileInView={{ y: '0%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: eyebrow ? 0.08 : 0 }}
          className={`font-display font-bold tracking-tight text-4xl md:text-5xl leading-[1.1] ${light ? 'text-white' : 'text-navy'}`}
        >
          {title}
        </motion.h2>
      </div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-silver-dark'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
