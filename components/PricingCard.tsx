// components/PricingCard.tsx

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

interface PricingCardProps {
  name: string
  priceRange: string
  description: string
  features: string[]
  ctaText: string
  ctaTrack: string
  highlighted?: boolean
}

export default function PricingCard({
  name,
  priceRange,
  description,
  features,
  ctaText,
  ctaTrack,
  highlighted = false,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative group ${
        highlighted ? 'transform scale-105 z-10' : ''
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            Most Popular
          </div>
        </div>
      )}
      <div className={`relative bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${
        highlighted ? 'border-2 border-primary' : 'border border-gray-200'
      }`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <div className="text-4xl font-bold text-primary mb-4">
            {priceRange}<span className="text-lg text-gray-500">/mo</span>
          </div>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          
          <Link
            href="/contact"
            data-track={ctaTrack}
            className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
              highlighted
                ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl'
                : 'bg-gray-900 text-white hover:bg-primary'
            }`}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}