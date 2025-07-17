'use client'

import React, { createContext, useContext, useState } from 'react'
import { useAuth } from './AuthContext'

interface PaymentPlan {
  id: string
  name: string
  price: number
  currency: string
  period: 'monthly' | 'yearly'
  features: string[]
}

interface PaymentContextType {
  isProcessing: boolean
  processPayment: (planId: string, paymentMethod: PaymentMethod) => Promise<void>
  validatePayment: (paymentData: PaymentData) => boolean
  plans: PaymentPlan[]
}

interface PaymentMethod {
  type: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer'
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  holderName?: string
  email?: string
}

interface PaymentData {
  amount: number
  currency: string
  planId: string
  paymentMethod: PaymentMethod
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

export const usePayment = () => {
  const context = useContext(PaymentContext)
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider')
  }
  return context
}

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const { updateUser } = useAuth()

  const plans: PaymentPlan[] = [
    {
      id: 'basic',
      name: 'Temel Plan',
      price: 199,
      currency: 'TRY',
      period: 'monthly',
      features: [
        'Temel İngilizce Dersleri',
        'Günlük 1 Saat Erişim',
        'Mobil Uygulama',
        'Temel Destek'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 399,
      currency: 'TRY',
      period: 'monthly',
      features: [
        'Tüm İngilizce Dersleri',
        'Sınırsız Erişim',
        'Canlı Dersler',
        'Kişisel Mentor',
        'Sertifika Programı',
        'Öncelikli Destek'
      ]
    },
    {
      id: 'enterprise',
      name: 'Kurumsal Plan',
      price: 999,
      currency: 'TRY',
      period: 'monthly',
      features: [
        'Tüm Premium Özellikler',
        'Takım Yönetimi',
        'Özel İçerik',
        'API Erişimi',
        'Özel Raporlama',
        '7/24 Destek'
      ]
    }
  ]

  const validatePayment = (paymentData: PaymentData): boolean => {
    const { paymentMethod, amount } = paymentData
    
    if (amount <= 0) return false
    
    if (paymentMethod.type === 'credit_card' || paymentMethod.type === 'debit_card') {
      if (!paymentMethod.cardNumber || !paymentMethod.expiryDate || !paymentMethod.cvv || !paymentMethod.holderName) {
        return false
      }
      
      // Basic card number validation (Luhn algorithm can be added here)
      if (paymentMethod.cardNumber.length < 16) return false
      
      // Expiry date validation
      const [month, year] = paymentMethod.expiryDate.split('/')
      const currentDate = new Date()
      const expiryDate = new Date(2000 + parseInt(year), parseInt(month) - 1)
      if (expiryDate <= currentDate) return false
      
      // CVV validation
      if (paymentMethod.cvv.length < 3) return false
    }
    
    return true
  }

  const processPayment = async (planId: string, paymentMethod: PaymentMethod) => {
    setIsProcessing(true)
    
    try {
      const plan = plans.find(p => p.id === planId)
      if (!plan) {
        throw new Error('Plan bulunamadı')
      }

      const paymentData: PaymentData = {
        amount: plan.price,
        currency: plan.currency,
        planId,
        paymentMethod
      }

      if (!validatePayment(paymentData)) {
        throw new Error('Ödeme bilgileri geçersiz')
      }

      // TODO: Replace with actual payment API integration
      // Example integrations:
      // - Stripe: await stripe.confirmCardPayment(client_secret, { payment_method: { card: elements.card } })
      // - PayPal: await paypal.payment.execute(payment_id, payer_id)
      // - iyzico: await iyzico.payment.create(payment_request)
      // - PayTR: await paytr.payment.create(payment_data)
      
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      
      // Update user subscription
      updateUser({
        subscriptionPlan: planId as 'basic' | 'premium' | 'enterprise',
        isActive: true
      })
      
      // TODO: Send confirmation email
      // await sendConfirmationEmail(user.email, plan)
      
    } catch (error) {
      console.error('Payment processing error:', error)
      throw error
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <PaymentContext.Provider value={{
      isProcessing,
      processPayment,
      validatePayment,
      plans
    }}>
      {children}
    </PaymentContext.Provider>
  )
}
