// app/(public)/page.tsx

'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Zap, Globe, Clock, Shield, BarChart, HardHat, Sprout, CheckCircle, Star, TrendingUp, Rocket, RefreshCw, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-[#12463D]/5 via-white to-[#F28203]/5 py-11 pb-1 md:pb-0 lg:py-0">
        {/* Background Gradient Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Diagonal Lines */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.13]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridLines" patternUnits="userSpaceOnUse" width="60" height="60">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#12463D]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridLines)" />
          </svg>

          {/* Horizontal Gradient Line - Top */}
          <div className="absolute top-20 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/40 to-transparent" />

          {/* Horizontal Gradient Line - Middle */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#12463D]/30 to-transparent" />

          {/* Horizontal Gradient Line - Bottom */}
          <div className="absolute bottom-20 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/30 to-transparent" />

          {/* Vertical Gradient Line - Left */}
          <div className="absolute left-20 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#12463D]/30 to-transparent" />

          {/* Vertical Gradient Line - Right */}
          <div className="absolute right-20 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#F28203]/30 to-transparent" />
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Circles */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[5%] w-32 h-32 rounded-full border border-[#F28203]/10 bg-[#F28203]/5 blur-xl"
          />

          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -25, 0],
              rotate: [0, -8, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] left-[3%] w-40 h-40 rounded-full border border-[#12463D]/10 bg-[#12463D]/5 blur-xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] left-[15%] w-24 h-24 rounded-full bg-[#F28203]/5 blur-2xl"
          />

          {/* Floating Squares */}
          <motion.div
            animate={{
              rotate: [0, 45, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[30%] right-[10%] w-20 h-20 border-2 border-[#12463D]/10 rotate-12"
            style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)" }}
          />

          <motion.div
            animate={{
              rotate: [0, -30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[60%] right-[20%] w-16 h-16 border border-[#F28203]/20"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/2 -right-1/2 w-200 h-200 rounded-full bg-linear-to-r from-[#F28203]/5 via-[#12463D]/5 to-transparent blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute -bottom-1/2 -left-1/2 w-150 h-150 rounded-full bg-linear-to-l from-[#12463D]/5 via-[#F28203]/5 to-transparent blur-3xl"
          />
        </div>

        <div className="relative z-10">
          <div className="container mx-auto lg:px-15 xl:px-20">
            <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-between min-h-screen gap-12 lg:gap-16 py-12 lg:py-0">

              {/* Left Side - Text Content - Add padding here instead */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none px-6 sm:px-8"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[35px] md:text-[43px] lg:text-[55px] font-bold mb-6 leading-[1.2] tracking-tight bg-linear-to-r from-[#12463D] via-[#12463D] to-[#ff9a33] bg-clip-text text-transparent"
                >
                  Get Steady Leads & Automate Your Business
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="lg:w-[90%] text-[19px] md:text-[21px] text-gray-600 mb-6 max-w-2xl lg:max-w-full font-(family-name:--font-josefin)"
                >
                  We Help Contractors & Landscapers in the US and Canada Get More Jobs — Consistently.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link
                    href="/pricing"
                    data-track="hero-cta"
                    className="group relative overflow-hidden bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-2xl"
                  >
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </Link>
                  <Link
                    href="/contact"
                    data-track="hero-contact"
                    className="group relative overflow-hidden border-2 border-[#12463D] text-[#12463D] px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 inline-flex items-center justify-center hover:bg-[#12463D] hover:text-white"
                  >
                    Contact Sales
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Side - Artistic Image - Remove margins, let it be full width */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.2 }}
                className="flex-1 relative w-full lg:max-w-none"
              >
                {/* Decorative Background Shapes */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#F28203]/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#12463D]/20 rounded-full blur-2xl animate-pulse animation-delay-1000" />

                {/* Main Image Container with Unique Shape */}
                <div className="relative">
                  {/* Colored Shape 1 - Top Left Corner */}
                  <div className="absolute -top-6 -left-6 z-20 hidden md:block">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L80 0L0 80L0 0Z" fill="#F28203" fillOpacity="0.3" />
                      <path d="M10 10L70 10L10 70L10 10Z" fill="#F28203" fillOpacity="0.5" />
                    </svg>
                  </div>

                  {/* Colored Shape 2 - Bottom Right Corner */}
                  <div className="absolute -bottom-6 -right-6 z-20 hidden md:block">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="40" fill="#12463D" fillOpacity="0.3" />
                      <circle cx="50" cy="50" r="30" fill="#12463D" fillOpacity="0.5" />
                    </svg>
                  </div>

                  {/* Colored Shape 3 - Middle Right Edge */}
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
                    <svg width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="20" width="40" height="80" rx="20" fill="#F28203" fillOpacity="0.2" />
                      <rect x="10" y="30" width="20" height="60" rx="10" fill="#F28203" fillOpacity="0.4" />
                    </svg>
                  </div>

                  {/* Image Container */}
                  <div className="-mt-1 lg:mt-0 relative lg:rounded-[60px] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out">
                    {/* Gradient Border Effect - Hidden on mobile/tablet */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#F28203] via-[#12463D] to-[#F28203] opacity-0 hover:opacity-100 transition-opacity duration-500 hidden lg:block" style={{ padding: '3px' }} />

                    {/* Image Container with conditional Clip Path */}
                    <div className="relative" style={{
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                    }}>
                      <Image
                        src="/images/hero.png"
                        alt="Professional contractor team working on a landscaping project with modern equipment"
                        width={600}
                        height={700}
                        className="object-cover w-full h-auto"
                        priority
                        quality={95}
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-linear-to-tr from-[#12463D]/20 via-transparent to-[#F28203]/20" />
                    </div>
                  </div>

                  {/* Decorative Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-12 -right-12 z-30 hidden lg:block"
                  >
                    <div className="w-20 h-20 bg-[#F28203] rounded-full opacity-20 blur-xl" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-8 -left-8 z-30 hidden lg:block"
                  >
                    <div className="w-24 h-24 bg-[#12463D] rounded-full opacity-20 blur-xl" />
                  </motion.div>
                </div>

                {/* Shadow Effect */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-20 bg-black/20 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => {
              const nextSection = document.getElementById('next-section')
              nextSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <div className="w-8 h-12 border-2 border-[#12463D]/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-3 bg-[#12463D] rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Pain Points Section with Cards */}
      <section className="relative py-24 bg-[#12463D] overflow-hidden">
        {/* Enhanced Gradient Background - Matching navbar color scheme */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base gradient matching navbar */}
          <div className="absolute inset-0 bg-linear-to-br from-[#12463D] via-[#13463E] to-[#12463D]" />

          {/* Diagonal lines pattern */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.34]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridLinesPainPoints" patternUnits="userSpaceOnUse" width="50" height="50">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#F28203]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridLinesPainPoints)" />
          </svg>

          {/* Gradient lines - More visible */}
          <div className="absolute top-1/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/60 to-transparent" />
          <div className="absolute bottom-1/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/40 to-transparent" />

          {/* Floating subtle orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#F28203]/15 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#F28203]/10 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[33px] md:text-[40px] lg:text-[47px] max-w-2xl lg:max-w-3xl mx-auto font-bold text-[#FEF9E6] mb-4"><span className='leading-[2.8rem]'>We Solve Your Biggest Challenges</span></h2>
            <p className="text-xl md:text-[22px] lg:text-2xl text-[#cac6b5] max-w-150 lg:max-w-2xl mx-auto">
              Stop struggling with inconsistent work and start growing with confidence
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {[
              { icon: Target, title: "No Steady Leads", description: "Stop chasing inconsistent work. Get a predictable stream of qualified leads.", color: "from-blue-400 to-cyan-400" },
              { icon: Globe, title: "Poor Online Presence", description: "We build professional websites and manage your reputation to attract more clients.", color: "from-green-400 to-emerald-400" },
              { icon: Zap, title: "Slow Response → Lost Jobs", description: "Automate follow-ups and never miss an opportunity again.", color: "from-orange-400 to-red-400" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative bg-[#F28203]/15 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-white/20"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#F28203] to-transparent group-hover:opacity-100 transition-opacity duration-500" />

                {/* Diagonal corner line - top right */}
                <div className="absolute top-0 right-0 w-16 h-16 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 0L0 64" stroke="rgba(242, 130, 3, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Diagonal corner line - bottom left */}
                <div className="absolute bottom-0 left-0 w-16 h-16 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 64L64 0" stroke="rgba(242, 130, 3, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                </div>

                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-[22px] md:text-[23.5px] lg:text-[25px] font-semibold text-[#f1eee0] mb-3">{item.title}</h3>
                  <p className="text-white/80 text-[18.5px] md:text-[19px] lg:text-[20.5px] font-light leading-relaxed">{item.description}</p>
                </div>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Exclusive Service Area Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Decorative corner elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-[#F28203]/40 rounded-tl-2xl" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2 border-[#F28203]/40 rounded-br-2xl" />

            <div className="bg-white/95 rounded-2xl p-8 md:p-10 border border-gray-200 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-[#F28203]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-[#F28203]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#12463D] mb-2">
                    Exclusive to Your Market
                  </h3>
                  <p className="text-gray-600 text-lg">
                    We only partner with <span className="font-semibold text-[#F28203]">ONE contractor or landscaper per service area</span>.
                    No competition from our other clients — just 100% focus on helping you dominate your local market.
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="shrink-0 bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Claim Your Area
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry-Specific Problems with Modern Cards */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-gray-50/50 via-white to-gray-50/30" />
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridPattern" patternUnits="userSpaceOnUse" width="50" height="50">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#12463D]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPattern)" />
          </svg>

          {/* Decorative gradient orbs */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F28203]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#12463D]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] max-w-2xl lg:max-w-3xl mx-auto font-bold text-[#12463D] mb-4"><span className='leading-10'>Challenges Facing Contractors & Landscapers</span></h2>
            <p className="text-[21px] md:text-[23px] lg:text-[25px] text-gray-600 max-w-150 lg:max-w-2xl mx-auto">
              We understand your unique struggles. Here&apos;s how we solve them.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Construction Industry */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#12463D]/50"
            >
              {/* Decorative corner line */}
              <div className="absolute top-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path d="M0 0L80 80" stroke="rgba(242, 130, 3, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>

              <div className="bg-linear-to-r from-[#12463D] to-[#13463E] p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <HardHat className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Construction Contractors</h3>
                </div>
              </div>

              <div className="p-8">
                {[
                  { problem: "Inconsistent project pipeline", solution: "Predictable lead flow through targeted ads" },
                  { problem: "Slow response to RFQs", solution: "24/7 automated bid responses" },
                  { problem: "Low visibility online", solution: "SEO-optimized website that ranks #1 locally" }
                ].map((item, idx) => (
                  <div key={idx} className="mb-6 last:mb-0">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-red-500 text-xs">✕</span>
                      </div>
                      <span className="text-gray-700 font-medium text-[17.5px] md:text-[18px] lg:text-[19.5px]">{item.problem}</span>
                    </div>
                    <div className="flex items-start gap-3 pl-9">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-600 text-[17px] md:text-[17.5px] lg:text-[19px]">{item.solution}</span>
                    </div>
                    {idx < 2 && <div className="border-t border-gray-200 my-4" />}
                  </div>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#F28203]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Lawn Care & Landscaping */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#F28203]/50"
            >
              {/* Decorative corner line */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path d="M80 0L0 80" stroke="rgba(242, 130, 3, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>

              <div className="bg-linear-to-r from-[#F28203] to-[#ff9a33] p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Sprout className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Lawn Care & Landscaping</h3>
                </div>
              </div>

              <div className="p-8">
                {[
                  { problem: "Seasonal work fluctuations", solution: "Year-round client acquisition strategies" },
                  { problem: "No recurring revenue", solution: "Automated maintenance contract follow-ups" },
                  { problem: "Hard to stand out", solution: "Showcase portfolio with stunning before/after galleries" }
                ].map((item, idx) => (
                  <div key={idx} className="mb-6 last:mb-0">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-red-500 text-xs">✕</span>
                      </div>
                      <span className="text-gray-700 font-medium text-[17.5px] md:text-[18px] lg:text-[19.5px]">{item.problem}</span>
                    </div>
                    <div className="flex items-start gap-3 pl-9">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-600 text-[17px] md:text-[17.5px] lg:text-[19px]">{item.solution}</span>
                    </div>
                    {idx < 2 && <div className="border-t border-gray-200 my-4" />}
                  </div>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#F28203]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-Width Image Section */}
      <section className="relative w-full max-h-137.5 overflow-hidden">
        <div className="w-full">
          <Image
            src="/images/image.png"
            alt="Professional contractor team working on a landscaping project with modern equipment - showcasing quality workmanship and professional service"
            width={1920}
            height={800}
            className="w-full h-auto object-cover"
            priority
            quality={95}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50/50 to-white" />
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pricingPattern" patternUnits="userSpaceOnUse" width="50" height="50">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#12463D]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricingPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] max-w-2xl lg:max-w-3xl mx-auto font-bold text-[#12463D] mb-4"><span className='leading-10'>Flexible Solutions That Scale With You</span></h2>
            <p className="text-[21px] md:text-[23px] lg:text-[25px] text-gray-600 max-w-150 lg:max-w-2xl mx-auto">
              No monthly commitments. Pay for what you need, when you need it. Or build a custom package that grows with your business.
            </p>
          </motion.div>

          {/* Website + Google Ads Packages */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-[#F28203]/10 px-4 py-2 rounded-full mb-4">
                <Globe className="w-4 h-4 text-[#F28203]" />
                <span className="text-sm lg:text-[15px] font-medium text-[#F28203]">Website + Google Ads Packages</span>
              </div>
              <h3 className="text-2xl md:text-[26px] lg:text-[28px] font-bold text-[#12463D]">Get Online & Start Getting Leads</h3>
              <p className="text-gray-600 mt-2 lg:text-[17.5px]">One-time website build + ongoing ad management</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Website Only */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-linear-to-br from-[#12463D]/8 via-white/95 to-[#F28203]/5 rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden border border-[#F28203]/10"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-[#F28203]/5 to-transparent rounded-bl-full" />

                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#12463D]/40 to-transparent group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 relative z-10">
                  <div className="w-12 h-12 bg-linear-to-br from-[#12463D]/20 to-[#F28203]/10 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-[#12463D]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#12463D] mb-2">Website Only</h3>
                  <div className="text-4xl font-bold text-[#12463D] mb-4">
                    $300<span className="text-lg text-gray-500"> one-time</span>
                  </div>
                  <p className="text-gray-600 mb-6 text-[17.5px] md:text-[19px]">Professional, mobile-optimized website that converts visitors into leads.</p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Modern, responsive design',
                      'SEO-optimized structure',
                      'Contact forms & lead capture',
                      'Fast loading speed',
                      '1 month free support'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-950">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 shrink-0">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-[17px] md:text-[18.5px] font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    data-track="pricing-website"
                    className="block text-center border-2 border-[#12463D] text-[#12463D] py-3 rounded-xl font-semibold hover:bg-[#12463D] hover:text-white transition-all duration-300"
                  >
                    Get Website
                  </Link>
                </div>
              </motion.div>

              {/* Starter Ad Package */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative bg-linear-to-br from-[#F28203]/8 via-white/95 to-[#12463D]/5 rounded-2xl shadow-2xl transition-all duration-500 overflow-hidden border border-[#F28203]/10"
              >
                {/* Decorative corner accent */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-[#12463D]/5 to-transparent rounded-tr-full" />

                {/* Subtle top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#F28203]/50 to-transparent group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 relative z-10">
                  <div className="w-12 h-12 bg-linear-to-br from-[#F28203]/20 to-[#12463D]/10 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-[#F28203]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#12463D] mb-2">Starter Ads</h3>
                  <div className="text-4xl font-bold text-[#12463D] mb-2">
                    $200<span className="text-lg text-gray-500"> - $999</span>
                  </div>
                  <p className="text-[15px] text-gray-500 mb-4">Ad budget + management fee</p>
                  <p className="text-gray-600 mb-6 text-[17.5px] md:text-[19px]">Perfect for businesses testing Google Ads for the first time.</p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Targeted Google Ads campaigns',
                      'Monthly performance reporting',
                      '3-15 qualified leads/month',
                      'Ad copy & keyword optimization',
                      'Dedicated account manager'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-950">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2 shrink-0">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="font-light text-[17px] md:text-[18.5px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    data-track="pricing-starter-ads"
                    className="block text-center bg-linear-to-r from-[#12463D]/80 to-[#12463D] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Start Getting Leads
                  </Link>
                </div>
              </motion.div>

              {/* Growth Ad Package - Highlighted */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#F28203] transform scale-105"
              >
                <div className="absolute top-0 right-0 bg-[#F28203] text-white px-4 py-1 rounded-bl-2xl text-sm font-semibold">
                  Most Popular
                </div>
                <div className="absolute inset-0 bg-linear-to-br from-[#F28203]/5 to-[#12463D]/5" />
                <div className="p-8 relative">
                  <div className="w-12 h-12 bg-[#F28203]/20 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-[#F28203]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#12463D] mb-2">Growth Ads</h3>
                  <div className="text-4xl font-bold text-[#12463D] mb-2">
                    $1,000<span className="text-lg text-gray-500"> - $4,999</span>
                  </div>
                  <p className="text-[15px] text-gray-500 mb-4">Ad budget + management fee</p>
                  <p className="text-gray-600 mb-6 text-[17.5px] md:text-[19px]">Ideal for businesses ready to scale with proven strategies.</p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Advanced Google Ads campaigns',
                      'Detailed analytics dashboard',
                      '15-50+ qualified leads/month',
                      'A/B testing & optimization',
                      'Weekly strategy calls'
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-950">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span className="font-light text-[16.5px] md:text-[18px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    data-track="pricing-growth-ads"
                    className="block text-center bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Scale Your Business
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Enterprise + AI Automation Section */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Enterprise Ads */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#13463E]/40"
            >
              <div className="bg-linear-to-r from-[#12463D] to-[#13463E] p-6">
                <div className="flex items-center gap-3">
                  <Rocket className="h-8 w-8 text-white" />
                  <h3 className="text-xl font-bold text-white">Enterprise Ads</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-[#12463D] mb-2">
                  $5,000<span className="text-lg text-gray-500">+</span>
                </div>
                <p className="text-[15px] text-gray-500 mb-4">Ad budget + management fee</p>
                <p className="text-gray-600 mb-4 text-[17.5px] md:text-[19px]">For established businesses ready to dominate their market.</p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Unlimited ad budget capacity',
                    'Full-service campaign management',
                    '100+ qualified leads/month',
                    'Dedicated account team',
                    'Quarterly strategy retreats'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-950 font-light text-[17px] md:text-[18.5px]">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  data-track="pricing-enterprise"
                  className="block text-center border-2 border-[#12463D] text-[#12463D] py-2 rounded-xl font-semibold hover:bg-[#12463D] hover:text-white transition-all duration-300"
                >
                  Contact for Custom Quote
                </Link>
              </div>
            </motion.div>

            {/* AI Automation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#ff9a33]/50"
            >
              <div className="bg-linear-to-r from-[#F28203] to-[#ff9a33] p-6">
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-white" />
                  <h3 className="text-xl font-bold text-white">AI Automation</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-[#12463D] mb-2">
                  Custom Pricing
                </div>
                <p className="text-gray-600 mb-4 text-[17.5px] md:text-[19px]">Setup fee + monthly platform & maintenance</p>
                <p className="text-gray-600 mb-4 text-[17.5px] md:text-[19px]">Automate responses, follow-ups, and lead nurturing.</p>
                <ul className="space-y-2 mb-6">
                  {[
                    '24/7 lead response automation',
                    'Smart email & SMS sequences',
                    'Calendar booking integration',
                    'CRM & workflow automation',
                    'Ongoing maintenance & support'
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-950 font-light text-[17px] md:text-[18.5px]">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  data-track="pricing-ai"
                  className="block md:hidden text-center bg-[#F28203] text-white py-2 rounded-xl font-semibold hover:bg-[#ff9a33] transition-all duration-300"
                >
                  Build Your Automation
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Flexible Commitment Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-6 py-3">
              <RefreshCw className="w-4 h-4 text-[#12463D]" />
              <p className="text-gray-600 text-[16px]">
                No monthly commitments. Pay when you need services. Or set up recurring services — your choice.
              </p>
            </div>
            <p className="text-gray-500 text-[16px] mt-4">
              All packages include detailed reporting and guaranteed client calls & estimates based on your tier.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-linear-to-r from-[#12463D] to-[#13463E] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-white/5 to-transparent" />

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#F28203]/10 blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#F28203]/10 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-[#F28203] fill-[#F28203]" />
              <span className="text-sm font-medium text-white">Client Success Story</span>
            </div>
            <h2 className="text-[33px] md:text-[40px] lg:text-[47px] max-w-2xl lg:max-w-3xl mx-auto font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-[21px] font-light md:text-[23px] lg:text-[25px] text-white/80 max-w-150 lg:max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from contractors who transformed their business
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Featured Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-[#F28203]/20 via-white/10 to-[#F28203]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500">
                {/* Decorative Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M15 22.5H7.5V37.5H15V22.5ZM37.5 22.5H30V37.5H37.5V22.5Z" fill="white" />
                  </svg>
                </div>

                <div className="flex flex-col items-center text-center">
                  {/* Client Logo */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-[#F28203]/20 rounded-full blur-xl" />
                    <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden border-4 border-white/30 shadow-xl">
                      <Image
                        src="/images/tlc.jpg"
                        alt="Taylors Lawncare and Landscaping"
                        width={56}
                        height={56}
                        className="object-contain w-full rounded-full"
                      />
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-[#F28203] fill-[#F28203]" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-xl md:text-2xl italic text-white mb-8 leading-relaxed max-w-2xl">
                    &quot;The Webstamp Agency completely transformed how we get leads. We went from struggling to find work during off-seasons to having a steady stream of qualified clients year-round. Their Google Ads strategy and automation system saved us hours of follow-up time. Best decision we ever made for our business!&quot;
                  </p>

                  {/* Client Info */}
                  <div>
                    <p className="font-bold text-2xl text-white">Taylor Williams</p>
                    <p className="text-white/70 text-lg mt-1">Owner, Taylors Lawncare and Landscaping</p>
                  </div>

                  {/* Optional: Location/Additional Info */}
                  <div className="mt-4 flex items-center gap-2 text-white/50 text-sm">
                    <MapPin className="w-3 h-3" />
                    <span>Atlanta, GA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-linear-to-b from-gray-50/50 via-white to-gray-50/30" />

          {/* Grid Pattern */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="whyChooseGrid" patternUnits="userSpaceOnUse" width="50" height="50">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#12463D]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#whyChooseGrid)" />
          </svg>

          {/* Gradient Lines */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/20 to-transparent" />
          <div className="absolute bottom-1/4 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#12463D]/15 to-transparent" />

          {/* Floating Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#F28203]/5 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#12463D]/5 blur-3xl"
          />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#F28203]/10 border border-[#F28203]/20 px-4 py-2 rounded-full mb-4">
              <Shield className="w-4 h-4 text-[#F28203]" />
              <span className="text-sm font-medium text-[#12463D]">Why Choose Us</span>
            </div>
            <h2 className="text-[33.5px] md:text-[41px] lg:text-[48px] max-w-2xl lg:max-w-3xl mx-auto font-bold text-[#12463D] mb-4">Why Contractors Trust Us</h2>
            <p className="text-[21px] md:text-[23px] lg:text-[25px] text-gray-600 max-w-150 lg:max-w-2xl mx-auto">
              We&apos;re not just another agency — we&apos;re your growth partner
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BarChart, title: "Data-Driven Results", description: "Real analytics that show exactly what's working", color: "from-blue-500 to-cyan-500", delay: 0.1 },
              { icon: Clock, title: "24/7 Automation", description: "Never miss a lead with instant responses", color: "from-green-500 to-emerald-500", delay: 0.2 },
              { icon: Shield, title: "Proven Systems", description: "Strategies that work for contractors & landscapers", color: "from-purple-500 to-pink-500", delay: 0.3 },
              { icon: TrendingUp, title: "ROI Guaranteed", description: "We're confident in delivering results", color: "from-orange-500 to-red-500", delay: 0.4 }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-r from-[#12463D]/5 to-[#F28203]/5 rounded-2xl group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`w-15 h-15 rounded-2xl bg-linear-to-br ${item.color} p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6 shadow-lg`}>
                    <item.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#12463D] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-[17.5px]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-5 pb-30 overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-linear-to-b from-gray-50/80 via-white to-gray-50/80" />

          {/* Grid Pattern */}
          <svg className="absolute top-0 left-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ctaGrid" patternUnits="userSpaceOnUse" width="50" height="50">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#12463D]" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaGrid)" />
          </svg>

          {/* Gradient Lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#12463D]/20 to-transparent" />
          <div className="absolute top-1/3 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#F28203]/15 to-transparent" />

          {/* Floating Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-[#F28203]/5 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-[#12463D]/5 blur-3xl"
          />

          {/* Decorative Dots */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#F28203]/20 rounded-full" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#12463D]/15 rounded-full" />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#F28203]/20 rounded-full" />
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-[#12463D]/15 rounded-full" />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-15 xl:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#F28203]/10 border border-[#F28203]/20 px-4 py-2 rounded-full mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28203] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F28203]" />
              </span>
              <span className="text-sm font-medium text-[#12463D]">Limited Availability</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[33.5px] md:text-[41px] lg:text-[48px] max-w-2xl lg:max-w-3xl mx-auto font-bold text-[#12463D] mb-6"
            >
              Ready to Fill Your Pipeline?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-[21px] md:text-[23px] lg:text-[25px] text-gray-600 max-w-150 lg:max-w-2xl mx-auto mb-8"
            >
              Join other contractors and landscapers who are getting consistent, quality leads every month.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                data-track="final-cta"
                className="group relative overflow-hidden bg-linear-to-r from-[#F28203] to-[#ff9a33] text-white px-8 py-4 rounded-full text-lg lg:text-[19px] font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-2xl"
              >
                <span className="relative z-10">Get Your Free Consultation</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
              <Link
                href="/pricing"
                data-track="final-cta-pricing"
                className="group relative overflow-hidden border-2 border-[#12463D] text-[#12463D] px-8 py-4 rounded-full text-lg lg:text-[19px] font-semibold transition-all duration-300 inline-flex items-center justify-center hover:bg-[#12463D] hover:text-white"
              >
                View Pricing Plans
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm lg:text-[16px] text-gray-500">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span className="text-sm lg:text-[16px] text-gray-500">Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}