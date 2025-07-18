import React from 'react'
import TeacherLayout from '@/components/teacher/TeacherLayout'
import TeacherCourses from '@/components/teacher/TeacherCourses'

const TeacherCoursesPage: React.FC = () => {
  return (
    <TeacherLayout>
      <TeacherCourses />
    </TeacherLayout>
  )
}

export default TeacherCoursesPage
