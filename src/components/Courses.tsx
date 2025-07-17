'use client'

import React from 'react'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'

const Courses = () => {
  type CourseLevel = 'Beginner' | 'Intermediate' | 'Upper-Intermediate' | 'Advanced' | 'All Levels'
  
  interface Course {
    id: number
    title: string
    description: string
    level: CourseLevel
    duration: string
    students: string
    rating: number
    image: string
    features: string[]
  }

  const courses: Course[] = [
    {
      id: 1,
      title: 'Başlangıç İngilizcesi',
      description: 'Sıfırdan İngilizce öğrenmeye başlayın. Temel kelime bilgisi ve günlük konuşma pratiği.',
      level: 'Beginner',
      duration: '3 Ay',
      students: '2,450',
      rating: 4.9,
      image: '/api/placeholder/400/250',
      features: ['Temel Gramer', 'Günlük Konuşma', 'Kelime Bilgisi', 'Telaffuz Pratiği']
    },
    {
      id: 2,
      title: 'İş İngilizcesi',
      description: 'Profesyonel kariyeriniz için gerekli olan iş İngilizcesi becerilerini geliştirin.',
      level: 'Intermediate',
      duration: '4 Ay',
      students: '1,890',
      rating: 4.8,
      image: '/api/placeholder/400/250',
      features: ['Sunum Teknikleri', 'E-posta Yazımı', 'Meeting Dili', 'Networking']
    },
    {
      id: 3,
      title: 'TOEFL Hazırlık',
      description: 'TOEFL sınavında yüksek puan alabilmek için kapsamlı hazırlık programı.',
      level: 'Advanced',
      duration: '6 Ay',
      students: '1,230',
      rating: 4.9,
      image: '/api/placeholder/400/250',
      features: ['Reading Skills', 'Listening Practice', 'Speaking Tests', 'Writing Tasks']
    },
    {
      id: 4,
      title: 'Konuşma Pratiği',
      description: 'Akıcı konuşma becerileri geliştirin. Gerçek yaşam senaryoları ile pratik yapın.',
      level: 'All Levels',
      duration: '2 Ay',
      students: '3,120',
      rating: 4.9,
      image: '/api/placeholder/400/250',
      features: ['Canlı Konuşma', 'Telaffuz Düzeltme', 'Güven Geliştirme', 'Akıcılık']
    },
    {
      id: 5,
      title: 'Akademik İngilizce',
      description: 'Üniversite ve akademik çalışmalar için gerekli İngilizce becerilerini kazanın.',
      level: 'Upper-Intermediate',
      duration: '5 Ay',
      students: '890',
      rating: 4.7,
      image: '/api/placeholder/400/250',
      features: ['Akademik Yazım', 'Araştırma Teknikleri', 'Sunum Hazırlığı', 'Eleştirel Düşünme']
    },
    {
      id: 6,
      title: 'İngilizce Sınavları',
      description: 'IELTS, Cambridge ve diğer uluslararası sınavlara hazırlık.',
      level: 'Intermediate',
      duration: '4 Ay',
      students: '1,560',
      rating: 4.8,
      image: '/api/placeholder/400/250',
      features: ['Sınav Stratejileri', 'Zaman Yönetimi', 'Örnek Sorular', 'Mock Testler']
    }
  ]

  const levelColors: Record<CourseLevel, string> = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-yellow-100 text-yellow-800',
    'Upper-Intermediate': 'bg-orange-100 text-orange-800',
    'Advanced': 'bg-red-100 text-red-800',
    'All Levels': 'bg-blue-100 text-blue-800'
  }

  return (
    <section id="courses" className="bg-gray-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popüler
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {' '}Kurslarımız
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her seviyeye uygun, uzman eğitmenler tarafından hazırlanmış kurslar ile 
            İngilizce hedeflerinize ulaşın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="card p-6 group">
              <div className="mb-4">
                <div className="bg-gradient-to-r from-primary-100 to-secondary-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-primary-600 font-semibold">Course Preview</div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[course.level]}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{course.rating}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {course.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {course.description}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} öğrenci</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.features.map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold py-3 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                <span>Kursa Katıl</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            Tüm Kursları Görüntüle
          </button>
        </div>
      </div>
    </section>
  )
}

export default Courses
