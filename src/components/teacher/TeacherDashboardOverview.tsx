'use client'

import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { 
  BookOpen, 
  Users, 
  Calendar, 
  MessageSquare,
  TrendingUp,
  Star,
  Clock,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Plus,
  Play,
  FileText,
  Video,
  BarChart3,
  Bell
} from 'lucide-react'

const TeacherDashboardOverview: React.FC = () => {
  const { user } = useAuth()

  const stats = [
    {
      name: 'Aktif Kurslar',
      value: '8',
      change: '+2',
      changeType: 'increase',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Toplam Öğrenci',
      value: '156',
      change: '+23',
      changeType: 'increase',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Bu Ay Ders',
      value: '42',
      change: '+8',
      changeType: 'increase',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'Ortalama Puan',
      value: '4.8',
      change: '+0.2',
      changeType: 'increase',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ]

  const recentCourses = [
    {
      id: 1,
      title: 'Business English Advanced',
      students: 24,
      completion: 85,
      nextLesson: 'Bugün 14:00',
      status: 'active'
    },
    {
      id: 2,
      title: 'IELTS Preparation',
      students: 18,
      completion: 65,
      nextLesson: 'Yarın 10:00',
      status: 'active'
    },
    {
      id: 3,
      title: 'Grammar Fundamentals',
      students: 32,
      completion: 92,
      nextLesson: 'Cuma 15:30',
      status: 'active'
    }
  ]

  const upcomingLessons = [
    {
      id: 1,
      title: 'Business Presentations',
      course: 'Business English Advanced',
      time: '14:00',
      date: 'Bugün',
      students: 24,
      type: 'Canlı Ders'
    },
    {
      id: 2,
      title: 'IELTS Speaking Practice',
      course: 'IELTS Preparation',
      time: '10:00',
      date: 'Yarın',
      students: 18,
      type: 'Workshop'
    },
    {
      id: 3,
      title: 'Grammar Review',
      course: 'Grammar Fundamentals',
      time: '15:30',
      date: 'Cuma',
      students: 32,
      type: 'Tekrar'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'assignment',
      title: 'Business Writing Assignment',
      description: '12 öğrenci teslim etti',
      time: '2 saat önce',
      urgent: true
    },
    {
      id: 2,
      type: 'message',
      title: 'Yeni mesaj',
      description: 'Ali Demir soru sordu',
      time: '3 saat önce',
      urgent: false
    },
    {
      id: 3,
      type: 'completion',
      title: 'Kurs tamamlandı',
      description: 'Ayşe Yılmaz IELTS kursunu bitirdi',
      time: '5 saat önce',
      urgent: false
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Hoş geldiniz, {user?.name || 'Öğretmen'}! 👋
            </h1>
            <p className="text-blue-100 mb-4">
              Bugün 3 dersiniz var ve 5 yeni ödev teslimi bekliyor!
            </p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Derse Başla
            </button>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
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
                  {stat.change} bu ay
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
              <h2 className="text-xl font-semibold text-gray-900">Aktif Kurslar</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Tümünü Gör
              </button>
            </div>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-500">{course.students} öğrenci</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.completion}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{course.completion}%</span>
                      </div>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.nextLesson}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Lessons & Activity */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Yaklaşan Dersler</h2>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingLessons.map((lesson) => (
                <div key={lesson.id} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm">{lesson.title}</h3>
                    <p className="text-xs text-gray-500">{lesson.course}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">{lesson.date} - {lesson.time}</span>
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                        {lesson.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Son Aktiviteler</h2>
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className={`flex items-center space-x-3 p-3 rounded-lg ${activity.urgent ? 'bg-red-50' : 'bg-gray-50'}`}>
                  <div className={`p-2 rounded-lg ${activity.urgent ? 'bg-red-100' : 'bg-gray-100'}`}>
                    {activity.type === 'assignment' && <FileText className={`w-4 h-4 ${activity.urgent ? 'text-red-600' : 'text-gray-600'}`} />}
                    {activity.type === 'message' && <MessageSquare className={`w-4 h-4 ${activity.urgent ? 'text-red-600' : 'text-gray-600'}`} />}
                    {activity.type === 'completion' && <CheckCircle className={`w-4 h-4 ${activity.urgent ? 'text-red-600' : 'text-green-600'}`} />}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium text-sm ${activity.urgent ? 'text-red-900' : 'text-gray-900'}`}>
                      {activity.title}
                    </h3>
                    <p className={`text-xs ${activity.urgent ? 'text-red-600' : 'text-gray-600'}`}>
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                  {activity.urgent && (
                    <AlertCircle className="w-4 h-4 text-red-500" />
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
            <Plus className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Yeni Kurs</span>
          </button>
          <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <Video className="w-6 h-6 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Canlı Ders</span>
          </button>
          <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <FileText className="w-6 h-6 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Ödev Ver</span>
          </button>
          <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            <BarChart3 className="w-6 h-6 text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">Raporlar</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboardOverview
