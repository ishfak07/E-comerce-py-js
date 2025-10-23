export type ToastType = 'success' | 'error' | 'info'

export function toast(message: string, type: ToastType = 'success', duration = 2200) {
  const event = new CustomEvent('app:toast', { detail: { message, type, duration } })
  window.dispatchEvent(event)
}
