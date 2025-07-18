import { Lesson } from '../types'

export const mockLessons: Lesson[] = [
  // Business English Fundamentals lessons
  {
    id: 'lesson-1-1',
    courseId: 'course-1',
    title: 'İş Dünyasında İngilizce Temelleri',
    description: 'İş hayatında kullanılan temel İngilizce ifadeler ve kelimeler.',
    duration: 45,
    type: 'video',
    order: 1,
    content: 'Bu derste iş dünyasında sıkça kullanılan temel İngilizce ifadeleri öğreneceğiz.',
    videoUrl: '/videos/business-basics.mp4',
    isCompleted: true,
    isLocked: false
  },
  {
    id: 'lesson-1-2',
    courseId: 'course-1',
    title: 'Resmi E-posta Yazımı',
    description: 'Profesyonel e-posta yazma teknikleri ve örnekleri.',
    duration: 60,
    type: 'text',
    order: 2,
    content: 'Resmi e-posta yazımının kuralları ve örnekleri.',
    isCompleted: true,
    isLocked: false
  },
  {
    id: 'lesson-1-3',
    courseId: 'course-1',
    title: 'Telefon Görüşmeleri',
    description: 'İş hayatında telefon görüşmesi yapma teknikleri.',
    duration: 50,
    type: 'video',
    order: 3,
    content: 'Profesyonel telefon görüşmesi yapma yöntemleri.',
    videoUrl: '/videos/phone-calls.mp4',
    isCompleted: false,
    isLocked: false
  },
  {
    id: 'lesson-1-4',
    courseId: 'course-1',
    title: 'İş Toplantıları',
    description: 'Toplantılarda kullanılan İngilizce ifadeler.',
    duration: 55,
    type: 'video',
    order: 4,
    content: 'Toplantı yönetimi ve katılım teknikleri.',
    videoUrl: '/videos/meetings.mp4',
    isCompleted: false,
    isLocked: true
  },
  {
    id: 'lesson-1-5',
    courseId: 'course-1',
    title: 'Değerlendirme Testi',
    description: 'Öğrenilen konuların değerlendirilmesi.',
    duration: 30,
    type: 'quiz',
    order: 5,
    content: 'Kapsamlı değerlendirme testi.',
    isCompleted: false,
    isLocked: true
  },

  // IELTS Academic Preparation lessons
  {
    id: 'lesson-2-1',
    courseId: 'course-2',
    title: 'IELTS Sınavına Giriş',
    description: 'IELTS sınav formatı ve stratejiler.',
    duration: 40,
    type: 'video',
    order: 1,
    content: 'IELTS sınavının yapısı ve hazırlık yöntemleri.',
    videoUrl: '/videos/ielts-intro.mp4',
    isCompleted: true,
    isLocked: false
  },
  {
    id: 'lesson-2-2',
    courseId: 'course-2',
    title: 'Reading Bölümü Stratejileri',
    description: 'Okuma bölümünde başarı için teknikler.',
    duration: 65,
    type: 'text',
    order: 2,
    content: 'Reading bölümü için etkili stratejiler.',
    isCompleted: false,
    isLocked: false
  },
  {
    id: 'lesson-2-3',
    courseId: 'course-2',
    title: 'Writing Task 1 - Grafik Analizi',
    description: 'Grafik ve tablo yorumlama teknikleri.',
    duration: 70,
    type: 'assignment',
    order: 3,
    content: 'Writing Task 1 için grafik analizi örnekleri.',
    isCompleted: false,
    isLocked: false
  },

  // English Conversation Mastery lessons
  {
    id: 'lesson-3-1',
    courseId: 'course-3',
    title: 'Günlük Konuşma Başlangıçları',
    description: 'Günlük hayatta konuşma başlatma teknikleri.',
    duration: 35,
    type: 'video',
    order: 1,
    content: 'Konuşma başlatma ve sürdürme teknikleri.',
    videoUrl: '/videos/conversation-starters.mp4',
    isCompleted: true,
    isLocked: false
  },
  {
    id: 'lesson-3-2',
    courseId: 'course-3',
    title: 'Sosyal Durumlar',
    description: 'Sosyal ortamlarda konuşma becerileri.',
    duration: 45,
    type: 'video',
    order: 2,
    content: 'Sosyal durumlar için konuşma örnekleri.',
    videoUrl: '/videos/social-situations.mp4',
    isCompleted: false,
    isLocked: false
  },

  // Academic Writing Excellence lessons
  {
    id: 'lesson-4-1',
    courseId: 'course-4',
    title: 'Akademik Yazının Temelleri',
    description: 'Akademik yazımın temel kuralları ve yapısı.',
    duration: 50,
    type: 'text',
    order: 1,
    content: 'Akademik yazım için temel prensipler.',
    isCompleted: false,
    isLocked: false
  },
  {
    id: 'lesson-4-2',
    courseId: 'course-4',
    title: 'Makale Yapısı',
    description: 'Akademik makale yazımının yapısı ve organizasyonu.',
    duration: 60,
    type: 'text',
    order: 2,
    content: 'Makale organizasyonu ve yapılandırma.',
    isCompleted: false,
    isLocked: false
  },

  // English Grammar Mastery lessons
  {
    id: 'lesson-5-1',
    courseId: 'course-5',
    title: 'Temel Gramer Kuralları',
    description: 'İngilizce gramerinin temel yapıları.',
    duration: 40,
    type: 'video',
    order: 1,
    content: 'Gramer temellerinin kapsamlı açıklaması.',
    videoUrl: '/videos/basic-grammar.mp4',
    isCompleted: true,
    isLocked: false
  },
  {
    id: 'lesson-5-2',
    courseId: 'course-5',
    title: 'Zaman Yapıları (Tenses)',
    description: 'İngilizce zaman yapılarının detaylı incelenmesi.',
    duration: 75,
    type: 'video',
    order: 2,
    content: 'Tüm zaman yapıları ve kullanım alanları.',
    videoUrl: '/videos/tenses.mp4',
    isCompleted: false,
    isLocked: false
  },

  // TOEFL iBT Complete Course lessons
  {
    id: 'lesson-6-1',
    courseId: 'course-6',
    title: 'TOEFL iBT Sınav Formatı',
    description: 'TOEFL iBT sınavının yapısı ve bölümleri.',
    duration: 45,
    type: 'video',
    order: 1,
    content: 'TOEFL iBT sınavının detaylı tanıtımı.',
    videoUrl: '/videos/toefl-format.mp4',
    isCompleted: false,
    isLocked: false
  },
  {
    id: 'lesson-6-2',
    courseId: 'course-6',
    title: 'Reading Bölümü Hazırlığı',
    description: 'TOEFL Reading bölümü için stratejiler.',
    duration: 80,
    type: 'text',
    order: 2,
    content: 'Reading bölümü için etkili hazırlık yöntemleri.',
    isCompleted: false,
    isLocked: false
  }
]

// Utility functions for lessons
export const getLessonsByCourse = (courseId: string) => {
  return mockLessons.filter(lesson => lesson.courseId === courseId)
}

export const getCompletedLessons = (courseId: string) => {
  return mockLessons.filter(lesson => lesson.courseId === courseId && lesson.isCompleted)
}

export const getNextLesson = (courseId: string) => {
  const courseLessons = getLessonsByCourse(courseId).sort((a, b) => a.order - b.order)
  return courseLessons.find(lesson => !lesson.isCompleted && !lesson.isLocked)
}
