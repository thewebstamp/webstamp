// app/(public)/contact/page.tsx

'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
    Mail, Phone, Clock, Send, CheckCircle,
    MessageCircle, Calendar,
    Headphones, Award, Sparkles, ArrowRight, Heart, Shield
} from 'lucide-react'


export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceInterest: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setErrorMessage('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await res.json()

            if (res.ok) {
                setStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    serviceInterest: '',
                    message: '',
                })
            } else {
                setStatus('error')
                setErrorMessage(data.error || 'Something went wrong. Please try again.')
            }
        } catch (error) {
            setStatus('error')
            setErrorMessage('Network error. Please check your connection and try again.')
        }
    }

    const contactMethods = [
        {
            icon: Phone,
            title: 'Phone',
            details: ['+234 902 834 2177'],
            subtext: 'Available 24/7',
            color: 'from-blue-500 to-cyan-500',
            href: 'tel:+2349028342177'
        },
        {
            icon: Mail,
            title: 'Email',
            details: ['thewebstamp@gmail.com'],
            subtext: 'We\'ll respond within 24 hours',
            color: 'from-green-500 to-emerald-500',
            href: 'mailto:thewebstamp@gmail.com'
        },
        {
            icon: MessageCircle,
            title: 'WhatsApp',
            details: ['+234 902 834 2177'],
            subtext: 'Instant messaging support',
            color: 'from-green-600 to-green-500',
            href: 'https://wa.me/2349028342177'
        },
    ]

    const benefits = [
        {
            icon: Clock,
            title: 'Fast Response',
            description: 'Get back to you within 24 hours',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Headphones,
            title: 'Expert Support',
            description: 'Talk directly with our specialists',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Shield,
            title: 'Free Consultation',
            description: '30-minute strategy session',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Award,
            title: 'No Obligation',
            description: 'Cancel anytime, no pressure',
            color: 'from-orange-500 to-red-500'
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className="overflow-hidden">
            {/* Hero Section - Dark Primary Background */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#12463D]">
                {/* Background Pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-grid-white/5" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent" />

                    {/* Floating Elements */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#F28203]/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F28203]/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

                    {/* Gradient Orbs */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#F28203]/10 blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#F28203]/5 blur-3xl"
                    />
                </div>

                <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 pt-30 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-[#F28203]" />
                            <span className="text-[15px] font-medium text-white">Get in Touch</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-[33.5px] md:text-[41px] lg:text-[48px] font-bold mb-6 leading-[1.2] text-white"
                        >
                            Let&apos;s Talk About &nbsp;
                            <span className="bg-linear-to-r from-[#F28203] to-[#ff9a33] bg-clip-text text-transparent">Growing Your Business</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[19px] md:text-[21px] lg:text-[23px] text-white/80 max-w-2xl mx-auto font-(family-name:--font-josefin)"
                        >
                            Ready to transform your lead generation and scale your business?
                            We&apos;re here to help. Fill out the form or reach out directly.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods Grid - Dark Primary Background */}
            <section className="relative py-16 bg-[#12463D] overflow-hidden" ref={ref}>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-grid-white/5" />
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/20 to-transparent" />
                </div>

                <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    >
                        {contactMethods.map((method, idx) => (
                            <motion.a
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                href={method.href}
                                target={method.title === 'WhatsApp' ? '_blank' : undefined}
                                rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-500 border border-white/20 hover:border-white/40 cursor-pointer"
                            >
                                <div className={`absolute inset-0 bg-linear-to-br ${method.color} opacity-10 rounded-2xl transition-opacity duration-500`} />
                                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${method.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                    <method.icon className="w-full h-full text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                                {method.details.map((detail, i) => (
                                    <p key={i} className="text-white/90 text-[18px] font-medium">{detail}</p>
                                ))}
                                <p className="text-[18px] text-white/90 font-light mt-1">{method.subtext}</p>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Section - Light Background */}
            <section className="relative py-24 bg-white overflow-hidden">
                {/* Light Background Pattern */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-linear-to-b from-gray-50/50 via-white to-gray-50/30" />
                    <svg className="absolute top-0 left-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="contactGrid" patternUnits="userSpaceOnUse" width="50" height="50">
                                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#12463D]" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#contactGrid)" />
                    </svg>
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/20 to-transparent" />
                    <div className="absolute bottom-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#12463D]/15 to-transparent" />

                    {/* Floating Orbs */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#F28203]/5 blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#12463D]/5 blur-3xl"
                    />
                </div>

                <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Left Side - Benefits & Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="sticky top-24">
                                <div className="inline-flex items-center gap-2 bg-[#F28203]/10 border border-[#F28203]/20 px-4 py-2 rounded-full mb-6">
                                    <Heart className="w-4 h-4 text-[#F28203]" />
                                    <span className="text-sm font-medium text-[#12463D]">Why Choose Us</span>
                                </div>
                                <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] font-bold text-[#12463D] mb-4 leading-[1.2]">We&apos;re Here to Help You Succeed</h2>
                                <p className="text-[19px] md:text-[21px] text-gray-600 mb-8 leading-relaxed">
                                    Our team of experts is ready to help you transform your lead generation
                                    and scale your business. Whether you have questions about our services
                                    or need a custom solution, we&apos;re just a message away.
                                </p>

                                <div className="space-y-6 mb-8">
                                    {benefits.map((benefit, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${benefit.color} p-2.5 shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                                <benefit.icon className="w-full h-full text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-xl text-[#12463D] mb-1">{benefit.title}</h3>
                                                <p className="text-gray-600">{benefit.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side - Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                                <div className="bg-linear-to-r from-[#12463D] to-[#13463E] p-6 text-white">
                                    <h3 className="text-2xl font-bold">Send Us a Message</h3>
                                    <p className="text-white/80 mt-1">Fill out the form and we&apos;ll get back to you within 24 hours</p>
                                </div>

                                <div className="p-6 md:p-8">
                                    <AnimatePresence mode="wait">
                                        {status === 'success' ? (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="text-center py-12"
                                            >
                                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <CheckCircle className="h-10 w-10 text-green-500" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#12463D] mb-2">Message Sent!</h3>
                                                <p className="text-gray-600 mb-6">
                                                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                                                </p>
                                                <button
                                                    onClick={() => setStatus('idle')}
                                                    className="bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white px-6 py-2 rounded-full hover:shadow-xl transition inline-flex items-center gap-2"
                                                >
                                                    Send Another Message
                                                    <Send className="w-4 h-4" />
                                                </button>
                                            </motion.div>
                                        ) : (
                                            <motion.form
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                onSubmit={handleSubmit}
                                                className="space-y-5"
                                            >
                                                <div className="grid md:grid-cols-2 gap-5">
                                                    <div>
                                                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                                            Full Name *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            required
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28203] focus:border-transparent transition"
                                                            data-track="contact-name"
                                                            disabled={status === 'loading'}
                                                            placeholder="John Doe"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                                            Email Address *
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            required
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28203] focus:border-transparent transition"
                                                            data-track="contact-email"
                                                            disabled={status === 'loading'}
                                                            placeholder="john@example.com"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-5">
                                                    <div>
                                                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                                                            Phone Number
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            id="phone"
                                                            value={formData.phone}
                                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28203] focus:border-transparent transition"
                                                            data-track="contact-phone"
                                                            disabled={status === 'loading'}
                                                            placeholder="+1 234-567-8901"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">
                                                            Company/Business Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="company"
                                                            value={formData.company}
                                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28203] focus:border-transparent transition"
                                                            data-track="contact-company"
                                                            disabled={status === 'loading'}
                                                            placeholder="Your Company"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="serviceInterest" className="block text-gray-700 font-semibold mb-2">
                                                        Service Interest *
                                                    </label>
                                                    <select
                                                        id="serviceInterest"
                                                        required
                                                        value={formData.serviceInterest}
                                                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28203] focus:border-transparent transition"
                                                        data-track="contact-service"
                                                        disabled={status === 'loading'}
                                                    >
                                                        <option value="">Select a service</option>
                                                        <option value="lead-generation">Lead Generation</option>
                                                        <option value="automation">Marketing Automation</option>
                                                        <option value="website">Website Design & SEO</option>
                                                        <option value="full-service">Full Service Package</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                                        Message *
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        required
                                                        rows={5}
                                                        value={formData.message}
                                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                        placeholder="Tell us about your business and what you're looking to achieve..."
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F28203] focus:border-transparent transition resize-none"
                                                        data-track="contact-message"
                                                        disabled={status === 'loading'}
                                                    />
                                                </div>

                                                {status === 'error' && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200"
                                                    >
                                                        {errorMessage || 'Something went wrong. Please try again or call us directly.'}
                                                    </motion.div>
                                                )}

                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    type="submit"
                                                    disabled={status === 'loading'}
                                                    className="w-full bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-50 inline-flex items-center justify-center"
                                                    data-track="contact-submit"
                                                >
                                                    {status === 'loading' ? (
                                                        <>
                                                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                            </svg>
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Send Message
                                                            <Send className="ml-2 h-4 w-4" />
                                                        </>
                                                    )}
                                                </motion.button>
                                            </motion.form>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Dark Primary Background with Gradient Lines */}
            <section className="relative py-24 bg-linear-to-r from-[#12463D] to-[#13463E] overflow-hidden border-b-2 border-white">
                {/* Light Background Pattern */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/20 to-transparent" />
                    <div className="absolute bottom-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#12463D]/15 to-transparent" />

                    {/* Floating Orbs */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#F28203]/5 blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#12463D]/5 blur-3xl"
                    />
                </div>

                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-grid-white/5" />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent" />

                    {/* Gradient Lines */}
                    <div className="absolute top-1/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/40 to-transparent" />
                    <div className="absolute bottom-1/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/30 to-transparent" />

                    {/* Floating Orbs */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-[#F28203]/10 blur-3xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-[#F28203]/5 blur-3xl"
                    />

                    {/* Decorative Dots */}
                    <div className="absolute top-20 left-10 w-2 h-2 bg-[#F28203]/30 rounded-full" />
                    <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full" />
                    <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#F28203]/30 rounded-full" />
                    <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white/20 rounded-full" />
                </div>

                <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6"
                        >
                            <Calendar className="w-4 h-4 text-[#F28203]" />
                            <span className="text-sm font-medium text-white">Limited Availability</span>
                        </motion.div>

                        <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] font-bold text-white mb-4 leading-[1.2]">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-[19px] md:text-[21px] lg:text-[23px] text-white/80 mb-8 max-w-2xl mx-auto">
                            Book a free 30-minute strategy session with our experts. No obligation, just value.
                        </p>
                        <Link
                            href="https://wa.me/2349028342177"
                            target="_blank"
                            className="group inline-flex items-center gap-2 bg-white text-[#12463D] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                            Schedule Your Free Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}