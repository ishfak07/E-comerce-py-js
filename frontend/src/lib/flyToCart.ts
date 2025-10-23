export async function animateFlyToCart(sourceEl: HTMLElement): Promise<void> {
  const target = document.querySelector('.cart-link .badge') as HTMLElement | null
  if (!sourceEl || !target) return

  const srcRect = sourceEl.getBoundingClientRect()
  const dstRect = target.getBoundingClientRect()

  // Try to clone image; fallback to rounded rect
  let ghost: HTMLElement
  if (sourceEl instanceof HTMLImageElement) {
    const img = document.createElement('img')
    img.src = sourceEl.currentSrc || sourceEl.src
    img.alt = ''
    ghost = img
  } else {
    const div = document.createElement('div')
    div.style.background = 'rgba(255,255,255,0.9)'
    ghost = div
  }

  ghost.style.position = 'fixed'
  ghost.style.left = `${srcRect.left}px`
  ghost.style.top = `${srcRect.top}px`
  ghost.style.width = `${srcRect.width}px`
  ghost.style.height = `${srcRect.height}px`
  ghost.style.borderRadius = '12px'
  ghost.style.boxShadow = '0 10px 30px rgba(0,0,0,0.35)'
  ghost.style.zIndex = '3000'
  ghost.style.pointerEvents = 'none'
  document.body.appendChild(ghost)

  const deltaX = dstRect.left + dstRect.width / 2 - (srcRect.left + srcRect.width / 2)
  const deltaY = dstRect.top + dstRect.height / 2 - (srcRect.top + srcRect.height / 2)

  const keyframes: Keyframe[] = [
    { transform: 'translate(0, 0) scale(1)', opacity: 1 },
    { transform: `translate(${deltaX * 0.2}px, ${deltaY * 0.2}px) scale(0.9)`, opacity: 0.9 },
    { transform: `translate(${deltaX}px, ${deltaY}px) scale(0.15)`, opacity: 0.1 }
  ]

  const timing: KeyframeAnimationOptions = {
    duration: 600,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    fill: 'forwards'
  }

  await (ghost as any).animate(keyframes, timing).finished.catch(() => {})
  ghost.remove()

  // Trigger sparkle pulse on the cart badge when the image lands
  try {
    target.classList.add('sparkle')
    setTimeout(() => target.classList.remove('sparkle'), 700)
  } catch {}
}
