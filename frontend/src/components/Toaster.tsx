import { useEffect, useRef, useState } from 'react'

type Toast = { id: string; message: string; type: 'success'|'error'|'info'; ttl: number }

export default function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timers = useRef<Record<string, number>>({})

  useEffect(() => {
    function onToast(e: Event) {
      const ce = e as CustomEvent<{ message: string; type: 'success'|'error'|'info'; duration?: number }>
      const id = crypto.randomUUID()
      const ttl = Date.now() + (ce.detail?.duration ?? 2200)
      setToasts(prev => [...prev, { id, message: ce.detail?.message ?? '', type: ce.detail?.type ?? 'success', ttl }])
      const ms = (ce.detail?.duration ?? 2200)
      timers.current[id] = window.setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id))
        delete timers.current[id]
      }, ms)
    }
    window.addEventListener('app:toast', onToast as EventListener)
    return () => {
      window.removeEventListener('app:toast', onToast as EventListener)
      Object.values(timers.current).forEach(t => window.clearTimeout(t))
    }
  }, [])

  return (
    <div style={{ position:'fixed', top: 20, right: 20, zIndex: 2000, display:'flex', flexDirection:'column', gap: 8 }} aria-live="polite" aria-atomic="true">
      {toasts.map(t => (
        <div key={t.id}
          role="status"
          style={{
            minWidth: 220,
            maxWidth: 360,
            padding: '10px 14px',
            borderRadius: 10,
            color: 'white',
            background: t.type === 'success' ? 'linear-gradient(180deg, #22c55e, #16a34a)'
                     : t.type === 'error' ? 'linear-gradient(180deg, #ef4444, #b91c1c)'
                     : 'linear-gradient(180deg, #3b82f6, #1d4ed8)',
            boxShadow: '0 10px 24px rgba(0,0,0,0.35)',
            transform: 'translateY(0)',
            transition: 'opacity .2s, transform .2s',
            fontWeight: 600
          }}
        >
          {t.message}
        </div>
      ))}
      <style>{`
        @media (max-width: 600px) {
          div[aria-live='polite']{ left: 12px; right: 12px; top: auto; bottom: 20px; align-items: center; }
        }
      `}</style>
    </div>
  )
}
