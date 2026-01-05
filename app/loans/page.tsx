"use client";
import { useRouter } from "next/navigation";

export default function LoansPage() {
  const router = useRouter();

  return (
    <div style={styles.page}>
      {/* Background light reflection */}
      <div style={styles.glowLeft} />
      <div style={styles.glowRight} />

      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.logo} onClick={() => router.push("/")}>
          <span style={styles.logoBadge}>LH</span>
          <span style={styles.logoText}>LoanHub</span>
        </div>
      </div>

      {/* CONTENT CONTAINER */}
      <div style={styles.container}>
        <h1 style={styles.heading}>Explore Loan Options</h1>
        <p style={styles.subheading}>
          Choose the right loan from trusted banks & NBFCs with zero hassle.
        </p>

        {/* PRIMARY LOANS */}
        <div style={styles.grid}>
          <LoanCard title="Personal Loan" icon="⚡" desc="Flexible loans for daily needs" />
          <LoanCard title="Home Loan" icon="🏠" desc="Affordable home financing" />
          <LoanCard title="Business Loan" icon="💼" desc="Capital to grow faster" />
          <LoanCard title="Education Loan" icon="🎓" desc="Invest in your future" />
          <LoanCard title="Car Loan" icon="🚗" desc="Drive your dream car" />
          <LoanCard title="Health Loan" icon="❤️" desc="Medical expenses covered" />
        </div>

        {/* ADVANCED LOANS */}
        <h3 style={styles.advancedTitle}>Advanced Loans</h3>

        <div style={styles.advancedRow}>
          <AdvancedLoan title="Gold Loan" icon="🥇" />
          <AdvancedLoan title="Loan Against Property" icon="🏦" />
          <AdvancedLoan title="Instant Loan" icon="⚡" />
        </div>

        {/* FOOTER NOTE */}
        <div style={styles.footerBox}>
          🔒 Eligibility checks are <strong>100% safe</strong> and do not affect your
          CIBIL score. LoanHub ensures secure data handling with no hidden charges.
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function LoanCard({ title, desc, icon }: any) {
  const router = useRouter();
  return (
    <div style={styles.card} onClick={() => router.push("/apply")}>
      <div style={styles.icon}>{icon}</div>
      <h4 style={styles.cardTitle}>{title}</h4>
      <p style={styles.cardDesc}>{desc}</p>
      <button style={styles.button}>Check Eligibility →</button>
    </div>
  );
}

function AdvancedLoan({ title, icon }: any) {
  const router = useRouter();
  return (
    <div style={styles.advancedCard} onClick={() => router.push("/apply")}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <span style={{ fontWeight: 600 }}>{title}</span>
      <span style={styles.arrow}>→</span>
    </div>
  );
}

/* ================= STYLES ================= */

const styles: any = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0b1d44, #020617)",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
  },

  glowLeft: {
    position: "absolute",
    top: "-200px",
    left: "-200px",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(56,189,248,0.25), transparent 70%)",
    filter: "blur(90px)",
  },

  glowRight: {
    position: "absolute",
    bottom: "-200px",
    right: "-200px",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(37,99,235,0.25), transparent 70%)",
    filter: "blur(90px)",
  },

  header: {
    position: "absolute",
    top: 24,
    left: 40,
    zIndex: 10,
  },

  logo: {
    display: "flex",
    gap: 10,
    cursor: "pointer",
    alignItems: "center",
  },

  logoBadge: {
    background: "linear-gradient(135deg,#38bdf8,#2563eb)",
    padding: "8px 12px",
    borderRadius: 10,
    fontWeight: 800,
  },

  logoText: {
    fontSize: 20,
    fontWeight: 700,
  },

  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "100px 40px 60px",
  },

  heading: {
    fontSize: 38,
    fontWeight: 700,
  },

  subheading: {
    color: "#c7d2fe",
    marginBottom: 46,
    maxWidth: 700,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 28,
  },

  card: {
    padding: 28,
    borderRadius: 24,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 30px 70px rgba(0,0,0,0.55)",
    cursor: "pointer",
    transition: "transform .25s ease, box-shadow .25s ease",
  },

  icon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    background: "linear-gradient(135deg,#2563eb,#38bdf8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 700,
  },

  cardDesc: {
    fontSize: 14,
    color: "#a5b4fc",
    margin: "6px 0 18px",
  },

  button: {
    width: "100%",
    height: 42,
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg,#2563eb,#38bdf8)",
    color: "#fff",
    fontWeight: 600,
  },

  advancedTitle: {
    marginTop: 60,
    marginBottom: 18,
    fontSize: 22,
    fontWeight: 700,
  },

  advancedRow: {
    display: "flex",
    gap: 18,
    flexWrap: "wrap",
  },

  advancedCard: {
    padding: "14px 18px",
    borderRadius: 16,
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    gap: 12,
    cursor: "pointer",
  },

  arrow: {
    marginLeft: 4,
    color: "#38bdf8",
    fontWeight: 700,
  },

  footerBox: {
    marginTop: 48,
    padding: 18,
    borderRadius: 16,
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#c7d2fe",
    fontSize: 14,
    maxWidth: 900,
  },
};
