import { Course } from '../types'

export const mockLandingPageCourses: Course[] = [
  {
    id: 'landing-course-1',
    title: 'Business English Fundamentals',
    description: 'İş dünyasında başarı için gerekli İngilizce becerilerini kazanın. Toplantılar, sunumlar ve yazışmalarda profesyonel İngilizce kullanmayı öğrenin.',
    instructor: 'Emily Johnson',
    instructorId: 't1',
    level: 'Intermediate',
    duration: 24,
    price: 299,
    currency: 'TRY',
    category: 'Business English',
    tags: ['İş İngilizcesi', 'Profesyonel Gelişim', 'Sertifikalı'],
    thumbnail: '/images/courses/business-english.jpg',
    rating: 4.8,
    totalStudents: 234,
    totalLessons: 16,
    isActive: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-07-10T14:30:00Z',
    language: 'tr',
    prerequisites: ['Temel İngilizce bilgisi'],
    learningOutcomes: [
      'İş toplantılarında etkili komunikasyon',
      'Profesyonel e-posta yazımı',
      'Sunum becerileri',
      'Telefon görüşmeleri'
    ]
  },
  {
    id: 'landing-course-2',
    title: 'IELTS Academic Preparation',
    description: 'IELTS Academic sınavına kapsamlı hazırlık. Tüm bölümler için stratejiler, pratik testler ve uzman rehberliği ile hedef puanınıza ulaşın.',
    instructor: 'David Smith',
    instructorId: 't2',
    level: 'Advanced',
    duration: 40,
    price: 499,
    currency: 'TRY',
    category: 'Test Preparation',
    tags: ['IELTS', 'Akademik İngilizce', 'Sınav Hazırlığı'],
    thumbnail: '/images/courses/ielts-prep.jpg',
    rating: 4.9,
    totalStudents: 189,
    totalLessons: 24,
    isActive: true,
    createdAt: '2024-02-01T09:00:00Z',
    updatedAt: '2024-07-08T16:20:00Z',
    language: 'tr',
    prerequisites: ['Upper-Intermediate İngilizce seviyesi'],
    learningOutcomes: [
      'IELTS sınav stratejileri',
      'Academic Writing becerileri',
      'Reading hız ve anlama',
      'Speaking güveni'
    ]
  },
  {
    id: 'landing-course-3',
    title: 'English Conversation Mastery',
    description: 'Günlük hayatta ve sosyal ortamlarda rahatça İngilizce konuşma becerinizi geliştirin. Akıcılık ve doğal ifade gücü kazanın.',
    instructor: 'Emily Johnson',
    instructorId: 't1',
    level: 'Beginner',
    duration: 18,
    price: 199,
    currency: 'TRY',
    category: 'Speaking',
    tags: ['Konuşma', 'Günlük İngilizce', 'Akıcılık'],
    thumbnail: '/images/courses/conversation.jpg',
    rating: 4.7,
    totalStudents: 312,
    totalLessons: 12,
    isActive: true,
    createdAt: '2024-03-10T11:00:00Z',
    updatedAt: '2024-07-12T09:45:00Z',
    language: 'tr',
    prerequisites: ['Temel kelime bilgisi'],
    learningOutcomes: [
      'Günlük konuşma becerileri',
      'Sosyal etkileşim',
      'Telaffuz iyileştirme',
      'Güven artırma'
    ]
  },
  {
    id: 'landing-course-4',
    title: 'Academic Writing Excellence',
    description: 'Üniversite ve akademik yazım için gerekli becerileri kazanın. Makale, tez ve rapor yazımında uzmanlaşın.',
    instructor: 'Michael Brown',
    instructorId: 't4',
    level: 'Advanced',
    duration: 32,
    price: 399,
    currency: 'TRY',
    category: 'Academic English',
    tags: ['Akademik Yazım', 'Makale', 'Araştırma'],
    thumbnail: '/images/courses/academic-writing.jpg',
    rating: 4.8,
    totalStudents: 156,
    totalLessons: 20,
    isActive: true,
    createdAt: '2024-04-05T14:00:00Z',
    updatedAt: '2024-07-15T11:30:00Z',
    language: 'tr',
    prerequisites: ['Advanced İngilizce seviyesi'],
    learningOutcomes: [
      'Akademik yazım teknikleri',
      'Araştırma metodolojisi',
      'Referans gösterimi',
      'Kritik düşünme'
    ]
  },
  {
    id: 'landing-course-5',
    title: 'English Grammar Mastery',
    description: 'İngilizce gramerini temelden ileri seviyeye kadar öğrenin. Pratik örnekler ve alıştırmalarla gramer bilginizi pekiştirin.',
    instructor: 'Sarah Wilson',
    instructorId: 't3',
    level: 'Intermediate',
    duration: 20,
    price: 249,
    currency: 'TRY',
    category: 'Grammar',
    tags: ['Gramer', 'Temel Beceriler', 'Yazım'],
    thumbnail: '/images/courses/grammar.jpg',
    rating: 4.6,
    totalStudents: 278,
    totalLessons: 14,
    isActive: true,
    createdAt: '2024-05-01T10:00:00Z',
    updatedAt: '2024-07-14T15:20:00Z',
    language: 'tr',
    prerequisites: ['Temel İngilizce bilgisi'],
    learningOutcomes: [
      'Gramer kuralları',
      'Doğru cümle yapısı',
      'Yazım becerileri',
      'Dil bilgisi'
    ]
  },
  {
    id: 'landing-course-6',
    title: 'TOEFL iBT Complete Course',
    description: 'TOEFL iBT sınavına tam hazırlık programı. Tüm bölümler için detaylı hazırlık ve pratik testlerle başarıya ulaşın.',
    instructor: 'David Smith',
    instructorId: 't2',
    level: 'Advanced',
    duration: 36,
    price: 549,
    currency: 'TRY',
    category: 'Test Preparation',
    tags: ['TOEFL', 'Sınav Hazırlığı', 'Üniversite'],
    thumbnail: '/images/courses/toefl.jpg',
    rating: 4.9,
    totalStudents: 167,
    totalLessons: 28,
    isActive: true,
    createdAt: '2024-06-01T12:00:00Z',
    updatedAt: '2024-07-16T13:40:00Z',
    language: 'tr',
    prerequisites: ['Upper-Intermediate İngilizce'],
    learningOutcomes: [
      'TOEFL sınav teknikleri',
      'Integrated skills',
      'Note-taking strategies',
      'Test confidence'
    ]
  }
]

