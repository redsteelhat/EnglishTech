'use client'

import React, { useState } from 'react'
import { 
  BarChart3, 
  Search, 
  Filter, 
  Download,
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  DollarSign,
  Calendar,
  Eye,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Target,
  Clock,
  Award,
  MessageSquare,
  FileText,
  PieChart,
  LineChart,
  BarChart,
  Globe,
  Smartphone,
  Monitor,
  UserCheck,
  Star,
  PlayCircle,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Zap,
  Heart,
  Share2,
  Mail,
  Phone,
  MousePointer,
  Navigation
} from 'lucide-react'

const AdminAnalytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'courses' | 'revenue' | 'engagement'>('overview')
  const [dateRange, setDateRange] = useState('30')

  const overviewStats = [
    {
      name: 'Toplam Kullanıcı',
      value: '12,483',
      change: '+8.2%',
      changeType: 'increase',
      icon: Users,
      color: 'text-blue-600',
      description: 'Aktif kullanıcı sayısı'
    },
    {
      name: 'Aylık Gelir',
      value: '₺245,800',
      change: '+15.3%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'text-green-600',
      description: 'Bu ay toplam gelir'
    },
    {
      name: 'Kurs Tamamlama',
      value: '68.5%',
      change: '+2.1%',
      changeType: 'increase',
      icon: CheckCircle,
      color: 'text-purple-600',
      description: 'Ortalama tamamlama oranı'
    },
    {
      name: 'Öğrenci Memnuniyeti',
      value: '4.7/5',
      change: '+0.2',
      changeType: 'increase',
      icon: Star,
      color: 'text-yellow-600',
      description: 'Ortalama değerlendirme'
    }
  ]

  const userMetrics = [
    {
      name: 'Yeni Kayıtlar',
      value: '1,243',
      change: '+12%',
      changeType: 'increase',
      period: 'Bu ay',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      name: 'Aktif Kullanıcılar',
      value: '8,945',
      change: '+5.8%',
      changeType: 'increase',
      period: 'Son 30 gün',
      icon: UserCheck,
      color: 'text-green-600'
    },
    {
      name: 'Churn Oranı',
      value: '3.2%',
      change: '-0.5%',
      changeType: 'decrease',
      period: 'Bu ay',
      icon: TrendingDown,
      color: 'text-red-600'
    },
    {
      name: 'Ortalama Oturum',
      value: '24 dk',
      change: '+8%',
      changeType: 'increase',
      period: 'Son hafta',
      icon: Clock,
      color: 'text-purple-600'
    }
  ]

  const courseMetrics = [
    {
      name: 'Aktif Kurslar',
      value: '156',
      change: '+8',
      changeType: 'increase',
      period: 'Bu ay',
      icon: BookOpen,
      color: 'text-blue-600'
    },
    {
      name: 'Toplam Kayıtlar',
      value: '45,231',
      change: '+1,245',
      changeType: 'increase',
      period: 'Bu ay',
      icon: Users,
      color: 'text-green-600'
    },
    {
      name: 'Tamamlanan Kurslar',
      value: '31,024',
      change: '+892',
      changeType: 'increase',
      period: 'Bu ay',
      icon: CheckCircle,
      color: 'text-purple-600'
    },
    {
      name: 'Ortalama Puan',
      value: '4.6/5',
      change: '+0.1',
      changeType: 'increase',
      period: 'Bu ay',
      icon: Star,
      color: 'text-yellow-600'
    }
  ]

  const revenueMetrics = [
    {
      name: 'Toplam Gelir',
      value: '₺1,245,800',
      change: '+18.5%',
      changeType: 'increase',
      period: 'Bu ay',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      name: 'ARPU',
      value: '₺284',
      change: '+12.3%',
      changeType: 'increase',
      period: 'Kullanıcı başına',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      name: 'Abonelik Geliri',
      value: '₺890,200',
      change: '+22.1%',
      changeType: 'increase',
      period: 'Bu ay',
      icon: RefreshCw,
      color: 'text-purple-600'
    },
    {
      name: 'Kurs Satışları',
      value: '₺355,600',
      change: '+8.9%',
      changeType: 'increase',
      period: 'Bu ay',
      icon: BookOpen,
      color: 'text-orange-600'
    }
  ]

  const engagementMetrics = [
    {
      name: 'Günlük Aktif',
      value: '5,234',
      change: '+7.2%',
      changeType: 'increase',
      period: 'Ortalama',
      icon: Activity,
      color: 'text-blue-600'
    },
    {
      name: 'Video İzlenme',
      value: '89,234',
      change: '+15.6%',
      changeType: 'increase',
      period: 'Bu ay',
      icon: PlayCircle,
      color: 'text-green-600'
    },
    {
      name: 'Quiz Tamamlama',
      value: '76.8%',
      change: '+3.4%',
      changeType: 'increase',
      period: 'Ortalama',
      icon: CheckCircle,
      color: 'text-purple-600'
    },
    {
      name: 'Forum Mesajları',
      value: '12,456',
      change: '+28.7%',
      changeType: 'increase',
      period: 'Bu ay',
      icon: MessageSquare,
      color: 'text-orange-600'
    }
  ]

  const topCourses = [
    {
      name: 'Business English Mastery',
      instructor: 'James Thompson',
      enrollments: 1245,
      revenue: '₺372,555',
      rating: 4.8,
      completion: 95
    },
    {
      name: 'Everyday English Conversation',
      instructor: 'Ayşe Demir',
      enrollments: 892,
      revenue: '₺177,708',
      rating: 4.6,
      completion: 88
    },
    {
      name: 'IELTS Preparation Intensive',
      instructor: 'Dr. Elif Özkan',
      enrollments: 634,
      revenue: '₺252,866',
      rating: 4.9,
      completion: 82
    }
  ]

  const deviceStats = [
    { name: 'Mobil', value: 65, color: 'bg-blue-500' },
    { name: 'Desktop', value: 28, color: 'bg-green-500' },
    { name: 'Tablet', value: 7, color: 'bg-yellow-500' }
  ]

  const trafficSources = [
    { name: 'Doğrudan', value: 45, color: 'bg-purple-500' },
    { name: 'Google', value: 32, color: 'bg-blue-500' },
    { name: 'Sosyal Medya', value: 15, color: 'bg-pink-500' },
    { name: 'Referans', value: 8, color: 'bg-green-500' }
  ]

  const getCurrentMetrics = () => {
    switch (activeTab) {
      case 'users': return userMetrics
      case 'courses': return courseMetrics
      case 'revenue': return revenueMetrics
      case 'engagement': return engagementMetrics
      default: return overviewStats
    }
  }

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'overview': return <BarChart3 className="w-4 h-4" />
      case 'users': return <Users className="w-4 h-4" />
      case 'courses': return <BookOpen className="w-4 h-4" />
      case 'revenue': return <DollarSign className="w-4 h-4" />
      case 'engagement': return <Activity className="w-4 h-4" />
      default: return <BarChart3 className="w-4 h-4" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analitik & Raporlar</h1>
          <p className="text-gray-600 mt-1">Detaylı sistem analitikleri ve performans raporları</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="7">Son 7 gün</option>
            <option value="30">Son 30 gün</option>
            <option value="90">Son 90 gün</option>
            <option value="365">Son 1 yıl</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <RefreshCw className="w-4 h-4" />
            <span>Yenile</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Rapor İndir</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-200 p-1">
        <div className="flex space-x-1">
          {[
            { key: 'overview', label: 'Genel Bakış' },
            { key: 'users', label: 'Kullanıcılar' },
            { key: 'courses', label: 'Kurslar' },
            { key: 'revenue', label: 'Gelir' },
            { key: 'engagement', label: 'Etkileşim' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.key 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {getTabIcon(tab.key)}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {getCurrentMetrics().map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm flex items-center ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.changeType === 'increase' ? 
                      <ArrowUpRight className="w-4 h-4 mr-1" /> : 
                      <ArrowDownRight className="w-4 h-4 mr-1" />
                    }
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    {activeTab === 'overview' ? 
                      ('description' in stat ? stat.description : '') : 
                      ('period' in stat ? stat.period : '')
                    }
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-gray-50">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performans Trendi</h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                <LineChart className="w-4 h-4" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                <BarChart className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Grafik verisi yükleniyor...</p>
            </div>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Cihaz Dağılımı</h3>
          <div className="space-y-4">
            {deviceStats.map((device, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${device.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{device.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div 
                      className={`h-2 rounded-full ${device.color}`}
                      style={{ width: `${device.value}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8">{device.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Courses */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">En Popüler Kurslar</h3>
          <div className="space-y-4">
            {topCourses.map((course, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{course.name}</h4>
                    <p className="text-xs text-gray-600">{course.instructor}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">{course.enrollments}</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{course.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Trafik Kaynakları</h3>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${source.color}`}></div>
                  <span className="text-sm font-medium text-gray-700">{source.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div 
                      className={`h-2 rounded-full ${source.color}`}
                      style={{ width: `${source.value}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8">{source.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı İşlemler</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Detaylı Rapor</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Mail className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">E-posta Raporu</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Zamanlanmış Rapor</span>
          </button>
          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Share2 className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-medium text-gray-700">Rapor Paylaş</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminAnalytics
