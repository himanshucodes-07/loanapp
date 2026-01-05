"use client";

import { useEffect, useState } from "react";
import { getLoanTypes } from "@/lib/api-services/loan-service";

export default function LoansPage() {
  const [loanTypes, setLoanTypes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const data = await getLoanTypes();
        setLoanTypes(data);
      } catch (err) {
        setError("Failed to load loan types. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading loan types...</p>;
  }

  if (error) {
    return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Loans</h1>

      {loanTypes.map((loan) => (
        <div
          key={loan.id}
          style={{
            border: "1px solid #ddd",
            margin: "10px",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
          <h3>{loan.name}</h3>
          <p>{loan.description}</p>
          <p>
            Amount: ₹{loan.minAmount} – ₹{loan.maxAmount}
          </p>
          <p>Interest: {loan.baseInterestRate}%</p>
        </div>
      ))}
    </div>
  );
}
