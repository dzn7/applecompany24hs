'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/70 dark:bg-gray-900/50 border-b border-white/20 shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset]' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo + Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <span className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="Apple Company 24hs"
                fill
                className="object-cover object-center"
                priority
                quality={100}
                sizes="64px"
              />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-[15px] font-semibold text-gray-900 tracking-tight">
                Apple Company <span className="text-apple-blue-600">24hs</span>
              </span>
              <span className="text-[11px] text-gray-500">Assistência Técnica Apple</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <span className="px-1">{item.name}</span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-4/5" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Button asChild variant="ios" size="pill" className="hidden sm:inline-flex">
              <a href="https://wa.me/5586981464559" className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4" />
                <span>(86) 98146-4559</span>
              </a>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="mt-2 glass-card bg-white/70 rounded-2xl border-0 shadow-apple-lg overflow-hidden">
            <div className="py-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-white/60 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-3 border-t border-white/40">
                <Button asChild variant="ios" size="pill" className="w-full h-10">
                  <a href="https://wa.me/5586981464559" className="flex items-center gap-2">
                    <FaWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
