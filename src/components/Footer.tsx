'use client'

import React from 'react'
import { Globe, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">EnglishTech</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Modern teknoloji ile İngilizce öğrenmenin en etkili yolu. 
              Uzman eğitmenlerle, kişiselleştirilmiş derslerle hedefinize ulaşın.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Ana Sayfa</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Özellikler</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Kurslar</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Fiyatlar</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Kurslar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Başlangıç İngilizcesi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">İş İngilizcesi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">TOEFL Hazırlık</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Konuşma Pratiği</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Akademik İngilizce</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-600" />
                <span className="text-gray-400">info@englishtech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <span className="text-gray-400">+90 (212) 555-0123</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                <span className="text-gray-400">Levent Mah. Büyükdere Cad. No:123<br />Şişli, İstanbul</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 EnglishTech. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Kullanım Şartları</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Çerez Politikası</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
