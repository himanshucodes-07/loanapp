"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">LH</span>
            </div>
            <span className="text-2xl font-bold text-white hidden sm:inline">LoanHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#loans" className="text-gray-300 hover:text-white transition-colors">
              Loans
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="px-6 py-2 text-white hover:text-gray-200 transition-colors">
              Login
            </Link>
            <Link
              href="/check-eligibility"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 border-t border-white/10 pt-4">
            <a href="#loans" className="block text-gray-300 hover:text-white transition-colors">
              Loans
            </a>
            <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#features" className="block text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#faq" className="block text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
            <Link href="/check-eligibility" className="block">
              <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
