'use client'

import React from 'react'
import { ArrowRight, Play, Star, Users, BookOpen, Clock } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-50 to-secondary-50 section-padding pt-24">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-primary-600">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">4.9/5 - 10,000+ Memnun Öğrenci</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                İngilizce Öğrenme
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  {' '}Deneyimini{' '}
                </span>
                Değiştir
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Uzman eğitmenlerle, interaktif derslerle ve kişiselleştirilmiş öğrenim planlarıyla 
                İngilizce seviyenizi profesyonel düzeye taşıyın. Kariyerinizde fark yaratın.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Aktif Öğrenci</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-primary-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Ders Saati</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Destek</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Ücretsiz Deneme Başlat</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Demo İzle</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-sm text-gray-500">Güvenilir Partner:</div>
              <div className="flex items-center space-x-4">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-700">Cambridge</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-700">TOEFL</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-700">IELTS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                {/* Mock Dashboard Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AT</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Ahmet Taşkın</div>
                      <div className="text-sm text-gray-500">Intermediate Level</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Günlük Hedef</div>
                    <div className="text-lg font-bold text-primary-600">75%</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Genel İlerleme</span>
                    <span className="text-primary-600 font-medium">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full w-2/3"></div>
                  </div>
                </div>

                {/* Skill Levels */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Konuşma</div>
                    <div className="text-lg font-bold text-gray-900">B2</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Dinleme</div>
                    <div className="text-lg font-bold text-gray-900">B1</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Okuma</div>
                    <div className="text-lg font-bold text-gray-900">B2</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Yazma</div>
                    <div className="text-lg font-bold text-gray-900">B1</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-900">Son Aktiviteler</div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="text-sm text-gray-600">Business English - Lesson 5 tamamlandı</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="text-sm text-gray-600">Speaking Practice - 25 dakika</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="text-sm text-gray-600">Grammar Quiz - 8/10 doğru</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Ders Tamamlandı!</div>
                  <div className="text-gray-500">+50 XP kazandın</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">🔥</span>
                </div>
                <div className="text-sm">
                  <div className="font-medium">7 Günlük Seri!</div>
                  <div className="text-gray-500">Harika gidiyorsun</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
