// Dashboard specific mock data

// Student dashboard data
export const mockStudentDashboard = {
  currentUser: {
    id: '1',
    name: 'Ahmet Yılmaz',
    email: 'ahmet.yilmaz@email.com',
    level: 'Intermediate',
    avatar: '/images/avatars/student1.jpg',
    totalHours: 156,
    completedCourses: 2,
    activeCourses: 3,
    certificates: 1
  },
  enrolledCourses: [
    {
      id: 'course-1',
      title: 'Business English Fundamentals',
      instructor: 'Emily Johnson',
      progress: 75,
      nextLesson: 'İş Toplantıları',
      totalLessons: 16,
      completedLessons: 12,
      thumbnail: '/images/courses/business-english.jpg',
      estimatedCompletion: '3 gün'
    },
    {
      id: 'course-3',
      title: 'English Conversation Mastery',
      instructor: 'Emily Johnson',
      progress: 45,
      nextLesson: 'Sosyal Durumlar',
      totalLessons: 12,
      completedLessons: 5,
      thumbnail: '/images/courses/conversation.jpg',
      estimatedCompletion: '1 hafta'
    },
    {
      id: 'course-2',
      title: 'IELTS Academic Preparation',
      instructor: 'David Smith',
      progress: 20,
      nextLesson: 'Reading Strategies',
      totalLessons: 24,
      completedLessons: 5,
      thumbnail: '/images/courses/ielts-prep.jpg',
      estimatedCompletion: '3 hafta'
    }
  ],
  availableCourses: [
    {
      id: 'course-5',
      title: 'English Grammar Mastery',
      instructor: 'Sarah Wilson',
      rating: 4.6,
      students: 278,
      price: 249,
      thumbnail: '/images/courses/grammar.jpg',
      level: 'Intermediate'
    },
    {
      id: 'course-6',
      title: 'TOEFL iBT Complete Course',
      instructor: 'David Smith',
      rating: 4.9,
      students: 167,
      price: 549,
      thumbnail: '/images/courses/toefl.jpg',
      level: 'Advanced'
    }
  ],
  recentAchievements: [
    {
      id: 'ach-1',
      title: 'İlk Kurs Tamamlandı',
      description: 'İlk kursunuzu başarıyla tamamladınız!',
      icon: 'Trophy',
      earnedAt: '2024-07-10T15:30:00Z',
      points: 100
    },
    {
      id: 'ach-2',
      title: '100 Saat Tamamlandı',
      description: '100 saat öğrenim süresini geçtiniz!',
      icon: 'Clock',
      earnedAt: '2024-07-15T10:20:00Z',
      points: 150
    }
  ],
  upcomingLessons: [
    {
      id: 'lesson-1',
      title: 'Business Presentations',
      course: 'Business English Fundamentals',
      instructor: 'Emily Johnson',
      scheduledAt: '2024-07-19T14:00:00Z',
      duration: 60,
      type: 'live',
      participants: 12
    },
    {
      id: 'lesson-2',
      title: 'Speaking Practice',
      course: 'English Conversation Mastery',
      instructor: 'Emily Johnson',
      scheduledAt: '2024-07-20T16:00:00Z',
      duration: 45,
      type: 'live',
      participants: 8
    }
  ],
  weeklyProgress: [
    { day: 'Pzt', hours: 2.5 },
    { day: 'Sal', hours: 1.8 },
    { day: 'Çar', hours: 3.2 },
    { day: 'Per', hours: 2.1 },
    { day: 'Cum', hours: 2.7 },
    { day: 'Cmt', hours: 1.5 },
    { day: 'Paz', hours: 2.0 }
  ]
}

// Teacher dashboard data  
export const mockTeacherDashboard = {
  currentUser: {
    id: 't1',
    name: 'Emily Johnson',
    email: 'emily.johnson@englishtech.com',
    specialization: 'Business English',
    avatar: '/images/avatars/teacher1.jpg',
    rating: 4.9,
    totalStudents: 156,
    activeCourses: 8,
    totalHours: 1240
  },
  myCourses: [
    {
      id: 'course-1',
      title: 'Business English Fundamentals',
      students: 45,
      completionRate: 78,
      averageRating: 4.8,
      revenue: 13455,
      lastUpdated: '2024-07-15T10:30:00Z'
    },
    {
      id: 'course-3',
      title: 'English Conversation Mastery',
      students: 67,
      completionRate: 85,
      averageRating: 4.7,
      revenue: 13333,
      lastUpdated: '2024-07-12T14:20:00Z'
    }
  ],
  recentStudents: [
    {
      id: '1',
      name: 'Ahmet Yılmaz',
      avatar: '/images/avatars/student1.jpg',
      course: 'Business English Fundamentals',
      progress: 75,
      lastActivity: '2024-07-18T09:15:00Z'
    },
    {
      id: '2',
      name: 'Zeynep Kaya',
      avatar: '/images/avatars/student2.jpg',
      course: 'English Conversation Mastery',
      progress: 60,
      lastActivity: '2024-07-17T16:30:00Z'
    }
  ],
  upcomingLessons: [
    {
      id: 'lesson-1',
      title: 'Business Presentations',
      course: 'Business English Fundamentals',
      scheduledAt: '2024-07-19T14:00:00Z',
      duration: 60,
      participants: 12,
      materials: ['presentation-tips.pdf', 'sample-slides.pptx']
    },
    {
      id: 'lesson-2',
      title: 'Speaking Practice Session',
      course: 'English Conversation Mastery',
      scheduledAt: '2024-07-20T16:00:00Z',
      duration: 45,
      participants: 8,
      materials: ['conversation-topics.pdf']
    }
  ],
  monthlyStats: {
    newStudents: 23,
    completedLessons: 45,
    averageRating: 4.8,
    totalEarnings: 15600
  }
}

