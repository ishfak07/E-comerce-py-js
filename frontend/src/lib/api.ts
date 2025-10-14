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


