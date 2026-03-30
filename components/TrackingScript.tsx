// components/TrackingScript.tsx

'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function TrackingScript() {
  const pathname = usePathname()

  useEffect(() => {
    // Send page view on route change
    fetch('/api/track/pageview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: pathname, referrer: document.referrer }),
    }).catch(console.error)
  }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const trackElement = target.closest('[data-track]')
      if (trackElement) {
        const element = trackElement.getAttribute('data-track')
        if (element) {
          fetch('/api/track/click', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ element, path: pathname }),
          }).catch(console.error)
        }
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  // Track time spent on page
  useEffect(() => {
    const startTime = Date.now()
    return () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      // Send time spent data
      fetch('/api/track/time', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: pathname, timeSpent }),
      }).catch(console.error)
    }
  }, [pathname])

  return null
}