// components/TrackingScript.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function TrackingScript() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view
    fetch('/api/track/pageview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: pathname, referrer: document.referrer }),
    });
  }, [pathname]);

  useEffect(() => {
    // Track clicks on elements with data-track attribute
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const trackElement = target.closest('[data-track]');
      if (trackElement) {
        const element = trackElement.getAttribute('data-track');
        fetch('/api/track/click', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ element, path: pathname }),
        });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [pathname]);

  return null;
}