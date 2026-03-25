// components/navbar.tsx

'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Webstamp
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-secondary transition">Home</Link>
            <Link href="/services" className="hover:text-secondary transition">Services</Link>
            <Link href="/pricing" className="hover:text-secondary transition">Pricing</Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 hover:text-secondary">Home</Link>
            <Link href="/services" className="block py-2 hover:text-secondary">Services</Link>
            <Link href="/pricing" className="block py-2 hover:text-secondary">Pricing</Link>
          </div>
        )}
      </div>
    </nav>
  )
}