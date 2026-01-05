// Load Offers on page load
document.addEventListener("DOMContentLoaded", async () => {
  const offersGrid = document.getElementById("offersGrid")
  const applicationId = localStorage.getItem("applicationId")

  // Declare LoanOfferAPI variable here
  const LoanOfferAPI = {
    getOffers: async (applicationId) => {
      // Mock implementation for demonstration purposes
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            data: [
              {
                partnerName: "Partner A",
                offeredAmount: 100000,
                interestRate: 5,
                tenureMonths: 12,
                monthlyEmi: 8333,
                processingFee: 2000,
                approvalProbability: 90,
              },
              {
                partnerName: "Partner B",
                offeredAmount: 150000,
                interestRate: 6,
                tenureMonths: 24,
                monthlyEmi: 10000,
                processingFee: 3000,
                approvalProbability: 85,
              },
            ],
          })
        }, 1000)
      })
    },
  }

  if (!applicationId) {
    offersGrid.innerHTML = "<p>No application found. Please check eligibility first.</p>"
    return
  }

  try {
    const response = await LoanOfferAPI.getOffers(applicationId)

    if (response.success && response.data) {
      const offers = response.data

      if (offers.length === 0) {
        offersGrid.innerHTML = "<p>No offers available at this time. Please try again later.</p>"
        return
      }

      offersGrid.innerHTML = offers
        .map(
          (offer, index) => `
        <div class="offer-card ${index === 0 ? "recommended" : ""}">
          <h3>${offer.partnerName}</h3>
          
          <div class="offer-details">
            <div><strong>Loan Amount:</strong> ₹${offer.offeredAmount.toLocaleString()}</div>
            <div><strong>Interest Rate:</strong> <span style="color: #10b981;">${offer.interestRate}% p.a.</span></div>
            <div><strong>Tenure:</strong> ${offer.tenureMonths} months</div>
            <div><strong>Monthly EMI:</strong> ₹${offer.monthlyEmi.toLocaleString()}</div>
            <div><strong>Processing Fee:</strong> ₹${offer.processingFee.toLocaleString()}</div>
            <div><strong>Approval Probability:</strong> ${offer.approvalProbability}%</div>
          </div>

          <button onclick="redirectToPartner('${offer.partnerName}', ${offer.id})" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
            Apply Now
          </button>
        </div>
      `,
        )
        .join("")
    }
  } catch (error) {
    offersGrid.innerHTML = "<p>Error loading offers. Please try again later.</p>"
  }
})

function redirectToPartner(partnerName, offerId) {
  // Mock implementation for demonstration purposes
  window.location.href = `/apply/${partnerName}/${offerId}`
}
