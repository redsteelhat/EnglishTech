'use client'

import React from 'react'
import { FileText, Plus, Search, Filter, Calendar, Users, BookOpen, CheckCircle, Clock, Star } from 'lucide-react'

const TeacherAssignments: React.FC = () => {
  const assignments = [
    {
      id: 1,
      title: 'Business Writing Assignment',
      course: 'Business English Advanced',
      dueDate: '2024-01-25',
      submissions: 18,
      totalStudents: 24,
      status: 'active',
      type: 'writing'
    },
    {
      id: 2,
      title: 'IELTS Speaking Practice',
      course: 'IELTS Preparation',
      dueDate: '2024-01-22',
      submissions: 15,
      totalStudents: 18,
      status: 'grading',
      type: 'speaking'
    },
    {
      id: 3,
      title: 'Grammar Quiz',
      course: 'Grammar Fundamentals',
      dueDate: '2024-01-20',
      submissions: 32,
      totalStudents: 32,
      status: 'completed',
      type: 'quiz'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Ödevler</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Yeni Ödev</span>
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center space-x-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Ödev ara..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map(assignment => (
            <div key={assignment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    assignment.status === 'active' ? 'bg-green-100 text-green-800' :
                    assignment.status === 'grading' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {assignment.status === 'active' ? 'Aktif' : 
                     assignment.status === 'grading' ? 'Değerlendiriliyor' : 'Tamamlandı'}
                  </span>
                </div>
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2">{assignment.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{assignment.course}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Son tarih: {assignment.dueDate}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{assignment.submissions}/{assignment.totalStudents} teslim</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {Math.round((assignment.submissions / assignment.totalStudents) * 100)}% tamamlandı
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Detaylar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeacherAssignments
