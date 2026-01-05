const API_BASE_URL =
process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api";

export interface ApiResponse<T> {
success: boolean;
message: string;
data?: T;
error?: string;
statusCode: number;
}

class ApiClient {
private baseUrl: string;

constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // 🔐 Get JWT token (for logged-in users only)
  private getToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("authToken"); // MUST match login key
  }

  async request<T>(
    endpoint: string,
    options?: RequestInit & { requiresAuth?: boolean }
  ): Promise<ApiResponse<T>> {
    const { requiresAuth = true, ...fetchOptions } = options || {};
    const url = `${this.baseUrl}${endpoint}`;

    // ✅ ALWAYS start with clean headers
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    // ✅ Add Authorization ONLY when required AND token exists
    if (requiresAuth) {
      const token = this.getToken();
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers,
      });

      try {
        const data = (await response.json()) as ApiResponse<T>;
        return data;
      } catch {
        return {
          success: response.ok,
          message: response.ok ? "Success" : "Request failed",
          statusCode: response.status,
        } as ApiResponse<T>;
      }
    } catch (error) {
      console.error("[ApiClient] Network error:", error);
      return {
        success: false,
        message: "Network error",
        statusCode: 0,
      } as ApiResponse<T>;
    }
  }

  // ------------------ HTTP METHODS ------------------

  get<T>(endpoint: string, requiresAuth = true) {
    return this.request<T>(endpoint, {
      method: "GET",
      requiresAuth,
    });
  }

  post<T>(endpoint: string, body?: any, requiresAuth = true) {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      requiresAuth,
    });
  }

  put<T>(endpoint: string, body?: any, requiresAuth = true) {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
      requiresAuth,
    });
  }

  delete<T>(endpoint: string, requiresAuth = true) {
    return this.request<T>(endpoint, {
      method: "DELETE",
      requiresAuth,
    });
  }
}

const apiClient = new ApiClient(API_BASE_URL);
export default apiClient;
