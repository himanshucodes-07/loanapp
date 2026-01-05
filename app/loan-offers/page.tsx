"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Navigation from "@/components/navigation"
import LoanOffersDisplay from "@/components/loan-offers-display"
import Footer from "@/components/footer"

export default function LoanOffersPage() {
  const searchParams = useSearchParams()
  const applicationId = searchParams.get("applicationId")

  if (!applicationId) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Invalid loan application
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Navigation />
      <main className="pt-20">
        <Suspense fallback={<div className="text-white">Loading offers...</div>}>
          <LoanOffersDisplay applicationId={applicationId} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
