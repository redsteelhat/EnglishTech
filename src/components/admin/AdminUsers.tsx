'use client'

import React, { useState } from 'react'
import { 
  Users, 
  Search, 
  Filter, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Shield,
  ShieldCheck,
  ShieldX,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  UserPlus,
  UserX,
  UserCheck,
  MoreVertical,
  Download,
  Upload,
  Ban,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Settings,
  Crown,
  GraduationCap,
  BookOpen,
  Activity,
  TrendingUp,
  DollarSign
} from 'lucide-react'

const AdminUsers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'students' | 'teachers' | 'admins' | 'banned'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  const users = [
    {
      id: '1',
      name: 'Ahmet Yılmaz',
      email: 'ahmet.yilmaz@gmail.com',
      role: 'student',
      avatar: '/api/placeholder/40/40',
      joinDate: '2024-01-15',
      lastActive: '2 hours ago',
      status: 'active',
      location: 'İstanbul, Türkiye',
      phone: '+90 532 123 4567',
      subscriptionPlan: 'premium',
      coursesEnrolled: 3,
      coursesCompleted: 1,
      totalSpent: '₺2,397',
      loginCount: 45,
      isVerified: true,
      riskScore: 'low'
    },
    {
      id: '2',
      name: 'Dr. Elif Özkan',
      email: 'elif.ozkan@university.edu',
      role: 'teacher',
      avatar: '/api/placeholder/40/40',
      joinDate: '2023-08-22',
      lastActive: '1 hour ago',
      status: 'active',
      location: 'Ankara, Türkiye',
      phone: '+90 533 987 6543',
      subscriptionPlan: 'teacher',
      coursesCreated: 8,
      studentsTotal: 156,
      totalEarned: '₺24,850',
      loginCount: 120,
      isVerified: true,
      riskScore: 'low',
      specialization: 'Academic English',
      rating: 4.8
    },
    {
      id: '3',
      name: 'Zeynep Kara',
      email: 'zeynep.kara@hotmail.com',
      role: 'student',
      avatar: '/api/placeholder/40/40',
      joinDate: '2024-02-10',
      lastActive: '30 minutes ago',
      status: 'active',
      location: 'İzmir, Türkiye',
      phone: '+90 534 456 7890',
      subscriptionPlan: 'basic',
      coursesEnrolled: 2,
      coursesCompleted: 0,
      totalSpent: '₺899',
      loginCount: 28,
      isVerified: false,
      riskScore: 'medium'
    },
    {
      id: '4',
      name: 'Mehmet Demir',
      email: 'mehmet.demir@suspicious.com',
      role: 'student',
      avatar: '/api/placeholder/40/40',
      joinDate: '2024-03-05',
      lastActive: '1 week ago',
      status: 'banned',
      location: 'Bursa, Türkiye',
      phone: '+90 535 321 9876',
      subscriptionPlan: 'basic',
      coursesEnrolled: 1,
      coursesCompleted: 0,
      totalSpent: '₺0',
      loginCount: 3,
      isVerified: false,
      riskScore: 'high',
      banReason: 'Spam ve uygunsuz davranış'
    },
    {
      id: '5',
      name: 'Admin User',
      email: 'admin@englishtech.com',
      role: 'superadmin',
      avatar: '/api/placeholder/40/40',
      joinDate: '2023-01-01',
      lastActive: '5 minutes ago',
      status: 'active',
      location: 'İstanbul, Türkiye',
      phone: '+90 530 000 0000',
      subscriptionPlan: 'admin',
      loginCount: 500,
      isVerified: true,
      riskScore: 'none'
    }
  ]

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'students' && user.role === 'student') ||
                      (activeTab === 'teachers' && user.role === 'teacher') ||
                      (activeTab === 'admins' && user.role === 'superadmin') ||
                      (activeTab === 'banned' && user.status === 'banned')
    return matchesSearch && matchesTab
  })

  const stats = [
    {
      name: 'Toplam Kullanıcı',
      value: users.length,
      change: '+12',
      changeType: 'increase',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      name: 'Aktif Öğrenci',
      value: users.filter(u => u.role === 'student' && u.status === 'active').length,
      change: '+8',
      changeType: 'increase',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      name: 'Aktif Öğretmen',
      value: users.filter(u => u.role === 'teacher' && u.status === 'active').length,
      change: '+2',
      changeType: 'increase',
      icon: GraduationCap,
      color: 'text-purple-600'
    },
    {
      name: 'Riskli Kullanıcı',
      value: users.filter(u => u.riskScore === 'high' || u.status === 'banned').length,
      change: '+1',
      changeType: 'increase',
      icon: AlertTriangle,
      color: 'text-red-600'
    }
  ]

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'student': return 'bg-blue-100 text-blue-800'
      case 'teacher': return 'bg-green-100 text-green-800'
      case 'superadmin': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-gray-100 text-gray-800'
      case 'banned': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'high': return 'bg-red-100 text-red-800'
      case 'none': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'student': return <BookOpen className="w-4 h-4" />
      case 'teacher': return <GraduationCap className="w-4 h-4" />
      case 'superadmin': return <Crown className="w-4 h-4" />
      default: return <Users className="w-4 h-4" />
    }
  }

  const handleBulkAction = (action: string) => {
    console.log(`Bulk action: ${action} for users:`, selectedUsers)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Kullanıcı Yönetimi</h1>
          <p className="text-gray-600 mt-1">Tüm kullanıcıları görüntüleyin ve yönetin</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Dışa Aktar</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="w-4 h-4" />
            <span>İçe Aktar</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <UserPlus className="w-4 h-4" />
            <span>Kullanıcı Ekle</span>
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

      {/* Filters and Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Kullanıcı ara..."
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
                { key: 'all', label: 'Tümü', count: users.length },
                { key: 'students', label: 'Öğrenci', count: users.filter(u => u.role === 'student').length },
                { key: 'teachers', label: 'Öğretmen', count: users.filter(u => u.role === 'teacher').length },
                { key: 'admins', label: 'Admin', count: users.filter(u => u.role === 'superadmin').length },
                { key: 'banned', label: 'Yasaklı', count: users.filter(u => u.status === 'banned').length }
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

        {/* Bulk Actions */}
        {selectedUsers.length > 0 && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-900">
                {selectedUsers.length} kullanıcı seçildi
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleBulkAction('activate')}
                  className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                >
                  Aktifleştir
                </button>
                <button
                  onClick={() => handleBulkAction('deactivate')}
                  className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700 transition-colors"
                >
                  Deaktifleştir
                </button>
                <button
                  onClick={() => handleBulkAction('ban')}
                  className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors"
                >
                  Yasakla
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedUsers(filteredUsers.map(u => u.id))
                      } else {
                        setSelectedUsers([])
                      }
                    }}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kullanıcı
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rol
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Durum
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Skoru
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aktivite
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  İşlemler
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={selectedUsers.includes(user.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedUsers([...selectedUsers, user.id])
                        } else {
                          setSelectedUsers(selectedUsers.filter(id => id !== user.id))
                        }
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 flex items-center">
                          {user.name}
                          {user.isVerified && (
                            <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                        <div className="text-xs text-gray-400 flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {user.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                      {getRoleIcon(user.role)}
                      <span className="ml-1">
                        {user.role === 'student' ? 'Öğrenci' : 
                         user.role === 'teacher' ? 'Öğretmen' : 'Admin'}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                      {user.status === 'active' ? 'Aktif' : 
                       user.status === 'banned' ? 'Yasaklı' : 'Pasif'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskColor(user.riskScore)}`}>
                      {user.riskScore === 'low' ? 'Düşük' : 
                       user.riskScore === 'medium' ? 'Orta' : 
                       user.riskScore === 'high' ? 'Yüksek' : 'Yok'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{user.lastActive}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {user.loginCount} giriş
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 p-1 rounded-md hover:bg-blue-50">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-yellow-600 hover:text-yellow-700 p-1 rounded-md hover:bg-yellow-50">
                        <Edit className="w-4 h-4" />
                      </button>
                      {user.status === 'banned' ? (
                        <button className="text-green-600 hover:text-green-700 p-1 rounded-md hover:bg-green-50">
                          <UserCheck className="w-4 h-4" />
                        </button>
                      ) : (
                        <button className="text-red-600 hover:text-red-700 p-1 rounded-md hover:bg-red-50">
                          <Ban className="w-4 h-4" />
                        </button>
                      )}
                      <button className="text-gray-600 hover:text-gray-700 p-1 rounded-md hover:bg-gray-50">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Kullanıcı bulunamadı</h3>
          <p className="text-gray-600 mb-4">Arama kriterlerinize uygun kullanıcı bulunamadı.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Yeni Kullanıcı Ekle
          </button>
        </div>
      )}
    </div>
  )
}

export default AdminUsers
