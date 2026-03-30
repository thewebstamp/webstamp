// components/CookieConsent.tsx

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent')
        if (!consent) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true')
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
                >
                    <div className="hidden relative bg-linear-to-br from-[#12463D] to-[#13463E] rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#F28203]/10 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#F28203]/5 rounded-full blur-2xl" />

                        {/* Top Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#F28203] via-[#ff9a33] to-[#F28203]" />

                        <div className="relative p-6">
                            {/* Header */}
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#F28203]/20 flex items-center justify-center shrink-0">
                                    <Cookie className="w-5 h-5 text-[#F28203]" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-semibold text-lg">Cookie Preferences</h3>
                                    <p className="text-white/60 text-sm mt-0.5">We value your privacy</p>
                                </div>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
                                >
                                    <X className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                                </button>
                            </div>

                            {/* Content */}
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                                By clicking &quot;Accept&quot;, you consent to our use of cookies.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={acceptCookies}
                                    className="flex-1 bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300"
                                >
                                    Accept All Cookies
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}