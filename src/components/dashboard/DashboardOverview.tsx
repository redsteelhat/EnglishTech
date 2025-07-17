'use client'

import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Target,
  TrendingUp,
  Play,
  Users,
  Star,
  Calendar,
  MessageSquare,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const DashboardOverview: React.FC = () => {
  const { user } = useAuth()

  const stats = [
    {
      name: 'Toplam Kurs',
      value: '4',
      change: '+1',
      changeType: 'increase',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Tamamlanan Dersler',
      value: '28',
      change: '+12',
      changeType: 'increase',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Toplam Süre',
      value: '45s',
      change: '+8s',
      changeType: 'increase',
      icon: Clock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Puan',
      value: '1,250',
      change: '+150',
      changeType: 'increase',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ]

  const recentCourses = [
    {
      id: 1,
      title: 'Business English Mastery',
      level: 'Intermediate',
      progress: 75,
      nextLesson: 'Lesson 8: Negotiation Skills',
      duration: '45 min',
      image: '/api/placeholder/60/60'
    },
    {
      id: 2,
      title: 'Grammar Fundamentals',
      level: 'Beginner',
      progress: 45,
      nextLesson: 'Lesson 5: Past Tense',
      duration: '30 min',
      image: '/api/placeholder/60/60'
    },
    {
      id: 3,
      title: 'Advanced Conversation',
      level: 'Advanced',
      progress: 20,
      nextLesson: 'Lesson 2: Debate Techniques',
      duration: '60 min',
      image: '/api/placeholder/60/60'
    }
  ]

  const upcomingLessons = [
    {
      id: 1,
      title: 'Weekly Speaking Practice',
      instructor: 'Dr. Sarah Johnson',
      time: '15:00',
      date: 'Bugün',
      type: 'Canlı Ders',
      participants: 12
    },
    {
      id: 2,
      title: 'Grammar Workshop',
      instructor: 'Prof. Michael Brown',
      time: '10:00',
      date: 'Yarın',
      type: 'Workshop',
      participants: 8
    },
    {
      id: 3,
      title: 'Business English Seminar',
      instructor: 'Emma Wilson',
      time: '14:30',
      date: '15 Ara',
      type: 'Seminer',
      participants: 25
    }
  ]

  const achievements = [
    {
      id: 1,
      title: 'First Course Complete',
      description: 'İlk kursunu tamamladın!',
      icon: Trophy,
      color: 'text-yellow-600',
      earned: true
    },
    {
      id: 2,
      title: 'Week Streak',
      description: '7 gün üst üste ders aldın',
      icon: Target,
      color: 'text-green-600',
      earned: true
    },
    {
      id: 3,
      title: 'Grammar Master',
      description: 'Grammar testlerinde %90+ aldın',
      icon: Award,
      color: 'text-purple-600',
      earned: false
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Hoş geldin, {user?.name}! 👋
            </h1>
            <p className="text-primary-100 mb-4">
              Bugün 3 dersin var ve harika ilerleme kaydediyorsun!
            </p>
            <button className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Derse Devam Et
            </button>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 bg-primary-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} bu hafta
                </p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Courses */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Devam Eden Kurslar</h2>
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Tümünü Gör
              </button>
            </div>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-500">{course.nextLesson}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{course.progress}%</span>
                      </div>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.duration}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Lessons */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Yaklaşan Dersler</h2>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingLessons.map((lesson) => (
                <div key={lesson.id} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">{lesson.title}</h3>
                    <p className="text-xs text-gray-500">{lesson.instructor}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{lesson.date} - {lesson.time}</span>
                      <span className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded">
                        {lesson.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Başarılar</h2>
              <Trophy className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`flex items-center space-x-3 p-3 rounded-lg ${achievement.earned ? 'bg-yellow-50' : 'bg-gray-50'}`}>
                  <div className={`p-2 rounded-lg ${achievement.earned ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                    <achievement.icon className={`w-4 h-4 ${achievement.earned ? achievement.color : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium text-sm ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-xs ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.earned && (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Hızlı Eylemler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <Play className="w-6 h-6 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">Canlı Derse Katıl</span>
          </button>
          <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <MessageSquare className="w-6 h-6 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Mentor ile Sohbet</span>
          </button>
          <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <Users className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Grup Çalışması</span>
          </button>
          <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <Star className="w-6 h-6 text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">Değerlendirme</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardOverview
