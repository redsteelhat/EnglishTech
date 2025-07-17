'use client'

import React from 'react'
import { Brain, Users, Clock, Trophy, Headphones, BookOpen, Target, Zap } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Destekli Öğrenme',
      description: 'Yapay zeka ile kişiselleştirilmiş öğrenim planları ve anlık geri bildirim alın.'
    },
    {
      icon: Users,
      title: 'Canlı Grup Dersleri',
      description: 'Uzman eğitmenler eşliğinde interaktif grup derslerine katılın.'
    },
    {
      icon: Clock,
      title: 'Esnek Zaman',
      description: '7/24 erişim ile kendi hızınızda öğrenin. İstediğiniz zaman, istediğiniz yerden.'
    },
    {
      icon: Trophy,
      title: 'Sertifika Programı',
      description: 'Uluslararası geçerliliği olan sertifikalar kazanın ve kariyerinizi geliştirin.'
    },
    {
      icon: Headphones,
      title: 'Sesli Asistan',
      description: 'Telaffuz pratiği yapın ve konuşma becerilerinizi geliştirin.'
    },
    {
      icon: BookOpen,
      title: 'Kapsamlı Müfredat',
      description: 'Başlangıçtan ileri seviyeye kadar tüm seviyeler için kapsamlı içerik.'
    },
    {
      icon: Target,
      title: 'Hedef Odaklı',
      description: 'TOEFL, IELTS, Cambridge sınavlarına özel hazırlık programları.'
    },
    {
      icon: Zap,
      title: 'Hızlı Sonuç',
      description: '30 gün içinde belirgin gelişim garantisi ile hızlı öğrenin.'
    }
  ]

  return (
    <section id="features" className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Neden 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {' '}EnglishTech?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern teknoloji ile geleneksel öğretim yöntemlerini birleştirerek 
            en etkili İngilizce öğrenim deneyimini sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 text-center group">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
