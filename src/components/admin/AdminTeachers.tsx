'use client'

import React, { useState } from 'react'
import { 
  GraduationCap, 
  Search, 
  Filter, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  Users,
  BookOpen,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Award,
  FileText,
  Download,
  Upload,
  MoreVertical,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  DollarSign,
  TrendingUp,
  Activity
} from 'lucide-react'

const AdminTeachers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'approved' | 'rejected' | 'suspended'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const teachers = [
    {
      id: '1',
      name: 'Dr. Elif Özkan',
      email: 'elif.ozkan@university.edu',
      phone: '+90 533 987 6543',
      specialization: 'Academic English',
      experience: '8 yıl',
      education: 'PhD in English Literature',
      location: 'Ankara, Türkiye',
      joinDate: '2023-08-22',
      status: 'approved',
      rating: 4.8,
      reviewCount: 156,
      studentsCount: 245,
      coursesCount: 12,
      totalEarnings: '₺45,250',
      monthlyEarnings: '₺8,500',
      completionRate: 95,
      responseTime: '2 hours',
      languages: ['English', 'Turkish'],
      certificates: ['CELTA', 'TESOL', 'Cambridge TKT'],
      bio: 'Experienced English teacher with focus on academic writing and test preparation.',
      avatar: '/api/placeholder/60/60',
      isVerified: true,
      lastActive: '2 hours ago',
      applicationDate: '2023-08-15'
    },
    {
      id: '2',
      name: 'James Thompson',
      email: 'james.thompson@email.com',
      phone: '+90 534 123 4567',
      specialization: 'Business English',
      experience: '5 yıl',
      education: 'MA in Applied Linguistics',
      location: 'İstanbul, Türkiye',
      joinDate: '2024-01-10',
      status: 'pending',
      rating: 0,
      reviewCount: 0,
      studentsCount: 0,
      coursesCount: 0,
      totalEarnings: '₺0',
      monthlyEarnings: '₺0',
      completionRate: 0,
      responseTime: 'N/A',
      languages: ['English', 'Turkish', 'Spanish'],
      certificates: ['TEFL', 'Business English Certificate'],
      bio: 'Native English speaker with extensive business background.',
      avatar: '/api/placeholder/60/60',
      isVerified: false,
      lastActive: '1 day ago',
      applicationDate: '2024-01-05'
    },
    {
      id: '3',
      name: 'Ayşe Demir',
      email: 'ayse.demir@gmail.com',
      phone: '+90 535 456 7890',
      specialization: 'Conversation & Speaking',
      experience: '3 yıl',
      education: 'BA in English Language Teaching',
      location: 'İzmir, Türkiye',
      joinDate: '2023-11-15',
      status: 'approved',
      rating: 4.6,
      reviewCount: 89,
      studentsCount: 120,
      coursesCount: 6,
      totalEarnings: '₺22,100',
      monthlyEarnings: '₺4,200',
      completionRate: 88,
      responseTime: '4 hours',
      languages: ['English', 'Turkish'],
      certificates: ['CELTA', 'Speaking Skills Certificate'],
      bio: 'Passionate about helping students improve their speaking confidence.',
      avatar: '/api/placeholder/60/60',
      isVerified: true,
      lastActive: '30 minutes ago',
      applicationDate: '2023-11-10'
    },
    {
      id: '4',
      name: 'Mark Johnson',
      email: 'mark.johnson@fake.com',
      phone: '+90 536 999 8888',
      specialization: 'General English',
      experience: '1 yıl',
      education: 'High School Diploma',
      location: 'Antalya, Türkiye',
      joinDate: null,
      status: 'rejected',
      rating: 0,
      reviewCount: 0,
      studentsCount: 0,
      coursesCount: 0,
      totalEarnings: '₺0',
      monthlyEarnings: '₺0',
      completionRate: 0,
      responseTime: 'N/A',
      languages: ['English'],
      certificates: [],
      bio: 'Looking to start teaching English online.',
      avatar: '/api/placeholder/60/60',
      isVerified: false,
      lastActive: '2 weeks ago',
      applicationDate: '2024-01-02',
      rejectionReason: 'Yetersiz eğitim ve sertifika'
    },
    {
      id: '5',
      name: 'Fatma Yılmaz',
      email: 'fatma.yilmaz@suspended.com',
      phone: '+90 537 111 2222',
      specialization: 'Grammar & Writing',
      experience: '4 yıl',
      education: 'MA in English Literature',
      location: 'Bursa, Türkiye',
      joinDate: '2023-06-20',
      status: 'suspended',
      rating: 3.2,
      reviewCount: 45,
      studentsCount: 78,
      coursesCount: 4,
      totalEarnings: '₺12,400',
      monthlyEarnings: '₺0',
      completionRate: 65,
      responseTime: '1 day',
      languages: ['English', 'Turkish'],
      certificates: ['TEFL'],
      bio: 'Focused on grammar and writing skills improvement.',
      avatar: '/api/placeholder/60/60',
      isVerified: true,
      lastActive: '1 month ago',
      applicationDate: '2023-06-15',
      suspensionReason: 'Öğrenci şikayetleri ve düşük performans'
    }
  ]

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.specialization.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === 'all' || teacher.status === activeTab
    return matchesSearch && matchesTab
  })

  const stats = [
    {
      name: 'Toplam Öğretmen',
      value: teachers.filter(t => t.status === 'approved').length,
      change: '+3',
      changeType: 'increase',
      icon: GraduationCap,
      color: 'text-blue-600'
    },
    {
      name: 'Bekleyen Onay',
      value: teachers.filter(t => t.status === 'pending').length,
      change: '+1',
      changeType: 'increase',
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      name: 'Ortalama Puan',
      value: (teachers.filter(t => t.rating > 0).reduce((sum, t) => sum + t.rating, 0) / teachers.filter(t => t.rating > 0).length).toFixed(1),
      change: '+0.2',
      changeType: 'increase',
      icon: Star,
      color: 'text-green-600'
    },
    {
      name: 'Askıya Alınan',
      value: teachers.filter(t => t.status === 'suspended').length,
      change: '0',
      changeType: 'neutral',
      icon: AlertTriangle,
      color: 'text-red-600'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      case 'suspended': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved': return 'Onaylandı'
      case 'pending': return 'Bekliyor'
      case 'rejected': return 'Reddedildi'
      case 'suspended': return 'Askıya Alındı'
      default: return 'Bilinmiyor'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4" />
      case 'pending': return <Clock className="w-4 h-4" />
      case 'rejected': return <XCircle className="w-4 h-4" />
      case 'suspended': return <AlertTriangle className="w-4 h-4" />
      default: return <AlertTriangle className="w-4 h-4" />
    }
  }

  const handleApprove = (teacherId: string) => {
    console.log(`Approve teacher: ${teacherId}`)
  }

  const handleReject = (teacherId: string) => {
    console.log(`Reject teacher: ${teacherId}`)
  }

  const handleSuspend = (teacherId: string) => {
    console.log(`Suspend teacher: ${teacherId}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Öğretmen Yönetimi</h1>
          <p className="text-gray-600 mt-1">Öğretmen başvurularını ve performanslarını yönetin</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Rapor İndir</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Öğretmen Davet Et</span>
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
                placeholder="Öğretmen ara..."
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
                { key: 'all', label: 'Tümü', count: teachers.length },
                { key: 'pending', label: 'Bekleyen', count: teachers.filter(t => t.status === 'pending').length },
                { key: 'approved', label: 'Onaylanan', count: teachers.filter(t => t.status === 'approved').length },
                { key: 'rejected', label: 'Reddedilen', count: teachers.filter(t => t.status === 'rejected').length },
                { key: 'suspended', label: 'Askıya Alınan', count: teachers.filter(t => t.status === 'suspended').length }
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

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTeachers.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      {teacher.name}
                      {teacher.isVerified && (
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                      )}
                    </h3>
                    <p className="text-gray-600 text-sm">{teacher.specialization}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(teacher.status)}`}>
                        {getStatusIcon(teacher.status)}
                        <span className="ml-1">{getStatusText(teacher.status)}</span>
                      </span>
                      {teacher.rating > 0 && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-700">{teacher.rating}</span>
                          <span className="text-xs text-gray-500">({teacher.reviewCount})</span>
                        </div>
                      )}
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

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{teacher.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{teacher.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>{teacher.experience} deneyim</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Activity className="w-4 h-4 mr-2" />
                  <span>Son aktivite: {teacher.lastActive}</span>
                </div>
              </div>

              {teacher.status === 'approved' && (
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">{teacher.studentsCount}</div>
                    <div className="text-xs text-gray-600">Öğrenci</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">{teacher.coursesCount}</div>
                    <div className="text-xs text-gray-600">Kurs</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">{teacher.completionRate}%</div>
                    <div className="text-xs text-gray-600">Tamamlama</div>
                  </div>
                </div>
              )}

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Sertifikalar</h4>
                <div className="flex flex-wrap gap-1">
                  {teacher.certificates.map((cert, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {cert}
                    </span>
                  ))}
                  {teacher.certificates.length === 0 && (
                    <span className="text-xs text-gray-500">Sertifika yok</span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    Başvuru: {teacher.applicationDate}
                  </div>
                  {teacher.status === 'approved' && (
                    <div className="text-sm font-medium text-green-600">
                      {teacher.monthlyEarnings} / ay
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {teacher.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleReject(teacher.id)}
                        className="flex items-center space-x-1 px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors"
                      >
                        <ThumbsDown className="w-3 h-3" />
                        <span>Reddet</span>
                      </button>
                      <button
                        onClick={() => handleApprove(teacher.id)}
                        className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                      >
                        <ThumbsUp className="w-3 h-3" />
                        <span>Onayla</span>
                      </button>
                    </>
                  )}
                  {teacher.status === 'approved' && (
                    <button
                      onClick={() => handleSuspend(teacher.id)}
                      className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700 transition-colors"
                    >
                      Askıya Al
                    </button>
                  )}
                  {teacher.status === 'suspended' && (
                    <button
                      onClick={() => handleApprove(teacher.id)}
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                    >
                      Tekrar Aktifleştir
                    </button>
                  )}
                </div>
              </div>

              {(teacher.rejectionReason || teacher.suspensionReason) && (
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-red-900">
                      {teacher.status === 'rejected' ? 'Ret Sebebi:' : 'Askıya Alma Sebebi:'}
                    </span>
                  </div>
                  <p className="text-sm text-red-700 mt-1">
                    {teacher.rejectionReason || teacher.suspensionReason}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTeachers.length === 0 && (
        <div className="text-center py-12">
          <GraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Öğretmen bulunamadı</h3>
          <p className="text-gray-600 mb-4">Arama kriterlerinize uygun öğretmen bulunamadı.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Yeni Öğretmen Davet Et
          </button>
        </div>
      )}
    </div>
  )
}

export default AdminTeachers
