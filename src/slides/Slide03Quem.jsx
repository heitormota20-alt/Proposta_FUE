import { useEffect, useRef, useState } from 'react'
import styles from './Slide03Quem.module.css'
import GradientOrb from '../components/GradientOrb'
import GradientBlinds from '../components/GradientBlinds'

const events = [
  {
    period: 'Natural de',
    title: 'Vitória / ES',
    desc: 'Formado em Engenharia de Produção.',
    photo: '/images/Slide_03/Img-01.png',
  },
  {
    period: 'Formado em',
    title: 'Engenharia de Produção',
    desc: '',
    photo: '/images/Slide_03/Img-02.png',
  },
  {
    period: 'Desistiu de um estágio de Engenharia na',
    title: 'Alemanha',
    desc: 'para cursar Medicina.',
    photo: '/images/Slide_03/Img-03.png',
  },
  {
    period: 'Se mudou para São Paulo para fazer',
    title: 'residência médica',
    desc: 'com foco em Cirurgia Plástica.',
    photo: '/images/Slide_03/Img-04.jpg',
  },
  {
    period: 'Conheceu a área de',
    title: 'Transplante Capilar',
    desc: 'como indicação do Chefe de Residência.',
    photo: '/images/Slide_03/Img-05.png',
  },
]

// Total de etapas da timeline — usado pelo App para saber quando parar
// de revelar fotos e voltar a avançar de slide.
export const SLIDE03_STEPS = events.length

export default function Slide03Quem({ revealedUpTo = -1, onReveal }) {
  const sectionRef = useRef(null)
  const hasVisited = useRef(false)
  const [phase, setPhase] = useState('idle')

  // Dots continuam clicáveis como atalho, mas o fluxo principal é a seta
  // de avançar (controlada pelo App) — sem blur, a foto só aparece.
  const reveal = (i) => onReveal?.(i)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.45) {
          hasVisited.current = true
          setPhase('in')
        } else if (entry.intersectionRatio < 0.05 && hasVisited.current) {
          setPhase('out')
        }
      },
      { threshold: [0, 0.05, 0.45, 1] }
    )
    io.observe(el)
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

          {/* Fotos — protagonistas, aparecem uma a uma ao avançar */}
          <div className={styles.photosRow}>
            {events.map((e, i) => {
              const isRevealed = i <= revealedUpTo
              return (
                <div
                  key={i}
                  className={`${styles.photoCell} ${i <= revealedUpTo ? styles.photo_in : styles.photo_idle}`}
                  style={{ '--delay': '0ms' }}
                >
                  <div className={`${styles.photo} ${isRevealed ? styles.photoRevealed : styles.photoLocked}`}>
                    <img
                      src={e.photo}
                      alt={e.title}
                      className={styles.photoImg}
                      loading="lazy"
                      style={i === 3 ? { objectPosition: 'right center', transform: 'scale(1.35)', transformOrigin: 'right center' } : undefined}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Linha + dots */}
          <div className={styles.lineRow}>
            <div className={styles.lineBar}>
              <div
                className={styles.lineFill}
                style={{ width: phase === 'idle' ? '0%' : `${((revealedUpTo + 1) / events.length) * 100}%` }}
              />
            </div>
            {events.map((_, i) => {
              const isRevealed = i <= revealedUpTo
              return (
                <div key={i} className={styles.dotCell}>
                  <button
                    type="button"
                    className={`${styles.dot} ${styles[`dot_${phase}`]} ${isRevealed ? styles.dotRevealed : ''}`}
                    style={{ '--delay': `${i * 110 + 550}ms` }}
                    onClick={() => reveal(i)}
                    aria-label={`Revelar etapa ${i + 1}`}
                    aria-pressed={isRevealed}
                  />
                </div>
              )
            })}
          </div>

          {/* Textos */}
          <div className={styles.textsRow}>
            {events.map((e, i) => (
              <div
                key={i}
                className={`${styles.textCell} ${i <= revealedUpTo ? styles.text_in : styles.text_idle}`}
                style={{ '--delay': '80ms' }}
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
