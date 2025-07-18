import React from 'react'
import TeacherLayout from '@/components/teacher/TeacherLayout'
import TeacherCalendar from '@/components/teacher/TeacherCalendar'

const TeacherCalendarPage: React.FC = () => {
  return (
    <TeacherLayout>
      <TeacherCalendar />
    </TeacherLayout>
  )
}

export default TeacherCalendarPage
