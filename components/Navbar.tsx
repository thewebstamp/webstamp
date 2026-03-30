// components/navbar.tsx

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-linear-to-r from-[#12463D]/95 via-[#13463E]/95 to-[#12463D]/95 backdrop-blur-xl py-2 shadow-2xl'
        : 'bg-linear-to-r from-[#12463D]/80 via-[#13463E]/70 to-[#12463D]/80 backdrop-blur-md py-5'
        }`}
      style={{
        borderBottom: scrolled ? '1px solid rgba(242, 130, 3, 0.1)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/twslogo-light.png"
                  alt="Webstamp"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'
                  }`}
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                Webstamp
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-medium text-lg transition-all duration-300 rounded-lg group ${active
                    ? 'text-[#F28203]'
                    : scrolled
                      ? 'text-gray-200 hover:text-white'
                      : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.label}
                  {/* Active Indicator */}
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F28203] rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Hover Effect */}
                  {!active && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F28203] transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              )
            })}

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden px-6 py-2.5 rounded-full font-semibold text-white transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #F28203 0%, #ff9a33 100%)',
                }}
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden focus:outline-none p-2 rounded-lg transition-all duration-300 ${isOpen
              ? 'bg-white/20 backdrop-blur-sm'
              : 'hover:bg-white/10'
              }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden mt-4"
            >
              <div className="py-4 space-y-2 border-t border-white/20">
                {navLinks.map((link, idx) => {
                  const active = isActive(link.href)
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`block py-3 px-4 text-lg font-medium rounded-lg transition-all duration-300 ${active
                          ? 'bg-[#F28203]/20 text-[#F28203]'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                        {active && (
                          <span className="ml-2 text-[#F28203]">•</span>
                        )}
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pt-4 mt-2"
                >
                  <Link
                    href="/contact"
                    className="group text-center bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2 w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}