// Admin dashboard specific data
export const mockAdminDashboard = {
  systemHealth: {
    status: 'healthy',
    uptime: '99.9%',
    responseTime: '120ms',
    activeUsers: 1247,
    systemLoad: 65
  },
  recentActivities: [
    {
      id: 'act-1',
      type: 'user_registration',
      description: 'Yeni kullanıcı kaydı: Fatma Şen',
      timestamp: '2024-07-18T10:15:00Z',
      priority: 'low'
    },
    {
      id: 'act-2', 
      type: 'course_completion',
      description: 'Kurs tamamlandı: Mehmet Demir - IELTS Preparation',
      timestamp: '2024-07-18T09:45:00Z',
      priority: 'medium'
    },
    {
      id: 'act-3',
      type: 'payment_received',
      description: 'Ödeme alındı: 549 TL - TOEFL Course',
      timestamp: '2024-07-18T09:30:00Z',
      priority: 'high'
    }
  ],
  pendingActions: [
    {
      id: 'pending-1',
      type: 'teacher_verification',
      description: '3 öğretmen onay bekliyor',
      count: 3,
      priority: 'high'
    },
    {
      id: 'pending-2',
      type: 'content_review',
      description: '7 içerik inceleme bekliyor',
      count: 7,
      priority: 'medium'
    },
    {
      id: 'pending-3',
      type: 'support_tickets',
      description: '12 destek talebi bekliyor',
      count: 12,
      priority: 'medium'
    }
  ]
}

// Calendar events for all user types
export const mockCalendarEvents = [
  {
    id: 'event-1',
    title: 'Business Presentations Workshop',
    type: 'live_lesson',
    instructor: 'Emily Johnson',
    course: 'Business English Fundamentals',
    date: '2024-07-19',
    time: '14:00',
    duration: 60,
    participants: 12,
    description: 'Etkili iş sunumu yapma teknikleri'
  },
  {
    id: 'event-2',
    title: 'IELTS Writing Practice',
    type: 'assignment_due',
    instructor: 'David Smith',
    course: 'IELTS Academic Preparation',
    date: '2024-07-20',
    time: '23:59',
    duration: 0,
    participants: 0,
    description: 'Task 2 essay submission deadline'
  },
  {
    id: 'event-3',
    title: 'Conversation Club',
    type: 'group_session',
    instructor: 'Sarah Wilson',
    course: 'English Conversation Mastery',
    date: '2024-07-21',
    time: '16:00',
    duration: 45,
    participants: 8,
    description: 'Serbest konuşma pratiği'
  },
  {
    id: 'event-4',
    title: 'Grammar Quiz',
    type: 'quiz',
    instructor: 'Sarah Wilson',
    course: 'English Grammar Mastery',
    date: '2024-07-22',
    time: '10:00',
    duration: 30,
    participants: 0,
    description: 'Intermediate level grammar assessment'
  },
  {
    id: 'event-5',
    title: 'Academic Writing Webinar',
    type: 'webinar',
    instructor: 'Michael Brown',
    course: 'Academic Writing Excellence',
    date: '2024-07-23',
    time: '19:00',
    duration: 90,
    participants: 25,
    description: 'Research paper writing techniques'
  }
]

// Progress tracking data
export const mockProgressData = {
  overallStats: [
    {
      label: 'Toplam Öğrenim Saati',
      value: 156,
      target: 200,
      unit: 'saat',
      progress: 78
    },
    {
      label: 'Tamamlanan Kurslar',
      value: 2,
      target: 5,
      unit: 'kurs',
      progress: 40
    },
    {
      label: 'Ortalama Quiz Puanı',
      value: 87,
      target: 90,
      unit: '%',
      progress: 97
    },
    {
      label: 'Günlük Hedef',
      value: 75,
      target: 100,
      unit: '%',
      progress: 75
    }
  ],
  weeklyGoals: [
    { day: 'Pazartesi', completed: true, target: 2, actual: 2.5 },
    { day: 'Salı', completed: false, target: 2, actual: 1.8 },
    { day: 'Çarşamba', completed: true, target: 2, actual: 3.2 },
    { day: 'Perşembe', completed: true, target: 2, actual: 2.1 },
    { day: 'Cuma', completed: true, target: 2, actual: 2.7 },
    { day: 'Cumartesi', completed: false, target: 1, actual: 1.5 },
    { day: 'Pazar', completed: true, target: 1, actual: 2.0 }
  ],
  skillProgress: [
    { skill: 'Speaking', level: 75, improvement: 15 },
    { skill: 'Listening', level: 82, improvement: 12 },
    { skill: 'Reading', level: 68, improvement: 8 },
    { skill: 'Writing', level: 71, improvement: 18 },
    { skill: 'Grammar', level: 85, improvement: 10 },
    { skill: 'Vocabulary', level: 79, improvement: 22 }
  ]
}
