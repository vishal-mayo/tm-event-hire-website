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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
          <div className="w-8 h-px bg-silver" />
          <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-silver/60' : 'text-silver-dark'}`}>
            {eyebrow}
          </span>
          {centered && <div className="w-8 h-px bg-silver" />}
        </div>
      )}
      <h2 className={`font-display italic text-4xl md:text-5xl leading-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-white/55' : 'text-slate/55'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
