// components/Analytics.tsx

'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Analytics() {
    const pathname = usePathname()

    useEffect(() => {
        // Track scroll depth
        let maxScroll = 0
        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent
                if (maxScroll >= 25 && maxScroll < 50) {
                    trackEvent('scroll_25')
                } else if (maxScroll >= 50 && maxScroll < 75) {
                    trackEvent('scroll_50')
                } else if (maxScroll >= 75 && maxScroll < 100) {
                    trackEvent('scroll_75')
                } else if (maxScroll >= 100) {
                    trackEvent('scroll_100')
                }
            }
        }

        const trackEvent = (event: string) => {
            fetch('/api/track/event', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ event, path: pathname }),
            }).catch(console.error)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [pathname])

    return null
}