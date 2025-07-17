'use client'

import React from 'react'
import { Check, X, Star } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Temel',
      price: 299,
      period: 'ay',
      description: 'Bireysel öğrenim için ideal',
      features: [
        'Temel video dersler',
        'Alıştırma soruları',
        'Mobil uygulama',
        'E-posta desteği',
        'Aylık ilerleme raporu'
      ],
      notIncluded: [
        'Canlı dersler',
        'Kişisel mentor',
        'Sertifika programı',
        'Grup çalışmaları'
      ],
      popular: false,
      buttonText: 'Başlat',
      buttonStyle: 'btn-secondary'
    },
    {
      name: 'Profesyonel',
      price: 599,
      period: 'ay',
      description: 'En popüler seçim',
      features: [
        'Tüm video dersler',
        'Canlı grup dersleri',
        'Kişisel mentor',
        'Sınırsız alıştırma',
        'Mobil uygulama',
        'Öncelikli destek',
        'Haftalık ilerleme raporu',
        'Sertifika programı',
        'Grup çalışmaları'
      ],
      notIncluded: [
        'Birebir özel dersler',
        'İleri seviye workshop&apos;lar'
      ],
      popular: true,
      buttonText: 'En Popüler',
      buttonStyle: 'btn-primary'
    },
    {
      name: 'Premium',
      price: 999,
      period: 'ay',
      description: 'Hızlı ve kapsamlı öğrenim',
      features: [
        'Tüm Profesyonel özellikler',
        'Birebir özel dersler (4 saat/ay)',
        'İleri seviye workshop&apos;lar',
        'Kişisel öğrenim planı',
        'Sınırsız mentor desteği',
        'Günlük ilerleme raporu',
        'Özel sınav hazırlığı',
        'Kariyer danışmanlığı',
        'VIP destek'
      ],
      notIncluded: [],
      popular: false,
      buttonText: 'Premium\'a Geç',
      buttonStyle: 'btn-secondary'
    }
  ]

  return (
    <section id="pricing" className="bg-gray-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Basit ve Şeffaf
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {' '}Fiyatlandırma
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İhtiyaçlarınıza uygun planı seçin. Tüm planlarımızda 30 gün para iade garantisi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative card p-8 ${plan.popular ? 'ring-2 ring-primary-600 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">En Popüler</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">₺{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500">KDV dahil</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Kurumsal Çözümler
            </h3>
            <p className="text-gray-600 mb-6">
              Şirketiniz için özel eğitim programları ve toplu indirimler mevcuttur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                Kurumsal Fiyat Al
              </button>
              <button className="btn-primary">
                Demo Talep Et
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">
            Tüm ödemeler güvenli SSL şifrelemesi ile korunmaktadır. 
            <br />
            İstediğiniz zaman iptal edebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
