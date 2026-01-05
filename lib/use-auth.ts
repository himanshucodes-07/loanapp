"use client"

import { useState, useEffect, useCallback } from "react"
import { authService, type AuthResponse } from "./auth-service"

export const useAuth = () => {
  const [user, setUser] = useState<AuthResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Initialize auth from localStorage
    const storedUser = authService.getStoredUser()
    setUser(storedUser)
    setLoading(false)
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)
      const response = await authService.login({ email, password })
      if (response.success && response.data) {
        setUser(response.data)
        return response.data
      } else {
        throw new Error(response.message || "Login failed")
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Login failed"
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const register = useCallback(async (name: string, email: string, mobile: string, password: string) => {
    try {
      setLoading(true)
      setError(null)
      const response = await authService.register({ name, email, mobile, password })
      if (response.success && response.data) {
        setUser(response.data)
        return response.data
      } else {
        throw new Error(response.message || "Registration failed")
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Registration failed"
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(async () => {
    await authService.logout()
    setUser(null)
    setError(null)
  }, [])

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: authService.isAuthenticated(),
  }
}
