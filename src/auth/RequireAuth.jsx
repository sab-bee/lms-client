import React from 'react'
import { useAuth } from '../utils/auth'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  const auth = useAuth()
  if (!auth.user) {
    return <Navigate to='/account'></Navigate>
  }
  return children
}

export default RequireAuth