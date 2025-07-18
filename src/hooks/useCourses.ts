import { useState, useEffect } from 'react'
import { mockCourses, mockLessons, Course, Lesson } from '@/data'

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

// Lessons Hook
export const useLessons = (courseId?: string) => {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      const filteredLessons = courseId 
        ? mockLessons.filter(lesson => lesson.courseId === courseId)
        : mockLessons
      setLessons(filteredLessons)
      setLoading(false)
    }, 800)
  }, [courseId])

  const addLesson = (lesson: Lesson) => {
    setLessons(prev => [...prev, lesson])
  }

  const updateLesson = (id: string, updates: Partial<Lesson>) => {
    setLessons(prev => prev.map(lesson => 
      lesson.id === id ? { ...lesson, ...updates } : lesson
    ))
  }

  const deleteLesson = (id: string) => {
    setLessons(prev => prev.filter(lesson => lesson.id !== id))
  }

  const getLessonById = (id: string) => {
    return lessons.find(lesson => lesson.id === id)
  }

  const completeLesson = (id: string) => {
    updateLesson(id, { isCompleted: true })
  }

  const unlockLesson = (id: string) => {
    updateLesson(id, { isLocked: false })
  }

  const lockLesson = (id: string) => {
    updateLesson(id, { isLocked: true })
  }

  return {
    lessons,
    loading,
    addLesson,
    updateLesson,
    deleteLesson,
    getLessonById,
    completeLesson,
    unlockLesson,
    lockLesson
  }
}
