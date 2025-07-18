import { useState, useEffect } from 'react'
import { 
  mockUsers, 
  mockStudents, 
  mockTeachers, 
  mockSuperAdmins,
  User, 
  Student, 
  Teacher, 
  SuperAdmin 
} from '@/data'

// Users Hook
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setUsers(mockUsers)
      setLoading(false)
    }, 1000)
  }, [])

  const addUser = (user: User) => {
    setUsers(prev => [...prev, user])
  }

  const updateUser = (id: string, updates: Partial<User>) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...updates } : user
    ))
  }

  const deleteUser = (id: string) => {
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  const getUserById = (id: string) => {
    return users.find(user => user.id === id)
  }

  const getUsersByRole = (role: 'student' | 'teacher' | 'superadmin') => {
    return users.filter(user => user.role === role)
  }

  return {
    users,
    loading,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
    getUsersByRole
  }
}

// Students Hook
export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setStudents(mockStudents)
      setLoading(false)
    }, 800)
  }, [])

  const addStudent = (student: Student) => {
    setStudents(prev => [...prev, student])
  }

  const updateStudent = (id: string, updates: Partial<Student>) => {
    setStudents(prev => prev.map(student => 
      student.id === id ? { ...student, ...updates } : student
    ))
  }

  const deleteStudent = (id: string) => {
    setStudents(prev => prev.filter(student => student.id !== id))
  }

  return {
    students,
    loading,
    addStudent,
    updateStudent,
    deleteStudent
  }
}

// Teachers Hook
export const useTeachers = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setTeachers(mockTeachers)
      setLoading(false)
    }, 800)
  }, [])

  const addTeacher = (teacher: Teacher) => {
    setTeachers(prev => [...prev, teacher])
  }

  const updateTeacher = (id: string, updates: Partial<Teacher>) => {
    setTeachers(prev => prev.map(teacher => 
      teacher.id === id ? { ...teacher, ...updates } : teacher
    ))
  }

  const deleteTeacher = (id: string) => {
    setTeachers(prev => prev.filter(teacher => teacher.id !== id))
  }

  const verifyTeacher = (id: string) => {
    updateTeacher(id, { isVerified: true })
  }

  return {
    teachers,
    loading,
    addTeacher,
    updateTeacher,
    deleteTeacher,
    verifyTeacher
  }
}
