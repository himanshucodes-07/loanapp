const eligibilityForm = document.getElementById("eligibilityForm");
const eligibilityResult = document.getElementById("eligibilityResult");

const loadingSpinner = document.createElement("div");
loadingSpinner.classList.add("loading-spinner");
loadingSpinner.innerText = "Checking... Please wait...";

const LoanApplicationAPI = {
  checkEligibility: async (applicationData) => {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("User not logged in");
    }

    const response = await fetch(
      "http://localhost:8080/api/loan-applications/check-eligibility",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(applicationData),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Eligibility check failed");
    }

    return response.json();
  },
};

if (eligibilityForm) {
  eligibilityForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const applicationData = {
      income: Number(document.getElementById("monthlyIncome").value),
      employmentType: "SALARIED",
      loanAmount: Number(document.getElementById("loanAmount").value),
      tenure: 24,
    };

    eligibilityForm.appendChild(loadingSpinner);

    try {
      const response = await LoanApplicationAPI.checkEligibility(applicationData);
      eligibilityForm.removeChild(loadingSpinner);

      if (response.success) {
        const application = response.data;

        document.getElementById("resultContent").innerHTML = `
          <div class="result-details">
            <p><strong>Application ID:</strong> ${application.id}</p>
            <p><strong>Status:</strong> ${application.applicationStatus}</p>
          </div>
        `;

        eligibilityResult.style.display = "block";
        eligibilityResult.classList.add("fadeIn");
      } else {
        alert(response.message || "Eligibility failed");
      }
    } catch (error) {
      eligibilityForm.removeChild(loadingSpinner);
      alert(error.message);
    }
  });
}
