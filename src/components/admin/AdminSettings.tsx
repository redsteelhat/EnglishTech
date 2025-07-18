'use client'

import React, { useState } from 'react'
import { 
  Settings, 
  Search, 
  Save,
  RotateCcw,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Globe,
  Users,
  Calendar,
  Download,
  Upload,
  Bell,
  Mail,
  Phone,
  Shield,
  Database,
  Server,
  Palette,
  Type,
  Image,
  Video,
  FileText,
  CreditCard,
  DollarSign,
  Zap,
  Activity,
  Monitor,
  Smartphone,
  Tablet,
  Lock,
  Unlock,
  Key,
  Cloud,
  HardDrive,
  Cpu,
  MemoryStick,
  Wifi,
  Signal,
  Code,
  Package,
  Plug,
  ToggleLeft,
  ToggleRight,
  Volume2,
  Clock,
  Share2
} from 'lucide-react'

const AdminSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'appearance' | 'notifications' | 'payment' | 'security' | 'system' | 'integrations'>('general')
  const [hasChanges, setHasChanges] = useState(false)

  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'EnglishTech',
    siteDescription: 'Modern İngilizce eğitimi platformu',
    siteUrl: 'https://englishtech.com',
    adminEmail: 'admin@englishtech.com',
    supportEmail: 'support@englishtech.com',
    timezone: 'Europe/Istanbul',
    language: 'tr',
    currency: 'TRY',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24',
    registrationEnabled: true,
    maintenanceMode: false,
    seoTitle: 'EnglishTech - Modern İngilizce Eğitimi',
    seoDescription: 'En iyi İngilizce kursları ile hedeflerinize ulaşın',
    seoKeywords: 'İngilizce, kurs, eğitim, online'
  })

  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'light',
    primaryColor: '#3b82f6',
    secondaryColor: '#0ea5e9',
    accentColor: '#8b5cf6',
    fontFamily: 'Inter',
    fontSize: '16',
    headerStyle: 'default',
    footerStyle: 'default',
    logoUrl: '/logo.png',
    faviconUrl: '/favicon.ico',
    heroImage: '/hero-bg.jpg',
    showBreadcrumbs: true,
    showSidebar: true,
    compactMode: false,
    darkModeEnabled: true,
    customCss: ''
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    slackNotifications: false,
    discordNotifications: false,
    newUserNotification: true,
    newCourseNotification: true,
    paymentNotification: true,
    supportNotification: true,
    systemNotification: true,
    marketingEmails: true,
    weeklyReports: true,
    monthlyReports: true,
    errorReports: true,
    securityAlerts: true,
    newUserEmail: true,
    securityEmail: true,
    maintenanceEmail: true,
    soundNotifications: true,
    dailyDigest: 'morning',
    weeklyReport: 'monday'
  })

  const [paymentSettings, setPaymentSettings] = useState({
    stripeEnabled: true,
    stripePublishableKey: 'pk_test_...',
    stripeSecretKey: '••••••••••••••••',
    iyzicoEnabled: true,
    iyzicoApiKey: '••••••••••••••••',
    iyzicoSecretKey: '••••••••••••••••',
    paypalEnabled: false,
    paypalClientId: '',
    paypalClientSecret: '',
    currency: 'TRY',
    taxRate: 18,
    commissionRate: 15,
    refundEnabled: true,
    refundPeriod: 14,
    minimumPayout: 100,
    payoutSchedule: 'weekly',
    invoiceTemplate: 'default',
    receiptTemplate: 'default',
    defaultCurrency: 'TRY',
    autoInvoice: true,
    invoicePrefix: 'ET-'
  })

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorEnabled: false,
    passwordMinLength: 8,
    passwordRequireNumbers: true,
    passwordRequireSymbols: true,
    passwordRequireUppercase: true,
    sessionTimeout: 30,
    loginAttempts: 5,
    lockoutDuration: 15,
    ipWhitelistEnabled: false,
    ipWhitelist: '',
    corsEnabled: true,
    corsOrigins: '*',
    rateLimitEnabled: true,
    rateLimitRequests: 100,
    rateLimitWindow: 15,
    encryptionEnabled: true,
    backupEnabled: true,
    backupFrequency: 'daily',
    logRetention: 30,
    twoFactorRequired: false,
    maxLoginAttempts: 5,
    minPasswordLength: 8,
    requireSpecialChars: true,
    passwordExpiry: 90,
    ipRestriction: false,
    securityLogs: true
  })

  const [systemSettings, setSystemSettings] = useState({
    cacheEnabled: true,
    cacheType: 'redis',
    cacheTtl: 3600,
    databaseHost: 'localhost',
    databasePort: 5432,
    databaseName: 'englishtech',
    databaseUser: 'admin',
    databasePassword: '••••••••••••••••',
    redisHost: 'localhost',
    redisPort: 6379,
    redisPassword: '••••••••••••••••',
    storageType: 'local',
    storageSize: '100GB',
    storageUsed: '45GB',
    cdnEnabled: true,
    cdnUrl: 'https://cdn.englishtech.com',
    compressionEnabled: true,
    minificationEnabled: true,
    debugMode: false,
    logLevel: 'info',
    cacheTimeout: 24,
    autoBackup: true,
    maxFileSize: 10,
    allowedFileTypes: 'jpg,png,pdf,doc,docx,mp4,mp3',
    fileScanning: true,
    maintenanceMode: false,
    autoUpdate: true
  })

  const [integrationSettings, setIntegrationSettings] = useState({
    googleAnalyticsEnabled: true,
    googleAnalyticsId: 'GA-XXXXXXXXX',
    googleTagManagerEnabled: false,
    googleTagManagerId: '',
    facebookPixelEnabled: true,
    facebookPixelId: '1234567890',
    mailchimpEnabled: false,
    mailchimpApiKey: '',
    mailchimpListId: '',
    zapierEnabled: false,
    zapierWebhookUrl: '',
    slackEnabled: false,
    slackWebhookUrl: '',
    discordEnabled: false,
    discordWebhookUrl: '',
    zoomEnabled: true,
    zoomApiKey: '••••••••••••••••',
    zoomApiSecret: '••••••••••••••••',
    emailProvider: 'smtp',
    emailApiKey: '',
    senderEmail: 'noreply@englishtech.com',
    googleAnalytics: true,
    gaTrackingId: 'GA-XXXXXXXXX',
    facebookPixel: true,
    facebookLogin: true,
    googleLogin: true,
    twitterSharing: false,
    awsS3: true,
    cdn: true
  })

  const handleSave = () => {
    console.log('Settings saved!')
    setHasChanges(false)
  }

  const handleReset = () => {
    console.log('Settings reset!')
    setHasChanges(false)
  }

  const handleToggleChange = (section: string, key: string, value: boolean) => {
    setHasChanges(true)
    handleInputChange(section, key, value)
  }

  const handleInputChange = (section: string, key: string, value: any) => {
    setHasChanges(true)
    switch (section) {
      case 'general':
        setGeneralSettings(prev => ({ ...prev, [key]: value }))
        break
      case 'appearance':
        setAppearanceSettings(prev => ({ ...prev, [key]: value }))
        break
      case 'notifications':
        setNotificationSettings(prev => ({ ...prev, [key]: value }))
        break
      case 'payment':
        setPaymentSettings(prev => ({ ...prev, [key]: value }))
        break
      case 'security':
        setSecuritySettings(prev => ({ ...prev, [key]: value }))
        break
      case 'system':
        setSystemSettings(prev => ({ ...prev, [key]: value }))
        break
      case 'integrations':
        setIntegrationSettings(prev => ({ ...prev, [key]: value }))
        break
    }
  }

  const SettingGroup = ({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )

  const SettingItem = ({ label, description, icon: Icon, children }: { 
    label: string; 
    description?: string; 
    icon?: React.ComponentType<{ className?: string }>; 
    children: React.ReactNode 
  }) => (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        {Icon && <Icon className="w-5 h-5 text-gray-600" />}
        <div>
          <div className="font-medium text-gray-900">{label}</div>
          {description && <div className="text-sm text-gray-600">{description}</div>}
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )

  const ToggleSwitch = ({ 
    checked, 
    onChange, 
    disabled = false 
  }: { 
    checked: boolean; 
    onChange: (value: boolean) => void; 
    disabled?: boolean 
  }) => (
    <button
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        checked ? 'bg-blue-600' : 'bg-gray-200'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sistem Ayarları</h1>
          <p className="text-gray-600 mt-1">Platform konfigürasyonunu yönetin</p>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleReset}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Sıfırla</span>
          </button>
          <button 
            onClick={handleSave}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              hasChanges 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!hasChanges}
          >
            <Save className="w-4 h-4" />
            <span>Kaydet</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-200 p-1">
        <div className="flex space-x-1 overflow-x-auto">
          {[
            { key: 'general', label: 'Genel', icon: Settings },
            { key: 'appearance', label: 'Görünüm', icon: Palette },
            { key: 'notifications', label: 'Bildirimler', icon: Bell },
            { key: 'payment', label: 'Ödeme', icon: CreditCard },
            { key: 'security', label: 'Güvenlik', icon: Shield },
            { key: 'system', label: 'Sistem', icon: Server },
            { key: 'integrations', label: 'Entegrasyonlar', icon: Plug }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.key 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* General Settings */}
      {activeTab === 'general' && (
        <div className="space-y-6">
          <SettingGroup title="Site Bilgileri">
            <SettingItem label="Site Adı" description="Ana sayfa başlığında görünür" icon={Globe}>
              <input
                type="text"
                value={generalSettings.siteName}
                onChange={(e) => handleInputChange('general', 'siteName', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </SettingItem>
            <SettingItem label="Site Açıklaması" description="Meta açıklamasında kullanılır" icon={FileText}>
              <textarea
                value={generalSettings.siteDescription}
                onChange={(e) => handleInputChange('general', 'siteDescription', e.target.value)}
                rows={2}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
              />
            </SettingItem>
            <SettingItem label="Site URL" description="Ana domain adresi" icon={Globe}>
              <input
                type="url"
                value={generalSettings.siteUrl}
                onChange={(e) => handleInputChange('general', 'siteUrl', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </SettingItem>
            <SettingItem label="Kayıt Sistemi" description="Yeni kullanıcı kaydına izin ver" icon={Users}>
              <ToggleSwitch
                checked={generalSettings.registrationEnabled}
                onChange={(value) => handleInputChange('general', 'registrationEnabled', value)}
              />
            </SettingItem>
            <SettingItem label="Bakım Modu" description="Siteyi bakım moduna al" icon={Settings}>
              <ToggleSwitch
                checked={generalSettings.maintenanceMode}
                onChange={(value) => handleInputChange('general', 'maintenanceMode', value)}
              />
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Bölgesel Ayarlar">
            <SettingItem label="Zaman Dilimi" description="Sunucu zaman dilimi" icon={Globe}>
              <select
                value={generalSettings.timezone}
                onChange={(e) => handleInputChange('general', 'timezone', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Europe/Istanbul">Europe/Istanbul</option>
                <option value="Europe/London">Europe/London</option>
                <option value="America/New_York">America/New_York</option>
              </select>
            </SettingItem>
            <SettingItem label="Dil" description="Varsayılan sistem dili" icon={Globe}>
              <select
                value={generalSettings.language}
                onChange={(e) => handleInputChange('general', 'language', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </SettingItem>
            <SettingItem label="Para Birimi" description="Fiyat gösterimleri için" icon={DollarSign}>
              <select
                value={generalSettings.currency}
                onChange={(e) => handleInputChange('general', 'currency', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="TRY">Turkish Lira (TRY)</option>
                <option value="USD">US Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
              </select>
            </SettingItem>
          </SettingGroup>
        </div>
      )}

      {/* Appearance Settings */}
      {activeTab === 'appearance' && (
        <div className="space-y-6">
          <SettingGroup title="Tema ve Renkler">
            <SettingItem label="Tema" description="Açık veya koyu tema" icon={Palette}>
              <select
                value={appearanceSettings.theme}
                onChange={(e) => handleInputChange('appearance', 'theme', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="light">Açık Tema</option>
                <option value="dark">Koyu Tema</option>
                <option value="auto">Otomatik</option>
              </select>
            </SettingItem>
            <SettingItem label="Ana Renk" description="Birincil renk paleti" icon={Palette}>
              <input
                type="color"
                value={appearanceSettings.primaryColor}
                onChange={(e) => handleInputChange('appearance', 'primaryColor', e.target.value)}
                className="w-10 h-10 border border-gray-300 rounded-lg cursor-pointer"
              />
            </SettingItem>
            <SettingItem label="İkincil Renk" description="İkincil renk paleti" icon={Palette}>
              <input
                type="color"
                value={appearanceSettings.secondaryColor}
                onChange={(e) => handleInputChange('appearance', 'secondaryColor', e.target.value)}
                className="w-10 h-10 border border-gray-300 rounded-lg cursor-pointer"
              />
            </SettingItem>
            <SettingItem label="Koyu Mod" description="Koyu mod desteği" icon={Settings}>
              <ToggleSwitch
                checked={appearanceSettings.darkModeEnabled}
                onChange={(value) => handleInputChange('appearance', 'darkModeEnabled', value)}
              />
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Tipografi">
            <SettingItem label="Font Ailesi" description="Varsayılan font" icon={Type}>
              <select
                value={appearanceSettings.fontFamily}
                onChange={(e) => handleInputChange('appearance', 'fontFamily', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Arial">Arial</option>
                <option value="Open Sans">Open Sans</option>
              </select>
            </SettingItem>
            <SettingItem label="Font Boyutu" description="Temel font boyutu (px)" icon={Type}>
              <input
                type="number"
                value={appearanceSettings.fontSize}
                onChange={(e) => handleInputChange('appearance', 'fontSize', e.target.value)}
                min="12"
                max="20"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-20"
              />
            </SettingItem>
          </SettingGroup>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="space-y-6">
          <SettingGroup title="E-posta Bildirimleri" description="E-posta bildirim ayarları">
            <SettingItem label="Yeni Kullanıcı Kaydı" description="Yeni kullanıcı kaydı bildirimlerini al" icon={Users}>
              <button
                onClick={() => handleToggleChange('notifications', 'newUserEmail', !notificationSettings.newUserEmail)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  notificationSettings.newUserEmail ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  notificationSettings.newUserEmail ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="Güvenlik Uyarıları" description="Güvenlik olayları için e-posta bildirimi" icon={Shield}>
              <button
                onClick={() => handleToggleChange('notifications', 'securityEmail', !notificationSettings.securityEmail)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  notificationSettings.securityEmail ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  notificationSettings.securityEmail ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="Sistem Bakımı" description="Sistem bakımı bildirimleri" icon={Settings}>
              <button
                onClick={() => handleToggleChange('notifications', 'maintenanceEmail', !notificationSettings.maintenanceEmail)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  notificationSettings.maintenanceEmail ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  notificationSettings.maintenanceEmail ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Push Bildirimleri" description="Tarayıcı push bildirimleri">
            <SettingItem label="Anlık Bildirimler" description="Anlık push bildirimleri etkinleştir" icon={Bell}>
              <button
                onClick={() => handleToggleChange('notifications', 'pushNotifications', !notificationSettings.pushNotifications)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  notificationSettings.pushNotifications ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  notificationSettings.pushNotifications ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="Sesli Bildirimler" description="Bildirim sesi çal" icon={Volume2}>
              <button
                onClick={() => handleToggleChange('notifications', 'soundNotifications', !notificationSettings.soundNotifications)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  notificationSettings.soundNotifications ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  notificationSettings.soundNotifications ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Bildirim Sıklığı" description="Bildirim gönderim sıklığı">
            <SettingItem label="Günlük Özet" description="Günlük aktivite özeti gönder" icon={Calendar}>
              <select
                value={notificationSettings.dailyDigest}
                onChange={(e) => handleInputChange('notifications', 'dailyDigest', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="disabled">Kapalı</option>
                <option value="morning">Sabah 09:00</option>
                <option value="evening">Akşam 18:00</option>
                <option value="both">Her ikisi</option>
              </select>
            </SettingItem>
            <SettingItem label="Haftalık Rapor" description="Haftalık aktivite raporu gönder" icon={FileText}>
              <select
                value={notificationSettings.weeklyReport}
                onChange={(e) => handleInputChange('notifications', 'weeklyReport', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="disabled">Kapalı</option>
                <option value="monday">Pazartesi</option>
                <option value="friday">Cuma</option>
                <option value="sunday">Pazar</option>
              </select>
            </SettingItem>
          </SettingGroup>
        </div>
      )}

      {/* Payment Tab */}
      {activeTab === 'payment' && (
        <div className="space-y-6">
          <SettingGroup title="Ödeme Sağlayıcıları" description="Ödeme sistemleri konfigürasyonu">
            <SettingItem label="Stripe" description="Stripe ödeme sistemi" icon={CreditCard}>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleToggleChange('payment', 'stripeEnabled', !paymentSettings.stripeEnabled)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    paymentSettings.stripeEnabled ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                    paymentSettings.stripeEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
                <span className="text-sm text-gray-600">Etkin</span>
              </div>
            </SettingItem>
            <SettingItem label="PayPal" description="PayPal ödeme sistemi" icon={DollarSign}>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleToggleChange('payment', 'paypalEnabled', !paymentSettings.paypalEnabled)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    paymentSettings.paypalEnabled ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                    paymentSettings.paypalEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
                <span className="text-sm text-gray-600">Etkin</span>
              </div>
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Para Birimi" description="Varsayılan para birimi ayarları">
            <SettingItem label="Varsayılan Para Birimi" description="Sistem para birimi" icon={Globe}>
              <select
                value={paymentSettings.defaultCurrency}
                onChange={(e) => handleInputChange('payment', 'defaultCurrency', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="TRY">Türk Lirası (₺)</option>
                <option value="USD">ABD Doları ($)</option>
                <option value="EUR">Euro (€)</option>
                <option value="GBP">İngiliz Sterlini (£)</option>
              </select>
            </SettingItem>
            <SettingItem label="Vergi Oranı" description="Varsayılan vergi oranı (%)" icon={FileText}>
              <input
                type="number"
                value={paymentSettings.taxRate}
                onChange={(e) => handleInputChange('payment', 'taxRate', e.target.value)}
                min="0"
                max="100"
                step="0.1"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-24"
              />
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Fatura Ayarları" description="Fatura ve makbuz ayarları">
            <SettingItem label="Otomatik Fatura" description="Otomatik fatura oluştur" icon={FileText}>
              <button
                onClick={() => handleToggleChange('payment', 'autoInvoice', !paymentSettings.autoInvoice)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  paymentSettings.autoInvoice ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  paymentSettings.autoInvoice ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="Fatura Prefixi" description="Fatura numarası prefixi" icon={FileText}>
              <input
                type="text"
                value={paymentSettings.invoicePrefix}
                onChange={(e) => handleInputChange('payment', 'invoicePrefix', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-32"
                placeholder="ET-"
              />
            </SettingItem>
          </SettingGroup>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <SettingGroup title="Kimlik Doğrulama" description="Güvenlik ve kimlik doğrulama ayarları">
            <SettingItem label="İki Faktörlü Kimlik Doğrulama" description="2FA zorunlu tut" icon={Shield}>
              <button
                onClick={() => handleToggleChange('security', 'twoFactorRequired', !securitySettings.twoFactorRequired)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  securitySettings.twoFactorRequired ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  securitySettings.twoFactorRequired ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="Oturum Zaman Aşımı" description="Otomatik oturumu kapat (dakika)" icon={Clock}>
              <input
                type="number"
                value={securitySettings.sessionTimeout}
                onChange={(e) => handleInputChange('security', 'sessionTimeout', e.target.value)}
                min="5"
                max="1440"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-24"
              />
            </SettingItem>
            <SettingItem label="Maksimum Giriş Denemesi" description="Başarısız giriş limiti" icon={Lock}>
              <input
                type="number"
                value={securitySettings.maxLoginAttempts}
                onChange={(e) => handleInputChange('security', 'maxLoginAttempts', e.target.value)}
                min="3"
                max="10"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-24"
              />
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Şifre Politikası" description="Şifre güvenlik kuralları">
            <SettingItem label="Minimum Şifre Uzunluğu" description="Minimum karakter sayısı" icon={Key}>
              <input
                type="number"
                value={securitySettings.minPasswordLength}
                onChange={(e) => handleInputChange('security', 'minPasswordLength', e.target.value)}
                min="6"
                max="32"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-24"
              />
            </SettingItem>
            <SettingItem label="Özel Karakter Zorunlu" description="Özel karakter kullanımı zorunlu" icon={Key}>
              <button
                onClick={() => handleToggleChange('security', 'requireSpecialChars', !securitySettings.requireSpecialChars)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  securitySettings.requireSpecialChars ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  securitySettings.requireSpecialChars ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="Şifre Yenileme Periyodu" description="Şifre yenileme süresi (gün)" icon={RotateCcw}>
              <input
                type="number"
                value={securitySettings.passwordExpiry}
                onChange={(e) => handleInputChange('security', 'passwordExpiry', e.target.value)}
                min="30"
                max="365"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-24"
              />
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="IP ve Güvenlik" description="IP kısıtlamaları ve güvenlik">
            <SettingItem label="IP Kısıtlaması" description="IP adresi kısıtlaması etkinleştir" icon={Globe}>
              <button
                onClick={() => handleToggleChange('security', 'ipRestriction', !securitySettings.ipRestriction)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  securitySettings.ipRestriction ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  securitySettings.ipRestriction ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="Güvenlik Logları" description="Detaylı güvenlik logları tut" icon={FileText}>
              <button
                onClick={() => handleToggleChange('security', 'securityLogs', !securitySettings.securityLogs)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  securitySettings.securityLogs ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  securitySettings.securityLogs ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
          </SettingGroup>
        </div>
      )}

      {/* System Tab */}
      {activeTab === 'system' && (
        <div className="space-y-6">
          <SettingGroup title="Sistem Performansı" description="Sistem performans ayarları">
            <SettingItem label="Önbellek Süresi" description="Önbellek saklama süresi (saat)" icon={Database}>
              <input
                type="number"
                value={systemSettings.cacheTimeout}
                onChange={(e) => handleInputChange('system', 'cacheTimeout', e.target.value)}
                min="1"
                max="168"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-24"
              />
            </SettingItem>
            <SettingItem label="Otomatik Yedekleme" description="Otomatik veritabanı yedekleme" icon={HardDrive}>
              <button
                onClick={() => handleToggleChange('system', 'autoBackup', !systemSettings.autoBackup)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  systemSettings.autoBackup ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  systemSettings.autoBackup ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="Log Seviyesi" description="Sistem log seviyesi" icon={FileText}>
              <select
                value={systemSettings.logLevel}
                onChange={(e) => handleInputChange('system', 'logLevel', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="error">Sadece Hatalar</option>
                <option value="warn">Uyarılar</option>
                <option value="info">Bilgi</option>
                <option value="debug">Debug</option>
              </select>
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Dosya Yönetimi" description="Dosya upload ve depolama ayarları">
            <SettingItem label="Maksimum Dosya Boyutu" description="Dosya upload limiti (MB)" icon={Upload}>
              <input
                type="number"
                value={systemSettings.maxFileSize}
                onChange={(e) => handleInputChange('system', 'maxFileSize', e.target.value)}
                min="1"
                max="100"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-24"
              />
            </SettingItem>
            <SettingItem label="İzin Verilen Dosya Türleri" description="Upload edilebilir dosya türleri" icon={FileText}>
              <input
                type="text"
                value={systemSettings.allowedFileTypes}
                onChange={(e) => handleInputChange('system', 'allowedFileTypes', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-80"
                placeholder="jpg,png,pdf,doc,docx"
              />
            </SettingItem>
            <SettingItem label="Dosya Tarama" description="Yüklenen dosyaları virüs tara" icon={Shield}>
              <button
                onClick={() => handleToggleChange('system', 'fileScanning', !systemSettings.fileScanning)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  systemSettings.fileScanning ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  systemSettings.fileScanning ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Sistem Bakımı" description="Sistem bakım ayarları">
            <SettingItem label="Bakım Modu" description="Sistem bakım modu" icon={Settings}>
              <button
                onClick={() => handleToggleChange('system', 'maintenanceMode', !systemSettings.maintenanceMode)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  systemSettings.maintenanceMode ? 'bg-red-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  systemSettings.maintenanceMode ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="Otomatik Güncelleme" description="Sistem otomatik güncellemeler" icon={Download}>
              <button
                onClick={() => handleToggleChange('system', 'autoUpdate', !systemSettings.autoUpdate)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  systemSettings.autoUpdate ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  systemSettings.autoUpdate ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
          </SettingGroup>
        </div>
      )}

      {/* Integrations Tab */}
      {activeTab === 'integrations' && (
        <div className="space-y-6">
          <SettingGroup title="E-posta Servisi" description="E-posta gönderim servisi ayarları">
            <SettingItem label="E-posta Sağlayıcısı" description="E-posta gönderim servisi" icon={Mail}>
              <select
                value={integrationSettings.emailProvider}
                onChange={(e) => handleInputChange('integrations', 'emailProvider', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="smtp">SMTP</option>
                <option value="sendgrid">SendGrid</option>
                <option value="mailgun">Mailgun</option>
                <option value="ses">Amazon SES</option>
              </select>
            </SettingItem>
            <SettingItem label="API Anahtarı" description="E-posta servis API anahtarı" icon={Key}>
              <input
                type="password"
                value={integrationSettings.emailApiKey}
                onChange={(e) => handleInputChange('integrations', 'emailApiKey', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-80"
                placeholder="API anahtarı"
              />
            </SettingItem>
            <SettingItem label="Gönderen E-posta" description="Varsayılan gönderen e-posta adresi" icon={Mail}>
              <input
                type="email"
                value={integrationSettings.senderEmail}
                onChange={(e) => handleInputChange('integrations', 'senderEmail', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-80"
                placeholder="noreply@englishtech.com"
              />
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Analitik Servisleri" description="Analitik ve izleme servisleri">
            <SettingItem label="Google Analytics" description="Google Analytics entegrasyonu" icon={Activity}>
              <button
                onClick={() => handleToggleChange('integrations', 'googleAnalytics', !integrationSettings.googleAnalytics)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  integrationSettings.googleAnalytics ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  integrationSettings.googleAnalytics ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="GA Tracking ID" description="Google Analytics izleme ID" icon={Code}>
              <input
                type="text"
                value={integrationSettings.gaTrackingId}
                onChange={(e) => handleInputChange('integrations', 'gaTrackingId', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-80"
                placeholder="GA-XXXXXXXXX-X"
              />
            </SettingItem>
            <SettingItem label="Facebook Pixel" description="Facebook Pixel entegrasyonu" icon={Activity}>
              <button
                onClick={() => handleToggleChange('integrations', 'facebookPixel', !integrationSettings.facebookPixel)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  integrationSettings.facebookPixel ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  integrationSettings.facebookPixel ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Sosyal Medya" description="Sosyal medya entegrasyonları">
            <SettingItem label="Facebook Login" description="Facebook ile giriş" icon={Users}>
              <button
                onClick={() => handleToggleChange('integrations', 'facebookLogin', !integrationSettings.facebookLogin)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  integrationSettings.facebookLogin ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  integrationSettings.facebookLogin ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="Google Login" description="Google ile giriş" icon={Users}>
              <button
                onClick={() => handleToggleChange('integrations', 'googleLogin', !integrationSettings.googleLogin)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  integrationSettings.googleLogin ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  integrationSettings.googleLogin ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="Twitter Paylaşımı" description="Otomatik Twitter paylaşımı" icon={Share2}>
              <button
                onClick={() => handleToggleChange('integrations', 'twitterSharing', !integrationSettings.twitterSharing)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  integrationSettings.twitterSharing ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  integrationSettings.twitterSharing ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
          </SettingGroup>

          <SettingGroup title="Depolama Servisleri" description="Bulut depolama entegrasyonları">
            <SettingItem label="AWS S3" description="Amazon S3 depolama" icon={Cloud}>
              <button
                onClick={() => handleToggleChange('integrations', 'awsS3', !integrationSettings.awsS3)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  integrationSettings.awsS3 ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  integrationSettings.awsS3 ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
            <SettingItem label="CDN" description="Content Delivery Network" icon={Globe}>
              <button
                onClick={() => handleToggleChange('integrations', 'cdn', !integrationSettings.cdn)}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  integrationSettings.cdn ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                  integrationSettings.cdn ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </SettingItem>
          </SettingGroup>
        </div>
      )}

      {/* Other tabs content would be similar... */}
      {activeTab !== 'general' && activeTab !== 'appearance' && activeTab !== 'notifications' && activeTab !== 'payment' && activeTab !== 'security' && activeTab !== 'system' && activeTab !== 'integrations' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-center py-8">
            <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Bilinmeyen Sekme</h3>
            <p className="text-gray-600">Bu bölüm geliştiriliyor...</p>
          </div>
        </div>
      )}

      {/* Save notification */}
      {hasChanges && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm">Kaydedilmemiş değişiklikler var</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminSettings
