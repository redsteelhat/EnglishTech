'use client'

import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Courses from '@/components/Courses'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
