'use client'

import React, { useState } from 'react'
import { 
  Users, 
  Search, 
  Filter, 
  Plus,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Star,
  TrendingUp,
  Award,
  Clock,
  Target,
  AlertCircle,
  CheckCircle,
  Eye,
  Edit,
  MoreVertical,
  Download,
  Upload,
  UserPlus,
  MessageSquare,
  BarChart3,
  Book,
  Trophy,
  GraduationCap,
  Activity
} from 'lucide-react'

const TeacherStudents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'new' | 'graduated'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null)

  const students = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      email: 'ahmet.yilmaz@email.com',
      phone: '+90 532 123 4567',
      avatar: '/api/placeholder/40/40',
      joinDate: '2024-01-15',
      status: 'active',
      level: 'Intermediate',
      coursesCompleted: 3,
      currentCourses: 2,
      totalLessons: 45,
      attendanceRate: 92,
      averageScore: 85,
      lastActivity: '2 hours ago',
      location: 'İstanbul, Türkiye',
      courses: [
        { name: 'Business English', progress: 75, status: 'active' },
        { name: 'Grammar Fundamentals', progress: 100, status: 'completed' }
      ],
      achievements: ['Perfect Attendance', 'Top Student'],
      nextLesson: 'Today at 14:00',
      notes: 'Actively participates in classes, shows great improvement in speaking'
    },
    {
      id: 2,
      name: 'Zeynep Kara',
      email: 'zeynep.kara@email.com',
      phone: '+90 541 987 6543',
      avatar: '/api/placeholder/40/40',
      joinDate: '2024-02-01',
      status: 'active',
      level: 'Advanced',
      coursesCompleted: 5,
      currentCourses: 1,
      totalLessons: 68,
      attendanceRate: 88,
      averageScore: 92,
      lastActivity: '1 hour ago',
      location: 'Ankara, Türkiye',
      courses: [
        { name: 'IELTS Preparation', progress: 85, status: 'active' },
        { name: 'Business English', progress: 100, status: 'completed' }
      ],
      achievements: ['Honor Student', 'Perfect Score'],
      nextLesson: 'Tomorrow at 10:00',
      notes: 'Excellent student, ready for advanced courses'
    },
    {
      id: 3,
      name: 'Mehmet Demir',
      email: 'mehmet.demir@email.com',
      phone: '+90 555 246 8135',
      avatar: '/api/placeholder/40/40',
      joinDate: '2024-03-10',
      status: 'new',
      level: 'Beginner',
      coursesCompleted: 0,
      currentCourses: 1,
      totalLessons: 8,
      attendanceRate: 100,
      averageScore: 78,
      lastActivity: '30 minutes ago',
      location: 'İzmir, Türkiye',
      courses: [
        { name: 'Grammar Fundamentals', progress: 25, status: 'active' }
      ],
      achievements: [],
      nextLesson: 'Today at 16:00',
      notes: 'New student, needs encouragement and support'
    },
    {
      id: 4,
      name: 'Fatma Öztürk',
      email: 'fatma.ozturk@email.com',
      phone: '+90 533 159 7531',
      avatar: '/api/placeholder/40/40',
      joinDate: '2023-09-15',
      status: 'graduated',
      level: 'Advanced',
      coursesCompleted: 8,
      currentCourses: 0,
      totalLessons: 120,
      attendanceRate: 95,
      averageScore: 94,
      lastActivity: '1 week ago',
      location: 'Bursa, Türkiye',
      courses: [
        { name: 'Business English Advanced', progress: 100, status: 'completed' },
        { name: 'IELTS Preparation', progress: 100, status: 'completed' }
      ],
      achievements: ['Graduate', 'Top Performer', 'Perfect Attendance'],
      nextLesson: 'Graduated',
      notes: 'Successfully completed all courses, excellent performance'
    }
  ]

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === 'all' || student.status === activeTab
    return matchesSearch && matchesTab
  })

  const stats = [
    {
      name: 'Toplam Öğrenci',
      value: students.length,
      change: '+5',
      changeType: 'increase',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      name: 'Aktif Öğrenci',
      value: students.filter(s => s.status === 'active').length,
      change: '+3',
      changeType: 'increase',
      icon: Activity,
      color: 'text-green-600'
    },
    {
      name: 'Mezun Öğrenci',
      value: students.filter(s => s.status === 'graduated').length,
      change: '+2',
      changeType: 'increase',
      icon: GraduationCap,
      color: 'text-purple-600'
    },
    {
      name: 'Ortalama Puan',
      value: Math.round(students.reduce((sum, s) => sum + s.averageScore, 0) / students.length),
      change: '+2',
      changeType: 'increase',
      icon: Star,
      color: 'text-yellow-600'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'graduated': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
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

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Aktif'
      case 'new': return 'Yeni'
      case 'graduated': return 'Mezun'
      default: return 'Bilinmiyor'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Öğrenci Yönetimi</h1>
          <p className="text-gray-600 mt-1">Öğrencilerinizi takip edin ve yönetin</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Dışa Aktar</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <UserPlus className="w-4 h-4" />
            <span>Öğrenci Ekle</span>
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
              <div className="p-3 rounded-lg bg-gray-50">
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
                placeholder="Öğrenci ara..."
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
                { key: 'all', label: 'Tümü', count: students.length },
                { key: 'active', label: 'Aktif', count: students.filter(s => s.status === 'active').length },
                { key: 'new', label: 'Yeni', count: students.filter(s => s.status === 'new').length },
                { key: 'graduated', label: 'Mezun', count: students.filter(s => s.status === 'graduated').length }
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

      {/* Students Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredStudents.map((student) => (
          <div key={student.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                    <p className="text-gray-600 text-sm">{student.email}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(student.status)}`}>
                        {getStatusText(student.status)}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(student.level)}`}>
                        {student.level}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{student.coursesCompleted}</div>
                  <div className="text-sm text-gray-600">Tamamlanan Kurs</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{student.averageScore}</div>
                  <div className="text-sm text-gray-600">Ortalama Puan</div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Devam Oranı</span>
                  <span className="font-medium text-gray-900">{student.attendanceRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${student.attendanceRate}%` }}
                  />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Katılım: {student.joinDate}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Son aktivite: {student.lastActivity}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{student.location}</span>
                </div>
              </div>

              {student.achievements.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">Başarılar</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {student.achievements.map((achievement, index) => (
                      <span key={index} className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">{student.currentCourses} aktif kurs</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm text-gray-600">{student.totalLessons} ders</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                    Profili Gör
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredStudents.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Öğrenci bulunamadı</h3>
          <p className="text-gray-600 mb-4">Arama kriterlerinize uygun öğrenci bulunamadı.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Yeni Öğrenci Ekle
          </button>
        </div>
      )}
    </div>
  )
}

export default TeacherStudents
