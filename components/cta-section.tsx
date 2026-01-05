"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Find Your Perfect Loan?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join 100,000+ users who have found their ideal loan on LoanHub. Get instant eligibility check and personalized
          offers.
        </p>
        <Link href="/check-eligibility">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 inline-flex items-center gap-2 group text-lg">
            Start Your Journey Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </section>
  )
}
