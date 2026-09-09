import { useEffect, useRef, useState } from 'react'
import styles from './Slide03Quem.module.css'
import GradientOrb from '../components/GradientOrb'

const events = [
  {
    period: 'Natural de',
    title: 'Vitória / ES',
    desc: 'Formado em Engenharia de Produção.',
  },
  {
    period: 'Formado em',
    title: 'Engenharia de Produção',
    desc: '',
  },
  {
    period: 'Desistiu de um estágio de Engenharia na',
    title: 'Alemanha',
    desc: 'para cursar Medicina.',
  },
  {
    period: 'Se mudou para São Paulo para fazer',
    title: 'residência médica',
    desc: 'com foco em Cirurgia Plástica.',
  },
  {
    period: 'Conheceu a área de',
    title: 'Transplante Capilar',
    desc: 'como indicação do Chefe de Residência.',
  },
]

export default function Slide03Quem() {
  const sectionRef = useRef(null)
  const hasVisited = useRef(false)
  const [phase, setPhase] = useState('idle')

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasVisited.current = true
          setPhase('in')
        } else if (hasVisited.current) {
          setPhase('out')
        }
      },
      { threshold: 0.45 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`slide ${styles.slide}`}>
      <GradientOrb variant="teal" size={700} top="-25%" left="-10%" opacity={0.15} />
      <GradientOrb variant="teal" size={500} bottom="-20%" right="-5%" opacity={0.1} />

      <div className={styles.inner}>

        {/* Cabeçalho centrado */}
        <div className={`${styles.header} ${styles[`header_${phase}`]}`}>
          <h2 className={styles.title}>
            Quem é o <em className={styles.accent}>Dr. Rafael Ultramar?</em>
          </h2>
          <p className={styles.subtitle}>
            De Engenheiro a Médico de sucesso e referência em{' '}
            <strong>Transplante Capilar</strong> no Brasil.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>

          {/* Fotos — protagonistas */}
          <div className={styles.photosRow}>
            {events.map((e, i) => (
              <div
                key={i}
                className={`${styles.photoCell} ${styles[`photo_${phase}`]}`}
                style={{ '--delay': `${i * 110 + 120}ms` }}
              >
                <div className={styles.photo}>
                  <span className={styles.photoLabel}>FOTO</span>
                </div>
              </div>
            ))}
          </div>

          {/* Linha + dots */}
          <div className={styles.lineRow}>
            <div className={styles.lineBar}>
              <div className={`${styles.lineFill} ${phase === 'in' ? styles.lineFillIn : ''}`} />
            </div>
            {events.map((_, i) => (
              <div key={i} className={styles.dotCell}>
                <div
                  className={`${styles.dot} ${styles[`dot_${phase}`]}`}
                  style={{ '--delay': `${i * 110 + 550}ms` }}
                />
              </div>
            ))}
          </div>

          {/* Textos */}
          <div className={styles.textsRow}>
            {events.map((e, i) => (
              <div
                key={i}
                className={`${styles.textCell} ${styles[`text_${phase}`]}`}
                style={{ '--delay': `${i * 110 + 700}ms` }}
              >
                <span className={styles.period}>{e.period}</span>
                <p className={styles.eventTitle}>{e.title}</p>
                {e.desc && <p className={styles.eventDesc}>{e.desc}</p>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
