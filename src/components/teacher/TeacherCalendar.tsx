'use client'

import React from 'react'
import { Calendar, Clock, Plus, Bell, MessageSquare, Users, Video, BookOpen } from 'lucide-react'

const TeacherCalendar: React.FC = () => {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()
  
  const events = [
    {
      id: 1,
      title: 'Business English - Presentations',
      time: '14:00 - 15:00',
      date: '2024-01-20',
      type: 'lesson',
      students: 24,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'IELTS Speaking Practice',
      time: '16:00 - 17:30',
      date: '2024-01-20',
      type: 'workshop',
      students: 15,
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Grammar Review',
      time: '10:00 - 10:45',
      date: '2024-01-21',
      type: 'review',
      students: 32,
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Takvim</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Yeni Etkinlik</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {today.toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' })}
              </h2>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-50">Önceki</button>
                <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-50">Sonraki</button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(day => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }, (_, i) => {
                const date = new Date(currentYear, currentMonth, i - 6)
                const isToday = date.toDateString() === today.toDateString()
                const isCurrentMonth = date.getMonth() === currentMonth
                
                return (
                  <div
                    key={i}
                    className={`p-2 text-center text-sm cursor-pointer rounded-md hover:bg-gray-50 ${
                      isToday ? 'bg-blue-600 text-white' : 
                      isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                    }`}
                  >
                    {date.getDate()}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Yaklaşan Etkinlikler</h3>
            <div className="space-y-3">
              {events.map(event => (
                <div key={event.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50">
                  <div className={`w-3 h-3 rounded-full ${event.color}`} />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                    <p className="text-xs text-gray-500">{event.time}</p>
                    <p className="text-xs text-gray-500">{event.students} öğrenci</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı Eylemler</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50">
                <Video className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Yeni Canlı Ders</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50">
                <BookOpen className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Kurs Planla</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Mesaj Gönder</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherCalendar
