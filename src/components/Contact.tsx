'use client'

import React, { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bizimle
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              {' '}İletişime Geçin
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sorularınız mı var? Hemen iletişime geçin ve size en uygun kurs için 
            ücretsiz danışmanlık alın.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                İletişim Bilgileri
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-posta</h4>
                    <p className="text-gray-600">info@englishtech.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <p className="text-gray-600">+90 (212) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adres</h4>
                    <p className="text-gray-600">Levent Mah. Büyükdere Cad. No:123<br />Şişli, İstanbul</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Çalışma Saatleri</h4>
                    <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00<br />Cumartesi: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sık Sorulan Sorular
              </h3>
              <div className="space-y-4">
                <div className="card p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Kurslara nasıl başlayabilirim?</h4>
                  <p className="text-gray-600 text-sm">Ücretsiz deneme dersi alarak başlayabilirsiniz. Seviye tespit edilir ve size uygun program hazırlanır.</p>
                </div>
                <div className="card p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Kurs ücretleri ne kadar?</h4>
                  <p className="text-gray-600 text-sm">Kurs ücretleri 299₺&apos;den başlayarak, ihtiyacınıza göre farklı paketler mevcuttur.</p>
                </div>
                <div className="card p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Sertifika alabilir miyim?</h4>
                  <p className="text-gray-600 text-sm">Evet, kurs tamamlandıktan sonra uluslararası geçerliliği olan sertifika alabilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ücretsiz Danışmanlık Formu
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Soyad *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="Adınızı ve soyadınızı girin"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="E-posta adresinizi girin"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="Telefon numaranızı girin"
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                  İlgilendiğiniz Kurs
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                >
                  <option value="">Kurs seçin</option>
                  <option value="beginner">Başlangıç İngilizcesi</option>
                  <option value="business">İş İngilizcesi</option>
                  <option value="toefl">TOEFL Hazırlık</option>
                  <option value="conversation">Konuşma Pratiği</option>
                  <option value="academic">Akademik İngilizce</option>
                  <option value="exam">İngilizce Sınavları</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  placeholder="Merak ettiğiniz konuları yazın..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Gönder</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
