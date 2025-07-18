import { Payment, Analytics, ActivityLog } from '../types'

export const mockPayments: Payment[] = [
  {
    id: 'pay-1',
    userId: '1',
    courseId: 'course-1',
    amount: 299,
    currency: 'TRY',
    status: 'completed',
    paymentMethod: 'stripe',
    transactionId: 'txn_1234567890',
    createdAt: '2024-07-15T10:30:00Z',
    completedAt: '2024-07-15T10:30:15Z'
  },
  {
    id: 'pay-2',
    userId: '2',
    courseId: 'course-3',
    amount: 199,
    currency: 'TRY',
    status: 'completed',
    paymentMethod: 'paypal',
    transactionId: 'pp_abcdef123456',
    createdAt: '2024-07-14T14:20:00Z',
    completedAt: '2024-07-14T14:20:30Z'
  },
  {
    id: 'pay-3',
    userId: '3',
    courseId: 'course-2',
    amount: 499,
    currency: 'TRY',
    status: 'completed',
    paymentMethod: 'stripe',
    transactionId: 'txn_0987654321',
    createdAt: '2024-07-13T09:15:00Z',
    completedAt: '2024-07-13T09:15:45Z'
  },
  {
    id: 'pay-4',
    userId: '5',
    courseId: 'course-4',
    amount: 399,
    currency: 'TRY',
    status: 'pending',
    paymentMethod: 'bank_transfer',
    transactionId: 'bt_xyz789012',
    createdAt: '2024-07-18T08:45:00Z'
  },
  {
    id: 'pay-5',
    userId: '1',
    courseId: 'course-5',
    amount: 249,
    currency: 'TRY',
    status: 'failed',
    paymentMethod: 'stripe',
    transactionId: 'txn_failed123',
    createdAt: '2024-07-17T16:30:00Z'
  },
  {
    id: 'pay-6',
    userId: '4',
    courseId: 'course-3',
    amount: 199,
    currency: 'TRY',
    status: 'refunded',
    paymentMethod: 'stripe',
    transactionId: 'txn_refund456',
    createdAt: '2024-07-10T12:00:00Z',
    completedAt: '2024-07-12T15:30:00Z'
  }
]

export const mockActivityLogs: ActivityLog[] = [
  {
    id: 'log-1',
    userId: '1',
    userName: 'Ahmet Yılmaz',
    action: 'course_enrollment',
    description: 'Business English Fundamentals kursuna kaydoldu',
    timestamp: '2024-07-18T09:15:00Z',
    type: 'course'
  },
  {
    id: 'log-2',
    userId: 't1',
    userName: 'Emily Johnson',
    action: 'lesson_upload',
    description: 'Yeni ders videosu yükledi',
    timestamp: '2024-07-18T08:30:00Z',
    type: 'course'
  },
  {
    id: 'log-3',
    userId: '2',
    userName: 'Zeynep Kaya',
    action: 'payment_completed',
    description: '199 TL ödeme tamamlandı',
    timestamp: '2024-07-17T16:45:00Z',
    type: 'payment'
  },
  {
    id: 'log-4',
    userId: 'sa1',
    userName: 'Admin User',
    action: 'system_backup',
    description: 'Sistem yedeklemesi tamamlandı',
    timestamp: '2024-07-17T02:00:00Z',
    type: 'system'
  },
  {
    id: 'log-5',
    userId: '3',
    userName: 'Mehmet Demir',
    action: 'certificate_earned',
    description: 'IELTS Preparation sertifikası aldı',
    timestamp: '2024-07-16T14:20:00Z',
    type: 'course'
  },
  {
    id: 'log-6',
    userId: 't2',
    userName: 'David Smith',
    action: 'course_update',
    description: 'Academic Writing Excellence kursunu güncelledi',
    timestamp: '2024-07-16T11:30:00Z',
    type: 'course'
  },
  {
    id: 'log-7',
    userId: '5',
    userName: 'Can Arslan',
    action: 'profile_update',
    description: 'Profil bilgilerini güncelledi',
    timestamp: '2024-07-16T10:15:00Z',
    type: 'user'
  },
  {
    id: 'log-8',
    userId: 'sa2',
    userName: 'System Manager',
    action: 'user_verification',
    description: 'Öğretmen hesabı doğrulandı',
    timestamp: '2024-07-15T15:45:00Z',
    type: 'user'
  }
]

export const mockAnalytics: Analytics = {
  totalUsers: 342,
  totalStudents: 287,
  totalTeachers: 23,
  totalCourses: 45,
  totalRevenue: 89750,
  monthlyRevenue: [12500, 15200, 18900, 22100, 19800, 21300, 23400, 26700, 24500, 28900, 31200, 33400],
  userGrowth: [23, 31, 45, 52, 48, 67, 73, 89, 94, 102, 118, 134],
  courseCompletionRate: 78.5,
  averageRating: 4.7,
  topCourses: [
    { id: 'course-3', title: 'English Conversation Mastery', students: 312 },
    { id: 'course-5', title: 'English Grammar Mastery', students: 278 },
    { id: 'course-1', title: 'Business English Fundamentals', students: 234 },
    { id: 'course-2', title: 'IELTS Academic Preparation', students: 189 },
    { id: 'course-6', title: 'TOEFL iBT Complete Course', students: 167 }
  ],
  recentActivity: mockActivityLogs.slice(0, 5)
}
