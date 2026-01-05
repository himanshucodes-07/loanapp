"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { authService, type AuthResponse } from "./api-services/auth-service"

interface AuthContextType {
  user: AuthResponse | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    password: string,
    city: string,
    annualIncome: number,
  ) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthResponse | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem("authToken")
    if (token) {
      const userData = localStorage.getItem("userData")
      if (userData) {
        setUser(JSON.parse(userData))
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await authService.login({ email, password })
      const authData = response.data
      setUser(authData)
      localStorage.setItem("authToken", authData.token)
      localStorage.setItem("refreshToken", authData.refreshToken)
      localStorage.setItem("userData", JSON.stringify(authData))
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber: string,
    password: string,
    city: string,
    annualIncome: number,
  ) => {
    setIsLoading(true)
    try {
      const response = await authService.register({
        firstName,
        lastName,
        email,
        mobileNumber,
        password,
        city,
        annualIncome,
      })
      const authData = response.data
      setUser(authData)
      localStorage.setItem("authToken", authData.token)
      localStorage.setItem("refreshToken", authData.refreshToken)
      localStorage.setItem("userData", JSON.stringify(authData))
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("authToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("userData")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
