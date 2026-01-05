"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    question: "Does checking eligibility impact my CIBIL score?",
    answer: "No, checking your eligibility on LoanHub uses a soft inquiry and does not impact your CIBIL score at all.",
  },
  {
    question: "How long does the loan approval take?",
    answer:
      "Most loans are approved within 24-48 hours. Some loans can be processed same day based on your profile and documentation.",
  },
  {
    question: "What documents do I need?",
    answer:
      "Typically, you'll need Pan Card, Aadhar, bank statements (last 3-6 months), and salary slips. Requirements vary by loan type.",
  },
  {
    question: "Can I apply for multiple loans?",
    answer:
      "Yes, you can apply for multiple loans from different banks. However, applying for too many simultaneously may affect your credit score.",
  },
  {
    question: "Is my data safe on LoanHub?",
    answer:
      "Absolutely. We use 256-bit SSL encryption and follow all RBI guidelines to protect your personal and financial data.",
  },
  {
    question: "Can I prepay my loan?",
    answer:
      "Yes, most loans on LoanHub allow prepayment. Some may have prepayment charges, which will be disclosed upfront.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-400">Get answers to common questions about loans and LoanHub</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="animate-fade-in-up group" style={{ animationDelay: `${index * 0.05}s` }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-blue-500/20 hover:border-blue-500/50 rounded-lg p-6 text-left transition-all duration-300 flex items-center justify-between"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-b border-blue-500/20 border-t-0 rounded-b-lg p-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
