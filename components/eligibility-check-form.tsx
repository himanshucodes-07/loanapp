"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const loanTypes = [
  { id: "personal", label: "Personal Loan" },
  { id: "business", label: "Business Loan" },
  { id: "health", label: "Health Loan" },
];

const cities = ["Mumbai", "Delhi", "Bangalore", "Jaipur"];

const incomeRanges = [
  { id: "low", label: "Below 25k" },
  { id: "mid", label: "25k - 50k" },
  { id: "high", label: "Above 50k" },
];

export default function EligibilityCheckFormClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialLoanType = searchParams.get("type") || "";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    loanType: initialLoanType,
    mobile: "",
    city: "",
    incomeRange: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/loan-offers");
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Check Eligibility</h2>

      {step === 1 && (
        <div className="space-y-3">
          {loanTypes.map((t) => (
            <button
              key={t.id}
              className="w-full border p-2 rounded"
              onClick={() => {
                setFormData({ ...formData, loanType: t.id });
                setStep(2);
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <form onSubmit={submit} className="space-y-3 mt-4">
          <input
            className="w-full border p-2"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            required
          />

          <select
            className="w-full border p-2"
            value={formData.city}
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
            required
          >
            <option value="">Select City</option>
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select
            className="w-full border p-2"
            value={formData.incomeRange}
            onChange={(e) =>
              setFormData({ ...formData, incomeRange: e.target.value })
            }
            required
          >
            <option value="">Select Income</option>
            {incomeRanges.map((i) => (
              <option key={i.id} value={i.id}>
                {i.label}
              </option>
            ))}
          </select>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      )}
    </Card>
  );
}
