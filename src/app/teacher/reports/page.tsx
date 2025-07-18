import React from 'react'
import TeacherLayout from '@/components/teacher/TeacherLayout'
import TeacherReports from '@/components/teacher/TeacherReports'

const TeacherReportsPage: React.FC = () => {
  return (
    <TeacherLayout>
      <TeacherReports />
    </TeacherLayout>
  )
}

export default TeacherReportsPage
