import { Message, Notification, Certificate, SecurityLog } from '../types'

export const mockMessages: Message[] = [
  {
    id: 'msg-1',
    senderId: '1',
    senderName: 'Ahmet Yılmaz',
    receiverId: 't1',
    receiverName: 'Emily Johnson',
    subject: 'Business English Course Question',
    content: 'Merhaba Emily, Business English kursunda 3. ünitedeki presentation konusunda bir sorum var. Acaba bu konuyu biraz daha detaylandırabilir misiniz?',
    isRead: false,
    createdAt: '2024-07-18T09:30:00Z',
    attachments: []
  },
  {
    id: 'msg-2',
    senderId: 't1',
    senderName: 'Emily Johnson',
    receiverId: '1',
    receiverName: 'Ahmet Yılmaz',
    subject: 'Re: Business English Course Question',
    content: 'Merhaba Ahmet, tabii ki! Presentation konusunu daha detaylı anlatmak için özel bir video hazırlayacağım. Bu hafta içinde kursa ekleyeceğim.',
    isRead: true,
    createdAt: '2024-07-18T10:15:00Z',
    attachments: []
  },
  {
    id: 'msg-3',
    senderId: '2',
    senderName: 'Zeynep Kaya',
    receiverId: 'sa1',
    receiverName: 'Admin User',
    subject: 'Technical Support Request',
    content: 'Merhaba, video oynatma konusunda sorun yaşıyorum. Chrome tarayıcısında videolar açılmıyor. Yardımcı olabilir misiniz?',
    isRead: false,
    createdAt: '2024-07-17T14:20:00Z',
    attachments: ['screenshot.png']
  },
  {
    id: 'msg-4',
    senderId: 't2',
    senderName: 'David Smith',
    receiverId: 'sa2',
    receiverName: 'System Manager',
    subject: 'Course Material Update',
    content: 'IELTS kursuma yeni practice testler ekledim. Öğrencilere duyuru gönderilsin mi?',
    isRead: true,
    createdAt: '2024-07-17T11:45:00Z',
    attachments: ['new-tests.pdf']
  },
  {
    id: 'msg-5',
    senderId: '3',
    senderName: 'Mehmet Demir',
    receiverId: 't2',
    receiverName: 'David Smith',
    subject: 'Certificate Request',
    content: 'Merhaba David, IELTS preparation kursunu tamamladım. Sertifikamı ne zaman alabilirim?',
    isRead: false,
    createdAt: '2024-07-16T16:30:00Z',
    attachments: []
  }
]

export const mockNotifications: Notification[] = [
  {
    id: 'notif-1',
    userId: '1',
    title: 'Yeni Ders Eklendi',
    message: 'Business English Fundamentals kursuna yeni bir ders eklendi.',
    type: 'info',
    isRead: false,
    createdAt: '2024-07-18T08:30:00Z',
    actionUrl: '/dashboard/courses/course-1'
  },
  {
    id: 'notif-2',
    userId: '2',
    title: 'Ödeme Onaylandı',
    message: 'English Conversation Mastery kursu için ödemeniz başarıyla alındı.',
    type: 'success',
    isRead: true,
    createdAt: '2024-07-17T16:45:00Z',
    actionUrl: '/dashboard/courses/course-3'
  },
  {
    id: 'notif-3',
    userId: '3',
    title: 'Sertifika Hazır',
    message: 'IELTS Academic Preparation sertifikanız hazır. İndirebilirsiniz.',
    type: 'success',
    isRead: false,
    createdAt: '2024-07-16T14:20:00Z',
    actionUrl: '/dashboard/certificates'
  },
  {
    id: 'notif-4',
    userId: '4',
    title: 'Ders Hatırlatması',
    message: 'Bugün 15:00\'da canlı ders var. Katılmayı unutmayın!',
    type: 'warning',
    isRead: false,
    createdAt: '2024-07-18T09:00:00Z',
    actionUrl: '/dashboard/live-lessons'
  },
  {
    id: 'notif-5',
    userId: 't1',
    title: 'Yeni Öğrenci Mesajı',
    message: 'Ahmet Yılmaz size bir mesaj gönderdi.',
    type: 'info',
    isRead: false,
    createdAt: '2024-07-18T09:30:00Z',
    actionUrl: '/teacher/messages'
  },
  {
    id: 'notif-6',
    userId: 'sa1',
    title: 'Sistem Bakımı',
    message: 'Sistem bakımı başarıyla tamamlandı.',
    type: 'success',
    isRead: true,
    createdAt: '2024-07-17T02:00:00Z'
  }
]

export const mockCertificates: Certificate[] = [
  {
    id: 'cert-1',
    userId: '1',
    courseId: 'course-2',
    courseName: 'IELTS Academic Preparation',
    studentName: 'Ahmet Yılmaz',
    completionDate: '2024-07-15T16:00:00Z',
    certificateUrl: '/certificates/cert-1.pdf',
    grade: 'A',
    isVerified: true
  },
  {
    id: 'cert-2',
    userId: '3',
    courseId: 'course-1',
    courseName: 'Business English Fundamentals',
    studentName: 'Mehmet Demir',
    completionDate: '2024-07-10T14:30:00Z',
    certificateUrl: '/certificates/cert-2.pdf',
    grade: 'A+',
    isVerified: true
  },
  {
    id: 'cert-3',
    userId: '3',
    courseId: 'course-3',
    courseName: 'English Conversation Mastery',
    studentName: 'Mehmet Demir',
    completionDate: '2024-06-28T10:15:00Z',
    certificateUrl: '/certificates/cert-3.pdf',
    grade: 'A',
    isVerified: true
  },
  {
    id: 'cert-4',
    userId: '5',
    courseId: 'course-1',
    courseName: 'Business English Fundamentals',
    studentName: 'Can Arslan',
    completionDate: '2024-07-05T11:45:00Z',
    certificateUrl: '/certificates/cert-4.pdf',
    grade: 'B+',
    isVerified: true
  }
]
