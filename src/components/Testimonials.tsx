'use client'

import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ayşe Demir',
      role: 'Yazılım Geliştirici',
      company: 'TechCorp',
      content: 'EnglishTech sayesinde iş İngilizcemi büyük ölçüde geliştirdim. Artık uluslararası projelerde çok daha rahat çalışabiliyorum.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Mehmet Kaya',
      role: 'İnsan Kaynakları Müdürü',
      company: 'Global Solutions',
      content: 'TOEFL hazırlık kursundan çok memnun kaldım. Hedeflediğim puanı aldım ve yurtdışında MBA yapma fırsatı buldum.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Zeynep Yıldız',
      role: 'Pazarlama Uzmanı',
      company: 'Digital Marketing Co.',
      content: 'Esnek zaman programı sayesinde çalışırken öğrenebiliyorum. Eğitmenler çok yardımcı ve destekleyici.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      id: 4,
      name: 'Can Özkan',
      role: 'Mimar',
      company: 'Freelancer',
      content: 'Konuşma pratiği kursları gerçekten etkili. Artık İngilizce konuşurken çok daha güvenli hissediyorum.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      id: 5,
      name: 'Elif Şahin',
      role: 'Doktor',
      company: 'Sağlık Bakanlığı',
      content: 'Akademik İngilizce kursundan sonra uluslararası konferanslarda sunum yapabiliyorum. Harika bir deneyim!',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      id: 6,
      name: 'Burak Güler',
      role: 'Finans Uzmanı',
      company: 'InvestBank',
      content: 'AI destekli öğrenim sistemi gerçekten işe yarıyor. Kişiselleştirilmiş dersler çok etkili.',
      rating: 5,
      image: '/api/placeholder/60/60'
    }
  ]

  return (
    <section id="testimonials" className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Öğrencilerimizin
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {' '}Başarı Hikayeleri
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Binlerce öğrencimiz EnglishTech ile hayallerine ulaştı. 
            Onların deneyimlerini keşfedin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-6 relative">
              <div className="absolute top-4 right-4 text-primary-200">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 italic leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Siz de Başarı Hikayenizi Yazın!
            </h3>
            <p className="text-gray-600 mb-6">
              50,000+ öğrencimizin arasına katılın ve İngilizce hedeflerinize ulaşın.
            </p>
            <button className="btn-primary">
              Ücretsiz Deneme Başlat
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
