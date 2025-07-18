'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  GraduationCap,
  Settings,
  BarChart3,
  Shield,
  Database,
  DollarSign,
  MessageSquare,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  User,
  Globe,
  TrendingUp,
  Calendar,
  FileText,
  CreditCard,
  Building,
  UserCog,
  Lock,
  Activity,
  Mail,
  Phone,
  MapPin,
  Clock,
  AlertTriangle
} from 'lucide-react'

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('dashboard')
  const { user, logout } = useAuth()
  const router = useRouter()

  // SuperAdmin kontrolü
  if (user?.role !== 'superadmin') {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Erişim Engellendi</h1>
          <p className="text-gray-600 mb-4">Bu sayfaya erişim yetkiniz bulunmamaktadır.</p>
          <button 
            onClick={() => router.push('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    )
  }

  const navigationItems = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: LayoutDashboard,
      href: '/admin',
      description: 'Genel sistem durumu'
    },
    {
      id: 'users',
      name: 'Kullanıcı Yönetimi',
      icon: Users,
      href: '/admin/users',
      description: 'Öğrenci ve öğretmen yönetimi'
    },
    {
      id: 'teachers',
      name: 'Öğretmen Yönetimi',
      icon: GraduationCap,
      href: '/admin/teachers',
      description: 'Öğretmen onayları ve yetkilendirme'
    },
    {
      id: 'courses',
      name: 'Kurs Yönetimi',
      icon: BookOpen,
      href: '/admin/courses',
      description: 'Kurs onayları ve içerik yönetimi'
    },
    {
      id: 'payments',
      name: 'Ödeme Yönetimi',
      icon: DollarSign,
      href: '/admin/payments',
      description: 'Ödeme işlemleri ve faturalandırma'
    },
    {
      id: 'analytics',
      name: 'Analitik & Raporlar',
      icon: BarChart3,
      href: '/admin/analytics',
      description: 'Detaylı sistem analizi'
    },
    {
      id: 'content',
      name: 'İçerik Yönetimi',
      icon: FileText,
      href: '/admin/content',
      description: 'Site içeriği ve duyurular'
    },
    {
      id: 'communications',
      name: 'İletişim Merkezi',
      icon: MessageSquare,
      href: '/admin/communications',
      description: 'Sistem geneli mesajlaşma'
    },
    {
      id: 'settings',
      name: 'Sistem Ayarları',
      icon: Settings,
      href: '/admin/settings',
      description: 'Sistem konfigürasyonu'
    },
    {
      id: 'security',
      name: 'Güvenlik',
      icon: Shield,
      href: '/admin/security',
      description: 'Güvenlik ayarları ve loglar'
    },
    {
      id: 'database',
      name: 'Veritabanı',
      icon: Database,
      href: '/admin/database',
      description: 'Veritabanı yönetimi ve bakım'
    }
  ]

  const handleLogout = async () => {
    await logout()
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">SuperAdmin</h1>
                <p className="text-sm text-gray-500">Yönetim Paneli</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors group hover:bg-gray-50 ${
                    activeSection === item.id ? 'bg-red-50 text-red-700 border-r-2 border-red-600' : 'text-gray-700 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <item.icon className={`w-5 h-5 ${activeSection === item.id ? 'text-red-600' : 'text-gray-400 group-hover:text-gray-600'}`} />
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{user?.name || 'SuperAdmin'}</div>
                <div className="text-sm text-gray-500">{user?.email}</div>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Çıkış Yap</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:ml-80">
        {/* Top header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">SuperAdmin Panel</h1>
                <p className="text-sm text-gray-500">Sistem yönetimi ve kontrol merkezi</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Ara..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 w-64"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></span>
              </button>

              {/* System Status */}
              <div className="flex items-center space-x-2 px-3 py-2 bg-green-100 text-green-800 rounded-lg">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Sistem Aktif</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
