'use client'

import React from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import AdminDatabase from '@/components/admin/AdminDatabase'

const AdminDatabasePage: React.FC = () => {
  return (
    <AdminLayout>
      <AdminDatabase />
    </AdminLayout>
  )
}

export default AdminDatabasePage
