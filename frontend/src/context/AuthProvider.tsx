import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { api, setAuthToken } from '../lib/api'

type User = { id: string; email: string; full_name?: string | null; is_staff?: boolean; is_superuser?: boolean }

type AuthContextType = {
  user: User | null
  accessToken: string | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, fullName?: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    const userJson = localStorage.getItem('user')
    if (token) setAccessToken(token)
    if (userJson) setUser(JSON.parse(userJson))
  }, [])

  useEffect(() => {
    setAuthToken(accessToken)
  }, [accessToken])

  const value = useMemo(() => ({
    user,
    accessToken,
    login: async (email: string, password: string) => {
      const res = await api.post('/auth/login', { email, password })
      const { access_token, user } = res.data
      setUser(user)
      setAccessToken(access_token)
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('user', JSON.stringify(user))
    },
    register: async (email: string, password: string, fullName?: string) => {
      await api.post('/auth/register', { email, password, full_name: fullName })
    },
    logout: () => {
      setUser(null)
      setAccessToken(null)
      localStorage.removeItem('access_token')
      localStorage.removeItem('user')
    }
  }), [user, accessToken])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


