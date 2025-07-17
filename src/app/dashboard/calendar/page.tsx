'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { 
  Calendar, 
  Clock, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Users,
  Video,
  BookOpen,
  Bell,
  Edit3,
  Trash2,
  MoreHorizontal,
  Filter,
  Search,
  Eye,
  AlertCircle,
  CheckCircle,
  X
} from 'lucide-react'

const CalendarPage: React.FC = () => {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [view, setView] = useState<'month' | 'week' | 'day'>('month')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showEventModal, setShowEventModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [filterType, setFilterType] = useState('all')

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

  const events = [
    {
      id: 1,
      title: 'Business English: Presentation Skills',
      type: 'live-lesson',
      date: '2024-12-15',
      time: '15:00',
      duration: 60,
      instructor: 'Dr. Sarah Johnson',
      location: 'Online',
      participants: 12,
      maxParticipants: 20,
      description: 'Etkili sunum yapma teknikleri ve iş dünyasında kullanılacak ifadeler.',
      status: 'confirmed',
      reminder: true
    },
    {
      id: 2,
      title: 'Grammar Workshop: Past Tenses',
      type: 'workshop',
      date: '2024-12-16',
      time: '10:00',
      duration: 45,
      instructor: 'Prof. Michael Brown',
      location: 'Online',
      participants: 8,
      maxParticipants: 15,
      description: 'Geçmiş zamanların detaylı incelenmesi ve pratik uygulamaları.',
      status: 'confirmed',
      reminder: true
    },
    {
      id: 3,
      title: 'IELTS Speaking Test',
      type: 'exam',
      date: '2024-12-17',
      time: '14:00',
      duration: 120,
      instructor: 'David Chen',
      location: 'Test Center',
      participants: 1,
      maxParticipants: 1,
      description: 'IELTS konuşma sınavı',
      status: 'confirmed',
      reminder: true
    },
    {
      id: 4,
      title: 'Weekly Speaking Practice',
      type: 'practice',
      date: '2024-12-18',
      time: '16:30',
      duration: 90,
      instructor: 'Emma Wilson',
      location: 'Online',
      participants: 15,
      maxParticipants: 25,
      description: 'Haftalık konuşma pratiği ve grup çalışması',
      status: 'confirmed',
      reminder: false
    },
    {
      id: 5,
      title: 'Business Vocabulary Session',
      type: 'lesson',
      date: '2024-12-19',
      time: '11:00',
      duration: 60,
      instructor: 'Dr. Sarah Johnson',
      location: 'Online',
      participants: 10,
      maxParticipants: 20,
      description: 'İş dünyasında kullanılan kelime ve ifadelerin öğrenilmesi',
      status: 'pending',
      reminder: true
    },
    {
      id: 6,
      title: 'Pronunciation Workshop',
      type: 'workshop',
      date: '2024-12-20',
      time: '13:00',
      duration: 75,
      instructor: 'James Thompson',
      location: 'Online',
      participants: 18,
      maxParticipants: 30,
      description: 'Doğru telaffuz teknikleri ve pratik uygulamaları',
      status: 'confirmed',
      reminder: true
    }
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'live-lesson': return 'bg-blue-100 text-blue-600 border-blue-200'
      case 'workshop': return 'bg-green-100 text-green-600 border-green-200'
      case 'exam': return 'bg-red-100 text-red-600 border-red-200'
      case 'practice': return 'bg-purple-100 text-purple-600 border-purple-200'
      case 'lesson': return 'bg-yellow-100 text-yellow-600 border-yellow-200'
      default: return 'bg-gray-100 text-gray-600 border-gray-200'
    }
  }

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'live-lesson': return Video
      case 'workshop': return Users
      case 'exam': return BookOpen
      case 'practice': return Users
      case 'lesson': return BookOpen
      default: return Calendar
    }
  }

  const getEventTypeName = (type: string) => {
    switch (type) {
      case 'live-lesson': return 'Canlı Ders'
      case 'workshop': return 'Workshop'
      case 'exam': return 'Sınav'
      case 'practice': return 'Pratik'
      case 'lesson': return 'Ders'
      default: return 'Etkinlik'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600'
      case 'pending': return 'text-yellow-600'
      case 'cancelled': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return CheckCircle
      case 'pending': return Clock
      case 'cancelled': return X
      default: return AlertCircle
    }
  }

  const filteredEvents = filterType === 'all' 
    ? events 
    : events.filter(event => event.type === filterType)

  const monthNames = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ]

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate)
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1)
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
    }
    setCurrentDate(newDate)
  }

  const getEventsForDate = (date: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`
    return events.filter(event => event.date === dateStr)
  }

  const handleEventClick = (event: any) => {
    setSelectedEvent(event)
    setShowEventModal(true)
  }

  const todayEvents = events.filter(event => {
    const today = new Date().toISOString().split('T')[0]
    return event.date === today
  })

  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.date)
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    return eventDate >= tomorrow
  }).slice(0, 5)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Takvim</h1>
              <p className="text-indigo-100">
                Dersler, sınavlar ve etkinlikler
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center">
                <Calendar className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Today's Events */}
        {todayEvents.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-blue-800 mb-4">Bugünün Etkinlikleri</h2>
            <div className="space-y-3">
              {todayEvents.map((event) => {
                const IconComponent = getEventTypeIcon(event.type)
                return (
                  <div 
                    key={event.id} 
                    className="bg-white rounded-lg p-4 border border-blue-200 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleEventClick(event)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getEventTypeColor(event.type)}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{event.title}</h3>
                          <p className="text-sm text-gray-600">{event.instructor}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{event.time}</div>
                        <div className="text-sm text-gray-500">{event.duration} dk</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => navigateMonth('prev')}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigateMonth('next')}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <select
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="all">Tüm Etkinlikler</option>
                      <option value="live-lesson">Canlı Dersler</option>
                      <option value="workshop">Workshop</option>
                      <option value="exam">Sınavlar</option>
                      <option value="practice">Pratik</option>
                      <option value="lesson">Dersler</option>
                    </select>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>Etkinlik Ekle</span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day) => (
                    <div key={day} className="p-3 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDayOfMonth }, (_, i) => (
                    <div key={`empty-${i}`} className="p-3 h-24"></div>
                  ))}
                  {days.map((day) => {
                    const dayEvents = getEventsForDate(day)
                    const isToday = new Date().getDate() === day && 
                                   new Date().getMonth() === currentDate.getMonth() && 
                                   new Date().getFullYear() === currentDate.getFullYear()
                    
                    return (
                      <div 
                        key={day} 
                        className={`p-2 h-24 border border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                          isToday ? 'bg-primary-50 border-primary-200' : ''
                        }`}
                        onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
                      >
                        <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary-600' : 'text-gray-900'}`}>
                          {day}
                        </div>
                        <div className="space-y-1">
                          {dayEvents.slice(0, 2).map((event) => (
                            <div 
                              key={event.id} 
                              className={`text-xs p-1 rounded truncate ${getEventTypeColor(event.type)}`}
                              onClick={(e) => {
                                e.stopPropagation()
                                handleEventClick(event)
                              }}
                            >
                              {event.time} {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-xs text-gray-500 font-medium">
                              +{dayEvents.length - 2} daha
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Yaklaşan Etkinlikler</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingEvents.map((event) => {
                    const IconComponent = getEventTypeIcon(event.type)
                    const StatusIcon = getStatusIcon(event.status)
                    
                    return (
                      <div 
                        key={event.id} 
                        className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => handleEventClick(event)}
                      >
                        <div className={`p-2 rounded-lg ${getEventTypeColor(event.type)}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm mb-1">{event.title}</h4>
                          <p className="text-xs text-gray-500 mb-2">{event.instructor}</p>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>{new Date(event.date).toLocaleDateString('tr-TR')}</span>
                            <span>•</span>
                            <span>{event.time}</span>
                            <span>•</span>
                            <span>{event.duration} dk</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <StatusIcon className={`w-4 h-4 ${getStatusColor(event.status)}`} />
                          {event.reminder && (
                            <Bell className="w-4 h-4 text-yellow-500" />
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Event Types Legend */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Etkinlik Türleri</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {[
                    { type: 'live-lesson', name: 'Canlı Dersler' },
                    { type: 'workshop', name: 'Workshop' },
                    { type: 'exam', name: 'Sınavlar' },
                    { type: 'practice', name: 'Pratik' },
                    { type: 'lesson', name: 'Dersler' }
                  ].map((item) => {
                    const IconComponent = getEventTypeIcon(item.type)
                    return (
                      <div key={item.type} className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getEventTypeColor(item.type)}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-gray-700">{item.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Modal */}
        {showEventModal && selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Etkinlik Detayları</h3>
                <button
                  onClick={() => setShowEventModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{selectedEvent.title}</h4>
                  <p className="text-sm text-gray-600">{selectedEvent.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Tarih</p>
                    <p className="text-sm text-gray-600">{new Date(selectedEvent.date).toLocaleDateString('tr-TR')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Saat</p>
                    <p className="text-sm text-gray-600">{selectedEvent.time}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Süre</p>
                    <p className="text-sm text-gray-600">{selectedEvent.duration} dakika</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Eğitmen</p>
                    <p className="text-sm text-gray-600">{selectedEvent.instructor}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(selectedEvent.type)}`}>
                    {getEventTypeName(selectedEvent.type)}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {selectedEvent.participants}/{selectedEvent.maxParticipants}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                    Katıl
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Bell className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default CalendarPage
