'use client'

import React, { useState } from 'react'
import { X, CreditCard, Calendar, Lock, User, Check } from 'lucide-react'
import { usePayment } from '@/contexts/PaymentContext'
import { useAuth } from '@/contexts/AuthContext'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan: string
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'debit_card' | 'paypal'>('credit_card')
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    holderName: '',
    email: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSuccess, setIsSuccess] = useState(false)
  
  const { processPayment, isProcessing, plans } = usePayment()
  const { user } = useAuth()

  const currentPlan = plans.find(plan => plan.id === selectedPlan)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (paymentMethod === 'credit_card' || paymentMethod === 'debit_card') {
      if (!formData.cardNumber) {
        newErrors.cardNumber = 'Kart numarası gereklidir'
      } else if (formData.cardNumber.replace(/\s/g, '').length < 16) {
        newErrors.cardNumber = 'Geçerli kart numarası giriniz'
      }

      if (!formData.expiryDate) {
        newErrors.expiryDate = 'Son kullanma tarihi gereklidir'
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = 'MM/YY formatında giriniz'
      }

      if (!formData.cvv) {
        newErrors.cvv = 'CVV gereklidir'
      } else if (formData.cvv.length < 3) {
        newErrors.cvv = 'Geçerli CVV giriniz'
      }

      if (!formData.holderName) {
        newErrors.holderName = 'Kart sahibi adı gereklidir'
      }
    }

    if (paymentMethod === 'paypal') {
      if (!formData.email) {
        newErrors.email = 'PayPal e-posta adresi gereklidir'
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Geçerli e-posta adresi giriniz'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    try {
      await processPayment(selectedPlan, {
        type: paymentMethod,
        cardNumber: formData.cardNumber.replace(/\s/g, ''),
        expiryDate: formData.expiryDate,
        cvv: formData.cvv,
        holderName: formData.holderName,
        email: formData.email
      })
      setIsSuccess(true)
    } catch (error) {
      setErrors({ submit: 'Ödeme işlemi başarısız. Lütfen tekrar deneyin.' })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    let formattedValue = value

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()
      if (formattedValue.length > 19) formattedValue = formattedValue.substring(0, 19)
    }

    if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '').replace(/(.{2})/, '$1/')
      if (formattedValue.length > 5) formattedValue = formattedValue.substring(0, 5)
    }

    if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '')
      if (formattedValue.length > 4) formattedValue = formattedValue.substring(0, 4)
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (!isOpen) return null

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ödeme Başarılı!</h2>
            <p className="text-gray-600">
              {currentPlan?.name} planına başarıyla üye oldunuz.
            </p>
          </div>
          <button
            onClick={onClose}
            className="btn-primary w-full"
          >
            Devam Et
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Ödeme</h2>
            <p className="text-gray-600">
              {currentPlan?.name} - {currentPlan?.price} {currentPlan?.currency}/{currentPlan?.period === 'monthly' ? 'Ay' : 'Yıl'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ödeme Yöntemi</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit_card"
                      checked={paymentMethod === 'credit_card'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'credit_card')}
                      className="w-4 h-4 text-primary-600"
                    />
                    <CreditCard className="w-5 h-5 text-gray-600 ml-3 mr-3" />
                    <span className="text-gray-900">Kredi Kartı</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="debit_card"
                      checked={paymentMethod === 'debit_card'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'debit_card')}
                      className="w-4 h-4 text-primary-600"
                    />
                    <CreditCard className="w-5 h-5 text-gray-600 ml-3 mr-3" />
                    <span className="text-gray-900">Banka Kartı</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'paypal')}
                      className="w-4 h-4 text-primary-600"
                    />
                    <div className="w-5 h-5 bg-blue-600 rounded ml-3 mr-3 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">P</span>
                    </div>
                    <span className="text-gray-900">PayPal</span>
                  </label>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {(paymentMethod === 'credit_card' || paymentMethod === 'debit_card') && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kart Numarası
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                            errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>
                      {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Son Kullanma
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                              errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                              errors.cvv ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                        {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kart Sahibi
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="holderName"
                          value={formData.holderName}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                            errors.holderName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Ad Soyad"
                        />
                      </div>
                      {errors.holderName && <p className="text-red-500 text-sm mt-1">{errors.holderName}</p>}
                    </div>
                  </>
                )}

                {paymentMethod === 'paypal' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PayPal E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="paypal@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                )}

                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-600 text-sm">{errors.submit}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Ödeme İşleniyor...' : `${currentPlan?.price} ${currentPlan?.currency} Öde`}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sipariş Özeti</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Plan</span>
                  <span className="font-medium">{currentPlan?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Periyot</span>
                  <span className="font-medium">{currentPlan?.period === 'monthly' ? 'Aylık' : 'Yıllık'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Kullanıcı</span>
                  <span className="font-medium">{user?.name}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Toplam</span>
                  <span>{currentPlan?.price} {currentPlan?.currency}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Özellikler:</h4>
                <ul className="space-y-1 text-sm text-blue-800">
                  {currentPlan?.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal
