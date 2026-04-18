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
        <span className="inline-block text-silver font-semibold text-sm uppercase tracking-[0.2em] mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display italic text-4xl md:text-5xl leading-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-silver-dark'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
