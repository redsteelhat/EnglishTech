'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { 
  Settings, 
  User, 
  Bell, 
  Lock, 
  CreditCard,
  Globe,
  Moon,
  Sun,
  Shield,
  Mail,
  Phone,
  Eye,
  EyeOff,
  Edit3,
  Save,
  X,
  Check,
  AlertCircle,
  Camera,
  Trash2,
  Download,
  Upload,
  Key,
  Smartphone,
  Monitor,
  Volume2,
  VolumeX,
  Clock,
  Calendar,
  MessageSquare,
  BookOpen,
  Award,
  Target,
  BarChart3
} from 'lucide-react'

const SettingsPage: React.FC = () => {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('profile')
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    lessons: true,
    assignments: true,
    certificates: true,
    reminders: true
  })
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showProgress: true,
    showCertificates: true,
    allowMessages: true,
    showOnlineStatus: true
  })
  const [preferences, setPreferences] = useState({
    language: 'tr',
    timezone: 'Europe/Istanbul',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24h',
    autoPlayVideos: true,
    soundEffects: true,
    emailDigest: 'daily',
    studyReminders: true
  })

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/')
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const tabs = [
    { id: 'profile', name: 'Profil', icon: User },
    { id: 'notifications', name: 'Bildirimler', icon: Bell },
    { id: 'privacy', name: 'Gizlilik', icon: Shield },
    { id: 'preferences', name: 'Tercihler', icon: Settings },
    { id: 'security', name: 'Güvenlik', icon: Lock },
    { id: 'billing', name: 'Fatura', icon: CreditCard }
  ]

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }))
  }

  const handlePrivacyChange = (key: string, value: any) => {
    setPrivacy(prev => ({ ...prev, [key]: value }))
  }

  const handlePreferenceChange = (key: string, value: any) => {
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Ayarlar</h1>
              <p className="text-gray-200">
                Hesap ayarlarını ve tercihlerini yönet
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center">
                <Settings className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Settings Interface */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-200 bg-gray-50">
              <div className="p-4">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="w-5 h-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Profil Bilgileri</h2>
                    
                    {/* Profile Photo */}
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                        <User className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                          <Camera className="w-4 h-4" />
                          <span>Fotoğraf Değiştir</span>
                        </button>
                        <p className="text-sm text-gray-500 mt-1">JPG, PNG veya GIF. Maksimum 5MB.</p>
                      </div>
                    </div>

                    {/* Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ad Soyad
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.name}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          E-posta
                        </label>
                        <input
                          type="email"
                          defaultValue={user?.email}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          placeholder="+90 (555) 123-4567"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Doğum Tarihi
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Hakkımda
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Kendiniz hakkında kısa bir açıklama yazın..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 mt-6">
                      <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                        İptal
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        <Save className="w-4 h-4" />
                        <span>Kaydet</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Bildirim Ayarları</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Bildirim Kanalları</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Mail className="w-5 h-5 text-gray-500" />
                              <div>
                                <p className="font-medium text-gray-900">E-posta Bildirimleri</p>
                                <p className="text-sm text-gray-500">Önemli güncellemeler ve etkinlikler</p>
                              </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={notifications.email}
                                onChange={(e) => handleNotificationChange('email', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Bell className="w-5 h-5 text-gray-500" />
                              <div>
                                <p className="font-medium text-gray-900">Push Bildirimleri</p>
                                <p className="text-sm text-gray-500">Tarayıcı bildirimleri</p>
                              </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={notifications.push}
                                onChange={(e) => handleNotificationChange('push', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Phone className="w-5 h-5 text-gray-500" />
                              <div>
                                <p className="font-medium text-gray-900">SMS Bildirimleri</p>
                                <p className="text-sm text-gray-500">Kritik bildirimleri SMS ile al</p>
                              </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={notifications.sms}
                                onChange={(e) => handleNotificationChange('sms', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Bildirim Türleri</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <BookOpen className="w-5 h-5 text-gray-500" />
                              <div>
                                <p className="font-medium text-gray-900">Ders Bildirimleri</p>
                                <p className="text-sm text-gray-500">Yeni dersler ve güncellemeler</p>
                              </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={notifications.lessons}
                                onChange={(e) => handleNotificationChange('lessons', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Target className="w-5 h-5 text-gray-500" />
                              <div>
                                <p className="font-medium text-gray-900">Ödev Bildirimleri</p>
                                <p className="text-sm text-gray-500">Ödev teslim tarihleri ve sonuçları</p>
                              </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={notifications.assignments}
                                onChange={(e) => handleNotificationChange('assignments', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Award className="w-5 h-5 text-gray-500" />
                              <div>
                                <p className="font-medium text-gray-900">Sertifika Bildirimleri</p>
                                <p className="text-sm text-gray-500">Yeni sertifikalar ve başarılar</p>
                              </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={notifications.certificates}
                                onChange={(e) => handleNotificationChange('certificates', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Gizlilik Ayarları</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Profil Görünürlüğü</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Profil Görünürlüğü
                            </label>
                            <select
                              value={privacy.profileVisibility}
                              onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                              <option value="public">Herkese Açık</option>
                              <option value="students">Sadece Öğrenciler</option>
                              <option value="private">Gizli</option>
                            </select>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">İlerleme Durumunu Göster</p>
                              <p className="text-sm text-gray-500">Diğer kullanıcılar ilerleme durumunu görebilir</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={privacy.showProgress}
                                onChange={(e) => handlePrivacyChange('showProgress', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">Sertifikaları Göster</p>
                              <p className="text-sm text-gray-500">Kazanılan sertifikalar profilde görünür</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={privacy.showCertificates}
                                onChange={(e) => handlePrivacyChange('showCertificates', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">İletişim Ayarları</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">Mesaj Almaya İzin Ver</p>
                              <p className="text-sm text-gray-500">Diğer kullanıcılar size mesaj gönderebilir</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={privacy.allowMessages}
                                onChange={(e) => handlePrivacyChange('allowMessages', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">Çevrimiçi Durumu Göster</p>
                              <p className="text-sm text-gray-500">Çevrimiçi olup olmadığınız görünür</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={privacy.showOnlineStatus}
                                onChange={(e) => handlePrivacyChange('showOnlineStatus', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Tercihler</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Genel Ayarlar</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Dil
                            </label>
                            <select
                              value={preferences.language}
                              onChange={(e) => handlePreferenceChange('language', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                              <option value="tr">Türkçe</option>
                              <option value="en">English</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Zaman Dilimi
                            </label>
                            <select
                              value={preferences.timezone}
                              onChange={(e) => handlePreferenceChange('timezone', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                              <option value="Europe/Istanbul">İstanbul (+03:00)</option>
                              <option value="UTC">UTC (+00:00)</option>
                              <option value="America/New_York">New York (-05:00)</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Medya Ayarları</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">Videoları Otomatik Oynat</p>
                              <p className="text-sm text-gray-500">Derslerdeki videolar otomatik olarak oynatılır</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={preferences.autoPlayVideos}
                                onChange={(e) => handlePreferenceChange('autoPlayVideos', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">Ses Efektleri</p>
                              <p className="text-sm text-gray-500">Bildirim ve etkileşim sesleri</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={preferences.soundEffects}
                                onChange={(e) => handlePreferenceChange('soundEffects', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Çalışma Ayarları</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              E-posta Özeti
                            </label>
                            <select
                              value={preferences.emailDigest}
                              onChange={(e) => handlePreferenceChange('emailDigest', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                              <option value="none">Hiçbir zaman</option>
                              <option value="daily">Günlük</option>
                              <option value="weekly">Haftalık</option>
                              <option value="monthly">Aylık</option>
                            </select>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">Çalışma Hatırlatıcıları</p>
                              <p className="text-sm text-gray-500">Günlük çalışma hatırlatıcıları al</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={preferences.studyReminders}
                                onChange={(e) => handlePreferenceChange('studyReminders', e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Güvenlik</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Şifre Güvenliği</h3>
                        <div className="space-y-4">
                          <button
                            onClick={() => setShowPasswordModal(true)}
                            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors w-full text-left"
                          >
                            <Key className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="font-medium text-gray-900">Şifre Değiştir</p>
                              <p className="text-sm text-gray-500">Hesap güvenliğin için güçlü bir şifre kullan</p>
                            </div>
                          </button>
                          <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                            <Shield className="w-5 h-5 text-green-500" />
                            <div>
                              <p className="font-medium text-gray-900">İki Faktörlü Kimlik Doğrulama</p>
                              <p className="text-sm text-gray-500">Hesabın ekstra güvenlik katmanı ile korunuyor</p>
                            </div>
                            <span className="text-sm text-green-600 font-medium">Aktif</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Oturum Yönetimi</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                            <Monitor className="w-5 h-5 text-gray-500" />
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">Windows PC - Chrome</p>
                              <p className="text-sm text-gray-500">Şu anda aktif • İstanbul, Türkiye</p>
                            </div>
                            <span className="text-sm text-green-600 font-medium">Mevcut</span>
                          </div>
                          <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg">
                            <Smartphone className="w-5 h-5 text-gray-500" />
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">iPhone - Safari</p>
                              <p className="text-sm text-gray-500">2 saat önce • İstanbul, Türkiye</p>
                            </div>
                            <button className="text-sm text-red-600 font-medium hover:text-red-700">
                              Sonlandır
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Hesap Güvenliği</h3>
                        <div className="space-y-4">
                          <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors w-full text-left">
                            <Download className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="font-medium text-gray-900">Verilerimi İndir</p>
                              <p className="text-sm text-gray-500">Hesap verilerinin bir kopyasını al</p>
                            </div>
                          </button>
                          <button
                            onClick={() => setShowDeleteModal(true)}
                            className="flex items-center space-x-3 p-4 border border-red-200 rounded-lg hover:bg-red-50 transition-colors w-full text-left"
                          >
                            <Trash2 className="w-5 h-5 text-red-500" />
                            <div>
                              <p className="font-medium text-red-600">Hesabı Sil</p>
                              <p className="text-sm text-red-500">Hesabını kalıcı olarak sil</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'billing' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Fatura ve Abonelik</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Mevcut Plan</h3>
                        <div className="p-6 border border-gray-200 rounded-lg bg-gradient-to-r from-primary-50 to-secondary-50">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-xl font-semibold text-primary-900">Professional Plan</h4>
                              <p className="text-primary-700 mt-1">Tüm özellikler dahil</p>
                              <p className="text-sm text-primary-600 mt-2">Yenileme: 15 Ocak 2025</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary-900">₺199</div>
                              <div className="text-sm text-primary-600">/ ay</div>
                            </div>
                          </div>
                          <div className="flex space-x-3 mt-4">
                            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                              Planı Değiştir
                            </button>
                            <button className="px-4 py-2 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                              İptal Et
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Ödeme Yöntemi</h3>
                        <div className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <CreditCard className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="font-medium text-gray-900">•••• •••• •••• 1234</p>
                              <p className="text-sm text-gray-500">Son kullanma: 12/25</p>
                            </div>
                          </div>
                          <button className="mt-3 text-sm text-primary-600 hover:text-primary-700 font-medium">
                            Ödeme Yöntemini Değiştir
                          </button>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Fatura Geçmişi</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div>
                              <p className="font-medium text-gray-900">Ocak 2025</p>
                              <p className="text-sm text-gray-500">15 Ocak 2025</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">₺199.00</p>
                              <button className="text-sm text-primary-600 hover:text-primary-700">
                                Faturayı İndir
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div>
                              <p className="font-medium text-gray-900">Aralık 2024</p>
                              <p className="text-sm text-gray-500">15 Aralık 2024</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-900">₺199.00</p>
                              <button className="text-sm text-primary-600 hover:text-primary-700">
                                Faturayı İndir
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Password Change Modal */}
        {showPasswordModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Şifre Değiştir</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mevcut Şifre
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yeni Şifre
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Yeni Şifre (Tekrar)
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  İptal
                </button>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Şifreyi Değiştir
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Account Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-red-600 mb-4">Hesabı Sil</h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-700">
                    <strong>Uyarı:</strong> Bu işlem geri alınamaz. Hesabınız ve tüm verileriniz kalıcı olarak silinecek.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Silmek için &quot;DELETE&quot; yazın
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  İptal
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Hesabı Sil
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default SettingsPage
