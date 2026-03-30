// app/(public)/pricing/page.tsx

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import {
  CheckCircle, Headphones, RefreshCw,
  Zap, Award, TrendingUp, Globe, Target, Rocket,
  Star, Sparkles, DollarSign, ArrowRight,
  HelpCircle,
  ChevronDown
} from 'lucide-react'

export default function PricingPage() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([])

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const plans = [
    {
      name: 'Website Only',
      priceRange: '$300',
      description: 'Professional, mobile-optimized website that converts visitors into leads.',
      features: [
        'Modern, responsive design',
        'SEO-optimized structure',
        'Contact forms & lead capture',
        'Fast loading speed',
        '1 month free support'
      ],
      ctaText: 'Get Website',
      ctaTrack: 'pricing-website',
      color: 'from-blue-500 to-cyan-500',
      icon: Globe,
      popular: false,
      period: 'one-time'
    },
    {
      name: 'Starter Ads',
      priceRange: '$200 - $999',
      description: 'Perfect for businesses testing Google Ads for the first time.',
      features: [
        'Targeted Google Ads campaigns',
        'Monthly performance reporting',
        '3-15 qualified leads/month',
        'Ad copy & keyword optimization',
        'Dedicated account manager'
      ],
      ctaText: 'Start Getting Leads',
      ctaTrack: 'pricing-starter-ads',
      color: 'from-green-500 to-emerald-500',
      icon: Target,
      popular: false,
      period: 'ad budget + management fee'
    },
    {
      name: 'Growth Ads',
      priceRange: '$1,000 - $4,999',
      description: 'Ideal for businesses ready to scale with proven strategies.',
      features: [
        'Advanced Google Ads campaigns',
        'Detailed analytics dashboard',
        '15-50+ qualified leads/month',
        'A/B testing & optimization',
        'Weekly strategy calls'
      ],
      ctaText: 'Scale Your Business',
      ctaTrack: 'pricing-growth-ads',
      highlighted: true,
      color: 'from-primary to-accent',
      icon: TrendingUp,
      popular: true,
      period: 'ad budget + management fee'
    },
  ]

  const enterprisePlans = [
    {
      name: 'Enterprise Ads',
      priceRange: '$5,000+',
      description: 'For established businesses ready to dominate their market.',
      features: [
        'Unlimited ad budget capacity',
        'Full-service campaign management',
        '100+ qualified leads/month',
        'Dedicated account team',
        'Quarterly strategy retreats'
      ],
      ctaText: 'Contact for Custom Quote',
      ctaTrack: 'pricing-enterprise',
      color: 'from-purple-500 to-pink-500',
      icon: Rocket,
    },
    {
      name: 'AI Automation',
      priceRange: 'Custom Pricing',
      description: '24/7 AI assistant that handles calls, qualifies leads, and books appointments.',
      features: [
        'AI Call Answering',
        'Smart Lead Qualification',
        'Automated Appointment Booking',
        'Follow-up Automation',
        '24/7 Availability'
      ],
      ctaText: 'Build Your Automation',
      ctaTrack: 'pricing-ai',
      color: 'from-orange-500 to-red-500',
      icon: Zap,
    },
  ]

  const coreFeatures = [
    { icon: Zap, title: 'Fast Setup', description: 'Get up and running in 1-2 weeks with our streamlined onboarding process.', color: 'from-yellow-500 to-orange-500' },
    { icon: Headphones, title: 'Dedicated Support', description: 'All plans include expert support to help you succeed.', color: 'from-green-500 to-emerald-500' },
    { icon: RefreshCw, title: 'Regular Updates', description: 'Continuous improvements and new features added regularly.', color: 'from-purple-500 to-pink-500' },
    { icon: Award, title: 'Results Guaranteed', description: "We're confident in delivering measurable results for your business.", color: 'from-indigo-500 to-purple-500' }
  ]

  const faqs = [
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades will apply at the start of your next billing cycle.',
    },
    {
      question: 'Are there any setup fees?',
      answer: 'No hidden setup fees. Your first month\'s payment covers the initial setup and onboarding process. We believe in transparent pricing with no surprises.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, PayPal, and CashApp for all plans. For Enterprise clients, we also offer flexible invoicing options tailored to your needs.',
    },
    {
      question: 'Do I need to sign a long-term contract?',
      answer: 'No! All our plans are month-to-month. We believe in earning your business every month, not locking you into lengthy contracts.',
    },
    {
      question: 'Can I get a custom solution?',
      answer: 'Yes! If you have specific needs not covered by our standard plans, contact us for a custom quote tailored to your business requirements.',
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients see their first leads within 1-3 weeks, with significant improvements in lead volume and response times by month 2-3.',
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
      {/* Hero Section - Light Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#12463D]/99 to-[#12463D]">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#12463D]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#F28203]/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 py-30 relative z-10">
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
              className="inline-flex items-center gap-2  bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6"
            >
              <DollarSign className="w-4 h-4 text-[#F28203]" />
              <span className="text-[15px] font-medium text-white">Flexible Pricing</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[33.5px] md:text-[41px] lg:text-[48px] text-white font-bold mb-6 leading-[1.2]"
            >
              Simple,{' '}
              <span className="bg-linear-to-r from-[#F28203] to-[#ff9a33] bg-clip-text text-transparent">Transparent Pricing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[19px] md:text-[21px] lg:text-[23px] text-white/80 max-w-2xl mx-auto font-(family-name:--font-josefin)"
            >
              No monthly commitments. Pay for what you need, when you need it. Or build a custom package that grows with your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards - Light Background */}
      <section className="relative py-24 bg-white overflow-hidden" ref={ref}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50/50 via-white to-gray-50/30" />
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pricingGrid" patternUnits="userSpaceOnUse" width="50" height="50">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#12463D]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricingGrid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#F28203]/10 border border-[#F28203]/20 px-4 py-2 rounded-full mb-4">
              <Globe className="w-4 h-4 text-[#F28203]" />
              <span className="text-sm font-medium text-[#12463D]">Website + Google Ads Packages</span>
            </div>
            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] font-bold text-[#12463D] mb-4">Get Online & Start Getting Leads</h2>
            <p className="text-[21px] md:text-[23px] lg:text-[25px] text-gray-600">One-time website build + ongoing ad management</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-14 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`relative group ${plan.highlighted ? 'transform scale-105 z-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}
                <div className={`relative bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${plan.highlighted ? 'border-2 border-[#F28203]' : 'border border-gray-200'
                  }`}>
                  <div className={`absolute inset-0 bg-linear-to-br ${plan.color} opacity-5 transition-opacity duration-500`} />

                  <div className="p-8">
                    <div className={`w-15 h-15 rounded-2xl bg-linear-to-br ${plan.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <plan.icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#12463D] mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-[#12463D] mb-2">
                      {plan.priceRange}
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{plan.period}</p>
                    <p className="text-gray-600 mb-6 text-[17px]">{plan.description}</p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-950"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className=" text-[17px] font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      data-track={plan.ctaTrack}
                      className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${plan.highlighted
                        ? 'bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white hover:shadow-xl'
                        : 'bg-[#12463D] text-white hover:bg-[#13463E]'
                        }`}
                    >
                      {plan.ctaText}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise + AI Section - Dark Background */}
      <section className="relative py-24 bg-linear-to-r from-[#12463D] to-[#13463E] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-4">
              <Rocket className="w-4 h-4 text-[#F28203]" />
              <span className="text-sm font-medium text-white">Premium Solutions</span>
            </div>
            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] font-bold text-white mb-4">Scale Your Business Further</h2>
            <p className="text-[21px] md:text-[23px] lg:text-[25px] text-white/80">Enterprise advertising & AI automation for serious growth</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {enterprisePlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 border border-white/20 hover:border-white/40"
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${plan.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <plan.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-[#F28203] mb-2">{plan.priceRange}</div>
                  <p className="text-white/70 mb-6 text-[17px]">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-white/80">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2 shrink-0" />
                        <span className="text-[17px] font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    data-track={plan.ctaTrack}
                    className="block text-center bg-white/20 backdrop-blur-sm border border-white/30 text-white py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flexible Commitment Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <RefreshCw className="w-4 h-4 text-[#F28203]" />
              <p className="text-white/80 text-[16px]">
                No monthly commitments. Pay when you need services. Or set up recurring services — your choice.
              </p>
            </div>
            <p className="text-white/70 text-[16px] font-light mt-4">
              All packages include detailed reporting and guaranteed client calls & estimates based on your tier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features - Light Background */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50/50 via-white to-gray-50/30" />
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="coreGrid" patternUnits="userSpaceOnUse" width="50" height="50">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#12463D]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coreGrid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#F28203]/10 border border-[#F28203]/20 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#F28203]" />
              <span className="text-sm font-medium text-[#12463D]">Core Benefits</span>
            </div>
            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] font-bold text-[#12463D] mb-4">What&apos;s Included in Every Plan</h2>
            <p className="text-[21px] md:text-[23px] lg:text-[25px] text-gray-600 max-w-2xl mx-auto">
              Every client gets these core benefits, regardless of which plan you choose
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {coreFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl p-6 shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#F28203]/30"
              >
                <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#12463D] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-[18px]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Premium Accordion Design */}
      <section className="relative py-24 bg-linear-to-r from-[#12463D] to-[#13463E] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-[#F28203]" />
              <span className="text-sm font-medium text-white">Common Questions</span>
            </div>
            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-[19px] md:text-[21px] lg:text-[23px] text-white/80 max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group"
                >
                  <motion.button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className={`relative bg-white/5 backdrop-blur-sm rounded-2xl transition-all duration-300 border ${openFaqs.includes(idx)
                      ? 'border-[#F28203]/50 bg-white/10'
                      : 'border-white/20 hover:border-white/40 hover:bg-white/10'
                      }`}>
                      <div className="flex items-center justify-between p-6 cursor-pointer">
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`w-8 h-8 rounded-full bg-[#F28203]/20 flex items-center justify-center transition-all duration-300 ${openFaqs.includes(idx) ? 'bg-[#F28203]/40' : 'group-hover:bg-[#F28203]/30'
                            }`}>
                            <span className="text-[#F28203] font-semibold text-sm">{String(idx + 1).padStart(2, '0')}</span>
                          </div>
                          <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${openFaqs.includes(idx) ? 'text-[#F28203]' : 'text-gray-50 group-hover:text-white/90'
                            }`}>
                            {faq.question}
                          </h3>
                        </div>
                        <motion.div
                          animate={{ rotate: openFaqs.includes(idx) ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaqs.includes(idx)
                            ? 'bg-[#F28203] text-white'
                            : 'bg-white/10 text-white/60 group-hover:bg-white/20'
                            }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </div>

                      {/* Answer Section with Animation */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: openFaqs.includes(idx) ? 'auto' : 0,
                          opacity: openFaqs.includes(idx) ? 1 : 0,
                          marginTop: openFaqs.includes(idx) ? 0 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent mb-4" />
                          <div className="flex gap-4">
                            <div className="w-8 h-8 shrink-0" />
                            <p className="text-white/90 font-light leading-relaxed text-[19px]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* Additional Help Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-8 pt-4"
            >
              <p className="text-white/50 text-sm">
                Still have questions? <Link href="/contact" className="text-[#F28203] hover:text-[#ff9a33] transition-colors font-medium">Contact our support team</Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Light Background */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-gray-50/80 via-white to-gray-50/80" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow-xl border border-gray-200"
          >
            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] font-bold text-[#12463D] mb-4">Ready to Scale Your Business?</h2>
            <p className="text-[21px] md:text-[23px] lg:text-[25px] text-gray-600 mb-8">
              Join other contractors and landscapers who are getting consistent, high-quality leads every month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                data-track="pricing-final-cta"
                className="group relative overflow-hidden bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-2xl"
              >
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
              <Link
                href="/services"
                data-track="pricing-learn-more"
                className="group relative overflow-hidden border-2 border-[#12463D] text-[#12463D] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-[#12463D] hover:text-white"
              >
                Learn More About Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="mt-6 text-[15px] text-gray-500">
              No credit card required to get started. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}