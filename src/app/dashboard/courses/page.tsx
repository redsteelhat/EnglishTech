'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { 
  BookOpen, 
  Play, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  Lock,
  Download,
  MessageSquare,
  Trophy,
  BarChart3,
  Target
} from 'lucide-react'

const CoursesPage: React.FC = () => {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('enrolled')

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/')
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const enrolledCourses = [
    {
      id: 1,
      title: 'Business English Mastery',
      instructor: 'Dr. Sarah Johnson',
      level: 'Intermediate',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      duration: '12 weeks',
      rating: 4.8,
      students: 2450,
      image: '/api/placeholder/300/200',
      nextLesson: 'Lesson 19: Negotiation Skills',
      category: 'Business'
    },
    {
      id: 2,
      title: 'Grammar Fundamentals',
      instructor: 'Prof. Michael Brown',
      level: 'Beginner',
      progress: 45,
      totalLessons: 16,
      completedLessons: 7,
      duration: '8 weeks',
      rating: 4.6,
      students: 1820,
      image: '/api/placeholder/300/200',
      nextLesson: 'Lesson 8: Present Perfect Tense',
      category: 'Grammar'
    },
    {
      id: 3,
      title: 'Advanced Conversation',
      instructor: 'Emma Wilson',
      level: 'Advanced',
      progress: 20,
      totalLessons: 20,
      completedLessons: 4,
      duration: '10 weeks',
      rating: 4.9,
      students: 980,
      image: '/api/placeholder/300/200',
      nextLesson: 'Lesson 5: Debate Techniques',
      category: 'Speaking'
    },
    {
      id: 4,
      title: 'IELTS Preparation',
      instructor: 'David Chen',
      level: 'Intermediate',
      progress: 60,
      totalLessons: 28,
      completedLessons: 17,
      duration: '16 weeks',
      rating: 4.7,
      students: 3200,
      image: '/api/placeholder/300/200',
      nextLesson: 'Lesson 18: Writing Task 2',
      category: 'Test Prep'
    }
  ]

  const availableCourses = [
    {
      id: 5,
      title: 'Academic Writing Excellence',
      instructor: 'Dr. Lisa Anderson',
      level: 'Advanced',
      totalLessons: 18,
      duration: '10 weeks',
      rating: 4.9,
      students: 1450,
      price: '$89',
      image: '/api/placeholder/300/200',
      category: 'Writing'
    },
    {
      id: 6,
      title: 'Pronunciation Mastery',
      instructor: 'James Thompson',
      level: 'Intermediate',
      totalLessons: 14,
      duration: '8 weeks',
      rating: 4.8,
      students: 2100,
      price: '$79',
      image: '/api/placeholder/300/200',
      category: 'Pronunciation'
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Kurslarım</h1>
              <p className="text-gray-600 mt-1">
                Kayıtlı kursların ve ilerleme durumun
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">4</div>
                <div className="text-sm text-gray-500">Aktif Kurs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">67%</div>
                <div className="text-sm text-gray-500">Ortalama İlerleme</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">4.7</div>
                <div className="text-sm text-gray-500">Ortalama Puan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('enrolled')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'enrolled'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Kayıtlı Kurslar ({enrolledCourses.length})
              </button>
              <button
                onClick={() => setActiveTab('available')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'available'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Mevcut Kurslar ({availableCourses.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'enrolled' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium">
                        {course.category}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                        {course.level}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {course.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {course.instructor}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{course.rating}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">İlerleme</span>
                          <span className="text-sm font-medium text-gray-900">
                            {course.completedLessons}/{course.totalLessons} Ders
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{course.progress}% Tamamlandı</span>
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Sonraki Ders:</p>
                        <p className="text-sm font-medium text-gray-900">
                          {course.nextLesson}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                          <Play className="w-4 h-4" />
                          <span>Devam Et</span>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                          <MessageSquare className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'available' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {availableCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium">
                        {course.category}
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                        {course.level}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {course.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {course.instructor}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{course.rating}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{course.totalLessons} Ders</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{course.students.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-primary-600">
                          {course.price}
                        </div>
                        <button className="bg-primary-600 text-white py-2 px-6 rounded-lg hover:bg-primary-700 transition-colors">
                          Kursa Kayıt Ol
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default CoursesPage
