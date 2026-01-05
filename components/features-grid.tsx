"use client"

import { Card } from "@/components/ui/card"
import { ShieldCheck, Zap, Users, BarChart3, Lock, Clock } from "lucide-react"

const features = [
  {
    title: "No CIBIL Impact",
    description: "Soft inquiry that doesn't affect your credit score. Check unlimited times.",
    icon: ShieldCheck,
    color: "from-primary to-primary/40",
  },
  {
    title: "Lightning Fast",
    description: "Get eligibility decisions instantly. Results in seconds, not days.",
    icon: Zap,
    color: "from-accent to-accent/40",
  },
  {
    title: "50+ Banks",
    description: "Access to HDFC, ICICI, Axis, Kotak, and 45+ leading banks and NBFCs.",
    icon: Users,
    color: "from-secondary to-secondary/40",
  },
  {
    title: "Best Offers",
    description: "Compare interest rates and amounts. Find the perfect match for your needs.",
    icon: BarChart3,
    color: "from-primary/80 to-accent/40",
  },
  {
    title: "100% Secure",
    description: "Bank-level encryption. Your data is protected and never shared without consent.",
    icon: Lock,
    color: "from-accent/80 to-secondary/40",
  },
  {
    title: "24/7 Available",
    description: "Apply anytime, anywhere. No office hours, no waiting in queues.",
    icon: Clock,
    color: "from-secondary/80 to-primary/40",
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/10">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-20 fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4 border border-secondary/20">
            Why LoanHub
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose LoanHub?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We make finding the right loan simple, transparent, and completely secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="fade-in-up transition-smooth hover:scale-105"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Card className="relative p-8 h-full hover:shadow-xl hover:border-accent/50 transition-smooth group overflow-hidden">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />

                  <div className="relative flex flex-col h-full">
                    {/* Icon container */}
                    <div
                      className={`h-14 w-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{feature.description}</p>

                    {/* Accent line on hover */}
                    <div className="h-1 bg-gradient-to-r from-accent to-secondary rounded-full mt-6 w-0 group-hover:w-full transition-all" />
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
