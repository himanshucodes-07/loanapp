"use client"

import { useEffect, useState } from "react"
import apiClient from "@/lib/api"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Star,
  ExternalLink,
  AlertCircle,
} from "lucide-react"

// 🔹 MOCK OFFERS (UI ONLY)
const offersData: Record<string, any[]> = {
  personal: [
    {
      id: 1,
      bank: "HDFC Bank",
      rating: 4.8,
      rate: "10.5%",
      minAmount: "₹10,000",
      maxAmount: "₹50,00,000",
      processingFee: "2%",
      disbursalTime: "24–48 hrs",
    },
  ],
  health: [
    {
      id: 2,
      bank: "ICICI Bank",
      rating: 4.6,
      rate: "9.5%",
      minAmount: "₹50,000",
      maxAmount: "₹30,00,000",
      processingFee: "1.5%",
      disbursalTime: "24 hrs",
    },
  ],
}

interface Props {
  applicationId: string
}

export default function LoanOffersDisplay({ applicationId }: Props) {
  const [loanType, setLoanType] = useState("personal")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!applicationId) return

    apiClient
      // ✅ PUBLIC CALL (NO TOKEN)
      .get(`/loan-applications/${applicationId}`, false)
      .then((res) => {
        if (res?.success) {
          const backendType = res.data.loanTypeName
            .toLowerCase()
            .replace("_loan", "")
            .replace("_", "-")

          setLoanType(backendType)
        }
      })
      .finally(() => setLoading(false))
  }, [applicationId])

  if (loading) {
    return (
      <div className="text-white text-center py-20">
        Loading offers...
      </div>
    )
  }

  const offers = offersData[loanType] || offersData.personal

  return (
    <section className="py-12 md:py-20">
      <div className="container max-w-5xl">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Your Loan Offers
        </h1>

        <p className="text-muted-foreground mb-10">
          We found {offers.length} eligible offers for you.
        </p>

        <div className="space-y-4">
          {offers.map((offer) => (
            <Card key={offer.id} className="p-6">
              <div className="grid md:grid-cols-5 gap-6">
                <div>
                  <h3 className="font-bold">{offer.bank}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {offer.rating}
                  </div>
                </div>

                <div>
                  <p className="text-xs">Interest</p>
                  <p className="text-2xl font-bold">{offer.rate}</p>
                </div>

                <div>
                  <p className="text-xs">Amount</p>
                  <p>{offer.minAmount} – {offer.maxAmount}</p>
                </div>

                <div>
                  <p className="text-xs">Fee</p>
                  <p>{offer.processingFee}</p>
                </div>

                <div>
                  <p className="text-xs">Disbursal</p>
                  <p>{offer.disbursalTime}</p>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  onClick={() =>
                    window.open("https://www.banksathi.com/loans", "_blank")
                  }
                >
                  Apply Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 mt-10 bg-muted/30 text-white">
          <AlertCircle className="inline mr-2" />
          Final approval depends on bank evaluation.
        </Card>
      </div>
    </section>
  )
}
