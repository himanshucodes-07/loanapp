import apiClient from "../api-client"

export const otpService = {
sendOtp: (email: string) =>
    apiClient.post("/api/otp/send", null, {
      params: { email }
    }),

  verifyOtp: (email: string, otp: string) =>
    apiClient.post("/api/otp/verify", null, {
      params: { email, otp }
    }),
}
