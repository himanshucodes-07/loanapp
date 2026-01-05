"use client";

import { useRouter, useSearchParams } from "next/navigation";

const BANKS = [
  {
    name: "HDFC Bank",
    short: "HDFC",
    color: "#004C8F",
    loanTypes: ["personal", "business"],
    amount: "₹50K – ₹40L",
    interest: "10.75% – 21%",
    disbursal: "24–48 Hours",
    partner: "BankSathi",
    redirectUrl: "https://banksathi.com/hdfc-loan",
  },
  {
    name: "ICICI Bank",
    short: "ICICI",
    color: "#F58220",
    loanTypes: ["personal", "business"],
    amount: "₹50K – ₹50L",
    interest: "10.85% – 22%",
    disbursal: "1–2 Days",
    partner: "BankSathi",
    redirectUrl: "https://banksathi.com/icici-loan",
  },
  {
    name: "Axis Bank",
    short: "AXIS",
    color: "#97144D",
    loanTypes: ["personal", "business"],
    amount: "₹50K – ₹25L",
    interest: "11% – 22%",
    disbursal: "2–3 Days",
    partner: "BankSathi",
    redirectUrl: "https://banksathi.com/axis-loan",
  },
  {
    name: "Kotak Mahindra",
    short: "KOTAK",
    color: "#ED1C24",
    loanTypes: ["personal", "business"],
    amount: "₹50K – ₹35L",
    interest: "10.99% – 21%",
    disbursal: "1–3 Days",
    partner: "EarnKaro",
    redirectUrl: "https://earnkaro.com/kotak-loan",
  },
  {
    name: "IDFC First Bank",
    short: "IDFC",
    color: "#9E1B32",
    loanTypes: ["personal", "business"],
    amount: "₹20K – ₹10L",
    interest: "10.99% – 23%",
    disbursal: "Instant – 24 Hrs",
    partner: "EarnKaro",
    redirectUrl: "https://earnkaro.com/idfc-loan",
  },
  {
    name: "Bajaj Finserv",
    short: "BAJAJ",
    color: "#005BAC",
    loanTypes: ["personal", "business"],
    amount: "₹30K – ₹25L",
    interest: "11% – 24%",
    disbursal: "Same Day",
    partner: "Cuelinks",
    redirectUrl: "https://cuelinks.com/bajaj-loan",
  },
  {
    name: "Tata Capital",
    short: "TATA",
    color: "#2B78E4",
    loanTypes: ["personal", "business"],
    amount: "₹75K – ₹30L",
    interest: "10.99% – 22%",
    disbursal: "24–72 Hours",
    partner: "Cuelinks",
    redirectUrl: "https://cuelinks.com/tata-capital-loan",
  },
];

export default function LendingPartnersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const rawLoanType = searchParams.get("loanType") || "personal";
  const loanType = rawLoanType.toLowerCase();

  const loanLabel =
    loanType === "business"
      ? "BUSINESS"
      : loanType === "home"
      ? "HOME"
      : "PERSONAL";

  const filteredBanks = BANKS.filter((bank) =>
    bank.loanTypes.includes(loanType)
  );

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <span style={styles.logo} onClick={() => router.push("/")}>
          LoanHub
        </span>
      </div>

      {/* TITLE */}
      <h2 style={styles.title}>
        Best Banks for Your {loanLabel} Loan
      </h2>

      <p style={styles.subtitle}>
        Compare trusted banks & get fast disbursal with minimum documentation
      </p>

      {/* BANKS */}
      <div style={styles.grid}>
        {filteredBanks.map((bank) => (
          <div key={bank.name} style={styles.card}>
            <div
              style={{
                ...styles.bankLogo,
                background: bank.color,
              }}
            >
              {bank.short}
            </div>

            <h3>{bank.name}</h3>

            <div style={styles.info}>
              <span>💰 Amount: {bank.amount}</span>
              <span>📉 Interest: {bank.interest}</span>
              <span>⚡ Disbursal: {bank.disbursal}</span>
            </div>

            <p style={styles.partner}>Powered by {bank.partner}</p>

            <button
              style={styles.button}
              onClick={() => (window.location.href = bank.redirectUrl)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>
          LoanHub is a secure fintech platform helping users access loans from
          RBI-regulated banks & NBFCs.
        </p>
        <p>© LoanHub FinTech Solutions Pvt. Ltd.</p>
      </footer>
    </div>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    background: `
      radial-gradient(circle at top left, #22c55e33, transparent 40%),
      radial-gradient(circle at bottom right, #facc1533, transparent 40%),
      linear-gradient(180deg, #020617, #020617)
    `,
    color: "#fff",
  },
  header: {
    padding: "24px 40px",
  },
  logo: {
    fontSize: 32,
    fontWeight: 800,
    letterSpacing: "0.5px",
    cursor: "pointer",
    color: "#22c55e",
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    marginTop: 10,
  },
  subtitle: {
    textAlign: "center",
    opacity: 0.8,
    marginBottom: 40,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 30,
    padding: "0 40px",
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(14px)",
    padding: 26,
    borderRadius: 18,
    boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
    transition: "transform .3s",
  },
  bankLogo: {
    width: 64,
    height: 64,
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 16,
    marginBottom: 12,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginTop: 10,
    opacity: 0.9,
  },
  partner: {
    fontSize: 13,
    opacity: 0.75,
    marginTop: 10,
  },
  button: {
    marginTop: 18,
    width: "100%",
    padding: 14,
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(90deg,#22c55e,#facc15)",
    color: "#000",
    fontWeight: 800,
    cursor: "pointer",
  },
  footer: {
    marginTop: 70,
    padding: "0 40px 40px",
    textAlign: "center",
    opacity: 0.7,
    fontSize: 14,
  },
};
