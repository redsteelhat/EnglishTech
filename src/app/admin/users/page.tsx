import React from 'react'
import AdminLayout from '@/components/admin/AdminLayout'
import AdminUsers from '@/components/admin/AdminUsers'

const AdminUsersPage: React.FC = () => {
  return (
    <AdminLayout>
      <AdminUsers />
    </AdminLayout>
  )
}

export default AdminUsersPage
