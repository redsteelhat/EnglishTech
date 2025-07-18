'use client'

import React from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import AdminSecurity from '@/components/admin/AdminSecurity'

const AdminSecurityPage: React.FC = () => {
  return (
    <AdminLayout>
      <AdminSecurity />
    </AdminLayout>
  )
}

export default AdminSecurityPage
