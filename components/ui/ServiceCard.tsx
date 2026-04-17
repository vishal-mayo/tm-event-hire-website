import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
}

export function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="p-5 relative">
        <div
          className="absolute top-0 left-0 right-0 h-0.5 bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        />
        <h3 className="font-display text-xl font-bold text-navy mb-1">{title}</h3>
        <p className="text-grey-mid text-sm mb-3">{description}</p>
        <span className="text-gold font-semibold text-sm tracking-wide">Learn More →</span>
      </div>
    </Link>
  )
}
