"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight, Heart, Home, Zap } from "lucide-react"

const LOAN_PRODUCTS = [
  {
    id: 1,
    name: "Personal Loan",
    description: "Flexible loans for personal needs",
    minAmount: "₹50,000",
    maxAmount: "₹50,00,000",
    minRate: "7.0%",
    maxRate: "15.0%",
    icon: Zap,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Health Loan",
    description: "Medical expenses covered",
    minAmount: "₹1,00,000",
    maxAmount: "₹20,00,000",
    minRate: "8.0%",
    maxRate: "16.0%",
    icon: Heart,
    color: "from-red-500 to-pink-500",
  },
  {
    id: 3,
    name: "Home Loan",
    description: "Dream home financing",
    minAmount: "₹5,00,000",
    maxAmount: "₹1,00,00,000",
    minRate: "6.5%",
    maxRate: "12.0%",
    icon: Home,
    color: "from-teal-500 to-green-500",
  },
]

export default function LoanProductsSection() {
  return (
    <section id="loans" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Loan Products</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the loan that fits your needs best. Compare rates, terms, and get instant eligibility check.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOAN_PRODUCTS.map((product, index) => {
            const IconComponent = product.icon
            return (
              <div key={product.id} className="animate-fade-in-up group" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-blue-500/20 hover:border-blue-500/50 p-8 h-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative space-y-6">
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                      <p className="text-gray-400 text-sm">{product.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-500/10">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Amount</p>
                        <p className="text-sm font-semibold text-blue-400">{product.minAmount}</p>
                        <p className="text-xs text-gray-500">to {product.maxAmount}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Interest Rate</p>
                        <p className="text-sm font-semibold text-teal-400">{product.minRate}</p>
                        <p className="text-xs text-gray-500">to {product.maxRate}</p>
                      </div>
                    </div>

                    <Link href={`/loans/${product.id}`}>
                      <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
