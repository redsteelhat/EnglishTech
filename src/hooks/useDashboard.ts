import { useState, useEffect } from 'react'
import { 
  mockStudentDashboard,
  mockTeacherDashboard,
  mockAdminDashboard,
  mockCalendarEvents,
  mockProgressData
} from '@/data'

// Dashboard Hook for Students
export const useStudentDashboard = () => {
  const [dashboardData, setDashboardData] = useState(mockStudentDashboard)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setDashboardData(mockStudentDashboard)
      setLoading(false)
    }, 800)
  }, [])

  const updateProgress = (courseId: string, progress: number) => {
    setDashboardData(prev => ({
      ...prev,
      enrolledCourses: prev.enrolledCourses.map(course =>
        course.id === courseId ? { ...course, progress } : course
      )
    }))
  }

  const addAchievement = (achievement: any) => {
    setDashboardData(prev => ({
      ...prev,
      recentAchievements: [achievement, ...prev.recentAchievements]
    }))
  }

  return {
    dashboardData,
    loading,
    updateProgress,
    addAchievement
  }
}

// Dashboard Hook for Teachers
export const useTeacherDashboard = () => {
  const [dashboardData, setDashboardData] = useState(mockTeacherDashboard)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setDashboardData(mockTeacherDashboard)
      setLoading(false)
    }, 800)
  }, [])

  const updateCourseStats = (courseId: string, stats: any) => {
    setDashboardData(prev => ({
      ...prev,
      myCourses: prev.myCourses.map(course =>
        course.id === courseId ? { ...course, ...stats } : course
      )
    }))
  }

  const addLesson = (lesson: any) => {
    setDashboardData(prev => ({
      ...prev,
      upcomingLessons: [...prev.upcomingLessons, lesson]
    }))
  }

  return {
    dashboardData,
    loading,
    updateCourseStats,
    addLesson
  }
}

// Dashboard Hook for Admins
export const useAdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState(mockAdminDashboard)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setDashboardData(mockAdminDashboard)
      setLoading(false)
    }, 800)
  }, [])

  const addActivity = (activity: any) => {
    setDashboardData(prev => ({
      ...prev,
      recentActivities: [activity, ...prev.recentActivities.slice(0, 9)]
    }))
  }

  const updateSystemHealth = (health: any) => {
    setDashboardData(prev => ({
      ...prev,
      systemHealth: { ...prev.systemHealth, ...health }
    }))
  }

  const resolvePendingAction = (actionId: string) => {
    setDashboardData(prev => ({
      ...prev,
      pendingActions: prev.pendingActions.filter(action => action.id !== actionId)
    }))
  }

  return {
    dashboardData,
    loading,
    addActivity,
    updateSystemHealth,
    resolvePendingAction
  }
}

// Calendar Hook
export const useCalendar = () => {
  const [events, setEvents] = useState(mockCalendarEvents)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setEvents(mockCalendarEvents)
      setLoading(false)
    }, 500)
  }, [])

  const addEvent = (event: any) => {
    setEvents(prev => [...prev, event])
  }

  const updateEvent = (eventId: string, updates: any) => {
    setEvents(prev => prev.map(event =>
      event.id === eventId ? { ...event, ...updates } : event
    ))
  }

  const deleteEvent = (eventId: string) => {
    setEvents(prev => prev.filter(event => event.id !== eventId))
  }

  const getEventsByDate = (date: string) => {
    return events.filter(event => event.date === date)
  }

  const getEventsByType = (type: string) => {
    return events.filter(event => event.type === type)
  }

  const getUpcomingEvents = (limit: number = 5) => {
    const today = new Date()
    return events
      .filter(event => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, limit)
  }

  return {
    events,
    loading,
    addEvent,
    updateEvent,
    deleteEvent,
    getEventsByDate,
    getEventsByType,
    getUpcomingEvents
  }
}

// Progress Hook
export const useProgress = () => {
  const [progressData, setProgressData] = useState(mockProgressData)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setProgressData(mockProgressData)
      setLoading(false)
    }, 600)
  }, [])

  const updateOverallStat = (label: string, value: number) => {
    setProgressData(prev => ({
      ...prev,
      overallStats: prev.overallStats.map(stat =>
        stat.label === label 
          ? { ...stat, value, progress: Math.round((value / stat.target) * 100) }
          : stat
      )
    }))
  }

  const updateSkillProgress = (skill: string, level: number) => {
    setProgressData(prev => ({
      ...prev,
      skillProgress: prev.skillProgress.map(s =>
        s.skill === skill ? { ...s, level } : s
      )
    }))
  }

  const addWeeklyGoal = (day: string, target: number, actual: number) => {
    setProgressData(prev => ({
      ...prev,
      weeklyGoals: prev.weeklyGoals.map(goal =>
        goal.day === day 
          ? { ...goal, target, actual, completed: actual >= target }
          : goal
      )
    }))
  }

  return {
    progressData,
    loading,
    updateOverallStat,
    updateSkillProgress,
    addWeeklyGoal
  }
}

const dashboardHooks = {
  useStudentDashboard,
  useTeacherDashboard,
  useAdminDashboard,
  useCalendar,
  useProgress
}

export default dashboardHooks
