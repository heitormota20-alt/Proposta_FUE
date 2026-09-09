import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, duration = 1800, trigger = true) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed  = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }

    requestAnimationFrame(tick)
  }, [target, duration, trigger])

  return count
}

export function CountUp({ prefix = '', target, suffix = '', duration = 1800, decimals = 0, active }) {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)
  // Quando `active` é controlado externamente (ex: mesmo observer que dispara
  // a entrada do slide), ele manda; caso contrário usa o observer próprio.
  const shouldTrigger = active !== undefined ? active : triggered
  const count = useCountUp(target, duration, shouldTrigger)

  useEffect(() => {
    if (active !== undefined) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [active])

  const formatted = decimals > 0 ? count.toFixed(decimals) : count

  return <span ref={ref}>{prefix}{formatted}{suffix}</span>
}
