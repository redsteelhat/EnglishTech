'use client'

import React from 'react'
import { Settings, User, Bell, Shield, Globe, Palette, Database, HelpCircle, Save } from 'lucide-react'

const TeacherSettings: React.FC = () => {
  const settingsCategories = [
    {
      id: 'profile',
      title: 'Profil Ayarları',
      icon: User,
      items: [
        { label: 'Adı Soyadı', value: 'John Smith', type: 'text' },
        { label: 'E-posta', value: 'john.smith@example.com', type: 'email' },
        { label: 'Telefon', value: '+90 532 123 4567', type: 'tel' },
        { label: 'Uzmanlık Alanı', value: 'Business English', type: 'select' }
      ]
    },
    {
      id: 'notifications',
      title: 'Bildirim Ayarları',
      icon: Bell,
      items: [
        { label: 'E-posta Bildirimleri', value: true, type: 'toggle' },
        { label: 'SMS Bildirimleri', value: false, type: 'toggle' },
        { label: 'Yeni Öğrenci Bildirimi', value: true, type: 'toggle' },
        { label: 'Ders Hatırlatıcıları', value: true, type: 'toggle' }
      ]
    },
    {
      id: 'privacy',
      title: 'Gizlilik Ayarları',
      icon: Shield,
      items: [
        { label: 'Profil Görünürlüğü', value: 'public', type: 'select' },
        { label: 'İletişim Bilgileri', value: 'students', type: 'select' },
        { label: 'Ders Kayıtları', value: true, type: 'toggle' },
        { label: 'Performans Verileri', value: false, type: 'toggle' }
      ]
    },
    {
      id: 'interface',
      title: 'Arayüz Ayarları',
      icon: Palette,
      items: [
        { label: 'Tema', value: 'light', type: 'select' },
        { label: 'Dil', value: 'tr', type: 'select' },
        { label: 'Zaman Dilimi', value: 'GMT+3', type: 'select' },
        { label: 'Tarih Formatı', value: 'dd/mm/yyyy', type: 'select' }
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Ayarlar</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Save className="w-4 h-4" />
          <span>Kaydet</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          {settingsCategories.map(category => (
            <button
              key={category.id}
              className="w-full flex items-center space-x-3 p-4 text-left bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                <category.icon className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-medium text-gray-900">{category.title}</span>
            </button>
          ))}
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Profil Ayarları</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">JS</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">John Smith</h3>
                  <p className="text-sm text-gray-600">İngilizce Öğretmeni</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1">
                    Fotoğrafı Değiştir
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    defaultValue="John Smith"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    defaultValue="john.smith@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    defaultValue="+90 532 123 4567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Uzmanlık Alanı
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Business English</option>
                    <option>Academic English</option>
                    <option>General English</option>
                    <option>Test Preparation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Biyografi
                </label>
                <textarea
                  rows={4}
                  defaultValue="Experienced English teacher with 8 years of experience in business and academic English instruction."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Bildirim Tercihleri</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">E-posta Bildirimleri</h4>
                      <p className="text-sm text-gray-600">Yeni mesajlar ve güncellemeler için</p>
                    </div>
                    <button className="w-12 h-6 bg-blue-600 rounded-full p-1 transition-colors">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">SMS Bildirimleri</h4>
                      <p className="text-sm text-gray-600">Acil durumlar için</p>
                    </div>
                    <button className="w-12 h-6 bg-gray-300 rounded-full p-1 transition-colors">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Ders Hatırlatıcıları</h4>
                      <p className="text-sm text-gray-600">Yaklaşan dersler için</p>
                    </div>
                    <button className="w-12 h-6 bg-blue-600 rounded-full p-1 transition-colors">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherSettings
