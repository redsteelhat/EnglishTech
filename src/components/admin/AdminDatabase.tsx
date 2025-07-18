'use client'

import React, { useState } from 'react'
import { 
  Database, 
  Search, 
  Filter, 
  Download,
  Upload,
  RefreshCw,
  Play,
  Square,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Settings,
  Trash2,
  Plus,
  Edit,
  Copy,
  FileText,
  Activity,
  TrendingUp,
  TrendingDown,
  Users,
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Server,
  HardDrive,
  Cpu,
  Zap,
  Shield,
  Lock,
  Unlock,
  Key,
  FileCheck,
  FileMinus,
  FileX,
  Archive,
  RotateCcw,
  Save,
  ExternalLink,
  Globe,
  Wifi,
  WifiOff,
  MonitorSpeaker,
  Terminal,
  Code,
  Bug,
  Wrench,
  Gauge,
  Timer,
  Target,
  Layers,
  Table,
  Columns,
  Rows,
  Hash,
  Type,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  MoreVertical,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle as XCircleIcon,
  Loader2,
  CloudDownload,
  CloudUpload,
  FolderOpen,
  FileDown,
  FileUp,
  Maximize2,
  Minimize2,
  PowerOff,
  Power,
  Pause,
  SkipForward,
  SkipBack,
  StopCircle
} from 'lucide-react'

