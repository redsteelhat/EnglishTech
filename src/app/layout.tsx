import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import React from 'react'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'EnglishTech - Modern İngilizce Kursu',
  description: 'Profesyonel İngilizce eğitimi ile kariyerinizi bir sonraki seviyeye taşıyın. İnteraktif dersler, uzman eğitmenler ve esnek öğrenim seçenekleri.',
  keywords: 'İngilizce kursu, online İngilizce, İngilizce öğrenme, dil kursu, TOEFL, IELTS',
  authors: [{ name: 'EnglishTech' }],
  robots: 'index, follow',
  openGraph: {
    title: 'EnglishTech - Modern İngilizce Kursu',
    description: 'Profesyonel İngilizce eğitimi ile kariyerinizi bir sonraki seviyeye taşıyın.',
    type: 'website',
    locale: 'tr_TR',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
