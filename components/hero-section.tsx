"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center py-12 md:py-0 overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-500/30 backdrop-blur hover:border-blue-500/60 transition-all duration-300 cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-200">Instant Eligibility • No CIBIL Impact</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Your Perfect
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                  Loan Awaits
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                Compare loans from <span className="text-blue-400 font-semibold">50+ trusted banks</span>. Check
                eligibility instantly and get personalized offers in minutes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/check-eligibility">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 group">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/loans">
                <button className="px-8 py-4 border border-blue-500/50 text-white rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300">
                  Explore Loans
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/10">
              <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  100K+
                </div>
                <div className="text-sm text-gray-400 mt-2">Verified Users</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-gray-400 mt-2">Bank Partners</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ₹5L+
                </div>
                <div className="text-sm text-gray-400 mt-2">Loans Matched</div>
              </div>
            </div>
          </div>

          {/* Right side visual */}
          <div className="hidden lg:flex items-center justify-center animate-slide-in-right">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-blue-950/40 to-teal-950/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center animate-glow-pulse">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Estimated Loan Offer</p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                      ₹5,00,000
                    </p>
                  </div>
                  <div className="space-y-3 pt-6 border-t border-blue-500/20">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400" />
                      <span className="text-gray-300">Approved in 24-48 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400" />
                      <span className="text-gray-300">Multiple loan options</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400" />
                      <span className="text-gray-300">Zero processing fee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
