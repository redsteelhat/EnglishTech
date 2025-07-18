'use client'

import React, { useState } from 'react'
import { 
  Shield, 
  Search, 
  Filter, 
  Download,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Lock,
  Unlock,
  Key,
  User,
  Globe,
  Calendar,
  Activity,
  TrendingUp,
  TrendingDown,
  Users,
  MapPin,
  Monitor,
  Smartphone,
  Tablet,
  Wifi,
  Server,
  Database,
  FileText,
  Bell,
  Settings,
  Zap,
  Flag,
  Ban,
  UserX,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  AlertCircle,
  Info,
  RefreshCw,
  Archive,
  Trash2,
  Plus,
  Minus,
  MoreVertical,
  Target,
  Crosshair,
  Radar,
  ScanLine,
  Bug,
  Fingerprint,
  CreditCard,
  Mail,
  Phone,
  Link,
  Chrome,
  ExternalLink
} from 'lucide-react'

const AdminSecurity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'logs' | 'threats' | 'users' | 'policies' | 'reports'>('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [dateRange, setDateRange] = useState('7')

  const securityLogs = [
    {
      id: 'log_1',
      timestamp: '2024-01-26 16:45:32',
      type: 'login_success',
      severity: 'info',
      user: 'admin@englishtech.com',
      ipAddress: '192.168.1.100',
      location: 'Istanbul, Turkey',
      device: 'Chrome on Windows',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      action: 'Başarılı giriş',
      details: 'Yönetici paneli girişi başarıyla tamamlandı',
      riskLevel: 'low',
      blocked: false
    },
    {
      id: 'log_2',
      timestamp: '2024-01-26 16:23:15',
      type: 'login_failed',
      severity: 'warning',
      user: 'attacker@fake.com',
      ipAddress: '45.123.456.789',
      location: 'Unknown Location',
      device: 'Unknown Browser',
      userAgent: 'curl/7.68.0',
      action: 'Başarısız giriş denemesi',
      details: 'Hatalı şifre ile giriş denemesi (5/5)',
      riskLevel: 'high',
      blocked: true
    },
    {
      id: 'log_3',
      timestamp: '2024-01-26 15:30:45',
      type: 'password_change',
      severity: 'info',
      user: 'user@example.com',
      ipAddress: '85.123.456.789',
      location: 'Ankara, Turkey',
      device: 'Firefox on Mac',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0)',
      action: 'Şifre değişikliği',
      details: 'Kullanıcı şifresini başarıyla değiştirdi',
      riskLevel: 'low',
      blocked: false
    },
    {
      id: 'log_4',
      timestamp: '2024-01-26 14:15:20',
      type: 'suspicious_activity',
      severity: 'critical',
      user: 'suspicious@domain.com',
      ipAddress: '123.456.789.012',
      location: 'Moscow, Russia',
      device: 'Bot/Crawler',
      userAgent: 'python-requests/2.25.1',
      action: 'Şüpheli aktivite',
      details: 'Kısa sürede çok sayıda API isteği',
      riskLevel: 'critical',
      blocked: true
    },
    {
      id: 'log_5',
      timestamp: '2024-01-26 13:45:12',
      type: 'admin_action',
      severity: 'info',
      user: 'admin@englishtech.com',
      ipAddress: '192.168.1.100',
      location: 'Istanbul, Turkey',
      device: 'Chrome on Windows',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      action: 'Kullanıcı yasaklama',
      details: 'Kullanıcı "malicious@example.com" yasaklandı',
      riskLevel: 'medium',
      blocked: false
    }
  ]

  const threats = [
    {
      id: 'threat_1',
      type: 'brute_force',
      severity: 'high',
      status: 'active',
      sourceIp: '45.123.456.789',
      targetUser: 'admin@englishtech.com',
      attempts: 127,
      startTime: '2024-01-26 16:00:00',
      lastSeen: '2024-01-26 16:45:00',
      location: 'Unknown Location',
      blocked: true,
      description: 'Yönetici hesabına karşı brute force saldırısı'
    },
    {
      id: 'threat_2',
      type: 'sql_injection',
      severity: 'critical',
      status: 'blocked',
      sourceIp: '123.456.789.012',
      targetUser: null,
      attempts: 23,
      startTime: '2024-01-26 14:30:00',
      lastSeen: '2024-01-26 14:45:00',
      location: 'Moscow, Russia',
      blocked: true,
      description: 'SQL injection saldırısı denemesi'
    },
    {
      id: 'threat_3',
      type: 'ddos',
      severity: 'medium',
      status: 'mitigated',
      sourceIp: '67.890.123.456',
      targetUser: null,
      attempts: 1500,
      startTime: '2024-01-26 12:00:00',
      lastSeen: '2024-01-26 12:15:00',
      location: 'China',
      blocked: true,
      description: 'DDoS saldırısı denemesi'
    }
  ]

  const suspiciousUsers = [
    {
      id: 'user_1',
      email: 'suspicious@domain.com',
      name: 'Suspicious User',
      riskScore: 95,
      lastLogin: '2024-01-26 16:30:00',
      loginAttempts: 15,
      ipAddresses: ['123.456.789.012', '45.123.456.789'],
      locations: ['Moscow, Russia', 'Unknown Location'],
      devices: ['Bot/Crawler', 'Unknown Browser'],
      flags: ['Multiple IP addresses', 'Unusual login pattern', 'Bot-like behavior'],
      status: 'banned',
      actions: ['Account locked', 'IP blocked']
    },
    {
      id: 'user_2',
      email: 'attacker@fake.com',
      name: 'Potential Attacker',
      riskScore: 87,
      lastLogin: '2024-01-26 15:45:00',
      loginAttempts: 8,
      ipAddresses: ['78.901.234.567'],
      locations: ['Unknown Location'],
      devices: ['curl/7.68.0'],
      flags: ['Failed login attempts', 'Non-standard user agent'],
      status: 'flagged',
      actions: ['Under monitoring']
    }
  ]

  const filteredLogs = securityLogs.filter(log => {
    const matchesSearch = log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.ipAddress.includes(searchQuery)
    return matchesSearch
  })

  const stats = [
    {
      name: 'Toplam Güvenlik Olayı',
      value: securityLogs.length,
      change: '+12',
      changeType: 'increase',
      icon: Shield,
      color: 'text-blue-600'
    },
    {
      name: 'Kritik Tehditler',
      value: securityLogs.filter(log => log.severity === 'critical').length,
      change: '+2',
      changeType: 'increase',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      name: 'Engellenen Saldırılar',
      value: securityLogs.filter(log => log.blocked).length,
      change: '+8',
      changeType: 'increase',
      icon: ShieldCheck,
      color: 'text-green-600'
    },
    {
      name: 'Şüpheli Kullanıcılar',
      value: suspiciousUsers.length,
      change: '+1',
      changeType: 'increase',
      icon: UserX,
      color: 'text-yellow-600'
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800'
      case 'high': return 'bg-orange-100 text-orange-800'
      case 'warning': return 'bg-yellow-100 text-yellow-800'
      case 'info': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <ShieldX className="w-4 h-4" />
      case 'high': return <ShieldAlert className="w-4 h-4" />
      case 'warning': return <AlertTriangle className="w-4 h-4" />
      case 'info': return <Info className="w-4 h-4" />
      default: return <Shield className="w-4 h-4" />
    }
  }

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'critical': return 'text-red-600'
      case 'high': return 'text-orange-600'
      case 'medium': return 'text-yellow-600'
      case 'low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'login_success': return <CheckCircle className="w-4 h-4" />
      case 'login_failed': return <XCircle className="w-4 h-4" />
      case 'password_change': return <Key className="w-4 h-4" />
      case 'suspicious_activity': return <AlertTriangle className="w-4 h-4" />
      case 'admin_action': return <Settings className="w-4 h-4" />
      default: return <Activity className="w-4 h-4" />
    }
  }

  const handleBlockUser = (userId: string) => {
    console.log(`Block user: ${userId}`)
  }

  const handleUnblockUser = (userId: string) => {
    console.log(`Unblock user: ${userId}`)
  }

  const handleBlockIp = (ip: string) => {
    console.log(`Block IP: ${ip}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Güvenlik Merkezi</h1>
          <p className="text-gray-600 mt-1">Sistem güvenliğini izleyin ve yönetin</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="1">Son 24 saat</option>
            <option value="7">Son 7 gün</option>
            <option value="30">Son 30 gün</option>
            <option value="90">Son 90 gün</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <RefreshCw className="w-4 h-4" />
            <span>Yenile</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Güvenlik Raporu</span>
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
                <p className={`text-sm mt-1 ${stat.changeType === 'increase' ? 'text-red-600' : 'text-green-600'}`}>
                  {stat.change} son 24 saat
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gray-50">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-200 p-1">
        <div className="flex space-x-1 overflow-x-auto">
          {[
            { key: 'overview', label: 'Genel Bakış', icon: Shield },
            { key: 'logs', label: 'Güvenlik Logları', icon: FileText },
            { key: 'threats', label: 'Tehditler', icon: AlertTriangle },
            { key: 'users', label: 'Şüpheli Kullanıcılar', icon: UserX },
            { key: 'policies', label: 'Güvenlik Politikaları', icon: Settings },
            { key: 'reports', label: 'Raporlar', icon: TrendingUp }
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

      {/* Security Logs Tab */}
      {activeTab === 'logs' && (
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Log ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filtrele</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Zaman</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Olay</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Kullanıcı</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">IP Adresi</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Konum</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Risk</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Durum</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <div className="text-sm text-gray-900">
                        {new Date(log.timestamp).toLocaleDateString('tr-TR')}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(log.timestamp).toLocaleTimeString('tr-TR')}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="p-1 bg-gray-100 rounded">
                          {getTypeIcon(log.type)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{log.action}</div>
                          <div className="text-sm text-gray-500">{log.details}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-gray-900">{log.user}</div>
                      <div className="text-sm text-gray-500">{log.device}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm font-mono text-gray-900">{log.ipAddress}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-gray-900">{log.location}</div>
                    </td>
                    <td className="p-4">
                      <span className={`text-sm font-medium ${getRiskColor(log.riskLevel)}`}>
                        {log.riskLevel}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(log.severity)}`}>
                        {getSeverityIcon(log.severity)}
                        <span className="ml-1">{log.severity}</span>
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleBlockIp(log.ipAddress)}
                          className="p-1 text-red-600 hover:text-red-800 rounded hover:bg-red-50"
                        >
                          <Ban className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
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
      )}

      {/* Threats Tab */}
      {activeTab === 'threats' && (
        <div className="space-y-4">
          {threats.map((threat) => (
            <div key={threat.id} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${
                    threat.severity === 'critical' ? 'bg-red-100' :
                    threat.severity === 'high' ? 'bg-orange-100' :
                    'bg-yellow-100'
                  }`}>
                    <AlertTriangle className={`w-6 h-6 ${
                      threat.severity === 'critical' ? 'text-red-600' :
                      threat.severity === 'high' ? 'text-orange-600' :
                      'text-yellow-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{threat.description}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Globe className="w-4 h-4" />
                        <span>{threat.sourceIp}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{threat.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span>{threat.attempts} deneme</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    threat.status === 'active' ? 'bg-red-100 text-red-800' :
                    threat.status === 'blocked' ? 'bg-gray-100 text-gray-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {threat.status === 'active' ? 'Aktif' :
                     threat.status === 'blocked' ? 'Engellendi' :
                     'Hafifletildi'}
                  </span>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Real-time Security Status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Anlık Güvenlik Durumu</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-green-800">Sistem Durumu</p>
                    <p className="text-2xl font-bold text-green-900">Güvenli</p>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Aktif Tehditler</p>
                    <p className="text-2xl font-bold text-yellow-900">3</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-red-800">Engellenen IP</p>
                    <p className="text-2xl font-bold text-red-900">47</p>
                  </div>
                  <Ban className="w-8 h-8 text-red-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Security Events */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Güvenlik Olayları</h3>
            <div className="space-y-3">
              {securityLogs.slice(0, 5).map((log) => (
                <div key={log.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="p-2 bg-white rounded">
                    {getTypeIcon(log.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{log.action}</span>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(log.severity)}`}>
                        {log.severity}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">{log.user} - {log.ipAddress}</div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(log.timestamp).toLocaleTimeString('tr-TR')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Metrics */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Güvenlik Metrikleri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Tehdit Türleri</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Brute Force</span>
                    <span className="text-sm font-medium text-gray-900">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">SQL Injection</span>
                    <span className="text-sm font-medium text-gray-900">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">DDoS</span>
                    <span className="text-sm font-medium text-gray-900">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Güvenlik Durumu</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Firewall</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Aktif
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">SSL/TLS</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Aktif
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">DDoS Koruması</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Aktif
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">IP Filtreleme</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Aktif
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Suspicious Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Şüpheli Kullanıcılar</h3>
                  <p className="text-gray-600 mt-1">Risk skoruna göre şüpheli kullanıcıları yönetin</p>
                </div>
                <div className="flex items-center space-x-3">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="all">Tüm Kullanıcılar</option>
                    <option value="banned">Yasaklanan</option>
                    <option value="flagged">İşaretlenen</option>
                    <option value="monitoring">İzlenen</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Kullanıcı</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Risk Skoru</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Son Giriş</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Giriş Denemeleri</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Konum</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Durum</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {suspiciousUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4">
                        <div>
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <span className={`text-lg font-bold ${
                            user.riskScore >= 90 ? 'text-red-600' :
                            user.riskScore >= 70 ? 'text-orange-600' :
                            user.riskScore >= 50 ? 'text-yellow-600' :
                            'text-green-600'
                          }`}>
                            {user.riskScore}
                          </span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                user.riskScore >= 90 ? 'bg-red-600' :
                                user.riskScore >= 70 ? 'bg-orange-600' :
                                user.riskScore >= 50 ? 'bg-yellow-600' :
                                'bg-green-600'
                              }`}
                              style={{ width: `${user.riskScore}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-900">
                          {new Date(user.lastLogin).toLocaleDateString('tr-TR')}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-sm font-medium text-gray-900">{user.loginAttempts}</span>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-900">{user.locations[0]}</div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === 'banned' ? 'bg-red-100 text-red-800' :
                          user.status === 'flagged' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {user.status === 'banned' ? 'Yasaklandı' :
                           user.status === 'flagged' ? 'İşaretlendi' :
                           'İzleniyor'}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-800 rounded hover:bg-blue-50">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleBlockUser(user.id)}
                            className="p-1 text-red-600 hover:text-red-800 rounded hover:bg-red-50"
                          >
                            <Ban className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleUnblockUser(user.id)}
                            className="p-1 text-green-600 hover:text-green-800 rounded hover:bg-green-50"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* User Risk Flags */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Bayrakları</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Çoklu IP Adresi', count: 15, color: 'bg-red-50 text-red-700' },
                { name: 'Başarısız Giriş', count: 23, color: 'bg-orange-50 text-orange-700' },
                { name: 'Bot Davranışı', count: 8, color: 'bg-yellow-50 text-yellow-700' },
                { name: 'Şüpheli Lokasyon', count: 12, color: 'bg-purple-50 text-purple-700' },
                { name: 'Hızlı İstek', count: 18, color: 'bg-blue-50 text-blue-700' },
                { name: 'Standart Dışı UA', count: 7, color: 'bg-gray-50 text-gray-700' }
              ].map((flag, index) => (
                <div key={index} className={`p-4 rounded-lg ${flag.color}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{flag.name}</div>
                      <div className="text-sm opacity-75">{flag.count} kullanıcı</div>
                    </div>
                    <Flag className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Security Policies Tab */}
      {activeTab === 'policies' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Güvenlik Politikaları</h3>
            <div className="space-y-6">
              {/* Password Policy */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">Şifre Politikası</h4>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Minimum uzunluk:</span>
                    <span className="ml-2 font-medium">8 karakter</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Büyük harf:</span>
                    <span className="ml-2 font-medium">Zorunlu</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Özel karakter:</span>
                    <span className="ml-2 font-medium">Zorunlu</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Sayı:</span>
                    <span className="ml-2 font-medium">Zorunlu</span>
                  </div>
                </div>
              </div>

              {/* Login Policy */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">Giriş Politikası</h4>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Maksimum deneme:</span>
                    <span className="ml-2 font-medium">5 deneme</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Kilitleme süresi:</span>
                    <span className="ml-2 font-medium">30 dakika</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Oturum süresi:</span>
                    <span className="ml-2 font-medium">24 saat</span>
                  </div>
                  <div>
                    <span className="text-gray-600">2FA:</span>
                    <span className="ml-2 font-medium">Opsiyonel</span>
                  </div>
                </div>
              </div>

              {/* IP Filtering */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">IP Filtreleme</h4>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Otomatik IP engelleme</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Aktif
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Coğrafi kısıtlama</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Kısmi
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">VPN/Proxy algılama</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Aktif
                    </span>
                  </div>
                </div>
              </div>

              {/* Data Protection */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">Veri Koruma</h4>
                  <button className="text-blue-600 hover:text-blue-800">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Veri şifreleme</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      AES-256
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Yedek şifreleme</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Aktif
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">GDPR uyumluluk</span>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Uyumlu
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reports Tab */}
      {activeTab === 'reports' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Güvenlik Raporları</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: 'Günlük Güvenlik Raporu',
                  description: 'Son 24 saatteki güvenlik olayları',
                  lastGenerated: '2024-01-26 06:00',
                  size: '2.3 MB',
                  format: 'PDF'
                },
                {
                  name: 'Haftalık Tehdit Analizi',
                  description: 'Haftalık tehdit trendleri ve analizi',
                  lastGenerated: '2024-01-22 06:00',
                  size: '5.7 MB',
                  format: 'PDF'
                },
                {
                  name: 'Aylık Güvenlik Özeti',
                  description: 'Aylık güvenlik performansı raporu',
                  lastGenerated: '2024-01-01 06:00',
                  size: '12.4 MB',
                  format: 'PDF'
                },
                {
                  name: 'Kullanıcı Aktivite Raporu',
                  description: 'Şüpheli kullanıcı aktiviteleri',
                  lastGenerated: '2024-01-26 06:00',
                  size: '3.8 MB',
                  format: 'Excel'
                },
                {
                  name: 'İncident Raporu',
                  description: 'Güvenlik olayları detay raporu',
                  lastGenerated: '2024-01-25 14:30',
                  size: '1.9 MB',
                  format: 'PDF'
                },
                {
                  name: 'Uyumluluk Raporu',
                  description: 'Güvenlik politikaları uyumluluk',
                  lastGenerated: '2024-01-20 06:00',
                  size: '4.2 MB',
                  format: 'PDF'
                }
              ].map((report, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{report.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div>Son oluşturma: {new Date(report.lastGenerated).toLocaleDateString('tr-TR')}</div>
                    <div>Boyut: {report.size}</div>
                    <div>Format: {report.format}</div>
                  </div>
                  <div className="mt-3 flex items-center space-x-2">
                    <button className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                      <Download className="w-3 h-3" />
                      <span>İndir</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                      <RefreshCw className="w-3 h-3" />
                      <span>Yenile</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Report Schedule */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Otomatik Rapor Programı</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Günlük Güvenlik Raporu</div>
                  <div className="text-sm text-gray-600">Her gün 06:00&apos;da otomatik oluşturulur</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Aktif
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Haftalık Analiz Raporu</div>
                  <div className="text-sm text-gray-600">Her Pazartesi 06:00&apos;da otomatik oluşturulur</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Aktif
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-medium text-gray-900">Aylık Özet Raporu</div>
                  <div className="text-sm text-gray-600">Her ayın 1&apos;inde 06:00&apos;da otomatik oluşturulur</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Aktif
                  </span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminSecurity
