"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import LoanProductsSection from "@/components/loan-products-section"
import ProcessSection from "@/components/process-section"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Navigation />
      <main className="overflow-hidden">
        {isLoaded && (
          <>
            <HeroSection />
            <LoanProductsSection />
            <ProcessSection />
            <FeaturesSection />
            <StatsSection />
            <FAQSection />
            <CTASection />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
