import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, accessToken } = useAuth()
  const location = useLocation()

  if (!user || !accessToken) {
    // Redirect to login, but save the location they were trying to access
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}
