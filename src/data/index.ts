// Export all types
export * from './types'

// Export all mock data
export * from './mock/users'
export * from './mock/courses'
export * from './mock/payments'
export * from './mock/communications'
export * from './mock/database'

// Utility functions for mock data
export const getMockUserById = (id: string) => {
  const { mockUsers } = require('./mock/users')
  return mockUsers.find((user: any) => user.id === id)
}

export const getMockCourseById = (id: string) => {
  const { mockCourses } = require('./mock/courses')
  return mockCourses.find((course: any) => course.id === id)
}

export const getMockUsersByRole = (role: 'student' | 'teacher' | 'superadmin') => {
  const { mockUsers } = require('./mock/users')
  return mockUsers.filter((user: any) => user.role === role)
}

export const getMockCoursesByInstructor = (instructorId: string) => {
  const { mockCourses } = require('./mock/courses')
  return mockCourses.filter((course: any) => course.instructorId === instructorId)
}

export const getMockPaymentsByUser = (userId: string) => {
  const { mockPayments } = require('./mock/payments')
  return mockPayments.filter((payment: any) => payment.userId === userId)
}

export const getMockMessagesByUser = (userId: string) => {
  const { mockMessages } = require('./mock/communications')
  return mockMessages.filter((message: any) => 
    message.senderId === userId || message.receiverId === userId
  )
}

export const getMockNotificationsByUser = (userId: string) => {
  const { mockNotifications } = require('./mock/communications')
  return mockNotifications.filter((notification: any) => notification.userId === userId)
}

export const getMockCertificatesByUser = (userId: string) => {
  const { mockCertificates } = require('./mock/communications')
  return mockCertificates.filter((certificate: any) => certificate.userId === userId)
}
