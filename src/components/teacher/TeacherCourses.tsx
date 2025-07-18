'use client'

import React, { useState } from 'react'
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Clock,
  Plus,
  Search,
  Filter,
  Edit,
  Eye,
  Star,
  TrendingUp,
  Settings,
  Copy,
  Trash2,
  MoreVertical,
  Play,
  Pause,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Download,
  Upload,
  Tag,
  Globe,
  Lock
} from 'lucide-react'

const TeacherCourses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'draft' | 'completed'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const courses = [
    {
      id: 1,
      title: 'Business English Advanced',
      description: 'Advanced business communication skills for professionals',
      level: 'Advanced',
      students: 24,
      totalLessons: 12,
      completedLessons: 8,
      rating: 4.8,
      reviews: 18,
      status: 'active',
      category: 'Business',
      duration: '8 weeks',
      price: '₺1,299',
      lastActivity: '2 hours ago',
      nextLesson: 'Today at 14:00',
      progress: 67,
      completion: 85,
      visibility: 'public'
    },
    {
      id: 2,
      title: 'IELTS Preparation Course',
      description: 'Comprehensive IELTS test preparation program',
      level: 'Intermediate',
      students: 32,
      totalLessons: 16,
      completedLessons: 12,
      rating: 4.9,
      reviews: 28,
      status: 'active',
      category: 'Test Prep',
      duration: '10 weeks',
      price: '₺1,599',
      lastActivity: '1 hour ago',
      nextLesson: 'Tomorrow at 10:00',
      progress: 75,
      completion: 92,
      visibility: 'public'
    },
    {
      id: 3,
      title: 'Grammar Fundamentals',
      description: 'Essential English grammar for beginners',
      level: 'Beginner',
      students: 18,
      totalLessons: 10,
      completedLessons: 10,
      rating: 4.7,
      reviews: 15,
      status: 'completed',
      category: 'Grammar',
      duration: '6 weeks',
      price: '₺899',
      lastActivity: '3 days ago',
      nextLesson: 'Completed',
      progress: 100,
      completion: 100,
      visibility: 'public'
    },
    {
      id: 4,
      title: 'Academic Writing Skills',
      description: 'Writing skills for university and professional contexts',
      level: 'Advanced',
      students: 0,
      totalLessons: 14,
      completedLessons: 0,
      rating: 0,
      reviews: 0,
      status: 'draft',
      category: 'Writing',
      duration: '8 weeks',
      price: '₺1,199',
      lastActivity: '1 week ago',
      nextLesson: 'Not scheduled',
      progress: 0,
      completion: 0,
      visibility: 'private'
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === 'all' || course.status === activeTab
    return matchesSearch && matchesTab
  })

  const stats = [
    {
      name: 'Toplam Kurs',
      value: courses.length,
      change: '+1',
      changeType: 'increase',
      icon: BookOpen,
      color: 'text-blue-600'
    },
    {
      name: 'Toplam Öğrenci',
      value: courses.reduce((sum, course) => sum + course.students, 0),
      change: '+12',
      changeType: 'increase',
      icon: Users,
      color: 'text-green-600'
    },
    {
      name: 'Ortalama Puan',
      value: (courses.filter(c => c.rating > 0).reduce((sum, course) => sum + course.rating, 0) / courses.filter(c => c.rating > 0).length).toFixed(1),
      change: '+0.1',
      changeType: 'increase',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      name: 'Tamamlanan Kurs',
      value: courses.filter(c => c.status === 'completed').length,
      change: '+3',
      changeType: 'increase',
      icon: CheckCircle,
      color: 'text-green-600'
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      case 'draft': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Play className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'draft': return <Edit className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kurs Yönetimi</h1>
          <p className="text-gray-600 mt-1">Kurslarınızı oluşturun, düzenleyin ve yönetin</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="w-4 h-4" />
            <span>İçe Aktar</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Yeni Kurs</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} bu ay
                </p>
              </div>
              <div className={`p-3 rounded-lg bg-gray-50`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Kurs ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filtrele</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {[
                { key: 'all', label: 'Tümü', count: courses.length },
                { key: 'active', label: 'Aktif', count: courses.filter(c => c.status === 'active').length },
                { key: 'draft', label: 'Taslak', count: courses.filter(c => c.status === 'draft').length },
                { key: 'completed', label: 'Tamamlanan', count: courses.filter(c => c.status === 'completed').length }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.key 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${course.status === 'active' ? 'bg-green-100' : course.status === 'completed' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <BookOpen className={`w-5 h-5 ${course.status === 'active' ? 'text-green-600' : course.status === 'completed' ? 'text-blue-600' : 'text-gray-600'}`} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(course.status)}`}>
                      {getStatusIcon(course.status)}
                      <span className="ml-1">
                        {course.status === 'active' ? 'Aktif' : course.status === 'completed' ? 'Tamamlandı' : 'Taslak'}
                      </span>
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students} öğrenci
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    {course.category}
                  </span>
                </div>
              </div>

              {course.status === 'active' && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">İlerleme</span>
                    <span className="text-sm text-gray-500">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  {course.rating > 0 && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                      <span className="text-xs text-gray-500">({course.reviews})</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-gray-900">{course.price}</span>
                    <span className="text-xs text-gray-500">kurs fiyatı</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {course.visibility === 'public' ? (
                    <Globe className="w-4 h-4 text-green-500" />
                  ) : (
                    <Lock className="w-4 h-4 text-gray-400" />
                  )}
                  <button className="flex items-center space-x-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                    <span>Yönet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Kurs bulunamadı</h3>
          <p className="text-gray-600 mb-4">Arama kriterlerinize uygun kurs bulunamadı.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Yeni Kurs Oluştur
          </button>
        </div>
      )}
    </div>
  )
}

export default TeacherCourses
