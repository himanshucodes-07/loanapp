"use client"

import { useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Clock, CheckCircle2, ExternalLink, AlertCircle } from "lucide-react"

// Mock offers data based on loan type
const offersData: Record<string, any[]> = {
  personal: [
    {
      id: 1,
      bank: "HDFC Bank",
      logo: "HD",
      type: "Personal Loan",
      rate: "10.5%",
      rateNote: "p.a.",
      minAmount: "₹10,000",
      maxAmount: "₹50,00,000",
      processingFee: "2-2.5%",
      disbursalTime: "24-48 hours",
      eligibility: "Salaried & Self-employed",
      rating: 4.8,
      featured: true,
    },
    {
      id: 2,
      bank: "ICICI Bank",
      logo: "IC",
      type: "Personal Loan",
      rate: "11.25%",
      rateNote: "p.a.",
      minAmount: "₹10,000",
      maxAmount: "₹40,00,000",
      processingFee: "2-3%",
      disbursalTime: "1-2 days",
      eligibility: "Salaried",
      rating: 4.6,
      featured: false,
    },
    {
      id: 3,
      bank: "Axis Bank",
      logo: "AB",
      type: "Personal Loan",
      rate: "11.49%",
      rateNote: "p.a.",
      minAmount: "₹25,000",
      maxAmount: "₹35,00,000",
      processingFee: "1.5-2.5%",
      disbursalTime: "2-3 days",
      eligibility: "Salaried & Self-employed",
      rating: 4.5,
      featured: false,
    },
    {
      id: 4,
      bank: "Kotak Mahindra Bank",
      logo: "KM",
      type: "Personal Loan",
      rate: "10.99%",
      rateNote: "p.a.",
      minAmount: "₹50,000",
      maxAmount: "₹75,00,000",
      processingFee: "2%",
      disbursalTime: "24 hours",
      eligibility: "Salaried",
      rating: 4.7,
      featured: false,
    },
  ],
  health: [
    {
      id: 1,
      bank: "HDFC Bank",
      logo: "HD",
      type: "Health Loan",
      rate: "9.5%",
      rateNote: "p.a.",
      minAmount: "₹1,00,000",
      maxAmount: "₹30,00,000",
      processingFee: "0.5-1.5%",
      disbursalTime: "24 hours",
      eligibility: "Employed & Self-employed",
      rating: 4.8,
      featured: true,
    },
    {
      id: 2,
      bank: "ICICI Bank",
      logo: "IC",
      type: "Health Loan",
      rate: "10.25%",
      rateNote: "p.a.",
      minAmount: "₹1,00,000",
      maxAmount: "₹25,00,000",
      processingFee: "1-2%",
      disbursalTime: "24-48 hours",
      eligibility: "Salaried",
      rating: 4.6,
      featured: false,
    },
  ],
  "no-cibil": [
    {
      id: 1,
      bank: "Bajaj Finserv",
      logo: "BF",
      type: "No CIBIL Loan",
      rate: "12.5%",
      rateNote: "p.a.",
      minAmount: "₹5,000",
      maxAmount: "₹10,00,000",
      processingFee: "2-3%",
      disbursalTime: "1-2 days",
      eligibility: "All credit scores",
      rating: 4.5,
      featured: true,
    },
    {
      id: 2,
      bank: "EarlySalary",
      logo: "ES",
      type: "No CIBIL Loan",
      rate: "13.5%",
      rateNote: "p.a.",
      minAmount: "₹5,000",
      maxAmount: "₹5,00,000",
      processingFee: "3-4%",
      disbursalTime: "Few hours",
      eligibility: "Salaried",
      rating: 4.4,
      featured: false,
    },
  ],
  "short-term": [
    {
      id: 1,
      bank: "PaySense",
      logo: "PS",
      type: "Short-Term Loan",
      rate: "11.5%",
      rateNote: "p.a.",
      minAmount: "₹5,000",
      maxAmount: "₹5,00,000",
      processingFee: "1-2%",
      disbursalTime: "Few minutes",
      eligibility: "Salaried",
      rating: 4.5,
      featured: true,
    },
    {
      id: 2,
      bank: "CASHe",
      logo: "CS",
      type: "Short-Term Loan",
      rate: "12.99%",
      rateNote: "p.a.",
      minAmount: "₹5,000",
      maxAmount: "₹3,00,000",
      processingFee: "2-3%",
      disbursalTime: "1 hour",
      eligibility: "Salaried",
      rating: 4.3,
      featured: false,
    },
  ],
}

