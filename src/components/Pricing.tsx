'use client'

import React, { useState } from 'react'
import { Check, X, Star } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { usePayment } from '@/contexts/PaymentContext'
import AuthModal from './AuthModal'
import PaymentModal from './PaymentModal'

const Pricing = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')
  
  const { user } = useAuth()
  const { plans } = usePayment()

  const handlePlanSelect = (planId: string) => {
    if (!user) {
      setIsAuthModalOpen(true)
      return
    }
    
    setSelectedPlan(planId)
    setIsPaymentModalOpen(true)
  }

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Temel',
      price: 199,
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
      id: 'premium',
      name: 'Premium',
      price: 399,
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
      id: 'enterprise',
      name: 'Kurumsal',
      price: 999,
      period: 'ay',
      description: 'Hızlı ve kapsamlı öğrenim',
      features: [
        'Tüm Premium özellikler',
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
      buttonText: 'Kurumsal',
      buttonStyle: 'btn-secondary'
    }
  ]

  return (
    <>
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
            {pricingPlans.map((plan, index) => (
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
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">₺/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`w-full ${plan.buttonStyle} ${user?.subscriptionPlan === plan.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={user?.subscriptionPlan === plan.id}
                >
                  {user?.subscriptionPlan === plan.id ? 'Mevcut Plan' : plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kurumsal Çözümler
              </h3>
              <p className="text-gray-600 mb-6">
                Şirketiniz için özel eğitim programları, takım yönetimi ve detaylı raporlama ile
                çalışanlarınızın İngilizce seviyesini hızla artırın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Özel içerik geliştirme</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Takım performans analizi</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Esnek ödeme seçenekleri</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Özel destek</span>
                </div>
              </div>
              <div className="mt-6">
                <a 
                  href="#contact" 
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Teklif Al</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode="register"
      />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  )
}

export default Pricing
