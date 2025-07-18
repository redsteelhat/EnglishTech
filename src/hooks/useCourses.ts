import { useState, useEffect } from 'react'
import { mockCourses, Course } from '@/data'

// Courses Hook
export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCourses(mockCourses)
      setLoading(false)
    }, 1000)
  }, [])

  const addCourse = (course: Course) => {
    setCourses(prev => [...prev, course])
  }

  const updateCourse = (id: string, updates: Partial<Course>) => {
    setCourses(prev => prev.map(course => 
      course.id === id ? { ...course, ...updates } : course
    ))
  }

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(course => course.id !== id))
  }

  const getCourseById = (id: string) => {
    return courses.find(course => course.id === id)
  }

  const getCoursesByInstructor = (instructorId: string) => {
    return courses.filter(course => course.instructorId === instructorId)
  }

  const getCoursesByCategory = (category: string) => {
    return courses.filter(course => course.category === category)
  }

  const getCoursesByLevel = (level: 'Beginner' | 'Intermediate' | 'Advanced') => {
    return courses.filter(course => course.level === level)
  }

  const activateCourse = (id: string) => {
    updateCourse(id, { isActive: true })
  }

  const deactivateCourse = (id: string) => {
    updateCourse(id, { isActive: false })
  }

  return {
    courses,
    loading,
    addCourse,
    updateCourse,
    deleteCourse,
    getCourseById,
    getCoursesByInstructor,
    getCoursesByCategory,
    getCoursesByLevel,
    activateCourse,
    deactivateCourse
  }
}

export default useCourses
