import { useEffect, useRef } from 'react'

const SEEKABLE_TAIL = 1 / 30
const SEEK_EPSILON  = 1 / 1000
const WATCHDOG_MS   = 400

const clamp01 = (n) => Math.min(1, Math.max(0, n))

/**
 * Controla video.currentTime via posição horizontal do mouse.
 *
 * @param {React.RefObject<HTMLVideoElement>} videoRef
 * @param {{ mapping?: 'absolute'|'relative', sensitivity?: number, restAt?: 'center'|'start' }} opts
 */
export function useVideoScrub(videoRef, { mapping = 'absolute', sensitivity = 0.8, restAt = 'center' } = {}) {
  const optsRef = useRef({ mapping, sensitivity, restAt })
  optsRef.current = { mapping, sensitivity, restAt }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let prevX       = null
    let desiredFrac = null
    let desiredTime = null
    let locked      = false
    let watchdog    = undefined

    const clearWatchdog = () => {
      if (watchdog !== undefined) { clearTimeout(watchdog); watchdog = undefined }
    }

    const seekableRange = () => {
      const s = video.seekable
      if (!s || s.length === 0) return null
      const start = s.start(0)
      const end   = s.end(s.length - 1) - SEEKABLE_TAIL
      if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return null
      return { start, end }
    }

    const resolveTarget = (range) => {
      const { mapping: mode, sensitivity: sens } = optsRef.current
      if (mode === 'absolute') {
        if (desiredFrac === null) return null
        const full   = range.end - range.start
        const span   = full * sens
        const offset = (full - span) / 2
        return range.start + offset + clamp01(desiredFrac) * span
      }
      return desiredTime
    }

    const requestSeek = () => {
      if (locked) return
      if (video.readyState < 1) return
      const range  = seekableRange()
      if (!range)  return
      const wanted = resolveTarget(range)
      if (wanted === null) return
      const next = Math.min(range.end, Math.max(range.start, wanted))
      if (Math.abs(video.currentTime - next) < SEEK_EPSILON) return

      locked = true
      clearWatchdog()
      watchdog = setTimeout(() => { locked = false; watchdog = undefined; requestSeek() }, WATCHDOG_MS)
      video.currentTime = next
    }

    const onSeeked = () => { clearWatchdog(); locked = false; requestSeek() }

    const applyPointer = (clientX) => {
      const width = window.innerWidth
      if (!width) return
      const { mapping: mode, sensitivity: sens } = optsRef.current

      if (mode === 'absolute') {
        desiredFrac = clamp01(clientX / width)
        requestSeek()
        return
      }
      if (prevX === null) { prevX = clientX; return }
      const delta     = clientX - prevX
      prevX           = clientX
      const step      = (delta / width) * sens * video.duration
      const candidate = (desiredTime ?? 0) + step
      if (!Number.isFinite(candidate)) return
      desiredTime = candidate
      requestSeek()
    }

    const onMouseMove  = (e) => applyPointer(e.clientX)
    const onTouchMove  = (e) => { const t = e.touches[0]; if (t) applyPointer(t.clientX) }
    const reanchor     = () => { prevX = null }

    const onLoadedMetadata = () => {
      const { restAt: rest } = optsRef.current
      const d = video.duration
      if (rest === 'center') {
        desiredFrac = 0.5
        if (Number.isFinite(d)) desiredTime = d / 2
      } else {
        desiredFrac = 0
        desiredTime = 0
      }
      requestSeek()
    }

    const onProgress      = () => { if (!locked) requestSeek() }
    const onResetPending  = () => { clearWatchdog(); locked = false }

    window.addEventListener('mousemove',   onMouseMove)
    window.addEventListener('touchmove',   onTouchMove, { passive: true })
    window.addEventListener('blur',        reanchor)
    window.addEventListener('touchend',    reanchor)
    window.addEventListener('touchcancel', reanchor)
    document.addEventListener('mouseleave', reanchor)

    video.addEventListener('loadedmetadata', onLoadedMetadata)
    video.addEventListener('seeked',         onSeeked)
    video.addEventListener('progress',       onProgress)
    video.addEventListener('canplay',        onProgress)
    video.addEventListener('loadeddata',     onProgress)
    video.addEventListener('emptied',        onResetPending)
    video.addEventListener('error',          onResetPending)
    video.addEventListener('abort',          onResetPending)
    video.addEventListener('loadstart',      onResetPending)

    if (video.readyState >= 1) onLoadedMetadata()

    return () => {
      clearWatchdog()
      window.removeEventListener('mousemove',   onMouseMove)
      window.removeEventListener('touchmove',   onTouchMove)
      window.removeEventListener('blur',        reanchor)
      window.removeEventListener('touchend',    reanchor)
      window.removeEventListener('touchcancel', reanchor)
      document.removeEventListener('mouseleave', reanchor)

      video.removeEventListener('loadedmetadata', onLoadedMetadata)
      video.removeEventListener('seeked',         onSeeked)
      video.removeEventListener('progress',       onProgress)
      video.removeEventListener('canplay',        onProgress)
      video.removeEventListener('loadeddata',     onProgress)
      video.removeEventListener('emptied',        onResetPending)
      video.removeEventListener('error',          onResetPending)
      video.removeEventListener('abort',          onResetPending)
      video.removeEventListener('loadstart',      onResetPending)
    }
  }, [videoRef])
}
