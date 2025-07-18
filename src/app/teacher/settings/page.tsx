import React from 'react'
import TeacherLayout from '@/components/teacher/TeacherLayout'
import TeacherSettings from '@/components/teacher/TeacherSettings'

const TeacherSettingsPage: React.FC = () => {
  return (
    <TeacherLayout>
      <TeacherSettings />
    </TeacherLayout>
  )
}

export default TeacherSettingsPage
