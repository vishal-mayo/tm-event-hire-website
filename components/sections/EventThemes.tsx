'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArrowCircle } from '@/components/ui/ArrowCircle'

declare global {
  interface Window {
    TweenLite: any; TimelineLite: any; SlowMo: any; Elastic: any; CSSPlugin: any
  }
}

const themes = [
  { title: 'Birthday Parties', image: '/images/birthday.jpg', href: '/event-themes/birthdays',       alt: 'Pink birthday party marquee' },
  { title: 'Corporate Events', image: '/images/corporate.jpg', href: '/event-themes/corporate-events', alt: 'Corporate event marquee' },
  { title: 'Weddings',         image: '/images/wedding.jpg',   href: '/event-themes/weddings',         alt: 'Wedding marquee in Hertfordshire' },
]

function ThemeCard({ theme }: { theme: typeof themes[0] }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const tlRef      = useRef<any>(null)

  useEffect(() => {
    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/plugins/CSSPlugin.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/easing/EasePack.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TweenLite.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.17.0/TimelineLite.min.js',
    ]
    if (window.TweenLite && window.TimelineLite) { init(); return }
    let loaded = 0
    scripts.forEach(src => {
      if (document.querySelector(`script[src="${src}"]`)) {
        loaded++; if (loaded === scripts.length) setTimeout(init, 50); return
      }
      const s = document.createElement('script')
      s.src = src
      s.onload = () => { loaded++; if (loaded === scripts.length) setTimeout(init, 50) }
      document.head.appendChild(s)
    })
  }, [])

  function init() {
    if (!wrapperRef.current) return
    const { TweenLite, TimelineLite, SlowMo, Elastic } = window
    if (!TweenLite || !TimelineLite || !SlowMo || !Elastic) return

    const el = wrapperRef.current
    const tl = el.querySelectorAll<HTMLElement>('.card-circle.top-left')
    const br = el.querySelectorAll<HTMLElement>('.card-circle.bottom-right')

    const tlAnim = new TimelineLite()
    tlAnim.to(tl, 1.2, { x: -25, y: -25, ease: SlowMo.ease.config(0.1, 0.7, false) })
    tlAnim.to(tl[0], 0.1, { scale: 0.2, x: '+=6', y: '-=2' })
    tlAnim.to(tl[1], 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1')
    tlAnim.to(tl[2], 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1')
    tlAnim.to(tl[0], 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 })
    tlAnim.to(tl[1], 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1')
    tlAnim.to(tl[2], 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1')

    const tlBt1 = new TimelineLite()
    tlBt1.set(tl, { x: 0, y: 0, rotation: -45 })
    tlBt1.add(tlAnim)

    const tl2Anim = new TimelineLite()
    tl2Anim.set(br, { x: 0, y: 0 })
    tl2Anim.to(br, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) })
    tl2Anim.to(br[0], 0.1, { scale: 0.2, x: '-=6', y: '+=3' })
    tl2Anim.to(br[1], 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1')
    tl2Anim.to(br[2], 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2')
    tl2Anim.to(br[0], 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 })
    tl2Anim.to(br[1], 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1')
    tl2Anim.to(br[2], 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1')

    const tlBt2 = new TimelineLite()
    tlBt2.set(br, { x: 0, y: 0, rotation: 45 })
    tlBt2.add(tl2Anim)

    const btTl = new TimelineLite({ paused: true })
    btTl.add(tlBt1)
    btTl.add(tlBt2, 0.2)
    btTl.timeScale(2.6)

    tlRef.current = btTl
  }

  return (
    <div ref={wrapperRef} className="relative" onMouseEnter={() => {
        wrapperRef.current?.querySelectorAll<HTMLElement>('.card-circle').forEach(c => { c.style.opacity = '1' })
        tlRef.current?.restart()
      }}>
      {/* Goo bubble circles — anchored at top-left corner, hidden until hover */}
      <span
        className="absolute pointer-events-none z-0"
        style={{ top: 0, left: 0, filter: 'url(#goo)', WebkitFilter: 'url(#goo)' }}
      >
        {[0, 1, 2].map(i => (
          <span key={`tl-${i}`} className="card-circle top-left absolute w-[32px] h-[32px] rounded-full"
            style={{ background: '#D4DCE8', top: -16, left: -16, opacity: 0 }} />
        ))}
      </span>

      {/* Goo bubble circles — anchored at bottom-right corner, hidden until hover */}
      <span
        className="absolute pointer-events-none z-0"
        style={{ bottom: 0, right: 0, filter: 'url(#goo)', WebkitFilter: 'url(#goo)' }}
      >
        {[0, 1, 2].map(i => (
          <span key={`br-${i}`} className="card-circle bottom-right absolute w-[32px] h-[32px] rounded-full"
            style={{ background: '#D4DCE8', top: -16, left: -16, opacity: 0 }} />
        ))}
      </span>

      <Link href={theme.href} className="group relative z-10 block overflow-hidden rounded-2xl aspect-[3/4] transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl">
        <Image
          src={theme.image}
          alt={theme.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex items-end justify-between gap-3">
          <h3 className="font-sans font-bold text-white text-xl leading-snug">
            {theme.title}
          </h3>
          <ArrowCircle />
        </div>
      </Link>
    </div>
  )
}

export function EventThemes() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionHeading eyebrow="Event Types" title="We Cater For Every Occasion" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ThemeCard theme={theme} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
