// app/layout.tsx

import type { Metadata } from 'next'
import { Poppins, Josefin_Sans } from 'next/font/google'
import './globals.css'
import { TrackingScript } from '@/components/TrackingScript'
import { Analytics } from '@/components/Analytics'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Webstamp Agency | Lead Generation & Automation for Contractors',
  description: 'We help contractors, construction, and landscaping businesses generate consistent leads, automate responses, and dominate their local market.',
  keywords: 'lead generation, contractor marketing, landscaping leads, construction leads, automation, SEO',
  authors: [{ name: 'The Webstamp Agency' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  openGraph: {
    title: 'The Webstamp Agency | Lead Generation & Automation for Contractors',
    description: 'We build complete lead generation systems powered by high-converting websites, SEO, Google Ads, and AI automation.',
    url: 'https://webstamp.com',
    siteName: 'The Webstamp Agency',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Webstamp Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Webstamp Agency | Lead Generation & Automation for Contractors',
    description: 'We help contractors generate consistent leads and grow with confidence.',
    images: ['/images/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${josefinSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#13463E" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <TrackingScript />
        <Analytics />
      </body>
    </html>
  )
}