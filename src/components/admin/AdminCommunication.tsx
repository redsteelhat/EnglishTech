'use client'

import React, { useState } from 'react'
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Plus,
  Reply,
  Forward,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  Users,
  Calendar,
  Download,
  Send,
  MoreVertical,
  AlertTriangle,
  Mail,
  Phone,
  Video,
  FileText,
  Image,
  Paperclip,
  Archive,
  Flag,
  Volume2,
  VolumeX,
  Settings,
  UserPlus,
  Zap,
  Bell,
  BellOff,
  Heart,
  Share2,
  Bookmark,
  Tag,
  Mic,
  Camera,
  Smile,
  MapPin,
  Link,
  Info,
  User,
  Edit
} from 'lucide-react'

const AdminCommunication: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'messages' | 'support' | 'announcements' | 'notifications'>('messages')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)

  const conversations = [
    {
      id: 'conv_1',
      type: 'support',
      subject: 'Kurs erişim sorunu',
      participant: 'Ahmet Yılmaz',
      participantEmail: 'ahmet@email.com',
      participantRole: 'student',
      status: 'open',
      priority: 'high',
      category: 'technical',
      lastMessage: 'Kursa erişim sağlayamıyorum, yardım alabilir miyim?',
      lastMessageTime: '2024-01-26 16:30:00',
      createdTime: '2024-01-26 14:15:00',
      assignedTo: 'Destek Ekibi',
      messageCount: 5,
      isUnread: true,
      tags: ['kurs-erişim', 'teknik'],
      attachments: 1
    },
    {
      id: 'conv_2',
      type: 'inquiry',
      subject: 'Öğretmen başvurusu',
      participant: 'Elif Demir',
      participantEmail: 'elif@email.com',
      participantRole: 'teacher',
      status: 'resolved',
      priority: 'medium',
      category: 'application',
      lastMessage: 'Teşekkürler, başvurum onaylandı.',
      lastMessageTime: '2024-01-26 10:45:00',
      createdTime: '2024-01-25 09:20:00',
      assignedTo: 'HR Ekibi',
      messageCount: 8,
      isUnread: false,
      tags: ['öğretmen', 'başvuru'],
      attachments: 3
    },
    {
      id: 'conv_3',
      type: 'complaint',
      subject: 'Ödeme iadesi talebi',
      participant: 'Mehmet Kaya',
      participantEmail: 'mehmet@email.com',
      participantRole: 'student',
      status: 'pending',
      priority: 'high',
      category: 'billing',
      lastMessage: 'Kursun beklediğimden farklı olması sebebiyle iade talep ediyorum.',
      lastMessageTime: '2024-01-26 12:15:00',
      createdTime: '2024-01-26 11:30:00',
      assignedTo: 'Finans Ekibi',
      messageCount: 3,
      isUnread: true,
      tags: ['iade', 'ödeme'],
      attachments: 0
    },
    {
      id: 'conv_4',
      type: 'feedback',
      subject: 'Platform önerisi',
      participant: 'Fatma Öztürk',
      participantEmail: 'fatma@email.com',
      participantRole: 'student',
      status: 'open',
      priority: 'low',
      category: 'suggestion',
      lastMessage: 'Platform için bazı önerilerim var.',
      lastMessageTime: '2024-01-25 15:20:00',
      createdTime: '2024-01-25 15:20:00',
      assignedTo: 'Ürün Ekibi',
      messageCount: 1,
      isUnread: false,
      tags: ['öneri', 'platform'],
      attachments: 0
    }
  ]

  const announcements = [
    {
      id: 'ann_1',
      title: 'Sistem Bakım Duyurusu',
      content: 'Sistem bakım çalışmaları için 28 Ocak 02:00-06:00 arası hizmet kesintisi yaşanacaktır.',
      type: 'maintenance',
      priority: 'high',
      targetAudience: 'all',
      status: 'active',
      publishDate: '2024-01-26 09:00:00',
      expiryDate: '2024-01-28 06:00:00',
      author: 'Sistem Yöneticisi',
      views: 1245,
      isSticky: true
    },
    {
      id: 'ann_2',
      title: 'Yeni Kurs Kategorisi',
      content: 'Business English kategorisine yeni kurslar eklendi.',
      type: 'feature',
      priority: 'medium',
      targetAudience: 'students',
      status: 'active',
      publishDate: '2024-01-25 14:30:00',
      expiryDate: '2024-02-25 14:30:00',
      author: 'Eğitim Ekibi',
      views: 892,
      isSticky: false
    }
  ]

  const notifications = [
    {
      id: 'notif_1',
      type: 'email',
      title: 'Hoşgeldin E-postası',
      content: 'Yeni kullanıcılara gönderilen hoşgeldin e-postası',
      status: 'active',
      trigger: 'user_registration',
      recipients: 'new_users',
      sentCount: 156,
      openRate: 68.5,
      clickRate: 12.3,
      lastSent: '2024-01-26 16:45:00'
    },
    {
      id: 'notif_2',
      type: 'push',
      title: 'Kurs Hatırlatması',
      content: 'Satın alınan kurslar için günlük hatırlatma',
      status: 'active',
      trigger: 'course_purchased',
      recipients: 'course_owners',
      sentCount: 2341,
      openRate: 45.2,
      clickRate: 8.9,
      lastSent: '2024-01-26 17:00:00'
    },
    {
      id: 'notif_3',
      type: 'sms',
      title: 'Ödeme Onayı',
      content: 'Ödeme işlemi tamamlandığında gönderilen SMS',
      status: 'paused',
      trigger: 'payment_success',
      recipients: 'paying_users',
      sentCount: 89,
      openRate: 95.5,
      clickRate: 0,
      lastSent: '2024-01-26 12:30:00'
    }
  ]

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conv.participant.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  const stats = [
    {
      name: 'Aktif Konuşmalar',
      value: conversations.filter(c => c.status === 'open').length,
      change: '+3',
      changeType: 'increase',
      icon: MessageSquare,
      color: 'text-blue-600'
    },
    {
      name: 'Bekleyen Destek',
      value: conversations.filter(c => c.status === 'pending').length,
      change: '+1',
      changeType: 'increase',
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      name: 'Çözümlenen',
      value: conversations.filter(c => c.status === 'resolved').length,
      change: '+8',
      changeType: 'increase',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      name: 'Ortalama Yanıt',
      value: '2.5 saat',
      change: '-0.5h',
      changeType: 'decrease',
      icon: Clock,
      color: 'text-purple-600'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'resolved': return 'bg-green-100 text-green-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Açık'
      case 'pending': return 'Bekliyor'
      case 'resolved': return 'Çözüldü'
      case 'closed': return 'Kapatıldı'
      default: return 'Bilinmiyor'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'support': return <AlertTriangle className="w-4 h-4" />
      case 'inquiry': return <Info className="w-4 h-4" />
      case 'complaint': return <Flag className="w-4 h-4" />
      case 'feedback': return <Heart className="w-4 h-4" />
      default: return <MessageSquare className="w-4 h-4" />
    }
  }

  const handleResolve = (conversationId: string) => {
    console.log(`Resolve conversation: ${conversationId}`)
  }

  const handleAssign = (conversationId: string) => {
    console.log(`Assign conversation: ${conversationId}`)
  }

  const handleClose = (conversationId: string) => {
    console.log(`Close conversation: ${conversationId}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">İletişim Merkezi</h1>
          <p className="text-gray-600 mt-1">Kullanıcı iletişimini yönetin ve destek sağlayın</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Rapor İndir</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Yeni Duyuru</span>
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
                  {stat.change} bu gün
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
        <div className="flex space-x-1">
          {[
            { key: 'messages', label: 'Mesajlar', icon: MessageSquare },
            { key: 'support', label: 'Destek', icon: AlertTriangle },
            { key: 'announcements', label: 'Duyurular', icon: Bell },
            { key: 'notifications', label: 'Bildirimler', icon: Mail }
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
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Konuşma ara..."
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
          <div className="divide-y divide-gray-200">
            {filteredConversations.map((conv) => (
              <div key={conv.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {getTypeIcon(conv.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-gray-900">{conv.subject}</h3>
                        {conv.isUnread && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <User className="w-4 h-4" />
                        <span>{conv.participant}</span>
                        <span>•</span>
                        <span>{conv.participantEmail}</span>
                        <span>•</span>
                        <span>{conv.assignedTo}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{conv.lastMessage}</p>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(conv.status)}`}>
                          {getStatusText(conv.status)}
                        </span>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(conv.priority)}`}>
                          {conv.priority}
                        </span>
                        <div className="flex items-center space-x-1">
                          {conv.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right text-sm text-gray-500">
                      <div>{new Date(conv.lastMessageTime).toLocaleDateString('tr-TR')}</div>
                      <div>{new Date(conv.lastMessageTime).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleResolve(conv.id)}
                        className="p-2 text-green-600 hover:text-green-800 rounded-lg hover:bg-green-50"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleAssign(conv.id)}
                        className="p-2 text-blue-600 hover:text-blue-800 rounded-lg hover:bg-blue-50"
                      >
                        <UserPlus className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Support Tab */}
      {activeTab === 'support' && (
        <div className="space-y-6">
          {/* Support Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Açık Talepler</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">24</p>
                  <p className="text-sm text-red-600 mt-1">+3 son 24 saat</p>
                </div>
                <div className="p-3 rounded-lg bg-red-50">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Çözümlendi</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
                  <p className="text-sm text-green-600 mt-1">+12 son 24 saat</p>
                </div>
                <div className="p-3 rounded-lg bg-green-50">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Ort. Çözüm Süresi</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">2.4h</p>
                  <p className="text-sm text-green-600 mt-1">-0.3h son hafta</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Memnuniyet</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">4.8/5</p>
                  <p className="text-sm text-green-600 mt-1">+0.2 son ay</p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-50">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Support Tickets */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Destek Talepleri</h3>
                  <p className="text-gray-600 mt-1">Aktif destek taleplerini yönetin</p>
                </div>
                <div className="flex items-center space-x-3">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="all">Tüm Talepler</option>
                    <option value="open">Açık</option>
                    <option value="in_progress">İşlemde</option>
                    <option value="resolved">Çözümlendi</option>
                    <option value="closed">Kapatıldı</option>
                  </select>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>Yeni Talep</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Talep ID</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Konu</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Kullanıcı</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Kategori</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Öncelik</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Durum</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">Oluşturma</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-600">İşlemler</th>
                  </tr>
                </thead>
                <tbody>
                  {conversations.filter(conv => conv.type === 'support').map((ticket) => (
                    <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4">
                        <span className="font-mono text-sm text-gray-900">#{ticket.id.split('_')[1]}</span>
                      </td>
                      <td className="p-4">
                        <div className="max-w-xs">
                          <div className="font-medium text-gray-900 truncate">{ticket.subject}</div>
                          <div className="text-sm text-gray-500 truncate">{ticket.lastMessage}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{ticket.participant}</div>
                          <div className="text-sm text-gray-500">{ticket.participantEmail}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {ticket.category}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                          {getStatusText(ticket.status)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-600">
                          {new Date(ticket.createdTime).toLocaleDateString('tr-TR')}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-blue-600 hover:text-blue-800 rounded hover:bg-blue-50">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-green-600 hover:text-green-800 rounded hover:bg-green-50">
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-600 hover:text-gray-800 rounded hover:bg-gray-50">
                            <UserPlus className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Support Categories */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Destek Kategorileri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Teknik Destek', count: 45, color: 'bg-red-50 text-red-700', icon: Settings },
                { name: 'Kurs Erişimi', count: 32, color: 'bg-blue-50 text-blue-700', icon: Video },
                { name: 'Ödeme Sorunları', count: 18, color: 'bg-green-50 text-green-700', icon: Users },
                { name: 'Hesap Yönetimi', count: 25, color: 'bg-yellow-50 text-yellow-700', icon: User },
                { name: 'Genel Sorular', count: 67, color: 'bg-purple-50 text-purple-700', icon: MessageSquare },
                { name: 'Diğer', count: 12, color: 'bg-gray-50 text-gray-700', icon: Info }
              ].map((category, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{category.name}</div>
                    <div className="text-sm text-gray-500">{category.count} talep</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Announcements Tab */}
      {activeTab === 'announcements' && (
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-gray-900">{announcement.title}</h3>
                    {announcement.isSticky && (
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    )}
                  </div>
                  <p className="text-gray-700 mb-4">{announcement.content}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{announcement.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(announcement.publishDate).toLocaleDateString('tr-TR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{announcement.views} görüntülenme</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-600 hover:text-red-800 rounded-lg hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      notification.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {notification.status === 'active' ? 'Aktif' : 'Duraklatıldı'}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{notification.content}</p>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Gönderilen:</span>
                      <div className="font-medium">{notification.sentCount}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Açılma:</span>
                      <div className="font-medium">{notification.openRate}%</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Tıklama:</span>
                      <div className="font-medium">{notification.clickRate}%</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Son gönderim:</span>
                      <div className="font-medium">{new Date(notification.lastSent).toLocaleDateString('tr-TR')}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-blue-600 hover:text-blue-800 rounded-lg hover:bg-blue-50">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminCommunication
