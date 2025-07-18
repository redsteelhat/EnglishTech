'use client'

import React from 'react'
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  Activity,
  BarChart3,
  Globe,
  Shield,
  Database,
  Server,
  Wifi,
  ArrowUp,
  ArrowDown,
  Eye,
  MessageSquare,
  Calendar,
  FileText,
  CreditCard,
  UserPlus,
  Settings
} from 'lucide-react'

const AdminDashboard: React.FC = () => {
  const systemStats = [
    {
      name: 'Toplam Kullanıcı',
      value: '2,847',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Aktif kullanıcılar'
    },
    {
      name: 'Toplam Öğretmen',
      value: '89',
      change: '+3',
      changeType: 'increase',
      icon: GraduationCap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Onaylı öğretmenler'
    },
    {
      name: 'Aktif Kurslar',
      value: '156',
      change: '+8',
      changeType: 'increase',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Yayındaki kurslar'
    },
    {
      name: 'Aylık Gelir',
      value: '₺124,850',
      change: '+18%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      description: 'Bu ay toplam'
    }
  ]

  const systemHealth = [
    {
      name: 'Sistem Durumu',
      status: 'healthy',
      value: '99.9%',
      description: 'Uptime',
      icon: Server,
      color: 'text-green-600'
    },
    {
      name: 'Veritabanı',
      status: 'healthy',
      value: '4.2ms',
      description: 'Avg Response',
      icon: Database,
      color: 'text-green-600'
    },
    {
      name: 'API Durumu',
      status: 'healthy',
      value: '99.8%',
      description: 'Success Rate',
      icon: Globe,
      color: 'text-green-600'
    },
    {
      name: 'Güvenlik',
      status: 'warning',
      value: '2',
      description: 'Bekleyen Alert',
      icon: Shield,
      color: 'text-yellow-600'
    }
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'user_register',
      message: 'Yeni kullanıcı kaydı: ahmet.yilmaz@gmail.com',
      time: '2 dakika önce',
      icon: UserPlus,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'course_approved',
      message: 'Kurs onaylandı: "Advanced Business English"',
      time: '15 dakika önce',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'payment_received',
      message: 'Ödeme alındı: ₺599 - Premium Plan',
      time: '1 saat önce',
      icon: CreditCard,
      color: 'text-yellow-600'
    },
    {
      id: 4,
      type: 'security_alert',
      message: 'Güvenlik Uyarısı: Çoklu başarısız giriş denemesi',
      time: '2 saat önce',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      id: 5,
      type: 'teacher_application',
      message: 'Yeni öğretmen başvurusu: Dr. Elif Özkan',
      time: '3 saat önce',
      icon: GraduationCap,
      color: 'text-purple-600'
    }
  ]

  const pendingActions = [
    {
      id: 1,
      title: 'Öğretmen Onayları',
      count: 12,
      urgent: true,
      href: '/admin/teachers',
      icon: GraduationCap,
      color: 'text-purple-600'
    },
    {
      id: 2,
      title: 'Kurs Onayları',
      count: 8,
      urgent: false,
      href: '/admin/courses',
      icon: BookOpen,
      color: 'text-blue-600'
    },
    {
      id: 3,
      title: 'Güvenlik Uyarıları',
      count: 3,
      urgent: true,
      href: '/admin/security',
      icon: Shield,
      color: 'text-red-600'
    },
    {
      id: 4,
      title: 'Ödeme Sorunları',
      count: 5,
      urgent: false,
      href: '/admin/payments',
      icon: DollarSign,
      color: 'text-yellow-600'
    }
  ]

  const quickActions = [
    {
      name: 'Kullanıcı Ekle',
      icon: UserPlus,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      href: '/admin/users'
    },
    {
      name: 'Sistem Ayarları',
      icon: Settings,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      href: '/admin/system'
    },
    {
      name: 'Raporlar',
      icon: BarChart3,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      href: '/admin/analytics'
    },
    {
      name: 'Güvenlik',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      href: '/admin/security'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">SuperAdmin Dashboard</h1>
          <p className="text-gray-600 mt-1">Sistem genel durumu ve yönetim merkezi</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 text-green-800 rounded-lg">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Tüm Sistemler Aktif</span>
          </div>
        </div>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.changeType === 'increase' ? <ArrowUp className="w-3 h-3 inline mr-1" /> : <ArrowDown className="w-3 h-3 inline mr-1" />}
                  {stat.change} bu ay
                </p>
                <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* System Health & Pending Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Health */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Sistem Sağlığı</h2>
            <Activity className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {systemHealth.map((item) => (
              <div key={item.name} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                <div className={`p-2 rounded-lg ${item.status === 'healthy' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <div>
                  <div className="font-medium text-gray-900 text-sm">{item.name}</div>
                  <div className="text-lg font-bold text-gray-900">{item.value}</div>
                  <div className="text-xs text-gray-500">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Actions */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Bekleyen İşlemler</h2>
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {pendingActions.map((action) => (
              <div key={action.id} className={`flex items-center justify-between p-3 rounded-lg border ${action.urgent ? 'border-red-200 bg-red-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${action.urgent ? 'bg-red-100' : 'bg-gray-100'}`}>
                    <action.icon className={`w-4 h-4 ${action.urgent ? 'text-red-600' : action.color}`} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{action.title}</div>
                    <div className="text-sm text-gray-500">{action.count} bekliyor</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {action.urgent && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                      Acil
                    </span>
                  )}
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Görüntüle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Son Aktiviteler</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Tümünü Gör
          </button>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
              <div className="p-2 bg-gray-100 rounded-lg">
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Hızlı İşlemler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <button
              key={action.name}
              className="flex flex-col items-center space-y-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className={`p-3 rounded-lg ${action.bgColor}`}>
                <action.icon className={`w-6 h-6 ${action.color}`} />
              </div>
              <span className="text-sm font-medium text-gray-700">{action.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
