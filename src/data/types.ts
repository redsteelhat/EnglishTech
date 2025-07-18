// User Types
export interface User {
  id: string
  email: string
  name: string
  role: 'student' | 'teacher' | 'superadmin'
  avatar?: string
  createdAt: string
  lastLogin?: string
  isActive: boolean
  phone?: string
  dateOfBirth?: string
  location?: string
  bio?: string
}

export interface Student extends User {
  role: 'student'
  enrolledCourses: string[]
  completedCourses: string[]
  totalLearningHours: number
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  preferredLanguage: string
  learningGoals: string[]
  certificates: string[]
}

export interface Teacher extends User {
  role: 'teacher'
  specializations: string[]
  experience: number
  rating: number
  totalStudents: number
  teachingHours: number
  qualifications: string[]
  languages: string[]
  hourlyRate: number
  isVerified: boolean
  courses: string[]
}

export interface SuperAdmin extends User {
  role: 'superadmin'
  permissions: string[]
  department: string
  lastActivity: string
}

// Course Types
export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  instructorId: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: number // in hours
  price: number
  currency: string
  category: string
  tags: string[]
  thumbnail: string
  rating: number
  totalStudents: number
  totalLessons: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  language: string
  prerequisites: string[]
  learningOutcomes: string[]
}

// Lesson Types
export interface Lesson {
  id: string
  courseId: string
  title: string
  description: string
  duration: number // in minutes
  type: 'video' | 'text' | 'quiz' | 'assignment'
  order: number
  content: string
  videoUrl?: string
  isCompleted: boolean
  isLocked: boolean
}

// Payment Types
export interface Payment {
  id: string
  userId: string
  courseId: string
  amount: number
  currency: string
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  paymentMethod: 'stripe' | 'paypal' | 'bank_transfer'
  transactionId: string
  createdAt: string
  completedAt?: string
}

// Analytics Types
export interface Analytics {
  totalUsers: number
  totalStudents: number
  totalTeachers: number
  totalCourses: number
  totalRevenue: number
  monthlyRevenue: number[]
  userGrowth: number[]
  courseCompletionRate: number
  averageRating: number
  topCourses: { id: string; title: string; students: number }[]
  recentActivity: ActivityLog[]
}

export interface ActivityLog {
  id: string
  userId: string
  userName: string
  action: string
  description: string
  timestamp: string
  type: 'user' | 'course' | 'payment' | 'system'
}

// Communication Types
export interface Message {
  id: string
  senderId: string
  senderName: string
  receiverId: string
  receiverName: string
  subject: string
  content: string
  isRead: boolean
  createdAt: string
  attachments?: string[]
}

export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  isRead: boolean
  createdAt: string
  actionUrl?: string
}

// Certificate Types
export interface Certificate {
  id: string
  userId: string
  courseId: string
  courseName: string
  studentName: string
  completionDate: string
  certificateUrl: string
  grade?: string
  isVerified: boolean
}

// Security Types
export interface SecurityLog {
  id: string
  userId?: string
  userEmail?: string
  action: string
  ipAddress: string
  userAgent: string
  location: string
  timestamp: string
  riskLevel: 'low' | 'medium' | 'high'
  status: 'success' | 'failed' | 'blocked'
}

// Database Types
export interface DatabaseInfo {
  tables: {
    name: string
    rows: number
    size: string
    lastUpdated: string
  }[]
  totalSize: string
  backups: {
    id: string
    name: string
    size: string
    createdAt: string
    type: 'full' | 'incremental'
  }[]
  performance: {
    queryTime: number
    connections: number
    cpuUsage: number
    memoryUsage: number
  }
}
