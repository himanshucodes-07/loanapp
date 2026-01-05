"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Heart, Zap, TrendingUp, ArrowRight } from "lucide-react"

const loanCategories = [
  {
    id: "personal",
    title: "Personal Loans",
    description: "Flexible loans for any personal need without collateral",
    icon: CreditCard,
    eligibility: [
      "Age: 21-60 years",
      "Minimum income: ₹25,000/month",
      "Credit score: 750+",
      "Employment: Salaried or self-employed",
    ],
    documents: ["Identity proof", "Address proof", "Income proof", "Bank statements"],
    loanRange: "₹10,000 to ₹50,00,000",
    duration: "6 months to 7 years",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "health",
    title: "Health & Medical Loans",
    description: "Special loans for medical emergencies and healthcare expenses",
    icon: Heart,
    eligibility: [
      "Age: 25-60 years",
      "Minimum income: ₹15,000/month",
      "Valid health insurance optional",
      "Employment: Employed or self-employed",
    ],
    documents: ["Identity proof", "Medical documents", "Income proof", "Treatment estimate"],
    loanRange: "₹1,00,000 to ₹30,00,000",
    duration: "6 months to 5 years",
    color: "from-red-500 to-pink-600",
  },
  {
    id: "zero-balance",
    title: "Zero Balance Accounts",
    description: "Bank accounts with no minimum balance requirement",
    icon: Zap,
    eligibility: ["Age: 18+ years", "Basic KYC required", "No minimum balance needed", "Free for life"],
    documents: ["Identity proof", "Address proof", "Passport size photo"],
    loanRange: "Account opening only",
    duration: "Lifetime validity",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "no-cibil",
    title: "No CIBIL/Low CIBIL Loans",
    description: "Loans available even with poor or no credit history",
    icon: TrendingUp,
    eligibility: [
      "Age: 21-60 years",
      "Minimum income: ₹20,000/month",
      "Credit score: No minimum",
      "Employment: Any type",
    ],
    documents: ["Identity proof", "Address proof", "Income proof"],
    loanRange: "₹5,000 to ₹20,00,000",
    duration: "6 months to 5 years",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "short-term",
    title: "Short-Term Loans",
    description: "Quick loans for immediate cash needs with instant approval",
    icon: Zap,
    eligibility: [
      "Age: 21-60 years",
      "Minimum income: ₹20,000/month",
      "Credit score: 650+",
      "Employment: Salaried only",
    ],
    documents: ["Identity proof", "Address proof", "Income proof"],
    loanRange: "₹5,000 to ₹10,00,000",
    duration: "1 month to 3 years",
    color: "from-orange-500 to-red-600",
  },
  {
    id: "business",
    title: "Business Loans",
    description: "Loans designed for small business growth and expansion",
    icon: TrendingUp,
    eligibility: [
      "Business age: Minimum 1 year",
      "Annual turnover: ₹50,00,000+",
      "Credit score: 700+",
      "Ownership: Sole/Partnership/Company",
    ],
    documents: [
      "Business registration",
      "Bank statements (last 12 months)",
      "ITR (last 3 years)",
      "Profit & Loss statement",
    ],
    loanRange: "₹1,00,000 to ₹1,00,00,000",
    duration: "3 years to 7 years",
    color: "from-cyan-500 to-blue-600",
  },
]

export default function LoanCategoriesGrid() {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanCategories.map((loan) => {
            const Icon = loan.icon
            return (
              <Card key={loan.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${loan.color}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-muted">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{loan.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{loan.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Loan Range</h4>
                      <p className="font-semibold text-foreground">{loan.loanRange}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Duration</h4>
                      <p className="font-semibold text-foreground">{loan.duration}</p>
                    </div>
                  </div>

                  <details className="mb-6">
                    <summary className="cursor-pointer text-sm font-semibold text-primary hover:text-primary/80">
                      View Eligibility Criteria
                    </summary>
                    <ul className="mt-3 space-y-2">
                      {loan.eligibility.map((criterion, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </details>

                  <details className="mb-6">
                    <summary className="cursor-pointer text-sm font-semibold text-primary hover:text-primary/80">
                      View Required Documents
                    </summary>
                    <ul className="mt-3 space-y-2">
                      {loan.documents.map((doc, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </details>

                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href={`/check-eligibility?type=${loan.id}`}>
                      Check Eligibility
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
