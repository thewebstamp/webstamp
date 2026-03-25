import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TrackingScript } from '@/components/TrackingScript'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'The Webstamp Agency | Lead Generation & Automation for Contractors',
  description: 'We help contractors and landscaping businesses get steady leads, improve online presence, and automate responses.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <TrackingScript />
      </body>
    </html>
  )
}