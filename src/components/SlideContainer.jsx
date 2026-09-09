import { useEffect, useRef, useCallback } from 'react'

export default function SlideContainer({ children, onSlideChange, totalSlides }) {
  const trackRef = useRef(null)
  const currentSlide = useRef(0)

  const goToSlide = useCallback((index) => {
    const track = trackRef.current
    if (!track) return
    const slides = track.querySelectorAll('.slide')
    if (index < 0 || index >= slides.length) return
    slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    currentSlide.current = index
    onSlideChange?.(index)
  }, [onSlideChange])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goToSlide(currentSlide.current + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goToSlide(currentSlide.current - 1)
      }
    }

    const handleScroll = () => {
      const scrollLeft = track.scrollLeft
      const slideWidth = track.clientWidth
      const index = Math.round(scrollLeft / slideWidth)
      if (index !== currentSlide.current) {
        currentSlide.current = index
        onSlideChange?.(index)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    track.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      track.removeEventListener('scroll', handleScroll)
    }
  }, [goToSlide, onSlideChange])

  return (
    <div ref={trackRef} className="slides-track">
      {children}
    </div>
  )
}
