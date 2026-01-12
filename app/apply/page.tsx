"use client"

import type React from "react"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"

/* ================= LOAN CONFIG ================= */

const loanConfig: Record<string, any> = {
  personal: {
    title: "Personal Loan",
    subtitle: "Quick funds for your daily needs",
    logo: "⚡",
  },
  home: {
    title: "Home Loan",
    subtitle: "Affordable home financing",
    logo: "🏠",
  },
  business: {
    title: "Business Loan",
    subtitle: "Capital to grow your business",
    logo: "💼",
  },
  education: {
    title: "Education Loan",
    subtitle: "Invest in your future",
    logo: "🎓",
  },
  auto: {
    title: "Auto Loan",
    subtitle: "Drive your dream car",
    logo: "🚗",
  },
}

/* ================= COMPONENT ================= */

function ApplyPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const loanType = searchParams.get("loan") || "personal"
  const loan = loanConfig[loanType] || loanConfig["personal"]

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    city: "",
    annualIncome: "",
    employmentType: "",
    cibilScore: "",
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      const payload = {
        loanType,
        ...form,
      }
      console.log("Eligibility Payload:", payload)
      setLoading(false)
      setSubmitted(true)

      setTimeout(() => {
        router.push("/banks")
      }, 2000)
    }, 1500)
  }

  return (
    <div style={styles.page}>
      {/* Animated Background Elements */}
      <div style={styles.animatedBg1}></div>
      <div style={styles.animatedBg2}></div>
      <div style={styles.animatedBg3}></div>

      {/* NAVBAR */}
      <div style={styles.navbar}>
        <div style={styles.logo} onClick={() => router.push("/")}>
          <span style={styles.logoBadge}>LH</span>
          <span style={styles.logoText}>LoanHub</span>
        </div>
      </div>

      {/* TOP HEADER */}
      <div style={styles.header}>
        <span style={styles.loanIcon}>{loan.logo}</span>
        <div>
          <h1 style={styles.loanTitle}>{loan.title}</h1>
          <p style={styles.loanSubtitle}>{loan.subtitle}</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.content}>
        {/* LEFT SIDE */}
        <div style={styles.leftSection}>
          {/* Main About Section */}
          <div style={{ ...styles.mainContent, animationDelay: "0s" }}>
            <h2 style={styles.mainTitle}>Introducing LoanHub</h2>
            <p style={styles.mainText}>
              Experience the future of personal finance with LoanHub—where cutting-edge technology meets exceptional
              service to deliver financial solutions tailored to your needs.
            </p>
          </div>

          <div style={{ ...styles.premiumBox, animationDelay: "0.2s" }}>
            <h3 style={styles.premiumTitle}>Our Excellence</h3>
            <p style={styles.premiumSubtext}>
              Trusted by millions, backed by innovation, and committed to your financial success.
            </p>
          </div>

          {/* Mission Section */}
          <div style={{ ...styles.mainContent, animationDelay: "0.3s" }}>
            <h3 style={styles.sectionTitle}>Our Mission</h3>
            <p style={styles.mainText}>
              Democratizing access to credit with transparency, speed, and integrity for every Indian.
            </p>
          </div>

          {/* Vision Section */}
          <div style={{ ...styles.mainContent, animationDelay: "0.4s" }}>
            <h3 style={styles.sectionTitle}>Our Vision</h3>
            <p style={styles.mainText}>
              Building a financially empowered nation through seamless, secure, and inclusive financial services.
            </p>
          </div>

          {/* Stats Section */}
          <div style={{ ...styles.statsContainer, animationDelay: "0.5s" }}>
            <div style={styles.statCard}>
              <p style={styles.statNumber}>10M+</p>
              <p style={styles.statLabel}>Happy Customers</p>
            </div>
            <div style={styles.statCard}>
              <p style={styles.statNumber}>₹50K Cr+</p>
              <p style={styles.statLabel}>Loans Disbursed</p>
            </div>
            <div style={styles.statCard}>
              <p style={styles.statNumber}>99.9%</p>
              <p style={styles.statLabel}>System Uptime</p>
            </div>
          </div>

          {/* Values Section */}
          <div style={{ ...styles.mainContent, animationDelay: "0.6s" }}>
            <h3 style={styles.sectionTitle}>Why LoanHub Stands Out</h3>
            <ul style={styles.premiumList}>
              <li>Instant eligibility in just 60 seconds</li>
              <li>Compare 50+ lenders, one platform</li>
              <li>Military-grade data encryption</li>
              <li>Zero hidden charges guarantee</li>
              <li>Award-winning customer support</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE – PREMIUM FORM */}
        <div style={styles.rightSection}>
          <div style={styles.card}>
            {/* Premium Badge */}
            <div style={styles.badge}>⚡ Quick Application</div>

            <h2 style={styles.formTitle}>Check Your Eligibility</h2>
            <p style={styles.formSubtitle}>Fill in your details to see personalized loan offers</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={styles.form}>
                {/* Name Row */}
                <div style={styles.twoColGrid}>
                  <input
                    name="firstName"
                    placeholder="First Name"
                    required
                    onChange={handleChange}
                    style={styles.input}
                  />
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    required
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>

                {/* Email and Phone */}
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  style={styles.input}
                />

                <input
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  required
                  onChange={handleChange}
                  style={styles.input}
                />

                {/* City and Employment */}
                <div style={styles.twoColGrid}>
                  <input name="city" placeholder="City" required onChange={handleChange} style={styles.input} />
                  <select name="employmentType" required onChange={handleChange} style={styles.input}>
                    <option value="">Employment Type</option>
                    <option value="SALARIED">Salaried</option>
                    <option value="UNSALARIED">Self-Employed</option>
                    <option value="BUSINESS">Business Owner</option>
                  </select>
                </div>

                {/* Annual Income */}
                <input
                  name="annualIncome"
                  type="number"
                  placeholder="Annual Income (₹)"
                  required
                  onChange={handleChange}
                  style={styles.input}
                />

                {/* CIBIL Score */}
                <div>
                  <input
                    name="cibilScore"
                    type="number"
                    placeholder="CIBIL Score (Optional)"
                    min={300}
                    max={900}
                    onChange={handleChange}
                    style={styles.input}
                  />
                  <p style={styles.cibilHint}>💡 Adding your CIBIL score helps us show the most accurate offers</p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    ...styles.button,
                    opacity: loading ? 0.6 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? "Processing..." : "View Bank Offers →"}
                </button>
              </form>
            ) : (
              <div style={styles.successBox}>
                <div style={styles.successIcon}>✓</div>
                <h3 style={styles.successTitle}>Success!</h3>
                <p style={styles.successText}>Your application has been submitted successfully</p>
                <p style={styles.successSubtext}>Redirecting to loan offers...</p>
              </div>
            )}

            {/* Trust Indicators */}
            <div style={styles.trustSection}>
              <div style={styles.trustItem}>🔒 100% Secure & Encrypted</div>
              <div style={styles.trustItem}>🛡️ No impact on CIBIL Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER SECTION - LOANHUB DETAILS */}
      <div style={styles.footerSection}>
        <div style={styles.footerContent}>
          <div style={styles.footerCard}>
            <h3 style={styles.footerTitle}>Our Process</h3>
            <div style={styles.processSteps}>
              <div style={styles.step}>
                <span style={styles.stepNumber}>1</span>
                <p style={styles.stepText}>Apply in seconds</p>
              </div>
              <div style={styles.stepArrow}>→</div>
              <div style={styles.step}>
                <span style={styles.stepNumber}>2</span>
                <p style={styles.stepText}>Get approved fast</p>
              </div>
              <div style={styles.stepArrow}>→</div>
              <div style={styles.step}>
                <span style={styles.stepNumber}>3</span>
                <p style={styles.stepText}>Compare offers</p>
              </div>
              <div style={styles.stepArrow}>→</div>
              <div style={styles.step}>
                <span style={styles.stepNumber}>4</span>
                <p style={styles.stepText}>Get funded</p>
              </div>
            </div>
          </div>

          <div style={styles.footerCard}>
            <h3 style={styles.footerTitle}>LoanHub Advantage</h3>
            <ul style={styles.footerList}>
              <li>Fastest approval in the industry</li>
              <li>Multiple lender options</li>
              <li>Transparent fee structure</li>
              <li>24/7 dedicated support</li>
              <li>Flexible repayment options</li>
              <li>Secure & compliant</li>
            </ul>
          </div>

          <div style={styles.footerCard}>
            <h3 style={styles.footerTitle}>Financial Security</h3>
            <p style={styles.footerText}>
              Your data is protected with military-grade encryption. We comply with all RBI and NISM regulations. Your
              financial information remains confidential and secure.
            </p>
            <div style={styles.securityBadges}>
              <span style={styles.badge}>ISO 27001</span>
              <span style={styles.badge}>PCI DSS</span>
              <span style={styles.badge}>RBI Compliant</span>
            </div>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <p style={styles.footerBottomText}>
            © 2025 LoanHub | Making financial inclusion simple, transparent, and accessible to everyone
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div style={{ background: "#0b1d44", minHeight: "100vh" }} />}>
      <ApplyPageContent />
    </Suspense>
  )
}

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0b1d44, #020617)",
    color: "#fff",
    padding: "80px 60px 60px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    position: "relative",
    overflow: "hidden",
  },

  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "70px",
    background: "rgba(11, 29, 68, 0.7)",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    paddingLeft: "40px",
    borderBottom: "1px solid rgba(96, 165, 250, 0.1)",
    zIndex: 1000,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  },

  logoBadge: {
    background: "linear-gradient(135deg, #38bdf8, #2563eb)",
    padding: "8px 12px",
    borderRadius: "12px",
    fontWeight: 800,
  },

  logoText: {
    fontSize: "20px",
    fontWeight: 700,
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "60px",
    animation: "fadeInDown 0.8s ease-out",
    position: "relative",
    zIndex: 1,
  },

  loanIcon: {
    fontSize: "48px",
  },

  loanTitle: {
    fontSize: "42px",
    fontWeight: 700,
    background: "linear-gradient(135deg, #38bdf8, #60a5fa, #a78bfa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0 0 8px 0",
  },

  loanSubtitle: {
    color: "#bfdbfe",
    fontSize: "18px",
    margin: 0,
  },

  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    maxWidth: "1400px",
    margin: "0 auto 80px",
    position: "relative",
    zIndex: 1,
  },

  leftSection: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    justifyContent: "flex-start",
    paddingRight: "20px",
  },

  mainContent: {
    animation: "slideInLeft 0.8s ease-out forwards",
    opacity: 0,
  },

  mainTitle: {
    fontSize: "38px",
    fontWeight: 800,
    margin: "0 0 16px 0",
    background: "linear-gradient(135deg, #38bdf8, #60a5fa, #a78bfa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: 1.2,
  },

  sectionTitle: {
    fontSize: "26px",
    fontWeight: 700,
    margin: "0 0 12px 0",
    color: "#60a5fa",
  },

  mainText: {
    fontSize: "16px",
    color: "#cbd5f5",
    lineHeight: "1.8",
    margin: 0,
  },

  premiumBox: {
    padding: "24px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(34, 211, 238, 0.1))",
    border: "1px solid rgba(96, 165, 250, 0.3)",
    backdropFilter: "blur(10px)",
    animation: "slideInLeft 0.8s ease-out forwards",
    opacity: 0,
  },

  premiumTitle: {
    fontSize: "20px",
    fontWeight: 700,
    margin: "0 0 8px 0",
    color: "#60a5fa",
  },

  premiumSubtext: {
    fontSize: "15px",
    color: "#cbd5f5",
    margin: 0,
    lineHeight: "1.6",
  },

  premiumList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    color: "#cbd5f5",
    fontSize: "15px",
    lineHeight: "1.7",
  },

  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    animation: "slideInLeft 0.8s ease-out forwards",
    opacity: 0,
  },

  statCard: {
    padding: "20px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(59, 130, 246, 0.1))",
    border: "1px solid rgba(34, 211, 238, 0.3)",
    textAlign: "center",
    transition: "all 0.3s ease",
  },

  statNumber: {
    fontSize: "26px",
    fontWeight: 800,
    background: "linear-gradient(135deg, #22d3ee, #60a5fa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: "0 0 4px 0",
  },

  statLabel: {
    fontSize: "13px",
    color: "#60a5fa",
    margin: 0,
    fontWeight: 600,
  },

  rightSection: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  card: {
    padding: "40px",
    borderRadius: "28px",
    background: "linear-gradient(180deg, rgba(30, 58, 138, 0.4), rgba(15, 23, 42, 0.6))",
    border: "2px solid rgba(96, 165, 250, 0.25)",
    backdropFilter: "blur(20px)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    animation: "slideInRight 0.8s ease-out, glowPulse 3s ease-in-out infinite",
  },

  badge: {
    display: "inline-block",
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    color: "white",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: 700,
    marginBottom: "20px",
  },

  formTitle: {
    fontSize: "28px",
    fontWeight: 700,
    margin: "0 0 8px 0",
  },

  formSubtitle: {
    color: "#60a5fa",
    fontSize: "14px",
    margin: "0 0 24px 0",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  twoColGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },

  input: {
    height: "50px",
    padding: "0 16px",
    borderRadius: "12px",
    border: "1.5px solid rgba(96, 165, 250, 0.3)",
    background: "rgba(15, 23, 42, 0.7)",
    color: "#fff",
    fontSize: "14px",
    fontFamily: "inherit",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
    WebkitAppearance: "none",
  },

  cibilHint: {
    fontSize: "12px",
    color: "#60a5fa",
    margin: "6px 0 0 0",
  },

  button: {
    height: "54px",
    marginTop: "20px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    color: "#fff",
    fontWeight: 700,
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.3)",
  },

  successBox: {
    textAlign: "center",
    padding: "40px 20px",
  },

  successIcon: {
    width: "60px",
    height: "60px",
    background: "rgba(34, 197, 94, 0.2)",
    border: "2px solid #22c55e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
    fontSize: "32px",
    color: "#22c55e",
    animation: "scaleIn 0.5s ease-out",
  },

  successTitle: {
    fontSize: "24px",
    fontWeight: 700,
    margin: "0 0 8px 0",
  },

  successText: {
    color: "#60a5fa",
    margin: "0 0 8px 0",
  },

  successSubtext: {
    fontSize: "13px",
    color: "#60a5fa",
    margin: 0,
  },

  trustSection: {
    marginTop: "24px",
    paddingTop: "20px",
    borderTop: "1px solid rgba(96, 165, 250, 0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  trustItem: {
    textAlign: "center",
    fontSize: "13px",
    color: "#60a5fa",
  },

  animatedBg1: {
    position: "fixed",
    top: "10%",
    left: "5%",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent)",
    borderRadius: "50%",
    filter: "blur(40px)",
    animation: "float 15s ease-in-out infinite",
    zIndex: 0,
  },

  animatedBg2: {
    position: "fixed",
    bottom: "20%",
    right: "10%",
    width: "350px",
    height: "350px",
    background: "radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent)",
    borderRadius: "50%",
    filter: "blur(40px)",
    animation: "float 20s ease-in-out infinite reverse",
    zIndex: 0,
  },

  animatedBg3: {
    position: "fixed",
    top: "50%",
    right: "5%",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(34, 211, 238, 0.1), transparent)",
    borderRadius: "50%",
    filter: "blur(40px)",
    animation: "float 18s ease-in-out infinite",
    zIndex: 0,
  },

  footerSection: {
    marginTop: "60px",
    paddingTop: "60px",
    borderTop: "1px solid rgba(96, 165, 250, 0.2)",
    position: "relative",
    zIndex: 1,
  },

  footerContent: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
    maxWidth: "1400px",
    margin: "0 auto 40px",
  },

  footerCard: {
    animation: "slideInUp 0.8s ease-out forwards",
    opacity: 0,
  },

  footerTitle: {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "20px",
    background: "linear-gradient(135deg, #38bdf8, #60a5fa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  processSteps: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
  },

  step: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },

  stepNumber: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "16px",
  },

  stepText: {
    fontSize: "12px",
    color: "#60a5fa",
    textAlign: "center",
    margin: 0,
  },

  stepArrow: {
    fontSize: "20px",
    color: "#60a5fa",
    marginBottom: "20px",
  },

  footerList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    color: "#cbd5f5",
    fontSize: "14px",
    lineHeight: "1.8",
  },

  footerText: {
    color: "#cbd5f5",
    fontSize: "14px",
    lineHeight: "1.8",
    margin: 0,
  },

  securityBadges: {
    display: "flex",
    gap: "8px",
    marginTop: "16px",
    flexWrap: "wrap",
  },

  footerBottom: {
    textAlign: "center",
    paddingTop: "20px",
    borderTop: "1px solid rgba(96, 165, 250, 0.1)",
  },

  footerBottomText: {
    color: "#60a5fa",
    fontSize: "13px",
    margin: 0,
  },
}

if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.innerHTML = `
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes glowPulse {
      0%, 100% {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(96, 165, 250, 0.2);
      }
      50% {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 40px rgba(96, 165, 250, 0.4);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-30px);
      }
    }

    input:focus,
    select:focus {
      outline: none !important;
      border-color: rgba(96, 165, 250, 0.8) !important;
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1) !important;
    }

    button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 15px 35px -5px rgba(37, 99, 235, 0.4) !important;
    }
  `
  document.head.appendChild(style)
}
