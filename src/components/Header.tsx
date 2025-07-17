'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Globe, BookOpen, User, LogOut } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import AuthModal from './AuthModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  
  const { user, logout } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  const handleLogout = () => {
    logout()
    setIsUserMenuOpen(false)
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
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
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

            {/* Desktop Auth */}
            <div className="hidden md:block">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span>{user.name}</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Çıkış Yap</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleAuthClick('login')}
                    className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    Giriş Yap
                  </button>
                  <button
                    onClick={() => handleAuthClick('register')}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Üye Ol</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container-max py-4">
              <div className="flex flex-col space-y-4">
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
                
                {user ? (
                  <div className="pt-4 border-t border-gray-200">
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Çıkış Yap</span>
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <button
                      onClick={() => handleAuthClick('login')}
                      className="w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium"
                    >
                      Giriş Yap
                    </button>
                    <button
                      onClick={() => handleAuthClick('register')}
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Üye Ol</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  )
}

export default Header
