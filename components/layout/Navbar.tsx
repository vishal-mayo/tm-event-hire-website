'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
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
    const handler = () => setScrolled(window.scrollY > 60)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-navy/95 backdrop-blur-md ${
      scrolled ? 'shadow-lg' : 'shadow-none'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 relative rounded overflow-hidden">
            <Image
              src="/images/logo.jpg"
              alt="TM Event Hire logo"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
          <span className="font-display text-xl text-white tracking-wide">
            TM <span className="text-silver">Event</span> Hire
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <div key={link.href} className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`nav-link flex items-center gap-1 text-sm ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
                {link.children && <ChevronDown size={13} className="mt-0.5 opacity-70" />}
              </Link>

              <AnimatePresence>
                {link.children && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-52 bg-navy shadow-xl overflow-hidden border border-white/10"
                  >
                    {link.children.map(child => (
                      <Link key={child.href} href={child.href}
                        className="block px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                      >
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
          <BubbleButton href="/get-a-quote" variant="gold">Get a Quote</BubbleButton>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-navy z-50 flex flex-col p-8 pt-24 overflow-y-auto"
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setMobileOpen(false)}>
              <X size={28} />
            </button>
            {navLinks.map((link, i) => (
              <motion.div key={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link href={link.href}
                  className="block py-4 text-2xl font-display italic text-white border-b border-white/10 hover:text-silver transition-colors"
                >
                  {link.label}
                </Link>
                {link.children?.map((child, j) => (
                  <motion.div key={child.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + j * 0.04 + 0.1 }}
                  >
                    <Link href={child.href}
                      className="block py-2 pl-4 text-base text-white/60 hover:text-silver transition-colors"
                    >
                      {child.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ))}
            <div className="mt-8">
              <BubbleButton href="/get-a-quote" variant="gold">Get a Quote</BubbleButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
