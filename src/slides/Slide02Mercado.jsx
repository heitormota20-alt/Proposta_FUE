import { useEffect, useRef, useState } from 'react'
import styles from './Slide02Mercado.module.css'
import GradientOrb from '../components/GradientOrb'
import ParticleField from '../components/ParticleField'
import { CountUp } from '../hooks/useCountUp.jsx'

function LogoValor() {
  return (
    <div className={styles.logoValor}>
      <span className={styles.valorEco}>econômico</span>
      <span className={styles.valorText}>Valor</span>
    </div>
  )
}

function LogoTerra() {
  return (
    <div className={styles.logoTerra}>
      <span className={styles.terraText}>terra</span>
      <svg viewBox="0 0 20 20" width="16" height="16" className={styles.terraOrb}>
        <defs>
          <radialGradient id="tg" cx="38%" cy="38%" r="62%">
            <stop offset="0%"   stopColor="#FFB020" />
            <stop offset="45%"  stopColor="#FF5500" />
            <stop offset="100%" stopColor="#C80000" />
          </radialGradient>
        </defs>
        <circle cx="10" cy="10" r="9" fill="url(#tg)" />
      </svg>
    </div>
  )
}

const cards = [
  {
    logo:   <LogoValor />,
    prefix: 'R$ ',
    number: 35,
    suffix: 'bi',
    label:  'Faturamento mundial em 2024',
    quote:  'O mercado de transplante capilar registrou um faturamento mundial bruto de 35 bilhões de reais em 2024 — crescimento de 15% ao ano.',
  },
  {
    logo:   <LogoTerra />,
    prefix: '',
    number: 42,
    suffix: ' mi',
    label:  'Brasileiros com queda de cabelo',
    quote:  'Mais de 42 Milhões de brasileiros (entre homens e mulheres) sofrem com queda de cabelo.',
  },
  {
    logo:   <LogoValor />,
    prefix: '+',
    number: 21,
    suffix: '%',
    label:  'Crescimento previsto até 2032',
    quote:  'A previsão de crescimento do mercado é de 21% até 2032, alcançando 220,2 bilhões de reais.',
  },
]

export default function Slide02Mercado() {
  const sectionRef = useRef(null)
  const hasVisited = useRef(false)
  const [phase, setPhase] = useState('idle') // 'idle' | 'in' | 'out'

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
      <ParticleField count={55} connectDist={140} />
      <GradientOrb variant="teal" size={500} top={-160} right={-120} opacity={0.22} />
      <GradientOrb variant="teal" size={300} bottom={-80} left={-60}  opacity={0.15} />

      <div className={styles.inner}>

        <div className={`${styles.heading} ${styles[`heading_${phase}`]}`}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>Mercado</span>
            <span className={styles.eyebrowLine} />
          </div>
          <h2 className={styles.title}>
            Afinal, qual é o tamanho desse mercado?
          </h2>
          <p className={styles.subtitle}>
            E quanto ele tem{' '}
            <span className={styles.accentText}>crescido a cada ano?</span>
          </p>
        </div>

        <div className={styles.cards}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${styles.card} ${styles[`card_${phase}`]}`}
              style={{ '--delay': `${i * 120 + 180}ms` }}
            >
              <div className={styles.cardStat}>
                <CountUp
                  prefix={card.prefix}
                  target={card.number}
                  suffix={card.suffix}
                  duration={1600}
                />
              </div>
              <p className={styles.cardStatLabel}>{card.label}</p>
              <hr className={styles.cardDivider} />
              <p className={styles.cardQuote}>"{card.quote}"</p>
              <div className={styles.cardLogo}>{card.logo}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
