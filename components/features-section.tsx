"use client"

import { Shield, Zap, Users, TrendingUp } from "lucide-react"

const FEATURES = [
  {
    icon: Zap,
    title: "Instant Eligibility",
    description: "Know your eligibility in seconds with our AI-powered assessment",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "256-bit encryption and RBI-compliant security measures",
  },
  {
    icon: Users,
    title: "50+ Partners",
    description: "Access loans from India's leading banks and NBFCs",
  },
  {
    icon: TrendingUp,
    title: "Best Rates",
    description: "Compare and choose the lowest interest rate available",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose LoanHub?</h2>
          <p className="text-lg text-gray-400">The smarter way to find your perfect loan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-blue-500/20 hover:border-blue-500/50 rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
