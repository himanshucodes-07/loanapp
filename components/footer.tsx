"use client"

import Link from "next/link"
import { Mail, Phone, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-500/10 bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">LH</span>
                </div>
                <span className="text-2xl font-bold text-white">LoanHub</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner in finding the perfect loan match from 50+ banks and NBFCs.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-white mb-5">Product</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/loans" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Loan Types
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/check-eligibility" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Check Eligibility
                  </Link>
                </li>
                <li>
                  <Link href="/loan-offers" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Compare Offers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white mb-5">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-5">Get in Touch</h4>
              <div className="space-y-4">
                <a
                  href="mailto:support@loanhub.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">support@loanhub.com</span>
                </a>
                <a
                  href="tel:+918800000000"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+91 88000 00000</span>
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-8" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">© 2025 LoanHub. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
            >
              <Facebook className="w-5 h-5 text-blue-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
            >
              <Twitter className="w-5 h-5 text-blue-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
