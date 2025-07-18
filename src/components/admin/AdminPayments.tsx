'use client'

import React, { useState } from 'react'
import { 
  DollarSign, 
  Search, 
  Filter, 
  Plus,
  Edit,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  CreditCard,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  Upload,
  MoreVertical,
  AlertTriangle,
  RefreshCw,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Banknote,
  Wallet,
  Receipt,
  FileText,
  Shield,
  Activity,
  Target
} from 'lucide-react'

const AdminPayments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'pending' | 'failed' | 'refunded'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [dateRange, setDateRange] = useState('7')

  const payments = [
    {
      id: 'pay_1',
      transactionId: 'TXN-2024-001234',
      student: 'Ahmet Yılmaz',
      studentEmail: 'ahmet@email.com',
      course: 'Business English Mastery',
      instructor: 'James Thompson',
      amount: 299,
      currency: 'TRY',
      commission: 44.85,
      instructorEarning: 254.15,
      status: 'completed',
      paymentMethod: 'credit_card',
      paymentProvider: 'stripe',
      date: '2024-01-26 14:30:00',
      completedDate: '2024-01-26 14:30:15',
      refundDate: null,
      refundAmount: null,
      refundReason: null,
      cardLast4: '4532',
      cardBrand: 'visa',
      isRecurring: false,
      subscriptionId: null,
      country: 'TR',
      riskScore: 'low',
      fraudCheck: 'passed',
      invoiceNumber: 'INV-2024-001234',
      receiptUrl: '/receipts/pay_1.pdf'
    },
    {
      id: 'pay_2',
      transactionId: 'TXN-2024-001235',
      student: 'Elif Demir',
      studentEmail: 'elif@email.com',
      course: 'IELTS Preparation Intensive',
      instructor: 'Dr. Elif Özkan',
      amount: 399,
      currency: 'TRY',
      commission: 59.85,
      instructorEarning: 339.15,
      status: 'pending',
      paymentMethod: 'credit_card',
      paymentProvider: 'iyzico',
      date: '2024-01-26 16:45:00',
      completedDate: null,
      refundDate: null,
      refundAmount: null,
      refundReason: null,
      cardLast4: '1234',
      cardBrand: 'mastercard',
      isRecurring: false,
      subscriptionId: null,
      country: 'TR',
      riskScore: 'medium',
      fraudCheck: 'reviewing',
      invoiceNumber: null,
      receiptUrl: null,
      pendingReason: 'Banka onayı bekleniyor'
    },
    {
      id: 'pay_3',
      transactionId: 'TXN-2024-001236',
      student: 'Mehmet Kaya',
      studentEmail: 'mehmet@email.com',
      course: 'Everyday English Conversation',
      instructor: 'Ayşe Demir',
      amount: 199,
      currency: 'TRY',
      commission: 29.85,
      instructorEarning: 169.15,
      status: 'failed',
      paymentMethod: 'credit_card',
      paymentProvider: 'stripe',
      date: '2024-01-26 12:15:00',
      completedDate: null,
      refundDate: null,
      refundAmount: null,
      refundReason: null,
      cardLast4: '5678',
      cardBrand: 'visa',
      isRecurring: false,
      subscriptionId: null,
      country: 'TR',
      riskScore: 'high',
      fraudCheck: 'failed',
      invoiceNumber: null,
      receiptUrl: null,
      failureReason: 'Yetersiz bakiye'
    },
    {
      id: 'pay_4',
      transactionId: 'TXN-2024-001237',
      student: 'Fatma Öztürk',
      studentEmail: 'fatma@email.com',
      course: 'Business English Mastery',
      instructor: 'James Thompson',
      amount: 299,
      currency: 'TRY',
      commission: 44.85,
      instructorEarning: 254.15,
      status: 'refunded',
      paymentMethod: 'credit_card',
      paymentProvider: 'stripe',
      date: '2024-01-25 10:20:00',
      completedDate: '2024-01-25 10:20:12',
      refundDate: '2024-01-26 09:30:00',
      refundAmount: 299,
      refundReason: 'Müşteri talebi',
      cardLast4: '9876',
      cardBrand: 'mastercard',
      isRecurring: false,
      subscriptionId: null,
      country: 'TR',
      riskScore: 'low',
      fraudCheck: 'passed',
      invoiceNumber: 'INV-2024-001237',
      receiptUrl: '/receipts/pay_4.pdf'
    },
    {
      id: 'pay_5',
      transactionId: 'TXN-2024-001238',
      student: 'Can Yıldız',
      studentEmail: 'can@email.com',
      course: 'Advanced Grammar Workshop',
      instructor: 'Unknown Teacher',
      amount: 149,
      currency: 'TRY',
      commission: 22.35,
      instructorEarning: 126.65,
      status: 'completed',
      paymentMethod: 'bank_transfer',
      paymentProvider: 'local_bank',
      date: '2024-01-25 15:45:00',
      completedDate: '2024-01-25 16:00:00',
      refundDate: null,
      refundAmount: null,
      refundReason: null,
      cardLast4: null,
      cardBrand: null,
      isRecurring: false,
      subscriptionId: null,
      country: 'TR',
      riskScore: 'low',
      fraudCheck: 'passed',
      invoiceNumber: 'INV-2024-001238',
      receiptUrl: '/receipts/pay_5.pdf'
    },
    {
      id: 'pay_6',
      transactionId: 'TXN-2024-001239',
      student: 'Zeynep Ay',
      studentEmail: 'zeynep@email.com',
      course: 'Monthly Premium Plan',
      instructor: 'Multiple',
      amount: 79,
      currency: 'TRY',
      commission: 11.85,
      instructorEarning: 67.15,
      status: 'completed',
      paymentMethod: 'credit_card',
      paymentProvider: 'stripe',
      date: '2024-01-26 08:00:00',
      completedDate: '2024-01-26 08:00:05',
      refundDate: null,
      refundAmount: null,
      refundReason: null,
      cardLast4: '3456',
      cardBrand: 'visa',
      isRecurring: true,
      subscriptionId: 'sub_123456',
      country: 'TR',
      riskScore: 'low',
      fraudCheck: 'passed',
      invoiceNumber: 'INV-2024-001239',
      receiptUrl: '/receipts/pay_6.pdf'
    }
  ]

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.studentEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === 'all' || payment.status === activeTab
    return matchesSearch && matchesTab
  })

  const stats = [
    {
      name: 'Toplam Gelir',
      value: `₺${payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.amount, 0).toLocaleString()}`,
      change: '+12.5%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      name: 'Aylık Gelir',
      value: `₺${payments.filter(p => p.status === 'completed' && new Date(p.date).getMonth() === new Date().getMonth()).reduce((sum, p) => sum + p.amount, 0).toLocaleString()}`,
      change: '+8.2%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      name: 'Bekleyen Ödeme',
      value: `₺${payments.filter(p => p.status === 'pending').reduce((sum, p) => sum + p.amount, 0).toLocaleString()}`,
      change: '+2',
      changeType: 'neutral',
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      name: 'Komisyon',
      value: `₺${payments.filter(p => p.status === 'completed').reduce((sum, p) => sum + p.commission, 0).toLocaleString()}`,
      change: '+15.3%',
      changeType: 'increase',
      icon: Receipt,
      color: 'text-purple-600'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'failed': return 'bg-red-100 text-red-800'
      case 'refunded': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Tamamlandı'
      case 'pending': return 'Bekliyor'
      case 'failed': return 'Başarısız'
      case 'refunded': return 'İade Edildi'
      default: return 'Bilinmiyor'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />
      case 'pending': return <Clock className="w-4 h-4" />
      case 'failed': return <XCircle className="w-4 h-4" />
      case 'refunded': return <RefreshCw className="w-4 h-4" />
      default: return <AlertTriangle className="w-4 h-4" />
    }
  }

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'credit_card': return <CreditCard className="w-4 h-4" />
      case 'bank_transfer': return <Banknote className="w-4 h-4" />
      case 'wallet': return <Wallet className="w-4 h-4" />
      default: return <DollarSign className="w-4 h-4" />
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-600'
      case 'medium': return 'text-yellow-600'
      case 'high': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const handleRefund = (paymentId: string) => {
    console.log(`Refund payment: ${paymentId}`)
  }

  const handleApprove = (paymentId: string) => {
    console.log(`Approve payment: ${paymentId}`)
  }

  const handleReject = (paymentId: string) => {
    console.log(`Reject payment: ${paymentId}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Ödeme Yönetimi</h1>
          <p className="text-gray-600 mt-1">Tüm ödemeleri izleyin ve yönetin</p>
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
            <Download className="w-4 h-4" />
            <span>Rapor İndir</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            <span>Manuel Ödeme</span>
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
                <p className={`text-sm mt-1 flex items-center ${stat.changeType === 'increase' ? 'text-green-600' : stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'}`}>
                  {stat.changeType === 'increase' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : 
                   stat.changeType === 'decrease' ? <ArrowDownRight className="w-4 h-4 mr-1" /> : null}
                  {stat.change}
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
                placeholder="Ödeme ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filtrele</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {[
                { key: 'all', label: 'Tümü', count: payments.length },
                { key: 'completed', label: 'Tamamlanan', count: payments.filter(p => p.status === 'completed').length },
                { key: 'pending', label: 'Bekleyen', count: payments.filter(p => p.status === 'pending').length },
                { key: 'failed', label: 'Başarısız', count: payments.filter(p => p.status === 'failed').length },
                { key: 'refunded', label: 'İade', count: payments.filter(p => p.status === 'refunded').length }
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

      {/* Payments Table */}
      <div className="bg-white rounded-xl border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-6 text-sm font-medium text-gray-600">Ödeme</th>
                <th className="text-left p-6 text-sm font-medium text-gray-600">Öğrenci</th>
                <th className="text-left p-6 text-sm font-medium text-gray-600">Kurs</th>
                <th className="text-left p-6 text-sm font-medium text-gray-600">Tutar</th>
                <th className="text-left p-6 text-sm font-medium text-gray-600">Durum</th>
                <th className="text-left p-6 text-sm font-medium text-gray-600">Risk</th>
                <th className="text-left p-6 text-sm font-medium text-gray-600">Tarih</th>
                <th className="text-left p-6 text-sm font-medium text-gray-600">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        {getPaymentMethodIcon(payment.paymentMethod)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{payment.transactionId}</div>
                        <div className="text-sm text-gray-500">
                          {payment.paymentMethod === 'credit_card' && payment.cardBrand && payment.cardLast4 && (
                            <span className="capitalize">{payment.cardBrand} •••• {payment.cardLast4}</span>
                          )}
                          {payment.paymentMethod === 'bank_transfer' && (
                            <span>Banka Havalesi</span>
                          )}
                          {payment.isRecurring && (
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              Yinelenen
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div>
                      <div className="font-medium text-gray-900">{payment.student}</div>
                      <div className="text-sm text-gray-500">{payment.studentEmail}</div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{payment.course}</div>
                      <div className="text-sm text-gray-500">{payment.instructor}</div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div>
                      <div className="font-medium text-gray-900">₺{payment.amount}</div>
                      <div className="text-sm text-gray-500">
                        Komisyon: ₺{payment.commission}
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                      {getStatusIcon(payment.status)}
                      <span className="ml-1">{getStatusText(payment.status)}</span>
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center space-x-2">
                      <Shield className={`w-4 h-4 ${getRiskColor(payment.riskScore)}`} />
                      <span className={`text-sm capitalize ${getRiskColor(payment.riskScore)}`}>
                        {payment.riskScore}
                      </span>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="text-sm text-gray-900">
                      {new Date(payment.date).toLocaleDateString('tr-TR')}
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(payment.date).toLocaleTimeString('tr-TR', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                        <Eye className="w-4 h-4" />
                      </button>
                      {payment.status === 'completed' && (
                        <button
                          onClick={() => handleRefund(payment.id)}
                          className="p-2 text-blue-600 hover:text-blue-800 rounded-lg hover:bg-blue-50"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      )}
                      {payment.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleApprove(payment.id)}
                            className="p-2 text-green-600 hover:text-green-800 rounded-lg hover:bg-green-50"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleReject(payment.id)}
                            className="p-2 text-red-600 hover:text-red-800 rounded-lg hover:bg-red-50"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      {payment.receiptUrl && (
                        <button className="p-2 text-purple-600 hover:text-purple-800 rounded-lg hover:bg-purple-50">
                          <Download className="w-4 h-4" />
                        </button>
                      )}
                      <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
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

      {/* Empty State */}
      {filteredPayments.length === 0 && (
        <div className="text-center py-12">
          <DollarSign className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Ödeme bulunamadı</h3>
          <p className="text-gray-600 mb-4">Arama kriterlerinize uygun ödeme bulunamadı.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Filtreleri Temizle
          </button>
        </div>
      )}
    </div>
  )
}

export default AdminPayments
