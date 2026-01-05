const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api"

export interface ApiResponse<T> {
  success: boolean
  message: string
  data?: T
  error?: string
  statusCode: number
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private getToken(): string | null {
    if (typeof window === "undefined") return null
    return localStorage.getItem("authToken")
  }

  private getHeaders(includeAuth = true): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    if (includeAuth) {
      const token = this.getToken()
      if (token) {
        headers["Authorization"] = `Bearer ${token}`
      }
    }

    return headers
  }

  async request<T>(endpoint: string, options?: RequestInit & { requiresAuth?: boolean }): Promise<ApiResponse<T>> {
    const { requiresAuth = true, ...fetchOptions } = options || {}
    const url = `${this.baseUrl}${endpoint}`

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers: this.getHeaders(requiresAuth),
      })

      const data: ApiResponse<T> = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "API request failed")
      }

      return data
    } catch (error) {
      console.error("[v0] API Error:", error)
      throw error
    }
  }

  async get<T>(endpoint: string, requiresAuth = true): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "GET", requiresAuth })
  }

  async post<T>(endpoint: string, body?: any, requiresAuth = true): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      requiresAuth,
    })
  }

  async put<T>(endpoint: string, body?: any, requiresAuth = true): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
      requiresAuth,
    })
  }

  async delete<T>(endpoint: string, requiresAuth = true): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "DELETE", requiresAuth })
  }
}

const apiClient = new ApiClient(API_BASE_URL)
export default apiClient
