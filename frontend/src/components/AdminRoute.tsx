import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function AdminRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth()
  const loc = useLocation()
  if (!user) return <Navigate to="/login" state={{ from: loc.pathname }} replace />
  if (!(user.is_staff || user.is_superuser)) return <Navigate to="/" replace />
  return children
}
