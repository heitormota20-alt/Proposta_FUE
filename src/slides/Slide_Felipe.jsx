import { useRef, useEffect } from 'react'
import styles from './Slide_Felipe.module.css'
import GradientBlinds from '../components/GradientBlinds'

export default function SlideFelipe() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) video.pause()
      },
      { threshold: 0.6 }
    )
    io.observe(section)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`slide ${styles.slide}`}>
      <div className={styles.grainientBg}>
        <GradientBlinds
          gradientColors={['#10B981', '#10B981']}
          color1="#10B981"
          color2="#10B981"
          angle={0}
          noise={0.3}
          blindCount={28}
          blindMinWidth={22}
          spotlightRadius={0.35}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            Veja como foi<br /><em className={styles.accent}>o primeiro dia</em>
          </h1>
          <span className={styles.tagline}>Da última turma</span>
        </div>

        <div className={styles.right}>
          <video
            ref={videoRef}
            className={styles.video}
            src="/images/Slide_11/video.mp4"
            controls
            playsInline
            preload="metadata"
            onClick={(e) => {
              const v = e.currentTarget
              v.paused ? v.play().catch(() => {}) : v.pause()
            }}
          />
        </div>
      </div>
    </section>
  )
}