// Testimonials mock data for landing page
export const mockTestimonials = [
  {
    id: 'test-1',
    name: 'Ahmet Yılmaz',
    role: 'Yazılım Geliştirici',
    company: 'TechCorp',
    rating: 5,
    text: 'EnglishTech sayesinde iş hayatımda İngilizce kullanma konusunda çok daha güvenli hissediyorum. Kurslar gerçekten kaliteli ve eğitmenler çok yardımcı.',
    image: '/images/testimonials/ahmet.jpg',
    course: 'Business English Fundamentals'
  },
  {
    id: 'test-2',
    name: 'Zeynep Kaya',
    role: 'Pazarlama Uzmanı',
    company: 'Digital Agency',
    rating: 5,
    text: 'IELTS sınavında hedeflediğim puanı aldım! Özellikle Writing bölümündeki gelişimim inanılmazdı. Herkese tavsiye ediyorum.',
    image: '/images/testimonials/zeynep.jpg',
    course: 'IELTS Academic Preparation'
  },
  {
    id: 'test-3',
    name: 'Mehmet Demir',
    role: 'Mühendis',
    company: 'Construction Ltd.',
    rating: 5,
    text: 'Conversation kursunu aldıktan sonra yabancı müşterilerle rahatça konuşabiliyorum. Telaffuzum ve akıcılığım çok gelişti.',
    image: '/images/testimonials/mehmet.jpg',
    course: 'English Conversation Mastery'
  },
  {
    id: 'test-4',
    name: 'Ayşe Özkan',
    role: 'Akademisyen',
    company: 'Üniversite',
    rating: 5,
    text: 'Academic Writing kursu sayesinde uluslararası dergilerde makale yayınlayabiliyorum. Profesyonel gelişimime büyük katkı sağladı.',
    image: '/images/testimonials/ayse.jpg',
    course: 'Academic Writing Excellence'
  },
  {
    id: 'test-5',
    name: 'Can Arslan',
    role: 'Doktor',
    company: 'Özel Hastane',
    rating: 5,
    text: 'Yurt dışında çalışmak için TOEFL sınavına hazırlanıyordum. EnglishTech\'in programı sayesinde hedeflediği puanı aldım.',
    image: '/images/testimonials/can.jpg',
    course: 'TOEFL iBT Complete Course'
  },
  {
    id: 'test-6',
    name: 'Elif Şahin',
    role: 'İnsan Kaynakları',
    company: 'Multinational Corp',
    rating: 5,
    text: 'Grammar kursunu bitirdikten sonra yazılı iletişimimde çok daha profesyonel olduğumu fark ettim. Detaylı anlatım harika.',
    image: '/images/testimonials/elif.jpg',
    course: 'English Grammar Mastery'
  }
]

