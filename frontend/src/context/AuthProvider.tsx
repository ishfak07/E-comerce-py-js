import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { api, setAuthToken } from '../lib/api'

type User = { id: string; email: string; full_name?: string | null; is_staff?: boolean; is_superuser?: boolean; avatar_url?: string | null; phone?: string | null; address?: string | null }

type AuthContextType = {
  user: User | null
  accessToken: string | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, fullName?: string) => Promise<void>
  logout: () => void
  updateUser: (u: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Restore authentication state from localStorage and validate token
    const initAuth = async () => {
      const token = localStorage.getItem('access_token')
      const userJson = localStorage.getItem('user')
      
      if (token && userJson) {
        try {
          // Validate token by making a request to /auth/me
          await api.get('/auth/me')
          // If successful, set the user
          setUser(JSON.parse(userJson))
          setAccessToken(token)
        } catch (error) {
          // Token is invalid, clear it
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          localStorage.removeItem('user')
        }
      }
      setLoading(false)
    }

    initAuth()
  }, [])

  useEffect(() => {
    setAuthToken(accessToken)
  }, [accessToken])

  const value = useMemo(() => ({
    user,
    accessToken,
    loading,
    login: async (email: string, password: string) => {
      const res = await api.post('/auth/login', { email, password })
      const { access_token, refresh_token, user } = res.data
      setUser(user)
      setAccessToken(access_token)
      // persist tokens
      localStorage.setItem('access_token', access_token)
      if (refresh_token) localStorage.setItem('refresh_token', refresh_token)
      localStorage.setItem('user', JSON.stringify(user))
      // set header immediately so subsequent calls in same tick are authorized
      setAuthToken(access_token)
    },
    register: async (email: string, password: string, fullName?: string) => {
      await api.post('/auth/register', { email, password, full_name: fullName })
    },
    logout: () => {
      setUser(null)
      setAccessToken(null)
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('user')
    },
    updateUser: (u: Partial<User>) => {
      setUser(prev => {
        const next = { ...(prev || {}), ...u } as User
        try { localStorage.setItem('user', JSON.stringify(next)) } catch {}
        return next
      })
    }
  }), [user, accessToken, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


