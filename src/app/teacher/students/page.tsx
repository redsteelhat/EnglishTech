import React from 'react'
import TeacherLayout from '@/components/teacher/TeacherLayout'
import TeacherStudents from '@/components/teacher/TeacherStudents'

const TeacherStudentsPage: React.FC = () => {
  return (
    <TeacherLayout>
      <TeacherStudents />
    </TeacherLayout>
  )
}

export default TeacherStudentsPage
