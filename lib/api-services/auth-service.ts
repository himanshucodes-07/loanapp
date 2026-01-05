import ApiClient from "@/lib/api-client"

/* =======================
RESPONSE TYPES
======================= */

export interface AuthResponse {
userId: number
email: string
fullName: string
token: string
refreshToken: string
expiresIn: number
}

/* =======================
REQUEST TYPES
======================= */

export interface LoginRequest {
email: string
password: string
}

export interface RegisterRequest {
firstName: string
lastName: string
email: string
mobileNumber: string
password: string
city: string
annualIncome: number
}

/* =======================
AUTH SERVICE
======================= */

export const authService = {
// ✅ LOGIN
login: (data: LoginRequest) =>
    ApiClient.post<{ data: AuthResponse }>(
      "/api/auth/login",
      data
    ),

  // ✅ REGISTER
  register: (data: RegisterRequest) =>
    ApiClient.post<{ data: AuthResponse }>(
      "/api/auth/register",
      data
    ),

  // ✅ REFRESH TOKEN (TOKEN IN HEADER – IMPORTANT)
  refreshToken: (refreshToken: string) =>
    ApiClient.post<{ data: AuthResponse }>(
      "/api/auth/refresh-token",
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    ),
}
