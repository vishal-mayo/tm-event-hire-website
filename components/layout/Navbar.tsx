'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'
import { BubbleButton } from '@/components/ui/BubbleButton'

const services = [
  { label: 'Marquee Hire',       href: '/services/marquees' },
  { label: 'Chinese Hat Hire',   href: '/services/chinese-hats' },
  { label: 'Mobile Bar Hire',    href: '/services/bars' },
  { label: 'Furniture Hire',     href: '/services/furniture' },
  { label: 'Kitchen Equipment',  href: '/services/kitchen-equipment' },
  { label: 'Tableware',          href: '/services/tableware' },
]

const themes = [
  { label: 'Weddings',         href: '/event-themes/weddings' },
  { label: 'Birthdays',        href: '/event-themes/birthdays' },
  { label: 'Funerals',         href: '/event-themes/funerals' },
  { label: 'Corporate Events', href: '/event-themes/corporate-events' },
]

const navLinks = [
  { label: 'Home',          href: '/' },
  { label: 'Services',      href: '/services',      children: services },
  { label: 'Event Themes',  href: '/event-themes',  children: themes },
  { label: 'News',          href: '/news' },
  { label: 'About',         href: '/about' },
  { label: 'Contact Us',    href: '/contact-us' },
]

export function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 glass-navy ${
        scrolled ? 'shadow-navy-md' : ''
      }`}>
        {/* Top strip */}
        <div className="border-b border-white/8 px-4 sm:px-6 lg:px-8 py-1.5 hidden lg:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-silver/60 text-xs tracking-wider">Premier Event Hire · Essex · Hertfordshire · London</span>
            <a href="tel:+447595979451" className="flex items-center gap-1.5 text-silver text-xs font-medium hover:text-white transition-colors">
              <Phone size={11} />
              +44 7595 979 451
            </a>
          </div>
        </div>

        {/* Main nav */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 relative rounded-sm overflow-hidden ring-1 ring-white/20">
              <Image src="/images/logo.jpg" alt="TM Event Hire" fill className="object-contain" sizes="36px" priority />
            </div>
            <div className="leading-tight">
              <span className="font-display text-lg text-white tracking-wide block leading-none">
                TM <span className="text-gradient-silver">Event</span> Hire
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map(link => (
              <div key={link.href} className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`nav-link flex items-center gap-1 ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={12} className="mt-0.5 opacity-60" />}
                </Link>

                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-56 overflow-hidden border border-white/10 shadow-navy-lg"
                      style={{ background: 'rgba(7,30,80,0.97)', backdropFilter: 'blur(16px)' }}
                    >
                      {link.children.map((child, i) => (
                        <Link key={child.href} href={child.href}
                          className="flex items-center gap-2 px-4 py-3 text-sm text-white/65 hover:text-white hover:bg-white/8 transition-all duration-150 border-b border-white/5 last:border-0"
                        >
                          <span className="w-1 h-1 rounded-full bg-silver/50 shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <BubbleButton href="/get-a-quote" variant="silver">Get a Quote</BubbleButton>
          </div>

          <button className="lg:hidden text-white p-2 hover:text-silver transition-colors" onClick={() => setMobileOpen(v => !v)}>
            <AnimatePresence mode="wait">
              {mobileOpen
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={22} /></motion.div>
                : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={22} /></motion.div>
              }
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto"
            style={{ background: 'rgba(7,30,80,0.98)', backdropFilter: 'blur(16px)' }}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-9 h-9 relative rounded-sm overflow-hidden ring-1 ring-white/20">
                  <Image src="/images/logo.jpg" alt="TM Event Hire" fill className="object-contain" sizes="36px" />
                </div>
                <span className="font-display text-lg text-white">TM Event Hire</span>
              </Link>
              <button className="text-white/60 hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 p-6">
              {navLinks.map((link, i) => (
                <motion.div key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link href={link.href}
                    className="block py-4 text-2xl font-display italic text-white border-b border-white/8 hover:text-silver transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child, j) => (
                    <motion.div key={child.href} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.06 + j * 0.03 + 0.1 }}>
                      <Link href={child.href} className="block py-2.5 pl-5 text-sm text-white/50 hover:text-silver transition-colors">
                        {child.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ))}

              <div className="mt-8 space-y-3">
                <BubbleButton href="/get-a-quote" variant="silver">Get a Quote</BubbleButton>
                <a href="tel:+447595979451" className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mt-4">
                  <Phone size={14} /> +44 7595 979 451
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
