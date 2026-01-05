"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, Phone, FileText, TrendingUp } from "lucide-react"

const steps = [
  {
    number: 1,
    title: "Share Your Info",
    description: "Provide your mobile, city, and income. Just 1 minute of your time.",
    icon: Phone,
    color: "from-primary to-primary/60",
  },
  {
    number: 2,
    title: "Instant Eligibility",
    description: "Get results from multiple banks instantly, no CIBIL impact.",
    icon: CheckCircle2,
    color: "from-accent to-accent/60",
  },
  {
    number: 3,
    title: "Compare Offers",
    description: "View rates, amounts, and terms side-by-side in one place.",
    icon: TrendingUp,
    color: "from-secondary to-secondary/60",
  },
  {
    number: 4,
    title: "Apply & Done",
    description: "Apply instantly. Bank handles verification, KYC, and disbursal.",
    icon: FileText,
    color: "from-primary/80 to-accent/60",
  },
]

export default function ProcessSteps() {
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4 border border-accent/20">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How LoanHub Works</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get access to loan options without the hassle. Simple, transparent, and quick.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="fade-in-up transition-smooth hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative p-8 h-full flex flex-col items-start hover:shadow-lg hover:border-accent/50 transition-smooth group overflow-hidden">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />

                  {/* Step number badge */}
                  <div
                    className={`relative h-12 w-12 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-bold text-lg mb-6 shadow-lg`}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <Icon className={`relative w-8 h-8 mb-4 text-primary group-hover:text-accent transition-colors`} />

                  {/* Title and description */}
                  <h3 className="relative font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="relative text-sm text-muted-foreground leading-relaxed flex-grow">{step.description}</p>

                  {/* Connector line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-border to-transparent" />
                  )}
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
