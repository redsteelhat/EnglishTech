import React from 'react'
import TeacherLayout from '@/components/teacher/TeacherLayout'
import TeacherMessages from '@/components/teacher/TeacherMessages'

const TeacherMessagesPage: React.FC = () => {
  return (
    <TeacherLayout>
      <TeacherMessages />
    </TeacherLayout>
  )
}

export default TeacherMessagesPage
