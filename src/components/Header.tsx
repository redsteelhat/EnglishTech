'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Globe, BookOpen } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">EnglishTech</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">
                Ana Sayfa
              </a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
                Özellikler
              </a>
              <a href="#courses" className="text-gray-700 hover:text-primary-600 transition-colors">
                Kurslar
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">
                Yorumlar
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
                Fiyatlar
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
                İletişim
              </a>
            </nav>
            <div className="hidden md:block">
              <button className="btn-primary flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>Hemen Başla</span>
              </button>
            </div>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">EnglishTech</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">
              Ana Sayfa
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Özellikler
            </a>
            <a href="#courses" className="text-gray-700 hover:text-primary-600 transition-colors">
              Kurslar
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">
              Yorumlar
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Fiyatlar
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              İletişim
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary flex items-center space-x-2">
              <BookOpen className="w-4 h-4" />
              <span>Hemen Başla</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col space-y-4 py-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors px-4">
                Ana Sayfa
              </a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors px-4">
                Özellikler
              </a>
              <a href="#courses" className="text-gray-700 hover:text-primary-600 transition-colors px-4">
                Kurslar
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors px-4">
                Yorumlar
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors px-4">
                Fiyatlar
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors px-4">
                İletişim
              </a>
              <div className="px-4 pt-4">
                <button className="btn-primary w-full flex items-center justify-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Hemen Başla</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
