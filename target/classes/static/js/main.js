// Page initialization
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Page loaded")
})

// Show notification
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "1rem",
    backgroundColor: type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#2563eb",
    color: "white",
    borderRadius: "0.5rem",
    zIndex: 9999,
    animation: "slideInRight 0.3s ease-out",
  })

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

// Utility function to check if user is logged in
function isLoggedIn() {
  return localStorage.getItem("authToken") !== null
}

// Redirect to login if not authenticated
function redirectIfNotLoggedIn() {
  if (!isLoggedIn()) {
    window.location.href = "/login"
  }
}
