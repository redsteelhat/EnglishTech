'use client'

import React from 'react'
import { BarChart3, TrendingUp, Users, BookOpen, Star, Calendar, Download, Filter } from 'lucide-react'

const TeacherReports: React.FC = () => {
  const reportData = [
    {
      title: 'Öğrenci Performansı',
      value: '85%',
      change: '+5%',
      trend: 'up',
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Kurs Tamamlanma',
      value: '92%',
      change: '+3%',
      trend: 'up',
      icon: BookOpen,
      color: 'text-blue-600'
    },
    {
      title: 'Öğrenci Memnuniyeti',
      value: '4.8/5',
      change: '+0.2',
      trend: 'up',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      title: 'Devam Oranı',
      value: '88%',
      change: '+2%',
      trend: 'up',
      icon: Calendar,
      color: 'text-purple-600'
    }
  ]

  const reports = [
    {
      id: 1,
      title: 'Aylık Performans Raporu',
      description: 'Öğrenci performansları ve kurs istatistikleri',
      date: '2024-01-01',
      type: 'monthly',
      format: 'PDF'
    },
    {
      id: 2,
      title: 'Kurs Tamamlanma Analizi',
      description: 'Kurs tamamlanma oranları ve analizi',
      date: '2024-01-15',
      type: 'analysis',
      format: 'Excel'
    },
    {
      id: 3,
      title: 'Öğrenci Geri Bildirim Raporu',
      description: 'Öğrenci değerlendirmeleri ve öneriler',
      date: '2024-01-10',
      type: 'feedback',
      format: 'PDF'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Raporlar</h1>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filtrele</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Rapor Oluştur</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportData.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{item.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{item.value}</p>
                <p className={`text-sm mt-1 ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {item.change} bu ay
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gray-50">
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Hazır Raporlar</h2>
        <div className="space-y-4">
          {reports.map(report => (
            <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{report.title}</h3>
                  <p className="text-sm text-gray-600">{report.description}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">{report.date}</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {report.format}
                    </span>
                  </div>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                <span>İndir</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeacherReports
