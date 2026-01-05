"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckEligibilityPage() {
  const router = useRouter();

  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!consent) {
      alert("Please accept consent to proceed");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:8080/api/loan-applications/check-eligibility",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            loanTypeId: 1,
            requestedAmount: 300000,
            requestedDuration: 24,
            userConsent: true,
          }),
        }
      );

      if (!res.ok) throw new Error();
      await res.json();
      setSubmitted(true);
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <header style={styles.navbar}>
        <div style={styles.logo} onClick={() => router.push("/")}>
          <span style={styles.logoIcon}>LH</span> LoanHub
        </div>
      </header>

      {/* HERO SECTION */}
      <section style={styles.hero}>
        {/* LEFT CONTENT */}
        <div>
          <span style={styles.badge}>Instant Eligibility · No CIBIL Impact</span>

          <h1 style={styles.title}>
            Your Perfect <br />
            <span style={styles.highlight}>Loan Awaits</span>
          </h1>

          <p style={styles.description}>
            LoanHub helps you compare and access loan offers from
            <strong> 50+ trusted banks & NBFCs</strong>.
            Check eligibility instantly and get personalized offers
            — without impacting your credit score.
          </p>

          {/* TRUST POINTS */}
          <div style={styles.trustGrid}>
            <div>
              <strong>100K+</strong>
              <span>Verified Users</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Bank Partners</span>
            </div>
            <div>
              <strong>₹5L+</strong>
              <span>Loans Matched</span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Check Loan Eligibility</h3>

          <label style={styles.checkbox}>
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <span>
              I agree to share my information with partner banks and NBFCs.
            </span>
          </label>

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={styles.button}
          >
            {loading ? "Checking..." : "Check Eligibility"}
          </button>

          {submitted && (
            <div style={styles.success}>
              ✅ Eligibility submitted successfully
              <br />
              Our team is reviewing your details.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* 🎨 FINAL PREMIUM STYLES */
const styles: any = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #020617 0%, #061a3a 50%, #020617 100%)",
    color: "#e5e7eb",
  },

  navbar: {
    padding: "18px 48px",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "22px",
    fontWeight: 700,
    cursor: "pointer",
  },

  logoIcon: {
    background: "linear-gradient(135deg,#38bdf8,#22d3ee)",
    color: "#020617",
    padding: "6px 12px",
    borderRadius: "10px",
    fontWeight: 800,
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: "80px",
    padding: "96px 80px",
    alignItems: "center",
  },

  badge: {
    display: "inline-block",
    background: "rgba(56,189,248,0.15)",
    color: "#7dd3fc",
    padding: "6px 14px",
    borderRadius: "999px",
    fontSize: "13px",
    marginBottom: "18px",
  },

  title: {
    fontSize: "52px",
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: "18px",
  },

  highlight: {
    color: "#22d3ee",
  },

  description: {
    fontSize: "17px",
    color: "#cbd5f5",
    maxWidth: "540px",
    marginBottom: "32px",
  },

  trustGrid: {
    display: "flex",
    gap: "36px",
    color: "#9ca3af",
    fontSize: "14px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.03))",
    backdropFilter: "blur(16px)",
    borderRadius: "22px",
    padding: "36px",          // ✔ balanced
    maxWidth: "400px",        // ✔ premium size
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 24px 48px rgba(0,0,0,0.55)",
  },

  cardTitle: {
    fontSize: "22px",
    marginBottom: "22px",
    fontWeight: 600,
  },

  checkbox: {
    display: "flex",
    gap: "10px",
    fontSize: "14px",
    color: "#cbd5f5",
    marginBottom: "26px",
    lineHeight: 1.5,
  },

  button: {
    width: "100%",
    padding: "13px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg,#2563eb,#38bdf8)",
    color: "#fff",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
  },

  success: {
    marginTop: "18px",
    color: "#86efac",
    fontSize: "14px",
    lineHeight: 1.4,
  },
};
