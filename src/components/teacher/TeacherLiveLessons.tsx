'use client'

import React, { useState } from 'react'
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Plus,
  Search,
  Filter,
  Play,
  Pause,
  Square,
  Settings,
  Share2,
  Copy,
  Edit,
  Trash2,
  Eye,
  UserPlus,
  MessageSquare,
  Mic,
  MicOff,
  VideoOff,
  Monitor,
  MoreVertical,
  AlertCircle,
  CheckCircle,
  Star,
  TrendingUp,
  BarChart3,
  Download,
  Upload,
  Repeat,
  Globe,
  Lock,
  Wifi,
  WifiOff
} from 'lucide-react'

const TeacherLiveLessons: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'live' | 'completed' | 'recurring'>('upcoming')
  const [searchQuery, setSearchQuery] = useState('')

  const lessons = [
    {
      id: 1,
      title: 'Business English - Presentations',
      course: 'Business English Advanced',
      date: '2024-01-20',
      time: '14:00',
      duration: 60,
      status: 'upcoming',
      type: 'live',
      students: 24,
      registeredStudents: 18,
      description: 'Learn how to create and deliver effective business presentations',
      isRecurring: false,
      meetingLink: 'https://meet.example.com/business-presentation-123',
      recordingEnabled: true,
      chatEnabled: true,
      waitingRoom: true,
      maxStudents: 30,
      materials: ['Presentation Template', 'Exercise Sheet', 'Vocabulary List'],
      instructor: 'John Smith',
      category: 'Speaking',
      level: 'Advanced',
      language: 'English',
      timezone: 'GMT+3',
      reminder: '15 minutes before',
      autoRecord: true
    },
    {
      id: 2,
      title: 'IELTS Speaking Practice',
      course: 'IELTS Preparation',
      date: '2024-01-20',
      time: '16:00',
      duration: 90,
      status: 'live',
      type: 'workshop',
      students: 15,
      registeredStudents: 15,
      description: 'Interactive speaking practice session for IELTS preparation',
      isRecurring: false,
      meetingLink: 'https://meet.example.com/ielts-speaking-456',
      recordingEnabled: true,
      chatEnabled: true,
      waitingRoom: false,
      maxStudents: 20,
      materials: ['Speaking Questions', 'Score Rubric', 'Practice Tests'],
      instructor: 'Jane Doe',
      category: 'Test Prep',
      level: 'Intermediate',
      language: 'English',
      timezone: 'GMT+3',
      reminder: '10 minutes before',
      autoRecord: false,
      liveStats: {
        connectedStudents: 12,
        avgEngagement: 85,
        chatMessages: 45,
        duration: 35
      }
    },
    {
      id: 3,
      title: 'Grammar Review Session',
      course: 'Grammar Fundamentals',
      date: '2024-01-21',
      time: '10:00',
      duration: 45,
      status: 'upcoming',
      type: 'review',
      students: 32,
      registeredStudents: 28,
      description: 'Review of past tense forms and common grammar mistakes',
      isRecurring: true,
      recurringPattern: 'Every Monday',
      meetingLink: 'https://meet.example.com/grammar-review-789',
      recordingEnabled: true,
      chatEnabled: true,
      waitingRoom: true,
      maxStudents: 35,
      materials: ['Grammar Guide', 'Exercise Worksheets', 'Quiz'],
      instructor: 'Mike Johnson',
      category: 'Grammar',
      level: 'Beginner',
      language: 'English',
      timezone: 'GMT+3',
      reminder: '30 minutes before',
      autoRecord: true
    },
    {
      id: 4,
      title: 'Conversation Club',
      course: 'Speaking Practice',
      date: '2024-01-18',
      time: '19:00',
      duration: 60,
      status: 'completed',
      type: 'conversation',
      students: 20,
      registeredStudents: 20,
      description: 'Free conversation practice with native speakers',
      isRecurring: true,
      recurringPattern: 'Every Friday',
      meetingLink: 'https://meet.example.com/conversation-club-101',
      recordingEnabled: false,
      chatEnabled: true,
      waitingRoom: false,
      maxStudents: 25,
      materials: ['Discussion Topics', 'Ice Breakers'],
      instructor: 'Sarah Wilson',
      category: 'Speaking',
      level: 'All Levels',
      language: 'English',
      timezone: 'GMT+3',
      reminder: '5 minutes before',
      autoRecord: false,
      completedStats: {
        attendance: 18,
        avgRating: 4.8,
        completionRate: 90,
        recordingSize: '0 MB'
      }
    }
  ]

  const filteredLessons = lessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lesson.course.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === 'upcoming' ? lesson.status === 'upcoming' :
                      activeTab === 'live' ? lesson.status === 'live' :
                      activeTab === 'completed' ? lesson.status === 'completed' :
                      lesson.isRecurring
    return matchesSearch && matchesTab
  })

  const stats = [
    {
      name: 'Bu Hafta Ders',
      value: lessons.filter(l => l.status === 'upcoming').length,
      change: '+2',
      changeType: 'increase',
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      name: 'Canlı Dersler',
      value: lessons.filter(l => l.status === 'live').length,
      change: '0',
      changeType: 'neutral',
      icon: Video,
      color: 'text-red-600'
    },
    {
      name: 'Toplam Katılımcı',
      value: lessons.reduce((sum, lesson) => sum + lesson.registeredStudents, 0),
      change: '+15',
      changeType: 'increase',
      icon: Users,
      color: 'text-green-600'
    },
    {
      name: 'Ortalama Katılım',
      value: '92%',
      change: '+5%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800'
      case 'live': return 'bg-red-100 text-red-800'
      case 'completed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming': return 'Yaklaşan'
      case 'live': return 'Canlı'
      case 'completed': return 'Tamamlandı'
      default: return 'Bilinmiyor'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming': return <Clock className="w-4 h-4" />
      case 'live': return <Video className="w-4 h-4" />
      case 'completed': return <CheckCircle className="w-4 h-4" />
      default: return <AlertCircle className="w-4 h-4" />
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      case 'All Levels': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Canlı Dersler</h1>
          <p className="text-gray-600 mt-1">Canlı dersleri planlayın ve yönetin</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4" />
            <span>Takvim</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Yeni Ders</span>
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
                  {stat.change} bu hafta
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
                placeholder="Ders ara..."
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
                { key: 'upcoming', label: 'Yaklaşan', count: lessons.filter(l => l.status === 'upcoming').length },
                { key: 'live', label: 'Canlı', count: lessons.filter(l => l.status === 'live').length },
                { key: 'completed', label: 'Tamamlanan', count: lessons.filter(l => l.status === 'completed').length },
                { key: 'recurring', label: 'Tekrar Eden', count: lessons.filter(l => l.isRecurring).length }
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

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredLessons.map((lesson) => (
          <div key={lesson.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${lesson.status === 'live' ? 'bg-red-100' : lesson.status === 'upcoming' ? 'bg-blue-100' : 'bg-green-100'}`}>
                    <Video className={`w-5 h-5 ${lesson.status === 'live' ? 'text-red-600' : lesson.status === 'upcoming' ? 'text-blue-600' : 'text-green-600'}`} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lesson.status)}`}>
                      {getStatusIcon(lesson.status)}
                      <span className="ml-1">{getStatusText(lesson.status)}</span>
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(lesson.level)}`}>
                      {lesson.level}
                    </span>
                    {lesson.isRecurring && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                        <Repeat className="w-3 h-3 inline mr-1" />
                        Tekrar Eden
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Share2 className="w-4 h-4" />
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
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{lesson.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{lesson.course}</p>
                <p className="text-sm text-gray-500 mb-3">{lesson.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {lesson.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {lesson.time} ({lesson.duration}dk)
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {lesson.registeredStudents}/{lesson.maxStudents}
                  </span>
                </div>
              </div>

              {lesson.status === 'live' && lesson.liveStats && (
                <div className="mb-4 p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-red-900">Canlı İstatistikler</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-xs text-red-700">Canlı</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-900">{lesson.liveStats.connectedStudents}</div>
                      <div className="text-xs text-red-700">Bağlı Öğrenci</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-900">{lesson.liveStats.duration}dk</div>
                      <div className="text-xs text-red-700">Süre</div>
                    </div>
                  </div>
                </div>
              )}

              {lesson.status === 'completed' && lesson.completedStats && (
                <div className="mb-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-900">Ders Sonuçları</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-green-700">{lesson.completedStats.avgRating}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-900">{lesson.completedStats.attendance}</div>
                      <div className="text-xs text-green-700">Katılım</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-900">{lesson.completedStats.completionRate}%</div>
                      <div className="text-xs text-green-700">Tamamlama</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Katılım Oranı</span>
                  <span className="text-sm text-gray-500">
                    {lesson.registeredStudents}/{lesson.maxStudents} ({Math.round((lesson.registeredStudents / lesson.maxStudents) * 100)}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(lesson.registeredStudents / lesson.maxStudents) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {lesson.recordingEnabled ? (
                      <Video className="w-4 h-4 text-green-500" />
                    ) : (
                      <VideoOff className="w-4 h-4 text-gray-400" />
                    )}
                    <span className="text-xs text-gray-500">Kayıt</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {lesson.chatEnabled ? (
                      <MessageSquare className="w-4 h-4 text-green-500" />
                    ) : (
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                    )}
                    <span className="text-xs text-gray-500">Sohbet</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {lesson.waitingRoom ? (
                      <Lock className="w-4 h-4 text-blue-500" />
                    ) : (
                      <Globe className="w-4 h-4 text-gray-400" />
                    )}
                    <span className="text-xs text-gray-500">Bekleme</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {lesson.status === 'live' && (
                    <button className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors">
                      Derse Katıl
                    </button>
                  )}
                  {lesson.status === 'upcoming' && (
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                      Başlat
                    </button>
                  )}
                  {lesson.status === 'completed' && (
                    <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors">
                      Kaydı Gör
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredLessons.length === 0 && (
        <div className="text-center py-12">
          <Video className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Ders bulunamadı</h3>
          <p className="text-gray-600 mb-4">Seçilen kategoride ders bulunamadı.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Yeni Ders Planla
          </button>
        </div>
      )}
    </div>
  )
}

export default TeacherLiveLessons
