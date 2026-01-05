import apiClient from "@/lib/api";

export interface LoanType {
id: number;
name: string;
description: string;
minAmount: number;
maxAmount: number;
baseInterestRate: number;
}

// ✅ PUBLIC API (NO AUTH)
export const getLoanTypes = async (): Promise<LoanType[]> => {
const res = await apiClient.get<LoanType[]>(
"/loan-types", // ✅ NO /api here
false          // ✅ PUBLIC
);

if (!res.success || !res.data) {
    throw new Error(res.message || "Failed to fetch loan types");
  }

  return res.data; // ✅ CORRECT
};
