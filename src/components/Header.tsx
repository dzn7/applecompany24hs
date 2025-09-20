'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaWhatsapp } from 'react-icons/fa'

const Header = () => {
  const navigationItems = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 border-b border-gray-200/50 shadow-sm">
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

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button asChild variant="ios" size="pill" className="hidden sm:inline-flex">
              <a href="https://wa.me/5586981464559" className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4" />
                <span>(86) 98146-4559</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
