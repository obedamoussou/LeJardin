import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'
import Logo from '../../public/Logo.png'
import CTNVIVE from "../../public/ctnvibe.png"
import ADDOTOUR from "../../public/addotour.png"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Le menu ne doit jamais rester ouvert au passage en desktop, ni bloqué par Échap.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const offset = (headerRef.current?.offsetHeight ?? 72) + 8
    const top = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-night-950/85 shadow-lg shadow-black/40 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between gap-3 py-3 sm:py-4">
        <a href="#accueil" className="flex min-w-0 shrink items-center">
          <img src={Logo} alt="Logo" className="h-12 w-auto object-contain sm:h-16 lg:h-20" />
          <img src={CTNVIVE} alt="Logo" className="h-12 w-auto object-contain pr-2 sm:h-16 lg:h-20" />
          <img src={ADDOTOUR} alt="Logo" className="h-12 w-auto object-contain sm:h-16 lg:h-20" />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-xs font-semibold uppercase tracking-wider text-sand-100/80 transition-colors hover:text-ember-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#reserver" className="btn-primary hidden shrink-0 !px-5 !py-2.5 !text-xs lg:inline-flex">
          Je réserve ma place
        </a>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 shrink-0 rounded-lg border border-white/15 p-2.5 text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-night-900/95 backdrop-blur-md lg:hidden"
          >
            <ul className="container-x flex max-h-[70vh] flex-col gap-1 overflow-y-auto py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNav(e, l.href)}
                    className="block rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wider text-sand-100/85 transition-colors hover:bg-white/5 hover:text-ember-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-3">
                <a
                  href="#reserver"
                  onClick={(e) => handleNav(e, '#reserver')}
                  className="btn-primary w-full"
                >
                  Je réserve ma place
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
