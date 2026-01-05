"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ApplyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const loanTypeId = searchParams.get("loanTypeId");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    city: "",
    annualIncome: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Loan Type:", loanTypeId);
    console.log("User Data:", form);
    router.push("/banks");
  };

  return (
    <div style={styles.page}>
      {/* 🔹 Brand */}
      <div style={styles.navbar}>
        <div style={styles.logo} onClick={() => router.push("/")}>
          <span style={styles.logoBadge}>LH</span>
          <span style={styles.logoText}>LoanHub</span>
        </div>
      </div>

      {/* 🔹 Card */}
      <div style={styles.card}>
        <h1 style={styles.title}>Check Loan Eligibility</h1>
        <p style={styles.subtitle}>
          Compare offers from 50+ trusted banks. Instant eligibility with no CIBIL impact.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="firstName" placeholder="First Name" required onChange={handleChange} style={styles.input} />
          <input name="lastName" placeholder="Last Name" required onChange={handleChange} style={styles.input} />
          <input name="email" type="email" placeholder="Email Address" required onChange={handleChange} style={styles.input} />
          <input name="mobileNumber" placeholder="Mobile Number" required onChange={handleChange} style={styles.input} />
          <input name="city" placeholder="City" required onChange={handleChange} style={styles.input} />
          <input name="annualIncome" type="number" placeholder="Annual Income (₹)" required onChange={handleChange} style={styles.input} />

          <button type="submit" style={styles.button}>
            View Bank Offers →
          </button>
        </form>

        <div style={styles.trustBox}>
          🔒 Your information is 100% secure and encrypted. We never share your data without consent.
        </div>
      </div>

      <p style={styles.footerText}>
        LoanHub helps you find the best loan offers in minutes — transparent, secure, and hassle-free.
      </p>

      {/* 🔥 Premium focus effects */}
      <style>
        {`
          input::placeholder {
            color: #9ca3af;
          }

          input:focus {
            border-color: #38bdf8;
            background: rgba(255,255,255,0.14);
            box-shadow:
              0 0 0 4px rgba(56,189,248,0.35),
              inset 0 2px 6px rgba(0,0,0,0.5);
          }
        `}
      </style>
    </div>
  );
}

/* ================= PREMIUM STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0b1d44, #020617)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "90px",
    color: "#ffffff",
  },

  navbar: {
    position: "absolute",
    top: 24,
    left: 40,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  },

  logoBadge: {
    background: "linear-gradient(135deg,#38bdf8,#2563eb)",
    borderRadius: "12px",
    padding: "8px 12px",
    fontWeight: 800,
    fontSize: "14px",
    color: "#fff",
  },

  logoText: {
    fontSize: "20px",
    fontWeight: 700,
  },

  card: {
    width: "560px",
    padding: "48px",
    borderRadius: "26px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
    backdropFilter: "blur(26px)",
    border: "1.5px solid rgba(255,255,255,0.20)",
    boxShadow:
      "0 40px 90px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)",
  },

  title: {
    fontSize: "32px",
    fontWeight: 700,
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "15px",
    color: "#c7d2fe",
    marginBottom: "30px",
    lineHeight: 1.6,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  input: {
    height: "68px",
    padding: "0 22px",
    borderRadius: "18px",
    border: "1.5px solid rgba(255,255,255,0.30)",
    background: "rgba(2,6,23,0.65)",
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: 500,
    outline: "none",
    transition: "all 0.25s ease",
    boxShadow: "inset 0 2px 6px rgba(0,0,0,0.45)",
  },

  button: {
    marginTop: "10px",
    height: "60px",
    borderRadius: "16px",
    border: "none",
    background: "linear-gradient(135deg,#2563eb,#38bdf8)",
    color: "#ffffff",
    fontSize: "17px",
    fontWeight: 600,
    cursor: "pointer",
  },

  trustBox: {
    marginTop: "26px",
    padding: "14px",
    borderRadius: "14px",
    fontSize: "13px",
    color: "#a5b4fc",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    textAlign: "center",
  },

  footerText: {
    marginTop: "30px",
    fontSize: "13px",
    color: "#94a3b8",
  },
};
