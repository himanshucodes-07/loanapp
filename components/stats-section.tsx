"use client"

export default function StatsSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-600/20 to-teal-600/20 border-y border-blue-500/20">
      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: "0s" }}>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              10M+
            </p>
            <p className="text-gray-400 mt-2">Loans Disbursed</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              ₹50,000Cr
            </p>
            <p className="text-gray-400 mt-2">Total Financed</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              4.8★
            </p>
            <p className="text-gray-400 mt-2">Customer Rating</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              24hrs
            </p>
            <p className="text-gray-400 mt-2">Avg Approval Time</p>
          </div>
        </div>
      </div>
    </section>
  )
}
