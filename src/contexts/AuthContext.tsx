'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface User {
  id: string
  email: string
  name: string
  role: 'student' | 'teacher' | 'superadmin'
  subscriptionPlan?: 'basic' | 'premium' | 'enterprise'
  isActive: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in (localStorage check)
    const savedUser = localStorage.getItem('englishtech_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // TODO: Replace with actual API call
      // Role assignment logic based on email domain or specific emails
      let userRole: 'student' | 'teacher' | 'superadmin' = 'student'
      
      if (email === 'admin@englishtech.com') {
        userRole = 'superadmin'
      } else if (email.includes('teacher@') || email.includes('ogretmen@')) {
        userRole = 'teacher'
      }
      
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: userRole,
        subscriptionPlan: 'basic',
        isActive: true
      }
      
      setUser(mockUser)
      localStorage.setItem('englishtech_user', JSON.stringify(mockUser))
    } catch (error) {
      console.error('Login error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true)
    try {
      // TODO: Replace with actual API call
      const mockUser: User = {
        id: Date.now().toString(),
        email,
        name,
        role: 'student', // Default role for new registrations
        isActive: true
      }
      
      setUser(mockUser)
      localStorage.setItem('englishtech_user', JSON.stringify(mockUser))
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('englishtech_user')
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)
      localStorage.setItem('englishtech_user', JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      register,
      logout,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}