export default function LoanOffersDisplay() {
  const searchParams = useSearchParams()
  const loanType = searchParams.get("loanType") || "personal"
  const mobile = searchParams.get("mobile") || ""
  const city = searchParams.get("city") || ""
  const incomeRange = searchParams.get("incomeRange") || ""

  const offers = offersData[loanType] || offersData.personal

  const handleApplyClick = (offerId: number) => {
    // In a real scenario, this would redirect to the partner platform
    // For now, we'll show the redirect URL
    const redirectUrl = "https://www.banksathi.com/loans"
    window.open(redirectUrl, "_blank")
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Loan Offers</h1>
          <p className="text-lg text-muted-foreground mb-6">
            We found {offers.length} eligible offers for you. Compare and apply instantly.
          </p>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mobile && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Mobile</p>
                  <p className="font-semibold">{mobile}</p>
                </div>
              )}
              {city && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase">City</p>
                  <p className="font-semibold">{city}</p>
                </div>
              )}
              <div>
                <p className="text-xs text-muted-foreground uppercase">Loan Type</p>
                <p className="font-semibold capitalize">{loanType.replace("-", " ")}</p>
              </div>
              {incomeRange && (
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Income Range</p>
                  <p className="font-semibold text-sm">{incomeRange.replace("-", " - ")}</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className={`p-6 hover:shadow-lg transition-shadow relative overflow-hidden ${
                offer.featured ? "ring-2 ring-accent" : ""
              }`}
            >
              {offer.featured && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-xs font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary flex-shrink-0">
                    {offer.logo}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{offer.bank}</h3>
                    <p className="text-sm text-muted-foreground">{offer.type}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{offer.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xs text-muted-foreground uppercase mb-1">Interest Rate</p>
                  <p className="text-3xl font-bold text-primary">{offer.rate}</p>
                  <p className="text-xs text-muted-foreground">{offer.rateNote}</p>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xs text-muted-foreground uppercase mb-1">Loan Amount</p>
                  <p className="font-semibold">{offer.minAmount}</p>
                  <p className="text-sm text-muted-foreground">to {offer.maxAmount}</p>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xs text-muted-foreground uppercase mb-1">Processing Fee</p>
                  <p className="font-semibold">{offer.processingFee}</p>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xs text-muted-foreground uppercase mb-1">Disbursal Time</p>
                  <p className="font-semibold">{offer.disbursalTime}</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Eligibility</p>
                      <p className="text-xs text-muted-foreground">{offer.eligibility}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Quick Approval</p>
                      <p className="text-xs text-muted-foreground">{offer.disbursalTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Flexible Terms</p>
                      <p className="text-xs text-muted-foreground">6 months to 7 years</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => handleApplyClick(offer.id)}
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-white md:w-auto"
                >
                  Apply Now & Check Full Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 mt-12 bg-muted/30">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2">Next Steps After Applying</h3>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">1. Bank Contact:</span> The bank will call you within
                  24 hours to verify details
                </li>
                <li>
                  <span className="font-semibold text-foreground">2. Document Submission:</span> Upload required
                  documents via their platform
                </li>
                <li>
                  <span className="font-semibold text-foreground">3. KYC Verification:</span> Complete KYC process as
                  per bank requirements
                </li>
                <li>
                  <span className="font-semibold text-foreground">4. Approval & Disbursal:</span> Get approval and
                  receive funds in your account
                </li>
              </ol>
            </div>
          </div>
        </Card>

        <div className="mt-8 p-4 border border-border rounded-lg bg-background">
          <p className="text-xs text-muted-foreground">
            <strong>Disclaimer:</strong> Interest rates and loan amounts shown are indicative and subject to change
            based on bank policies and your credit profile. The actual offer from the bank will depend on their
            evaluation. LoanHub is not responsible for loan approval or rejection decisions made by banks.
          </p>
        </div>
      </div>
    </section>
  )
}
