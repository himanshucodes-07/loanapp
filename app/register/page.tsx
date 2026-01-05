"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    city: "",
    annualIncome: "",
  });

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    const {
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      city,
      annualIncome,
    } = form;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !mobileNumber ||
      !city ||
      !annualIncome
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          mobileNumber,
          city,
          annualIncome: Number(annualIncome),
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const result = await response.json();

      localStorage.setItem("token", result.data.token);
      localStorage.setItem("refreshToken", result.data.refreshToken);

      router.push("/");
    } catch (error) {
      alert("Registration failed. Try again.");
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

      {/* REGISTER CARD */}
      <div style={styles.centerWrap}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Create your account</h2>
          <p style={styles.subText}>
            Join LoanHub and unlock personalized loan offers
          </p>

          <div style={styles.row}>
            <input
              style={styles.input}
              placeholder="First name"
              value={form.firstName}
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
            />
            <input
              style={styles.input}
              placeholder="Last name"
              value={form.lastName}
              onChange={(e) =>
                setForm({ ...form, lastName: e.target.value })
              }
            />
          </div>

          <input
            style={styles.input}
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Create password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <input
            style={styles.input}
            placeholder="Mobile number"
            value={form.mobileNumber}
            onChange={(e) =>
              setForm({ ...form, mobileNumber: e.target.value })
            }
          />

          <div style={styles.row}>
            <input
              style={styles.input}
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <input
              style={styles.input}
              type="number"
              placeholder="Annual income"
              value={form.annualIncome}
              onChange={(e) =>
                setForm({ ...form, annualIncome: e.target.value })
              }
            />
          </div>

          <button
            style={styles.registerBtn}
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <p style={styles.footerText}>
            Already have an account?{" "}
            <span
              style={styles.link}
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* 🎨 3D + BIGGER STYLES */
const styles: any = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0b1b3a, #020617 70%)",
    color: "#e5e7eb",
  },

  navbar: {
    padding: "18px 40px",
  },

  logo: {
    fontSize: "22px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  },

  logoIcon: {
    background: "linear-gradient(135deg, #38bdf8, #22d3ee)",
    color: "#020617",
    padding: "6px 12px",
    borderRadius: "10px",
    fontWeight: 800,
    boxShadow: "0 0 18px rgba(56,189,248,0.6)",
  },

  centerWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 80px)",
  },

  card: {
    width: "100%",
    maxWidth: "580px",
    padding: "48px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
    backdropFilter: "blur(18px)",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow:
      "0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15)",
  },

  heading: {
    fontSize: "28px",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "6px",
  },

  subText: {
    textAlign: "center",
    fontSize: "14px",
    color: "#9ca3af",
    marginBottom: "30px",
  },

  row: {
    display: "flex",
    gap: "14px",
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    marginBottom: "16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.07)",
    color: "#fff",
    fontSize: "14px",
  },

  registerBtn: {
    width: "100%",
    padding: "14px",
    marginTop: "14px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow:
      "0 12px 28px rgba(37,99,235,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
  },

  footerText: {
    marginTop: "24px",
    textAlign: "center",
    fontSize: "13px",
    color: "#9ca3af",
  },

  link: {
    color: "#38bdf8",
    cursor: "pointer",
    fontWeight: 600,
  },
};
