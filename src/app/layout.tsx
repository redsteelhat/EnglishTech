import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EnglishTech - Modern İngilizce Kursu',
  description: 'Profesyonel İngilizce eğitimi ile kariyerinizi bir sonraki seviyeye taşıyın. İnteraktif dersler, uzman eğitmenler ve esnek öğrenim seçenekleri.',
  keywords: 'İngilizce kursu, online İngilizce, İngilizce öğrenme, dil kursu, TOEFL, IELTS',
  authors: [{ name: 'EnglishTech' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
