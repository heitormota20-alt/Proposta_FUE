import { useEffect, useRef, useState } from 'react'
import styles from './Slide04Jornada.module.css'
import GradientOrb from '../components/GradientOrb'
import Grainient from '../components/Grainient'
import { CountUp } from '../hooks/useCountUp.jsx'

export default function Slide04Jornada() {
  const sectionRef = useRef(null)
  // Trava em true assim que o usuário entra no slide — o big number só
  // dispara a contagem a partir daqui, nunca antes (ex: durante o scroll).
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setEntered(true)
      },
      { threshold: 0.45 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`slide ${styles.slide}`}>
      <div className={styles.grainientBg}>
        <Grainient
          color1="#15bc85"
          color2="#000000"
          color3="#79e8c3"
          timeSpeed={0.25}
          warpStrength={1.0}
          warpFrequency={5.0}
          warpSpeed={2.0}
          warpAmplitude={50.0}
          contrast={1.5}
          grainAmount={0.1}
          zoom={0.9}
        />
      </div>
      <img
        src="/images/Slide_04/Rafa.webp"
        alt=""
        className={styles.bg}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>Uma jornada de dedicação, coragem e grandes resultados</span>

        <div className={styles.statBlock}>
          <div className={styles.statNumber}>
            +R$<CountUp target={20} suffix=" Mi" duration={2000} active={entered} />
          </div>
          <p className={styles.statDesc}>
            Saiu de <strong>4 pacientes em Setembro de 2023</strong> para um faturamento de{' '}
            <span className={styles.accent}>+R$20 Milhões</span> nos últimos 12 meses.
          </p>
        </div>

        <div className={styles.divider} />

        <p className={styles.context}>
          Do absoluto zero à referência nacional em Transplante Capilar.
        </p>
      </div>
    </section>
  )
}
