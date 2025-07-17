'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { 
  Play, 
  Calendar, 
  Clock, 
  Users, 
  Video,
  Star,
  BookOpen,
  MessageSquare,
  Settings,
  Mic,
  MicOff,
  VideoOff,
  Volume2,
  PhoneOff,
  Share,
  MoreHorizontal,
  AlertCircle,
  CheckCircle,
  Filter
} from 'lucide-react'

const LiveLessonsPage: React.FC = () => {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('upcoming')
  const [filterLevel, setFilterLevel] = useState('all')

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

  const upcomingLessons = [
    {
      id: 1,
      title: 'Business English: Presentation Skills',
      instructor: 'Dr. Sarah Johnson',
      instructorImage: '/api/placeholder/40/40',
      time: '15:00',
      date: 'Bugün',
      duration: '60 dk',
      level: 'Intermediate',
      participants: 12,
      maxParticipants: 20,
      category: 'Business',
      description: 'Etkili sunum yapma teknikleri ve iş dünyasında kullanılacak ifadeler.',
      status: 'confirmed',
      materials: ['Presentation slides', 'Practice exercises', 'Vocabulary list']
    },
    {
      id: 2,
      title: 'Grammar Workshop: Past Tenses',
      instructor: 'Prof. Michael Brown',
      instructorImage: '/api/placeholder/40/40',
      time: '10:00',
      date: 'Yarın',
      duration: '45 dk',
      level: 'Beginner',
      participants: 8,
      maxParticipants: 15,
      category: 'Grammar',
      description: 'Geçmiş zamanların detaylı incelenmesi ve pratik uygulamaları.',
      status: 'confirmed',
      materials: ['Grammar guide', 'Exercise sheets', 'Audio examples']
    },
    {
      id: 3,
      title: 'Conversation Practice: Travel & Tourism',
      instructor: 'Emma Wilson',
      instructorImage: '/api/placeholder/40/40',
      time: '14:30',
      date: '15 Ara',
      duration: '90 dk',
      level: 'Intermediate',
      participants: 15,
      maxParticipants: 25,
      category: 'Speaking',
      description: 'Seyahat ve turizm konularında konuşma pratiği.',
      status: 'confirmed',
      materials: ['Conversation cards', 'Scenario scripts', 'Vocabulary bank']
    },
    {
      id: 4,
      title: 'IELTS Speaking Test Preparation',
      instructor: 'David Chen',
      instructorImage: '/api/placeholder/40/40',
      time: '16:00',
      date: '16 Ara',
      duration: '120 dk',
      level: 'Advanced',
      participants: 20,
      maxParticipants: 30,
      category: 'Test Prep',
      description: 'IELTS konuşma sınavına hazırlık ve mock test uygulaması.',
      status: 'waitlist',
      materials: ['IELTS topics', 'Sample questions', 'Evaluation criteria']
    }
  ]

  const pastLessons = [
    {
      id: 5,
      title: 'Advanced Grammar: Conditionals',
      instructor: 'Prof. Michael Brown',
      date: '10 Ara',
      duration: '60 dk',
      level: 'Advanced',
      participants: 18,
      rating: 4.8,
      attended: true,
      recording: true
    },
    {
      id: 6,
      title: 'Business Vocabulary Building',
      instructor: 'Dr. Sarah Johnson',
      date: '8 Ara',
      duration: '45 dk',
      level: 'Intermediate',
      participants: 14,
      rating: 4.9,
      attended: true,
      recording: true
    },
    {
      id: 7,
      title: 'Pronunciation Workshop',
      instructor: 'Emma Wilson',
      date: '5 Ara',
      duration: '90 dk',
      level: 'Beginner',
      participants: 22,
      rating: 4.7,
      attended: false,
      recording: true
    }
  ]

  const liveNow = [
    {
      id: 8,
      title: 'Weekly Speaking Club',
      instructor: 'James Thompson',
      participants: 8,
      startTime: '14:00',
      duration: '60 dk',
      level: 'All Levels',
      category: 'Speaking'
    }
  ]

  const filteredUpcoming = filterLevel === 'all' 
    ? upcomingLessons 
    : upcomingLessons.filter(lesson => lesson.level.toLowerCase() === filterLevel.toLowerCase())

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-600'
      case 'intermediate': return 'bg-yellow-100 text-yellow-600'
      case 'advanced': return 'bg-red-100 text-red-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-600'
      case 'waitlist': return 'bg-yellow-100 text-yellow-600'
      case 'cancelled': return 'bg-red-100 text-red-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Canlı Dersler</h1>
              <p className="text-purple-100">
                Uzman eğitmenlerle gerçek zamanlı öğrenme deneyimi
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center">
                <Video className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Live Now Section */}
        {liveNow.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h2 className="text-lg font-semibold text-red-800">Şu Anda Canlı</h2>
              </div>
            </div>
            <div className="space-y-3">
              {liveNow.map((lesson) => (
                <div key={lesson.id} className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                        <p className="text-sm text-gray-600">{lesson.instructor}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {lesson.participants} katılımcı
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {lesson.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Katıl
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    activeTab === 'upcoming'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Yaklaşan Dersler
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    activeTab === 'past'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Geçmiş Dersler
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={filterLevel}
                  onChange={(e) => setFilterLevel(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">Tüm Seviyeler</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'upcoming' && (
              <div className="space-y-6">
                {filteredUpcoming.map((lesson) => (
                  <div key={lesson.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{lesson.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{lesson.instructor}</p>
                          <p className="text-sm text-gray-500 mb-3">{lesson.description}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="flex items-center text-gray-600">
                              <Calendar className="w-4 h-4 mr-1" />
                              {lesson.date} - {lesson.time}
                            </span>
                            <span className="flex items-center text-gray-600">
                              <Clock className="w-4 h-4 mr-1" />
                              {lesson.duration}
                            </span>
                            <span className="flex items-center text-gray-600">
                              <Users className="w-4 h-4 mr-1" />
                              {lesson.participants}/{lesson.maxParticipants}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(lesson.level)}`}>
                            {lesson.level}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lesson.status)}`}>
                            {lesson.status === 'confirmed' ? 'Onaylandı' : 'Bekleme Listesi'}
                          </span>
                        </div>
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                          {lesson.status === 'confirmed' ? 'Katıl' : 'Bekleme Listesine Ekle'}
                        </button>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Ders Materyalleri:</h4>
                          <div className="flex flex-wrap gap-2">
                            {lesson.materials.map((material, index) => (
                              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                {material}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Share className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                            <MessageSquare className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'past' && (
              <div className="space-y-4">
                {pastLessons.map((lesson) => (
                  <div key={lesson.id} className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                          <p className="text-sm text-gray-600">{lesson.instructor}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <span>{lesson.date}</span>
                            <span>{lesson.duration}</span>
                            <span>{lesson.participants} katılımcı</span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span>{lesson.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(lesson.level)}`}>
                              {lesson.level}
                            </span>
                            {lesson.attended ? (
                              <span className="flex items-center text-green-600 text-sm">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Katıldı
                              </span>
                            ) : (
                              <span className="flex items-center text-red-600 text-sm">
                                <AlertCircle className="w-4 h-4 mr-1" />
                                Katılmadı
                              </span>
                            )}
                          </div>
                        </div>
                        {lesson.recording && (
                          <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg font-medium transition-colors">
                            Kaydı İzle
                          </button>
                        )}
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

export default LiveLessonsPage
