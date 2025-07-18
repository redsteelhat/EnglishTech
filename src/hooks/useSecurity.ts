import { useState, useEffect } from 'react'
import { 
  mockSecurityLogs,
  SecurityLog 
} from '@/data'

// Security Hook
export const useSecurity = () => {
  const [securityLogs, setSecurityLogs] = useState<SecurityLog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setSecurityLogs(mockSecurityLogs)
      setLoading(false)
    }, 1000)
  }, [])

  const addSecurityLog = (log: SecurityLog) => {
    setSecurityLogs(prev => [log, ...prev])
  }

  const getSecurityLogById = (id: string) => {
    return securityLogs.find(log => log.id === id)
  }

  const getSecurityLogsByUser = (userId: string) => {
    return securityLogs.filter(log => log.userId === userId)
  }

  const getSecurityLogsByRiskLevel = (riskLevel: 'low' | 'medium' | 'high') => {
    return securityLogs.filter(log => log.riskLevel === riskLevel)
  }

  const getSecurityLogsByStatus = (status: 'success' | 'failed' | 'blocked') => {
    return securityLogs.filter(log => log.status === status)
  }

  const getSecurityLogsByTimeRange = (startDate: string, endDate: string) => {
    return securityLogs.filter(log => {
      const logDate = new Date(log.timestamp)
      const start = new Date(startDate)
      const end = new Date(endDate)
      return logDate >= start && logDate <= end
    })
  }

  const getRecentSecurityLogs = (limit: number = 10) => {
    return securityLogs
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit)
  }

  const getSecurityStats = () => {
    const total = securityLogs.length
    const successful = securityLogs.filter(log => log.status === 'success').length
    const failed = securityLogs.filter(log => log.status === 'failed').length
    const blocked = securityLogs.filter(log => log.status === 'blocked').length
    
    const highRisk = securityLogs.filter(log => log.riskLevel === 'high').length
    const mediumRisk = securityLogs.filter(log => log.riskLevel === 'medium').length
    const lowRisk = securityLogs.filter(log => log.riskLevel === 'low').length

    return {
      total,
      byStatus: {
        success: successful,
        failed: failed,
        blocked: blocked
      },
      byRiskLevel: {
        high: highRisk,
        medium: mediumRisk,
        low: lowRisk
      }
    }
  }

  const getThreatsByCountry = () => {
    const threats = securityLogs
      .filter(log => log.riskLevel === 'high' || log.status === 'blocked')
      .reduce((acc, log) => {
        const country = log.location.split(',').pop()?.trim() || 'Unknown'
        acc[country] = (acc[country] || 0) + 1
        return acc
      }, {} as Record<string, number>)

    return Object.entries(threats)
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count)
  }

  const getLoginAttempts = () => {
    const attempts = securityLogs.filter(log => 
      log.action.includes('login') || log.action.includes('authentication')
    )
    
    const successful = attempts.filter(log => log.status === 'success').length
    const failed = attempts.filter(log => log.status === 'failed' || log.status === 'blocked').length
    
    return {
      total: attempts.length,
      successful,
      failed,
      successRate: attempts.length > 0 ? Math.round((successful / attempts.length) * 100) : 0
    }
  }

  const blockUser = (userId: string, reason: string) => {
    const blockLog: SecurityLog = {
      id: `block-${Date.now()}`,
      userId,
      userEmail: `blocked-user-${userId}@example.com`,
      action: 'user_blocked',
      ipAddress: 'admin-action',
      userAgent: 'admin-panel',
      location: 'System',
      timestamp: new Date().toISOString(),
      riskLevel: 'high',
      status: 'blocked'
    }
    addSecurityLog(blockLog)
  }

  return {
    securityLogs,
    loading,
    addSecurityLog,
    getSecurityLogById,
    getSecurityLogsByUser,
    getSecurityLogsByRiskLevel,
    getSecurityLogsByStatus,
    getSecurityLogsByTimeRange,
    getRecentSecurityLogs,
    getSecurityStats,
    getThreatsByCountry,
    getLoginAttempts,
    blockUser
  }
}

export default useSecurity
