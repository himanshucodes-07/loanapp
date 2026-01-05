"use client";

import { useEffect, useState } from "react";
import { getLoanTypes } from "@/lib/api-services/loan-service";

export default function LoansPage() {
  const [loanTypes, setLoanTypes] = useState<any[]>([]);

  useEffect(() => {
    getLoanTypes().then(setLoanTypes);
  }, []);

  return (
    <div>
      <h1>Loans</h1>
      <ul>
        {loanTypes.map((loan) => (
          <li key={loan.id}>{loan.name}</li>
        ))}
      </ul>
    </div>
  );
}
