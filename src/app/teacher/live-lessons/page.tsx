import React from 'react'
import TeacherLayout from '@/components/teacher/TeacherLayout'
import TeacherLiveLessons from '@/components/teacher/TeacherLiveLessons'

const TeacherLiveLessonsPage: React.FC = () => {
  return (
    <TeacherLayout>
      <TeacherLiveLessons />
    </TeacherLayout>
  )
}

export default TeacherLiveLessonsPage
