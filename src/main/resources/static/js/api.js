// API Configuration
const API_BASE_URL = "http://localhost:8080/api"

// Store authentication token
let authToken = localStorage.getItem("authToken")

// API Helper Functions
async function apiCall(endpoint, method = "GET", data = null) {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  }

  if (authToken) {
    options.headers["Authorization"] = `Bearer ${authToken}`
  }

  if (data) {
    options.body = JSON.stringify(data)
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options)

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem("authToken")
        window.location.href = "/login"
      }
      throw new Error(`API Error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("[v0] API Error:", error)
    throw error
  }
}

// Authentication APIs
const AuthAPI = {
  register: async (userData) => {
    return apiCall("/auth/register", "POST", userData)
  },

  login: async (email, password) => {
    const response = await apiCall("/auth/login", "POST", { email, password })
    if (response.data && response.data.token) {
      localStorage.setItem("authToken", response.data.token)
      authToken = response.data.token
    }
    return response
  },

  logout: () => {
    localStorage.removeItem("authToken")
    authToken = null
  },
}

// Loan Type APIs
const LoanTypeAPI = {
  getAll: async () => {
    return apiCall("/loan-types")
  },

  getById: async (id) => {
    return apiCall(`/loan-types/${id}`)
  },
}

// Loan Application APIs
const LoanApplicationAPI = {
  checkEligibility: async (applicationData) => {
    return apiCall("/loan-applications/check-eligibility", "POST", applicationData)
  },

  getApplications: async () => {
    return apiCall("/loan-applications")
  },

  getApplicationById: async (id) => {
    return apiCall(`/loan-applications/${id}`)
  },
}

// Loan Offer APIs
const LoanOfferAPI = {
  getOffers: async (applicationId) => {
    return apiCall(`/loan-offers?applicationId=${applicationId}`)
  },

  getOfferById: async (id) => {
    return apiCall(`/loan-offers/${id}`)
  },
}

// Partner Links
const PARTNER_LINKS = {
  banksathi: "https://www.banksathi.com",
  earnkaro: "https://www.earnkaro.com",
  cuelinks: "https://www.cuelinks.com",
}

// Redirect to partner with tracking
function redirectToPartner(partnerName, offerId) {
  const partnerLinks = {
    BankSathi: PARTNER_LINKS.banksathi,
    EarnKaro: PARTNER_LINKS.earnkaro,
    Cuelinks: PARTNER_LINKS.cuelinks,
  }

  if (partnerLinks[partnerName]) {
    // Add tracking parameters
    const trackingUrl = `${partnerLinks[partnerName]}?ref=loanhub&offerId=${offerId}`
    window.open(trackingUrl, "_blank")
  }
}
