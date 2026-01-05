import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">Page not found</p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. Let's get you back on track with finding the perfect loan.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </main>
  )
}
