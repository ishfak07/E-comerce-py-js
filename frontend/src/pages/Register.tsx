import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export default function Register() {
  const { register } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const navigate = useNavigate()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    await register(email, password, fullName)
    setMessage('Check your email to verify your account')
    setTimeout(() => navigate('/login'), 1000)
  }

  return (
    <div className="container" style={{ padding: 24, maxWidth: 480 }}>
      <h1>Register</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 10 }}>
        <input placeholder="Full name" value={fullName} onChange={e => setFullName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        {message && <div style={{ color: 'green' }}>{message}</div>}
        <button className="btn" type="submit">Create account</button>
        <div>Have an account? <Link to="/login">Login</Link></div>
      </form>
    </div>
  )
}


