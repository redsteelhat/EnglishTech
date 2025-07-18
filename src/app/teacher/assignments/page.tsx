import React from 'react'
import TeacherLayout from '@/components/teacher/TeacherLayout'
import TeacherAssignments from '@/components/teacher/TeacherAssignments'

const TeacherAssignmentsPage: React.FC = () => {
  return (
    <TeacherLayout>
      <TeacherAssignments />
    </TeacherLayout>
  )
}

export default TeacherAssignmentsPage
