import { useState, useEffect } from 'react'
import { mockDatabaseInfo, DatabaseInfo } from '@/data'

// Database Hook
export const useDatabase = () => {
  const [databaseInfo, setDatabaseInfo] = useState<DatabaseInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setDatabaseInfo(mockDatabaseInfo)
      setLoading(false)
    }, 1000)
  }, [])

  const refreshDatabaseInfo = () => {
    setLoading(true)
    setTimeout(() => {
      // Simulate updated data
      const updatedInfo = {
        ...mockDatabaseInfo,
        performance: {
          ...mockDatabaseInfo.performance,
          queryTime: Math.random() * 20 + 5, // 5-25ms
          connections: Math.floor(Math.random() * 50) + 10, // 10-60
          cpuUsage: Math.random() * 30 + 10, // 10-40%
          memoryUsage: Math.random() * 40 + 50 // 50-90%
        }
      }
      setDatabaseInfo(updatedInfo)
      setLoading(false)
    }, 800)
  }

  const createBackup = (name: string, type: 'full' | 'incremental') => {
    if (!databaseInfo) return

    const newBackup = {
      id: `backup-${Date.now()}`,
      name,
      size: type === 'full' ? databaseInfo.totalSize : `${Math.floor(Math.random() * 50) + 10} MB`,
      createdAt: new Date().toISOString(),
      type
    }

    setDatabaseInfo(prev => prev ? {
      ...prev,
      backups: [newBackup, ...prev.backups]
    } : null)
  }

  const deleteBackup = (id: string) => {
    setDatabaseInfo(prev => prev ? {
      ...prev,
      backups: prev.backups.filter(backup => backup.id !== id)
    } : null)
  }

  const optimizeDatabase = () => {
    setLoading(true)
    setTimeout(() => {
      if (databaseInfo) {
        // Simulate optimization improving performance
        setDatabaseInfo({
          ...databaseInfo,
          performance: {
            ...databaseInfo.performance,
            queryTime: Math.max(databaseInfo.performance.queryTime * 0.8, 5),
            cpuUsage: Math.max(databaseInfo.performance.cpuUsage * 0.9, 5),
            memoryUsage: Math.max(databaseInfo.performance.memoryUsage * 0.85, 30)
          }
        })
      }
      setLoading(false)
    }, 2000)
  }

  const getTableByName = (name: string) => {
    return databaseInfo?.tables.find(table => table.name === name)
  }

  const getTotalRows = () => {
    return databaseInfo?.tables.reduce((total, table) => total + table.rows, 0) || 0
  }

  const getBackupById = (id: string) => {
    return databaseInfo?.backups.find(backup => backup.id === id)
  }

  const getRecentBackups = (limit: number = 5) => {
    return databaseInfo?.backups
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit) || []
  }

  return {
    databaseInfo,
    loading,
    refreshDatabaseInfo,
    createBackup,
    deleteBackup,
    optimizeDatabase,
    getTableByName,
    getTotalRows,
    getBackupById,
    getRecentBackups
  }
}
