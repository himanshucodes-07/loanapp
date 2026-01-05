"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl transition-smooth">
            <span className="text-primary-foreground font-bold text-lg">L</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            LoanHub
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden sm:inline-flex text-muted-foreground hover:text-foreground transition-smooth"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-gradient-to-r from-accent to-secondary hover:shadow-lg hover:shadow-accent/30 text-white transition-smooth"
          >
            <Link href="/check-eligibility">Check Eligibility</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
