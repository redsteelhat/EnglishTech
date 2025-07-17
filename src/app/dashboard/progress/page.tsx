'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Award,
  Calendar,
  BarChart3,
  PieChart,
  BookOpen,
  Star,
  Trophy,
  CheckCircle,
  ArrowUp,
  ArrowDown
} from 'lucide-react'

const ProgressPage: React.FC = () => {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

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

  const overallStats = [
    {
      label: 'Toplam Çalışma Süresi',
      value: '47 saat',
      change: '+12 saat',
      changeType: 'increase',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Tamamlanan Dersler',
      value: '28',
      change: '+8',
      changeType: 'increase',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Ortalama Puan',
      value: '87%',
      change: '+5%',
      changeType: 'increase',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      label: 'Günlük Hedef',
      value: '45 dk',
      change: '+15 dk',
      changeType: 'increase',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  const weeklyProgress = [
    { day: 'Pzt', minutes: 45, completed: true },
    { day: 'Sal', minutes: 60, completed: true },
    { day: 'Çar', minutes: 30, completed: true },
    { day: 'Per', minutes: 75, completed: true },
    { day: 'Cum', minutes: 40, completed: true },
    { day: 'Cmt', minutes: 20, completed: false },
    { day: 'Paz', minutes: 0, completed: false }
  ]

  const courseProgress = [
    {
      id: 1,
      title: 'Business English Mastery',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      averageScore: 89,
      timeSpent: '12 saat',
      level: 'Intermediate'
    },
    {
      id: 2,
      title: 'Grammar Fundamentals',
      progress: 45,
      totalLessons: 16,
      completedLessons: 7,
      averageScore: 84,
      timeSpent: '8 saat',
      level: 'Beginner'
    },
    {
      id: 3,
      title: 'Advanced Conversation',
      progress: 20,
      totalLessons: 20,
      completedLessons: 4,
      averageScore: 91,
      timeSpent: '5 saat',
      level: 'Advanced'
    },
    {
      id: 4,
      title: 'IELTS Preparation',
      progress: 60,
      totalLessons: 28,
      completedLessons: 17,
      averageScore: 86,
      timeSpent: '15 saat',
      level: 'Intermediate'
    }
  ]

  const achievements = [
    {
      id: 1,
      title: 'İlk Kurs Tamamlandı',
      description: 'İlk kursunu başarıyla tamamladın',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      date: '15 Kas 2024',
      earned: true
    },
    {
      id: 2,
      title: 'Haftalık Hedef',
      description: '7 gün üst üste ders aldın',
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      date: '10 Kas 2024',
      earned: true
    },
    {
      id: 3,
      title: 'Yüksek Performans',
      description: 'Ortalama %85+ puan aldın',
      icon: Star,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      date: '8 Kas 2024',
      earned: true
    },
    {
      id: 4,
      title: 'Grammar Uzmanı',
      description: 'Grammar testlerinde %90+ aldın',
      icon: Award,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      date: '',
      earned: false
    }
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">İlerleme Raporu</h1>
              <p className="text-primary-100">
                Öğrenme yolculuğundaki başarıların ve gelişimin
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overallStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-1">
                    {stat.changeType === 'increase' ? (
                      <ArrowUp className="w-4 h-4 text-green-600 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-600 mr-1" />
                    )}
                    <span className={`text-sm ${
                      stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">bu hafta</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Genel Bakış
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'courses'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Kurs Detayları
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'achievements'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Başarılar
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Weekly Progress */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Haftalık İlerleme</h3>
                  <div className="grid grid-cols-7 gap-4">
                    {weeklyProgress.map((day, index) => (
                      <div key={index} className="text-center">
                        <div className="text-sm font-medium text-gray-600 mb-2">{day.day}</div>
                        <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center text-sm font-medium ${
                          day.completed
                            ? 'bg-green-100 text-green-600'
                            : day.minutes > 0
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          {day.minutes}dk
                        </div>
                        <div className="mt-2">
                          {day.completed ? (
                            <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                          ) : (
                            <div className="w-4 h-4 border-2 border-gray-300 rounded-full mx-auto" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learning Streak */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Öğrenme Serisi</h3>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary-600 mb-2">7</div>
                      <p className="text-gray-600">Gün üst üste</p>
                      <div className="mt-4 flex justify-center">
                        <div className="flex space-x-1">
                          {[...Array(7)].map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-primary-600 rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Bu Ay</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Toplam Süre</span>
                        <span className="font-medium">47 saat</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tamamlanan Dersler</span>
                        <span className="font-medium">28 ders</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ortalama Puan</span>
                        <span className="font-medium">87%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Günlük Ortalama</span>
                        <span className="font-medium">1.5 saat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-6">
                {courseProgress.map((course) => (
                  <div key={course.id} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                        <p className="text-sm text-gray-500">{course.level}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">{course.progress}%</div>
                        <div className="text-sm text-gray-500">Tamamlandı</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">
                          {course.completedLessons}/{course.totalLessons}
                        </div>
                        <div className="text-sm text-gray-500">Dersler</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{course.averageScore}%</div>
                        <div className="text-sm text-gray-500">Ortalama Puan</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{course.timeSpent}</div>
                        <div className="text-sm text-gray-500">Süre</div>
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        </div>
                        <div className="text-sm text-gray-500">Değerlendirme</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className={`rounded-xl p-6 border ${
                    achievement.earned
                      ? 'bg-white border-gray-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${achievement.bgColor}`}>
                        <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 ${
                          achievement.earned ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm mb-2 ${
                          achievement.earned ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </p>
                        {achievement.earned && (
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-600">Kazanıldı</span>
                            <span className="text-sm text-gray-500">• {achievement.date}</span>
                          </div>
                        )}
                        {!achievement.earned && (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                            <span className="text-sm text-gray-400">Henüz kazanılmadı</span>
                          </div>
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

export default ProgressPage
