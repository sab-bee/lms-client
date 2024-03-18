import React from 'react'
import { useAuth } from '../utils/auth'
import { Navigate } from 'react-router-dom'

const RequireAdmin = ({ children }) => {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to='/account' />
  }

  if (!user.admin_id) {
    return <Navigate to='/account' />
  }

  return children
}

export default RequireAdmin