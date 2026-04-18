import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  index?: number
}

export function ServiceCard({ title, description, image, href, index = 0 }: ServiceCardProps) {
  return (
    <Link href={href} className="group block overflow-hidden bg-cream border border-stone/60 hover:border-silver/40 transition-colors duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="p-5 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-silver origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-xl text-navy mb-1.5 leading-snug">{title}</h3>
            <p className="text-navy/50 text-sm mb-3 leading-relaxed">{description}</p>
            <span className="text-silver text-sm font-medium tracking-wide group-hover:gap-2 transition-all">
              Learn More →
            </span>
          </div>
          <span className="font-display italic text-3xl text-navy/10 shrink-0 leading-none mt-1">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>
    </Link>
  )
}
