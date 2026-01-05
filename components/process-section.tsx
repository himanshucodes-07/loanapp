"use client"

import { Check } from "lucide-react"

const STEPS = [
  {
    number: 1,
    title: "Check Eligibility",
    description: "Answer quick questions about your profile",
  },
  {
    number: 2,
    title: "See Offers",
    description: "Get personalized loan offers from banks",
  },
  {
    number: 3,
    title: "Compare & Choose",
    description: "Compare rates, terms, and select your loan",
  },
  {
    number: 4,
    title: "Get Approved",
    description: "Fast approval and disbursal within 48 hours",
  },
]

export default function ProcessSection() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-lg text-gray-400">Simple 4-step process to get your loan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0" />

          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Step number circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mb-6 relative z-10 mx-auto group hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Content card */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 rounded-lg p-6 text-center hover:border-blue-500/50 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500/20 to-teal-500/20 border border-blue-500/30 rounded-lg p-8 text-center animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Check className="w-6 h-6 text-teal-400" />
            <span className="text-white font-semibold">100% Secure & Transparent</span>
          </div>
          <p className="text-gray-300">
            Your data is encrypted and never shared without your permission. No hidden charges or surprise fees.
          </p>
        </div>
      </div>
    </section>
  )
}
