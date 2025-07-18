import { DatabaseInfo } from '../types'

export const mockDatabaseInfo: DatabaseInfo = {
  tables: [
    {
      name: 'users',
      rows: 342,
      size: '45.2 MB',
      lastUpdated: '2024-07-18T09:30:00Z'
    },
    {
      name: 'courses',
      rows: 45,
      size: '12.8 MB',
      lastUpdated: '2024-07-17T14:20:00Z'
    },
    {
      name: 'lessons',
      rows: 567,
      size: '23.4 MB',
      lastUpdated: '2024-07-18T08:15:00Z'
    },
    {
      name: 'enrollments',
      rows: 1234,
      size: '8.9 MB',
      lastUpdated: '2024-07-18T10:00:00Z'
    },
    {
      name: 'payments',
      rows: 789,
      size: '15.6 MB',
      lastUpdated: '2024-07-17T16:45:00Z'
    },
    {
      name: 'certificates',
      rows: 234,
      size: '5.2 MB',
      lastUpdated: '2024-07-16T14:30:00Z'
    },
    {
      name: 'messages',
      rows: 2456,
      size: '67.8 MB',
      lastUpdated: '2024-07-18T09:45:00Z'
    },
    {
      name: 'notifications',
      rows: 5678,
      size: '34.1 MB',
      lastUpdated: '2024-07-18T09:30:00Z'
    },
    {
      name: 'security_logs',
      rows: 12345,
      size: '89.4 MB',
      lastUpdated: '2024-07-18T09:50:00Z'
    },
    {
      name: 'activity_logs',
      rows: 8901,
      size: '76.3 MB',
      lastUpdated: '2024-07-18T09:35:00Z'
    }
  ],
  totalSize: '378.7 MB',
  backups: [
    {
      id: 'backup-1',
      name: 'daily_backup_20240718',
      size: '378.7 MB',
      createdAt: '2024-07-18T02:00:00Z',
      type: 'full'
    },
    {
      id: 'backup-2',
      name: 'daily_backup_20240717',
      size: '375.2 MB',
      createdAt: '2024-07-17T02:00:00Z',
      type: 'full'
    },
    {
      id: 'backup-3',
      name: 'incremental_20240717_18',
      size: '12.3 MB',
      createdAt: '2024-07-17T18:00:00Z',
      type: 'incremental'
    },
    {
      id: 'backup-4',
      name: 'daily_backup_20240716',
      size: '372.8 MB',
      createdAt: '2024-07-16T02:00:00Z',
      type: 'full'
    },
    {
      id: 'backup-5',
      name: 'incremental_20240716_18',
      size: '8.9 MB',
      createdAt: '2024-07-16T18:00:00Z',
      type: 'incremental'
    },
    {
      id: 'backup-6',
      name: 'daily_backup_20240715',
      size: '368.5 MB',
      createdAt: '2024-07-15T02:00:00Z',
      type: 'full'
    }
  ],
  performance: {
    queryTime: 12.5, // milliseconds
    connections: 23,
    cpuUsage: 15.8, // percentage
    memoryUsage: 67.3 // percentage
  }
}
