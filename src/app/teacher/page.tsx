import React from 'react'
import TeacherLayout from '@/components/teacher/TeacherLayout'
import TeacherDashboardOverview from '@/components/teacher/TeacherDashboardOverview'

const TeacherPage: React.FC = () => {
  return (
    <TeacherLayout>
      <TeacherDashboardOverview />
    </TeacherLayout>
  )
}

export default TeacherPage
