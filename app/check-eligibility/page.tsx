import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/loans");

  <button
    onClick={() => router.push("/apply")}
    className="eligibility-btn"
  >
    Check Eligibility →
  </button>

}
