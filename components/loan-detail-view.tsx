"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, AlertCircle } from "lucide-react"

export default function LoanDetailView({ loan }: { loan: any }) {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{loan.title}</h1>
            <p className="text-xl text-muted-foreground">{loan.fullDescription}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="p-4">
              <p className="text-xs text-muted-foreground uppercase mb-1">Interest Rate</p>
              <p className="text-lg font-bold text-primary">{loan.interestRate}</p>
            </Card>
            <Card className="p-4">
              <p className="text-xs text-muted-foreground uppercase mb-1">Min Amount</p>
              <p className="text-lg font-bold">{loan.minAmount}</p>
            </Card>
            <Card className="p-4">
              <p className="text-xs text-muted-foreground uppercase mb-1">Max Amount</p>
              <p className="text-lg font-bold">{loan.maxAmount}</p>
            </Card>
            <Card className="p-4">
              <p className="text-xs text-muted-foreground uppercase mb-1">Duration</p>
              <p className="text-lg font-bold">{loan.repaymentPeriod}</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-3">
                {loan.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {loan.fees.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Applicable Fees</h2>
                <Card className="p-6 bg-muted/30">
                  <ul className="space-y-3">
                    {loan.fees.map((fee: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{fee}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            )}
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Start your eligibility check now. It takes just 2 minutes and won't impact your credit score. Compare
              offers from multiple banks and NBFCs instantly.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
              <Link href={`/check-eligibility?type=${loan.id}`}>
                Check Eligibility Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <Card className="p-8 bg-muted/30">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Important Note</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This information is for reference purposes only. Actual loan terms, interest rates, and eligibility
                  criteria may vary based on the lending institution. Please verify all details with the respective bank
                  or NBFC before applying. Rates and terms are subject to change.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
