import { SecurityLog } from '../types'

export const mockSecurityLogs: SecurityLog[] = [
  {
    id: 'sec-1',
    userId: '1',
    userEmail: 'ahmet.yilmaz@email.com',
    action: 'login_success',
    ipAddress: '192.168.1.100',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    location: 'İstanbul, Türkiye',
    timestamp: '2024-07-18T09:15:00Z',
    riskLevel: 'low',
    status: 'success'
  },
  {
    id: 'sec-2',
    userId: 'sa1',
    userEmail: 'admin@englishtech.com',
    action: 'admin_access',
    ipAddress: '10.0.0.1',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    location: 'İstanbul, Türkiye',
    timestamp: '2024-07-18T08:30:00Z',
    riskLevel: 'medium',
    status: 'success'
  },
  {
    id: 'sec-3',
    userId: undefined,
    userEmail: 'unknown@suspicious.com',
    action: 'login_failed',
    ipAddress: '185.220.101.42',
    userAgent: 'curl/7.68.0',
    location: 'Rusya',
    timestamp: '2024-07-18T07:45:00Z',
    riskLevel: 'high',
    status: 'blocked'
  },
  {
    id: 'sec-4',
    userId: 't1',
    userEmail: 'emily.johnson@englishtech.com',
    action: 'password_change',
    ipAddress: '203.0.113.15',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    location: 'New York, ABD',
    timestamp: '2024-07-17T16:20:00Z',
    riskLevel: 'low',
    status: 'success'
  },
  {
    id: 'sec-5',
    userId: '2',
    userEmail: 'zeynep.kaya@email.com',
    action: 'payment_attempt',
    ipAddress: '78.186.124.89',
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
    location: 'Ankara, Türkiye',
    timestamp: '2024-07-17T14:30:00Z',
    riskLevel: 'low',
    status: 'success'
  },
  {
    id: 'sec-6',
    userId: undefined,
    userEmail: 'test@test.com',
    action: 'multiple_login_attempts',
    ipAddress: '198.51.100.25',
    userAgent: 'python-requests/2.28.1',
    location: 'Bilinmeyen',
    timestamp: '2024-07-17T12:15:00Z',
    riskLevel: 'high',
    status: 'blocked'
  },
  {
    id: 'sec-7',
    userId: '3',
    userEmail: 'mehmet.demir@email.com',
    action: 'profile_update',
    ipAddress: '94.123.45.67',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101',
    location: 'İzmir, Türkiye',
    timestamp: '2024-07-17T10:45:00Z',
    riskLevel: 'low',
    status: 'success'
  },
  {
    id: 'sec-8',
    userId: 't2',
    userEmail: 'david.smith@englishtech.com',
    action: 'course_update',
    ipAddress: '203.0.113.45',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15',
    location: 'Londra, İngiltere',
    timestamp: '2024-07-16T19:30:00Z',
    riskLevel: 'low',
    status: 'success'
  },
  {
    id: 'sec-9',
    userId: undefined,
    userEmail: 'hacker@malicious.org',
    action: 'sql_injection_attempt',
    ipAddress: '192.0.2.100',
    userAgent: 'sqlmap/1.6.12#stable',
    location: 'Çin',
    timestamp: '2024-07-16T15:22:00Z',
    riskLevel: 'high',
    status: 'blocked'
  },
  {
    id: 'sec-10',
    userId: '5',
    userEmail: 'can.arslan@email.com',
    action: 'course_enrollment',
    ipAddress: '85.96.123.45',
    userAgent: 'Mozilla/5.0 (Android 13; Mobile; rv:109.0) Gecko/109.0',
    location: 'Antalya, Türkiye',
    timestamp: '2024-07-16T13:10:00Z',
    riskLevel: 'low',
    status: 'success'
  },
  {
    id: 'sec-11',
    userId: 'sa2',
    userEmail: 'system.manager@englishtech.com',
    action: 'system_backup',
    ipAddress: '10.0.0.2',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    location: 'İstanbul, Türkiye',
    timestamp: '2024-07-16T02:00:00Z',
    riskLevel: 'medium',
    status: 'success'
  },
  {
    id: 'sec-12',
    userId: undefined,
    userEmail: 'attacker@evil.com',
    action: 'xss_attempt',
    ipAddress: '198.51.100.50',
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36',
    location: 'Rusya',
    timestamp: '2024-07-15T23:45:00Z',
    riskLevel: 'high',
    status: 'blocked'
  },
  {
    id: 'sec-13',
    userId: '4',
    userEmail: 'ayse.ozkan@email.com',
    action: 'login_success',
    ipAddress: '213.14.123.89',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    location: 'Bursa, Türkiye',
    timestamp: '2024-07-15T18:20:00Z',
    riskLevel: 'low',
    status: 'success'
  },
  {
    id: 'sec-14',
    userId: 't3',
    userEmail: 'sarah.wilson@englishtech.com',
    action: 'file_upload',
    ipAddress: '203.0.113.89',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    location: 'Toronto, Kanada',
    timestamp: '2024-07-15T14:30:00Z',
    riskLevel: 'low',
    status: 'success'
  },
  {
    id: 'sec-15',
    userId: undefined,
    userEmail: 'bot@spam.com',
    action: 'ddos_attempt',
    ipAddress: '198.51.100.75',
    userAgent: 'Go-http-client/1.1',
    location: 'Bilinmeyen',
    timestamp: '2024-07-15T11:00:00Z',
    riskLevel: 'high',
    status: 'blocked'
  }
]

// Utility functions for security logs
export const getSecurityLogsByRiskLevel = (riskLevel: 'low' | 'medium' | 'high') => {
  return mockSecurityLogs.filter(log => log.riskLevel === riskLevel)
}

export const getSecurityLogsByStatus = (status: 'success' | 'failed' | 'blocked') => {
  return mockSecurityLogs.filter(log => log.status === status)
}

export const getSecurityLogsByUser = (userId: string) => {
  return mockSecurityLogs.filter(log => log.userId === userId)
}

export const getRecentSecurityLogs = (limit: number = 10) => {
  return mockSecurityLogs
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit)
}
