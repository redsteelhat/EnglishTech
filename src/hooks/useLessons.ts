import { useState, useEffect } from 'react'
import { 
  mockLessons,
  Lesson 
} from '@/data'

// Lessons Hook
export const useLessons = () => {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setLessons(mockLessons)
      setLoading(false)
    }, 1000)
  }, [])

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

  const getLessonsByCourse = (courseId: string) => {
    return lessons.filter(lesson => lesson.courseId === courseId)
      .sort((a, b) => a.order - b.order)
  }

  const getCompletedLessons = (courseId: string) => {
    return lessons.filter(lesson => lesson.courseId === courseId && lesson.isCompleted)
  }

  const getNextLesson = (courseId: string) => {
    const courseLessons = getLessonsByCourse(courseId)
    return courseLessons.find(lesson => !lesson.isCompleted && !lesson.isLocked)
  }

  const markLessonComplete = (lessonId: string) => {
    updateLesson(lessonId, { isCompleted: true })
    
    // Unlock next lesson
    const lesson = getLessonById(lessonId)
    if (lesson) {
      const courseLessons = getLessonsByCourse(lesson.courseId)
      const currentIndex = courseLessons.findIndex(l => l.id === lessonId)
      if (currentIndex < courseLessons.length - 1) {
        const nextLesson = courseLessons[currentIndex + 1]
        updateLesson(nextLesson.id, { isLocked: false })
      }
    }
  }

  const getProgressByCourse = (courseId: string) => {
    const courseLessons = getLessonsByCourse(courseId)
    const completedCount = getCompletedLessons(courseId).length
    const totalCount = courseLessons.length
    
    return {
      completed: completedCount,
      total: totalCount,
      percentage: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
    }
  }

  return {
    lessons,
    loading,
    addLesson,
    updateLesson,
    deleteLesson,
    getLessonById,
    getLessonsByCourse,
    getCompletedLessons,
    getNextLesson,
    markLessonComplete,
    getProgressByCourse
  }
}

export default useLessons
