"use client"

import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react"

export default function TrustSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Trust metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Shield,
              title: "100% Secure",
              description: "HTTPS encrypted. Bank-level security protocols.",
              color: "from-primary to-primary/40",
            },
            {
              icon: Lock,
              title: "Privacy Protected",
              description: "We never share your data without explicit consent.",
              color: "from-accent to-accent/40",
            },
            {
              icon: Eye,
              title: "Fully Transparent",
              description: "No hidden charges. All terms clearly disclosed.",
              color: "from-secondary to-secondary/40",
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="fade-in-up transition-smooth hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative p-8 h-full flex flex-col items-center text-center hover:shadow-xl hover:border-accent/50 transition-smooth group overflow-hidden">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />

                  <div className="relative flex flex-col items-center h-full">
                    {/* Icon */}
                    <div
                      className={`h-16 w-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Disclaimer section with enhanced styling */}
        <div className="fade-in-up">
          <Card className="relative p-10 bg-gradient-to-br from-card to-muted/20 border-primary/20 hover:border-accent/50 transition-smooth overflow-hidden group">
            {/* Accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />

            <div className="relative">
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">How LoanHub Works</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                    LoanHub is a financial technology platform and lead generation service. We are not a bank and do not
                    directly offer loans. Instead, we help you discover loan products from verified banks and NBFCs. We
                    act as a transparent intermediary between you and multiple financial institutions.
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Banks and NBFCs independently verify your details and make lending decisions
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        All loans are provided and managed directly by partner financial institutions
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        Your data is protected with bank-level encryption and never shared without consent
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">
                        By using LoanHub, you agree to our Terms of Service and Privacy Policy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
