// components/Footer.tsx

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <footer className="relative bg-linear-to-br from-[#12463D] to-[#13463E] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-white/5 to-transparent" />
        
        {/* Decorative Elements */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.09]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footerGrid" patternUnits="userSpaceOnUse" width="50" height="50">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
        
        {/* Floating Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#F28203]/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#F28203]/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/twslogo-light.png"
                  alt="Webstamp"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl font-bold text-white">Webstamp</h3>
            </div>
            <p className="text-white/70 text-sm lg:text-[16.5px] leading-relaxed mb-4">
              Results-driven digital agency focused on helping contracting, construction, and landscaping businesses generate consistent leads and grow with confidence.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61577618071112", label: "Facebook" },
                { icon: FaInstagram, href: "https://www.instagram.com/thewebstamp/", label: "Instagram" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F28203] transition-all duration-300 group hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-all lg:text-[16.5px] duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#F28203] transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-white/60 hover:text-white lg:text-[16.5px] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#F28203] transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#F28203] transition-all duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm text-white/50">Phone/WhatsApp</p>
                  <a href="tel:+2349028342177" className="text-white/80 hover:text-white transition text-sm lg:text-[16.5px]">
                    +234 902 834 2177
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#F28203] transition-all duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm text-white/50">Email</p>
                  <a href="mailto:thewebstamp@gmail.com" className="text-white/80 hover:text-white transition text-sm lg:text-[16.5px]">
                    thewebstamp@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm lg:text-[16px]">
              &copy; {currentYear} The Webstamp Agency. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-white/50 hover:text-white text-xs lg:text-sm transition">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/50 hover:text-white text-xs lg:text-sm transition">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-white/50 hover:text-white text-xs lg:text-sm transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}