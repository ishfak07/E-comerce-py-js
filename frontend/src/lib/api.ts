import axios from 'axios'

export const api = axios.create({ baseURL: '/api/v1' })

// Initialize header from persisted token so first requests after refresh are authenticated
const persisted = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null
if (persisted) {
  api.defaults.headers.common['Authorization'] = `Bearer ${persisted}`
}

export function setAuthToken(token: string | null) {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}

// Attach the latest token from localStorage before each request (handles page reloads)
api.interceptors.request.use((cfg) => {
  try {
    // Skip auth header for login/register to avoid sending stale tokens
    const url = (cfg.url || '').toLowerCase()
    const skipAuth = url.includes('/auth/login') || url.includes('/auth/register')
    
    if (!skipAuth) {
      const t = localStorage.getItem('access_token')
      if (t) {
        cfg.headers = cfg.headers || {}
        ;(cfg.headers as any)['Authorization'] = `Bearer ${t}`
      }
    }
  } catch (e) {
    // ignore
  }
  return cfg
})

let isRefreshing = false
let refreshQueue: Array<(token?: string | null) => void> = []

function processQueue(token: string | null) {
  refreshQueue.forEach(cb => cb(token))
  refreshQueue = []
}

// Response interceptor to try refresh on 401
api.interceptors.response.use(
  r => r,
  async (err) => {
    const original = err.config
    if (!original) return Promise.reject(err)
    const status = err.response?.status
    // attempt refresh on 401 once per request
    if (status === 401 && !original._retry) {
      original._retry = true
      try {
        if (isRefreshing) {
          // queue and wait
          return new Promise((resolve, reject) => {
            refreshQueue.push((token) => {
              if (token) {
                original.headers['Authorization'] = `Bearer ${token}`
                resolve(api(original))
              } else {
                reject(err)
              }
            })
          })
        }
        isRefreshing = true
        const refreshToken = localStorage.getItem('refresh_token')
        if (!refreshToken) {
          processQueue(null)
          isRefreshing = false
          return Promise.reject(err)
        }
        const resp = await axios.post('/api/v1/auth/refresh', { refresh_token: refreshToken })
        const data = resp.data
        const newAccess = data?.access_token
        const newRefresh = data?.refresh_token
        if (newAccess) {
          localStorage.setItem('access_token', newAccess)
          if (newRefresh) localStorage.setItem('refresh_token', newRefresh)
          api.defaults.headers.common['Authorization'] = `Bearer ${newAccess}`
          processQueue(newAccess)
          isRefreshing = false
          original.headers['Authorization'] = `Bearer ${newAccess}`
          return api(original)
        }
        processQueue(null)
        isRefreshing = false
      } catch (e) {
        processQueue(null)
        isRefreshing = false
        // clear tokens on failure
        try { localStorage.removeItem('access_token'); localStorage.removeItem('refresh_token') } catch (ex) {}
        try { window.location.href = '/login' } catch (_) {}
        return Promise.reject(err)
      }
    }
    return Promise.reject(err)
  }
)


