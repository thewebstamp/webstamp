// app/(public)/layout.tsx

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { CookieConsent } from '@/components/CookieConsent'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </>
  )
}