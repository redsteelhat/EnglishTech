import { useState, useEffect } from 'react'
import { 
  mockMessages, 
  mockNotifications, 
  mockCertificates, 
  mockSecurityLogs,
  Message, 
  Notification, 
  Certificate, 
  SecurityLog 
} from '@/data'

// Messages Hook
export const useMessages = (userId?: string) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const filteredMessages = userId 
        ? mockMessages.filter(msg => msg.senderId === userId || msg.receiverId === userId)
        : mockMessages
      setMessages(filteredMessages)
      setLoading(false)
    }, 800)
  }, [userId])

  const sendMessage = (message: Message) => {
    setMessages(prev => [message, ...prev])
  }

  const markAsRead = (id: string) => {
    setMessages(prev => prev.map(msg => 
      msg.id === id ? { ...msg, isRead: true } : msg
    ))
  }

  const deleteMessage = (id: string) => {
    setMessages(prev => prev.filter(msg => msg.id !== id))
  }

  const getUnreadCount = () => {
    return messages.filter(msg => !msg.isRead).length
  }

  const getConversation = (user1: string, user2: string) => {
    return messages.filter(msg => 
      (msg.senderId === user1 && msg.receiverId === user2) ||
      (msg.senderId === user2 && msg.receiverId === user1)
    ).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
  }

  return {
    messages,
    loading,
    sendMessage,
    markAsRead,
    deleteMessage,
    getUnreadCount,
    getConversation
  }
}

// Notifications Hook
export const useNotifications = (userId?: string) => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const filteredNotifications = userId 
        ? mockNotifications.filter(notif => notif.userId === userId)
        : mockNotifications
      setNotifications(filteredNotifications)
      setLoading(false)
    }, 600)
  }, [userId])

  const addNotification = (notification: Notification) => {
    setNotifications(prev => [notification, ...prev])
  }

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ))
  }

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, isRead: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id))
  }

  const getUnreadCount = () => {
    return notifications.filter(notif => !notif.isRead).length
  }

  const getNotificationsByType = (type: 'info' | 'success' | 'warning' | 'error') => {
    return notifications.filter(notif => notif.type === type)
  }

  return {
    notifications,
    loading,
    addNotification,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    getUnreadCount,
    getNotificationsByType
  }
}

// Certificates Hook
export const useCertificates = (userId?: string) => {
  const [certificates, setCertificates] = useState<Certificate[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const filteredCertificates = userId 
        ? mockCertificates.filter(cert => cert.userId === userId)
        : mockCertificates
      setCertificates(filteredCertificates)
      setLoading(false)
    }, 700)
  }, [userId])

  const addCertificate = (certificate: Certificate) => {
    setCertificates(prev => [...prev, certificate])
  }

  const verifyCertificate = (id: string) => {
    setCertificates(prev => prev.map(cert => 
      cert.id === id ? { ...cert, isVerified: true } : cert
    ))
  }

  const getCertificateById = (id: string) => {
    return certificates.find(cert => cert.id === id)
  }

  const getCertificatesByCourse = (courseId: string) => {
    return certificates.filter(cert => cert.courseId === courseId)
  }

  const getVerifiedCertificates = () => {
    return certificates.filter(cert => cert.isVerified)
  }

  return {
    certificates,
    loading,
    addCertificate,
    verifyCertificate,
    getCertificateById,
    getCertificatesByCourse,
    getVerifiedCertificates
  }
}

// Security Logs Hook
export const useSecurityLogs = () => {
  const [securityLogs, setSecurityLogs] = useState<SecurityLog[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSecurityLogs(mockSecurityLogs)
      setLoading(false)
    }, 900)
  }, [])

  const addSecurityLog = (log: SecurityLog) => {
    setSecurityLogs(prev => [log, ...prev])
  }

  const getLogsByRiskLevel = (riskLevel: 'low' | 'medium' | 'high') => {
    return securityLogs.filter(log => log.riskLevel === riskLevel)
  }

  const getLogsByStatus = (status: 'success' | 'failed' | 'blocked') => {
    return securityLogs.filter(log => log.status === status)
  }

  const getLogsByUser = (userId: string) => {
    return securityLogs.filter(log => log.userId === userId)
  }

  const getRecentLogs = (limit: number = 20) => {
    return securityLogs
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit)
  }

  const getFailedLoginAttempts = () => {
    return securityLogs.filter(log => 
      log.action.includes('login') && log.status === 'failed'
    )
  }

  const getBlockedAttempts = () => {
    return securityLogs.filter(log => log.status === 'blocked')
  }

  const getHighRiskActivities = () => {
    return securityLogs.filter(log => log.riskLevel === 'high')
  }

  return {
    securityLogs,
    loading,
    addSecurityLog,
    getLogsByRiskLevel,
    getLogsByStatus,
    getLogsByUser,
    getRecentLogs,
    getFailedLoginAttempts,
    getBlockedAttempts,
    getHighRiskActivities
  }
}
