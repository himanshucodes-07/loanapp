import { apiClient } from "../api-client";

export const AuthService = {
login: (data: any) => {
    return apiClient("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  register: (data: any) => {
    return apiClient("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};
