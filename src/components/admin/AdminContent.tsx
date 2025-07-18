'use client'

import React, { useState } from 'react'
import { 
  FileText, 
  Search, 
  Filter, 
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Globe,
  Users,
  Calendar,
  Download,
  Upload,
  MoreVertical,
  AlertTriangle,
  Image,
  Video,
  File,
  Megaphone,
  Star,
  Tag,
  Bookmark,
  Share2,
  Copy,
  Archive,
  RefreshCw,
  Settings,
  Layout,
  Type,
  Palette,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react'

const AdminContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'published' | 'draft' | 'archived'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [contentType, setContentType] = useState('all')

  const content = [
    {
      id: 'content_1',
      title: 'Hoşgeldin Mesajı - Ana Sayfa',
      type: 'page',
      category: 'homepage',
      status: 'published',
      author: 'Admin',
      createdDate: '2024-01-15',
      updatedDate: '2024-01-26',
      publishedDate: '2024-01-15',
      views: 12456,
      language: 'tr',
      slug: 'welcome-message',
      description: 'Ana sayfa karşılama mesajı ve genel bilgiler',
      content: 'EnglishTech ailesine hoş geldiniz! Modern İngilizce eğitimi...',
      tags: ['ana-sayfa', 'karşılama', 'genel'],
      featured: true,
      seoTitle: 'EnglishTech - Modern İngilizce Eğitimi',
      seoDescription: 'En iyi İngilizce kursları ile hedeflerinize ulaşın',
      imageUrl: '/images/welcome-hero.jpg',
      videoUrl: null,
      isActive: true
    },
    {
      id: 'content_2',
      title: 'Kurs Kategorileri Açıklaması',
      type: 'section',
      category: 'courses',
      status: 'published',
      author: 'Content Editor',
      createdDate: '2024-01-20',
      updatedDate: '2024-01-25',
      publishedDate: '2024-01-20',
      views: 8934,
      language: 'tr',
      slug: 'course-categories',
      description: 'Kurs kategorileri ve detayları',
      content: 'Farklı seviyeler için özel olarak tasarlanmış kurslarımız...',
      tags: ['kurslar', 'kategoriler', 'açıklama'],
      featured: false,
      seoTitle: 'İngilizce Kurs Kategorileri',
      seoDescription: 'Tüm seviyeler için İngilizce kursları',
      imageUrl: '/images/courses-overview.jpg',
      videoUrl: null,
      isActive: true
    },
    {
      id: 'content_3',
      title: 'Yeni Özellikler Duyurusu',
      type: 'announcement',
      category: 'news',
      status: 'draft',
      author: 'Marketing Team',
      createdDate: '2024-01-26',
      updatedDate: '2024-01-26',
      publishedDate: null,
      views: 0,
      language: 'tr',
      slug: 'new-features-announcement',
      description: 'Platformdaki yeni özellikler hakkında duyuru',
      content: 'Heyecan verici yeni özelliklerimizi tanıtmaktan mutluluk duyuyoruz...',
      tags: ['duyuru', 'özellikler', 'güncelleme'],
      featured: true,
      seoTitle: 'Yeni Özellikler - EnglishTech',
      seoDescription: 'Platformımızdaki yeni özellikler hakkında bilgi alın',
      imageUrl: '/images/new-features.jpg',
      videoUrl: '/videos/features-demo.mp4',
      isActive: false
    },
    {
      id: 'content_4',
      title: 'Gizlilik Politikası',
      type: 'legal',
      category: 'legal',
      status: 'published',
      author: 'Legal Team',
      createdDate: '2023-12-01',
      updatedDate: '2024-01-10',
      publishedDate: '2023-12-01',
      views: 3456,
      language: 'tr',
      slug: 'privacy-policy',
      description: 'Kullanıcı gizlilik politikası',
      content: 'Bu gizlilik politikası, kişisel verilerinizin nasıl toplandığını...',
      tags: ['gizlilik', 'politika', 'yasal'],
      featured: false,
      seoTitle: 'Gizlilik Politikası - EnglishTech',
      seoDescription: 'Kişisel verilerinizin korunması hakkında bilgi',
      imageUrl: null,
      videoUrl: null,
      isActive: true
    },
    {
      id: 'content_5',
      title: 'Başarı Hikayeleri',
      type: 'testimonial',
      category: 'social-proof',
      status: 'published',
      author: 'Content Editor',
      createdDate: '2024-01-18',
      updatedDate: '2024-01-24',
      publishedDate: '2024-01-18',
      views: 6789,
      language: 'tr',
      slug: 'success-stories',
      description: 'Öğrenci başarı hikayeleri ve testimonial',
      content: 'Öğrencilerimizin başarı hikayelerini sizlerle paylaşıyoruz...',
      tags: ['başarı', 'hikayeler', 'testimonial'],
      featured: true,
      seoTitle: 'Başarı Hikayeleri - EnglishTech',
      seoDescription: 'Öğrencilerimizin başarı hikayelerini okuyun',
      imageUrl: '/images/success-stories.jpg',
      videoUrl: null,
      isActive: true
    },
    {
      id: 'content_6',
      title: 'Eski Blog Yazısı',
      type: 'blog',
      category: 'blog',
      status: 'archived',
      author: 'Blog Writer',
      createdDate: '2023-08-15',
      updatedDate: '2023-08-20',
      publishedDate: '2023-08-15',
      views: 2341,
      language: 'tr',
      slug: 'old-blog-post',
      description: 'Arşivlenmiş eski blog yazısı',
      content: 'Bu yazı artık güncel değil ve arşivlenmiştir...',
      tags: ['blog', 'eski', 'arşiv'],
      featured: false,
      seoTitle: 'Eski Blog Yazısı',
      seoDescription: 'Arşivlenmiş içerik',
      imageUrl: null,
      videoUrl: null,
      isActive: false
    }
  ]

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesTab = activeTab === 'all' || item.status === activeTab
    const matchesType = contentType === 'all' || item.type === contentType
    return matchesSearch && matchesTab && matchesType
  })

  const stats = [
    {
      name: 'Toplam İçerik',
      value: content.length,
      change: '+3',
      changeType: 'increase',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      name: 'Yayınlanan',
      value: content.filter(c => c.status === 'published').length,
      change: '+1',
      changeType: 'increase',
      icon: Globe,
      color: 'text-green-600'
    },
    {
      name: 'Taslak',
      value: content.filter(c => c.status === 'draft').length,
      change: '+2',
      changeType: 'increase',
      icon: Edit,
      color: 'text-yellow-600'
    },
    {
      name: 'Toplam Görüntülenme',
      value: content.reduce((sum, c) => sum + c.views, 0).toLocaleString(),
      change: '+1.2k',
      changeType: 'increase',
      icon: Eye,
      color: 'text-purple-600'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800'
      case 'draft': return 'bg-yellow-100 text-yellow-800'
      case 'archived': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return 'Yayınlandı'
      case 'draft': return 'Taslak'
      case 'archived': return 'Arşivlendi'
      default: return 'Bilinmiyor'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published': return <Globe className="w-4 h-4" />
      case 'draft': return <Edit className="w-4 h-4" />
      case 'archived': return <Archive className="w-4 h-4" />
      default: return <FileText className="w-4 h-4" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page': return <Layout className="w-4 h-4" />
      case 'section': return <Type className="w-4 h-4" />
      case 'announcement': return <Megaphone className="w-4 h-4" />
      case 'legal': return <File className="w-4 h-4" />
      case 'testimonial': return <Star className="w-4 h-4" />
      case 'blog': return <FileText className="w-4 h-4" />
      default: return <FileText className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page': return 'bg-blue-100 text-blue-800'
      case 'section': return 'bg-purple-100 text-purple-800'
      case 'announcement': return 'bg-orange-100 text-orange-800'
      case 'legal': return 'bg-gray-100 text-gray-800'
      case 'testimonial': return 'bg-yellow-100 text-yellow-800'
      case 'blog': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handlePublish = (contentId: string) => {
    console.log(`Publish content: ${contentId}`)
  }

  const handleArchive = (contentId: string) => {
    console.log(`Archive content: ${contentId}`)
  }

  const handleDelete = (contentId: string) => {
    console.log(`Delete content: ${contentId}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">İçerik Yönetimi</h1>
          <p className="text-gray-600 mt-1">Site içeriklerini yönetin ve güncelleyin</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="w-4 h-4" />
            <span>İçerik İçe Aktar</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span>İçerik Dışa Aktar</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Yeni İçerik</span>
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

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="İçerik ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
              />
            </div>
            <select 
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Tüm Türler</option>
              <option value="page">Sayfa</option>
              <option value="section">Bölüm</option>
              <option value="announcement">Duyuru</option>
              <option value="legal">Yasal</option>
              <option value="testimonial">Testimonial</option>
              <option value="blog">Blog</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {[
                { key: 'all', label: 'Tümü', count: content.length },
                { key: 'published', label: 'Yayınlanan', count: content.filter(c => c.status === 'published').length },
                { key: 'draft', label: 'Taslak', count: content.filter(c => c.status === 'draft').length },
                { key: 'archived', label: 'Arşivlenen', count: content.filter(c => c.status === 'archived').length }
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

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredContent.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {getTypeIcon(item.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.author}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {item.featured && (
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  )}
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-3">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                  {getStatusIcon(item.status)}
                  <span className="ml-1">{getStatusText(item.status)}</span>
                </span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                  {getTypeIcon(item.type)}
                  <span className="ml-1 capitalize">{item.type}</span>
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{item.views.toLocaleString()} görüntülenme</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{item.updatedDate}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  {item.status === 'draft' && (
                    <button
                      onClick={() => handlePublish(item.id)}
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                    >
                      Yayınla
                    </button>
                  )}
                  {item.status === 'published' && (
                    <button
                      onClick={() => handleArchive(item.id)}
                      className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-md hover:bg-yellow-700 transition-colors"
                    >
                      Arşivle
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-red-600 hover:text-red-800 rounded-lg hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">İçerik bulunamadı</h3>
          <p className="text-gray-600 mb-4">Arama kriterlerinize uygun içerik bulunamadı.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Yeni İçerik Ekle
          </button>
        </div>
      )}
    </div>
  )
}

export default AdminContent
