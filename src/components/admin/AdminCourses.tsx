'use client'

import React, { useState } from 'react'
import { 
  BookOpen, 
  Search, 
  Filter, 
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  Users,
  Calendar,
  Play,
  Pause,
  AlertTriangle,
  FileText,
  Download,
  Upload,
  MoreVertical,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  DollarSign,
  TrendingUp,
  Activity,
  Award,
  Video,
  Image,
  Headphones,
  Flag,
  Target,
  Zap,
  Settings,
  Globe,
  Lock,
  Unlock
} from 'lucide-react'

const AdminCourses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'approved' | 'rejected' | 'suspended' | 'draft'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const courses = [
    {
      id: '1',
      title: 'Business English Mastery',
      instructor: 'James Thompson',
      instructorId: '2',
      category: 'Business English',
      level: 'Intermediate',
      status: 'approved',
      price: 299,
      enrolledStudents: 1245,
      rating: 4.8,
      reviewCount: 324,
      duration: '12 weeks',
      lessonsCount: 48,
      videosCount: 45,
      audiosCount: 12,
      documentsCount: 36,
      totalSize: '4.2 GB',
      language: 'English',
      subtitle: 'Turkish',
      createdDate: '2023-09-15',
      lastUpdated: '2024-01-20',
      publishedDate: '2023-10-01',
      completion: 95,
      thumbnail: '/api/placeholder/300/200',
      description: 'Complete business English course for professionals',
      features: ['Video Lessons', 'Audio Practice', 'Interactive Exercises', 'Certificate'],
      tags: ['Business', 'Professional', 'Communication'],
      isActive: true,
      isFeatured: true,
      revenue: 372555,
      monthlyRevenue: 45600,
      certificateTemplate: true,
      hasQuiz: true,
      hasAssignment: true,
      downloadable: true,
      lifetime: false,
      expiryDate: null
    },
    {
      id: '2',
      title: 'IELTS Preparation Intensive',
      instructor: 'Dr. Elif Özkan',
      instructorId: '1',
      category: 'Test Preparation',
      level: 'Advanced',
      status: 'pending',
      price: 399,
      enrolledStudents: 0,
      rating: 0,
      reviewCount: 0,
      duration: '8 weeks',
      lessonsCount: 32,
      videosCount: 28,
      audiosCount: 18,
      documentsCount: 24,
      totalSize: '3.8 GB',
      language: 'English',
      subtitle: 'Turkish',
      createdDate: '2024-01-10',
      lastUpdated: '2024-01-25',
      publishedDate: null,
      completion: 75,
      thumbnail: '/api/placeholder/300/200',
      description: 'Comprehensive IELTS preparation course',
      features: ['Mock Tests', 'Speaking Practice', 'Writing Feedback', 'Score Prediction'],
      tags: ['IELTS', 'Test Prep', 'Academic'],
      isActive: false,
      isFeatured: false,
      revenue: 0,
      monthlyRevenue: 0,
      certificateTemplate: true,
      hasQuiz: true,
      hasAssignment: true,
      downloadable: false,
      lifetime: true,
      expiryDate: null,
      pendingReason: 'İçerik kontrolü bekliyor'
    },
    {
      id: '3',
      title: 'Everyday English Conversation',
      instructor: 'Ayşe Demir',
      instructorId: '3',
      category: 'Speaking',
      level: 'Beginner',
      status: 'approved',
      price: 199,
      enrolledStudents: 892,
      rating: 4.6,
      reviewCount: 156,
      duration: '6 weeks',
      lessonsCount: 24,
      videosCount: 20,
      audiosCount: 30,
      documentsCount: 18,
      totalSize: '2.1 GB',
      language: 'English',
      subtitle: 'Turkish',
      createdDate: '2023-11-20',
      lastUpdated: '2024-01-15',
      publishedDate: '2023-12-05',
      completion: 100,
      thumbnail: '/api/placeholder/300/200',
      description: 'Learn daily conversation skills',
      features: ['Speaking Practice', 'Pronunciation Guide', 'Real-life Scenarios'],
      tags: ['Conversation', 'Daily English', 'Speaking'],
      isActive: true,
      isFeatured: false,
      revenue: 177708,
      monthlyRevenue: 15800,
      certificateTemplate: true,
      hasQuiz: false,
      hasAssignment: true,
      downloadable: true,
      lifetime: false,
      expiryDate: '2024-12-31'
    },
    {
      id: '4',
      title: 'Advanced Grammar Workshop',
      instructor: 'Unknown Teacher',
      instructorId: 'unknown',
      category: 'Grammar',
      level: 'Advanced',
      status: 'rejected',
      price: 149,
      enrolledStudents: 0,
      rating: 0,
      reviewCount: 0,
      duration: '4 weeks',
      lessonsCount: 16,
      videosCount: 12,
      audiosCount: 4,
      documentsCount: 20,
      totalSize: '1.2 GB',
      language: 'English',
      subtitle: 'Turkish',
      createdDate: '2023-12-01',
      lastUpdated: '2023-12-15',
      publishedDate: null,
      completion: 60,
      thumbnail: '/api/placeholder/300/200',
      description: 'Advanced grammar rules and exercises',
      features: ['Grammar Exercises', 'Error Analysis', 'Practice Tests'],
      tags: ['Grammar', 'Advanced', 'Rules'],
      isActive: false,
      isFeatured: false,
      revenue: 0,
      monthlyRevenue: 0,
      certificateTemplate: false,
      hasQuiz: true,
      hasAssignment: false,
      downloadable: false,
      lifetime: false,
      expiryDate: null,
      rejectionReason: 'İçerik kalitesi yetersiz ve öğretmen bilgileri eksik'
    },
    {
      id: '5',
      title: 'English for Beginners',
      instructor: 'Sarah Johnson',
      instructorId: '6',
      category: 'General English',
      level: 'Beginner',
      status: 'suspended',
      price: 99,
      enrolledStudents: 234,
      rating: 3.2,
      reviewCount: 45,
      duration: '10 weeks',
      lessonsCount: 40,
      videosCount: 35,
      audiosCount: 25,
      documentsCount: 30,
      totalSize: '3.5 GB',
      language: 'English',
      subtitle: 'Turkish',
      createdDate: '2023-08-10',
      lastUpdated: '2023-10-20',
      publishedDate: '2023-09-01',
      completion: 85,
      thumbnail: '/api/placeholder/300/200',
      description: 'Complete beginner English course',
      features: ['Basic Vocabulary', 'Simple Grammar', 'Pronunciation'],
      tags: ['Beginner', 'Basics', 'Foundation'],
      isActive: false,
      isFeatured: false,
      revenue: 23166,
      monthlyRevenue: 0,
      certificateTemplate: true,
      hasQuiz: true,
      hasAssignment: true,
      downloadable: true,
      lifetime: false,
      expiryDate: null,
      suspensionReason: 'Öğrenci şikayetleri ve düşük kalite puanları'
    },
    {
      id: '6',
      title: 'Academic Writing Skills',
      instructor: 'Dr. Elif Özkan',
      instructorId: '1',
      category: 'Writing',
      level: 'Advanced',
      status: 'draft',
      price: 249,
      enrolledStudents: 0,
      rating: 0,
      reviewCount: 0,
      duration: '6 weeks',
      lessonsCount: 18,
      videosCount: 15,
      audiosCount: 8,
      documentsCount: 25,
      totalSize: '1.8 GB',
      language: 'English',
      subtitle: 'Turkish',
      createdDate: '2024-01-15',
      lastUpdated: '2024-01-26',
      publishedDate: null,
      completion: 45,
      thumbnail: '/api/placeholder/300/200',
      description: 'Academic writing skills for university students',
      features: ['Essay Writing', 'Research Skills', 'Citation Methods'],
      tags: ['Academic', 'Writing', 'University'],
      isActive: false,
      isFeatured: false,
      revenue: 0,
      monthlyRevenue: 0,
      certificateTemplate: true,
      hasQuiz: true,
      hasAssignment: true,
      downloadable: false,
      lifetime: true,
      expiryDate: null
    }
  ]

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesTab = activeTab === 'all' || course.status === activeTab
    return matchesSearch && matchesTab
  })

  const stats = [
    {
      name: 'Toplam Kurs',
      value: courses.filter(c => c.status === 'approved').length,
      change: '+2',
      changeType: 'increase',
      icon: BookOpen,
      color: 'text-blue-600'
    },
    {
      name: 'Bekleyen Onay',
      value: courses.filter(c => c.status === 'pending').length,
      change: '+1',
      changeType: 'increase',
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      name: 'Toplam Öğrenci',
      value: courses.filter(c => c.status === 'approved').reduce((sum, c) => sum + c.enrolledStudents, 0).toLocaleString(),
      change: '+145',
      changeType: 'increase',
      icon: Users,
      color: 'text-green-600'
    },
    {
      name: 'Aylık Gelir',
      value: `₺${courses.filter(c => c.status === 'approved').reduce((sum, c) => sum + c.monthlyRevenue, 0).toLocaleString()}`,
      change: '+12%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'text-purple-600'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      case 'suspended': return 'bg-orange-100 text-orange-800'
      case 'draft': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved': return 'Onaylandı'
      case 'pending': return 'Bekliyor'
      case 'rejected': return 'Reddedildi'
      case 'suspended': return 'Askıya Alındı'
      case 'draft': return 'Taslak'
      default: return 'Bilinmiyor'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4" />
      case 'pending': return <Clock className="w-4 h-4" />
      case 'rejected': return <XCircle className="w-4 h-4" />
      case 'suspended': return <AlertTriangle className="w-4 h-4" />
      case 'draft': return <FileText className="w-4 h-4" />
      default: return <AlertTriangle className="w-4 h-4" />
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleApprove = (courseId: string) => {
    console.log(`Approve course: ${courseId}`)
  }

  const handleReject = (courseId: string) => {
    console.log(`Reject course: ${courseId}`)
  }

  const handleSuspend = (courseId: string) => {
    console.log(`Suspend course: ${courseId}`)
  }

  const handleToggleActive = (courseId: string) => {
    console.log(`Toggle active course: ${courseId}`)
  }

  const handleToggleFeatured = (courseId: string) => {
    console.log(`Toggle featured course: ${courseId}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kurs Yönetimi</h1>
          <p className="text-gray-600 mt-1">Kursları onaylayın, düzenleyin ve performanslarını izleyin</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Rapor İndir</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="w-4 h-4" />
            <span>İçerik Yükle</span>
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
                <p className={`text-sm mt-1 ${stat.changeType === 'increase' ? 'text-green-600' : stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'}`}>
                  {stat.change} bu ay
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gray-50">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
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
                { key: 'pending', label: 'Bekleyen', count: courses.filter(c => c.status === 'pending').length },
                { key: 'approved', label: 'Onaylanan', count: courses.filter(c => c.status === 'approved').length },
                { key: 'rejected', label: 'Reddedilen', count: courses.filter(c => c.status === 'rejected').length },
                { key: 'suspended', label: 'Askıya Alınan', count: courses.filter(c => c.status === 'suspended').length },
                { key: 'draft', label: 'Taslak', count: courses.filter(c => c.status === 'draft').length }
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

      {/* Courses Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{course.title}</h3>
                    <p className="text-xs text-gray-600">{course.instructor}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <button className="p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-50">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-50">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-50">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                    {getStatusIcon(course.status)}
                    <span className="ml-1">{getStatusText(course.status)}</span>
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {course.isFeatured && (
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  )}
                  {course.isActive ? (
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  ) : (
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                <div className="flex flex-wrap gap-1">
                  {course.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Video className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{course.videosCount} video</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{course.enrolledStudents} öğrenci</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">₺{course.price}</span>
                </div>
              </div>

              {course.status === 'approved' && (
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-sm font-bold text-gray-900">{course.rating}</div>
                    <div className="text-xs text-gray-600">Puan</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-sm font-bold text-gray-900">{course.completion}%</div>
                    <div className="text-xs text-gray-600">Tamamlama</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-sm font-bold text-gray-900">₺{course.monthlyRevenue.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">Aylık</div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-xs text-gray-500">
                  {course.createdDate}
                </div>
                <div className="flex items-center space-x-2">
                  {course.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleReject(course.id)}
                        className="flex items-center space-x-1 px-2 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
                      >
                        <ThumbsDown className="w-3 h-3" />
                        <span>Reddet</span>
                      </button>
                      <button
                        onClick={() => handleApprove(course.id)}
                        className="flex items-center space-x-1 px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors"
                      >
                        <ThumbsUp className="w-3 h-3" />
                        <span>Onayla</span>
                      </button>
                    </>
                  )}
                  {course.status === 'approved' && (
                    <>
                      <button
                        onClick={() => handleToggleActive(course.id)}
                        className={`p-1 rounded ${course.isActive ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-50'}`}
                      >
                        {course.isActive ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleToggleFeatured(course.id)}
                        className={`p-1 rounded ${course.isFeatured ? 'text-yellow-600 hover:bg-yellow-50' : 'text-gray-400 hover:bg-gray-50'}`}
                      >
                        <Star className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleSuspend(course.id)}
                        className="px-2 py-1 bg-yellow-600 text-white text-xs rounded hover:bg-yellow-700 transition-colors"
                      >
                        Askıya Al
                      </button>
                    </>
                  )}
                  {course.status === 'suspended' && (
                    <button
                      onClick={() => handleApprove(course.id)}
                      className="px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors"
                    >
                      Aktifleştir
                    </button>
                  )}
                </div>
              </div>

              {(course.rejectionReason || course.suspensionReason || course.pendingReason) && (
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-red-900">
                      {course.status === 'rejected' ? 'Ret Sebebi:' : 
                       course.status === 'suspended' ? 'Askıya Alma Sebebi:' : 
                       'Bekletme Sebebi:'}
                    </span>
                  </div>
                  <p className="text-sm text-red-700 mt-1">
                    {course.rejectionReason || course.suspensionReason || course.pendingReason}
                  </p>
                </div>
              )}
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
            Yeni Kurs Ekle
          </button>
        </div>
      )}
    </div>
  )
}

export default AdminCourses