// Landing page specific features
export const mockFeatures = [
  {
    id: 'feature-1',
    icon: 'Brain',
    title: 'AI Destekli Öğrenme',
    description: 'Yapay zeka ile kişiselleştirilmiş öğrenim planları ve anlık geri bildirim alın.'
  },
  {
    id: 'feature-2',
    icon: 'Users',
    title: 'Canlı Grup Dersleri',
    description: 'Uzman eğitmenler eşliğinde interaktif grup derslerine katılın.'
  },
  {
    id: 'feature-3',
    icon: 'Clock',
    title: 'Esnek Zaman',
    description: '7/24 erişim ile kendi hızınızda öğrenin. İstediğiniz zaman, istediğiniz yerden.'
  },
  {
    id: 'feature-4',
    icon: 'Trophy',
    title: 'Sertifika Programı',
    description: 'Kurs tamamladığınızda uluslararası geçerliliği olan sertifikanızı alın.'
  },
  {
    id: 'feature-5',
    icon: 'Headphones',
    title: 'Interaktif Dinleme',
    description: 'Gerçek hayat senaryoları ile dinleme ve anlama becerilerinizi geliştirin.'
  },
  {
    id: 'feature-6',
    icon: 'BookOpen',
    title: 'Kapsamlı Materyal',
    description: 'Video dersler, e-kitaplar, alıştırmalar ve pratik testlerle destekli öğrenim.'
  },
  {
    id: 'feature-7',
    icon: 'Target',
    title: 'Hedef Odaklı',
    description: 'İhtiyaçlarınıza göre özelleştirilmiş öğrenim hedefleri belirleyin ve takip edin.'
  },
  {
    id: 'feature-8',
    icon: 'Zap',
    title: 'Hızlı Gelişim',
    description: 'Kanıtlanmış metodlarla kısa sürede gözle görülür ilerleme kaydedin.'
  }
]

// FAQ data for landing page
export const mockFAQ = [
  {
    id: 'faq-1',
    question: 'Kurslara nasıl başlayabilirim?',
    answer: 'Üye olduktan sonra istediğiniz kursu seçip hemen başlayabilirsiniz. Tüm kurslarımız 7/24 erişilebilir.'
  },
  {
    id: 'faq-2',
    question: 'Sertifikalar geçerli mi?',
    answer: 'Evet, tüm sertifikalarımız uluslararası geçerliliğe sahiptir ve CV\'nizde kullanabilirsiniz.'
  },
  {
    id: 'faq-3',
    question: 'Canlı dersler ne kadar sıklıkta?',
    answer: 'Her kurs için haftada 2-3 canlı ders düzenlenmektedir. Katılamadığınız derslerin kayıtlarına erişebilirsiniz.'
  },
  {
    id: 'faq-4',
    question: 'Öğretmenlerle nasıl iletişim kurarım?',
    answer: 'Platform üzerinden mesajlaşma, canlı dersler ve birebir görüşme seçenekleri mevcuttur.'
  },
  {
    id: 'faq-5',
    question: 'Kurs süreleri ne kadar?',
    answer: 'Kurs süreleri 12-40 saat arasında değişmektedir. Kendi hızınızda ilerleyebilirsiniz.'
  }
]
