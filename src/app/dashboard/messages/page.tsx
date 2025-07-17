'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { 
  MessageSquare, 
  Send, 
  Search, 
  Phone, 
  Video,
  MoreHorizontal,
  Paperclip,
  Smile,
  Image,
  File,
  Clock,
  Check,
  CheckCheck,
  Star,
  Archive,
  Trash2,
  Edit3,
  UserPlus,
  Settings,
  Circle,
  Filter,
  X
} from 'lucide-react'

const MessagesPage: React.FC = () => {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [selectedChat, setSelectedChat] = useState<number | null>(1)
  const [newMessage, setNewMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/')
    }
  }, [user, isLoading, router])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [selectedChat])

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

  const chats = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Business English Instructor',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Sunumunuzu gözden geçirdim, çok iyi ilerleme kaydettiniz!',
      lastMessageTime: '10:30',
      unreadCount: 2,
      online: true,
      type: 'instructor'
    },
    {
      id: 2,
      name: 'Prof. Michael Brown',
      role: 'Grammar Expert',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Yarınki grammar workshop için hazırlıklı olun',
      lastMessageTime: '09:15',
      unreadCount: 0,
      online: false,
      type: 'instructor'
    },
    {
      id: 3,
      name: 'Study Group - Advanced',
      role: 'Grup Chat',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Alice: Bu akşam practice session var mı?',
      lastMessageTime: '08:45',
      unreadCount: 5,
      online: true,
      type: 'group'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'Conversation Coach',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Telaffuz egzersizlerini gönderdim',
      lastMessageTime: 'Dün',
      unreadCount: 1,
      online: false,
      type: 'instructor'
    },
    {
      id: 5,
      name: 'IELTS Preparation Group',
      role: 'Grup Chat',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Mark: Writing task 2 örneklerini paylaştım',
      lastMessageTime: 'Dün',
      unreadCount: 3,
      online: true,
      type: 'group'
    },
    {
      id: 6,
      name: 'Support Team',
      role: 'Teknik Destek',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Sorununuz çözüldü. Başka bir şey için yardıma ihtiyacınız var mı?',
      lastMessageTime: '2 gün önce',
      unreadCount: 0,
      online: true,
      type: 'support'
    }
  ]

  const messages = [
    {
      id: 1,
      chatId: 1,
      sender: 'Dr. Sarah Johnson',
      content: 'Merhaba! Bugünkü presentation workshop nasıl geçti?',
      timestamp: '10:25',
      isOwn: false,
      type: 'text'
    },
    {
      id: 2,
      chatId: 1,
      sender: 'You',
      content: 'Merhaba Dr. Johnson! Gerçekten çok faydalıydı. Özellikle body language kısmı çok yeni şeyler öğretti.',
      timestamp: '10:27',
      isOwn: true,
      type: 'text'
    },
    {
      id: 3,
      chatId: 1,
      sender: 'Dr. Sarah Johnson',
      content: 'Çok sevindim! Ödevdeki presentation için hazırlıklı mısınız?',
      timestamp: '10:28',
      isOwn: false,
      type: 'text'
    },
    {
      id: 4,
      chatId: 1,
      sender: 'You',
      content: 'Evet, konuyu seçtim ve outline\'ı hazırladım. Yarın gösterebilir miyim?',
      timestamp: '10:29',
      isOwn: true,
      type: 'text'
    },
    {
      id: 5,
      chatId: 1,
      sender: 'Dr. Sarah Johnson',
      content: 'Sunumunuzu gözden geçirdim, çok iyi ilerleme kaydettiniz!',
      timestamp: '10:30',
      isOwn: false,
      type: 'text'
    }
  ]

  const filteredChats = chats.filter(chat => {
    const matchesSearch = chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chat.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || chat.type === filterType
    return matchesSearch && matchesFilter
  })

  const selectedChatData = chats.find(chat => chat.id === selectedChat)
  const selectedChatMessages = messages.filter(msg => msg.chatId === selectedChat)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage)
      setNewMessage('')
    }
  }

  const getChatTypeColor = (type: string) => {
    switch (type) {
      case 'instructor': return 'bg-blue-100 text-blue-600'
      case 'group': return 'bg-green-100 text-green-600'
      case 'support': return 'bg-purple-100 text-purple-600'
      default: return 'bg-gray-100 text-gray-600'
    }
  }

  const getChatTypeName = (type: string) => {
    switch (type) {
      case 'instructor': return 'Eğitmen'
      case 'group': return 'Grup'
      case 'support': return 'Destek'
      default: return 'Mesaj'
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Mesajlar</h1>
              <p className="text-green-100">
                Eğitmenler ve diğer öğrencilerle iletişim kur
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Messages Interface */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden" style={{ height: '600px' }}>
          <div className="flex h-full">
            {/* Chat List */}
            <div className="w-1/3 border-r border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Sohbetler</h2>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <UserPlus className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Sohbet ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="all">Tümü</option>
                    <option value="instructor">Eğitmenler</option>
                    <option value="group">Gruplar</option>
                    <option value="support">Destek</option>
                  </select>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {filteredChats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`flex items-center space-x-3 p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      selectedChat === chat.id ? 'bg-primary-50 border-primary-200' : ''
                    }`}
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      {chat.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 truncate">{chat.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{chat.lastMessageTime}</span>
                          {chat.unreadCount > 0 && (
                            <span className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                              {chat.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${getChatTypeColor(chat.type)}`}>
                          {getChatTypeName(chat.type)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedChatData ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-white" />
                          </div>
                          {selectedChatData.online && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{selectedChatData.name}</h3>
                          <p className="text-sm text-gray-600">{selectedChatData.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Phone className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Video className="w-4 h-4 text-gray-500" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreHorizontal className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {selectedChatMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.isOwn
                              ? 'bg-primary-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <div className={`flex items-center justify-end mt-1 space-x-1 ${
                            message.isOwn ? 'text-primary-100' : 'text-gray-500'
                          }`}>
                            <span className="text-xs">{message.timestamp}</span>
                            {message.isOwn && (
                              <CheckCheck className="w-3 h-3" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                      <button
                        type="button"
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Paperclip className="w-4 h-4 text-gray-500" />
                      </button>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Mesajınızı yazın..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                        />
                      </div>
                      <button
                        type="button"
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Smile className="w-4 h-4 text-gray-500" />
                      </button>
                      <button
                        type="submit"
                        disabled={!newMessage.trim()}
                        className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Sohbet seçin</h3>
                    <p className="text-gray-600">Mesajlaşmaya başlamak için bir sohbet seçin</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Hızlı Eylemler</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <MessageSquare className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Eğitmene Sor</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <UserPlus className="w-6 h-6 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Grup Oluştur</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <Settings className="w-6 h-6 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Destek Ekibi</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
              <Archive className="w-6 h-6 text-yellow-600" />
              <span className="text-sm font-medium text-gray-700">Arşiv</span>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default MessagesPage
