'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { 
  Award, 
  Download, 
  Share2, 
  Calendar, 
  Star,
  Trophy,
  Medal,
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  Eye,
  ExternalLink,
  Filter,
  Search,
  Mail,
  Linkedin,
  Facebook,
  Twitter,
  Copy,
  FileText,
  Printer
} from 'lucide-react'

const CertificatesPage: React.FC = () => {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('earned')
  const [shareModal, setShareModal] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

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

  const earnedCertificates = [
    {
      id: 1,
      title: 'Business English Mastery',
      course: 'Business English Mastery',
      instructor: 'Dr. Sarah Johnson',
      issueDate: '15 Kas 2024',
      grade: 'A+',
      score: 96,
      credentialId: 'BE2024-001-096',
      level: 'Intermediate',
      duration: '12 weeks',
      category: 'Business English',
      skills: ['Business Communication', 'Presentation Skills', 'Negotiation', 'Email Writing'],
      verificationUrl: 'https://englishtech.com/verify/BE2024-001-096',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Grammar Fundamentals',
      course: 'Grammar Fundamentals',
      instructor: 'Prof. Michael Brown',
      issueDate: '8 Kas 2024',
      grade: 'A',
      score: 89,
      credentialId: 'GF2024-002-089',
      level: 'Beginner',
      duration: '8 weeks',
      category: 'Grammar',
      skills: ['Sentence Structure', 'Tenses', 'Parts of Speech', 'Punctuation'],
      verificationUrl: 'https://englishtech.com/verify/GF2024-002-089',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'IELTS Preparation Certificate',
      course: 'IELTS Preparation',
      instructor: 'David Chen',
      issueDate: '1 Kas 2024',
      grade: 'A',
      score: 88,
      credentialId: 'IELTS2024-003-088',
      level: 'Intermediate',
      duration: '16 weeks',
      category: 'Test Preparation',
      skills: ['Reading Comprehension', 'Writing Tasks', 'Speaking Practice', 'Listening Skills'],
      verificationUrl: 'https://englishtech.com/verify/IELTS2024-003-088',
      image: '/api/placeholder/300/200'
    }
  ]

  const availableCertificates = [
    {
      id: 4,
      title: 'Advanced Conversation',
      course: 'Advanced Conversation',
      instructor: 'Emma Wilson',
      progress: 75,
      totalLessons: 20,
      completedLessons: 15,
      estimatedCompletion: '25 Ara 2024',
      level: 'Advanced',
      category: 'Speaking',
      requirements: ['Complete all 20 lessons', 'Pass final speaking test', 'Achieve 85% average score']
    },
    {
      id: 5,
      title: 'Academic Writing Excellence',
      course: 'Academic Writing Excellence',
      instructor: 'Dr. Lisa Anderson',
      progress: 0,
      totalLessons: 18,
      completedLessons: 0,
      estimatedCompletion: 'Henüz başlanmadı',
      level: 'Advanced',
      category: 'Writing',
      requirements: ['Complete all 18 lessons', 'Submit 5 writing assignments', 'Achieve 80% average score']
    }
  ]

  const filteredEarned = earnedCertificates.filter(cert => 
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'text-green-600 bg-green-100'
      case 'A': return 'text-green-600 bg-green-100'
      case 'B+': return 'text-blue-600 bg-blue-100'
      case 'B': return 'text-blue-600 bg-blue-100'
      case 'C+': return 'text-yellow-600 bg-yellow-100'
      case 'C': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const handleShare = (certificateId: number) => {
    setShareModal(certificateId)
  }

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url)
    // Show success message
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Sertifikalarım</h1>
              <p className="text-yellow-100">
                Kazandığın başarılar ve sertifikaların
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Kazanılan Sertifikalar</p>
                <p className="text-2xl font-bold text-gray-900">{earnedCertificates.length}</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Ortalama Puan</p>
                <p className="text-2xl font-bold text-gray-900">91%</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Devam Eden</p>
                <p className="text-2xl font-bold text-gray-900">{availableCertificates.length}</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Toplam Saat</p>
                <p className="text-2xl font-bold text-gray-900">36</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl border border-gray-200">
          <div className="border-b border-gray-200">
            <div className="flex items-center justify-between p-6">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('earned')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'earned'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Kazanılan Sertifikalar ({earnedCertificates.length})
                </button>
                <button
                  onClick={() => setActiveTab('available')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'available'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Devam Eden ({availableCertificates.length})
                </button>
              </nav>
              
              {activeTab === 'earned' && (
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Sertifika ara..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'earned' && (
              <div className="space-y-6">
                {filteredEarned.map((certificate) => (
                  <div key={certificate.id} className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{certificate.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{certificate.instructor}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {certificate.issueDate}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {certificate.duration}
                            </span>
                            <span className="flex items-center">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {certificate.level}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(certificate.grade)}`}>
                          {certificate.grade} ({certificate.score}%)
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Kazanılan Beceriler:</h4>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.map((skill, index) => (
                          <span key={index} className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Kimlik No:</span> {certificate.credentialId}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                          <Download className="w-4 h-4" />
                          <span>İndir</span>
                        </button>
                        <button 
                          onClick={() => handleShare(certificate.id)}
                          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                          <span>Paylaş</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                          <Eye className="w-4 h-4" />
                          <span>Görüntüle</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'available' && (
              <div className="space-y-6">
                {availableCertificates.map((certificate) => (
                  <div key={certificate.id} className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg flex items-center justify-center">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{certificate.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{certificate.instructor}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <BookOpen className="w-4 h-4 mr-1" />
                              {certificate.level}
                            </span>
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {certificate.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">{certificate.progress}%</div>
                        <div className="text-sm text-gray-500">Tamamlandı</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">İlerleme</span>
                        <span className="text-sm font-medium text-gray-900">
                          {certificate.completedLessons}/{certificate.totalLessons} Ders
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${certificate.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Sertifika Gereksinimleri:</h4>
                      <ul className="space-y-1">
                        {certificate.requirements.map((req, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Tahmini Tamamlanma:</span> {certificate.estimatedCompletion}
                      </div>
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        Kursa Devam Et
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Share Modal */}
        {shareModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sertifikayı Paylaş</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Doğrulama Linki
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={earnedCertificates.find(c => c.id === shareModal)?.verificationUrl || ''}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                    />
                    <button
                      onClick={() => handleCopyLink(earnedCertificates.find(c => c.id === shareModal)?.verificationUrl || '')}
                      className="px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sosyal Medyada Paylaş
                  </label>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 mt-6">
                <button
                  onClick={() => setShareModal(null)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  İptal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default CertificatesPage
