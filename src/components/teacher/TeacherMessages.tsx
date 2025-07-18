'use client'

import React from 'react'
import { MessageSquare, Users, Mail, Phone, Search, Plus, Filter } from 'lucide-react'

const TeacherMessages: React.FC = () => {
  const messages = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      message: 'Ödevim hakkında soru sormak istiyorum',
      time: '2 saat önce',
      unread: true,
      avatar: 'AY'
    },
    {
      id: 2,
      name: 'Zeynep Kara',
      message: 'Teşekkür ederim, çok yardımcı oldu',
      time: '5 saat önce',
      unread: false,
      avatar: 'ZK'
    },
    {
      id: 3,
      name: 'Mehmet Demir',
      message: 'Yarınki ders iptal edildi mi?',
      time: '1 gün önce',
      unread: true,
      avatar: 'MD'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Mesajlar</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Yeni Mesaj</span>
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Mesaj ara..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {messages.map(message => (
            <div key={message.id} className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{message.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">{message.name}</h3>
                    <span className="text-sm text-gray-500">{message.time}</span>
                  </div>
                  <p className={`text-sm ${message.unread ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                    {message.message}
                  </p>
                </div>
                {message.unread && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeacherMessages
