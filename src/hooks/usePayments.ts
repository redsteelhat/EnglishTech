import { useState, useEffect } from 'react'
import { 
  mockPayments, 
  mockAnalytics, 
  mockActivityLogs,
  Payment, 
  Analytics, 
  ActivityLog 
} from '@/data'

// Payments Hook
export const usePayments = () => {
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setPayments(mockPayments)
      setLoading(false)
    }, 1000)
  }, [])

  const addPayment = (payment: Payment) => {
    setPayments(prev => [...prev, payment])
  }

  const updatePayment = (id: string, updates: Partial<Payment>) => {
    setPayments(prev => prev.map(payment => 
      payment.id === id ? { ...payment, ...updates } : payment
    ))
  }

  const getPaymentById = (id: string) => {
    return payments.find(payment => payment.id === id)
  }

  const getPaymentsByUser = (userId: string) => {
    return payments.filter(payment => payment.userId === userId)
  }

  const getPaymentsByStatus = (status: 'pending' | 'completed' | 'failed' | 'refunded') => {
    return payments.filter(payment => payment.status === status)
  }

  const getPaymentsByDateRange = (startDate: string, endDate: string) => {
    return payments.filter(payment => {
      const paymentDate = payment.createdAt
      return paymentDate >= startDate && paymentDate <= endDate
    })
  }

  const approvePayment = (id: string) => {
    updatePayment(id, { 
      status: 'completed', 
      completedAt: new Date().toISOString() 
    })
  }

  const refundPayment = (id: string) => {
    updatePayment(id, { status: 'refunded' })
  }

  const getTotalRevenue = () => {
    return payments
      .filter(payment => payment.status === 'completed')
      .reduce((total, payment) => total + payment.amount, 0)
  }

  const getMonthlyRevenue = () => {
    // Group payments by month and calculate revenue
    const monthlyData: { [key: string]: number } = {}
    
    payments
      .filter(payment => payment.status === 'completed')
      .forEach(payment => {
        const month = payment.createdAt.substring(0, 7) // YYYY-MM
        monthlyData[month] = (monthlyData[month] || 0) + payment.amount
      })
    
    return monthlyData
  }

  return {
    payments,
    loading,
    addPayment,
    updatePayment,
    getPaymentById,
    getPaymentsByUser,
    getPaymentsByStatus,
    getPaymentsByDateRange,
    approvePayment,
    refundPayment,
    getTotalRevenue,
    getMonthlyRevenue
  }
}

// Analytics Hook
export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setAnalytics(mockAnalytics)
      setLoading(false)
    }, 1200)
  }, [])

  const refreshAnalytics = () => {
    setLoading(true)
    setTimeout(() => {
      // Simulate updated data
      setAnalytics({
        ...mockAnalytics,
        totalUsers: mockAnalytics.totalUsers + Math.floor(Math.random() * 10),
        totalRevenue: mockAnalytics.totalRevenue + Math.floor(Math.random() * 1000)
      })
      setLoading(false)
    }, 1000)
  }

  return {
    analytics,
    loading,
    refreshAnalytics
  }
}

// Activity Logs Hook
export const useActivityLogs = () => {
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setActivityLogs(mockActivityLogs)
      setLoading(false)
    }, 800)
  }, [])

  const addActivityLog = (log: ActivityLog) => {
    setActivityLogs(prev => [log, ...prev])
  }

  const getLogsByUser = (userId: string) => {
    return activityLogs.filter(log => log.userId === userId)
  }

  const getLogsByType = (type: 'user' | 'course' | 'payment' | 'system') => {
    return activityLogs.filter(log => log.type === type)
  }

  const getRecentLogs = (limit: number = 10) => {
    return activityLogs
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit)
  }

  return {
    activityLogs,
    loading,
    addActivityLog,
    getLogsByUser,
    getLogsByType,
    getRecentLogs
  }
}
