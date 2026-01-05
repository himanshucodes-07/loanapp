"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result = await response.json();

      localStorage.setItem("token", result.data.token);
      localStorage.setItem("refreshToken", result.data.refreshToken);

      router.push("/");
    } catch (err) {
      alert("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      {/* 🔷 NAVBAR */}
      <header style={styles.navbar}>
        <div style={styles.logo} onClick={() => router.push("/")}>
          <span style={styles.logoIcon}>LH</span> LoanHub
        </div>

        <div style={styles.navActions}>
          <span style={styles.navLink} onClick={() => router.push("/register")}>
            Register
          </span>
          <button style={styles.getStarted} onClick={() => router.push("/")}>
            Get Started
          </button>
        </div>
      </header>

      {/* 🔐 LOGIN CARD */}
      <div style={styles.centerWrap}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Welcome Back</h2>
          <p style={styles.subText}>Login to continue to LoanHub</p>

          <input
            style={styles.input}
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            style={styles.loginBtn}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          <p style={styles.footerText}>
            Don’t have an account?{" "}
            <span
              style={styles.link}
              onClick={() => router.push("/register")}
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* 🎨 PREMIUM LOANHUB STYLES */
const styles: any = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(120deg, #020617, #020b2d, #0a1f44)",
    color: "#e5e7eb",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
    padding: "6px 10px",
    borderRadius: "8px",
    fontWeight: 800,
  },

  navActions: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },

  navLink: {
    cursor: "pointer",
    color: "#cbd5f5",
  },

  getStarted: {
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    border: "none",
    padding: "8px 16px",
    borderRadius: "999px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 500,
  },

  centerWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 80px)",
  },

  card: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(14px)",
    borderRadius: "16px",
    padding: "36px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  heading: {
    fontSize: "26px",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "6px",
  },

  subText: {
    textAlign: "center",
    fontSize: "14px",
    color: "#9ca3af",
    marginBottom: "26px",
  },

  input: {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    outline: "none",
    fontSize: "14px",
  },

  loginBtn: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    color: "#fff",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
  },

  footerText: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "13px",
    color: "#9ca3af",
  },

  link: {
    color: "#38bdf8",
    cursor: "pointer",
    fontWeight: 500,
  },
};
