// Load Loans on page load
document.addEventListener("DOMContentLoaded", async () => {
  const loansGrid = document.getElementById("loansGrid")
  const LoanTypeAPI = window.LoanTypeAPI // Declare the LoanTypeAPI variable

  try {
    const response = await LoanTypeAPI.getAll()

    if (response.success && response.data) {
      const loans = response.data

      loansGrid.innerHTML = loans
        .map(
          (loan) => `
        <div class="loan-card">
          <h3>${loan.name}</h3>
          <p>${loan.description}</p>
          
          <div class="loan-details">
            <p><strong>Loan Amount:</strong> ₹${loan.minAmount.toLocaleString()} - ₹${loan.maxAmount.toLocaleString()}</p>
            <p><strong>Tenure:</strong> ${loan.minTenureMonths} - ${loan.maxTenureMonths} months</p>
            <p><strong>Interest Rate:</strong> ${loan.minInterestRate}% - ${loan.maxInterestRate}%</p>
            <p><strong>Processing Fee:</strong> ${loan.processingFeePercentage}%</p>
          </div>

          <div class="required-documents">
            <h4>Required Documents:</h4>
            <p>${loan.requiredDocuments}</p>
          </div>

          <a href="/check-eligibility?type=${loan.id}" class="btn btn-primary">Check Eligibility</a>
        </div>
      `,
        )
        .join("")
    }
  } catch (error) {
    loansGrid.innerHTML = "<p>Error loading loans. Please try again later.</p>"
  }
})
