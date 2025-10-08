import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function AdminRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" />
  if (!user.is_staff) return <Navigate to="/" />
  return children
}
