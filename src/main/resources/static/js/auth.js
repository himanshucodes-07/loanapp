// Import AuthAPI and showNotification functions
const AuthAPI = {
  login: async (email, password) => {
    // Simulated login API call
    return { success: true, message: "Login successful!" }
  },
  register: async (userData) => {
    // Simulated register API call
    return { success: true, message: "Registration successful!" }
  },
}

const showNotification = (message, type) => {
  // Simulated notification function
  console.log(`${type}: ${message}`)
}

// Handle Login Form
const loginForm = document.getElementById("loginForm")
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    try {
      const response = await AuthAPI.login(email, password)

      if (response.success) {
        showNotification("Login successful!", "success")
        setTimeout(() => {
          window.location.href = "/check-eligibility"
        }, 1500)
      } else {
        showNotification(response.message || "Login failed", "error")
      }
    } catch (error) {
      showNotification("Error: " + error.message, "error")
    }
  })
}

// Handle Register Form
const registerForm = document.getElementById("registerForm")
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const userData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile").value,
      password: document.getElementById("password").value,
    }

    try {
      const response = await AuthAPI.register(userData)

      if (response.success) {
        showNotification("Registration successful! Please login.", "success")
        setTimeout(() => {
          window.location.href = "/login"
        }, 1500)
      } else {
        showNotification(response.message || "Registration failed", "error")
      }
    } catch (error) {
      showNotification("Error: " + error.message, "error")
    }
  })
}