const AdminDatabase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'tables' | 'queries' | 'backups' | 'performance' | 'maintenance'>('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDatabase, setSelectedDatabase] = useState('englishtech_main')

  const databases = [
    {
      id: 'englishtech_main',
      name: 'englishtech_main',
      type: 'PostgreSQL',
      version: '15.2',
      size: '2.3 GB',
      status: 'active',
      connections: 45,
      maxConnections: 100,
      uptime: '15 gün 3 saat',
      lastBackup: '2024-01-26 04:00:00',
      backupStatus: 'success'
    },
    {
      id: 'englishtech_analytics',
      name: 'englishtech_analytics',
      type: 'PostgreSQL',
      version: '15.2',
      size: '850 MB',
      status: 'active',
      connections: 12,
      maxConnections: 50,
      uptime: '15 gün 3 saat',
      lastBackup: '2024-01-26 04:00:00',
      backupStatus: 'success'
    },
    {
      id: 'englishtech_logs',
      name: 'englishtech_logs',
      type: 'PostgreSQL',
      version: '15.2',
      size: '1.2 GB',
      status: 'active',
      connections: 8,
      maxConnections: 25,
      uptime: '15 gün 3 saat',
      lastBackup: '2024-01-26 04:00:00',
      backupStatus: 'success'
    }
  ]

  const tables = [
    {
      name: 'users',
      rows: 15420,
      size: '45.2 MB',
      type: 'Base Table',
      lastModified: '2024-01-26 16:30:00',
      structure: {
        columns: [
          { name: 'id', type: 'UUID', nullable: false, key: 'PRIMARY' },
          { name: 'email', type: 'VARCHAR(255)', nullable: false, key: 'UNIQUE' },
          { name: 'name', type: 'VARCHAR(100)', nullable: false, key: '' },
          { name: 'password', type: 'VARCHAR(255)', nullable: false, key: '' },
          { name: 'role', type: 'ENUM', nullable: false, key: '' },
          { name: 'created_at', type: 'TIMESTAMP', nullable: false, key: '' },
          { name: 'updated_at', type: 'TIMESTAMP', nullable: false, key: '' }
        ]
      }
    },
    {
      name: 'courses',
      rows: 245,
      size: '12.8 MB',
      type: 'Base Table',
      lastModified: '2024-01-26 14:15:00',
      structure: {
        columns: [
          { name: 'id', type: 'UUID', nullable: false, key: 'PRIMARY' },
          { name: 'title', type: 'VARCHAR(200)', nullable: false, key: '' },
          { name: 'description', type: 'TEXT', nullable: true, key: '' },
          { name: 'level', type: 'ENUM', nullable: false, key: '' },
          { name: 'price', type: 'DECIMAL(10,2)', nullable: false, key: '' },
          { name: 'teacher_id', type: 'UUID', nullable: false, key: 'FOREIGN' },
          { name: 'created_at', type: 'TIMESTAMP', nullable: false, key: '' }
        ]
      }
    },
    {
      name: 'enrollments',
      rows: 8934,
      size: '28.5 MB',
      type: 'Base Table',
      lastModified: '2024-01-26 15:45:00',
      structure: {
        columns: [
          { name: 'id', type: 'UUID', nullable: false, key: 'PRIMARY' },
          { name: 'user_id', type: 'UUID', nullable: false, key: 'FOREIGN' },
          { name: 'course_id', type: 'UUID', nullable: false, key: 'FOREIGN' },
          { name: 'enrolled_at', type: 'TIMESTAMP', nullable: false, key: '' },
          { name: 'status', type: 'ENUM', nullable: false, key: '' },
          { name: 'progress', type: 'INTEGER', nullable: false, key: '' }
        ]
      }
    },
    {
      name: 'payments',
      rows: 6721,
      size: '34.2 MB',
      type: 'Base Table',
      lastModified: '2024-01-26 16:00:00',
      structure: {
        columns: [
          { name: 'id', type: 'UUID', nullable: false, key: 'PRIMARY' },
          { name: 'user_id', type: 'UUID', nullable: false, key: 'FOREIGN' },
          { name: 'course_id', type: 'UUID', nullable: false, key: 'FOREIGN' },
          { name: 'amount', type: 'DECIMAL(10,2)', nullable: false, key: '' },
          { name: 'currency', type: 'VARCHAR(3)', nullable: false, key: '' },
          { name: 'status', type: 'ENUM', nullable: false, key: '' },
          { name: 'created_at', type: 'TIMESTAMP', nullable: false, key: '' }
        ]
      }
    },
    {
      name: 'lessons',
      rows: 1845,
      size: '67.3 MB',
      type: 'Base Table',
      lastModified: '2024-01-26 13:30:00',
      structure: {
        columns: [
          { name: 'id', type: 'UUID', nullable: false, key: 'PRIMARY' },
          { name: 'course_id', type: 'UUID', nullable: false, key: 'FOREIGN' },
          { name: 'title', type: 'VARCHAR(200)', nullable: false, key: '' },
          { name: 'content', type: 'TEXT', nullable: true, key: '' },
          { name: 'video_url', type: 'VARCHAR(500)', nullable: true, key: '' },
          { name: 'duration', type: 'INTEGER', nullable: false, key: '' },
          { name: 'order_index', type: 'INTEGER', nullable: false, key: '' }
        ]
      }
    }
  ]

  const backups = [
    {
      id: 'backup_1',
      name: 'daily_backup_2024-01-26',
      database: 'englishtech_main',
      size: '2.1 GB',
      type: 'Full Backup',
      status: 'completed',
      startTime: '2024-01-26 04:00:00',
      endTime: '2024-01-26 04:23:45',
      duration: '23m 45s',
      location: 'AWS S3',
      encrypted: true,
      compression: 'gzip',
      checksum: 'md5:a1b2c3d4e5f6...'
    },
    {
      id: 'backup_2',
      name: 'weekly_backup_2024-01-25',
      database: 'englishtech_main',
      size: '2.0 GB',
      type: 'Full Backup',
      status: 'completed',
      startTime: '2024-01-25 04:00:00',
      endTime: '2024-01-25 04:25:12',
      duration: '25m 12s',
      location: 'AWS S3',
      encrypted: true,
      compression: 'gzip',
      checksum: 'md5:b2c3d4e5f6a7...'
    },
    {
      id: 'backup_3',
      name: 'incremental_backup_2024-01-24',
      database: 'englishtech_main',
      size: '450 MB',
      type: 'Incremental',
      status: 'completed',
      startTime: '2024-01-24 04:00:00',
      endTime: '2024-01-24 04:08:30',
      duration: '8m 30s',
      location: 'AWS S3',
      encrypted: true,
      compression: 'gzip',
      checksum: 'md5:c3d4e5f6a7b8...'
    },
    {
      id: 'backup_4',
      name: 'manual_backup_2024-01-23',
      database: 'englishtech_main',
      size: '1.9 GB',
      type: 'Manual',
      status: 'failed',
      startTime: '2024-01-23 14:30:00',
      endTime: '2024-01-23 14:35:20',
      duration: '5m 20s',
      location: 'Local',
      encrypted: false,
      compression: 'none',
      error: 'Insufficient disk space'
    }
  ]

  const performanceMetrics = [
    {
      name: 'Query Performance',
      value: '2.3ms',
      change: '-12%',
      changeType: 'decrease',
      status: 'good'
    },
    {
      name: 'Connection Pool',
      value: '45/100',
      change: '+5%',
      changeType: 'increase',
      status: 'good'
    },
    {
      name: 'Cache Hit Rate',
      value: '97.2%',
      change: '+0.8%',
      changeType: 'increase',
      status: 'excellent'
    },
    {
      name: 'Disk Usage',
      value: '2.3/10 GB',
      change: '+150MB',
      changeType: 'increase',
      status: 'good'
    }
  ]

  const recentQueries = [
    {
      id: 'query_1',
      sql: 'SELECT * FROM users WHERE created_at >= NOW() - INTERVAL \'24 hours\'',
      duration: '45ms',
      rows: 123,
      status: 'completed',
      timestamp: '2024-01-26 16:45:00',
      user: 'admin@englishtech.com'
    },
    {
      id: 'query_2',
      sql: 'SELECT COUNT(*) FROM enrollments WHERE status = \'active\'',
      duration: '12ms',
      rows: 1,
      status: 'completed',
      timestamp: '2024-01-26 16:30:00',
      user: 'system'
    },
    {
      id: 'query_3',
      sql: 'UPDATE users SET last_login = NOW() WHERE id = $1',
      duration: '8ms',
      rows: 1,
      status: 'completed',
      timestamp: '2024-01-26 16:25:00',
      user: 'api@englishtech.com'
    }
  ]

  const filteredTables = tables.filter(table =>
    table.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const currentDatabase = databases.find(db => db.id === selectedDatabase)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'inactive': return 'bg-gray-100 text-gray-800'
      case 'error': return 'bg-red-100 text-red-800'
      case 'maintenance': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getBackupStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'running': return 'bg-blue-100 text-blue-800'
      case 'failed': return 'bg-red-100 text-red-800'
      case 'scheduled': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPerformanceColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600'
      case 'good': return 'text-blue-600'
      case 'warning': return 'text-yellow-600'
      case 'critical': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const handleRunQuery = (query: string) => {
    console.log(`Running query: ${query}`)
  }

  const handleCreateBackup = () => {
    console.log('Creating backup...')
  }

  const handleRestoreBackup = (backupId: string) => {
    console.log(`Restoring backup: ${backupId}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Veritabanı Yönetimi</h1>
          <p className="text-gray-600 mt-1">Veritabanı operasyonlarını yönetin ve izleyin</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={selectedDatabase}
            onChange={(e) => setSelectedDatabase(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {databases.map(db => (
              <option key={db.id} value={db.id}>{db.name}</option>
            ))}
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <RefreshCw className="w-4 h-4" />
            <span>Yenile</span>
          </button>
          <button 
            onClick={handleCreateBackup}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <CloudDownload className="w-4 h-4" />
            <span>Yedek Al</span>
          </button>
        </div>
      </div>

      {/* Database Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Veritabanı Durumu</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{currentDatabase?.status}</p>
              <p className="text-sm text-gray-500 mt-1">Çalışma süresi: {currentDatabase?.uptime}</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <Database className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Boyut</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{currentDatabase?.size}</p>
              <p className="text-sm text-gray-500 mt-1">Toplam kayıt: {tables.reduce((sum, table) => sum + table.rows, 0).toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <HardDrive className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Bağlantılar</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{currentDatabase?.connections}/{currentDatabase?.maxConnections}</p>
              <p className="text-sm text-gray-500 mt-1">Aktif bağlantı sayısı</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50">
              <Activity className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Son Yedekleme</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {currentDatabase?.backupStatus === 'success' ? 'Başarılı' : 'Hata'}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {currentDatabase?.lastBackup && new Date(currentDatabase.lastBackup).toLocaleDateString('tr-TR')}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50">
              <Archive className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-200 p-1">
        <div className="flex space-x-1 overflow-x-auto">
          {[
            { key: 'overview', label: 'Genel Bakış', icon: Database },
            { key: 'tables', label: 'Tablolar', icon: Table },
            { key: 'queries', label: 'Sorgular', icon: Terminal },
            { key: 'backups', label: 'Yedekler', icon: Archive },
            { key: 'performance', label: 'Performans', icon: Gauge },
            { key: 'maintenance', label: 'Bakım', icon: Settings }
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

      {/* Tables Tab */}
      {activeTab === 'tables' && (
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Tablo ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Plus className="w-4 h-4" />
                <span>Yeni Tablo</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Tablo Adı</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Kayıt Sayısı</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Boyut</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Tip</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">Son Değişiklik</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-600">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {filteredTables.map((table) => (
                  <tr key={table.name} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <Table className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-900">{table.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-gray-900">{table.rows.toLocaleString()}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-gray-900">{table.size}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-gray-600">{table.type}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-gray-600">
                        {new Date(table.lastModified).toLocaleDateString('tr-TR')}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-blue-600 hover:text-blue-800 rounded hover:bg-blue-50">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-gray-800 rounded hover:bg-gray-50">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-gray-800 rounded hover:bg-gray-50">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-red-600 hover:text-red-800 rounded hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
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

      {/* Backups Tab */}
      {activeTab === 'backups' && (
        <div className="space-y-4">
          {backups.map((backup) => (
            <div key={backup.id} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-blue-50">
                    <Archive className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{backup.name}</h3>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Database className="w-4 h-4" />
                        <span>{backup.database}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <HardDrive className="w-4 h-4" />
                        <span>{backup.size}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{backup.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Globe className="w-4 h-4" />
                        <span>{backup.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getBackupStatusColor(backup.status)}`}>
                    {backup.status === 'completed' ? 'Tamamlandı' :
                     backup.status === 'running' ? 'Çalışıyor' :
                     backup.status === 'failed' ? 'Başarısız' :
                     'Zamanlandı'}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => handleRestoreBackup(backup.id)}
                      className="p-2 text-green-600 hover:text-green-800 rounded-lg hover:bg-green-50"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-blue-600 hover:text-blue-800 rounded-lg hover:bg-blue-50">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              {backup.status === 'failed' && backup.error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-red-800">{backup.error}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric) => (
              <div key={metric.name} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                    <p className={`text-sm mt-1 ${metric.changeType === 'increase' ? 'text-orange-600' : 'text-green-600'}`}>
                      {metric.change} son 24 saat
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50">
                    <Gauge className={`w-6 h-6 ${getPerformanceColor(metric.status)}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Sorgular</h3>
            <div className="space-y-3">
              {recentQueries.map((query) => (
                <div key={query.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <code className="text-sm font-mono text-gray-800 bg-white px-2 py-1 rounded">
                      {query.sql}
                    </code>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-600">
                      <span>Süre: {query.duration}</span>
                      <span>Satır: {query.rows}</span>
                      <span>Kullanıcı: {query.user}</span>
                      <span>{new Date(query.timestamp).toLocaleString('tr-TR')}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <button 
                      onClick={() => handleRunQuery(query.sql)}
                      className="p-1 text-blue-600 hover:text-blue-800 rounded hover:bg-blue-50"
                    >
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Other tabs */}
      {!['tables', 'backups', 'performance'].includes(activeTab) && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-center py-8">
            <Database className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeTab === 'overview' && 'Veritabanı Genel Bakış'}
              {activeTab === 'queries' && 'Sorgu Editörü'}
              {activeTab === 'maintenance' && 'Bakım Operasyonları'}
            </h3>
            <p className="text-gray-600">Bu bölüm geliştiriliyor...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDatabase
