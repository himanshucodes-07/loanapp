"use client";

import { useRouter, useSearchParams } from "next/navigation";

const BANKS = [
  {
    name: "HDFC Bank",
    loanType: "personal",
    amount: "₹50,000 – ₹40,00,000",
    interest: "10.75% – 21%",
    disbursal: "24 – 48 Hours",
    partner: "BankSathi",
    redirectUrl: "https://banksathi.com/hdfc-personal-loan",
  },
  {
    name: "ICICI Bank",
    loanType: "personal",
    amount: "₹50,000 – ₹50,00,000",
    interest: "10.85% – 22%",
    disbursal: "1 – 2 Days",
    partner: "BankSathi",
    redirectUrl: "https://banksathi.com/icici-personal-loan",
  },
  {
    name: "IDFC First Bank",
    loanType: "personal",
    amount: "₹20,000 – ₹10,00,000",
    interest: "10.99% – 23%",
    disbursal: "Instant – 24 Hours",
    partner: "EarnKaro",
    redirectUrl: "https://earnkaro.com/idfc-personal-loan",
  },
  {
    name: "Kotak Mahindra Bank",
    loanType: "personal",
    amount: "₹50,000 – ₹35,00,000",
    interest: "10.99% – 21%",
    disbursal: "1 – 3 Days",
    partner: "EarnKaro",
    redirectUrl: "https://earnkaro.com/kotak-personal-loan",
  },
  {
    name: "Bajaj Finserv",
    loanType: "personal",
    amount: "₹30,000 – ₹25,00,000",
    interest: "11% – 24%",
    disbursal: "Same Day",
    partner: "Cuelinks",
    redirectUrl: "https://cuelinks.com/bajaj-personal-loan",
  },
  {
    name: "Tata Capital",
    loanType: "personal",
    amount: "₹75,000 – ₹30,00,000",
    interest: "10.99% – 22%",
    disbursal: "24 – 72 Hours",
    partner: "Cuelinks",
    redirectUrl: "https://cuelinks.com/tata-capital-loan",
  },
];

export default function LendingPartnersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const loanType = searchParams.get("loanType") || "personal";

  const filteredBanks = BANKS.filter(
    (bank) => bank.loanType === loanType
  );

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <div style={styles.logo} onClick={() => router.push("/")}>
          <img src="/lh-logo.png" height={34} />
          <span>LoanHub</span>
        </div>
      </div>

      <h2 style={styles.title}>
        Based on your requirement ({loanType.toUpperCase()} Loan)
      </h2>

      {/* BANK CARDS */}
      <div style={styles.grid}>
        {filteredBanks.map((bank) => (
          <div key={bank.name} style={styles.card}>
            <h3>{bank.name}</h3>

            <p><strong>Loan Amount:</strong> {bank.amount}</p>
            <p><strong>Interest Rate:</strong> {bank.interest}</p>
            <p><strong>Disbursal:</strong> {bank.disbursal}</p>
            <p style={styles.partner}>
              Powered by {bank.partner}
            </p>

            <button
              style={styles.button}
              onClick={() => window.location.href = bank.redirectUrl}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <h4>About LoanHub</h4>
        <p>
          LoanHub is a secure digital platform that helps users apply for loans
          from RBI-regulated banks and NBFCs via verified affiliate partners.
        </p>

        <h4>Security & Trust</h4>
        <p>
          We do not store sensitive banking data. Applications are securely
          redirected to partner platforms.
        </p>

        <h4>Ownership</h4>
        <p>© LoanHub FinTech Solutions Pvt. Ltd.</p>
      </footer>
    </div>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #162a5f, #020617)",
    color: "#fff",
  },
  header: {
    padding: "20px 40px",
  },
  logo: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    cursor: "pointer",
    fontWeight: 600,
  },
  title: {
    textAlign: "center",
    margin: "20px 0 40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
    padding: "0 40px",
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
  },
  partner: {
    opacity: 0.8,
    fontSize: 13,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(90deg,#1d9bf0,#00d4ff)",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },
  footer: {
    marginTop: 60,
    padding: "0 40px 40px",
    opacity: 0.85,
    fontSize: 14,
  },
};
