// app/(public)/services/page.tsx

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import {
  CheckCircle, Users, Rocket, BarChart, Clock, Globe, Target,
  TrendingUp, Phone, Calendar, Award, Zap,
  Sparkles, ArrowRight
} from 'lucide-react'
import Image from 'next/image'

export default function ServicesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      title: 'Lead Generation',
      description: 'We build targeted ad campaigns and optimize your online presence to bring in qualified leads.',
      icon: Users,
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Targeted Ads', 'Local SEO', 'Social Media Campaigns']
    },
    {
      title: 'Website Design & SEO',
      description: 'Modern, mobile-friendly websites that rank locally and convert visitors into customers.',
      icon: Globe,
      gradient: 'from-green-500 to-emerald-500',
      features: ['Responsive Design', 'Local SEO', 'Speed Optimization']
    },
    {
      title: 'AI Automation Assistant',
      description: 'Your own AI receptionist that handles calls, qualifies leads, and books jobs while you focus on the work.',
      icon: Zap,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'AI Call Answering',
        'Lead Qualification',
        'Smart Appointment Booking',
        'Follow-up Automation',
        '24/7 Availability'
      ]
    },
    {
      title: 'Analytics & Reporting',
      description: 'Track what works with clear dashboards, so you can make data-driven decisions.',
      icon: BarChart,
      gradient: 'from-orange-500 to-red-500',
      features: ['Real-time Data', 'Custom Reports', 'ROI Tracking']
    },
    {
      title: 'Reputation Management',
      description: 'Get more 5-star reviews and manage your online reputation effortlessly.',
      icon: CheckCircle,
      gradient: 'from-teal-500 to-green-500',
      features: ['Review Generation', 'Response Automation', 'Brand Monitoring']
    },
    {
      title: 'Marketing Automation',
      description: 'Automate follow-ups, appointment reminders, and lead nurturing to save time and close more jobs.',
      icon: Rocket,
      gradient: 'from-purple-500 to-pink-500',
      features: ['Email Sequences', 'SMS Automation', 'CRM Integration']
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your business goals, target market, and current challenges.',
      icon: Phone,
      duration: '30 min',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'We create a custom plan tailored to your specific business needs and budget.',
      icon: Target,
      duration: '1-2 days',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Setup & Integration',
      description: 'We implement systems, build your website, and set up automation workflows.',
      icon: Zap,
      duration: '1-2 weeks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '04',
      title: 'Launch & Monitor',
      description: 'We go live and continuously monitor performance to ensure optimal results.',
      icon: BarChart,
      duration: 'Ongoing',
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '05',
      title: 'Optimize & Scale',
      description: 'We analyze data, refine strategies, and scale what works best.',
      icon: TrendingUp,
      duration: 'Monthly',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      step: '06',
      title: 'Review & Report',
      description: 'Regular meetings to review progress and plan next steps for growth.',
      icon: Calendar,
      duration: 'Weekly/Monthly',
      color: 'from-red-500 to-pink-500'
    },
  ]

  const results = [
    {
      metric: '300%',
      label: 'Average Lead Increase',
      description: 'Our clients see a 3x increase in qualified leads within the first 90 days.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      metric: '85%',
      label: 'Faster Response Time',
      description: 'Automated systems reduce response time from hours to minutes.',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      metric: '2.5x',
      label: 'ROI Average',
      description: 'Clients typically see 2.5x return on their investment within 6 months.',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      metric: '500+',
      label: 'Contractors Served',
      description: 'We\'ve helped over 500 contractors and landscapers grow their businesses.',
      icon: Users,
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
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#12463D]">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent" />

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F28203]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F28203]/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#F28203]/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#F28203]/5 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 sm:px-8 py-30 lg:px-15 xl:px-20 relative z-10">
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
              <span className="text-sm font-medium text-white">Our Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[33.5px] md:text-[41px] lg:text-[48px] font-bold mb-6 leading-[1.2] text-white"
            >
              We Provide Everything You Need to &nbsp;
              <span className="bg-linear-to-r from-[#F28203] to-[#ff9a33] bg-clip-text text-transparent"> Grow Your Business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[19px] md:text-[21px] lg:text-[23px] text-white/80 max-w-2xl mx-auto font-(family-name:--font-josefin)"
            >
              From lead generation to automation, we&apos;ve got you covered with cutting-edge solutions designed for contractors and landscapers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Matching homepage card design */}
      <section className="relative py-24 bg-white overflow-hidden" ref={ref}>
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50/50 via-white to-gray-50/30" />
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="servicesGrid" patternUnits="userSpaceOnUse" width="50" height="50">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#12463D]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#servicesGrid)" />
          </svg>
          <div className="absolute top-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/20 to-transparent" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#12463D]/15 to-transparent" />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] max-w-2xl lg:max-w-3xl mx-auto font-bold text-[#12463D] mb-4">Our Core Services</h2>
            <p className="text-[21px] md:text-[23px] lg:text-[25px] text-gray-600 max-w-150 lg:max-w-2xl mx-auto">
              Comprehensive solutions designed to attract, engage, and convert more customers
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-linear-to-br from-[#12463D]/5 via-white/95 to-[#F28203]/3 rounded-2xl shadow-xl transition-all duration-500 overflow-hidden border border-[#12463D]/10"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#F28203] to-transparent group-hover:opacity-100 transition-opacity duration-500" />

                {/* Diagonal corner lines */}
                <div className="absolute top-0 right-0 w-16 h-16 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M64 0L0 64" stroke="rgba(242, 130, 3, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M0 64L64 0" stroke="rgba(242, 130, 3, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>

                <div className="p-8 relative z-10">
                  <div className={`w-13 h-13 rounded-2xl bg-linear-to-br ${service.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-[22px] md:text-[24px] lg:text-[26px] font-bold text-[#12463D] mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4 text-[18.5px] md:text-[19.5px] lg:text-[20.5px] font-light">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span key={i} className="text-xs lg:text-sm bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full-Width Image Section */}
      <section className="relative w-full max-h-137.5 overflow-hidden">
        <div className="w-full">
          <Image
            src="/images/services1.png"
            alt="Professional contractor team working on a landscaping project with modern equipment - showcasing quality workmanship and professional service"
            width={1920}
            height={800}
            className="w-full h-auto object-cover"
            priority
            quality={95}
          />
        </div>
      </section>

      {/* Full-Width Image Section */}
      <section className="md:hidden relative w-full max-h-137.5 overflow-hidden">
        <div className="w-full">
          <Image
            src="/images/services2.png"
            alt="Professional contractor team working on a landscaping project with modern equipment - showcasing quality workmanship and professional service"
            width={1920}
            height={800}
            className="w-full h-auto object-cover"
            priority
            quality={95}
          />
        </div>
      </section>

      {/* Results & ROI Section - Matching homepage */}
      <section className="relative py-24 bg-linear-to-r from-[#12463D] to-[#13463E] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4 text-[#F28203]" />
              <span className="text-sm font-medium text-white">Real Results</span>
            </div>
            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] max-w-2xl lg:max-w-3xl mx-auto font-bold text-white mb-4">Real Results, Real ROI</h2>
            <p className="text-[21px] md:text-[23px] lg:text-[25px] text-white/80 max-w-150 lg:max-w-2xl mx-auto">
              See what our clients achieve with our proven systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className={`w-18 h-18 rounded-2xl bg-linear-to-br ${result.color} p-4 mx-auto mb-4 shadow-lg`}>
                  <result.icon className="w-full h-full text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{result.metric}</div>
                <div className="text-lg font-semibold text-white mb-2">{result.label}</div>
                <p className="text-[16px] text-white/70">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Image Section */}
      <section className="hidden md:block relative w-full max-h-137.5 overflow-hidden">
        <div className="w-full">
          <Image
            src="/images/services2.png"
            alt="Professional contractor team working on a landscaping project with modern equipment - showcasing quality workmanship and professional service"
            width={1920}
            height={800}
            className="w-full h-auto object-cover"
            priority
            quality={95}
          />
        </div>
      </section>

      {/* How It Works Section - Matching homepage style */}
      <section className="relative py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="howItWorksGrid" patternUnits="userSpaceOnUse" width="50" height="50">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#12463D]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#howItWorksGrid)" />
          </svg>
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#F28203]/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#12463D]/5 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#F28203]/10 border border-[#F28203]/20 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-[#F28203]" />
              <span className="text-sm font-medium text-[#12463D]">Our Process</span>
            </div>
            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] max-w-2xl lg:max-w-3xl mx-auto font-bold text-[#12463D] mb-4">How It Works</h2>
            <p className="text-[21px] md:text-[23px] lg:text-[25px] text-gray-600 max-w-150 lg:max-w-2xl mx-auto">
              Our proven process delivers results in just a few weeks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#F28203] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-13 h-13 rounded-xl bg-linear-to-br ${step.color} p-3 group-hover:scale-110 transition-transform duration-500`}>
                      <step.icon className="w-full h-full text-white" />
                    </div>
                    <span className="text-3xl font-bold text-gray-200">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#12463D] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-[17px] md:text-[18px] mb-3">{step.description}</p>
                  <span className="text-[16px] text-gray-400">{step.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-linear-to-b from-gray-50/80 via-white to-gray-50/80" />
        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-[#F28203]/10 border border-[#F28203]/20 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28203] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F28203]" />
              </span>
              <span className="text-sm font-medium text-[#12463D]">Limited Availability</span>
            </div>

            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] max-w-2xl lg:max-w-3xl mx-auto font-bold text-[#12463D] mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-[21px] md:text-[23px] lg:text-[25px] text-gray-600 mb-8">
              Join hundreds of contractors who have already scaled their businesses with our proven systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                data-track="services-cta-main"
                className="group relative overflow-hidden bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-2xl"
              >
                <span className="relative z-10">Get a Custom Quote</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
              <Link
                href="/contact"
                data-track="services-cta-contact"
                className="group relative overflow-hidden border-2 border-[#12463D] text-[#12463D] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-[#12463D] hover:text-white"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              No obligation. Free 30-minute strategy session included.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}